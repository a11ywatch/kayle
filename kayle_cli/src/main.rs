use clap::{Parser, Subcommand, ValueEnum};
use std::{ffi::OsString, process::Command};
mod playwright_script;
mod puppeteer_script;

#[derive(Debug, Subcommand)]
enum Commands {
    /// Upgrade kayle and the dependencies required.
    Upgrade,
    /// Install kayle and the dependencies required.
    Install,
    /// Configure the audits.
    Configure,
    /// The kayle program.
    #[command(external_subcommand)]
    Kayle(Vec<OsString>),
}

/// Automation libraries to use.
#[derive(Debug, Default, Clone, PartialEq, ValueEnum)]
enum AutomationLib {
    #[default]
    /// The puppeteer library. Defaults to this.
    Puppeteer,
    /// The playwright library by microsoft
    Playwright,
}

/// Web Accessibility Auditing using the kayle engine
#[derive(Parser, Debug)]
#[command(version, about, long_about = None)]
struct Args {
    /// The accessibility standard to run, WCAG2A, WCAG2AA, WCAG2AAA, and Section508.
    #[arg(short, long)]
    standard: Option<String>,
    /// Include warnings in the audit.
    #[arg(long)]
    include_warnings: Option<bool>,
    /// Include notices in the audit.
    #[arg(long)]
    include_notices: Option<bool>,
    /// The accessibility runner to use htmlcs, axecore, or kayle.
    #[arg(short, long)]
    runners: Option<Vec<String>>,
    #[arg(long, value_enum)]
    /// The automation lib to use either puppeteer or playwright.
    automation_lib: Option<AutomationLib>,
    #[command(subcommand)]
    command: Commands,
}

fn main() {
    let args = Args::parse();
    let puppeteer = args.automation_lib.unwrap_or_default() == AutomationLib::Puppeteer;

    match args.command {
        Commands::Configure => {
            println!("Configuration TODO");
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
            let accessibility_standard = args.standard.unwrap_or_default();
            let include_warnings = args.include_warnings.unwrap_or_default();
            let include_notices = args.include_notices.unwrap_or_default();
            let runners = args.runners.unwrap_or_default().join(",");
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
                    &accessibility_standard, 
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
}
