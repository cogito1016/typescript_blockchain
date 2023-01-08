# Typescript

## Goal
* 타입스크립트 -> 자바스크립트
    * 타입스크립트는 무엇을사용하여 변환되는가?
    * 타입스크립트 컴파일의 커맨드는 무엇인가?
    * 타입스크립트 컴파일정보 및 실행을위한 파일들의 역할은 무엇인가?
        * package.json
        * tsconfig.json
* 함수의 매개변수명 뒤에 '?'를 붙이는건 어떤 의미인가?
    * '?'가 붙은 매개변수가 인자로 넘어오지 않으면 해당 매개변수는 어떻게 초기화되는가? 
* 함수의 매개변수명 뒤에 ':'를 붙이는건 어떤 의미인가?
    * ':'를 사용하는 예시를 나열할 수 있는가?
    * ':'를 사용했을 시 어떤 오류가 검출될 수 있는가?
* Inteface
    * 사용 이유에 대해 설명할 수 있는가?
* Class
    * Inteface의 사용이유 관점에서, Inteface대신 Class를 사용했을 때 어떤 차이점이 있는가? 

## Tyscript 
-프로그래밍언어   
-컴파일하면 JS컴파일됨   

## Why use it 
-자바스크립트가 갖고있지않은 규칙이 있다   
-언어를 예측가능하고 읽기쉬운코드로 만들어준다

## How use it
Yarn init   
  ==> package.json 생성

### Yarn VS Npm
뭐로할까?   
==> Yarn은 Npm의 단점이 보완됨. 속도,보안 등   
==> 처음하려면 Npm부터하는걸 추천함, 아무래도 원본이라 그런듯

Npm으로 하려면   
Nom init -y 하라는데   
-y옵션에대한 설명이없음   
==> 추후 서칭 예정

그래서 그냥   
Npm init함

npm install typescript --save-dev

### tsconfig.json   
-위 파일은 ts->js변환에 대한 명세를 작성

### 컴파일할 시
-index.js와 index.js.map을 생성함   
* 기본적으로 커맨드에서 tsc 후 node index.js   
* 스크립트 수정으로 개선 가능   
```javascript 
"start": "node index.js", //npm start시 수행되는 커맨드   
"prestart": "tsc" //npm start전 수행되는 커맨드
```

* Tsc watch를 설치하면 좀 더 원활한 개발 가능
=> 스크립트를 단순화해주는 역할을 하는듯 (+a는 추후에)   
=> watch모드에서 컴파일을 수행 (지정해준 src폴더가 변경될때마다 dist폴더에 반영된다)   
=> 코드수정 때마다 컴파일진행 및 수행이된다.(watch모드에 지정해둔 커맨드를 따른다)   
npm install tsc-watch --save-dev

    * Package.json의 start 스크립트 수정   
Tsc-watch—onSuccess \” node index.js \” (tsc수행 후 성공하면 node index.js 실행)   

    * tsconfig.json 수정
compilerOptions - outDir 추가 : ts가 컴파일되어 js가 생성되는 폴더 지정(여기서는 dist로 지음)   
Include value수정 - src/\*_/_ : src폴더 내 모든 파일들이 대상   

    * npm start
src폴더 내 모든 ts파일들을 대상으로 컴파일   
컴파일된 js파일들은 dist폴더에 위치   
index.js를 실행   


### Typescript 문법
#### 함수의 매개변수 뒤 ‘?’를 붙이게되면 선택적 파라미터가 된다.   
-즉, 매개변수가 있을 수 있고 없을 수 있다.   
-없다면 당연히 undefined

#### 함수의 매개변수에 ‘:’를 통해 타입을 지정할 수 있다.
-그럴 경우 함수호출 시 매개변수가 지정된 타입과 다르다면, 에러발생


#### Interface
-타입스크립트의 Object를 위해서는 inteface가 필요   
-interface를 통해 Object 키 들의 명세를 작성할 수 있다.

#### Class
-class는 js의 경우 속성타입명시가 필요없지만, ts에서는 필요하다(속성타입 뿐만아니라 권한까지 표시한다)   
-private : 클래스 내부에만 접근가능   
-public : 모두 접근 가능   

#### Interface vs class
Node, express, react 등을 사용한다면 class를 사용해야함   
..이부분은 설명이 부족하다 보완이 필요   

#### Typescript의 class와 Array의 활용
ex)   
```javascript
let genesisblock:[] // 배열
let genesisblock:number[] // 넘버타입의 배열
let genesisblock:number[] = [arrName] // arrName이라는 number타입의 배열로 초기화
```

#### Crypto-js 설치
Npm install crypto-js   
typescript라서 import의 방식이 다르다.

#### Typescript의 static method
그냥 흔히 아는 static..   

- - - 
### Type

- 최상위는 Any
- 기본형식은 number, string, boolean, null, undefined, symbol
- 개체형식은 object, array, function, class, interface, enum, tuple, type alias, type parameter
- 그리고 any, never, unknown, void

- any는 모든 타입을 포함
- never는 절대 발생하지 않는 값의 타입
- unknown은 모든 타입을 포함하지만, 타입을 알 수 없음
- void는 undefined와 null을 포함하는 타입

- null과 undefined는 모든 타입의 하위 타입

#### number
- 모든 숫자는 부동 소수점 값 또는 Big Integer
- 부동 소수점 숫자는 number
- BigInteger은 bigint 형식