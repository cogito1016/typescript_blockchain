const strategy_1 = () => {    
    interface flyBehavior{
        fly():void;
    }

    interface quackBehavior{
        quack():void;
    }

    class canFly implements flyBehavior{
        fly():void{
            console.log("I can fly");
        }
    }

    class cantFly implements flyBehavior{
        fly():void{
            console.log("I can't fly");
        }
    }

    class canQuack implements quackBehavior{
        quack(): void {
            console.log("I can quack");
        }
    }

    class cantQuack implements quackBehavior{
        quack(): void {
            console.log("I can't quack")
        }
    }

    class Duck{
        flyBehavir:canFly;
        quackBehavior:canQuack;

        constructor(){
            this.flyBehavir = new canFly();
            this.quackBehavior = new canQuack();
        }
    }

    const duck = new Duck();
    duck.flyBehavir.fly();
    duck.quackBehavior.quack();
}

export default strategy_1;