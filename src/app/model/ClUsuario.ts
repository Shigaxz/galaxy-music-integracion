export class ClUsuario {
    id: string;
    nombre: string;
    username: string;
    correo: string;
    password: string;
    rol: number;
    
      constructor(obj: any){
        this.id = obj && obj.id || null
        this.nombre = obj && obj.nombre || null
        this.username = obj && obj.username || null
        this.correo = obj && obj.correo || null
        this.password = obj && obj.password || null
        this.rol = obj && obj.rol || null
      }
}