import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contacts } from '../interfaces/Contacts';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contacts: any;
  username: string;
  userphone:string;
  contactForm: FormGroup;

  constructor(private router: Router, private chatService: ChatService, private formBuilder: FormBuilder) {}

  ngOnInit(){
    this.getContacts();
  }

  //Lista todos os contatos
  getContacts(){
    this.chatService.getContacts().subscribe(
      (response) => {
        this.contacts = response;
        console.log(response);
      }
    )
  }

  //Registra um usuário de início
  addContact(){
    if(this.contactForm.valid){
      this.contacts = Object.assign({}, this.contactForm.value);

      this.chatService.postContacts(this.contacts).subscribe(
        () => {
          alert("Usuário cadastrado com sucesso!");
        }
      )
    }
  }

}
