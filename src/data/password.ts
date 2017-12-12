import {Options} from './option'
export class Password {
  name: String;
  password: String;
  lowercase: Boolean = true;
  uppercase: Boolean = true;
  numbers: Boolean = true;
  punctuations: Boolean = true;
  length: Int = 8;
  constructor(public name: String) {
    this.name = name;
    this.password = "";
  }
}
