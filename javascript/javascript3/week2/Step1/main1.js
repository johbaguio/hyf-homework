
// Step 1 - Part1
console.log('==== Step1 - PART 1 ====');

const divisibilityChecker = x => {
    return y => y % x === 0;
}

const divisibleByThree = divisibilityChecker(3);
console.log(divisibleByThree(15));

const divisibleByTen = divisibilityChecker(10);
console.log(divisibleByTen(21));

const divisibleByTwentyOne = divisibilityChecker(21);
console.log(divisibleByTwentyOne(41));

//Step 2 - PART 2
console.log('==== Step1 - PART 2 ====');

let arr = [];
for (let i = 1; i <= 1000; i++) {
    arr.push(i);
}

console.log(arr);

let newArr = [];
for (let i = 1; i <= 30; i++) {
    newArr.push(i);
}

console.log(newArr);

const checkDivisibility = function () {
    let output = [];
    return function () {
        for (let i = 0; i < newArr.length; i++) {
            let number = arr.filter(y => y % newArr[i] === 0)
            output.push(number.length);
        }
        return output;
    }
}

const divisibleByNum = checkDivisibility();
console.log(divisibleByNum());

