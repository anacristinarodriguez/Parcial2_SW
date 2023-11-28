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
  certificado=false;
  cursosConCertificado: number[] = [];

  getCursos(): void {
    this.cursoService.getCursos().subscribe((cursos) => {
      this.cursos = cursos;

      let certificado=false;

      for (let i=0; i<this.cursos.length; i++){
        if (this.cursos[i].offers_certificate==true){
          certificado=true;
          this.cursosConCertificado.push(this.cursos[i].id);
        }
      }

    });
  }

  showDetail(curso: any) {
    this.selectedCurso = curso;
  }

  ngOnInit() {
    this.getCursos();
  }

}
