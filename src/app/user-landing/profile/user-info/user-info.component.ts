import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  constructor(private router: Router) {
  }

  redirecToEditProfile(): void{
    this.router.navigate(['/edit']);
  }
}
