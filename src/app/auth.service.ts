import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Admin } from './admin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  private baseURLForUser = "http://localhost:8080/user/login";
  private baseURLForAdmin = "http://localhost:8080/admin/login";
  private baseURLForRegisterAdmin = "http://localhost:8080/admin";
  private baseURLForRegisterUser = "http://localhost:8080/user";

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  userLogin(user: User) {
    return this.httpClient.post(this.baseURLForUser, user, { responseType: 'text' as 'json' });
  }
  adminLogin(admin: Admin) {
    return this.httpClient.post(this.baseURLForAdmin, admin, { responseType: 'text' as 'json' });
  }
  adminRegister(admin: Admin) {
    return this.httpClient.post(this.baseURLForRegisterAdmin, admin, { responseType: 'text' as 'json' });
  }
  userRegister(user:User) {
    return this.httpClient.post(this.baseURLForRegisterUser, user, { responseType: 'text' as 'json' });
  }
}
