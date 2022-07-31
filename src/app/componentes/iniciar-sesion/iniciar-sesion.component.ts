import { Component, inject, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { from } from 'rxjs';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router) {          //Lo llamamos en el 'constructor' 
    this.form=this.formBuilder.group(
      {
        email:['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        deviceInfo: this.formBuilder.group({
          deviceId: ["17867868768"],
          deviceType: ["DEVICE_TYPE_ANDROID"],
          notificationToken: ["67657575eececc34"]
        })
      }
    )
   }          

  ngOnInit(): void {
  }
  get Email()
  {
    return this.form.get('email');
  }

  get Password()
  {
    return this.form.get('password');
  }

  onEnviar(event:Event)
  {
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value).subscribe(data =>{
      console.log("DATA:" + JSON.stringify(data));
      this.ruta.navigate(['/portfolio']);
    })
  }

}