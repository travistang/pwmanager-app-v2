import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the PasswordServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PasswordServiceProvider {
  storage: Storage;
  client: HttpClient;
  constructor(public http: HttpClient,public _storage: Storage) {
    console.log('Hello PasswordServiceProvider Provider');
    this.storage = _storage;
    this.client = http;
    this.initializeDatabase();
  }

  initializeDatabase() {
    // the address table
    //this.storage.query("CREATE TABLE IF NOT EXISTS address (addr VARCHAR(256) PRIMARY KEY)" );
  }

  getServerAddress() {
    //return this.storage.query("SELECT addr FROM address");
    return this.storage.get('address');
  }

  setServerAddress(addr) {
    // clear the address table
    //this.storage.query("DELETE FROM address");
    //return this.storage.query("INSERT INTO address (?)",[addr]);
    return this.storage.set('address',addr);
  }
}
