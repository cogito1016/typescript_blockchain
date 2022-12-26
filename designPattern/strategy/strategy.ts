//디자인 패턴 중 하나인 전략 패턴을 구현해보자.
//전략 패턴은 알고리즘을 캡슐화하여 동적으로 알고리즘을 바꿀 수 있게 해준다.

//전략 패턴을 사용하지 않는 경우
// class Duck {
//     fly() {
//         console.log("fly");
//     }
//     quack() {
//         console.log("quack");
//     }
//     }

// class Turkey {
//     fly() {
//         console.log("fly");
//     }
//     gobble() {
//         console.log("gobble");
//     }
// }

// const duck = new Duck();
// const turkey = new Turkey();

// duck.fly();
// turkey.fly();

// duck.quack();
// turkey.gobble();

const strategy = () => {
    //전략 패턴을 사용하는 경우
    interface FlyBehavior {
        fly(): void;
    }

    interface QuackBehavior {
        quack(): void;
    }

    class FlyWithWings implements FlyBehavior {
        fly() {
            console.log("fly");
        }
    }

    class FlyNoWay implements FlyBehavior {
        fly() {
            console.log("can't fly");
        }
    }

    class Quack implements QuackBehavior {
        quack() {
            console.log("quack");
        }
    }

    class MuteQuack implements QuackBehavior {
        quack() {
            console.log("can't quack");
        }
    }

    class Duck {
        flyBehavior: FlyBehavior;
        quackBehavior: QuackBehavior;
        constructor() {
            this.flyBehavior = new FlyWithWings();
            this.quackBehavior = new Quack();
        }
        fly() {
            this.flyBehavior.fly();
        }
        quack() {
            this.quackBehavior.quack();
        }
    }

    const duck = new Duck();
    duck.fly();
    duck.quack();
}

export default strategy;