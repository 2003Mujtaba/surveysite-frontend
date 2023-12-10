import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey-create',
  templateUrl: './survey-create.component.html',
  styleUrls: ['./survey-create.component.scss']
})

export class SurveyCreateComponent implements OnInit {
  questions: Array<any> = [];

  title: string = "";
  description: string = ""

  flag = false;
  flagValidate = false;
  params = "";

  constructor(private router: Router, private activeRouter: ActivatedRoute, private surveyService: SurveyService) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(params => {
      this.params = params['id'];
      this.surveyService.getSurvey(params['id']).subscribe(
        (response: any) => {
          this.title = response.title;
          this.description = response.description;
          this.questions = response.questions;
          this.flag = true;
        },
        (error: any) => {
        }
      );
    });
  }

  onAddQuestion() {
    this.questions.push({
      questionText: '',
      options: [{ optionText: "" }]
    });
  }

  onAddOption(index: number) {
    this.questions[index].options.push({ optionText: "" });
  }

  onCreateSurvey() {
    this.flagValidate = this.validate();
    if (!this.flagValidate) {
      axios.post("http://localhost:3000/surveys",
        {
          title: this.title,
          description: this.description,
          questions: this.questions
        }
      ).then((res) => {
        this.router.navigate(['/surveys']);
      }, (err) => {

      })
    }

  }

  onDeleteQuestion(index: number) {
    this.questions.splice(index, 1);
  }

  validate(): boolean {
    if (this.title == "") { return true }
    if (this.description == "") { return true }
    let i = 0
    this.questions.map((question: any) => {
      question.options.map((option: any) => {
        if (option.optionText == "") { i++ }
      })
      if (question.questionText == "") { i++ };
    })
    if (i > 0) { return true }
    return false;
  }

  onUpdateSurvey() {
    this.flagValidate = this.validate();
    if (!this.flagValidate) {
      this.surveyService.updateSurvey(this.params,
        {
          title: this.title,
          description: this.description,
          questions: this.questions
        }).subscribe(
          (response: any) => {
            this.router.navigate(['/surveys']);
          },
          (error: any) => {
          }
        );
    }
  }
}
