import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../../models/IQuestion';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  questions: IQuestion[] = [];
  templateGenerated: boolean = false;
  constructor(private srv: MainService) { }

  ngOnInit(): void {
    this.srv.getQuestionsList().subscribe(res => {
      this.questions = res;
    })
  }

  submitClick(): void {
    this.templateGenerated = true;
  }
}
