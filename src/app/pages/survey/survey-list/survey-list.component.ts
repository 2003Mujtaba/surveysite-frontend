import { Component, OnInit, NgZone } from '@angular/core';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.scss']
})

export class SurveyListComponent implements OnInit {
  surveys: Array<any> = [];
  flag: boolean = false;

  constructor(private surveyService: SurveyService, private ngZone: NgZone, private router: Router) { }

  ngOnInit(): void {
    this.flag = sessionStorage.getItem("auth") ? true : false;
    this.surveyService.getSurveys().subscribe(
      (response: any) => {
        this.surveys = response;
      },
      (error: any) => {
      }
    );
  }

  onDelete(id: string, index: number) {
    this.surveyService.deleteSurvey(id).subscribe(
      (res: any) => {
        this.ngZone.run(() => {
          this.surveys.splice(index, 1);
        });
      },
      (error: any) => {

      }
    );
  }

  onEdit(id: string){
    this.router.navigate(['/surveys/'+id]);
  }
}
