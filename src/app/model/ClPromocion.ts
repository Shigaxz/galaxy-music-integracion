export class ClPromociones {
    id: string;
    prod: any;
    descuento: number;
    precioFinal: number;
    fechaInic: string;
    fechaTerm: string;

      constructor(obj: any){
        this.id = obj && obj.id || null
        this.prod = obj && obj.prod || null
        this.descuento = obj && obj.descuento || null
        this.precioFinal = obj && obj.precioFinal || null
        this.fechaInic = obj && obj.fechaInic || null
        this.fechaTerm = obj && obj.fechaTerm || null
      }
}