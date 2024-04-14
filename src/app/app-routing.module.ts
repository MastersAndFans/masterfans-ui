import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import {LoginComponent} from "./authentication/login/login.component";
import {RegisterComponent} from "./authentication/register/register.component";
import {ProfileComponent} from "./user-landing/profile/profile.component";
import {EditProfileComponent} from "./user-landing/profile/edit-profile/edit-profile.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'edit', component: EditProfileComponent},
  {path: 'home',
    loadChildren: () => import('src/app/user-landing/user-landing.module').then(m => m.UserLandingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
