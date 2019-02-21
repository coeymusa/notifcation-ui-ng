import { LightServiceService } from './light-service.service';
import { Component, ChangeDetectorRef } from '@angular/core';
import { Light } from './light-types';
import { catchError, tap, switchMap } from 'rxjs/operators';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent {
  constructor(
    private readonly srv: LightServiceService,
    private readonly cd: ChangeDetectorRef
  ) {}

  lightData: Light | undefined;
  loadingState = true;
  loadingErrorState = false;
  private readonly lightSubject = new BehaviorSubject(undefined);

  lightsObservable: Observable<Light> = this.lightSubject.asObservable().pipe(
    tap(() => (this.loadingState = true)),
    switchMap(() => {
      return this.srv.getLightData();
    }),
    catchError(() => {
      this.loadingState = false;
      this.loadingErrorState = true;
      this.cd.markForCheck();
      return new Observable<any>();
    })
  );

  private readonly lightSubscription: Subscription = this.lightsObservable.subscribe(
    response => {
      console.log(response);
      this.lightData = response;
      this.cd.markForCheck();
    }
  );

  getLights() {
    this.lightSubject.next(undefined);
  }

  turnOffAllLights() {
   this.lightData.forEach(light => {
     light.on = false;
     this.srv.postLight(light).subscribe();
   });
  }

  turnOnAllLights() {
    this.lightData.forEach(light => {
      light.on = true;
      this.srv.postLight(light).subscribe();
    });
   }
}
