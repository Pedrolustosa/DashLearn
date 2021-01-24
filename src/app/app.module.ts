import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunoComponent } from './aluno/aluno.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfessorComponent } from './professor/professor.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    ProfessorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
