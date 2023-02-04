
class Duck_3 {
    protected flyBehavior: FlyBehavior

    display(): void {
        console.log("귀여운 노란 덕")
    }

    swim(): void {
        console.log("어푸푸")
    }

    fly(): void {
        this.flyBehavior.fly();
    }
}

interface FlyBehavior {
    fly();
}

class FlyWithWings implements FlyBehavior {
    fly() {
        console.log("난다요")
    }
}

class FlyNoWay implements FlyBehavior {
    fly() {
        console.log("못난다요");
    }
}

class MallardDuck_2 extends Duck_3 {
    constructor() {
        super();
        this.flyBehavior = new FlyWithWings();
    }
}

const m1 = new MallardDuck_2();
m1.fly();
m1.swim();

class RubberDuck_2 extends Duck_3 {
    constructor() {
        super();
        this.flyBehavior = new FlyNoWay();
    }
}

const r1 = new RubberDuck_2();
r1.fly();
r1.swim();