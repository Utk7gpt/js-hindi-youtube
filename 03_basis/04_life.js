// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   // without semicolan it will throw error.
 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


