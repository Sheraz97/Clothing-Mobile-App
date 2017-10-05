import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { MenuController } from 'ionic-angular'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HomePage;
  tab3Root = HomePage;
  tab4Root = AboutPage;

  constructor(
    private menu:MenuController
  ) {

  }
  OpenMenu(){
    console.log("MENU");
    this.menu.toggle();
  }
}
