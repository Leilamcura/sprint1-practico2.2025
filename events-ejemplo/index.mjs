import { EventEmitter } from 'events';

//crea una instancia de EventMitter
const emisor = new EventEmitter();

//define el evento personalizado
emisor.on('saludo',(nombre)=>{
    console.log(`Hola, ${nombre} `);
});

//emitir el evento 'saludo' y pasa como parametro 'Mundo'
emisor.emit('saludo','Mundo')