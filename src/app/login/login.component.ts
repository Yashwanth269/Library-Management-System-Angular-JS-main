import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private _bookService: BookService,
    private router: Router,
    private dialogRef: MatDialogRef<LoginComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  loginSubmitted() {
    if (this.registerForm.valid) {
      const email = this.registerForm.value.email;
      const password = this.registerForm.value.password;

      this._bookService.login({ email, password }).subscribe({
        next: (res: any) => {
          console.log(res);
          localStorage.setItem('userToken', res.token);
          this.router.navigate(['/dashboard']);
          this.dialogRef.close();
        },
        error: (err: any) => {
          console.error(err);
          alert('Invalid email or password.');
        }
      });
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }

  // Getter methods for accessing form controls
  get firstname() {
    return this.registerForm.get('firstname');
  }

  get lastname() {
    return this.registerForm.get('lastname');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }
}
