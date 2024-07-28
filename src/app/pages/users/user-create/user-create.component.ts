import { Component } from '@angular/core';
import { UserService } from '../../../_services/user.service';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {
  id?: Number = 0;
  nome = '';
  email = '';

  constructor(private userService: UserService){

  }

  cadastrarUsuario(){
    this.userService.cadastrarUsuario({nome: this.nome, email: this.email}).subscribe();
  }
}
