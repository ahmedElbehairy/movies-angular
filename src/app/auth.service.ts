import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  register(formData: object):Observable<any>{
    return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/singup` , formData)
  }
}
