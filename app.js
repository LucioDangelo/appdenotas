const fs = require('fs');
let archivoTareas = require('./tareas.js');
let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        let tareas = archivoTareas.leerPorEstado();
        tareas.forEach(function(tarea, index){
            console.log((index + 1) + '. ' + tarea.titulo + ' - ' + tarea.estado);
         })
        break;
        case 'crear':
        let titulo = process.arvg[3];
        let tarea = {
            titulo: titulo,
            estado: 'Pendiente',
        };
        archivoTareas.guardarTarea(tarea);
        console.log('La tarea guardada fue: ')
        console.log(tarea.titulo + ' -> ' + tarea.estado);
        break;
        case 'filtrar':
            let estado = process.argv[3]
            let estadoFiltrado = archivoTareas.filtrarPorEstado(estado);
            estadoFiltrado.forEach(function(estado, index){
                console.log((index + 1) + ' ' + estado.titulo);
                
            })
            break;
        case undefined:
        console.log('Tenés que pasarme una acción');
        break;

    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar, crear.');
        break;
}