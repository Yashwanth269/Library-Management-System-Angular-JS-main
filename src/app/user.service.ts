import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private router: Router) { }
  private baseURLForUser = "http://localhost:8080/user";


  getUser(email:String): Observable<any> {
    return this.httpClient.get(`${this. baseURLForUser}/${email}`);
  }
  updateUser(user:User): Observable<any> {
    return this.httpClient.put(`${this. baseURLForUser}`,user);
  }
}
