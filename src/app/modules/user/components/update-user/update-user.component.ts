import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  constructor(private _service: UserService, private _router: Router) { }
  email: string | null;
  user: User;
  ngOnInit(): void {
    this.email = sessionStorage.getItem('user') as string;
    this._service.getUser(this.email).subscribe(
      data => {
        this.user = data;
      }
    )

  }
  updateUser(){ 
    this._service.updateUser(this.user).subscribe(data => {
      data = this.user;          
      Swal.fire("Good job!", "Record Update Successfully!", "success");
      this._router.navigate(['user/profile']);
    },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
   
      
      }
    );

  
  }
}
