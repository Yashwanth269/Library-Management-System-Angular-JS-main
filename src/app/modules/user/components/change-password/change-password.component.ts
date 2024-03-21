import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password-user',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private _service: UserService, private _router: Router) { }
  email: string | null;

  user = new User();
  ngOnInit(): void {
  }

  changePassword() {


    this.user.email = sessionStorage.getItem('user') as string;
    console.log(this.user);
    this._service.updateUser(this.user).subscribe(data => {
      data = this.user;
      Swal.fire("Good job!", "Password Change Successfully!", "success");
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
