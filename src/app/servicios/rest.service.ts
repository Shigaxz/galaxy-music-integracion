import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ClPromociones } from '../model/ClPromocion';
@Injectable({
  providedIn: 'root'
})

export class RestService {
  private apiUrl = 'http://localhost:8000/api/promos';

  constructor(private http: HttpClient) { }

  addPromo(promo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, promo);
  }
  getPromo(): Observable<ClPromociones[]> {
    return this.http.get<ClPromociones[]>(this.apiUrl);
  } 
}
