/** @format */

// ******** STRING ******** //
let greet: string = "Hello World"; // correct
// let str2: string = 12; // Error: number is not ssignable to type 'string'

// ******** NUMBER ******** //
const num: number = 123; // Correct
// const num2: number = "123"; // Error: string is not ssignable to type 'number'
const num3: Number = 123; // coerrect
// const num4: number = [1, 2, 3]; // Error: number[] is not ssignable to type 'number'

// ******** BOOLEAN ******** //
const isValid: boolean = true; // Correct
// const isInvalid: boolean = "false"; // Error: string is not assignable to type 'boolean'

// ******** VOID ******** //
// let num1: number = 1;
// let num2: number = 3;
// function calculate(num1: number, num2: number): number {
//   return num1 + num2;
// }
// console.log(calculate(num1, num2));

// ******** ARRAY ******** //
let skills: string[] = ["Cricket", "Football"]; // string type srray
skills[2] = "Tennis";
skills.push("Hockey");

// skills.push(2); // Error: number is not assignable to type 'string'

const score: (string | number | boolean)[] = [
  "Math",
  50,
  "Physics",
  40,
  "English",
  50,
  true,
];

// ******** TUPLES ******** //
let mine: [number, string];
mine = [123, "Jhon"]; // correct
// mine[0] = [123]; //error
mine[0] = 123; //correctresult
// mine[0] = [123, "Jhon"]; //error

let result: [string, number, string, number];
result = ["Math", 1, "Phy", 2];

// ******** OBJECT ******** //
let employee: object;

employee = {
  firstName: "Jhon",
  lastName: "Doe",
  age: 25,
};

// employee = "HI"; // string is not assignable to type object

let student: {
  firstName: string;
  lastName: string;
  age: number;
  isPassed: boolean;
} = {
  firstName: "Peter",
  lastName: "Dow",
  age: 25,
  isPassed: true,
};
