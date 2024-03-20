import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: { email: string, password: string }): Observable<any> {
    // Implement your login logic here, such as making an HTTP request to the server
    // Example:
    return this.http.post<any>('your_login_endpoint', credentials);
  }
}
