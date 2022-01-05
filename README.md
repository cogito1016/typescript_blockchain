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
