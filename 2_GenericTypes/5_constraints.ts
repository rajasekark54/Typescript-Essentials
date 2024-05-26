export {};

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity({ length: 10, value: 3 });

/* ------- */

type ObjectWithTeam = {
  team: string;
};

type Programmer = ObjectWithTeam & {
  name: string;
  language: string;
};

function updateTeam<T extends ObjectWithTeam>(arg: T, newTeam: string): T {
  arg.team = newTeam;
  return arg;
}

let employee1: Programmer = {
  name: 'Raj',
  language: 'Javascript',
  team: 'CoolTeam',
};

let employee2 = {
  name: 'Raj',
  language: 'Javascript',
  team: 'CoolTeam',
};

updateTeam(employee1, 'SuperCoolTeam');
// or
updateTeam<Programmer>(employee2, 'SuperCoolTeam');

/* ------- */

type OldSchoolProgrammer<T extends 'Basic' | 'Lisp' = 'Basic'> = {
  language: T;
  name: string;
};

const myCoolColleague: OldSchoolProgrammer = {
  language: 'Basic',
  name: 'John',
};
