/**
 * GOAN Web Server (Zero-Dependency Node.js Server)
 * Dá»… dÃ ng cháº¡y cá»¥c bá»™ vÃ  deploy trá»±c tiáº¿p lÃªn Render.com (Web Service / Static)
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Xá»­ lÃ½ cÃ¡c route máº·c Ä‘á»‹nh
  if (pathname === '/' || pathname === '/login') {
    pathname = '/index.html';
  } else if (pathname === '/pos') {
    pathname = '/goan-pos.html';
  } else if (!path.extname(pathname)) {
    // Náº¿u truy cáº­p khÃ´ng Ä‘uÃ´i má»Ÿ rá»™ng, kiá»ƒm tra xem cÃ³ file .html tÆ°Æ¡ng á»©ng khÃ´ng
    if (fs.existsSync(path.join(ROOT_DIR, pathname + '.html'))) {
      pathname += '.html';
    }
  }

  const safePath = path.normalize(path.join(ROOT_DIR, pathname));

  // Báº£o vá»‡ chá»‘ng path traversal
  if (!safePath.startsWith(ROOT_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(safePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback vá» index.html náº¿u khÃ´ng tÃ¬m tháº¥y file
      const indexPath = path.join(ROOT_DIR, 'index.html');
      fs.readFile(indexPath, (readErr, content) => {
        if (readErr) {
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('404 Not Found');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(content);
        }
      });
      return;
    }

    const ext = path.extname(safePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Äáº·t cache cho áº£nh tÄ©nh
    const headers = { 'Content-Type': contentType };
    if (['.jpg', '.jpeg', '.png', '.svg', '.webp', '.ico'].includes(ext)) {
      headers['Cache-Control'] = 'public, max-age=86400';
    }

    res.writeHead(200, headers);
    fs.createReadStream(safePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`=============================================`);
  console.log(`ðŸš€ GOAN Web Server Ä‘ang cháº¡y táº¡i:`);
  console.log(`ðŸ‘‰ http://localhost:${PORT}`);
  console.log(`ðŸ‘‰ ÄÄƒng nháº­p: http://localhost:${PORT}/goan-login.html`);
  console.log(`ðŸ‘‰ BÃ¡n hÃ ng POS: http://localhost:${PORT}/goan-pos.html`);
  console.log(`=============================================`);
});

