import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RestService {
  private apiPromo = 'http://localhost:8000/api/promos';
  private apiIns = 'http://localhost:3000/instrumentos';
  private apiDis = 'http://localhost:3000/discos';
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
