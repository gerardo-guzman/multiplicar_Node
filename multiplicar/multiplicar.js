const fs = require('fs');
const colors = require('colors/safe');

let mostrarTabla = (base, limite = 10) => {

    console.log(colors.green('******************'));
    console.log(colors.green(`*** TABLA DE ${base} ***`).green);
    console.log(colors.green('******************'));
    for(let i=0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject)=>{

        if(!Number(base)){
            reject(`el valor : ${base} no es un número`);
            return;
        }
        let data = '';

        for(let i= 1; i <= limite; i++){
            data += `${base} * ${i} = ${base*i}\n`
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
          });
    });
}

module.exports = {
    crearArchivo,
    mostrarTabla
}

