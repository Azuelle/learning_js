
const prompt = require("prompt-sync")();

/*** ORIGINAL ***
let a = +prompt('a? ', '');
 
if (a == 0) {
  console.log( 0 );
}
if (a == 1) {
  console.log( 1 );
}
 
if (a == 2 || a == 3) {
  console.log( '2,3' );
}
*/

let a = +prompt('a? ', '');

switch (a) {
  case 0:
  case 1:
    console.log(a); break;
  case 2:
  case 3:
    console.log('2,3'); break;
}
