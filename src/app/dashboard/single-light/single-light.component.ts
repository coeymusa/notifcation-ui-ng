import { Component, OnInit, Input } from '@angular/core';


interface Light {
  name: String;
  color: String;
  active: boolean;
}

@Component({
  selector: 'app-single-light',
  templateUrl: './single-light.component.html',
  styleUrls: ['./single-light.component.css']
})
export class SingleLightComponent implements OnInit {

  constructor() { }

  @Input() singleLight: Light;
  ngOnInit() {
  }

  turnOffLight(light) {
    light.active = false;
  }

}
