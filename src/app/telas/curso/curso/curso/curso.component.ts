import { Component } from '@angular/core';

export interface IDadoscurso {
  codigo: number;
  nome: string;
  instrutor: string;
  local: string;
  cargaHoraria:  number;
  dataInicio: Date;
}

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent {

  dadosCurso: IDadoscurso [] = []
  dadosFiltrado: IDadoscurso[] = []
  nome: string = ""
  ngOnInit(){
    this.dadosCurso = [{
      codigo: 1,
      nome: "Angular",
      instrutor: "Benedito",
      local: "Prazeres",
      cargaHoraria: 18,
      dataInicio: new Date (2022,2,2)
  },{
    codigo: 2,
      nome: "Typescript",
      instrutor: "Xandy",
      local: "Piedade",
      cargaHoraria: 36,
      dataInicio: new Date (2022,5,7)

  }]
    }
  dadosFiltrados(){
    this.dadosFiltrado = this.dadosCurso.filter(x => x.nome == this.nome)
  }
}


