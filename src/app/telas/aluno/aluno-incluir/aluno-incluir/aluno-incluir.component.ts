import { Component } from '@angular/core';

@Component({
  selector: 'app-aluno-incluir',
  templateUrl: './aluno-incluir.component.html',
  styleUrls: ['./aluno-incluir.component.scss']
})
export class AlunoIncluirComponent {
  BotaoAlunoIncluir(){
    return alert('Aluno incluido com sucesso!')
}
}
