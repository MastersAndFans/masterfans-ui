import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../authentication/authentication-service";
import {User} from "../structures/User";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  search: string = '';
  searchResults: User[] = [];
  constructor(private router: Router, private auth: AuthenticationService) {
  }

  redirectTo(path: string): void{
    this.router.navigate([`/${path}`]);
  }

  onSearchChange(event: any): void{
    if(event.length >= 2){
      this.auth.searchUser(event).subscribe((results: User[]) => {
        this.searchResults = results;
      });
    }
    else{
      this.searchResults = [];
    }
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
}
