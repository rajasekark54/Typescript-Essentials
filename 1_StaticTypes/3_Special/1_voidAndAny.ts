// Void - function does not return anything
function greet(): void {
  console.log('Hello, World!');
}

let result: void = greet();
console.log(result);

// Any - Dynamic type, accept any type
let value: any;
value = 5;
value = 'Hello';
value = true;

let anyValue: any = 'Hello';
let length: number = anyValue.length;

export {};
