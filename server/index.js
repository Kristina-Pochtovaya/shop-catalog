const express = require('express');
const app = express();

app.get('/', function(request, response) {
    console.log(request.url);
    response.send('<h1>Hello, World!</h1>')
});

app.get('/products', function(request, response){
    console.log(request.url);
    response.send('<h1>Products Page</h1>');
});

app.all('*', function(request,response) {
    console.log('method: '+ request.method);
    console.log('protocol:'+ request.protocol);
    
    response.end();
});

app.listen(8080);