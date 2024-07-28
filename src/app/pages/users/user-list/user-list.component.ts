import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../_services/user.service';
import { User } from '../../../_models/user.model';
import {  Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  //usuarios: User[] = [];
    usuarios$ = new Observable<User[]>();

  constructor(private route: Router, private userService: UserService){

  }

  ngOnInit(): void {
    this.obterUsuariosCadastrados();
  }


  obterUsuariosCadastrados() {
    //this.userService.obterUsuarios().subscribe( usuarios => this.usuarios = usuarios)
      this.usuarios$ = this.userService.obterUsuarios();
  }

  editarUsuario(usuario: User) {
    this.userService.setUser(usuario);
    this.route.navigate(['/usuarios/update']);
  }

  remover(id: Number){

   this.userService.remover(id).subscribe(() => this.ngOnInit());
  }
}
