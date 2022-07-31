import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string="http://localhost:8080";    //Acá va la URL de la API desde donde levanta los datos. Esta no es la correcta
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any> {
    //return this.http.get('./assets/data/data.json');
    return this.http.get<any>(this.url+"ver/persona")   //completa la URL de la API para traer los datos de la persona
  }
}