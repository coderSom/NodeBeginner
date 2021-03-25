console.log('hello');
//create a server with node

var http = require('http');
//const { resolveSoa } = require('node:dns');
var url = require('url');
var fs = require('fs');

console.log('hello2');
http.createServer(function(req, res)
{
    //console.log(url.parse(req.url, true));
    var q= "." + url.parse(req.url, true).pathname;
    if(q == './') q = './index';
    q = q+".html";
    console.log(q);
    fs.readFile(q, function(err, data){
    
        if(err)
            {
                res.writeHead(404, {'Content-Type':'text/html'});
                return res.end("not found");
            }
        else{

            res.writeHead(200, {'Content-Type':'text/html'});
            //res.write(req.url);
            //var p = url.parse(req.url, true);
            /*console.log(p.hostname);
            console.log(p.pathname);
            var q = p.query;
            console.log(q.year);
            console.log(q.month);
            var yr = q.year;
                */
            res.write(data);
            //<\br>
            console.log('hello3');
            return res.end();
        }

    

    })
}).listen(8080);