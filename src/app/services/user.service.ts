import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  //Pega todos os usuários
  getUser(): Observable<any>{
    return this.http.get(`${this.baseUrl}/users`);
  }

  //Cadastra usuários
  postUsers(user: Users){
    return this.http.post(`${this.baseUrl}/users`, user);
  }

  //Configuração dos usuários
  editUsers(user: Users, id: number){
    return this.http.put(`${this.baseUrl}/users/${id}`, user);
  }

  //Exclui o usuário
  deleteUsers(id:number){
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }

  //---------------------------------------------------------------------------

}
