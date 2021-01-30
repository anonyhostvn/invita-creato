import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {externalContext, getAllTemplateEndpoint, host} from '../../constant/called-service.const';
import {pluck} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvitationCreatorService {

  constructor(
      private http: HttpClient
  ) { }

  getAllTemplate = () => {
    const url = `${host}${externalContext}${getAllTemplateEndpoint}`;
    return this.http.get(url).pipe(
        pluck('data'),
        pluck('listTemplate')
    );
  }
}
