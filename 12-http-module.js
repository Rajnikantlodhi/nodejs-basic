const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.end('Welcome to our home page with');
  }
  if(req.url === '/about'){
    res.end('Here is our history');
  }
  res.end(
    `<h1 style="text-align:center;color:red">Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
  `);
});

server.on('error', (err) => {
  console.error('Server Error:', err.message);
});

server.listen(7001, () => {
  console.log('Server running on port 7001');
});
