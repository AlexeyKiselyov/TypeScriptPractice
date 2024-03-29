// ------->1st task
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `My name is ${this.name}. I am ${this.age} years old`;
  }
}

class Student extends Person {
  studentId: number;

  constructor(name: string, age: number, studentId: number) {
    super(name, age);
    this.studentId = studentId;
  }
}

const student = new Student('Mark', 16, 506);

// console.log(student.getInfo());

// Теперь создай класс Student, который наследуется от класса Person и добавляет новое поле studentId.

// Создай экземпляр класса Student и вызови метод getInfo() для вывода информации о студенте.

// -------->2nd task

// 1. Создай интерфейс Course, который будет представлять информацию о курсе. Интерфейс должен содержать следующие поля:
// - courseName (название курса)
// - duration (продолжительность курса в неделях)
// - students (массив строк, представляющих имена студентов, записанных на курс)
// 2. Создай класс CourseClass, который реализует интерфейс Course. Класс должен иметь соответствующие поля и методы:
// - constructor для инициализации полей.
// - addStudent для добавления нового студента на курс.
// - getCourseInfo для вывода информации о курсе, включая названия курса, продолжительность и список студентов.

interface Course {
  courseName: string;
  duration: number;
  students: string[];
  addStudent(newStudent: string): void;
  getCourseInfo(): string;
}

class CourseClass implements Course {
  students: string[] = [];
  constructor(public courseName: string, public duration: number) {}

  addStudent(newStudent: string): void {
    this.students.push(newStudent);
  }

  getCourseInfo(): string {
    return `Course name: ${this.courseName}; Duration: ${
      this.duration
    }; Students: ${this.students.join('\n')}`;
  }
}

// --------->3d task

// Задача: Генератор паролей
// Создай класс PasswordGenerator, который будет генерировать случайные пароли. Класс должен иметь следующие характеристики:
// Параметры конструктора:
// - length (длина пароля, по умолчанию 12 символов)
// - includeUppercase (включать ли заглавные буквы, по умолчанию true)
// - includeNumbers (включать ли цифры, по умолчанию true)
// - includeSymbols (включать ли символы, например, !@#$%^&*, по умолчанию true)
// - Метод generatePassword:
// Генерирует и возвращает случайный пароль на основе указанных параметров.

interface IPasswordGenerator {
  length: number;
  includeUppercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  generatePassword(): string;
}

class PasswordGenerator implements IPasswordGenerator {
  constructor(
    public length = 12,
    public includeUppercase = true,
    public includeNumbers = true,
    public includeSymbols = true
  ) {}

  generatePassword(): string {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_-+=<>?/{}';

    let validChars = lowercaseLetters;

    if (this.includeUppercase) {
      validChars += uppercaseLetters;
    }

    if (this.includeNumbers) {
      validChars += numbers;
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }

    let password = '';

    for (let i = 0; i < this.length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars.charAt(randomIndex);
    }

    return password;
  }
}

const passwordGenerator = new PasswordGenerator();
console.log(passwordGenerator.generatePassword());

// --------->4th task

type Student1 = {
  name: string;
  age: number;
  grade: number;
};

function filterStudentsByGrade(
  students: Student1[],
  gradeThreshold: number
): Student1[] {
  return students.filter(student => student.grade > gradeThreshold);
}

// example
const students: Array<Student1> = [
  { name: 'Alice', age: 20, grade: 85 },
  { name: 'Bob', age: 21, grade: 92 },
  { name: 'Charlie', age: 19, grade: 78 },
];

const highPerformingStudents = filterStudentsByGrade(students, 80);
console.log(highPerformingStudents);

// --------->5th task

const numbers: number[] = [1, 2, 3];
const strings: string[] = ['a', 'b', 'c'];

function mergeArrays(
  numbers: number[],
  strings: string[]
): Array<number | string> {
  return [...numbers, ...strings];
}

const mergedArray = mergeArrays(numbers, strings);
console.log(mergedArray);

// --------->6th task

type StudentInfo = {
  name: string;
  examScore: number;
  assignmentScores: number[];
  averageScore?: number;
};

function calculateAverageScores(students: StudentInfo[]): StudentInfo[] {
  return students.map(student => {
    const avarageAssignment =
      student.assignmentScores.reduce((acc, numb) => acc + numb, 0) /
      student.assignmentScores.length;
    const averageScore = Math.round(
      (student.examScore + avarageAssignment) / 2
    );
    return { ...student, averageScore };
  });
}

// example

const students1: StudentInfo[] = [
  { name: 'Alice', examScore: 85, assignmentScores: [90, 88, 92] },
  { name: 'Bob', examScore: 92, assignmentScores: [95, 89, 88] },
  { name: 'Charlie', examScore: 78, assignmentScores: [80, 85, 82] },
];

const studentsWithAverageScores = calculateAverageScores(students1);
console.log(studentsWithAverageScores);

// --------->7th task

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: DayOfWeek): boolean {
  if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) return true;
  return false;
}

const day: DayOfWeek = DayOfWeek.Saturday;
const result = isWeekend(day);
console.log(result); //true

// --------->7th task

class Point3D {
  constructor(public x: number, public y: number, public z: number) {}

  calculateDistance(otherPoint: Point3D): number {
    const diffX = this.x - otherPoint.x;
    const diffY = this.y - otherPoint.y;
    const diffZ = this.z - otherPoint.z;

    const result = Math.sqrt(diffX ** 2 + diffY ** 2 + diffZ ** 2);
    return result;
  }
}

// example

const point1 = new Point3D(1, 2, 3);
const point2 = new Point3D(4, 5, 6);

const distance = point1.calculateDistance(point2);
console.log(distance); // 5.196152422706632

// --------->8th task

interface Shape {
  calculateArea(): number;
}

class Circle implements Shape {
  constructor(public r: number) {}
  calculateArea(): number {
    return 3.14 * this.r ** 2;
  }
}

class Rectangle implements Shape {
  constructor(public a: number, public b: number) {}
  calculateArea(): number {
    return this.a * this.b;
  }
}

const circle = new Circle(5);
console.log(circle.calculateArea());

const rectangle = new Rectangle(5, 5);
console.log(rectangle.calculateArea());

// --------->9th task

class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    const lastItemInd = this.items.length - 1;
    return this.items[lastItemInd];
  }
}

const stackOfStrings = new Stack<string>();
stackOfStrings.push('a');
stackOfStrings.push('b');
stackOfStrings.push('c');
console.log(stackOfStrings.pop());
console.log(stackOfStrings.peek());

const stackOfNumbs = new Stack<number>();
stackOfNumbs.push(1);
stackOfNumbs.push(2);
stackOfNumbs.push(3);
console.log(stackOfNumbs.pop());
console.log(stackOfNumbs.peek());

// --------->9th task

function swap(a: string | number, b: string | number) {
  if (typeof a === 'string' || typeof b === 'string') {
    return `${b} ${a}`;
  } else {
    return String(b) + ' ' + String(a);
  }
}
// //example
const strA = 'Hello';
const strB = 'World';

console.log(swap(strA, strB)); // World Hello

const numA = 42;
const numB = 13;

console.log(swap(numA, numB)); // 13 42

// --------->10th task

//// first option
type UnaryFunction<T> = (arg: T) => T;

function compose<T>(...functions: Array<UnaryFunction<T>>): UnaryFunction<T> {
  return arg => functions.reduce((acc, func) => func(acc), arg);
}

const addTwo: UnaryFunction<number> = x => x + 2;
const multiplyByThree: UnaryFunction<number> = x => x * 3;
const subtractTen: UnaryFunction<number> = x => x - 10;

const composedFunction = compose(addTwo, multiplyByThree, subtractTen);
console.log(composedFunction(5)); // 11

//// second option
// let addTwo: (x: number) => number;
// addTwo = x => x + 2;

// let multiplyByThree: (x: number) => number;
// multiplyByThree = x => x * 3;

// let subtractTen: (x: number) => number;
// subtractTen = x => x - 10;

// function compose(arrOfFunctions: Array<Function>): Function {
//   return (x: number): number =>
//     arrOfFunctions.reduce((acc, func) => func(acc), x);
// }
// const composedFunction = compose([addTwo, multiplyByThree, subtractTen]);
// console.log(composedFunction(5)); //11
