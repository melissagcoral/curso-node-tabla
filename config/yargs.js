const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar',
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Muestra la tabla en consola',
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                default: 10,
                describe: 'Es el limite hasta donde vamos a multiplicar',
            })
            .check( (argv, options) => {
                console.info('yargs', argv)
                if (isNaN(argv.b)){
                    throw new Error("La base debe ser un número");
                }
                return true;
            })
            .argv;

module.exports = argv;