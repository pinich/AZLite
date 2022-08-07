import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  resultData = { msg: '', date: '' };
  constructor(private srv: MainService) { }

  getHelloWorld() {
    this.srv.getHelloWorld().subscribe(res => {
      this.resultData = res;
    });
  }


}
