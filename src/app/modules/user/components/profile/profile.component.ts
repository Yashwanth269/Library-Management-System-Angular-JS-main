import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private _service: UserService, private _router: Router) { }
  email: string | null;
  gender: boolean;
  user: User;
  ngOnInit(): void {
    this.email = sessionStorage.getItem('user') as string;
    this._service.getUser(this.email).subscribe(
      data => {
        if (data.gender == "male") {
          this.gender = true;
        } else {
          this.gender = false;
        }
        this.user = data;
      }
    )
  }

}
