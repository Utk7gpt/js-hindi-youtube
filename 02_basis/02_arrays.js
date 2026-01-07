const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // modifies existing array
// let fds= marvel_heros.concat(dc_heros) // Returns new array
// console.log(fds)
const asd =[...marvel_heros,...dc_heros] // Spred  breal both array elements into single item then combined them
// console.log(asd);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);

console.log(Array.isArray("Utkarsh"));
console.log(Array.from("Utkarsh")); // converts a string to array
console.log(Array.from({name: "Utkarsh"}))// interesting gives empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // 'of' combines multiple values into array 
