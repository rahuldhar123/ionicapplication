import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import {LoginPage} from '../login/login';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
    public user;
    public email;
    public password;
    public cpassword;

  constructor(public nav: NavController, public alertCtrl: AlertController) {
  }


  register(){
    if(this.password === this.cpassword){
        localStorage.setItem('username',this.user);
        localStorage.setItem('emailId',this.email);
        localStorage.setItem('password',this.password);
        localStorage.setItem('confirm password',this.cpassword);
        let alert = this.alertCtrl.create({
          title: 'Registration successful!',
          subTitle: 'You are registered as '+this.user,
          buttons: ['OK']
        });
        alert.present();
         this.nav.push(LoginPage);
    }else{
        let alert = this.alertCtrl.create({
          title: 'Registration unsuccessful!',
          subTitle: 'Password and Confirm password does not match',
          buttons: ['OK']
        });
        alert.present();
    }
  }

}
