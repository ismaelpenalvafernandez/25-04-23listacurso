import { Injectable } from '@angular/core';
import { Cursos } from './model/cursos';
import { nivelCurso } from './model/nivelCurso';

@Injectable({
  providedIn: 'root'
})
export class ServiciocursosService {
  micurso:Cursos[]=[
  new Cursos (nivelCurso.alto,1, "Ingles", 180,),
  new Cursos (nivelCurso.medio,2, "Frances", 120),
  new Cursos (nivelCurso.alto,3, "Japones", 240),
  new Cursos (nivelCurso.bajo,4, "Aleman", 90)
 ]
 constructor(){}
 addCursos(curso: Cursos) {
  this.micurso.push(curso);
 }
 getcurso():Cursos[]{
   return this.micurso
 }
  addmodificar(id:number, nuevocurso:Cursos){
    let dato=this.micurso.findIndex((micurso)=>micurso.id==id)
    if(dato!=-1){
      this.micurso[dato]= nuevocurso
  }
}
}
