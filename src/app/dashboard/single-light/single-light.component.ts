import { Component, OnInit, Input } from '@angular/core';
import { LightServiceService } from '../light/light-service.service';
import { Light, LightResponse } from '../light/light-types';

@Component({
  selector: 'app-single-light',
  templateUrl: './single-light.component.html',
  styleUrls: ['./single-light.component.css']
})
export class SingleLightComponent implements OnInit {

  constructor(private readonly lightService: LightServiceService) { }

  @Input() currentLight: Light;
  ngOnInit() {
  }

  turnOffLight() {
    this.currentLight.on = !this.currentLight.on;
    this.lightService.postLight(this.currentLight).subscribe((response: LightResponse) => {
      console.log(response);
      //this.currentLight.on = response.state.on;
    });
  }
}
