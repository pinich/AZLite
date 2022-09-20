import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../../models/IQuestion';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  questions:IQuestion[]=[];
  constructor(private srv: MainService) { }


  getQuestions(){
    this.srv.getQuestionsList().subscribe(res =>{
      this.questions = res;
    })
  }


}
