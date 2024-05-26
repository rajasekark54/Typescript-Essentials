// Type interface
type MathOperation = {
  (x: number, y: number): number;
};

const add: MathOperation = (x: number, y: number): number => x + y;
const subtract: MathOperation = (x: number, y: number): number => x - y;

console.log(add(5, 10));
console.log(subtract(10, 5));

// Combining Types with Intersections
type Person = {
  name: string;
  age: number;
};

type Employee = Person & {
  employeeId: number;
};

const employee: Employee = {
  name: 'Alice',
  age: 30,
  employeeId: 12345,
};

console.log(employee); // Output: { name: 'Alice', age: 30, employeeId: 12345 }

export {};
