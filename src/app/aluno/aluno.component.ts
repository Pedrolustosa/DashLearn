import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Aluno } from '../models/aluno';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit { 
  public alunos: Aluno[] = [];
  public form: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      id: ['', Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(3)
      ])],
      nome: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(30),
        Validators.email,
        Validators.required
      ])]
    });

    this.load();
  }

  add(){
    const id = this.alunos.length + 1;
    const nome = this.form.controls['nome'].value;
    const email = this.form.controls['email'].value;
    this.alunos.push(new Aluno(id, nome, email));
    this.save();
    this.clear();
  }

  remove(alunos: Aluno){
    const index = this.alunos.indexOf(alunos);
    if(index !== -1){
      this.alunos.splice(index, 1);
    }
    this.save();
  }

  clear(){
    this.form.reset();
  }

  save(){
    const data = JSON.stringify(this.alunos);
    localStorage.setItem('alunos', data);
  }

  load(){
    const data = localStorage.getItem('alunos');
    if(data){
      this.alunos = JSON.parse(data);
    }else{
      this.alunos = []
    }
  }

  ngOnInit() {
  }

}
