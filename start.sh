#!/bin/bash

# Lazarus Industrial Group - Local Development Server
# Quick start script for local development

echo "🏭 Lazarus Industrial Group - Development Server"
echo "=============================================="
echo "Starting local development server..."
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "✅ Python 3 found"
    python3 server.py
elif command -v python &> /dev/null; then
    echo "✅ Python found"
    python server.py
else
    echo "❌ Python not found. Please install Python 3"
    echo ""
    echo "Alternative: Use any HTTP server of your choice"
    echo "Examples:"
    echo "  - Live Server (VS Code extension)"
    echo "  - http-server (npm install -g http-server)"
    echo "  - php -S localhost:8000"
    echo "  - ruby -run -e httpd . -p 8000"
    exit 1
fi

