class Duck_2 {
  display(): void {
    console.log('귀여운 노란 덕');
  }

  swim(): void {
    console.log('어푸푸');
  }
}

interface quackAble {
  quack(): void;
}

interface flyAble {
  fly(): void;
}

class MallardDuck_1 extends Duck_2 implements quackAble, flyAble {
  quack(): void {
    console.log('꽥');
  }
  fly(): void {
    console.log('난 날아');
  }
}
