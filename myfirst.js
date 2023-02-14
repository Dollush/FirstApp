

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<br/><br/>');
    res.write('Hello World!');
    res.write('<br/><br/>');
    res.write('<img src="/img/ais_images.gif" alt="Image AIS"/>');
    res.write('<br/><br/>');
    res.write('End World!');
    res.end();
  }).listen(8080);