// https://maku77.github.io/nodejs/express/static-file.html
const express = require('express'),
      app     = express();

app.set('port', process.env.PORT || 8080);
app.set('x-powered-by', false);

app.use(function(req, res, next){
    res.sendFile(__dirname + '/public' + req.path, function(error){error && next()});
});

app.use(function(req, res, next){
    res.status(404).send('Sorry, cant find that');
});

app.listen(app.get('port'), function(){
    console.log('Listening on port ' + app.get('port'));
});