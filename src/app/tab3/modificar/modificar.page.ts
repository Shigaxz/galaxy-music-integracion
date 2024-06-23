import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClUsuario } from 'src/app/model/ClUsuario';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {
  usuario: ClUsuario = {
    id: '',
    nombre: '',
    username: '',
    correo: '',
    password: '',
    rol: 0
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private databaseService: BaseDeDatosService
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.obtenerUsuario(id);
    }
  }
  async obtenerUsuario(id: string) {
    const usuarios = await this.databaseService.leerColeccion('Usuario');
    this.usuario = usuarios.find(u => u.id === id);
  }
  async guardarCambios() {
    if (this.usuario.id) {
      await this.databaseService.modificarDocumento('Usuario', this.usuario.id, this.usuario);
      alert("Usuario modificado");
      this.router.navigate(['/tabs/tab3']);
    }
  }
}
