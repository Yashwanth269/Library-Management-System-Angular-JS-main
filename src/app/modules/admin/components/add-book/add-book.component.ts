import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/book.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book: Book = new Book();
  constructor(private _service: BookService, private _router: Router) { }
  successMsg: boolean = false;
  errorMsg: boolean = false;
  ngOnInit(): void {
  }
  addbook() {
    this._service.addBook(this.book).subscribe(data => {
      data = this.book;
      this.successMsg = true;
      this.errorMsg = false;
    },
    error => {
      this.errorMsg = true;
      this.successMsg = false;
    }
    );
  }
  closeMsg() {
    this.successMsg = false;
    this.errorMsg = false;
  }
}
