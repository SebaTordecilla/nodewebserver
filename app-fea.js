const http = require('http');

http.createServer((request, response) => {
        console.log(request);
        response.write('Hola CTM');
        response.end;
    })
    .listen(8081);

console.log('escuchando el puerto', 8081);