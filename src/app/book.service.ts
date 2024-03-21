import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient, private router: Router) { }
  private baseURLForBook = "http://localhost:8080/book";
  

  addBook(book: Book) {
    return this.httpClient.post(this.baseURLForBook, book, { responseType: 'text' as 'json' });
  }
  getBooks(): Observable<any> {
    return this.httpClient.get(`${this. baseURLForBook}`);
  }
  deleteBook(id:Number): Observable<any>{
    return this.httpClient.delete(`${this.baseURLForBook}/${id}`);
    }
    
}
