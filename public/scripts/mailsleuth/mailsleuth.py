import argparse
import json
import os
import sys
import subprocess
from rich.console import Console
from rich.table import Table
from rich.panel import Panel
from googlesearch import search
import requests
import time
# Enable recording to save the output later
console = Console(record=True)

def load_config(config_path):
    if not os.path.exists(config_path):
        console.print(f"[yellow]Config file {config_path} not found. Running with default settings.[/yellow]")
        return {"modules": {"run_holehe": True, "run_dorks": True}}
    with open(config_path, "r") as f:
        return json.load(f)

def run_pastebin_dorks(email):
    console.print(f"[cyan]Searching paste sites via Google Dorks for {email}...[/cyan]")
    query = f'site:pastebin.com OR site:pastee.org "{email}"'
    results = []
    try:
        # googlesearch-python usage
        for url in search(query, num_results=10):
            results.append(url)
    except Exception as e:
        console.print(f"[red]Error performing dork search: {e}[/red]")
    return results

def run_intelx(email, api_key):
    if not api_key:
        return []
    
    console.print(f"[cyan]Searching IntelX for {email}...[/cyan]")
    heads = {"x-key": api_key, "User-Agent": "MailSleuth OSINT Tool"}
    try:
        # 1. Initiate search
        payload = {"term": email, "maxresults": 10, "media": 0, "sort": 2}
        
        endpoints = ["https://free.intelx.io", "https://public.intelx.io", "https://2.intelx.io"]
        init_req = None
        base_url = ""
        
        for ep in endpoints:
            init_req = requests.post(f"{ep}/intelligent/search", headers=heads, json=payload, timeout=10)
            if init_req.status_code not in [401, 402]:
                base_url = ep
                break
                
        if not base_url or init_req.status_code in [401, 402]:
             console.print(f"[red]IntelX API Key invalid or out of credits on all endpoints (Status {init_req.status_code}).[/red]")
             return []
             
        init_req.raise_for_status()
        search_id = init_req.json().get("id")
        
        if not search_id:
            return []

        # 2. Poll for results 
        time.sleep(1.5) # Give IntelX time to fetch results
        res_req = requests.get(f"{base_url}/intelligent/search/result", headers=heads, params={"id": search_id, "limit": 10}, timeout=10)
        res_req.raise_for_status()
        
        records = res_req.json().get("records", [])
        hits = []
        for rec in records:
            name = rec.get("name", "Unknown File")
            bucket = rec.get("bucket", "")
            hits.append(f"Bucket: {bucket} | File: {name}")
            
        return hits
    except Exception as e:
        console.print(f"[red]IntelX search failed: {e}[/red]")
        return []

def run_local_db_search(email, db_path):
    if not os.path.exists(db_path):
        console.print(f"[yellow]Local DB path '{db_path}' not found.[/yellow]")
        return []
    
    console.print(f"[cyan]Searching local database at {db_path} via ripgrep...[/cyan]")
    output_filename = f"db_hits_{email.replace('@', '_at_')}.txt"
    try:
        rg_exe = "rg"
        if os.name == "nt":
            local_appdata = os.environ.get("LOCALAPPDATA", "")
            winget_rg = os.path.join(local_appdata, "Microsoft", "WindowsApps", "rg.exe")
            if os.path.exists(winget_rg):
                rg_exe = winget_rg

        rg_cmd = f'"{rg_exe}" -F "{email}" "{db_path}"'
        with open(output_filename, "w", encoding="utf-8") as outfile:
            ps = subprocess.run(rg_cmd, stdout=outfile, stderr=subprocess.DEVNULL, shell=True)
            
        # Fallback to findstr on Windows if rg failed and file is empty
        if os.name == "nt" and os.path.getsize(output_filename) == 0 and ps.returncode != 0:
            console.print("[yellow]ripgrep failed or missing, falling back to findstr (slower)...[/yellow]")
            os.system(f'findstr /S /I /C:"{email}" "{db_path}\\*.*" > "{output_filename}"')
        
        # Read the first 20 lines from the saved file
        lines = []
        if os.path.exists(output_filename):
            with open(output_filename, "r", encoding="utf-8", errors="ignore") as infile:
                for _ in range(20):
                    line = infile.readline()
                    if not line:
                        break
                    if line.strip():
                        lines.append(line.strip())
        
        console.print(f"[green]Local DB search complete. All hits saved to: {output_filename}[/green]")
        return lines
    except Exception as e:
        console.print(f"[red]Error performing local DB search: {e}[/red]")
        return []


def run_holehe_subprocess(email):
    console.print(f"[cyan]Running holehe for {email}...[/cyan]")
    try:
        # Dynamically locate holehe executable relative to current python runtime (venv)
        bin_dir = os.path.dirname(sys.executable)
        holehe_cmd = os.path.join(bin_dir, "holehe.exe" if os.name == "nt" else "holehe")
        
        # Run holehe and capture the output
        result = subprocess.run([holehe_cmd, email, "--only-used", "--no-color"], capture_output=True, text=True)
        return result.stdout
    except Exception as e:
        console.print(f"[red]Error running holehe (make sure it's installed): {e}[/red]")
        return ""

def main():
    parser = argparse.ArgumentParser(description="MailSleuth OSINT Automation Tool")
    parser.add_argument("--target", required=True, help="Target email address")
    parser.add_argument("--config", default="config.json", help="Path to config JSON")
    parser.add_argument("--report", choices=["text", "html", "none"], default="text", help="Format for the output report")
    args = parser.parse_args()

    console.print(Panel(f"[bold magenta]MailSleuth[/bold magenta] starting for target: [bold white]{args.target}[/bold white]"))
    
    config = load_config(args.config)
    modules = config.get("modules", {"run_holehe": True, "run_dorks": True})

    dork_results = []
    if modules.get("run_dorks", True):
        dork_results = run_pastebin_dorks(args.target)
    
    holehe_results = ""
    if modules.get("run_holehe", True):
        holehe_results = run_holehe_subprocess(args.target)

    local_db_results = []
    if modules.get("run_local_db", False):
        db_path = config.get("local_db", {}).get("path", "")
        if db_path:
            local_db_results = run_local_db_search(args.target, db_path)
        else:
            console.print("[yellow]run_local_db enabled but no local_db path configured.[/yellow]")

    # IntelX integration
    intelx_results = []
    intelx_key = config.get("api_keys", {}).get("intelx", "")
    if intelx_key:
        intelx_results = run_intelx(args.target, intelx_key)

    # Printing Results
    console.print("\n[bold green]=== Analysis Complete ===[/bold green]")
    
    if dork_results:
        table = Table(title="Exposed Pastebin URLs")
        table.add_column("URL", style="blue")
        for url in dork_results:
            table.add_row(url)
        console.print(table)
    else:
        console.print("[yellow]No pastebin exposures found via Dorks.[/yellow]")

    console.print("\n[bold cyan]Account Enumeration Results (Holehe):[/bold cyan]")
    if holehe_results:
        # Basic parsing to grab only the positive results
        lines = [line.strip() for line in holehe_results.split('\n') if "[+]" in line]
        if lines:
            acc_table = Table(title="Registered Accounts Found")
            acc_table.add_column("Platform", style="magenta")
            for line in lines:
                platform = line.replace("[+]", "").strip()
                acc_table.add_row(platform)
            console.print(acc_table)
        else:
            console.print("[yellow]No registered accounts found via holehe.[/yellow]")
    else:
         console.print("[red]Holehe did not run or returned no results.[/red]")

    console.print("\n[bold cyan]Local Database Results:[/bold cyan]")
    if local_db_results:
        db_table = Table(title="Exposed Database Hits (First 20)")
        db_table.add_column("Hit Output", style="red")
        for line in local_db_results:
            # We crop extremely long lines to avoid screen wrap explosion, just roughly length 120
            db_table.add_row(line[:120] + "..." if len(line) > 120 else line)
        console.print(db_table)
        console.print("[italic]Check the db_hits file in this directory for the full result set![/italic]")
    elif modules.get("run_local_db", False):
        console.print("[yellow]No results found in local DB or search failed.[/yellow]")

    if intelx_key:
        console.print("\n[bold cyan]IntelX API Results:[/bold cyan]")
        if intelx_results:
            ix_table = Table(title="Dark Web & Paste Sites (IntelX)")
            ix_table.add_column("Location Hit", style="yellow")
            for hit in intelx_results:
                ix_table.add_row(hit)
            console.print(ix_table)
        else:
            console.print("[yellow]No IntelX records found for this target.[/yellow]")

    # Save the full terminal output to a log file
    if args.report != "none":
        report_filename = f"report_{args.target.replace('@', '_at_')}.{args.report}"
        if args.report == "html":
            console.save_html(report_filename)
        else:
            # save_text produces clean text output stripped of ANSI codes
            console.save_text(report_filename, clear=False)
        console.print(f"\n[bold green]Full terminal output saved to: {report_filename}[/bold green]")

if __name__ == "__main__":
    main()
