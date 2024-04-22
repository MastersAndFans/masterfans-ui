import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../authentication/authentication-service";
import {User} from "../../structures/User";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {
  userInfo: User | undefined;
  userForm: FormGroup;
  constructor(private router: Router, private auth: AuthenticationService, private formBuilder: FormBuilder) {
    this.auth.getUser().subscribe((result: User) => {
      this.userInfo = result;
      this.initializeForm();
    });

    this.userForm = this.formBuilder.group({
      name: [
        '', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]
      ],
      surname: [
        '', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]
      ],
      birth_date: [''],
      email: [''],
      phone_number: [''],
    });
  }

  get name() {
    return this.userForm.get('name');
  }

  get surname() {
    return this.userForm.get('surname');
  }

  initializeForm(): void{
    this.userForm.patchValue({
      name: this.userInfo?.name,
      surname: this.userInfo?.surname,
      birth_date: this.userInfo?.birth_date,
      email: this.userInfo?.email,
      phone_number: this.userInfo?.phone_number,
    });
  }

  days: string[] = [
    'Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis', 'Sekmadienis'
  ]

  redirectToProfile(saveData: boolean): void{
    if (saveData){
      this.auth.updateUser(this.userForm.value).subscribe();
    }
    this.router.navigate(['/profile']);
  }
}
