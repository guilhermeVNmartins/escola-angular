import { Component } from '@angular/core';

export interface IDadosaluno {
  codigo: number;
  nome: string;
  dataNascimento: Date;
}

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent {
  
  dadosAluno: IDadosaluno [] = []
  dadosFiltrado: IDadosaluno[] = []
  nome: string = ""
  ngOnInit(){
    this.dadosAluno = [{
      codigo: 1,
      nome: "Colt",
      dataNascimento: new Date (2002,2,2)
  },{
    codigo: 2,
    nome: "Ialerson",
    dataNascimento: new Date (1998,5,7)

  }]
    }
  dadosFiltrados(){
    this.dadosFiltrado = this.dadosAluno.filter(x => x.nome == this.nome)
  }

}
