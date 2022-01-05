const name = "Jayden", age=28, gender="male";

const sayHi = (name,age,gender) => {
    console.log(`hello ${name} you are ${age} years old and you are ${gender}!`);
}

sayHi(name,age,gender);
// sayHi(name,age); 이렇게 작성한다면, 문법오류부터 잡아주고, 컴파일오류도 발생됨

// const sayHi = (name,age,gender?) => { 그러나 인수뒤 '?'를 붙이게되면 선택적 인수로 작용됨, 따라서 있어도되고 없어도되고!
//     console.log(`hello ${name} you are ${age} years old and you are ${gender}!`);
// }

export {}; //Typescript법칙, 이 파일이 모듈이 된다는걸 이해할 수 있도록 명시
