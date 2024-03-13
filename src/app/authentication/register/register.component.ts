import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      repeatPassword: [''],
      birthDate: [''],
      phoneNumber: [''],
      master: [false]
    })
  }

  onSubmit(): void{
    console.log(this.registerForm.controls);
  }

  redirectToLogin(): void{
    this.router.navigate(['/']);
  }
}
