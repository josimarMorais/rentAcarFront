import { Component, OnInit } from '@angular/core';
import { User } from '../../../_models/user.model';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.css'
})
export class UserUpdateComponent {

  user?: User;
  id = '';
  nome: String = '';
  email: String = '';


  constructor( private userService: UserService){
    this.getUser();
    this.preencherCampos(this.user!);
  }

  getUser(){
    this.user = this.userService.getUser();
  }

  atualizar(){
    this.userService.editarMusica({id: parseInt(this.id), nome: this.nome, email: this.email}).subscribe();
  }

  preencherCampos(user: User){
    this.id = user.id!.toString();
    this.nome = user.nome;
    this.email = user.email
  }

}
