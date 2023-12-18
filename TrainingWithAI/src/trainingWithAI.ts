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
