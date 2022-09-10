import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'login',
},
{
  path: 'login',
  loadChildren: () =>
  import('./pages/login/login.module').then((value) => value.LoginModule),
},
{
  path: 'home',
  loadChildren: () =>
  import('./pages/home/home.module').then((value) => value.HomeModule),
},
{
  path: 'modulos',
  loadChildren: () =>
  import('./pages/modulos/modulos.module').then((module) => module.ModulosModule),
},
{
  path: 'usuarios',
  loadChildren: () =>
  import('./pages/usuarios/usuarios.module').then((module) => module.UsuariosModule),
},
{
  path: 'roles',
  loadChildren: () =>
      import('./pages/roles/roles.module').then(
          (module) => module.RolesModule
      ),
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


