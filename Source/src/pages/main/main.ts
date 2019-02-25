import { Component ,ViewChild,ElementRef} from '@angular/core';
import {NavController, AlertController, IonicPage} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {LoginPage} from '../login/login';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
 public rst:object;
  public gender;
public accuracy;
public name;
  constructor(public navC: NavController, public http: HttpClient,public alertC: AlertController) {
  }

  go() {
    this.http.get('https://gender-api.com/get?name=' + this.name + '&key=QRgDsZYMABklebgccu').subscribe(data => {
      this.gender= data.gender;
      this.accuracy = data.accuracy;
      console.log(this.rst);
    });
  }
    logout(){
        let alert = this.alertC.create({
          title: 'Log out',
          buttons: ['OK']
        });
        alert.present();
        this.navC.push(LoginPage);
    }

}

