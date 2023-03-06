import { Component } from '@angular/core';

@Component({
  selector: 'app-curso-incluir',
  templateUrl: './curso-incluir.component.html',
  styleUrls: ['./curso-incluir.component.scss']
})
export class CursoIncluirComponent {

  BotaoCursoIncluir(){
    return alert('Curso incluido com sucesso!')
  }

}
