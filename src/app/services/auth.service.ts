import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {externalContext, getAllDocumentEndpoint, host} from '../constant/called-service.const';
import {pluck} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
      private http: HttpClient
  ) { }

  login = (): Observable<any[]> => {
    const url = `${host}${externalContext}${getAllDocumentEndpoint}`;
    return this.http.get(url).pipe(
        pluck('data'),
        pluck('listDocument')
    )
  }

  register = (): Observable<any[]> => {
    const url = `${host}${externalContext}${getAllDocumentEndpoint}`;
    return this.http.get(url).pipe(
        pluck('data'),
        pluck('listDocument')
    )
  }
}
