import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { HomeComponent } from './pages/home/home.component';
import { UserCreateComponent } from './pages/users/user-create/user-create.component';
import { UserUpdateComponent } from './pages/users/user-update/user-update.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},

  //Rotas do usuário:
  {path:'api/Users', component: UserListComponent},
  {path: 'api/Users/create', component: UserCreateComponent},
  {path: 'usuarios/update', component: UserUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
