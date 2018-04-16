function Passport() {
    this.number = Math.random();
}




function CreditCard() {
    this.value = 0;
    this.add = function(addValue) {
        if (addValue < 0) {
            let error = new Error('Cannot add negative money');
            throw error;
        }
        this.value += addValue; 
    }
    this.spend = function(spendValue) {
        if (spendValue > this.value) {
            throw new Error('Cannot spend more than have');
        }
        this.value -= spendValue;
    }
}

function Human() {
    this.leftPocket = null;
    this.rightPocket = new Passport();
    this.backPocket = new CreditCard();
    this.backPocket.creditCard.add(2000);
    this.name = Math.random();
}

let vasya = new Human();
vasya.backPocket.creditCard.add(200);
console.log(vasya.backPocket.creditCard.value);