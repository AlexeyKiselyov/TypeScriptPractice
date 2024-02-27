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

// --------->32th task --->Structural typing
type IntersectionUser = {
  username: string;
  password: string;
} & {
  type: string;
};

const admin: IntersectionUser = {
  // требуется совпадение c объектным типом и слева и справа от оператора &
  username: 'test',
  password: 'test',
  type: 'admin',
};

type UnionUser =
  | {
      username: string;
      password: string;
    }
  | {
      type: string;
    };

const user: UnionUser = { username: 'test', type: 'user' }; // достаточно совпадения с одним из объектных типов

// example
enum LoadingStatus {
  Loading = 'Loading',
  Error = 'Error',
  Success = 'Success',
}
type DataState =
  | {
      status: LoadingStatus.Loading;
    }
  | {
      status: LoadingStatus.Error;
      error: Error;
    }
  | {
      status: LoadingStatus.Success;
      data: number;
    };

function handleData(dataState: DataState): string {
  if (dataState.status === LoadingStatus.Loading) {
    return 'loading...';
  }
  if (dataState.status === LoadingStatus.Error) {
    return dataState.error.message;
  }
  if (dataState.status === LoadingStatus.Success) {
    return String(dataState.data);
  }
  return 'unknown';
}

const loading: DataState = { status: LoadingStatus.Loading };
console.log(handleData(loading)); // loading...

const error: DataState = {
  status: LoadingStatus.Error,
  error: new Error('error'),
};
console.log(handleData(error)); // error

const success: DataState = { status: LoadingStatus.Success, data: 42 };
console.log(handleData(success)); // '42'

// --------->33th task --->Covariance and Contravariant

// --->First example
type ComparatorCallback1 = (item1: number, item2: number) => -1 | 0 | 1;
declare function sort(
  arr: Array<number>,
  callback: ComparatorCallback1
): Array<number>;

const arr1 = [1, 2, 3];
// 1st comparator variant with Error
const comparator1 = (item1: number, item2: number) => Math.sign(item1 - item2); // make error, because result of Math not '-1 | 0 | 1' => (item1: number, item2: number) => number;

//sort(arr, comparator1); // Error: Type 'number' is not assignable to type '0 | 1 | -1'.

// 2nd comparator variant withour Error
const comparator2 = (item1: number, item2: number) => {
  // (item1: number, item2: number) => -1 | 0 | 1;
  if (item1 === item2) {
    return 0;
  }

  return item1 > item2 ? 1 : -1;
};

// ---->Second example
type Formatter = (val: string) => string;

const formatToConcrete: Formatter = (): 'test' => 'test';
//const formatToNumber: Formatter = (val: '1') => val; // Error!

// ---->Practic
type Transaction = {
  apply: (amount: number) => number;
};

type Wallet = {
  transactions: Array<Transaction>;
  balance: number;
};

function applyTransactions(wallet: Wallet): number {
  try {
    let balance: number = wallet.balance;

    wallet.transactions.forEach(({ apply }) => {
      balance = apply(balance);
    });

    return balance;
  } catch (error) {
    return wallet.balance;
  }
}

// --------->34 tasks ---> Classes

type CustomSize = {
  name: string;
  size: number;
};

class CustomFile {
  name: string;
  size: number;

  constructor({ name, size }: CustomSize) {
    this.name = name;
    this.size = size;
  }

  toString(): string {
    return `${this.name} (${this.size} bytes)`;
  }
}

// --------->35 tasks ---> Classes as types

class Point1 {
  private x: number;

  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  isEqual(p2: Point1): boolean {
    return this.x === p2.x && this.y === p2.y;
  }
}

const point = new Point1(1, 2);
point.isEqual(new Point1(10, 1)); // OK
//point.isEqual({ x: 1, y: 2}); // Error: Argument of type '{ x: number; y: number; }' is not assignable to parameter of type 'Point'.

// practic
class CustomFile1 {
  name: string;
  size: number;
  isCopy: boolean;

  constructor(option: { name: string; size: number }) {
    this.name = option.name;
    this.size = option.size;
    this.isCopy = option instanceof CustomFile;
  }

  toString() {
    if (this.isCopy) {
      return `(copy) ${this.name} (${this.size} bytes)`;
    } else {
      return `${this.name} (${this.size} bytes)`;
    }
  }
}

const file = new CustomFile1({ name: 'open-world.jpeg', size: 1000 });
console.log(file.toString()); // open-world.jpeg (1000 bytes)

const file2 = new CustomFile1(file);
console.log(file2.toString()); // (copy) open-world.jpeg (1000 bytes)

const file3 = new CustomFile1(file2);
console.log(file2.toString()); // (copy) open-world.jpeg (1000 bytes)

// --------->36 tasks ---> Property and Method Protection

// private => only accessible within class
class PointPrivate {
  private x: number;

  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const p = new PointPrivate(10, 8);
//p.x; // Property 'x' is private and only accessible within class 'Point'.
//p.y; // Property 'y' is private and only accessible within class 'Point'.

// protected => only accessible within class and its subclasses
class PointProtected {
  protected x: number;

  protected y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Point3D extends PointProtected {
  protected z: number;

  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }

  public getCoordinates() {
    return [this.x, this.y, this.z]; // OK
  }
}

const pointProtected = new Point3D(10, 8, 5);
//pointProtected.x; // Property 'x' is protected and only accessible within class 'Point' and its subclasses.
//pointProtected.y; // Property 'y' is protected and only accessible within class 'Point' and its subclasses.
//pointProtected.z; // Property 'z' is protected and only accessible within class 'Point3D' and its subclasses.

// exercise

type CustomFileOptions = {
  name: string;
  size: number;
};

class CustomFile2 {
  private name: string;

  private size: number;

  constructor(options: CustomFileOptions) {
    this.name = options.name;
    this.size = options.size;
  }

  protected toString() {
    return `${this.name} (${this.size} bytes)`;
  }
}

class ImageCustomFile extends CustomFile2 {
  private width: number;

  private height: number;

  constructor(options: CustomFileOptions & { width: number; height: number }) {
    super(options);
    this.width = options.width;
    this.height = options.height;
  }

  toString() {
    return `${super.toString()} ${this.width}x${this.height}`;
  }
}

// --------->37 tasks ---> Options Properties

class CustomFile3 {
  constructor(public name: string, private size: number) {}

  toString() {
    return `${this.name} (${this.size} bytes)`;
  }
}

// --------->38 tasks ---> Inheritance

// 1
class CustomFile4 {
  constructor(public name: string, public size: number) {}
}

class ImageCustomFile2 extends CustomFile4 {
  constructor(
    name: string,
    size: number,
    public width: number,
    public height: number
  ) {
    super(name, size);
  }
}

// example
class HttpError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

class NotFoundError extends HttpError {
  constructor(message: string) {
    super(404, message);
  }
}

class UnauthorizedError extends HttpError {
  constructor(message: string) {
    super(401, message);
  }
}

class ForbiddenError extends HttpError {
  constructor(message: string) {
    super(403, message);
  }
}

// --------->39 tasks ---> Static Methods and Properties

// Иногда нам требуется задать свойство или метод, который будет общим для всех экземпляров этого класса. Например, чтобы определить, является ли объект экземпляром класса. В таком случае при объявлении метода мы можем указать ключевое слово static, и он станет доступен через имя класса:

class CustomFile5 {
  private static readonly maxCustomFileSize = 1000;

  static isCustomFile(file: CustomFile5): boolean {
    return file instanceof CustomFile5;
  }

  protected static isCustomFileTooBig(size: number): boolean {
    return size > CustomFile5.maxCustomFileSize;
  }

  constructor(private name: string, private size: number) {
    if (CustomFile5.isCustomFileTooBig(size)) {
      throw new Error('CustomFile is too big');
    }
  }
}

CustomFile5.isCustomFile(new CustomFile5('open-world.jpeg', 1000)); // true

// Статическим методам и свойствам также можно назначить модификаторы доступа public, protected и private и модификатор неизменяемости readonly. Это позволяет ограничить использование свойств и методов только текущим классом или наследниками.

// В отличии от JavaScript в TypeScript статические свойства и методы не могут быть переопределены в подклассах:

class CustomFile6 {
  static maxCustomFileSize = 1000;

  static isCustomFile(file: CustomFile6): boolean {
    return file instanceof CustomFile6;
  }
}

class ImageCustomFile1 extends CustomFile6 {
  static maxCustomFileSize = 2000; // Error!

  static isCustomFile(file: CustomFile6): boolean {
    // Error!
    return file instanceof ImageCustomFile1;
  }
}

// Такой код не удастся скомпилировать. При этом остается доступ к статическим свойствам и методам родительского класса:

// const file = new ImageCustomFile();
// console.log(ImageCustomFile.maxCustomFileSize); // 1000
// console.log(ImageCustomFile.isCustomFile(file)); // true

// example:

class UserResponse1 {
  constructor(public user: string) {}

  static fromArray(array: string[]): UserResponse1[] {
    return array.map(item => new UserResponse1(item));
  }
}

const response = UserResponse1.fromArray(['user1', 'user2', 'user3']);
console.log(response[0].user); // user1
console.log(response[0] instanceof UserResponse1); // true

// --------->40 tasks ---> Abstract Class

// Когда нам нужно определить общее поведение для нескольких классов, удобно использовать
// Абстрактные классы хоть и не могут быть созданы напрямую, однако они могут быть наследованы. Еще они могут указать явно, какой метод должен быть реализован в наследниках:

abstract class CustomFile7 {
  protected name: string;

  protected size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  sizeInKb(): number {
    return this.size / 1024;
  }
}

class ImageCustomFile7 extends CustomFile7 {
  constructor(name: string, size: number) {
    super(name, size);
  }
}

// Чтобы выносить из классов общую часть кода, абстрактные классы активно используются для построения архитектуры приложения и фреймворков. Например, в React есть класс Component, который может быть представлен как абстрактный класс. Мы не можем создать его напрямую, но он требует от наследников реализации метода render. Это позволяет создавать компоненты, которые будут рендериться при инициализации:

abstract class Component {
  abstract render(): void;

  constructor() {
    this.render();
  }
}

// exercise

abstract class Clock {
  constructor(
    protected hours: number,
    protected minutes: number,
    protected seconds: number
  ) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.render();
  }

  tick(): void {
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes += 1;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours += 1;
    }
    if (this.hours === 24) {
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
  }

  abstract render(): string;
}

// ---------> 41 tasks ---> About Interfaces

// Интерфейс — это конструкция языка TypeScript, которая используется, чтобы описывать объекты и функции.
// Главная особенность интерфейсов связана с классами. Классы, которые реализуют интерфейсы, содержат внутри себя свойства и методы, указанные в реализуемом интерфейсе:

interface Countable {
  count(): number;
}

class SchoolClass implements Countable {
  // Тут какая-то логика
  count(): number {
    // Обязательно создать этот метод, так как он указан в интерфейсе
    return 1;
  }
}

const sc = new SchoolClass();
// Возвращает число студентов в классе
sc.count();

// В этом примере мы реализовали класс на основе интерфейса. Теперь во всех функциях, где объекты используются только для того, чтобы посчитать количество чего-либо внутри них, можно указывать Countable вместо SchoolClass:

// А не function doSomething(obj: SchoolClass)
function doSomething(obj: Countable) {
  // Где-то внутри вызывается
  obj.count();
}

// Так благодаря интерфейсам функция становится более универсальной. Мы можем передать любые объекты, соответствующие Countable, а не только SchoolClass. В программировании такая возможность называется полиморфизмом подтипов (Subtyping).

// exercise

interface IVehicle {
  seats: number;
  colour: string;
  canHavePassengers: boolean;
  fuelPer100Kilometers: number;
  calcFuelNeeded(distance: number): number;
}

class Car implements IVehicle {
  constructor(
    public seats: number,
    public colour: string,
    public canHavePassengers: boolean,
    public fuelPer100Kilometers: number
  ) {}
  calcFuelNeeded(distance: number): number {
    const fuelPer1Kilometers = this.fuelPer100Kilometers / 100;
    return distance * fuelPer1Kilometers;
  }
}

// ---------> 42 tasks ---> Use of interfaces

// Если интерфейс необходимо расширить дополнительными полями после его инициализации, мы можем повторно объявить интерфейс с новыми свойствами. Такой способ называется слиянием деклараций:

interface IUser {
  rating: number;
}

interface IUser {
  nickname: string;
  birthdate: number;
}

const sergey: IUser = {
  nickname: 'Sergey',
  birthdate: 1990,
  rating: 1102,
};

// Мы можем расширить интерфейс с помощью создания другого интерфейса, который наследуется от него:

interface IStudent extends IUser {
  group: number;
}

const andrey: IStudent = {
  nickname: 'Andrey',
  birthdate: 1990,
  rating: 1102,
  group: 2,
};

// Еще интерфейсы могут расширять сразу несколько других интерфейсов:
interface IUser1 {
  nickname: string;
  rating: number;
}

interface IEditor {
  courses: [string];
  canEdit: boolean;
}

interface IAuthor extends IUser1, IEditor {
  team: string;
}

const ivan: IAuthor = {
  nickname: 'Ivan',
  rating: 20,
  courses: ['typescript'],
  canEdit: true,
  team: 'College',
};

// Также TypeScript позволяет нам создавать перекрестные типы (intersection types) из нескольких интерфейсов c помощью литерала &:

interface IOneWay {
  one: string;
}

interface IOrAnother {
  another: string;
}

type OneWayOrAnother = IOneWay & IOrAnother;

const example: OneWayOrAnother = {
  one: 'A',
  another: 'B',
};

// Может случиться так, что мы не знаем заранее всех свойств, которые будут содержаться в нашем интерфейсе. Но нам известно их возможное содержание. В таком случае удобно использовать специальную индексную сигнатуру, которая позволяет описать типы возможных значений:

interface IPhoneBook {
  [index: string]: number;
}

const myNotePad: IPhoneBook = {
  ivan: 55531311,
  sergey: 55500110,
  mom: 55522111,
};

// training

interface IFlying {
  canFly: true;
}

interface IBird extends IFlying {
  isLiving: true;
}

interface IPlane extends IFlying {
  canCarryPeople: true;
}

interface ISuperMan extends IBird, IPlane {
  guessWho: (value: string) => string;
}

const superMan: ISuperMan = {
  canFly: true,
  isLiving: true,
  canCarryPeople: true,

  guessWho: (value: string) => {
    if (value.toLowerCase() === 'superman') {
      return `It's a ${value}!`;
    } else {
      return `It's a ${value}?`;
    }
  },
};

// ---------> 43 tasks ---> Realization of interfaces by classess

// => Интерфейсы могут быть расширены классами:
interface IBeep {
  sayBeep: () => string;
}

interface IBoop {
  sayBoop: () => string;
}

class Robo implements IBeep, IBoop {
  sayBeep = () => 'beep';

  sayBoop = () => 'boop';
}

const R2D2 = new Robo();
R2D2.sayBeep(); // 'beep'

// => Создание класса на основе интерфейса не ведет к точной реализации этого интерфейса в классе. TypeScript просто проверяет, удовлетворяют ли свойства и методы нашего класса свойствам, заявленным в интерфейсе. Сам же класс мы пишем вручную.

interface ICalculate {
  sum: (num1: number, num2: number) => number;
}

class Summator implements ICalculate {
  sum(num1: number, num2: number) {
    return num1 + num2;
  }

  // Если метод будет записан так:
  // sum(num1, num2) {
  //   return num1 + num2;
  // }
  // Для параметров будет выведено сообщение: Parameter 'num1'/'num2' implicitly has an 'any' type,
  // потому что TypeScript только проверяет класс на соответствие интерфейсу, но не наследуется от него полноценно

  multiply(num1: number, num2: number) {
    return num1 * num2;
  }
  // Мы добавили новый метод, но TypeScript не ругается
}

let calculator = new Summator();
// Наш код сработает, как если бы он сработал для аргументов с типом any,
// потому что типы параметров, равно как и все остальное, не были унаследованы классом при реализации интерфейса
calculator.sum(2, 3); // 5

// => Ошибка в реализации интерфейса классом возможна только тогда, когда мы не реализуем одно из свойств, указанных в интерфейсе. Или мы реализуем его не так, как указано в интерфейсе:

interface ICalculate1 {
  sum: (num1: number, num2: number) => number;
}

class Summator1 implements ICalculate1 {
  sum(num1: number, num2: number) {
    return num1 + num2;
  }

  // Если метод будет в с такими типами параметров:

  // sum(num1: string, num2: string) {
  //   return num1 + num2;
  // }

  // Мы изменили типы аргументов на string, то есть неверно реализовали интерфейс
  // В таком случае TypeScript обратит внимание на нашу ошибку и не скомпилируется:
  // Type '(num1: string, num2: string) => string' is not assignable to type '(num1: number, num2: number) => number'.
}

// => Если мы пишем класс, реализующий интерфейс с опциональными свойствами, нам нужно прописывать все самостоятельно. В противном случае эти свойства не попадут в наш класс:

interface ICalculate2 {
  sum: (num1: number, num2: number) => number;
  multiply?: (num1: number, num2: number) => number;
}

class Summator2 implements ICalculate2 {
  sum(num1: number, num2: number) {
    return num1 + num2;
  }
}

const calculator2 = new Summator2();
calculator2.sum(2, 3); // 5
// calculator2.multiply(2, 3); // Property 'multiply' does not exist on type 'Summator'.

// Выводы:
// Поскольку в TypeScript для одних и тех же вещей существует несколько разных инструментов, мы можем реализовывать классы с помощью расширения абстрактных классов вместо интерфейсов. Но выбор будет зависеть от задачи. Абстрактные классы предоставляют нам модификаторы доступа и конструкторы, в то время как интерфейсы более легковесны и просты.

//Задание:
// С помощью предоставленного интерфейса IPhonebook и типа Entry реализуйте класс Phonebook, который представляет телефонный справочник со следующими свойствами:

// entries — база данных, объект, записи в котором представляют собой имена в качестве ключей и телефоны в качестве значений. Свойство должно быть неизменяемым и доступным только для чтения
// get — метод, возвращающий телефон по имени
// set — метод, записывающий имя и телефон в справочник
// Примеры:
// typescript
// const myNote = new Phonebook();
// myNote.set('help', 911);
// myNote.get('help'); // 911

type Entry = {
  [key: string]: number;
};

interface IPhonebook {
  get(key: string): number | null;
  set(key: string, value: number): void;
}

class Phonebook implements IPhonebook {
  private readonly entries: Entry = {};

  get(key: string): number | null {
    return this.entries[key] || null;
  }

  set(key: string, value: number): void {
    this.entries[key] = value;
  }
}

// ---------> 44 tasks ---> Introduction to generics

// Дженерики в применении к функциям — это механизм, позволяющий создать такие функции, которые имеют одинаковую логику обработки для разных типов данных. Иногда такие функции называют обобщенными функциями.

// или так
// function merge<T>(coll1: T[], coll2: T[]): T[]
function merge<T>(coll1: Array<T>, coll2: Array<T>): Array<T> {
  // Тело функции не поменялось!
  const result = [];
  result.push(...coll1);
  result.push(...coll2);
  return result;
}

// Работает с массивами любых типов
// Сами массивы должны иметь совпадающий тип
merge([1, 2], [3, 4]); // [1, 2, 3, 4]
merge(['one', 'two'], ['three']); // ['one', 'two', 'three']

// Запись в <T> после имени функции говорит о том, что перед нами дженерик, который параметризуется типом T. T — это обозначение, что мы могли бы использовать любую другую заглавную букву, например, X.

// Чаще всего мы будем видеть это обозначение, так как это общепринятая практика.

// Что конкретно скрывается под типом с точки зрения кода дженерика — не важно. Это может быть объект, число, строка или булево значение. В вызовах примера выше это число для первого вызова и строка для второго. Так же можно было бы сделать вызов с булевыми значениями:

merge([true], [false, false]); // [true, false, false]

// Но типы могут и не совпадать. Ниже пример дженерика, который возвращает первый элемент любого массива и null если он пустой:

function first<T>(coll: Array<T>): T | null {
  return coll.length > 0 ? coll[0] : null;
}

first([]); // null
first([3, 2]); // 3
first(['code-basics', 'hexlet']); // code-basics

// Задание
// Реализуйте дженерик last(), который извлекает последний элемент из массива если он есть или null — если его нет:

function lastItem<T>(arr: Array<T>): T | null {
  return arr.length > 0 ? arr[arr.length - 1] : null;
}

lastItem([]); // null
lastItem([3, 2]); // 2
lastItem(['code-basics', 'hexlet']); // hexlet

// ---------> 45 tasks ---> Generic Types

const numbers: Array<number> = [];
numbers.push(1);

const strings: Array<string> = [];
strings.push('hexlet');

// Тип, который указывается внутри угловых скобок, называется параметром типа. Такое название выбрано неслучайно — указание параметра выглядит как вызов функции.

// Представим, что мы хотим определить свою коллекцию, которая работает как массив, но с дополнительными возможностями. Такие коллекции часто делают в ORM для работы с данными, загруженными из базы. Опишем сначала конкретную версию этого типа, работающую только с числами и парой стандартных методов:

type MyColl = {
  data: Array<number>;
  forEach(
    callback: (value: number, index: number, array: Array<number>) => void
  ): void;
  at(index: number): number | undefined;
};

// Здесь мы видим, что данные коллекции хранятся в числовом массиве. При этом в типе определено два метода, один из которых (forEach) передает элементы коллекции в колбек, а другой (at) возвращает элементы коллекции по указанному индексу. Одна из возможных реализаций этого типа может выглядеть так:

// Типы можно не прописывать, так как они указаны в `MyColl`
const coll2: MyColl = {
  data: [1, 3, 8],
  forEach(callback) {
    this.data.forEach(callback);
  },
  at(index) {
    // return this.data.at(index); // target >= ES2022
    return this.data[index];
  },
};

coll2.at(1); // 3

// Теперь попробуем обобщить этот тип, то есть сделать из него дженерик. Для этого нужно сделать одну простую вещь: для элементов коллекции вместо number написать T (или любое другое имя, начинающееся с большой буквы) и добавить T как параметр типа к определению:

type MyColl1<T> = {
  data: Array<T>;
  forEach(callback: (value: T, index: number, array: Array<T>) => void): void;
  at(index: number): T | undefined;
};

// На такое определение типа можно смотреть как на своеобразное определение функции. Когда указывается конкретный тип, например так: MyColl<string>, то T в данной ситуации заменяется на string внутри определения типа. Причем если внутри типа используются другие дженерики, то они "вызывают" тип дальше. То есть все это работает как вложенные вызовы функций.

// => Ограничения дженериков
// Дженерики могут иметь ограничения. Например, мы можем сказать, что тип, который передается в дженерик, должен реализовывать какой-то интерфейс. Для этого используется ключевое слово extends. Допустим, мы можем сделать так, чтобы наш тип MyColl работал только с типами, которые реализуют интерфейс HasId:

interface HasId {
  id: number;
}

type MyColl2<T extends HasId | number> = {
  data: Array<T>;
  forEach(callback: (value: T, index: number, array: Array<T>) => void): void;
  at(index: number): T | undefined;
};

// Это позволяет нам использовать тип MyColl только с типами, которые реализуют интерфейс HasId. Например, такой код не будет работать:

const coll3: MyColl2<number> = {
  data: [1, 3, 8],
  forEach(callback) {
    this.data.forEach(callback);
  },
  at(index) {
    // return this.data.at(index); // target >= ES2022
    return this.data[index];
  },
};

// Сами дженерики встречаются повсеместно в коде библиотек и фреймворков. Например в React типы компонентов оборачиваются в дженерики, чтобы можно было указать типы пропсов. С помощью дженериков можно создавать более универсальные типы, которые могут работать с разными типами данных

// Задание
// Реализуйте описание обобщенного типа MySet, который представляет из себя аналог множества Set из JavaScript.
// Тип включает в себя два метода: add() и has(). Данные внутри должны храниться в свойстве items

type MySet<T> = {
  data: Array<T>;
  add(item: T): number;
  has(item: T): boolean;
};

const s: MySet<number> = {
  data: [],

  add(item) {
    const dataHaveThisItem = this.data.indexOf(item);
    if (dataHaveThisItem < 0) {
      this.data.push(item);
      return this.data.length;
    } else {
      return this.data.length;
    }
  },

  has(item) {
    const dataHaveThisItem = this.data.indexOf(item);
    if (dataHaveThisItem < 0) {
      return false;
    } else {
      return true;
    }
  },
};

// ---------> 46 tasks ---> Generics (Functions)

// Представим, что дженерики пропали из языка. Тогда произойдет дублирование кода. Придется описывать один и тот же алгоритм для разных типов данных много раз.
// Возьмем для примера функцию lastData(), возвращающую последний элемент массива. Ниже ее обобщенная версия:

function lastData<T>(coll: T[]): T {
  return coll[coll.length - 1];
}

// Дженерики также могут использоваться в стрелочных функциях:

const lastData1 = <T>(coll: T[]): T => {
  return coll[coll.length - 1];
};

// Теперь попробуем реализовать то же поведение, но без применения дженериков. Для этого нам придется создать по одной функции для каждого типа. Причем имя функции должно быть уникальным:

function lastForNumberType(coll: number[]): number {
  return coll[coll.length - 1];
}

function lastForStringType(coll: string[]): string {
  return coll[coll.length - 1];
}

// Тут определения для всех остальных типов

// Если типов несколько, то количество функций, которые нужно определить, будет определяться как произведение количества всех возможных типов на количество параметров типа.
// Реализация дженерика с помощью перегруженной функции упрощает задачу. Тогда не придется создавать новые имена:

function last3(coll: number[]): number;
function last3(coll: string[]): string;
// Тут определения для всех остальных типов

function last3(coll: any[]): any {
  return coll[coll.length - 1];
}

// В случае TypeScript даже не будет дублироваться логика, но это особенность именно TypeScript. В других статически типизированных языках придется дублировать и логику.

// Какой бы вариант реализации мы не выбрали, соблюдаются две вещи:
// -- Значения, передаваемые во внутрь, никак не используются. Они только перекладываются из одного места в другое
// -- Логика работы всегда остается одной и той же. Условные конструкции по типу данных отсутствуют

// В Computer Science свойство функции, позволяющее обрабатывать значения разных типов одним способом (используя один алгоритм), называется параметрическим полиморфизмом. То есть дженерики — это реализация параметрического полиморфизма в TypeScript.

// Параметрический полиморфизм играет важную роль в статически типизированных языках там, где приходится явно указывать типы у функций. Он есть почти во всех высокоуровневых статически типизированных языках. В Java и C# это тоже называется дженериками. В C++ используется названия шаблоны, но смысл от этого не меняется, хотя шаблоны в С++ — это больше, чем параметрический полиморфизм.

// В противовес статически типизированным языкам в языках с динамической типизацией, таких как JavaScript, Python, Ruby, PHP, дженерики не нужны. В подобных языках любой обобщенный алгоритм автоматически работает для всех типов данных.

// Задание
// Реализуйте описание обощенного типа MyArray, который представляет аналог массива из JavaScript. Пример использования объекта этого типа:

// const coll: MyArray<number> = ...;
// coll.push(1); // 1
// coll.push(10); // 2
// coll.push(99); // 3

// const newColl = coll.filter((value) => value % 2 == 0);
// console.log(newColl.items); // [10]

// Тип включает в себя два метода: push() и filter(), совпадающие по сигнатуре с методами Array. Данные внутри должны храниться в свойстве items. Для push() примем соглашение, что метод принимает только один параметр. Игнорируйте остальные параметры.

type MyArray<T> = {
  items: Array<T>;
  push(value: T): number;
  filter(
    callback: (value: T, index: number, array: Array<T>) => boolean
  ): MyArray<T>;
};

// ---------> 47 tasks ---> Generics with multiple parameters

// Дженерики, как и обычные функции, могут иметь несколько параметров типа.
// Принцип работы дженериков от количества параметров не меняется. Единственное, за чем нужно следить, это имена:

type Double<T, U> = {
  first: T;
  second: U;
};

const value: Double<string, number> = {
  first: 'code-basics',
  second: 1,
};

// Вывод типа из аргументов функции
// Представим, что нам нужно вызвать функцию с несколькими параметрами. Аргументы представлены дженериками.
// Например, функция join() может быть описана следующим образом:

function join1<T, U>(coll1: (T | U)[], coll2: U[]): (T | U)[] {
  return coll1.concat(coll2);
}

join1<number, string>([1, 2], ['one', 'two']); // [1, 2, 'one', 'two']

// Но TypeScript позволяет нам сделать это проще и не указывать типы для всех параметров:

join1([1, 2], ['one', 'two']); // [1, 2, 'one', 'two']

// TypeScript сам выведет типы для параметров функции. Это называется выводом типа из аргументов функции. В данном случае TypeScript выведет типы number и string для параметров T и U соответственно.

// В следующих уроках мы познакомимся со встроенными в TypeScript дженериками, у которых два параметра. В реальном же программировании такие дженерики часто встречаются в прикладном коде, например, в React.

// -> Задание
// Реализуйте описание обобщенного типа MyMap, который представляет из себя аналог ассоциативного массива из JavaScript. Пример использования объекта этого типа:

// const map: MyMap<string, number> = ...;
// map.set('one', 1);
// map.set('two', 2);

// map.get('one'); // 1
// map.get('two'); // 2

// Тип включает в себя два метода set() и get(). Первый метод принимает два дженерик-параметра: ключ и значение. Второй метод принимает ключ и возвращает значение. Значения хранятся внутри объекта в виде встроенного в JavaScript класса Map().

type MyMap<K, V> = {
  values: Map<K, V>;
  set(key: K, value: V): void;
  get(key: K): V | undefined;
};

// ---------> 48 tasks ---> Asynchronous functions

// Promise стали самым популярным способом работы с асинхронным кодом в JavaScript. Они позволяют избежать callback hell, а также упрощают работу с асинхронными функциями. TypeScript также поддерживает привычный синтаксис для работы с Promise в виде async/await и типизацию.

const promise = new Promise<number>((resolve, _) => {
  setTimeout(() => {
    resolve(42);
  }, 1000);
});

// Promise представляет собой дженерик с типом, который будет возвращен в случае успешного выполнения. В примере выше это тип number.

// Чтобы продолжать работать в одном стиле с функциями, которые принимают callback, мы можем промисифцировать их. Для этого нам нужно обернуть функцию в Promise:

const wait = (ms: number): Promise<number> => {
  return new Promise(resolve => {
    const timer = setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

// Мы можем и не описывать тип возвращаемого значения, так как TypeScript сможет его вывести из типа, который мы передаем в Promise. К тому же из функции, которая помечена как async, Promise возвращается автоматически, и тип возвращаемого значения будет обернут в Promise:

const getHours = async () => {
  return new Date().getHours();
};

const hoursPromise: Promise<number> = getHours();

// Так как Promise, как и контейнер, заворачивает значения внутри себя, мы можем использовать await для получения значения из него:

const hours = await getHours();

// В TypeScript await используется так же, как в JavaScript.

// Promise вместе с async/await позволяют писать асинхронный код в синхронном стиле и сильно упрощают работу с асинхронным кодом. TypeScript поддерживает этот синтаксис и с помощью дженериков позволяет нам использовать его со всей мощью типизации.

// Задание
// Реализуйте асинхронный вариант функции map() - asyncMap(). Первым аргументом asyncMap() принимает массив с Promise. Вторым — функцию, которая применяется к каждому элементу. Функция должна вернуть массив с результатами выполнения функции для каждого элемента:

const asyncMap = async <T, P>(
  arr: Promise<T>[],
  fn: (item: T, index: number) => P
) => {
  const promises = arr.map(async (item, index) => {
    const result = await item;
    return fn(result, index);
  });

  return Promise.all(promises);
};

const promisedNumbers = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
];

asyncMap(promisedNumbers, (num, index) => num * index).then(result => {
  console.log(result); // [0, 2, 6]
});

// ---------> 49 tasks ---> Generics in the classes

// Дженерик-классы, как и дженерик функции, позволяют создавать классы, которые могут работать с разными типами данных. Например, класс Triple может хранить три значения любого типа. В этом случае вместо того, чтобы создавать классы для каждого типа, можно создать обобщенный класс, который будет работать с любым типом данных.

class Triple<T, U, V> {
  constructor(protected first: T, protected second: U, protected third: V) {}

  getFirst(): T {
    return this.first;
  }

  getSecond(): U {
    return this.second;
  }

  getThird(): V {
    return this.third;
  }
}

// В этом примере класс Triple — дженерик-класс, в который мы можем поместить любые типы данных. При этом у нас остаются гарантии безопасности и вывод типов, которые мы получили при использовании обобщенных функций:

const triple = new Triple(1, 'string', null);
const firstItem = triple.getFirst(); // number
const secondItem = triple.getSecond(); // string

// Также можно наследоваться от обобщенных классов. Например, класс Pair может быть наследником класса Triple, который хранит два значения любого типа:

class Pair<T, U> extends Triple<T, U, never> {
  constructor(first: T, second: U) {
    super(first, second, undefined as never);
  }

  getFirst(): T {
    return this.first;
  }

  getSecond(): U {
    return this.second;
  }
}

// Здесь мы использовали приведение к типу never, чтобы пометить третий параметр как отсутствующий.

// Как и обычные классы, обобщенные классы также можно использовать в качестве типов параметров функций:

function swap<T, U>(pair: Pair<T, U>): Pair<U, T> {
  return new Pair(pair.getSecond(), pair.getFirst());
}

// Дженерик-классы полезны, когда нам нужно создать какой-нибудь контейнер для хранения данных, как в примере с классом Pair. Array, Map, Set — это дженерик-классы, которые хранят элементы заданного типа.

// Задание
// Реализуйте класс очереди (Queue) с методами enqueue и dequeue. Метод enqueue добавляет элемент в конец очереди, а метод dequeue удаляет элемент из начала очереди. Если очередь пуста, то при вызове метода dequeue должно быть выброшено исключение Error:

class Queue<T> {
  private queue: Array<T> = [];

  constructor() {}
  enqueue(item: T): void {
    this.queue.push(item);
  }
  dequeue(): T | Error {
    const result = this.queue.shift();
    if (result) {
      return result;
    } else {
      throw new Error('Queue is empty');
    }
  }
}

const queue = new Queue<number>();
queue.enqueue(1);
queue.dequeue(); // 1
queue.dequeue(); // Error: Queue is empty
