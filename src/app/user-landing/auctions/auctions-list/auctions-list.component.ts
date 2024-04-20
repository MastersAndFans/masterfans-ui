import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-auctions-list',
  templateUrl: './auctions-list.component.html',
  styleUrls: ['./auctions-list.component.scss']
})
export class AuctionsListComponent {
  bidForm: FormGroup;
  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.bidForm = this.formBuilder.group({
      bid: [''],
    })
    this.searchForm = this.formBuilder.group({
      city: [''],
      category: [''],
      priceFrom: [''],
      priceTo: [''],
    })
  }

  bid(): void{
    console.log(this.bidForm);
  }

  search(): void{
    console.log(this.searchForm);
  }
}
