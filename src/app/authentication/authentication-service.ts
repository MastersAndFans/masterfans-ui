import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
import {User} from "../user-landing/structures/User";

@Injectable()
export class AuthenticationService{
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

  RegisterUser(user: FormGroup): Observable<any> {
    return this.http.post(this.baseUrl + '/register', user, this.httpHeaders);
  }

  LoginUser(user: FormGroup): Observable<any> {
    return this.http.post(this.baseUrl + '/login', user, this.httpOptions);
  }

  logout(): Observable<any>{
    return this.http.post(this.baseUrl + '/logout', "", this.httpOptions);
  }

  getUser(): Observable<User>{
    return this.http.get<User>(this.baseUrl + '/user', this.httpOptions);
  }

  updateUser(user: FormGroup): Observable<any> {
    return this.http.put(this.baseUrl + '/user', user, this.httpOptions);
  }

  searchUser(user: string): Observable<any> {
    return this.http.put(this.baseUrl + '/search', JSON.stringify(user), this.httpOptions)
  }
}
