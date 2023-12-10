import { NgModule } from '@angular/core';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyCreateComponent } from './survey-create/survey-create.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SurveyListComponent,
    SurveyCreateComponent
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    FormsModule
  ],
  exports: [
    SurveyListComponent,
    SurveyCreateComponent
  ]
})
export class SurveyModule { }