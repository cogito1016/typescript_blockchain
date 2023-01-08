let flag: boolean;
flag = true;

let x:number;
x = 10;
x = 10.5;

let y:bigint;
y = 10000000000000000n;

let s: string;
s = "Hello";

let a: any;
a = 10;
a = "Hello";
a = 1.1;
a = 1000n;

enum ContractStatus {
    Apprentice="Apprentice",
    Junior="Junior",
    Senior="Senior",
    Lead="Lead",
}

console.log(ContractStatus.Apprentice);
console.log(ContractStatus["Junior"]);


let any:any;
any = 10;
any = "Hello";
any = 1.1;

any.hello = 1;
any();
any.toUpperCase();

let unknown:unknown;
unknown = 10;
unknown = "Hello";
unknown = 1.1;

//Unknown형식이라는 이유로 any와 다르게 사용할 수 없다.
// unknown.hello = 1;
// unknown();
// unknown.toUpperCase();