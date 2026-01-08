function sayMyName(){
     console.log("U");
     console.log("T");
     console.log("K");
     console.log("A");
     console.log("R");
     console.log("S");
     console.log("H");
     
}
sayMyName()

// function addTwoNumbers(no1 , no2){
//           console.log(no1 + no2);
// }
// // addTwoNumbers(3,2)

function addTwoNumbers(no1 , no2){
     // let result = no1 + no2;
     return no1 + no2
}
const result = addTwoNumbers(3,2)
console.log("Result", result);

function loginUserMessage(username= "sam"){
     if(!username){
          console.log("Please enter a username");
          return
          
     }
     return '${username} just looged in'
}
console.log(loginUserMessage("utkarsh"));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Utkarsh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]))

const square = n => n * n;
console.log(square(4)); 


/// Important
function num(n, callback) {
    return callback(n);
}
const double = (n) => n * 2;
console.log(num(5, double));