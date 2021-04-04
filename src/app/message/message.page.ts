import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacts } from '../interfaces/Contacts';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  contact: any = {};
  messages: any = [];
  message: any;
  cleanMessage;
  user: any;
  contactId: number;
  sendForm: FormGroup;

  constructor(private actRouter: ActivatedRoute, private chatService: ChatService, private router: Router, private fb: FormBuilder) {
    this.actRouter.params.subscribe(params => this.contactId = params['id'])
  }

  ngOnInit() {
    this.getContact();
    this.validation();
    this.getMessages();
    this.user = localStorage.getItem('user');
  }

  validation(){
    this.sendForm = this.fb.group({
      send_message: ['', Validators.required]
    })
  }
  
  //Pega o contato específico
  getContact(){
    this.chatService.getContact(this.contactId).subscribe(
      (res) => {
        this.contact = res;
      }, error => {
        const erro = error.error;
        console.log(erro);
        this.router.navigateByUrl('/home');
      }
    )
  }


  //Retorna as mensagens
  getMessages(){
    this.chatService.getMessages().subscribe(
      (res) => {
        this.message = res;
      }
    )
  }

  //Envia as mensagens
  sendMessages(){
    if(this.sendForm.valid){
      this.messages = Object.assign({}, this.sendForm.value);

      this.chatService.sendMessages(this.messages).subscribe(
        () => {
          this.getMessages();
          this.cleanMessage = '';
          console.log("Mensagem enviada!");
        }
      ), error => {
        const erro = error.error;
        console.log(erro);
      }
    }

  }

}
