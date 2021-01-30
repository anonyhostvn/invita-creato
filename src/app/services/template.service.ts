import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {externalContext, getAllTemplateEndpoint, host} from '../constant/called-service.const';
import {pluck} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(
      private http: HttpClient
  ) { }

  getAllTemplate = (): Observable<any> => {
    const url = `${host}${externalContext}${getAllTemplateEndpoint}`;
    return this.http.get(url).pipe(
        pluck('data'),
        pluck('listTemplate')
    );
  }
}
