const Bee = require('./Bee');

class ForagerBee extends Bee{
  constructor(){
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.color = 'yellow';
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(str){
    this.treasureChest.push(str);
  }
}


module.exports = ForagerBee;
