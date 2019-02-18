import { LightComponent } from './light/light.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriggersComponent } from './triggers/triggers.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { SingleLightComponent } from './single-light/single-light.component';
import { SingleTriggerComponent } from './single-trigger/single-trigger.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: 'triggers', pathMatch: 'full' },
  { path: 'lights', component: LightComponent },
  { path: 'triggers', component: TriggersComponent }
];

@NgModule({
  declarations: [
    TriggersComponent,
    LightComponent,
    SingleLightComponent,
    SingleTriggerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule {}
