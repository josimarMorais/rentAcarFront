import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { TesteComponent } from './pages/teste/teste.component';
import { HomeComponent } from './pages/home/home.component';
import { UserCreateComponent } from './pages/users/user-create/user-create.component';
import { UserUpdateComponent } from './pages/users/user-update/user-update.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},

  //Rotas do usuário:
  {path:'usuarios/list', component: UserListComponent},
  {path: 'usuarios/create', component: UserCreateComponent},
  {path: 'usuarios/update', component: UserUpdateComponent},
  {path: 'teste', component: TesteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
