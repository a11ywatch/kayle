use clap::{Parser, Subcommand};
use std::ffi::OsString;
use std::process::Command;
mod puppeteer_script;

#[derive(Debug, Subcommand)]
enum Commands {
    /// Upgrade kayle and the dependencies required.
    #[command(arg_required_else_help = true)]
    Upgrade,
    /// Configure the audits.
    Configure,
    /// The kayle program.
    #[command(external_subcommand)]
    Kayle(Vec<OsString>),
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
    #[command(subcommand)]
    command: Commands,
}

fn main() {
    let args = Args::parse();

    match args.command {
        Commands::Configure => {
            println!("Configuration TODO");
        }
        Commands::Upgrade => {
            Command::new("npm")
                .args(["i", "kayle", "-g"])
                .status()
                .expect("Failed to execute command - npm install kayle command");
            Command::new("npm")
                .args(["i", "puppeteer", "-g"])
                .status()
                .expect("Failed to execute command - npm install puppeteer command");
        }
        Commands::Kayle(urls) => {
            let accessibility_standard = args.standard.unwrap_or_default();
            let include_warnings = args.include_warnings.unwrap_or_default();
            let include_notices = args.include_notices.unwrap_or_default();
            let runners = args.runners.unwrap_or_default().join(",");

            for u in urls.iter() {
                Command::new("node")
                .args([
                    "-e", 
                    puppeteer_script::SCRIPT_EXECUTION, 
                    u.to_str().unwrap(), 
                    &accessibility_standard, 
                    if include_notices { "true"} else { "false" },
                    if include_warnings { "true"} else { "false" },
                    &runners])
                .status()
                .expect("Failed to execute node command. Make sure puppeteer and node is installed.");
            }
        }
    }
}
