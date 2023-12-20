import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Credentials } from '../model/Credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


  login(creds: Credentials) {
    return this.http.post('http://localhost:8080/login', creds, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => {
      const body = response.body;
      const headers = response.headers

      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken?.replace('Bearer', '');
      localStorage.setItem('token', token);
      console.log('Token almacenado correctamente:', token);

      return body;
    }))
  }

  getToken() {
    return localStorage.getItem('token'); 
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

}