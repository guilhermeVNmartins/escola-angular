import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunoIncluirComponent } from './telas/aluno/aluno-incluir/aluno-incluir/aluno-incluir.component';
import { AlunoComponent } from './telas/aluno/aluno/aluno/aluno.component';
import { CursoIncluirComponent } from './telas/curso/curso-incluir/curso-incluir/curso-incluir.component';
import { CursoComponent } from './telas/curso/curso/curso/curso.component';
import { MatriculaIncluirComponent } from './telas/matricula/matricula-incluir/matricula-incluir/matricula-incluir.component';
import { MatriculaComponent } from './telas/matricula/matricula/matricula/matricula.component';

const routes: Routes = [
  {path: '', component: CursoComponent},
  {path:'curso-incluir', component: CursoIncluirComponent},
  {path:'aluno', component: AlunoComponent},
  {path:'aluno-incluir', component: AlunoIncluirComponent},
  {path: 'matricula', component: MatriculaComponent},
  {path:'matricula-incluir', component:MatriculaIncluirComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
