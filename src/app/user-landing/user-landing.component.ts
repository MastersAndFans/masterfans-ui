import { Component } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {AuctionDialogComponent} from "./auctions/auction-dialog/auction-dialog.component";

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.scss']
})
export class UserLandingComponent {

  constructor(public dialog: MatDialog) {
  }
  openDialog(): void{
    const dialogRef = this.dialog.open(AuctionDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(() => {
      window.location.reload();
    });
  }
}
