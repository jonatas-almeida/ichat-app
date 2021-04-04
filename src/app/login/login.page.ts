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
    if(localStorage.getItem('username') && localStorage.getItem('userphone')){
      this.router.navigateByUrl('/home');
    }
  }

  validation(){
    this.contactForm = this.formBuilder.group({
      username: ['', Validators.required],
      userphone: ['', Validators.required]
    });
  }

  //Adiciona o usuário localmente
  localLogin(){
    localStorage.setItem('username', this.username);
    localStorage.setItem('userphone', this.userphone);
    window.location.reload();
    this.router.navigateByUrl('/home');
  }

}
