import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalAddPage } from '../components/modal-add/modal-add.page';
import { Contacts } from '../interfaces/Contacts';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contacts: any = [];
  username: string;
  userphone:string;

  constructor(private router: Router, private chatService: ChatService, private formBuilder: FormBuilder, private modalService: ModalController) {}

  ngOnInit(){
    this.getContacts();
  }

  //Abre o modal de adicionar contatos
  async openAddModal(){
    const modal = this.modalService.create({
      component: ModalAddPage,
      cssClass: 'modal-add'
    });

    return (await modal).present();
    
  }

  //Lista todos os contatos
  getContacts(){
    this.chatService.getContacts().subscribe(
      (response) => {
        this.contacts = response;
      }, error => {
        const erro = error.error;
        console.log(erro);
      }
    )
  }

  

}
