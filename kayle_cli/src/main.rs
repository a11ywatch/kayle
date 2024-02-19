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
/// The CLI commands to run.
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
    /// The puppeteer library. The Default.
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
    /// get the runner to string
    pub fn to_str(&self) -> &'static str {
        match self {
            AccessibilityRunner::Kayle => "kayle",
            AccessibilityRunner::Htmlcs => "htmlcs",
            AccessibilityRunner::Axe => "axe",
        }
    }
}

/// Wait for events.
#[derive(Debug, Default, Clone, PartialEq, ValueEnum, Serialize, Deserialize)]
enum WaitFor {
    #[default]
    ///  Waits till the window load event.
    Load,
    /// The dom loaded content first
    DomcontentLoaded,
    /// Wait for the commit event. Playwright only.
    Commit,
    ///  Waits till there are no more network connections for at least 500 ms. Playwright only.
    NetworkIdle,
    /// Waits till there are no more network connections for at least 500 ms. Puppeteer only.
    NetworkIdle1,
    /// Waits till there are no more than 2 network connections for at least 500 ms. Puppeteer only.
    NetworkIdle2,
}

impl WaitFor {
    /// get the wait_for event to string
    pub fn to_str(&self, puppeteer: bool) -> &'static str {
        match self {
            WaitFor::Load => "load",
            WaitFor::DomcontentLoaded => "domcontentloaded",
            WaitFor::Commit => if puppeteer { "networkidle2" } else { "commit" },
            WaitFor::NetworkIdle => {
                if puppeteer {
                    "networkidle1"
                } else {
                    "networkidle"
                }
            }
            WaitFor::NetworkIdle1 => {
                if puppeteer {
                    "networkidle1"
                } else {
                    "networkidle"
                }
            }
            WaitFor::NetworkIdle2 => {
                if puppeteer {
                    "networkidle2"
                } else {
                    "networkidle"
                }
            }
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
    /// WaitFor event for content to exist.
    #[arg(short, long, value_enum)]
    wait_for: Option<WaitFor>,
    #[arg(long)]
    /// Allow images to render, useful when setting clip option for bounding box.
    allow_images: Option<bool>,
    #[arg(long)]
    /// Get the bounding box of an element.
    clip: Option<bool>,
    #[arg(long)]
    /// The directory to store clip images.
    clip_dir: Option<String>,
    #[arg(long)]
    /// Convert the clip to a base64 image.
    clip_2_base64: Option<bool>,
    #[arg(long, value_enum)]
    /// The automation lib to use either puppeteer or playwright.
    automation_lib: Option<AutomationLib>,
    /// The commands for the CLI.
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
            let wait_for = if args.wait_for.is_some() {
                args.wait_for
            } else {
                loaded_config.wait_for
            }
            .unwrap_or_default();

            let allow_images = if args.allow_images.is_some() {
                args.allow_images
            } else {
                loaded_config.allow_images
            }
            .unwrap_or_default();

            let clip = if args.clip.is_some() {
                args.clip
            } else {
                loaded_config.clip
            }
            .unwrap_or_default();

            let clip_dir = if args.clip_dir.is_some() {
                args.clip_dir
            } else {
                loaded_config.clip_dir
            }
            .unwrap_or_default();

            let clip_2_base64 = if args.clip_2_base64.is_some() {
                args.clip_2_base64
            } else {
                loaded_config.clip_2_base64
            }
            .unwrap_or_default();

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
                    &runners,
                    &wait_for.to_str(puppeteer),
                    if allow_images { "true"} else { "false" },
                    if clip { "true"} else { "false" },
                    &clip_dir,
                    if clip_2_base64 { "true"} else { "false" },

                ])
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
