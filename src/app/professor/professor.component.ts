import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Professor } from '../models/professor';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {
  public professores: Professor[] = [];
  public form: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      id: ['', Validators.compose([
        Validators.minLength(1)
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
      ])],
      materia: ['', Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(30),
        Validators.required
      ])]
    });

    this.load();
  }

  add(){
    const id = this.professores.length + 1;
    const nome = this.form.controls['nome'].value;
    const email = this.form.controls['email'].value;
    const materia = this.form.controls['materia'].value;
    this.professores.push(new Professor(id, nome, email, materia));
    this.save();
    this.clear();
  }

  remove(professores: Professor){
    const index = this.professores.indexOf(professores);
    if(index !== -1){
      this.professores.splice(index, 1);
    }
    this.save();
  }

  clear(){
    this.form.reset();
  }

  save(){
    const data = JSON.stringify(this.professores);
    localStorage.setItem('professores', data);
  }

  load(){
    const data = localStorage.getItem('professores');
    if(data){
      this.professores = JSON.parse(data);
    }else{
      this.professores = []
    }
  }


  ngOnInit() {
  }

}
