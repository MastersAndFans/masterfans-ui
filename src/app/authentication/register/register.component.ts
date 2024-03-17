import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication-service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthenticationService) {
    this.registerForm = this.formBuilder.group({
      name: [''],
      surname: [''],
      email: [''],
      password: [''],
      repeatPassword: [''],
      birth_date: [''],
      phone_number: [''],
      is_master: [false]
    })
  }

  onSubmit(): void{
    console.log(this.registerForm.controls);
    this.auth.RegisterUser(this.registerForm.value).subscribe(result => {
      console.log(result);
    })
  }

  redirectToLogin(): void{
    this.router.navigate(['/']);
  }
}
