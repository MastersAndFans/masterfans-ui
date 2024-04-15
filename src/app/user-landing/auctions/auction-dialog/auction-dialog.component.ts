import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auction-dialog',
  templateUrl: './auction-dialog.component.html',
  styleUrls: ['./auction-dialog.component.scss']
})
export class AuctionDialogComponent {
  auctionForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<AuctionDialogComponent>, private formBuilder: FormBuilder) {
    this.createAuctionForm();
  }

  createAuctionForm(): void{
    this.auctionForm = this.formBuilder.group({
      date: [
        '', [Validators.required]
      ],
      time: [
        '', [Validators.required]
      ],
      price: [
        '', [Validators.required]
      ],
      city: [
        '', [Validators.required]
      ],
      category: [
        '', [Validators.required]
      ],
      description: [
        '', [Validators.required]
      ]
    })
  }
  closeDialog(): void{
    console.log(this.auctionForm)
    this.dialogRef.close();
  }

  get date() {
    return this.auctionForm.get('date');
  }

  get time() {
    return this.auctionForm.get('time');
  }

  get price() {
    return this.auctionForm.get('price');
  }

  get city() {
    return this.auctionForm.get('category');
  }

  get category() {
    return this.auctionForm.get('category');
  }

  get description() {
    return this.auctionForm.get('description');
  }
}
