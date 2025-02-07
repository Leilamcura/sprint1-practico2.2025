import http from 'http';

// crear un http basico
const server =http.createServer((req,res)=>{
    res.statusCode=200
    res.setHeader('Content-Type', 'text/plain');
    res.end('¡Hola Mundo!');
});

// configurar el servidor que escuche en el puerto 3000
server.listen(3000,'127.0.0.1',()=>{
    console.log('Servidor corriendo en http://127.0.0.1:3000/');
});