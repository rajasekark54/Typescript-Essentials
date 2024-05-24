// Using Interface
interface MathOperation {
  (x: number, y: number): number;
}

const add: MathOperation = (x: number, y: number): number => x + y;
const subtract: MathOperation = (x: number, y: number): number => x - y;

console.log(add(5, 10));
console.log(subtract(10, 5));

// Extending Interface

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  name: 'Alice',
  age: 30,
  employeeId: 1234,
};

console.log(employee);

// export default {};
