import path from 'path';

//definir una ruta de arhivo de ejemplo
const filePath = './data/example.txt';

//obtener el directorio base
const dirName = path.dirname(filePath);
console.log('Directorio Base:', dirName);

//obtener el nombre del arhivo sin extension
const baseName = path.basename(filePath, '.txt');
console.log('Nombre del archivo:', baseName);

//obtener la extension del archivo
const extName = path.extname(filePath);
console.log('Extension del archivo:', extName);

//Crear una ruta unida
const newPath = path.join('/user','docs','newfile.txt');
console.log('Nueva Ruta:', newPath);