export {};
type Task = {
  name: string;
  level: 'low' | 'medium' | 'complicated';
};

class Manager4 {
  @withCompletedTask
  task: Task[] = [];
}

const manager4 = new Manager4();
console.log(manager4);

function withCompletedTask<T, V extends Task[]>(
  target: undefined,
  context: ClassFieldDecoratorContext<T, V>
) {
  return function (args: V) {
    args.push({
      name: 'added task',
      level: 'complicated',
    });
    return args;
  };
}

/* 
output
Manager4 
{
    "task": [
        {
            "name": "added task",
            "level": "complicated"
        }
    ]
}
*/
