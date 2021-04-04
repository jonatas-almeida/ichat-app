import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacts } from '../interfaces/Contacts';
import { Favorites } from '../interfaces/Favorites';
import { Messages } from '../interfaces/Messages';
import { Users } from '../interfaces/Users';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  baseUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  //Pega todas as mensagens
  getMessages(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/messages`);
  }

  //Envia as mensagens
  sendMessages(message: Messages){
    return this.http.post(`${this.baseUrl}/messages`, message);
  }


  //Deleta a mensagem
  deleteMessage(id: number){
    return this.http.delete(`${this.baseUrl}/messages/${id}`);
  }

  //---------------------------------------------------------------------------------------

  //Pega os contatos adicionados
  getContacts(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/contacts`);
  }

  //Pega o contato específico
  getContact(id: number){
    return this.http.get(`${this.baseUrl}/contacts/${id}`);
  }

  //Salva os contatos para serem acessados posteriormente
  postContacts(contact: Contacts) {
    return this.http.post(`${this.baseUrl}/contacts`, contact);
  }

  //Edita os contatos salvos
  editContacts(contact: Contacts, id: number){
    return this.http.put(`${this.baseUrl}/contacts/${id}`, contact);
  }

  //Deleta os contatos adicionados
  deleteContacts(id: number){
    return this.http.delete(`${this.baseUrl}/contacts/${id}`);
  }

  //---------------------------------------------------------------------------------------

  //Move a mensagem marcada como favorita para a parte de favoritos
  postFavorites(favorite: Favorites){
    for(favorite.id = 0; favorite.id == favorite.id; favorite.id + 1){
      return this.http.post(`${this.baseUrl}/favorites`, favorite);
    }
  }

  //Dispensar dos favoritos
  deleteFavorites(id: number){
    return this.http.delete(`${this.baseUrl}/favorites/${id}`);
  }

}
