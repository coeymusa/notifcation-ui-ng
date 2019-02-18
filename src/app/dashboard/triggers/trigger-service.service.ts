import { Injectable } from '@angular/core';
import { Trigger } from './trigger-types';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TriggerServiceService {
  selectedTriggers: Trigger[];
  triggerData: Trigger[] = [
    {
      name: 'trigger1',
      active: true,
      colour: 'red',
      effect: 'NONE'
    },
    {
      name: 'trigger2',
      active: false,
      colour: 'blue',
      effect: 'NONE'
    },
    {
      name: 'trigger3',
      active: true,
      colour: 'purple',
      effect: 'NONE'
    }
  ];

  constructor(private readonly http: HttpClient) {
    this.selectedTriggers = [];
  }

  getTriggerData() {
    return this.triggerData;
  }

  postNewTrigger(newTrigger: Trigger) {
    this.triggerData.push(newTrigger);
  }

  selectTrigger(trigger: Trigger) {
    let beenRemoved = false;
    const indexOfSelectedTrigger = this.selectedTriggers.findIndex(arrayTrigger => arrayTrigger === trigger);

    if (indexOfSelectedTrigger !== -1) {
      this.selectedTriggers.splice(indexOfSelectedTrigger, 1);
      beenRemoved = true;
    }
    if (beenRemoved === false) {
      this.selectedTriggers.push(trigger);
    }
    console.log(this.selectedTriggers);
  }

  removeTriggers() {
    for (const selectedTrigger of this.selectedTriggers) {
      for (let i = 0; i < this.triggerData.length; i++) {
        if (selectedTrigger === this.triggerData[i]) {
          this.triggerData.splice(i, 1);
          i = 0;
          console.log('found');
        }
      }
    }
    this.selectedTriggers = [];
  }

  // removedTriggers() {
  //   for (const selectedTrigger of this.selectedTriggers) {
  //     const index = this.selectedTriggers.findIndex(arrayTrigger => arrayTrigger === selectedTrigger);
  //     this.selectedTriggers.splice(index, 1);
  //   }

  //   this.selectedTriggers = [];
  // }
}
