use clap::{Parser, Subcommand, ValueEnum};
use std::{
    ffi::OsString,
    fs::File,
    io::{self, Read, Write},
    path::Path,
    process::Command,
};
mod playwright_script;
mod puppeteer_script;
use serde::{Deserialize, Serialize};

#[derive(Debug, Subcommand, Serialize, Deserialize)]
enum Commands {
    /// Upgrade kayle and the dependencies required.
    Upgrade,
    /// Install kayle and the dependencies required.
    Install,
    /// Configure the audit to disk to re-use across runs.
    Configure,
    /// The kayle program.
    #[command(external_subcommand)]
    Kayle(Vec<OsString>),
}

/// Automation libraries to use.
#[derive(Debug, Default, Clone, PartialEq, ValueEnum, Serialize, Deserialize)]
enum AutomationLib {
    #[default]
    /// The puppeteer library. Defaults to this.
    Puppeteer,
    /// The playwright library by microsoft
    Playwright,
}

/// Accessibility Standard.
#[derive(Debug, Default, Clone, PartialEq, ValueEnum, Serialize, Deserialize)]
enum AccessibilityStandard {
    /// WCAG2A
    WCAG2A,
    #[default]
    /// WCAG2AA
    WCAG2AA,
    /// WCAG2AAA
    WCAG2AAA,
    /// Section508
    Section508,
}

impl AccessibilityStandard {
    /// get the standard to string
    pub fn to_str(&self) -> &'static str {
        match self {
            AccessibilityStandard::WCAG2A => "WCAG2A",
            AccessibilityStandard::WCAG2AA => "WCAG2AA",
            AccessibilityStandard::WCAG2AAA => "WCAG2AAA",
            AccessibilityStandard::Section508 => "Section508",
        }
    }
}

/// Accessibility Runner.
#[derive(Debug, Default, Clone, PartialEq, ValueEnum, Serialize, Deserialize)]
enum AccessibilityRunner {
    /// Kayle
    Kayle,
    #[default]
    /// htmlcs
    Htmlcs,
    /// axe
    Axe,
}

impl AccessibilityRunner {
    /// get the standard to string
    pub fn to_str(&self) -> &'static str {
        match self {
            AccessibilityRunner::Kayle => "kayle",
            AccessibilityRunner::Htmlcs => "htmlcs",
            AccessibilityRunner::Axe => "axe",
        }
    }
}

/// Web Accessibility Auditing using the kayle engine
#[derive(Parser, Serialize, Deserialize, Debug)]
#[command(version, about, long_about = None)]
struct Args {
    /// The accessibility standard to run.
    #[arg(short, long, value_enum)]
    standard: Option<AccessibilityStandard>,
    /// Include warnings in the audit.
    #[arg(long)]
    include_warnings: Option<bool>,
    /// Include notices in the audit.
    #[arg(long)]
    include_notices: Option<bool>,
    /// The accessibility runner to use htmlcs, axecore, or kayle.
    #[arg(short, long)]
    runners: Option<Vec<AccessibilityRunner>>,
    #[arg(long, value_enum)]
    /// The automation lib to use either puppeteer or playwright.
    automation_lib: Option<AutomationLib>,
    #[command(subcommand)]
    command: Commands,
}

impl Args {
    /// Save  the configuration to a file
    fn save(&self, path: &Path) -> io::Result<()> {
        let json = serde_json::to_string_pretty(self)?;
        let mut file = File::create(path)?;
        file.write_all(json.as_bytes())?;
        Ok(())
    }
    /// Load the configuration from a file
    fn load(path: &Path) -> io::Result<Self> {
        if path.exists() {
            let mut file = File::open(path)?;
            let mut contents = String::new();
            file.read_to_string(&mut contents)?;
            let config = serde_json::from_str(&contents)?;
            Ok(config)
        } else {
            // re-use parse config
            Ok(Args::parse())
        }
    }
}

fn main() -> io::Result<()> {
    let args = Args::parse();

    let config_path = Path::new("kayle_config.json");
    let loaded_config = Args::load(config_path)?;
    let puppeteer = match args.automation_lib {
        Some(ref l) => l == &AutomationLib::Puppeteer,
        _ => match loaded_config.automation_lib {
            Some(ref l) => l == &AutomationLib::Puppeteer,
            _ => false,
        },
    };

    match args.command {
        Commands::Configure => {
            println!("Configuration saved!");
            args.save(config_path)?;
        }
        Commands::Upgrade | Commands::Install => {
            println!(
                "Installing kayle and {}...",
                if puppeteer { "puppeteer" } else { "playwright" }
            );
            Command::new("npm")
                .args(["i", "kayle", "-g"])
                .status()
                .expect("Failed to execute command - npm install kayle command");
            Command::new("npm")
                .args([
                    "i",
                    if puppeteer { "puppeteer" } else { "playwright" },
                    "-g",
                ])
                .status()
                .expect(if puppeteer {
                    "Failed to execute command - npm install puppeteer command"
                } else {
                    "Failed to execute command - npm install playwright command"
                });
        }
        Commands::Kayle(urls) => {
            let accessibility_standard = if args.standard.is_some() {
                args.standard
            } else {
                loaded_config.standard
            }
            .unwrap_or_default();
            let include_warnings = if args.include_warnings.is_some() {
                args.include_warnings
            } else {
                loaded_config.include_warnings
            }
            .unwrap_or_default();
            let include_notices = if args.include_notices.is_some() {
                args.include_notices
            } else {
                loaded_config.include_notices
            }
            .unwrap_or_default();
            let runners = if args.runners.is_some() {
                args.runners
            } else {
                loaded_config.runners
            }
            .unwrap_or_default()
            .iter()
            .map(|r| r.to_str())
            .collect::<Vec<&'static str>>()
            .join(",");

            let headless_script = if puppeteer {
                puppeteer_script::SCRIPT_EXECUTION
            } else {
                playwright_script::SCRIPT_EXECUTION
            };

            for u in urls.iter() {
                Command::new("node")
                .args([
                    "-e", 
                    headless_script,  
                    u.to_str().unwrap(), 
                    &accessibility_standard.to_str(), 
                    if include_notices { "true"} else { "false" },
                    if include_warnings { "true"} else { "false" },
                    &runners])
                .status()
                .expect(if puppeteer {
                    "Failed to execute node command - make sure node and puppeteer is installed."
                } else {
                    "Failed to execute node command - make sure node and playwright is installed."
                });
            }
        }
    }

    Ok(())
}
