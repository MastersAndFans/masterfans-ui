import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../authentication-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(public router: Router, private formBuilder: FormBuilder, private auth: AuthenticationService) {
    this.loginForm = this.formBuilder.group({
      email: [
        '', [Validators.required]
      ],
      password: [
        '', [Validators.required]
      ]
    })
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  redirectToRegister(): void{
    this.router.navigate(['/register']);
  }

  onSubmit(): void{
    this.auth.LoginUser(this.loginForm.value).subscribe({
      next: next => this.router.navigate(['/profile']),
      error: err => {
        if (err.status === 401){
          this.loginForm.controls["password"].setErrors({'incorrect': true});
          this.loginForm.controls["password"].setErrors({"invalidCredentials": true});
        }
      }
    });
  }
}
