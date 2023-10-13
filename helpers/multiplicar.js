const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( numero = 5, listar = false, hasta = 10 ) => {

    try {
        let salida = '', consola = '';
        for (let index = 1; index <= hasta; index++) {
            //console.log(numero, 'x', index, '=', numero*index);
            salida += `${numero} x ${index} = ${numero*index}\n`;
            consola += `${numero} ${'x'.cyan} ${index} ${'='.cyan} ${numero*index}\n`;
        }
        
        if (listar) {
            console.log(colors.green('============================='));
            console.log(colors.rainbow(`      Tabla del ${numero}`));
            console.log(colors.green('============================='));
            
            console.log(consola);
        }
        
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