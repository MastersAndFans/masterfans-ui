import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserLandingComponent} from "./user-landing.component";
import { ProfileComponent } from './profile/profile.component';
import { UserInfoComponent } from './profile/user-info/user-info.component';
import { PostsComponent } from './profile/posts/posts.component';


@NgModule({
  declarations: [
    UserLandingComponent,
    ProfileComponent,
    UserInfoComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class UserLandingModule { }
