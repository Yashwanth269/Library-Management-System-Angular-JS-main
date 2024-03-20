import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _http: HttpClient) { }

  addBook(data: any): Observable<any> {
    return this._http.post('https://localhost:7246/api/Books', data); // Assuming the API endpoint for adding a book is /api/Books
  }

  getBooks(): Observable<any> {
    return this._http.get('https://localhost:7246/api/Books'); // Assuming the API endpoint for getting all books is /api/Books
  }

  updateBook(id: string, data: any): Observable<any> {
    return this._http.put(`https://localhost:7246/api/Books/${id}`, data); // Assuming the API endpoint for updating a book is /api/Books/{id}
  }

  deleteBook(id: string): Observable<any> {
    return this._http.delete(`https://localhost:7246/api/Books/${id}`); // Assuming the API endpoint for deleting a book is /api/Books/{id}
  }

  getSingleBook(id: string): Observable<any> {
    return this._http.get(`https://localhost:7246/api/Books/${id}`); // Assuming the API endpoint for getting a single book is /api/Books/{id}
  }

  // You can add more methods as needed, such as searching for books, etc.
}
