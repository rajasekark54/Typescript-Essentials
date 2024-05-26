// Generic way to define the type

/* function toArrayFromString(arg: string) {
  return [arg];
}

function toArrayFromNumber(arg: number) {
  return [arg];
}

function toArrayFromBoolean(arg: boolean) {
  return [arg];
} */

// Write the common method with generic type

function toArray<T>(arg: T): T[] {
  return [arg];
}

const myNameArray = toArray<string>('Alex');
console.log(myNameArray);

const myNumberArray = toArray<number>(1);
console.log(myNumberArray);

const myBooleanArray = toArray<boolean>(true);
console.log(myNumberArray);

export {};
