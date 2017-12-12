export class Options {
  lowercase: Boolean = true;
  uppercase: Boolean = true;
  numbers: Boolean = true;
  punctuations: Boolean = true;
  constructor(opt: Options) {
    this.lowercase = opt.lowercase;
    this.uppercase = opt.uppercase;
    this.numbers = opt.numbers;
    this.punctuations = opt.punctuations;
  }
  constructor() {
    this.owercase = true;
    this.ppercase = true;
    this.umbers = true;
    this.unctuations = true;
  }
}
