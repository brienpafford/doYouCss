var http    = require('http');
var https   = require('https');
var path    = require('path');
// var log     = require('.logger')
var request = require('request');
var cheerio = require('cheerio');

// var log = require(path.join(process.cwd(), '/lib/printlog'));

module.exports = function(port) {
  http.createServer(function(req, res){
      var ua =  req.headers['user-agent']
      request.put('http://www.useragentstring.com/?uas=' + ua + '&getJSON=all', function(err, xhr, body){
        var data = JSON.parse(body)
        var aname = data['agent_name']
        var avers = data['agent_version']
        console.log(aname, avers)
        })



    // Flexbox request

    if (req.method === 'GET' && req.url === '/flexbox') {

      res.writeHeader(200, {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : '*'
      });

      http.get('http://caniuse.com/#search=flexbox')
        .on('response', function (xhr) {
          xhr.pipe(res);
          console.log(res)
        });
        // log(req, res);
    }

    // Border Radius Request

    else if (req.method === 'GET' && req.url === '/border-radius') {

      res.writeHeader(200, {
        'Content-Type' : 'application/json',
        'Acces-Control-Allow-Origin': '*'
      });

      http.get('http://caniuse.com/#search=border-radius')
        .on('response', function (xhr) {
          // xhr.pipe(res);
        });
        // log(req, res);
    }

    // CSS3 Transition request

    else if (req.method === 'GET' && req.url === '/transition') {

      res.writeHeader(200, {
        'Content-Type' : 'application/json',
        'Acces-Control-Allow-Origin': '*'
      });

      http.get('http://caniuse.com/#search=transition')
        .on('response', function (xhr) {
          // xhr.pipe(res);
        });
        // log(req, res);
    }

    else {
      res.writeHead(403);
      res.end('Access Denied!\n')
    }

    // console.log(log(req, res));


  }).listen(port);
}
