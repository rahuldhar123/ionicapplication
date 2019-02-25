
import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";


@IonicPage()
@Component({
  selector: 'page-find',
  templateUrl: 'find.html',
})
export class FindPage {
  public lat;
  public long;
  public rst1;
  public rst1_name;
  public rst2;
  public rst2_name;

  constructor( public http: HttpClient) {
  }


  findphar()
  {
    this.http.get('https://api.foursquare.com/v2/venues/search?client_id=XUE5OHFJNUDACMIFWVF5XMCUFUKPSWXTBBTSO1PHBFL0BGDK&client_secret=Z0RUZIJ4W5M3YLFHDQRL1VL2WQWDJHYSPJKXO2SKFALLHU0U&v=20180223&limit=5&ll='+this.lat+','+this.long+'&query=pharmacy').subscribe(data => {
      this.rst1=data.response.venues[0].location.address;
      this.rst1_name=data.response.venues[0].name;
      this.rst2=data.response.venues[1].location.address;
      this.rst2_name=data.response.venues[1].name;
    });
  }

}
