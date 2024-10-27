import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { UbicacionComponent } from './componentes/ubicacion/ubicacion.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

const routes: Routes = [
  { path: "", component:InicioComponent },
  { path: "ubicacion", component:UbicacionComponent },
  { path: "contacto", component:ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
