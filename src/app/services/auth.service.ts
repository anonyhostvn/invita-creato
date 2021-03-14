import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {host, loginEndpoint, registerEndpoint} from '../constant/called-service.const';
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

  register = ({username, password, firstName, lastName, email}): Observable<any[]> => {
    const url = `${host}${registerEndpoint}`;
    return this.http.post(url, {username, password, firstName, lastName, email}).pipe(
        pluck('data')
    )
  }
}
