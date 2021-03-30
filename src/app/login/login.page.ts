import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  contacts: any;
  username: string;
  userphone:string;
  contactForm: FormGroup;

  constructor(private router: Router, private chatService: ChatService, private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.validation();
  }

  validation(){
    this.contactForm = this.formBuilder.group({
      username: ['', Validators.required],
      userphone: ['', Validators.required]
    });
  }

  localLogin(){
    if(this.contactForm.valid){
      localStorage.setItem('user', this.username);
      localStorage.setItem('user', this.userphone);
    }
    else{
      alert("O preenchimento de ambos os campos são obrigatórios!");
    }
  }

}
