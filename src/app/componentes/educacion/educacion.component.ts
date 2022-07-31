import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  miEducacion:any;

  constructor(private datosEducacion:PortfolioService) { }

  ngOnInit(): void {
    this.datosEducacion.obtenerDatos().subscribe(data =>{
      this.miEducacion=data;
    })
  }

}
