import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
