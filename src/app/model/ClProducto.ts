export class ClProducto {
    id_producto: number;
    disco: any;
    instrumento: any;
    precio: number;
    stock: number;
    estado: boolean;

    constructor(obj: any){
        this.id_producto = obj && obj.id_producto || null
        this.disco = obj && obj.disco || null
        this.instrumento = obj && obj.instrumento || null
        this.precio = obj && obj.precio || null
        this.stock = obj && obj.stock || null
        this.estado = obj && obj.estado || null
      }
}