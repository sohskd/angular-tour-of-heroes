import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { Mrrequest } from './model/mrrequest';

// The mrrequest web API expects a special header in HTTP save requests.
// That header is in the httpOptions constant defined in the MrrequestService.
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MrrequestService {

  /*
  URL to web api.
  Define the heroesUrl with the address of the heroes resource on the server.
  */
  private mrRequestUrl = 'api/request_data';

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  /** GET Mrrequest from the server */
  getMrrequest(): Observable<Mrrequest[]> {
    console.log("mrrequest.service: getMrrequest()")
    return this.http.get<Mrrequest[]>(this.mrRequestUrl)
    .pipe(
      tap(heroes => this.log(`fetched Mrrequest`)),
      catchError(this.handleError('getMrrequest', []))
    );
  }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
