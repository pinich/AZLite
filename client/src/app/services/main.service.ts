import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const serverAPI = environment.serverAPI;
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  public getHelloWorld(){
    return this.http.get<{msg:string, date:string}>(`${serverAPI}/api/`);
  }
}
