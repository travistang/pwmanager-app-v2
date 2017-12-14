import { Component } from '@angular/core';
import { NavController,Tabs } from 'ionic-angular';
import { PasswordServiceProvider } from '../../providers/password-service/password-service'
@Component({
  selector: 'page-contact',
  templateUrl: 'settings.html',
  providers: [PasswordServiceProvider],
})
export class SettingsPage {
  tab: Tabs;
  passwordService: PasswordServiceProvider;
  address: String = "";

  constructor(public navCtrl: NavController,_passwordService: PasswordServiceProvider) {
    this.passwordService = _passwordService;
    this.getServerAddress(); // get the server address from the database
    this.tab = navCtrl.parent;
  }

  ionViewWillEnter() {
    // load the configs here
    this.getServerAddress();
  }

  getServerAddress() {
    this.passwordService.getServerAddress().then(addr => this.address = addr);
  }
  changeServerAddress() {
    // TODO: validations?
    // TODO: this
    this.passwordService.setServerAddress(this.address);
    this.backToPasswordList();

  }

  backToPasswordList() {
    this.tab.select(0);
  }
}
