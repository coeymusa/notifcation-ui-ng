import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-trigger',
  templateUrl: './single-trigger.component.html',
  styleUrls: ['./single-trigger.component.css']
})
export class SingleTriggerComponent implements OnInit {

  @Input() singleTrigger;
  constructor() { }
  isSelected = false;
  ngOnInit() {
  }

  turnOffTrigger(trigger) {
    trigger.active = false;
    console.log(trigger);
  }
}
