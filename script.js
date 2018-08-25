// Objects and Properties

//initial Object
var nate = {
    firstName: 'Nate',
    lastName: 'Swift',
    birthYear: 1993,
    family: ['Nicki', 'Rachel', 'Jackie', 'Ron'],
    job: 'Web Developer',
    isMarried: false
};
console.log(nate);
var x = 'birthYear';
console.log(nate[x]);
// console display - 1993

nate.job = 'designer';
nate['ismarried'] = true;
console.log(nate);
/* {firstName: "Nate", lastName: "Swift", birthYear: 1993, family: Array(4), job: "designer", …}*/

// new Object syntax

var nicki = new Object();
nicki.firstName = 'Nicki';
nicki.birthYear = 1997;
nicki['lastName'] = 'Lowe';
console.log(nicki);
/* console display -
{firstName: "Nicki", birthYear: 1997, lastName: "Lowe"} 
(With option to drop down object values)*/

// We can attach functions to objects making them 'methods'

//method basics
var nate = {
    firstName: 'Nate',
    lastName: 'Swift',
    birthYear: 1993,
    family: ['Nicki', 'Rachel', 'Jackie', 'Ron'],
    job: 'Web Developer',
    isMarried: false,
    retireYear: function () {
        this.retirement = this.birthYear + 65;
    },
    calcAge: function () {
        //this references the object you're inside
        this.age = 2018 - this.birthYear;
        // you can pass and make new variables in your object w this.
    }
};
// call the function before console.log
nate.calcAge();
nate.retireYear();
console.log(nate);

/* ***READ IN HERE IF CONFUSED!!!****
 {firstName: "Nate", lastName: "Swift", birthYear: 1993, family: Array(4), job: "Web Developer", …}
age: 25 *** - this isn't defined in the object but in the calcAge function
birthYear: 1993
calcAge: ƒ ()
family : (4) ["Nicki", "Rachel", "Jackie", "Ron"]
firstName: "Nate"
isMarried: false
job: "Web Developer"
lastName: "Swift"
retireYear: ƒ ()
retirement: 2058 *** - this isn't defined in the object but in the retireYear function
__proto__: Object
*/