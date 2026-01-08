// const user = {
//     username: "utkarsh",
//     price: 999,
    
// }
//   function chai(){
//     let username = "utkarsh"
//     console.log(this.username);
    
//   }
// c hai() // undefined

const chai = () => {
    let username = "utkarsh"
    console.log(this.username);
}
chai()

const obj = {
    name: "Object",
    getname: function(){
        return this.name;
    }
};
console.log(obj.getname())


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()