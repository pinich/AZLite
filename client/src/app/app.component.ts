import { Component } from '@angular/core';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  resultData ={msg:'', date:''};
  constructor(private srv: MainService) {  }

  getHelloWorld(){
    this.srv.getHelloWorld().subscribe(res=>{
      this.resultData = res;
    });
  }
}
