import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserLandingService} from "../../user-landing-service";
import {Auction} from "../../structures/Auction";
import {Categories} from "../auction-dialog/auction-dialog.component";

@Component({
  selector: 'app-auctions-list',
  templateUrl: './auctions-list.component.html',
  styleUrls: ['./auctions-list.component.scss']
})
export class AuctionsListComponent {
  bidForm: FormGroup;
  searchForm: FormGroup;
  initialAuctions: Auction[] = [];
  auctions: Auction[] = [];
  categories: Categories[] = [];


  constructor(private formBuilder: FormBuilder, private userLandingService: UserLandingService) {
    this.bidForm = this.formBuilder.group({
      bid: [''],
    })
    this.searchForm = this.formBuilder.group({
      city: [''],
      category: [''],
      price_from: [],
      price_to: [],
    })
    this.userLandingService.getAuctions().subscribe((results: Auction[]) => {
      this.auctions = results;
      this.initialAuctions = results;
    });
    this.userLandingService.getCategories().subscribe((result) => {
      this.categories = result;
    });
  }
  bid(auction: Auction): void{
      this.userLandingService.updateAuction(auction, this.bidForm.controls['bid'].value).subscribe({
        next: next => {
          auction.price = this.bidForm.controls['bid'].value;
        },
        error: err => {
          if (err.status === 403) {
            alert("Paprasti naudotojai negali dalyvauti aukcione");
          }
          if (err.status === 400) {
            alert(err.error.message);
          }
        }
      });
  }

  search(): void{
    this.userLandingService.sortAuctions(this.searchForm.value).subscribe((results: Auction[]) => {
      this.auctions = results;
    });
  }

  clearFilter(): void{
    this.auctions = this.initialAuctions;
  }
}
