//Javascript class는 결국 슈가문법(프로토타입 기반)
//그러나Tszmffotmsms 그 기능을 확장

class Car{
    _make: string;
    _color: string;
    _doors: number;

    constructor(make:string, color:string, doors:number){
        this._make = make;
        this._color = color;
        this._doors = doors;
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
}