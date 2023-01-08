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