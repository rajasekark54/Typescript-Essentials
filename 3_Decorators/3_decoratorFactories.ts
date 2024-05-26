type Task = {
  name: string;
  level: 'low' | 'medium' | 'complicated';
};

class Manager4 {
  @withTask({ name: 'added task', level: 'low' })
  task: Task[] = [];

  @withCompletedTask()
  extraTask: Task[] = [];
}

const manager4 = new Manager4();
console.log(manager4);

function withTask(task: Task) {
  return function <T, V extends Task[]>(
    target: undefined,
    context: ClassFieldDecoratorContext<T, V>
  ) {
    return function (args: V) {
      args.push(task);
      return args;
    };
  };
}

function withCompletedTask() {
  return withTask({
    name: 'added task',
    level: 'complicated',
  });
}
