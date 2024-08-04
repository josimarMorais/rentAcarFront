import { Component } from '@angular/core';
import { UserService } from '../../../_services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {
  id?: Number = 0;
  nome = '';
  email = '';

  constructor(private userService: UserService, private route: Router){

  }

  cadastrarUsuario(){
    this.userService.cadastrarUsuario({nome: this.nome, email: this.email}).subscribe(() => this.route.navigate(['/api/Users']));
  }
}
