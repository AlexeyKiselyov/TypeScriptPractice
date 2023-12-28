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
