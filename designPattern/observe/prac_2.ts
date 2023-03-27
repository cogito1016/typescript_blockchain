//@ts-nocheck
interface Subject_2 {
  registerObserver(o: Observer_2): void;
  removeObserver(o: Observer_2): void;
  notifyObserver(o: Observer_2): void;
}

interface Observer_2 {
  update(data: object): void;
}

class MagazineCorpSystem implements Subject_2 {
  observers: Observer_2[];
  price: number;
  kind: string[];

  constructor() {
    this.observers = [];
  }

  registerObserver(o: Observer_2): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer_2): void {
    const idx = this.observers.indexOf(o);
    if (idx < 0) {
      return;
    }
    this.observers.splice(idx, 1);
  }

  notifyObserver(): void {
    this.observers.forEach((observer) => {
      observer.update({ price: this.price, kind: this.kind });
    });
  }

  updateMagazineCorpProductInfo(price, kind): void {
    this.price = price;
    this.kind = kind;
    this.notifyObserver();
  }
}

interface User {
  review(): void;
  cancelService(): void;
}

class BadUser implements Observer_2, User {
  voc: string;
  kindCount: number;
  magazineCorpSystem: MagazineCorpSystem;

  constructor(magazineCorpSystem: MagazineCorpSystem) {
    this.magazineCorpSystem = magazineCorpSystem;
    this.magazineCorpSystem.registerObserver(this);
  }

  review() {
    console.log(this.voc);
    console.log(`종류가 ${this.kindCount}밖에 안돼?`);
  }

  update(data): void {
    const { price, kind } = data;
    this.voc = `${price}라니! 고객을 뭘로보냐!`;
    this.kindCount = kind.length;
    this.review();
  }

  cancelService(): void {
    this.magazineCorpSystem.removeObserver(this);
  }
}

class GoodUser implements Observer_2, User {
  voc: string;
  kindCount: number;
  magazineCorpSystem: MagazineCorpSystem;

  constructor(magazineCorpSystem: MagazineCorpSystem) {
    this.magazineCorpSystem = magazineCorpSystem;
    this.magazineCorpSystem.registerObserver(this);
  }

  review() {
    console.log(this.voc);
    console.log(`종류가 ${this.kindCount}나 되다니 엄청나잖아?`);
  }

  update(data): void {
    const { price, kind } = data;
    this.voc = `${price}라니! 이건 구독해야해!`;
    this.kindCount = kind.length;
    this.review();
  }

  cancelService(): void {
    this.magazineCorpSystem.removeObserver(this);
  }
}

const magazineCorpSystem = new MagazineCorpSystem();
const goodUser = new GoodUser(magazineCorpSystem);
const badUser = new BadUser(magazineCorpSystem);

magazineCorpSystem.updateMagazineCorpProductInfo(1000, ['horror', 'action']);
magazineCorpSystem.updateMagazineCorpProductInfo(399900, [
  'horror',
  'action',
  'comic',
]);

console.log('-----');
console.log('BadUser가 분노를 참지못하고 구독을 취소했습니다.');
console.log('-----');

badUser.cancelService();
magazineCorpSystem.updateMagazineCorpProductInfo(20, [
  'horror',
  'action',
  'comic',
  'comic',
  'comic',
  'comic',
  'comic',
  'comic',
  'comic',
]);

console.log('-----');
console.log(
  '자신이 구독취소하자마자 혜택이 좋아진걸 발견한 BadUser는 오열합니다.'
);
console.log('-----');
