const fs = require('fs');

const crearArchivo = async( numero = 5 ) => {

    try {
        console.log('=============================');
        console.log(`      Tabla del ${numero}`);
        console.log('=============================');

        let salida = '';

        for (let index = 1; index <= 10; index++) {
            //console.log(numero, 'x', index, '=', numero*index);
            salida += `${numero} x ${index} = ${numero*index}\n`;
        }
        console.log(salida);
        
        // fs.writeFileSync( `tabla-${numero}.txt`, salida, (err) => {
        //     if (err) throw err;
        fs.writeFileSync( `./salida/tabla-${numero}.txt`, salida);
        
        return `tabla-${numero}.txt`;
    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    crearArchivo
}