const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const htmlPath = path.join(__dirname, 'index.html');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Check if static file requested
  if (pathname !== '/' && pathname !== '/index.html') {
    const publicPath = path.join(__dirname, 'public', pathname);
    const rootPath = path.join(__dirname, pathname);
    const targetPath = fs.existsSync(publicPath) ? publicPath : (fs.existsSync(rootPath) ? rootPath : null);

    if (targetPath && fs.statSync(targetPath).isFile()) {
      const ext = path.extname(targetPath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      fs.createReadStream(targetPath).pipe(res);
      return;
    }
  }

  // Otherwise serve index.html
  fs.readFile(htmlPath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error loading index.html: ' + err.message);
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Original index.html is running at http://localhost:${PORT}`);
});
