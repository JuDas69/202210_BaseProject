import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';

@Component({
 selector: 'app-curso-list',
 templateUrl: './curso-list.component.html',
 styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {

 cursos: Array<Curso> = [];

 constructor(private cursoService: CursoService) { }

 getCursos(): void {
   this.cursoService.getCursos().subscribe((cursos) => {
     this.cursos = cursos;
   });
 }

 ngOnInit() {
   this.getCursos();
 }

}
