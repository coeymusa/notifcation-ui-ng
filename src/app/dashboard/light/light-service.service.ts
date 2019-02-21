import { Injectable } from '@angular/core';
import { Light, LightResponse } from './light-types';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { catchError, publish } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LightServiceService {
  lightData: Light[];
  private readonly LIGHT_URL = 'http://localhost:7077/lights';

  constructor(private readonly http: HttpClient) {}

  getLightData() {
    return this.http.get(this.LIGHT_URL).pipe(catchError(this.handleError));
  }

  postLight(light: Light) {
    console.log('light posted', light);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.LIGHT_URL, JSON.stringify(light), httpOptions);
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
