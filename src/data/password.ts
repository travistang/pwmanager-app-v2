export class Password {
  name: String;
  password: String;
  lowercase: Boolean = true;
  uppercase: Boolean = true;
  numbers: Boolean = true;
  punctuations: Boolean = true;
  length: number = 8;

  constructor(pwName: String) {
    this.name = pwName;
    this.password = "";
  }
}
