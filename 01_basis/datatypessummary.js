// Primitive DataTypes
 // 7 types: string number, null, boolean, bigint, symbol, undefined

 // reference (Non primitive)
  // array, Objects, Functions


  // stack(primitive) Heap(Non Primitive)

  let myytname ="hello world"
  let antname = myytname
  antname="fghjhe"
  console.log(antname);
  console.log(myytname);

  let userone= {
    email:"tey@google.com",
    upi:"user@ybl"
  }
  let usertwo = userone
  usertwo.email = "eey@inei.com"
  console.log(usertwo);
  console.log(userone);