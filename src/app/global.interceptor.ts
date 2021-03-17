import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  constructor(
      private router: Router,
      private _snackbar: MatSnackBar
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const newHeader = request.headers.append('Authorization', `${localStorage.getItem('token')}`);

    const newRequest = request.clone({headers: newHeader});

    return next.handle(newRequest).pipe(
        tap(
            // Succeeds when there is a response; ignore other events
            event => {console.log('Receive Response')},
            // Operation failed; error is an HttpErrorResponse
            error => {
              if (error.status === 401) {
                this.router.navigate(['login']);
                localStorage.removeItem('token');
              }
              this._snackbar.open(error?.error?.status?.message, 'Close', {
                  duration: 2000
              })
            }
        )
    );
  }
}
