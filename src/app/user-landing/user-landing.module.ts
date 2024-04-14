import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserLandingComponent} from "./user-landing.component";
import { ProfileComponent } from './profile/profile.component';
import { UserInfoComponent } from './profile/user-info/user-info.component';
import { PostsComponent } from './profile/posts/posts.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { HeaderComponent } from './header/header.component';
import { AuctionsListComponent } from './auctions/auctions-list/auctions-list.component';
import {UserLandingRoutingModule} from "./user-landing-routing.module";
import {MatDialogModule} from "@angular/material/dialog";
import { AuctionDialogComponent } from './auctions/auction-dialog/auction-dialog.component';


@NgModule({
  declarations: [
    UserLandingComponent,
    ProfileComponent,
    UserInfoComponent,
    PostsComponent,
    EditProfileComponent,
    HeaderComponent,
    AuctionsListComponent,
    AuctionDialogComponent
  ],
  imports: [
    CommonModule,
    UserLandingRoutingModule,
    MatDialogModule
  ]
})
export class UserLandingModule { }
