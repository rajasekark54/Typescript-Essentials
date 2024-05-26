function toArray<T>(arg: T): T[] {
  return [arg];
}

const myNameArray = toArray('Alex');
const myNameArray1 = toArray<number>(2);
const myNameArray2 = toArray<boolean>(true);
