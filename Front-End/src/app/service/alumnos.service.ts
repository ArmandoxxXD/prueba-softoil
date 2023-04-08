import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http:HttpClient) { }

  apiURL='http://localhost:3001/alumno';

  public getAlumnos():Observable<Alumno[]>{
    return this.http.get<Alumno[]>(this.apiURL);
  }

}
