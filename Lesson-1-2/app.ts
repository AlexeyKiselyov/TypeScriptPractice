const button = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", () => {
  console.log(add(+input1.value, +input2.value));
});

//Practic with types

// 1. Задайте правильные ts типы, для классических js;

let age: number;
age = 50;

let names: string;
names = "Max";

let toggle: boolean;
toggle = true;

let empty: null;
empty = null;

let notInitialize: undefined;
notInitialize = undefined;

// first option
let callback: (a: number) => number;
callback = (a) => {
  return 100 + a;
};

// second option
// const callback = (a: number): number => {
//   return 100 + a;
// };
console.log(callback(50));

function foo(c: number, func: (d: number) => number): number {
  return func(c);
}

function func(c: number): number {
  return c + 50;
}

console.log(foo(50, func));

// Задавайте тип для переменной в которую можно сохранить любое значение.

let anything: any;
anything = -20;
anything = "Text";
anything = {};
console.log(anything);

// Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.

let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") {
  str = some;
}

// Сделайте неизменяемый массив со строго описанными типами. Массив для примера.

let person: [string, number];
person = ["Max", 21];

// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).

enum LoadingStatus {
  LOADING,
  READY,
}

const book = {
  load: LoadingStatus.LOADING,
};

if (book.load === LoadingStatus.LOADING) {
  console.log("Loading...");
}

if (book.load === LoadingStatus.READY) {
  console.log("Here is your book!");
}

// Сделайте переменную, которая может принимать или строку или число.

let a: string | number;
a = 3;
a = "string";

// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'

let b: "enable" | "disable";
b = "enable";
b = "disable";

// Укажите типы для следующих функций

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

// Создайте свой тип данных на основе имеющихся данных.

type pageType = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: pageType = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: pageType = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
