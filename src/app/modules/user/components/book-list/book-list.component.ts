import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/book.service';
declare let $: any;
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private _service: BookService, private _router: Router) { }
  books: Book[];
  
  ngOnInit(): void {
    this._service.getBooks().subscribe(
      data => {
        this.books = data;
      }
    );
    setTimeout(() => {
      $(function () {
        $('#dataTable').DataTable({
          pageLength: 10,
          paging: true,
          lengthChange: false,
        });
      });
    }, 40);
  }
  

}


