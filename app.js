
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http');

var app = express();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(__dirname + '/public'));
  app.use(express.bodyParser({ keepExtensions: true, uploadDir: __dirname + '/public/uploads' }));
  app.use(express.methodOverride());
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


//app.post('/upload', routes.upload);
app.get('/getupload', routes.getupload);
app.get('/', routes.index);

http.createServer(app).listen(3000);

console.log("Express server listening on port 3000");
