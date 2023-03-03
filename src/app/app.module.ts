import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutComponent } from './share/cabecalho/component/layout/layout.component';
import { ConteudoComponent } from './share/corpo/conteudo/conteudo/conteudo.component';
import { LateralComponent } from './share/lateral/lateral/lateral.component';
import { CursoIncluirComponent } from './telas/curso/curso-incluir/curso-incluir/curso-incluir.component';
import { AlunoComponent } from './telas/aluno/aluno/aluno/aluno.component';
import { MatriculaComponent } from './telas/matricula/matricula/matricula/matricula.component';
import { MatriculaIncluirComponent } from './telas/matricula/matricula-incluir/matricula-incluir/matricula-incluir.component';
import { AlunoIncluirComponent } from './telas/aluno/aluno-incluir/aluno-incluir/aluno-incluir.component';
import { CursoComponent } from './telas/curso/curso/curso/curso.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ConteudoComponent,
    LateralComponent,
    CursoComponent,
    CursoIncluirComponent,
    AlunoComponent,
    AlunoIncluirComponent,
    MatriculaComponent,
    MatriculaIncluirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
