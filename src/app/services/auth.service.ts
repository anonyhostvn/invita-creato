import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {changePasswordEndpoint, host, loginEndpoint, registerEndpoint, verifyRegisterEndpoint} from '../constant/called-service.const';
import {pluck} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
      private http: HttpClient
  ) { }

  login = (username, password): Observable<any[]> => {
    const url = `${host}${loginEndpoint}`;
    return this.http.post(url, {username, password}).pipe(
        pluck('data')
    )
  }

  register = ({username, password, firstName, lastName, email, retypePassword}): Observable<any[]> => {
    const url = `${host}${registerEndpoint}`;
    return this.http.post(url, {username, password, firstName, lastName, email, retypePassword}).pipe(
        pluck('data')
    )
  }

  changePassword = (oldPassword, newPassword, retypeNewPassword): Observable<any[]> => {
    const url = `${host}${changePasswordEndpoint}`;
    return this.http.post(url, {oldPassword, newPassword, retypeNewPassword}).pipe(
        pluck('data')
    )
  }

  confirmEmail = (token) => {
    const url = `${host}${verifyRegisterEndpoint}?token=${token}`;
    return this.http.get(url);
  }
}
