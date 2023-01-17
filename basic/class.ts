//Javascript class는 결국 슈가문법(프로토타입 기반)
//그러나Tszmffotmsms 그 기능을 확장

class Car{
    private static numberOfCars: number = 0; //정적멤버 및 메서드는 클래스의 모든 인스턴스에서 공유
    private _make: string; //기본적으로 public
    private _color: string;
    private _doors: number;

    constructor(make:string, color:string, doors:number){
        this._make = make;
        this._color = color;
        this._doors = doors;
        Car.numberOfCars ++;
    }

    get make(){
        return this._make
    }

    set make(make:string){
        this._make = make;
    }

    get color(){
        return `This color is ${this._color}.`;
    }

    set color(color:string){
        this._color = color;
    }

    get doors(){
        return this._doors
    }

    set doors(doors:number){
        if(!(doors%2===0)){
            throw new Error('Doors is not odd number');
        }

        this._doors = doors;
    }

    static get numberOfCar(){
        return Car.numberOfCars;
    }
}

let myCar1 = new Car('Cool Car Company', 'blue', 2);

console.log(myCar1.color);
// console.log(myCar1._color); private설정하니 원시멤버에는 접근이불가능하다. 
console.log(Car.numberOfCar);

let myCar2 = new Car('hey','red',4);
console.log(Car.numberOfCar);