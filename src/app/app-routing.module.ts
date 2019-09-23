import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UsuarioComponent } from '../app/usuario/usuario.component';
import { LoginComponent } from '../app/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'users', component: UsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
