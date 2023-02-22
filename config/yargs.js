const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        default: 1,
        describe: 'Base a multiplicar'
    })
    .option('x', {
        alias: 'limite',
        type: 'number',
        default: 10,
        describe: 'Limite de hasta que numero debe multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Lista el resultado, si su default es true'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "La base tiene que ser un numero"
        }

        return true
    })
    .argv

module.exports = argv
