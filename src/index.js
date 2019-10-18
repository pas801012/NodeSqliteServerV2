// var sys = require("sys"),
// test
var url = require('url'),
  http = require('http'),
  qs = require('querystring');

var m = require('./modules/logParams.js');

console.log('params', m.AddNumber(2, 5));

http
  .createServer(function(req, res) {
    if (req.method == 'POST') {
      res.write('Post!');
      var body = '';
      req.on('data', function(data) {
        body += data;
      });
      req.on('end', function() {
        var POST = qs.parse(body);
        console.log(POST);
      });
    } else if (req.method == 'GET') {
      var url_parts = url.parse(req.url, true);
      res.write('Get!');
      var query = url_parts.query;
      var data = [
        query.sensor,
        parseInt(query.temperature, 10),
        parseInt(query.humidity, 10)
      ];
      console.log('data', data);
      if (!data.some(x => x == null)) {
        m.insertData(data);
      }
    }
    res.end(); //end the response
  })
  .listen(8080);
