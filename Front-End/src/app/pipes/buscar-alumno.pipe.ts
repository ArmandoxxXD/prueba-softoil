import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarAlumno'
})
export class BuscarAlumnoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg =='' || arg.length<3) return value;
    const resultadoAlumno=[];
    for(const alumno of value){
      if(alumno.nombre.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultadoAlumno.push(alumno);
      }
    }
    return resultadoAlumno;
  }

}
