import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { SettingsPage } from '../settings/settings';
import { PasswordsPage } from '../passwords/passwords';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = PasswordsPage;
  tab2Root = AboutPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
