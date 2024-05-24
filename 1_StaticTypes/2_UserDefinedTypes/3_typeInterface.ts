type MathOperation = {
  (x: number, y: number): number;
};

const add: MathOperation = (x: number, y: number): number => x + y;
const subtract: MathOperation = (x: number, y: number): number => x - y;

console.log(add(5, 10));
console.log(subtract(10, 5));

export {};
