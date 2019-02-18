import { Injectable } from '@angular/core';
import { Light } from './light-types';
import { HttpClient } from '@angular/common/http';
import { catchError, publish } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LightServiceService {
  lightData: Light[] = [
    {
      name: 'light1',
      active: false,
      color: 'red'
    },
    {
      name: 'light2',
      active: true,
      color: 'purple'
    },
    {
      name: 'light3',
      active: false,
      color: 'blue'
    }
  ];

  constructor(private readonly http: HttpClient) {}

  getLightData() {
    return this.http.get('http://localhost:7077/lights').pipe(catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  postLight(light: Light) {
    console.log('light posted', light);
  }
}
