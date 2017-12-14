import { Component } from '@angular/core';
import { NavController,Tabs } from 'ionic-angular';
import { Storage, LocalStorage } from '@ionic/storage';

@Component({
  selector: 'page-contact',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  tab: Tabs;
  storage: Storage;
  address: String = "";

  constructor(public navCtrl: NavController) {
    this.storage = new Storage(LocalStorage);
    this.getServerAddress(); // get the server address from the database
    this.tab = navCtrl.parent;
  }

  ionViewWillEnter() {
    // load the configs here
    this.getServerAddress();
  }

  getServerAddress() {
    this.storage.get('server').then(addr => this.address = addr);
  }
  changeServerAddress() {
    // TODO: validations?
    this.storage.set('server',this.address);
    this.backToPasswordList();
  }

  backToPasswordList() {
    this.tab.select(0);
  }
}
