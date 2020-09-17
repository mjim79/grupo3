import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './pages/login/login-component/login-component.component';
import { ListadoUsuariosComponentComponent } from './pages/user/listado-usuarios-component/listado-usuarios-component.component';
import { ListadoRecursosComponentComponent } from './pages/resource/listado-recursos-component/listado-recursos-component.component';


const routes: Routes = [
      { path: '', component: LoginComponentComponent },
      { path: 'users', component: ListadoUsuariosComponentComponent},
      { path: 'resources', component: ListadoRecursosComponentComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }