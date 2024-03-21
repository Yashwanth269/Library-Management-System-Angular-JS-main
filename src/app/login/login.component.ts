import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg = '';
  admin: Admin = new Admin();
  user: User = new User();
  email:string='';
  constructor(private _service: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
  adminLogin() {
    this._service.adminLogin(this.admin).subscribe(data => {
      data = this.admin;
      this._service.setToken('abcdefghijklmnopqrstuvwxyz');
      this._router.navigate(['admin']);
    },
      error => {
        this.msg = "Bad Credentials , Please Enter Valid EmailId and Password.";
      }
    );
  }

  userLogin() {
      this._service.userLogin(this.user).subscribe(data => {
      data = this.user;

      this.email=this.user.email;

       sessionStorage.setItem('user',this.email);

      this._service.setToken('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz');

      this._router.navigate(['user']);
    },
      error => {
        this.msg = "Bad Credentials , Please Enter Valid EmailId and Password.";
      }
    );
  }
}
