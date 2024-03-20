import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../services/book.service'; // Import BookService
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-book-add-edit',
  templateUrl: './book-add-edit.component.html',
  styleUrls: ['./book-add-edit.component.css']
})
export class BookAddEditComponent implements OnInit {

  bookForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _bookService: BookService, // Inject BookService
    private _dialogRef: MatDialogRef<BookAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.bookForm = this._fb.group({
      title: '',
      author: '',
      genre: '',
      publishedYear: '',
      isbn: '',
      language: ''
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.bookForm.patchValue(this.data);
    }
  }

  onFormSubmit() {
    if (this.bookForm.valid) {
      if (this.data) {
        this._bookService.updateBook(this.data.id, this.bookForm.value).subscribe({
          next: (val: any) => {
            alert('Book updated successfully.');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      } else {
        this._bookService.addBook(this.bookForm.value).subscribe({
          next: (val: any) => {
            alert('Book added successfully.');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      }
    }
  }

}
