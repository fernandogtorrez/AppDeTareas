const {leerJSON, escribirJSON} = require('../data')
const Tarea = require('./Tarea')

module.exports = {
    tareas: leerJSON(),
    listar: function(tareas = this.tareas){
        console.log('Listado de tareas')
        console.log('-----------------')
        tareas.forEach((tarea, index) => {
            console.log(`${index} - ${tarea.titulo} - ${tarea.estado}`)
        });
        
    },
    crear: function(titulo,estado){
        let tareas = this.tareas
        let nuevaTarea = new Tarea(titulo, estado)

        tareas.push(nuevaTarea)
        escribirJSON(tareas)
        
        console.log('Nueva tarea creada')
        console.log('------------------')
        return `${nuevaTarea.titulo} -> ${nuevaTarea.estado}`
    },
    filtrarPorEstado: function(estado){
        const tareaFiltrada = this.tareas.filter(tarea => tarea.estado === estado)
        return tareaFiltrada
    }
}