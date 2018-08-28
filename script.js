// Loops and Iteneration

// for loops

/*
for (var i = 0; i < 10; i ++) {
    console.log(i);
} */

// i = 0, 0 < 10 true, log i to console, i ++
// i = 1, 1 < 10 true, log i to console, i ++
// i = 2, 2 < 10 true, log i to console, i ++
// ... all the way until
// i = 9, 9 < 10 true, log i to console, i ++
// i = 10, 10 < 10 FALSE, exit loop

/*
// for loop example
var nate = ['Nate', 'Swift', 1993, 'Web Developer', false];
for (var i = 0; i < nate.length; i++) {
    console.log(nate[i]);
}

// while loop
var i = 0;
while(i < nate.length) {
    console.log(nate[i]);
    i++;
}
*/

// continue and break statements

// break statements - stop loop at break
// continue statements - quit current interation of loop and begin where we left off
// !== different

/*
var nate = ['Nate', 'Swift', 1993, 'Web Developer', false, 'beach'];
for (var i = 0; i < nate.length; i++) {
    if (typeof nate[i] !== 'string') continue;
    console.log(nate[i]);
}
var nate = ['Nate', 'Swift', 1993, 'Web Developer', false];
for (var i = 0; i < nate.length; i++) {
    if (typeof nate[i] !== 'string') break;
    console.log(nate[i]);
}

// looping backwards

var nate = ['Nate', 'Swift', 1993, 'Web Developer', false];
//doesn't require this variable each time but it's nice to see where we're referencing the function
for (var i = nate.length - 1; i >= 0; i--) {
    console.log(nate[i]);
}
*/

// More advanced tip calculator
// nate - went to 5 resturants - 20% < $50, 15% >$50 && <$200, 10% > $200
// create object w/ array for bill val - add method to cal tips
// method - loop over bills
// output - [all tips], [final paid amounts]
// jerry - 4 resturants - 20% < $100, 10% > $100 && < $300, 25% > $300
// output2 - cal avg tip for each family - **jerry 4 and nates 5


var nate = {
    fullName: 'Nate Swift',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // determine percentage based on tipping rules
            var percentage;

            if (this.bills[i] < 50) {
                percentage = .2;
            } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            } 
            // add result to corresponding arrays
            this.tips[i] = this.bills[i] * percentage;
            this.finalValues[i] = this.bills[i] + this.bills[i] * percentage
        }
    },
    calcAverage: function () {
        this.sum = [142.6, 57.6, 294.8, 207, 50.4].reduce(add, 0);

        /* ****** ADDING ARRAYS TOGETHER IN FUNCTIONS!
        The reduce() method reduces the array to a single value.

        The reduce() method executes a provided function for each value of the array (from left-to-right).

        The return value of the function is stored in an accumulator (result/total).
        */

        function add(a, b) {
        return a + b;
        }
        for (var i = 0; i < this.bills.length; i++) {
            this.average = this.sum / 4;
        } 
    }
} 

nate.calcTips();
nate.calcAverage();
console.log(nate);

var jerry = {
    fullName: 'Jerry Hansana',
    bills: [77, 375, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // determine percentage based on tipping rules
            var percentage;
            // **** why i changed this.bills[i] if we get tired of writing 
            //out the length of that we can add this.bills[i] to a var to make our syntax easier 
            // EX BELOW
            // if this confuses you check out the nate for loop tip calc above to see it unchanged
            var bills = this.bills[i];

            if (bills < 100) {
                percentage = .2;
            } else if (bills >= 100 && bills < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            } 
            // add result to corresponding arrays
            this.tips[i] = bills * percentage;
            this.finalValues[i] = bills + bills * percentage;
        }
    },
    calcAverage: function () {
        this.sum = [92.4, 468.75, 121, 54].reduce(add, 0);

        /* ****** ADDING ARRAYS TOGETHER IN FUNCTIONS!
        The reduce() method reduces the array to a single value.

        The reduce() method executes a provided function for each value of the array (from left-to-right).

        The return value of the function is stored in an accumulator (result/total).
        */

        function add(a, b) {
        return a + b;
        } 

        for (var i = 0; i < this.bills.length; i++) {
            this.average = this.sum / 4;
        } 
    }
} 

jerry.calcTips();
jerry.calcAverage();
console.log(jerry);

whoDid = new function() {
if (jerry.average > nate.average ) {
    console.log('Jerry spent more on average.')
} else {
    console.log('Nate spent more on average.')
}
}

/* Answers 
script.js:172 {fullName: "Nate Swift", bills: Array(5), calcTips: ƒ, calcAverage: ƒ, tips: Array(5), …}average: 188.1bills: (5) [124, 48, 268, 180, 42]calcAverage: ƒ ()calcTips: ƒ ()finalValues: (5) [142.6, 57.6, 294.8, 207, 50.4]fullName: "Nate Swift"sum: 752.4tips: (5) [18.599999999999998, 9.600000000000001, 26.8, 27, 8.4]__proto__: Object
script.js:225 {fullName: "Jerry Hansana", bills: Array(4), calcTips: ƒ, calcAverage: ƒ, tips: Array(4), …}average: 184.0375bills: (4) [77, 375, 110, 45]calcAverage: ƒ ()calcTips: ƒ ()finalValues: (4) [92.4, 468.75, 121, 54]fullName: "Jerry Hansana"sum: 736.15tips: (4) [15.4, 93.75, 11, 9]__proto__: Object
script.js:231 Nate spent more on average.
*/