import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { ClPromociones } from '../model/ClPromocion';
import { ClProducto } from '../model/ClProducto';
@Injectable({
  providedIn: 'root'
})

//https://galaxy-music-apirest.netlify.app/.netlify/functions/server/promos
//https://galaxy-music-apirest.netlify.app/.netlify/functions/server/instrumentos
//https://galaxy-music-apirest.netlify.app/.netlify/functions/server/discos


//INTEGRACION: https://gmad.up.railway.app/api/public/productos/

export class RestService {
  prod: string = "";
  public apiPromo = 'https://galaxy-music-apirest.netlify.app/.netlify/functions/server/promos';
  public apiIns = 'https://galaxy-music-apirest.netlify.app/.netlify/functions/server/instrumentos';
  public apiDis = 'https://galaxy-music-apirest.netlify.app/.netlify/functions/server/discos';
  public apiIntegracion = 'https://gmad.up.railway.app/api/public/productos/';
  constructor(private http: HttpClient) { }

  addPromo(promo: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-secret-token': 'dh3A64JunsgwejLW9JKPzsemk3RMhG'
    });
    return this.http.post(this.apiPromo, promo, { headers });
  }

  getPromos(): Observable<ClPromociones[]> {
    return this.http.get<ClPromociones[]>(this.apiPromo);
  }
  getIns(): Observable<any[]> {
    return this.http.get<any[]>(this.apiIns);
  }
  getDis(): Observable<any[]> {
    return this.http.get<any[]>(this.apiDis);
  }

  getProductos(): Observable<ClProducto[]> {
    return this.http.get<ClProducto[]>(this.apiIntegracion)
      .pipe(
        map(productos => productos.filter(producto => producto.estado === false))
      );
  }
}
