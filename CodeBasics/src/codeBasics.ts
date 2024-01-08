// --------->4th task
const getEvenNumbers = (arr: number[]): number[] => {
  return arr.filter(number => number % 2 === 0);
};

const numbers1 = [1, 3, 8, 9, 100, 23, 55, 34];
console.log(getEvenNumbers(numbers1));

// --------->5th task
function filterAnagrams(str: string, arr: string[]): string[] {
  const etalon = str.toUpperCase().split('').sort().join('');
  return arr.filter(
    item => etalon === item.toUpperCase().split('').sort().join('')
  );
}

// --------->6th task
function isComplete(course: { name: string; lessons: string[] }): boolean {
  return course.lessons.length > 3;
}

// --------->7th task
enum ModalStatus {
  Opened,
  Closed,
}

const buildModal = (
  text: string,
  status: ModalStatus
): { text: string; status: ModalStatus } => {
  return { text, status };
};

// --------->8th task
type User = {
  name: string;
  age: number;
};

const getOlderUser = (user1: User, user2: User): User | null => {
  if (user1.age > user2.age) return user1;
  if (user2.age > user1.age) return user2;
  return null;
};

// --------->9th task
const getParams = (params: string): any => {
  const arrOfParams = params.split('&');
  const initial: any = {};

  return arrOfParams.reduce((acc, item) => {
    const [key, value] = item.split('=');
    acc[key] = value;
    return acc;
  }, initial);
};

// example
console.log(getParams('per=10&page=5'));

// --------->11th task

namespace Company {
  export function isEmployeeEmail(
    email: string,
    companyDomain: string
  ): boolean {
    const [_, userDomain] = email.split('@');

    return userDomain === companyDomain;
  }
}

type User1 = {
  email: string;
};

function authorize(user: User1 | null): boolean {
  const companyDomain = 'hexlet.io';

  const email = user?.email ?? '';

  return Company.isEmployeeEmail(email, companyDomain);
}

// --------->13th task
function map(
  arr: number[],
  callback: (n: number, index: number) => number
): number[] {
  const result: number[] = [];
  arr.forEach((numb, index) => {
    result.push(callback(numb, index));
  });
  return result;
}

// --------->14th task

function forEach(
  arr: number[],
  callback: (n: number, index: number) => void
): void {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

// --------->15th task
function fail1(message: string): never {
  throw new Error(message);
}

function fail2(): never {
  while (true) {
    console.log('infinity loop');
  }
}

// function fail3(code: number = 0): never {
//   process.exit(code);
// }

// function fail4(): never {
//   return exit(1);
// }

// --------->16th task
function isPlainObject(value: unknown): boolean {
  return value instanceof Object && !Array.isArray(value);
}

// --------->17th task ---> Destructurization

type Course = {
  lessons: string[];
};

function lessonsCount({ lessons }: Course): number {
  return lessons.length;
}

// --------->18th task ---> Rest и Spread
function max(num: number, ...numbers: number[]): number {
  return Math.max(num, ...numbers);
}

// --------->19th task ---> Function Overloads
type NewYearCongratulate = {
  (name: string): string;
  (year: number, name: string): string;
};

const newYearCongratulate: NewYearCongratulate = (
  data1: string | number,
  data2?: string
): string => {
  if (data2) {
    return `Hi ${data2}! Happy New Year ${data1}!`;
  } else {
    return `Hi ${data1}! Happy New Year!`;
  }
};

// --------->20th task ---> Type Narrowing, Type Guard
function last(value: string | number): string | number {
  if (typeof value === 'number') {
    return value % 10;
  }

  return value[value.length - 1] ?? '';
}

function isPresence(value: unknown): boolean {
  if (value === null || value === undefined) {
    return false;
  }
  // empty string
  if (typeof value === 'string') {
    if (value === '') {
      return false;
    }
  }
  // empty array
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return false;
    }
  }
  // empty object
  if (value instanceof Object) {
    if (Object.keys(value).length === 0) {
      return false;
    }
  }

  return true;
}

function foo(value: number | string) {
  switch (typeof value) {
    case 'number':
      // ...
      break;
    case 'string':
      // ...
      break;
  }
}

function isObject(value: unknown): value is object {
  return typeof value === 'object' && value !== null;
}

// --------->21th task ---> Type Annotations
// 1
function unique(arr: (number | string)[]): (number | string)[] {
  return [...new Set(arr)];
}

// 2
type User2 = {
  name: string;
};

const users: User2[] = [];

function foo1(users: User2[]) {
  return users;
}

// 3
const users1: { name: string }[] = [];
const users2: (string | null)[] = [];
const users3: (User2 | null | { name: string })[] = [];

// 4
const users4: Array<User> = [];
const users5: Array<number> = [];
const users6: Array<User> = [];

const users7: Array<{ name: string }> = [];
const users8: Array<string | null> = [];

// --------->22th task ---> Multidimensional Arrays

// 1
// first option
function getField(size: number): null[][] {
  const field = Array<null>(size)
    .fill(null)
    .map(() => Array<null>(size).fill(null));
  return field;
}

// second option
function getField1(size: number): null[][] {
  const field: null[][] = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      row.push(null);
    }
    field.push(row);
  }

  return field;
}

// 2
const items1 = [
  [3, 8],
  [10, 4, 8],
];

const items2: number[][] = [];

type User3 = {
  name: string;
};

const users9: User3[][] = [[{ name: 'Eva' }, { name: 'Adam' }]];

// 3
const coll: (string | number)[][] = [];
coll.push(['hexlet', 5]);

// 4
const coll1: Array<Array<string | number>> = [];
coll1.push(['hexlet', 5]);

// 5
type Course1 = {
  name: string;
  lessons: Lesson[];
};

type Lesson = {
  name: string;
  links: string[];
};

// --------->23th task ---> Readonly Arrays

// first option
function reverse(arr: ReadonlyArray<number>): Array<number> {
  return arr.map((_, index) => arr[arr.length - 1 - index]);
}

// second option
function reverse1(arr: readonly number[]): Array<number> {
  const result: Array<number> = [];
  arr.forEach(numb => result.unshift(numb));
  return result;
}

// third option
function reverse3(arr: ReadonlyArray<number>): Array<number> {
  return arr.reduceRight((acc, numb) => {
    acc.push(numb);
    return acc;
  }, [] as number[]);
}

// --------->24th task ---> Tuples (can push)

type HTTPResponse = [number, string?]; //can be with optional param

type Point = [number, number, number];

function isTheSamePoint(point1: Point, point2: Point): boolean {
  return point1.every((numb, ind) => numb === point2[ind]);
}

// --------->25th task ---> Types as a set

type CustomType = null | undefined | number;

// --------->26th task ---> Union Types

// 1
type AllowedToConcatenation = number | string | null | undefined | boolean;

const concat = (
  base: AllowedToConcatenation,
  suffix: AllowedToConcatenation
): string => `${base}${suffix}`;

// 2
function lastIndex(str: string, char: string): number | null {
  const result = str.lastIndexOf(char);
  return result < 0 ? null : result;
}

// --------->27th task ---> Null and Undefined

function formatPrice(price?: number | null): string {
  if (price === undefined || price === null) {
    return '$0.00';
  }

  return `$${price.toFixed(2)}`;
}

// --------->28th task ---> Literal Types

type Hexlet = 'hexlet';
type One = 1;
type False = false;
type BigN = 100n;

// Literal Types Union

type OrderStatus = 'Created' | 'Paid' | 'Shipped' | 'Delivered';

type NumberFalse = number | false;

// String enums

enum OrderStatus1 {
  Created = 'Created',
  Paid = 'Paid',
  Shipped = 'Shipped',
  Delivered = 'Delivered',
}

// Literal Object

type DataSourceOption = {
  type: 'postgre' | 'mysql';
  host: string;
  port: number;
};

// Literary reduction

const ormConfig = {
  type: 'mysql',
  host: 'localhost',
  port: 5432,
} as const;

const str = 'test' as const;
type Str = typeof str; // 'test'

// Example
type Turtle = 'turtle' | null;

type Game = {
  makeTurn: (direction: 'left' | 'right') => void;
  state: Array<Turtle>;
};

const startGame = (): Game => {
  const state: Array<Turtle> = ['turtle', null, null, null, null];
  const stateLength = 4;

  const makeTurn = (direction: 'left' | 'right'): void => {
    const turtleIndex = state.indexOf('turtle');
    const nextIndex = direction === 'left' ? turtleIndex - 1 : turtleIndex + 1;

    if (nextIndex < 0 || nextIndex > stateLength) {
      throw new Error('Out of bounds');
    }

    state[turtleIndex] = null;
    state[nextIndex] = 'turtle';
  };

  return { makeTurn, state };
};

// --------->29th task ---> Intersections Types
enum Permission {
  READ,
  WRITE,
  DELETE,
}

type User4 = {
  login: string;
};

type AdminPermission = {
  permission: Permission;
};

type Admin = User4 & AdminPermission;

const addAdmin = (user: User4): Admin => ({
  ...user,
  permission: Permission.READ,
});

// --------->30th task ---> Assignability //can be  Error: Type X is not assignable to type Y..

type Form = {
  age: {
    value: number;
    validator: (val: number) => boolean;
  };
  name: {
    value: string;
    validator: (val: string) => boolean;
  };
};

const form: Form = {
  name: {
    value: 'Mark',
    validator: (val: string) => val.length > 1,
  },
  age: {
    value: 16,
    validator: (val: number) => val > 18,
  },
};

// --------->31th task --->Type hierarchy

// Types as subsets
type ComparatorCallback = (
  item1: number,
  item2: number,
  index: number
) => -1 | 0 | 1;
declare function sort(
  arr: Array<number>,
  callback: ComparatorCallback
): Array<number>;

const arr = [1, 2, 3];
const comparator = (item1: number, item2: number) => Math.sign(item1 - item2);

// sort(arr, comparator); // Error: Type 'number' is not assignable to type '0 | 1 | -1'.

// Literary types
let num: number = 1;
const two: 2 = 2;
const notTrue: false = false;

num = two;
// num = notTrue; // Type 'boolean' is not assignable to type 'number'.

// unknown
// 1
let unknownValue: unknown = 1;

unknownValue = 2; // OK
unknownValue = false; // OK
unknownValue = 'string'; // OK

// 2
let unknownValue1: unknown;

unknownValue = 'string';
// unknownValue1toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'unknown'.

type UnionWithUnknown = unknown | number | boolean; //type will be unknown

// never
let neverValue: never;
const two1: 2 = 2;

// neverValue = two1; // Type 'number' is not assignable to type 'never'

// multiple types
type NumberUnion = -2 | -1 | 1 | 2;

const one: NumberUnion = 1;
const num1: number = one;

type StringUnion = 'a' | 'b' | 'c' | 'd';

const aChar: StringUnion = 'a';
const str1: string = aChar;

// Typing
// 1
let num2 = 1; // Неявное восходящее приведение
let one2: number = 1; // Явное восходящее приведение

let two2 = num2 as 2; // Явное нисходящее приведение

let three2 = 3 as const; // Приведение к литеральному типу — нисходящее

// 2
const args = [8, 5]; // args: number[]
// const angle = Math.atan2(...args); // error! A spread argument must either have a tuple type or be passed to a rest parameter.
// console.log(angle);

const args1 = [8, 5] as const; // readonly [8, 5]
const angle = Math.atan2(...args1); // okay
console.log(angle);

// example
type User5 = {
  id: number;
  name: string;
  age: number;
};

type Friends = [number, number];

export type UserResponse = {
  users: User5[];
  friends: Friends[];
};

// first option
function getUserFriends(userJson: string, userId: number): User5[] {
  const userData: UserResponse = JSON.parse(userJson);

  const friends = userData.friends.reduce((acc, item) => {
    const [id1, id2] = item as Friends;
    if (id1 === userId || id2 === userId) {
      const friendId = id1 === userId ? id2 : id1;
      const userFriend = userData.users.filter(({ id }) => friendId === id);
      if (userFriend.length > 0) {
        acc = [...acc, ...userFriend];
      }
    }
    return acc;
  }, [] as User5[]);

  return friends;
}

// second option
const defaultUser = { id: 0, name: '', age: 0 };
const getUserFriends1 = (userResponseJSON: string, userId: number): User5[] => {
  const userResponse = JSON.parse(userResponseJSON) as UserResponse;

  return userResponse.friends
    .map(([ownerId, friendId]: Friends): User5 => {
      if (!(userId === ownerId || userId === friendId)) return defaultUser;
      const searchId = ownerId === userId ? friendId : ownerId;
      const friend: User5 | undefined = userResponse.users.find(
        ({ id }) => id === searchId
      );

      return friend === undefined ? defaultUser : friend;
    })
    .filter((user: User5) => user.id > 0);
};
