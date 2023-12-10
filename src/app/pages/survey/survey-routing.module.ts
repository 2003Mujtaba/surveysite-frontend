import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { SurveyCreateComponent } from './survey-create/survey-create.component';

const routes: Routes = [
    {
        path: 'surveys',
        component: SurveyListComponent
    },
    {
        path: 'surveys/new',
        component: SurveyCreateComponent
    },
    {
        path: 'surveys/:id',
        component: SurveyCreateComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule { }