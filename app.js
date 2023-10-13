const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

//console.log( process.argv );
//console.log( argv);

//console.log('base: yargs', argv.b);


/*const [ , , arg3 = 'numero=5'] = process.argv;
const [, numero = 5 ] = arg3.split('=');
//console.log(arg3);
console.log(numero);*/


//const numero = 5;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err));

/*const fs = require('fs');

console.clear();
const num = 5;
console.info(`===================`);
console.info(`====Tabla del ${num}====`);
console.info(`===================`);

let salida = '';

for (let index = 1; index <= 10; index++) {
    //let res = index*num;
    //console.info(num, 'x', index,`=`,res);
    //console.info(`${num} x ${index} = ${num*index}`)
    salida += `${num} x ${index} = ${num*index}\n`;
}
fs.writeFile(`tabla-${num}.txt`, salida, (err) => {
    if (err) throw err;
    console.info(`Tabla del ${num} creado`);
})
*/