interface QuackBehavior_prac_1{
    quack():void;
}

interface FlyBehavior_prac_1{
    fly():void;
}

class CanFly implements FlyBehavior_prac_1{
    fly(): void {
        console.log("난 날아");
    }
}

class CantFly implements FlyBehavior_prac_1{
    fly(): void {
        console.log("난 못 날아");
    }
}

class CanQuack implements QuackBehavior_prac_1{
    quack(): void {
        console.log("난 꽥가능");
    }
}

class CantQuack implements QuackBehavior_prac_1{
    quack(): void {
        console.log("난 꽥 불가")
    }
}

class Duck_prac_1{
    protected quackBehavior:QuackBehavior_prac_1;
    protected flyBehavior:FlyBehavior_prac_1;

    swim(){
        console.log("덕들은 무조껀 수영가능")
    }

    dance(){
        console.log("덕들은 무조건 댄스가능")
    }

    quack(){
        this.quackBehavior.quack();
    }

    fly(){
        this.flyBehavior.fly();
    }
}

class Wing_Hurt_Duck extends Duck_prac_1{
    constructor(){
        super();
        this.flyBehavior = new CantFly();
        this.quackBehavior = new CanQuack();
    }
}

class Mouse_Hurt_Duck extends Duck_prac_1{
    constructor(){
        super();
        this.quackBehavior = new CantQuack();
        this.flyBehavior = new CanFly();
    }
}

let duck_1 = new Wing_Hurt_Duck();
let duck_2 = new Mouse_Hurt_Duck();

console.log('1번 덕 -------');
duck_1.dance();
duck_1.fly();
duck_1.quack();
duck_1.swim();
console.log('2번 덕 -------');
duck_2.dance();
duck_2.fly();
duck_2.quack();
duck_2.swim();
