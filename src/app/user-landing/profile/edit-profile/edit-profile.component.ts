import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {
  constructor(private router: Router) {
  }
  days: string[] = [
    'Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis', 'Sekmadienis'
  ]

  redirectToProfile(saveData: boolean): void{
    if (saveData){

    }
    this.router.navigate(['/profile']);
  }
}
