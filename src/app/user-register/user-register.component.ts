import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  msg = '';
  user: User = new User();
  constructor(private _service: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
  userRegister() {
    this._service.userRegister(this.user).subscribe(data => {
      data = this.user;
      console.log(data);
      this._router.navigate(['login']);
    },
      error => {
        this.msg = "Bad Credentials , Please Enter Valid Details.";
      }
    );

  }
}