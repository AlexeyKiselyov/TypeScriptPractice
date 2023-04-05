var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
//Practic with types
// 1. Задайте правильные ts типы, для классических js;
var age;
age = 50;
var names;
names = "Max";
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
var callback;
callback = function (a) {
    return 100 + a;
};
console.log(callback(50));
function foo(c, func) {
    return func(c);
}
function func(c) {
    return c + 50;
}
console.log(foo(50, func));
// Задавайте тип для переменной в которую можно сохранить любое значение.
var anything;
anything = -20;
anything = "Text";
anything = {};
console.log(anything);
// Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.
var some;
some = "Text";
var str;
if (typeof some === "string") {
    str = some;
}
// Сделайте неизменяемый массив со строго описанными типами. Массив для примера.
var person;
person = ["Max", 21];
// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
var Loading;
(function (Loading) {
    Loading[Loading["LOADING"] = 0] = "LOADING";
    Loading[Loading["READY"] = 1] = "READY";
})(Loading || (Loading = {}));
var service = {
    isLoading: Loading.LOADING,
};
if (service.isLoading === Loading.LOADING) {
    console.log("Loading...");
}
// Сделайте переменную, которая может принимать или строку или число.
var a;
a = 3;
a = "string";
// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
var b;
b = "enable";
b = "disable";
// Укажите типы для следующих функций
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
var date = new Date("2021-01-01");
console.log(date);
var page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01",
    },
};
var page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
