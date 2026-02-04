let a = 1, b = 1;
alert( ++a );
alert( b++ );
alert( a );
alert( b );

let a = 2;
let x = 1 + (a *= 2);
// a=4, x=5


let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(+a + +b); // 3
