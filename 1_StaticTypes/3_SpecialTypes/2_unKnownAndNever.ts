/*  
Unknown 
  - anything assignable to unknown
  - but unknown isn't assignable to anything without type checking
 */
let userInput: unknown;

userInput = 5;
userInput = 'Hello';

let userName: string;
if (typeof userInput === 'string') {
  userName = userInput;
  console.log(userName.toUpperCase()); //  It will not throw an error
}

// console.log(userName.toUpperCase());  It will throw an error

/* 
 Never
   - It is a type that represent values that never occur
   - functions that never complete normally
   - always throw an error
 */

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
