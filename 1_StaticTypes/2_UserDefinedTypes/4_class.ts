/* 
  public: Properties and methods are accessible from outside the class.
  private: Properties and methods are accessible only within the class.
  protected: Properties and methods are accessible within the class and its subclasses.
  static: Properties and methods belong to the class itself rather than instances of the class.
*/

class Animal {
  public name: string;
  private age: number;
  protected category: string;

  static numOfLegs: number = 4;

  constructor(name: string, age: number, category: string) {
    this.name = name;
    this.age = age;
    this.category = category;
  }

  public displayInfo(): void {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Category: ${this.category}`
    );
  }

  private increaseAge(): void {
    this.age++;
  }

  protected updateCategory(newCategory: string): void {
    this.category = newCategory;
  }

  static getDefaultCategory(): string {
    return 'Mammal';
  }
}

const animal = new Animal('Dog', 5, 'Canine');

console.log(animal.name); // Output: Dog
animal.displayInfo(); // Output: Name: Dog, Age: 5, Category: Canine

// Accessing static property and calling static method
console.log(Animal.numOfLegs); // Output: 4
console.log(Animal.getDefaultCategory()); // Output: Mammal

// Attempting to access private and protected members will result in TypeScript compilation errors
// console.log(animal.age); // Compilation Error: 'age' is private and only accessible within class 'Animal'
// console.log(animal.category); // Compilation Error: 'category' is protected and only accessible within class 'Animal'

// Private and protected members cannot be accessed from outside the class
// animal.increaseAge(); // Compilation Error: Property 'increaseAge' is private and only accessible within class 'Animal'
// animal.updateCategory("Feline"); // Compilation Error: Property 'updateCategory' is protected and only accessible within class 'Animal'
