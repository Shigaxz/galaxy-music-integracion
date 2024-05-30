export class ClUsuario {
    id: string;
    nombre: string;
    username: string;
    password: string;

      constructor(obj: any){
        this.id = obj && obj.id || null
        this.nombre = obj && obj.nombre || null
        this.username = obj && obj.username || null
        this.password = obj && obj.password || null
      }
}