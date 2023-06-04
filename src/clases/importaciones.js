class Importacion{
    constructor(idImp, producto, cantidad, precioUni){
        this.idImp = idImp;
        this.producto = producto;
        this.cantidad = cantidad;
        this.precioUni = precioUni;
    }

    obtenerTotal(){
        return this.cantidad * this.precioUni;
    }
}