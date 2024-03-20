import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookAddEditComponent } from './book-add-edit/book-add-edit.component'; // Assuming you have a BookAddEditComponent for adding/editing books
import { BookService } from './services/book.service'; // Assuming your service is named BookService
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'library-management-system';
  bookList: any[] = [];
  value: boolean = false;
  displayedColumns: string[] = ['id', 'title', 'author', 'publication', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private bookService: BookService) {}

  ngOnInit(): void {
    this.getBookList();
  }

  getBookList(): void {
    this.bookService.getBooks().subscribe({
      next: (res) => {
        this.bookList = res;
        this.dataSource = new MatTableDataSource(this.bookList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  openAddEditBookForm(): void {
    const dialogRef = this.dialog.open(BookAddEditComponent);

    dialogRef.afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.getBookList();
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  onDelete(id: string): void {
    this.bookService.deleteBook(id).subscribe({
      next: () => {
        alert('Book deleted successfully.');
        this.getBookList();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  openEditForm(book: any): void {
    const dialogRef = this.dialog.open(BookAddEditComponent, {
      data: book
    });

    dialogRef.afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.getBookList();
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
