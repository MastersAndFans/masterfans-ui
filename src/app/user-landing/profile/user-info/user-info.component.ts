import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../authentication/authentication-service";
import {User} from "../../structures/User";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  userInfo: User | undefined;
  constructor(private router: Router, private auth: AuthenticationService) {
    this.auth.getUser().subscribe((result: User) => {
      this.userInfo = result;
    });
  }

  redirecToEditProfile(): void{
    this.router.navigate(['/edit']);
  }
}
