import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ClPromociones } from '../model/ClPromocion';
@Injectable({
  providedIn: 'root'
})

export class RestService {
  private apiIns = 'http://localhost:3000/instrumentos';
  private apiDis = 'http://localhost:3000/discos';
  constructor(private http: HttpClient) { }

  addPromo(promo: any): Observable<any> {
    return this.http.post<any>(this.apiIns, promo);
  }
  getIns(): Observable<ClPromociones[]> {
    return this.http.get<ClPromociones[]>(this.apiIns);
  }
  getDis(): Observable<any[]> {
    return this.http.get<any[]>(this.apiDis);
  }
}
