import { Component } from '@angular/core';

export interface IDadosmatriculaincluir {
  
  curso: string;
  dataMatricula: Date;
  x: string;
}

@Component({
  selector: 'app-matricula-incluir',
  templateUrl: './matricula-incluir.component.html',
  styleUrls: ['./matricula-incluir.component.scss']
})
export class MatriculaIncluirComponent {
  BotaoMatriculaIncluir(){
    return alert('Matricula incluida com sucesso!')
  }
  dadosMatriculaIncluir: IDadosmatriculaincluir [] = []
  
  ngOnInit(){
    this.dadosMatriculaIncluir = [{
      curso: "Angular",
      dataMatricula: new Date (2022,2,2),
      x: "X"
  },{
    curso: "Typescript",
    dataMatricula: new Date (2022,2,5),
    x:"X"

  }]
}
}
