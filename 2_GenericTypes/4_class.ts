export {};

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;

  constructor(zeroValue: T, add: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.add = add;
  }
}

let myGenericNumber = new GenericNumber<number>(0, (x, y) => x + y);
console.log(myGenericNumber.add(10, 5));

let myGenericNumber1 = new GenericNumber<string>('0', (x, y) => x + y);
console.log(myGenericNumber1.add('10', '5'));

/* --------- */

// We kept generic T in className. So, we don't nee to add it method level.

class MemoryDataBase<T> {
  protected items = new Array<T>();

  public addItem(item: T) {
    this.items.push(item);
  }

  public getItemsByIndex(index: number): T | undefined {
    return this.items[index];
  }

  public listItems() {
    this.items.forEach((item) => {
      console.log(item);
    });
  }
}

const namesDataBase = new MemoryDataBase<string>();
namesDataBase.addItem('Raj');
const first = namesDataBase.getItemsByIndex(0);

class MemoryDataBaseWithDelete<
  T extends { id: string }
> extends MemoryDataBase<T> {
  public delete(id: string) {
    const index = this.items.findIndex((x) => x.id === id);
    this.items.splice(index, 1);
  }
}

const dataBaseWithIds = new MemoryDataBaseWithDelete<{ id: string }>();
dataBaseWithIds.addItem({ id: '123' });
const firstId = dataBaseWithIds.getItemsByIndex(0);
