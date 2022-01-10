# typescript_blockchain

타입스크립트를 이용한 블록체인

Tyscript -프로그래밍언어 -컴파일하면 JS컴파일됨

Why use it -자바스크립트가 갖고있지않은 규칙이 있다 -언어를 예측가능하고 읽기쉬운코드로 만들어준다.

1.  Yarn init
    ==> package.json 생성

Yarn VS Npm
뭐로할까?
==> Yarn은 Npm의 단점이 보완됨. 속도,보안 등
==> 처음하려면 Npm부터하는걸 추천함, 아무래도 원본이라 그런듯

Npm으로 하려면
Nom init -y 하라는데
-y옵션에대한 설명이없음
==> 추후 서칭 예정

그래서 그냥
Npm init함

2.  npm install typescript --save-dev

3.  tsconfig.json
    위 파일은 ts->js변환에 대한 명세를 작성

4.  컴파일할때는 커맨드에서 tsc
    하면 index.js와 index.js.map을 생성함

5.  "start": "node index.js", //npm start시 수행되는 커맨드
    "prestart": "tsc" //npm start전 수행되는 커맨드

6.  함수의 매개변수 뒤 ‘?’를 붙이게되면 선택적 파라미터가 된다.
    즉, 매개변수가 있을 수 있고 없을 수 있다.
    없다면 당연히 undefined

7.  함수의 매개변수에 ‘:’를 통해 타입을 지정할 수 있다.
    그럴 경우 함수호출 시 매개변수가 지정된 타입과 다르다면, 에러발생

8.  Tic watch를 설치
    => 스크립트를 단순화해주는 역할을 하는듯 (+a는 추후에)
    => watch모드에서 컴파일을 수행 (지정해준 src폴더가 변경될때마다 dist폴더에 반영된다)
    => 코드수정 때마다 컴파일진행 및 수행이된다.(watch모드에 지정해둔 커맨드를 따른다)
    npm install tsc-watch --save-dev

8-1.Package.json의 start 스크립트 수정
Tsc-watch—onSuccess \” node index.js \” -tsc수행 후 성공하면 node index.js 실행

8-2.tsconfig.json 수정
compilerOptions - outDir 추가 : ts가 컴파일되어 js가 생성되는 폴더 지정
Include value수정 - src/\*_/_ : src폴더 내 모든 파일들이 대상

8-3.후 nom start
-src폴더 내 모든 ts파일들을 대상으로 컴파일 -컴파일된 js파일들은 dist폴더에 위치
-index.js를 실행

9.  타입스크립트의 Object를 위해서는 inteface가 필요
    interface를 통해 Object 키 들의 명세를 작성할 수 있다.

10. class는 js의 경우 속성타입명시가 필요없지만, ts에서는 필요하다.
    속성타입 뿐만아니라 권한까지 표시한다.
    -private : 클래스 내부에만 접근가능
    -public : 모두 접근 가능

10-1.
Interface vs class
Node, express, react 등을 사용한다면 class를 사용해야함
..이부분은 설명이 부족하다 보완이 필요

11. Typescript의 class와 Array의 활용
    ex)
    let genesisblock:[] -> 배열
    let genesisblock:number[] -> 넘버타입의 배열
    let genesisblock:number[] = [arrName] -> arrName이라는 number타입의 배열로 초기화

12. Crypto-js 설치
    Npm install crypto-js
    typescript라서 import의 방식이 다르다.

13. Typescript의 static method
