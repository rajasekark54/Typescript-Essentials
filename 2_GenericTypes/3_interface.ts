export {};

interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
console.log(myIdentity(10));

/* --------- */

interface DoubleArray<T, R> {
  array1: Array<T>;
  array2: Array<R>;
}

type Programmer = {};
type Manager = {};

const employee: DoubleArray<Programmer, Manager> = {
  array1: [],
  array2: [],
};

interface IMemoryDataBase<T> {
  addItem(item: T): void;
  getItemsByIndex(index: number): T | undefined;
  listItems(): void;
}
