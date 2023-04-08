import { Component, OnInit } from '@angular/core';
import { Alumno } from './models/alumno';
import { AlumnosService } from './service/alumnos.service';
import { NumerosService } from './service/numeros.service';
import { Numero } from './models/numero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Front-End';

  alumnos:Alumno[]=[];
  numeros:Numero[]=[];
  valor!:number;
  nombreAlumno:string='';

  constructor(private alumnoService:AlumnosService,private numerosService:NumerosService){}

  ngOnInit(): void {
      this.getAlumnos();
      this.getNumeros();
  }

  getAlumnos():void{
    this.alumnoService.getAlumnos().subscribe(
      data=>{
        this.alumnos=data;
      },
      err=>{
        window.alert('Error'+err)
      }
    )
  }

  getNumeros():void{
    this.numerosService.getNumeros().subscribe(
      data=>{
        this.numeros=data;
      },
      err=>{
        window.alert('Error'+err)
      }
    )
  }

  postNumero():void{
    const numero= new Numero(this.valor);
    this.numerosService.postNumero(numero).subscribe(
      data=>{
        window.alert("Es par: "+ data.respuesta)
        location.reload();
      },
      err=>{
        window.alert('Error'+err)
      }
    )
  }

}


