import { Injectable } from '@angular/core';
import { Light } from './light-types';
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

  convertColourToXy(hexColour: number) {
    const rgb = this.hexToRgb(hexColour);
    const cie = this.RGBtoXY(rgb.r, rgb.g, rgb.b);
    const xy: number[] = [0, 0];
    xy[0] = Number(cie[0]);
    xy[1] = Number(cie[1]);
    console.log(xy);
    return xy;
  }
   hexToRgb(hexColour) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColour);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
  }
   RGBtoXY(red: number, green: number , blue: number){
    red = (red > 0.04045) ? Math.pow((red + 0.055) / (1.0 + 0.055), 2.4) : (red / 12.92);
    green = (green > 0.04045) ? Math.pow((green + 0.055) / (1.0 + 0.055), 2.4) : (green / 12.92);
    blue = (blue > 0.04045) ? Math.pow((blue + 0.055) / (1.0 + 0.055), 2.4) : (blue / 12.92);
    const X = red * 0.664511 + green * 0.154324 + blue * 0.162028;
    const Y = red * 0.283881 + green * 0.668433 + blue * 0.047685;
    const Z = red * 0.000088 + green * 0.072310 + blue * 0.986039;
    const fx = X / (X + Y + Z);
    const fy = Y / (X + Y + Z);
    return [fx.toPrecision(4), fy.toPrecision(4)];
}
}
