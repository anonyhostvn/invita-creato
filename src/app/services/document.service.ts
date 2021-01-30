import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {externalContext, getAllDocumentEndpoint, host} from '../constant/called-service.const';
import {pluck} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DocumentService {

    constructor(
        private http: HttpClient
    ) {
    }

    getAllDocuments = () => {
        const url = `${host}${externalContext}${getAllDocumentEndpoint}`;
        return this.http.get(url).pipe(
            pluck('data'),
            pluck('listDocument')
        )
    }

    getSingleDocument = (id) => {
        const url = `${host}${externalContext}${getAllDocumentEndpoint}/${id}`;
        return this.http.get(url).pipe(
            pluck('data')
        )
    }

    saveDocument = (id, document) => {
        const url = `${host}${externalContext}${getAllDocumentEndpoint}/${id}`;
        return this.http.put(url, {
            ...document
        });
    }
}
