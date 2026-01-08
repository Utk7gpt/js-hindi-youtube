
let a = 300
if (true){
    let a  = 10
    const b = 20
    var c  = 30 // var nahi use karte kyuki ye baad me dikkat pasida krta hai ye function scoped hot ahi nahi block scoped
    console.log("Inner: ", a);
    
}
// console.log(a);
//  console.log(b);
// console.log(c);

function one(){
    const username = "Utkarsh"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "Elliot"
    if (username === "Elliot" ){
        const website = " Youtube"
        console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);


/// +++++++++++ interesting +++++++++++

console.log(addone(5)) // will run perfectly

function addone(num){
    return num + 1
    
}

addtwo(3) //  will give an error

const addtwo = function(num){
    return num + 2
}

