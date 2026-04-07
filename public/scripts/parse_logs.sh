#!/bin/bash
echo "Parsing logs for interesting artifacts..."
grep -E '(password|token|key)' access.log
