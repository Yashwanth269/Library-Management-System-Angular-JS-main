import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/book.service';
import swal from 'sweetalert2';
declare let $: any;
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private _service: BookService, private _router: Router) { }
  books: Book[];
  reload:true;
  ngOnInit(): void {
    setTimeout(() => {
      $(function () {
        $('#dataTable').DataTable({
          pageLength: 8,
          paging: true,
          lengthChange: false,
        });
      });
    }, 40);
    
   if(this.reload   == true){
    console.log("reload");
   }
   
    this._service.getBooks().subscribe(
      data => {
        this.books = data;
      }
    );
  }
  
  deleteRecord(id: Number) {
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._service.deleteBook(id).subscribe();
        swal.fire(
          'Deleted!',
          'Your Record has been deleted.',
          'success'
        )
      }
    })
     this._router.navigate(['admin/books']);
   }
   
}


