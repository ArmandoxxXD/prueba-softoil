import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Numero } from '../models/numero';

@Injectable({
  providedIn: 'root'
})
export class NumerosService {

  constructor(private http:HttpClient) { }

  apiURL='http://localhost:3001/numeros';

  public getNumeros():Observable<Numero[]>{
    return this.http.get<Numero[]>(this.apiURL);
  }

  public postNumero(numero:Numero):Observable<any>{
    return this.http.post<any>(this.apiURL,numero)
  }
}
