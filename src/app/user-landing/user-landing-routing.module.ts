import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {UserLandingComponent} from "./user-landing.component";
import {AuctionsListComponent} from "./auctions/auctions-list/auctions-list.component";

const routes: Routes = [
  {
    path: '',
    component: UserLandingComponent,
    children: [
      {
        path: 'auctions',
        component: AuctionsListComponent,
      },
      {
        path: '**',
        redirectTo: 'auctions',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLandingRoutingModule { }
