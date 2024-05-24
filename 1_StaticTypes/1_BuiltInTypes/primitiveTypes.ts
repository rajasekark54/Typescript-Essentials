/* 
 number, string, boolean, void, null and undefined
*/
let age: number = 25;
let name: string = 'Alice';
let isDone: boolean = false;
let returnAnything = (name: string): void => {};
let value1: null = null; // Explicitly setting a variable to null
let value2: undefined = undefined; // Explicitly setting a variable to undefined

function checkValue(value: string | null | undefined) {
  if (value === null) {
    console.log('Value is null');
  } else if (value === undefined) {
    console.log('Value is undefined');
  } else {
    console.log(`Value is ${value}`);
  }
}

export {};
