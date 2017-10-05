import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];
  constructor(public navCtrl: NavController) {
    this.items = [
      {
        id:1,
        image:'./assets/images/1.jpg'
      },
      {
        id:2,
        image:'./assets/images/2.jpg'
      },
      {
        id:3,
        image:'./assets/images/3.jpg'
      },
      {
        id:4,
        image:'./assets/images/4.jpg'
      },
      {
        id:5,
        image:'./assets/images/5.jpg'
      },
    ]
  }
  viewDetail(item){
    console.log(item);
    this.navCtrl.push(DetailPage,{item:item});
  }

}
