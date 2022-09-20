import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  {
    path:'home',
    pathMatch: 'full',
    component: MainComponent
  },  {
    path:'quiz',
    pathMatch: 'full',
    component: QuizComponent
  },{
    path:'',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
