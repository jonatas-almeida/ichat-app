import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacts } from '../interfaces/Contacts';
import { Messages } from '../interfaces/Messages';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  baseUrl = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  //Pega todas as mensagens
  getMessages(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/messages`);
  }

  //Envia as mensagens
  sendMessages(message: Messages){
    return this.http.post(`${this.baseUrl}/messages`, message);
  }

  //Salva os contatos para serem acessados posteriormente
  postContacts(contact: Contacts) {
    return this.http.post(`${this.baseUrl}/contacts`, contact);
  }
}
