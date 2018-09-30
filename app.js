const questions = ['Is the sun hot?', 'What is the answer to 3 + 3?', 'Jackie has 29 eggs. She gives 1 away to Shelly, 5 away to Jean, 13 away to Tom, and 2 away to Wendy. After she gave away those eggs she lost one egg, and sold another for drugs. How many eggs does Jean have now?'];
const answers = [1,0,1];
const answerStrings = ['Yes', 6, 5];

const question = () => {
    if (questions[i]) {
        prompt(answers);
    }
    if (questions[i] === answers[i]) {
        console.log('correct');
    } else {
        console.log('incorrect');
    }
}

const questionCalc = (arr, fn) => {
    const arrRes = [];
    for (let i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}
const random = answerStrings[getRandomInt(answerStrings.length)];
console.log(random);