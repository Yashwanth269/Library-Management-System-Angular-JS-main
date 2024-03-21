import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
  msg = '';
  admin: Admin = new Admin();

  constructor(private _service: AuthService, private _router: Router) { }

  ngOnInit(): void {   
  }
  adminRegister() {
    this._service.adminRegister(this.admin).subscribe(data => {
      data = this.admin;     
      this._router.navigate(['login']);
    },
      error => {
        this.msg = "Please Enter Valid Details.";
      }
    );

  }
}