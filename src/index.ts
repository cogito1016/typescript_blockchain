interface Human{ //js에서는 동작하지않는다
    name:string,
    age:number,
    gender:string
}

const person = {
    name:"Aayden",
    age:28,
    gender:"male"
}

const sayHi = (person:Human):string => {
    return `hello ${person.name} you are ${person.age} years old and you are ${person.gender}!!`;
}

// console.log(sayHi("Jayden", 14, "male")); 초기버전
// console.log(sayHi(person)); 곧바로 이렇게 호출하면 동작불가 interface 필요
console.log(sayHi(person)); //interface가 적용되면 동작가능

export {}; //Typescript법칙, 이 파일이 모듈이 된다는걸 이해할 수 있도록 명시
