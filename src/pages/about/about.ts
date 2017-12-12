import { Component,Input, } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Password } from '../../data/password'
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @Input()
  password: Password;

  constructor(public navCtrl: NavController) {
    this.password = new Password("");
    this.generatePassword();
  }

  generatePassword() {
    if (this.password == null) this.password = new Password("");
    var charList = "";
    var numberChars = "0123456789";
    var chars = "qwertyuiopasdfghjklzxcvbnm";
    var upperChars = chars.toUpperCase();
    var puncs = "!@#$%^&*()_+=-\\{}\"';:/.,?><";

    // gather character list
    if (this.password.lowercase)
    {
      charList = charList.concat(chars);
    }
    if (this.password.uppercase)
    {
      charList = charList.concat(upperChars);
    }
    if (this.password.punctuations)
    {
      charList = charList.concat(puncs);
    }
    if (this.password.numbers)
    {
      charList = charList.concat(numberChars);
    }

    // empty the password
    this.password.password = "";
    var pw = "";
    var randomInt = () => Math.floor(Math.random() * charList.length);
    for (var i = 0; i < this.password.length; i++)
    {
        pw = pw.concat(charList[randomInt()]);
    }
    // apply password
    this.password.password = pw;
  }

  isValidCharacterOptions() {
    return this.password.lowercase
      ||this.password.uppercase
      ||this.password.numbers
      ||this.password.punctuations;
  }
  numOptions() {
    var i = 0;
    if(this.password.lowercase)i++;
    if(this.password.uppercase)i++;
    if(this.password.numbers)i++;
    if(this.password.punctuations)i++;
    return i;
  }
  optionChecked(event) {
    if (this.numOptions() > 1) this.generatePassword()
    else {
      console.log("violated")
      this.password.lowercase = (event == 'lowercase')
      this.password.uppercase = (event == 'uppercase')
      this.password.numbers = (event == 'numbers')
      this.password.punctuations = (event == 'punctuations')

    }
  }
}
