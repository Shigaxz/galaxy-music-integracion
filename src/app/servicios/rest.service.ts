import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RestService {
  private apiUrl = 'http://localhost:8000/api/promos';

  constructor(private http: HttpClient) { }

  addPromo(promo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, promo);
  }
}
