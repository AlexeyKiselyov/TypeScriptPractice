// Давайте построим дом.

// Создайте абстрактный класс House в нем должны быть следующая логика

// свойство door, она может быть либо закрыта, либо открыта.
// свойство key - объект класса Key.
// конструктор принимает аргумент класса Key и сохраняет его в свойство key.
// метод comeIn, который добавляет объект класса Person в свойство tenants и это срабатывает только если door открыта.
// абстрактный метод openDoor принимает аргумент класса Key

// Создайте класс MyHouse который реализует класс House
// создаем метод openDoor, так как он принимает ключ, сверяем сохраненный ключ в свойстве key равен ли он ключу из аргумента, если да, открываем дверь.

// Создайте объект Key
// есть только свойство signature
// во время создания объекта генерирует случайное число и сохраняет его в signature
// метод getSignature возвращает случайное число из signature

// Создайте объект Person
// конструктор принимает ключ класса Key и сохраняет его в свойство key
// метод getKey возвращает key
// Сделайте так, чтобы жилец попал домой.

abstract class House {
  protected door = false;
  public key: Key;
  protected tenants: object[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  public comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log('The owner is in the house!');
    }
  }

  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  public openDoor(key: object): void {
    if (this.key === key) {
      this.door = true;
      console.log('The door in opening!');
    }
  }
}

class Key {
  protected signature: number;
  constructor() {
    const randomKey = Math.random() * (1 - 10) + 1;
    this.signature = randomKey;
    console.log('Key generated.');
  }

  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  public getKey() {
    return this.key;
  }
}

const myKey = new Key();
const myHouse = new MyHouse(myKey);

const owner = new Person(myKey);

myHouse.openDoor(owner.getKey());
myHouse.comeIn(owner);
