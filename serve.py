"""Small local server with SPA fallback for clean extension routes."""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlparse


class FallbackHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        requested_path = unquote(urlparse(self.path).path)
        local_path = Path(self.translate_path(requested_path))

        if not local_path.exists() and not Path(requested_path).suffix:
            self.path = "/index.html"

        super().do_GET()


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", 4173), FallbackHandler)
    print("Extension Hub running at http://127.0.0.1:4173")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
