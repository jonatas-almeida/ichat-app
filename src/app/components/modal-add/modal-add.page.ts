import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Contacts } from 'src/app/interfaces/Contacts';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.page.html',
  styleUrls: ['./modal-add.page.scss'],
})
export class ModalAddPage implements OnInit {

  contact: Contacts;
  contactForm: FormGroup;

  constructor(private chatService: ChatService, private modalController: ModalController, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.validation();
  }

  //Fecha o modal
  closeModal(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  //Validação dos campos de adicionar contatos
  validation(){
    this.contactForm = this.fb.group({
      contact_name: ['', Validators.required],
      contact_number: ['', Validators.required]
    })
  }

  //Registra um usuário de início
  registerContact(){
      this.contact = Object.assign({}, this.contactForm.value);

      this.chatService.postContacts(this.contact).subscribe(
        (novoContato: Contacts) => {
          console.log(novoContato);
          alert("Contato cadastrado!");
          this.router.navigateByUrl('/home');
          this.closeModal();
        }
      )
  }

}
