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

let callback: (a: number) => number;
callback = (a) => {
  return 100 + a;
};
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

let person:[string, number];
person = ['Max', 21];

// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).

enum Loading {LOADING, READY};

const service = {
  isLoading: Loading.LOADING,
}

if( service.isLoading===Loading.LOADING){
  console.log('Loading...');
}