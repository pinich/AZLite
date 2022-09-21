import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IQuestionsResponse } from '../models/IQuestionsResponse';
import { ITemplate } from '../models/ITemplate';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }


  public getQuestionsList(): Observable<IQuestionsResponse> {
    const path = environment.quizDataPath;
    return this.http.get<IQuestionsResponse>(path);
  }

  public getTemplatesList(): Observable<ITemplate[]> {
    const path = environment.templateDataPath;
    return this.http.get<ITemplate[]>(path);
  }

  public downloadFile(url: string, fileTitle: string) {
    return this.http
      .get(url, {
        responseType: 'blob',
      }).pipe(
        map(res => {
          return {
            filename: fileTitle,
            data: res
          };
        })
      )
      .subscribe(res => {
        let url = window.URL.createObjectURL(res.data);
        let a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = res.filename;
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
      });
  }
}
