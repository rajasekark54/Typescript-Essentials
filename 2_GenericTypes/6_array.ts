function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let numberArray = getArray<number>([1, 2, 3]);
let stringArray = getArray<string>(['a', 'b', 'c']);

console.log(numberArray);
console.log(stringArray);
