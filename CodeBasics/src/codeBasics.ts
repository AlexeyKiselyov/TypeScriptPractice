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
