export {};

function mapArray<T, U>(array: T[], transform: (item: T) => U): U[] {
  return array.map(transform);
}

let numbers = [1, 2, 3];
let string = mapArray(numbers, (num) => num.toString());
console.log(string);

/* ------- */

const scrumRole = {
  holdMeetings: false,
  teams: ['Team1', 'Team2'],
};

const productOwnerRole = {
  holdMeetings: true,
  reportsTo: 'upperManagement',
};

/* function mergeRoles(role1: object, role2: object) {
  return { ...role1, ...role2 };
} */

function mergeRoles<T extends object, G extends object>(
  role1: T,
  role2: G
): T & G {
  return { ...role1, ...role2 };
}

const scrumProductOwnerRole = mergeRoles(scrumRole, productOwnerRole);
console.log(scrumProductOwnerRole);
