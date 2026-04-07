#!/usr/bin/env python3
import sys
import ipaddress

def scan(subnet):
    print(f"Scanning {subnet}...")
    # Dummy scan script

if __name__ == '__main__':
    if len(sys.argv) > 1:
        scan(sys.argv[1])
    else:
        print("Usage: scan_subnet.py <CIDR>")
