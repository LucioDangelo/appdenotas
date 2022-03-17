const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON: function (tareas) {
        fs.writeFileSync(this.archivo, JSON.stringify(tareas, null, ' '));
    },
    guardarTarea: function (tarea) {
        let tareas = this.leerJSON();
        tareas.push(tarea);
        this.escribirJSON(tareas);
    },
    filtrarPorEstado: function (estado) {
        let tareas = this.leerJSON();
        let tareaIgual = tareas.filter(function(estados) {
            return estado == estados.estado
        });
        return tareaIgual;
    }
}

module.exports = archivoTareas;