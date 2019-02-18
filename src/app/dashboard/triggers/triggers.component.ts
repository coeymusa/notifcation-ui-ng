import { Component, OnInit } from '@angular/core';
import { TriggerServiceService } from './trigger-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Trigger } from './trigger-types';


@Component({
  selector: 'app-triggers',
  templateUrl: './triggers.component.html',
  styleUrls: ['./triggers.component.css']
})
export class TriggersComponent implements OnInit {
  triggerData: Trigger[];
  newTriggerForm: FormGroup;

  constructor(private readonly srv: TriggerServiceService, fb: FormBuilder) {
    this.triggerData = srv.getTriggerData();
    this.newTriggerForm = fb.group({
      name: ['', Validators.required],
      colour: ['', Validators.required],
      effect: ['NONE', Validators.required]
    });
    console.log(this.newTriggerForm);
  }

  ngOnInit() {}

  submitNewTrigger() {
    const newTrigger: Trigger = {
      name: '',
      colour: '',
      effect: '',
      active: true
    };
    newTrigger.name = this.newTriggerForm.value.name;
    newTrigger.colour = this.newTriggerForm.value.colour;
    newTrigger.effect = this.newTriggerForm.value.effect;

    this.srv.postNewTrigger(newTrigger);
    console.log('form submitted', newTrigger);
  }

  selectTrigger(trigger: Trigger) {
    this.srv.selectTrigger(trigger);
  }

  removeTriggers() {
    this.srv.removeTriggers();
  }

  formIsValid() {
    return this.newTriggerForm.status === 'VALID';
  }
}
