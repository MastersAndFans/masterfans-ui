import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../authentication/authentication-service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private router: Router, private auth: AuthenticationService) {
  }
  logout(): void{
    this.auth.logout().subscribe({
      next: next => {
        this.router.navigate(['/']);
      },
      error: err =>{
        console.log(err);
      }
    })
  }

  redirectToHome(): void {
    this.router.navigate(['/home'])
  }

}
