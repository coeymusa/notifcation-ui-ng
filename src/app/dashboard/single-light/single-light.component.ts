import { Component, OnInit, Input } from '@angular/core';
import { LightServiceService } from '../light/light-service.service';
import { Light } from '../light/light-types';

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

  onInputChange(event: any) {
    this.currentLight.state.bri = event.value;
    this.postLight();
  }

  postLight() {
    this.lightService.postLight(this.currentLight).subscribe((response: Light) => {
      console.log(response);
    });
  }

  turnOffLight() {
    this.currentLight.state.on = !this.currentLight.state.on;
    this.postLight();
  }
}
