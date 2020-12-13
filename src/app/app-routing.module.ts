import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DwvComponent } from './dwv/dwv.component';
import { LoginComponent } from './login/login.component';

// importar componentes

// arreglo de rutas
const routes: Routes = [ {path: '', component: LoginComponent},
{path: 'login', component: LoginComponent},
{path: 'dwv', component: DwvComponent},
{path: '', redirectTo:'login', pathMatch: 'full'}, // cuando este vacia la redirigimos 
{path: '**', component: LoginComponent} // cuando la ruta falle, cargamos tienda

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
