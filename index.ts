const sayHi = (name:string, age:number, gender:string):string => {
    return `hello ${name} you are ${age} years old and you are ${gender}!`;
}

console.log(sayHi("Jayden", 14, "male"));

export {}; //Typescript법칙, 이 파일이 모듈이 된다는걸 이해할 수 있도록 명시
