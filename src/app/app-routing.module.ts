import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoComponent } from './aluno/aluno.component';
import { HomeComponent } from './home/home.component';
import { ProfessorComponent } from './professor/professor.component';

const routes: Routes = [
  {path: 'alunos', component: AlunoComponent},
  {path: 'professores', component: ProfessorComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
