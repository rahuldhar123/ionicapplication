import { Component } from '@angular/core';
import {MainPage} from '../main/main';
import {RegisterPage} from '../register/register';
import { IonicPage, NavController,AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public user;
  public password;
  constructor(public nav: NavController,public alertC: AlertController) {
  }

  register(){
    this.nav.push(RegisterPage);
  }

  signIn(){
    
    var lclname = localStorage.getItem('username');
    var lclpwd = localStorage.getItem('password');
    
    if(this.user == lclname && this.password == lclpwd){
                 this.nav.push(MainPage);
    }
    else{
         let alert = this.alertC.create({
          title: 'unsuccessful Login',
          subTitle: 'Password or Username incorrect',
          buttons: ['OK']
        });
        alert.present();
    }
  }

}
