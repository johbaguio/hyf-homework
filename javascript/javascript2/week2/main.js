//STEP 1, #1

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    let numbers = [];
    for(let i = startIndex ; i <= stopIndex ; i++){ 
    
        if( i % 3 === 0 && i % 5 === 0){
            threeCallback(i);
            fiveCallback(i);
        } else if (i % 5 === 0){
            fiveCallback(i);
        } else if (i % 3 === 0){
            threeCallback(i);
        }
    numbers.push(i); 
    }    
  console.log(numbers);
}

let sayThree = (num) => console.log("Number "+ num + " is divisible by three!");;
let sayFive = (num) => console.log("Number "+ num + " is divisible by five!");

threeFive(10, 15, sayThree, sayFive);
 

//Step 1 = #3 : using a for loop

function repeatString(str, num) {
    let newStr = '';
    for(; num >= 1 ; num--){
      newStr += str;
    }
    return newStr;
  }

  console.log(repeatString("abc", 3));


//Step 1 = #4 : using a while loop

  function rptStr(str, num) {
    let newStr = '';
    while(num >= 1){
        newStr += str;
        num--;
    }
    return newStr;
  }

  console.log(rptStr("def", 3));


// Step 1 = #5 :using a do loop

  function repeatStr(str, num) {
    let newStr = '';
    do{
        newStr += str;
        num--;
    }
    while (num >= 1);
    return newStr;
  }

  console.log(repeatStr("ghi", 3));
 

// Step 1 , number 9

let x = 9; 
function f1(val) { 
    val = val+1; 
    return val;
}
f1(x);
console.log(x); // prints 9 on the console because the value of the global variable x was never changed in the function. It was passed but was not changed and the one asked to be logged on the console is x which remains 9.


let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y); // prints 10 on the console because the value of the object with the key of x was added with 1 when the function was called.

//Step 2: FEEDBACK
