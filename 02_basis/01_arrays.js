// Arrays

const myArr = [0,1,2,3,4,5]
// const myHeros = ["asd","fgsf","sfgs"]
// const myarray2 = new Array(6,7,8,9,10)
// console.log(myarray2)
// console.log(myArr[0]);


//Array Methods

// myArr.push(6)
// myArr.pop()
// myArr.unshift(9) // add no at start
// myArr.shift()// removes no from start

// console.log(myArr.indexOf(3));// tells index position

// console.log(myArr.includes(5)); // gives true and false 

// console.log(myArr.join()) // values converted to string , seprated

//*** */ slice , splice- It modefies the original array

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2)


