import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserLandingService} from "../../user-landing-service";

@Component({
  selector: 'app-auction-dialog',
  templateUrl: './auction-dialog.component.html',
  styleUrls: ['./auction-dialog.component.scss']
})
export class AuctionDialogComponent {
  auctionForm!: FormGroup;
  categories: Categories[] = [];
  permissionError: string = '';
  dateNotValid: boolean = false;
  priceNotValid: boolean = false;

  constructor(public dialogRef: MatDialogRef<AuctionDialogComponent>, private formBuilder: FormBuilder, private userLandingService: UserLandingService) {
    this.createAuctionForm();
    this.userLandingService.getCategories().subscribe((result) => {
      this.categories = result;
    });
  }

  createAuctionForm(): void{
    this.auctionForm = this.formBuilder.group({
      date: [
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
      ],
    })
  }
  closeDialog(): void{
    this.dateNotInPast();
    this.priceAboveEuro();
    if (!this.dateNotValid && !this.priceNotValid){
      this.userLandingService.createAuction(this.auctionForm.value).subscribe({
        error: err => {
          if (err.status === 403) {
            alert("Meistras negali kurti aukcionų");
          }
        }
      });
      this.dialogRef.close();
    }
  }

  dateNotInPast(): void {
    const selectedDate = new Date(this.auctionForm.controls['date'].value);
    const currentDate = new Date();
    this.dateNotValid = selectedDate < currentDate;
  }

  priceAboveEuro(): void {
    this.priceNotValid = this.auctionForm.controls['price'].value < 2;
  }

  get date() {
    return this.auctionForm.get('end_date');
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

export interface Categories {
  name: string;
}
