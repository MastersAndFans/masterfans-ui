import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-auction-dialog',
  templateUrl: './auction-dialog.component.html',
  styleUrls: ['./auction-dialog.component.scss']
})
export class AuctionDialogComponent {

  constructor(public dialogRef: MatDialogRef<AuctionDialogComponent>) {
  }
  closeDialog(): void{
    this.dialogRef.close();
  }
}
