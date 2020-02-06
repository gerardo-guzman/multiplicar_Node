const { argv } = require('./config/yargs')
const { crearArchivo, mostrarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        mostrarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.rainbow(` ${archivo}`)))
            .catch(err => console.log(err))
        break;
    default:
        console.log('COMANDO NO RECONOCIDO');
        break;
}
