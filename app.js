/* requerir modulo multiplicar */
const { tablas } = require('./helpers/multiplicar')

const argv = require('./config/yargs')

// ! forma sin yargs
/*
const [, , arg3 = "base=1"] = process.argv
const [, base = 1] = arg3.split("=") */

// ? forma con yargs

//argv.base = 10

// ejecucion de la funcion

tablas(argv.b, argv.x, argv.l)
    .then(res => console.log(res))
    .catch(err => console.log(err))