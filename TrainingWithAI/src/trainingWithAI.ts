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
