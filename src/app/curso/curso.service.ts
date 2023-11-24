import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Curso } from './curso';

@Injectable({
 providedIn: 'root'
})
export class CursoService {
  private apiUrl: string = environment.baseUrl + 'cursos';

constructor(private http: HttpClient) { }

getCursos(): Observable<Curso[]> {
  return this.http.get<Curso[]>(this.apiUrl);
}

}