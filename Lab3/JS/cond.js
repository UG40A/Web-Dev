if ("0") {
  alert( 'Hello' );
} // alert will be shown

// sign
let value = prompt('Type a number', 0);
if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

// if>>?
let result = (a + b < 4) ? 'Below' : 'Over';

//if..else>>?
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

