import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";

@Injectable()
export class AuthenticationService{
  baseUrl: string = 'https://www.masterfans.social/api';
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
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };

  RegisterUser(user: FormGroup): Observable<any> {
    return this.http.post(this.baseUrl + '/register', user, this.httpHeaders);
  }

  LoginUser(user: FormGroup): Observable<any> {
    return this.http.post(this.baseUrl + '/login', user, this.httpOptions);
  }


}
