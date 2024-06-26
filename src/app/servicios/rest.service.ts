import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClPromociones } from '../model/ClPromocion';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Injectable({
  providedIn: 'root'
})

//https://galaxy-music-apirest.netlify.app/.netlify/functions/server/promos
//https://galaxy-music-apirest.netlify.app/.netlify/functions/server/instrumentos
//https://galaxy-music-apirest.netlify.app/.netlify/functions/server/discos

export class RestService {
  prod: string = "";
  public apiPromo = 'https://galaxy-music-apirest.netlify.app/.netlify/functions/server/instrumentos';
  public apiIns = 'https://galaxy-music-apirest.netlify.app/.netlify/functions/server/instrumentos';
  public apiDis = 'https://galaxy-music-apirest.netlify.app/.netlify/functions/server/discos';
  constructor(private http: HttpClient) { }

  getPromos(): Observable<ClPromociones[]> {
    return this.http.get<ClPromociones[]>(this.apiPromo);
  }
  getIns(): Observable<any[]> {
    return this.http.get<any[]>(this.apiIns);
  }
  getDis(): Observable<any[]> {
    return this.http.get<any[]>(this.apiDis);
  }

}
