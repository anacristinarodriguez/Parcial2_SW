import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css']
})
export class CursosListComponent implements OnInit {

  constructor(private cursoService:CursoService) { }
  cursos: Array<Curso> = [];
  selectedCurso!: Curso;

  getCursos(): void {
    this.cursoService.getCursos().subscribe((cursos) => {
      this.cursos = cursos;
    });
  }

  ngOnInit() {
    this.getCursos();
  }

}
