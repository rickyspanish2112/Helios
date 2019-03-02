import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

import { Accountnodes } from '../helios-shell/model/accountnodes';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getAccountNodes(): Observable<Accountnodes[]> {
    const accountUrl = '../../assets/api/modules.json';

    return this.http.get<Accountnodes[]>(accountUrl).pipe(
      tap(this.doGetAccountNodes()),
      catchError(this.handleError)
    );
  }

  doGetAccountNodes(): any {
    return data =>
    console.log(
      'The following account nodes were returned: ' + JSON.stringify(data)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred ${err.error.message}`;
    } else {
      errorMessage = `Server side returned code: ${
        err.status
      }, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }


}
