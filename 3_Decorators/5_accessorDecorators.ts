export {};
class Manager {
  @watchChange
  accessor project: string = 'Simple project';
}

const manager = new Manager();
manager.project = 'Complicate project';
manager.project = 'Super Complicate project';
console.log(manager.project);

function watchChange<T, V>(
  accessor: { get: (this: T) => V; set: (this: T, v: V) => void },
  context: ClassAccessorDecoratorContext<T, V>
) {
  return {
    get: function (this: T) {
      return accessor.get.call(this) + ' - some sprinkles';
    },
    set: function (this: T, value: V) {
      console.log(`setting ${context.name.toString()} to ${value}`);
      accessor.set.call(this, value);
    },
  };
}
