#!/usr/bin/env python3
"""
Simple HTTP server for Lazarus Industrial Group website development
Serves static files with proper MIME types and CORS headers
"""

import http.server
import socketserver
import os
import mimetypes
from urllib.parse import urlparse

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers for development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()
    
    def guess_type(self, path):
        """Override to handle SVG files properly"""
        mimetype, encoding = mimetypes.guess_type(path)
        if mimetype is None:
            if path.endswith('.svg'):
                return 'image/svg+xml'
        return mimetype
    
    def do_GET(self):
        """Handle GET requests with proper MIME types"""
        parsed_path = urlparse(self.path)
        path = parsed_path.path
        
        # Handle root path
        if path == '/':
            path = '/index.html'
        
        # Check if file exists
        file_path = os.path.join(os.getcwd(), path.lstrip('/'))
        if os.path.exists(file_path) and os.path.isfile(file_path):
            self.send_response(200)
            self.send_header('Content-Type', self.guess_type(file_path))
            self.end_headers()
            with open(file_path, 'rb') as f:
                self.wfile.write(f.read())
        else:
            self.send_error(404, "File not found")

def main():
    PORT = 8000
    
    print("🏭 Lazarus Industrial Group - Development Server")
    print("=" * 50)
    print(f"Server starting on http://localhost:{PORT}")
    print("Press Ctrl+C to stop the server")
    print("=" * 50)
    
    with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\nServer stopped. Goodbye! 👋")

if __name__ == "__main__":
    main()

