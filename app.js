const { crearArchivo} = require('./helpers/multiplicar');
const argv = require('yargs').argv;

console.clear();

// console.log( process.argv );
// console.log( argv);

// console.log('base: yargs', argv.base);


const [ , , arg3 = 'numero=5'] = process.argv;
const [, numero = 5 ] = arg3.split('=');
//console.log(arg3);
console.log(numero);


//const numero = 5;

crearArchivo(numero)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err));