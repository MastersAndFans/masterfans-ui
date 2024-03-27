import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication-service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  passwordMatch: boolean = true;
  ageAbove13: boolean = true;

  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthenticationService) {
    this.registerForm = this.formBuilder.group({
      name: [
        '', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]
      ],
      surname: [
        '', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]
      ],
      email: [
        '', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]
      ],
      password: [
        '', [Validators.required, Validators.minLength(8)]
      ],
      repeat_password: [
        '', [Validators.required, Validators.minLength(8)]
      ],
      birth_date: [
        '', [Validators.required]
      ],
      phone_number: [''],
      is_master: [false]
    })
  }

  get name() {
    return this.registerForm.get('name');
  }

  get surname() {
    return this.registerForm.get('surname');
  }

  get password(){
    return this.registerForm.get('password');
  }

  get repeat_password(){
    return this.registerForm.get('repeat_password');
  }

  get birth_date(){
    return this.registerForm.get('birth_date');
  }

  get email(){
    return this.registerForm.get('email');
  }

  onSubmit(): void{
    this.passwordsMatch();
    this.isDateValid();
    if(this.passwordMatch && this.ageAbove13){
      this.auth.RegisterUser(this.registerForm.value).subscribe({
        next: next => this.redirectToLogin(),
        error: err => {
          if (err.status === 400){
            this.registerForm.controls["email"].setErrors({'incorrect': true});
            this.registerForm.controls["email"].setErrors({"emailAlreadyExist": true});
          }
        }
      });
    }
  }

  passwordsMatch(): void{
    this.passwordMatch = this.registerForm.controls["password"].value === this.registerForm.controls["repeat_password"].value;
  }

  isDateValid(): void{
    const birthday: any = new Date(this.registerForm.controls["birth_date"].value);
    const today: any = new Date();
    const age: number = ((today - birthday) / (31557600000));
    this.ageAbove13 = Math.floor(age) >= 13;
  }

  redirectToLogin(): void{
    this.router.navigate(['/']);
  }
}
