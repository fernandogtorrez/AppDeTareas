const argv = require('process').argv
const moduloTareas = require('./tareas/funcionesDeTareas')
const comando = argv[2]
let respuesta

switch(comando){
    case 'listar':
        moduloTareas.listar()
        break
    case 'crear':
        let titulo = argv[3]
        let estado = argv[4] || "pendiente"
        if([titulo].includes(undefined)){
            console.log("ERROR: Titulo requerido")
            break
        }
        respuesta = moduloTareas.crear(titulo,estado)
        console.log(respuesta)
        break
    case 'filtrar':
        let revisarEstado = argv[3].toLowerCase().trim()
        if([revisarEstado].includes(undefined)){
            console.log("Debes ingresar el estado por el que deseas filtrar. (ej: node app.js filtrar 'pendiente')")
            break
        }
        if(revisarEstado !== 'progreso' && revisarEstado !== 'terminada' && revisarEstado !== 'pendiente' ){
            console.log("*Atención - Escribe bien tu estado")
            break
        }
        respuesta = moduloTareas.filtrarPorEstado(revisarEstado)
        respuesta.forEach((tarea, index) => {
            console.log(`${index}: ${tarea.titulo} - Estado: ${tarea.estado}`)
        });
        break
    case undefined:
        console.log("Atención - Tienes que pasar una acción.");
        break
    default:
        console.log("No entiendo qué quieres hacer.");
        break
}