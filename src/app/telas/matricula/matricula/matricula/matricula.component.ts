import { Component } from '@angular/core';

export interface IDadosmatricula {
  codigo: number;
  nome: string;
  matricula: number;
} 
@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.scss']
})
export class MatriculaComponent {

  dadosMatricula: IDadosmatricula [] = []
  dadosFiltrado: IDadosmatricula[] = []
  nome: string = ""
  ngOnInit(){
    this.dadosMatricula = [{
      codigo: 1,
      nome: "Colt",
      matricula: 2341411
  },{
    codigo: 2,
    nome: "Bala",
    matricula: 2341412

  },{
    codigo: 3,
    nome: "Nockya",
    matricula: 2341413

  },
  {
    codigo: 4,
    nome: "Peleme",
    matricula: 2341414

  }]
    }
  dadosFiltrados(){
    this.dadosFiltrado = this.dadosMatricula.filter(x => x.nome == this.nome)
  }
}
