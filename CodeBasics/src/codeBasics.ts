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
