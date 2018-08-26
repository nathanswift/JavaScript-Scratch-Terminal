var john = {
    name: 'John',
    height: 1.8,
    mass: 75,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
    },
}


var nate = {
    name: 'Nate',
    height: 1.8288,
    mass: 74,
    calcBmi: function () {
        this.bmi = this.mass / (this.height * this.height);
    },
}
john.calcBmi();
nate.calcBmi();
console.log(john, nate);

if (john.bmi > nate.bmi) {
    console.log('John\'s Bmi is greater');
} else {
    console.log('Nate\'s Bmi is greater');
}