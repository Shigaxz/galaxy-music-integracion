import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//https://galaxy-music-apirest.netlify.app/.netlify/functions/server/promos
//https://galaxy-music-apirest.netlify.app/.netlify/functions/server/instrumentos
//https://galaxy-music-apirest.netlify.app/.netlify/functions/server/discos
export class RestService {
  private apiPromo = 'https://galaxy-music-apirest.netlify.app/.netlify/functions/server/promos';
  private apiIns = 'https://galaxy-music-apirest.netlify.app/.netlify/functions/server/instrumentos';
  private apiDis = 'https://galaxy-music-apirest.netlify.app/.netlify/functions/server/discos';
  constructor(private http: HttpClient) { }

  addPromo(promo: any): Observable<any> {
    return this.http.post<any>(this.apiPromo, promo);
  }
  getIns(): Observable<any[]> {
    return this.http.get<any[]>(this.apiIns);
  }
  getDis(): Observable<any[]> {
    return this.http.get<any[]>(this.apiDis);
  }
}
