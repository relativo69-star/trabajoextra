import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Serviccios } from './pages/serviccios/serviccios';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: '', component: Inicio},
  { path: 'servicios', component: Serviccios},
  { path: 'contacto', component: Contacto},
  { path: '**', redirectTo: '' } // redirige a inicio si la ruta no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
