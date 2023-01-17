interface Vehicle{
    make: string;
    color: string;
    doors: number;
    accelerate(speed:number): string;
    break(): string;
    turn(direction: 'left' | 'right'):string;
}

//인터페이스는 자바스크립트에는 없는문법
//따라서 JS로 변환될 때 사라진다.
//용량 절약이 가능하면서, 제약은 존재한다.

//클래스는 구현 세부정보를 정의
//인터페이스는 구조를 정의

//인퍼에이스의 구조 명세 를 활용하기위해 클래스가 없어도된다.