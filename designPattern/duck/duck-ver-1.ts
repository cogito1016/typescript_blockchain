
class Duck_1 {
    quack(): void {
        console.log("꽥꽥쓰")
    }

    fly(): void {
        console.log("훨훨쓰")
    }

    display(): void {
        console.log("귀여운 노란 덕")
    }

    swim(): void {
        console.log("어푸푸")
    }
}

class MallardDuck extends Duck_1 { }
class RubberDuck extends Duck_1 {
    quack(): void {
        console.log("삑삑")
    }

    fly(): void {
        console.log("난 못날아 ..")
    }
}


const mallardDuck = new MallardDuck();
mallardDuck.quack();
mallardDuck.fly();
mallardDuck.display();
mallardDuck.swim();

console.log('-----------');

const rubberDuck = new RubberDuck();
rubberDuck.quack();
rubberDuck.fly();