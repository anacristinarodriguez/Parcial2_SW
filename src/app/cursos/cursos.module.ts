import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { HttpClientModule } from '@angular/common/http';
import { CursosListComponent } from './cursos-list/cursos-list.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [CursosListComponent],
  exports: [CursosListComponent]
})
export class CursosModule { }
