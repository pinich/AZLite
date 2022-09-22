import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../../models/IQuestion';
import { MainService } from 'src/app/services/main.service';
import { IQuestionsResponse } from 'src/app/models/IQuestionsResponse';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  questions!: IQuestion[];
  allQuestions!: IQuestionsResponse;
  templateGenerated: boolean = false;
  constructor(private srv: MainService) { }

  ngOnInit(): void {
    this.srv.getQuestionsList().subscribe(res => {
      this.allQuestions = res;
      this.questions = this.allQuestions.productionQuestions;
    })
  }

  submitClick(): void {
    this.templateGenerated = true;
  }

  /**
   * test = testQuestions
   * prod = productionQuestions
   * customProd = customProdQuestions
   * @param questionType
   */
  changeQuestionsType(questionType: string): void {
    switch (questionType) {
      case "test":
        this.questions = this.allQuestions.testQuestions;
        break;
      case "prod":
        this.questions = this.allQuestions.productionQuestions;
        break;
      case "customProd":
        this.questions = this.allQuestions.customProdQuestions;
        break;
      default:
        this.questions = this.allQuestions.testQuestions;
        break;
    }

  }

  getImageUrl(imagePath:string):string {
    return environment.serverAPI + imagePath;
  }
}
