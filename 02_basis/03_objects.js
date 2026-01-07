// singleton

// object leterals
const mysym = Symbol("key1")

const jsuser = {
    name: "Utkarsh",
    "full name": "Utkarsh Gupta",
    [mysym]: "mykey1",  // important
    age: 19,
    location: "Lucknnow",
    email: "utk@google.com",
    isloggedin: false,
    lastloginDays:["Monday","Tuesday"]
}
// console.log(jsuser.email);
// console.log(jsuser['location']);
// console.log(jsuser[mysym]) //   output= Symbol(key1): 'mykey1'


jsuser.email = "ytdjk@gpt.com"
// Object.freeze(jsuser) // canot change values of jsuser


jsuser.greeting = function(){
    console.log("Hello JS user");
    console.log(jsuser);
    
}
jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());

