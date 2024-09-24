// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Welcome to the HTTP Course!</h1>');
});
const server1 = http.createServer((req, res) => {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: '404 Not Found', message: 'Resource not found' }));
  });

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
server1.listen(3001, () => {
    console.log('Server is running on http://localhost:30001');
});
