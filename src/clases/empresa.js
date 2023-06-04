export class Empresa{
    constructor(id, nombre, rut) {
        this.id = id;
        this.nombre = nombre;
        this.rut = rut;
        this.impotaciones = [];
    }

    agregarImpotacion(importacion){
        this.importaciones.push(importacion);
    }

    obtenerTotalImportaciones(){
        let total = 0;
        for (let index = 0; index < this.importaciones.length; index++) {
            total += importacion.obtenerTotal();
        }
        return total;
    }
}