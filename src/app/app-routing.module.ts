import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent, canActivate:[GuardGuard]},   //Establece la dirección del portfolio
  {path:'iniciar-sesion', component:IniciarSesionComponent},                    //Establece la dirección del inicio
  {path:'', redirectTo:'iniciar-sesion', pathMatch:'full'}                      //Redirecciona al Inicio si esta en blanco
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }