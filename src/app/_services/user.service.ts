import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../_models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = `${environment.apiUrl}api/Users`;

  user: any;

  setUser(user: any){
    this.user = user;
  }

  getUser(){
    return this.user;
  }

  constructor(private httpClient: HttpClient) {
   }

  obterUsuarios(){
    return this.httpClient.get<User[]>(this.url)
  }

  cadastrarUsuario(usuario: User){
    return this.httpClient.post<User>(this.url, usuario);
  }

  editarMusica(usuario: User){
    return this.httpClient.put<User>(`${this.url}/${usuario.id}`, usuario);
  }

  remover(id: Number){
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}
