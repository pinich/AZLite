import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IQuestion } from '../models/IQuestion';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }


  public getQuestionsList(): Observable<IQuestion[]> {
    const path = environment.quizDataPath;
    return this.http.get<IQuestion[]>(path);
  }
}
