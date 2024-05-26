export {};

function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>('HEllo Typescript');
let output2 = identity<number>(1);

console.log(output1);
console.log(output2);

/* ------ */

type Employee = {
  name: string;
  role: string;
};

async function getEmployees<T>(url: string): Promise<T[]> {
  const result = await fetch(url);
  const parseResult = await result.json();
  return parseResult;
}

async function wrapper() {
  const employees = await getEmployees<Employee>('internalEmployeeService.com');
  const firstEmployee = employees[0];
}
