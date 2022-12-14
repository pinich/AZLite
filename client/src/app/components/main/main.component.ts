import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ITemplate } from '../../models/ITemplate';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  templates: ITemplate[] = [];
  selectedTemplate!: ITemplate;
  constructor(private srv: MainService) { }

  ngOnInit(): void {
    this.srv.getTemplatesList().subscribe(res => {
      this.templates = res;
    })
  }

  templateClick(template: ITemplate): void {
    this.selectedTemplate = template;
  }

  downloadFile(filePath: string, fileTitle: string) {
    this.srv.downloadFile(filePath, fileTitle);
  }

  getImageUrl(imagePath:string):string {
    return environment.serverAPI + imagePath;
  }
}
