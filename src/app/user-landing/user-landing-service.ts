import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
import {Auction} from "./structures/Auction";

@Injectable()
export class UserLandingService{
  // baseUrl: string = 'https://www.masterfans.social/api';
  baseUrl: string = 'http://localhost:8000/api';
  constructor(private http: HttpClient) {
  }

  httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true,
  };

  getCategories(): Observable<any> {
    return this.http.get(this.baseUrl + '/categories', this.httpOptions);
  }

  createAuction(auction: FormGroup): Observable<any> {
    return this.http.post(this.baseUrl + '/auction', auction, this.httpOptions);
  }

  getAuctions(): Observable<Auction[]> {
    return this.http.get<Auction[]>(this.baseUrl + '/auction', this.httpOptions);
  }

  updateAuction(auction: Auction, bid: number): Observable<any> {
    const auctionCopy = {...auction, price: bid};
    return this.http.put(this.baseUrl + '/auction', JSON.stringify(auctionCopy), this.httpOptions);
  }

  sortAuctions(sort: FormGroup): Observable<Auction[]> {
    return this.http.put<Auction[]>(this.baseUrl + '/sorted/auctions', sort, this.httpOptions)
  }
}
