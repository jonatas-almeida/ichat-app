import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  localUser: any;
  username: string;
  userphone:string;

  constructor(private router: Router, private chatService: ChatService, private formBuilder: FormBuilder, private modalService: ModalController) {}

  ngOnInit(){
    this.getLocalUser();
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


  //Verifica se existe um usuário local cadastrado, caso contrário ele volta para a tela de login
  getLocalUser(){
    if(localStorage.getItem('username') && localStorage.getItem('userphone')){
      this.localUser = localStorage.getItem('username');
    }
    else{
      this.router.navigateByUrl('/login');
    }
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

  //Deleta o contato
  deleteContact(id: any){
    this.chatService.deleteContacts(id).subscribe(
      () => {
        console.log('Contato deletado');
        this.getContacts();
      }
    )
  }

  

}
