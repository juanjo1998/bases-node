// funcion haciendo uso del objeto new Promise()

/* const fs = require('fs')

// tablas

const tablas = (n = 1) => {
    return new Promise((resolve, reject) => {
        let res = 0,
            output = ""

        for (let i = 0; i <= n; i++) {
            res = n * i
            output += `El resultado de ${n} x ${i} es: ${res}\n`
        }

        fs.writeFileSync(`./tabla-del-${n}.txt`, output)

        resolve(`tabla-${n}.txt`)
    })
}

module.exports = {
    tablas
} */

// funcion haciendo uso de async await

const fs = require('fs')
// colors
const colors = require('colors')

// tablas

const tablas = async (n = 1, x = 10, l = false) => {

    try {

        let res = 0,
            output = ""

        for (let i = 0; i <= x; i++) {
            res = n * i
            output += `El resultado de ${n} x ${i} es: ${res}\n`
            // console.log(x)
        }

        fs.writeFileSync(`./docs/tabla-del-${n}.txt`, output)

        if (l) {
            console.log(output.green)
        }


        return `tabla-${n}.txt`

    } catch (error) {
        throw err
    }
}

module.exports = {
    tablas
}