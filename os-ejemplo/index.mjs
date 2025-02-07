import os from 'os'

// arquitectura del sistema
console.log('Arquitectura: ', os.arch());

//tipo de S.O.
console.log('Plataforma: ', os.platform());

//cantidad total de memoria
console.log('Memoria total: ', os.totalmem(), 'bytes');

//memoria libre
console.log('Memoria libre: ', os.freemem(), 'bytes');

//informacion de CPU
console.log('Informacion de la CPU: ', os.cpus());