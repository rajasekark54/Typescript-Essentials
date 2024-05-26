console.log(' ---------- 1 --------');
@printDecoratorData
class Manager {
  task: string = 'Simple task';
  project: string = 'Simple project';

  constructor() {
    console.log('Initializing the Manager class');
  }
}

function printDecoratorData(value: Function, context: ClassDecoratorContext) {
  console.log('Value');
  console.log(value);
  console.log('context');
  console.log(context);
  context.addInitializer(() => {
    console.log('Initialized class ' + context.name);
  });
}
/* ----------- */
console.log(' ---------- 2 --------');

@withEmploymentDateOnPrototype
class Manager1 {
  task: string = 'Simple task';
  project: string = 'Simple project';

  constructor() {
    console.log('Initializing the Manager class');
  }
}

const manager1 = new Manager1();
console.log(manager1);

function withEmploymentDateOnPrototype(
  value: Function,
  context: ClassDecoratorContext
) {
  value.prototype.withEmploymentDateOnPrototype = new Date().toISOString();
}

/* ----------- */

console.log(' ---------- 3 --------');

@withEmployeeDate
class Manager2 {
  task: string = 'Simple task';
  project: string = 'Simple project';

  constructor() {
    console.log('Initializing the Manager class');
  }
}

const manager2 = new Manager2();
console.log(manager2);

function withEmployeeDate<T extends { new (...args: any[]): {} }>(
  baseClass: T,
  context: ClassDecoratorContext
) {
  return class extends baseClass {
    employmentDate = new Date().toISOString();
    constructor(...args: any[]) {
      super(...args);
      console.log('Adding employment date to ' + baseClass.name);
    }
  };
}

/* 
// value - complied code of class

// output
  Value
  1_class.js:66 class {
          constructor() {
              this.task = 'Simple task';
              this.project = 'Simple project';
              console.log('Initializing the Manager class');
          }
      }
  1_class.js:67 context
  1_class.js:68 {kind: 'class', name: 'Manager', metadata: undefined, addInitializer: ƒ}addInitializer: ƒ (f)kind: "class"metadata: undefinedname: "Manager"[[Prototype]]: Object
  1_class.js:70 Initialized class Manager
*/
