// 1. Есть функция которая возвращает Promise, он возвращает массив строк и чисел, опишите правильно тип.

function getPromise(): Promise<Array<string | number>> {
  return new Promise(resolve => {
    resolve(['Text', 50]);
  });
}

getPromise().then(data => {
  console.log(data);
});

// 2.У вас есть следующий тип данных

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

// Есть функция, она принимает два аргумента, в один попадает name и color в другую часть position и weight. Нужно явно указать, что эти поля из AllType. И сама функция возвращает AllType. Воспользуйтесь Pick.

// 1st option
type Top = Pick<AllType, 'name' | 'color'>;
type Bottom = Pick<AllType, 'position' | 'weight'>;

function compare(top: Top, bottom: Bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// 2nd option
function compare1(
  top: Pick<AllType, 'name' | 'color'>,
  bottom: Pick<AllType, 'position' | 'weight'>
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// 3. Укажите дженерики для функции объединения объектов.

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// 4. У вас есть следующие классы. Только добавляя дженерики для классов и интерфейс уберите ошибку.

// 1st option
class Component<T> {
  constructor(public props: T) {}
}

interface IProps {
  title: string;
}

class Page extends Component<IProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

const page = new Page({ title: 'new book' });

// 1st option
class Component1<T> {
  constructor(public props: T) {}
}

class Page1 extends Component1<{ title: string }> {
  pageInfo() {
    console.log(this.props.title);
  }
}

const page1 = new Page({ title: 'some new book' });
