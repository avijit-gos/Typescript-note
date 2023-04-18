<!-- @format -->

### Introduction to TypeScript

TypeScript is a super set of JavaScript.
TypeScript builds on top of JavaScript. First, you write the TypeScript code. Then, you compile the TypeScript code into plain JavaScript code using a TypeScript compiler.
Once you have the plain JavaScript code, you can deploy it to any environments that JavaScript runs.
TypeScript files use the .ts extension rather than the .js extension of JavaScript files.

#### Why TypeScript:

i. Introduce optional types to JavaScript.
ii. Implement planned features of future JavaScript, a.k.a. ECMAScript Next or ES Next to the current JavaScript.

### TypeScript setup:

1. Go to the node.js download page.

2. Download the node.js version that suits your platform i.e., Windows, macOS, or Linux.

3. Execute the downloaded node.js package or execution file. The installation is quite straightforward.

4. Verify the installation by open the terminal on macOS and Linux or command line on Windows and type the command node -v. If you see the version that you downloaded, then you have successfully installed the node.js on your computer.

5. to install typescript:

```sh
$ npm install -g typescript
```

6. After the installation, you can type the following command to check the current version of the

```sh
$ tsc --v
```

### TypeScript Types:

In TypeScript, a type is a convenient way to refer to the different properties and functions that a value has.

A value is anything that you can assign to a variable e.g., a number, a string, an array, an object, and a function.

#### Types in TypeScript:

TypeScript inherits the built-in types from JavaScript. TypeScript types is categorized into:

- Primitive types (ex. string, number, boolean, null, undefined)
- Object types (ex. Array, Classes, Function)

#### \* Void type in typescript:

```sh
function calculate(num1: number, num2: number): number {
  return num1 + num2;
}
```

By default return type of function is void, but we can change the return type by accepted type. Suppose we want string as return type then we can assign "string" return type.

#### \* Introduction to TypeScript array type:

A TypeScript array is an ordered list of data. To declare an array that holds values of a specific type.
To declare an array of a specific type, you use the **let arr: type[]** syntax.
you use the following syntax:

```
let skills: string[] = ["Cricket", "Football"]; // string type array
```

And you can add one or more strings to the array:

```
skills[2] = "Tennis";
```

or use the push() method:

```
skills.push("Hockey");

```

Once you define an array of a specific type, TypeScript will prevent you from adding incompatible values to the array. The following will cause an error:

```
skills.push(2);
```

because we’re trying to add a number to the string array.

- Storing values of mixed types:

```
const score: (string | number)[] = ["Math", 50, "Physics", 40, "English", 50];
```

Again if we try to add a boolean type value in the score[] array then it will return an error. To add a new type data int the array we have to assign the type before assign it.

```
const score: (string | number | boolean)[] = ["Math", 50, "Physics", 40, "English", 50, true];
```

#### \* Tuples:

Tuples are a data type unique to TypeScript. Think of them as arrays with a fixed number of elements. This data type is best used when you know exactly how many variables you should have. It is possible to reassign the value of the indices but not the amount of elements in the tuple.
Variables of data type tuple are declared just like an array:

- **A tupple is an array with a fixed number of elements whose types are known.**

```
let tuples: [type1, type2]
```

- Example:

```
let mine: [number, string];
mine = [123, "Jhon"]; // correct
mine[0] = [123]; //error
mine[0] = 123; //correct result
mine[0] = [123, "Jhon"]; //error

//** Since we defined mine as a tuple, the order of the values matter as well and cannot be changed  Also, assigning an index outside of the original defined number will produce an error: **//
mine = [123, "Jhon", "David"]; // correct
```

#### \* Object:

The TypeScript object type represents all values that are not in primitive types.

- The following shows how to declare a variable that holds an object:

```
let employee: object;

employee = {
  firstName: "Jhon",
  lastName: "Doe",
  age: 25,
};
```

- If you reassign a primitive value to the employee object, you'll get an error:

```
employee = "HI"; // string is not assignable to type object
```

- To explicitly specify properties of the employee object, you first use the following syntax to declare the employee object:

```
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
```

- **_ object vs Object _**
  **_ Object _**
  Contains stuff (like toString(), hasOwnProperty()) that is present in all JavaScript objects. Any value (primitive, non-primitive) can be assigned to Object type.

  **_ object _**
  It is any non-primitive type. You can't assign to it any primitive type like bool, number, string, symbol.

#### \* Enum:

Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript. Or **_ An enum is a special "class" that represents a group of constants (unchangeable variables). _**

Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

```
enum directions {
  North,
  East,
  West,
  South,
}

let NorthDir = directions.North;
console.log(NorthDir); // 0
let EastDir = directions.East;
console.log(EastDir); // 1
let WestDir = directions.West;
console.log(WestDir); // 2
let SouthDir = directions.South;
console.log(SouthDir); // 3
```

- **_ Numeric Enums - Initialized _**
  You can set the value of the first numeric enum and have it auto increment from that:

```
enum directions {
  North = 1,
  East,
  West,
  South,
}

let NorthDir = directions.North;
console.log(NorthDir); // 1
let EastDir = directions.East;
console.log(EastDir); // 2
let WestDir = directions.West;
console.log(WestDir); // 3
let SouthDir = directions.South;
console.log(SouthDir); // 4
```

- **_ Numeric Enums - Fully Initialized _**
  You can assign unique number values for each enum value. Then the values will not incremented automatically:

```
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
```

- **_ Mixed enum _**

```
enum result {
  subjectOne = "Math",
  numberOne = 40,
  subjectTwo = "English",
  numberTwo = 60,
}
console.log(result.numberOne, result.subjectOne); // 40, Math
```

#### \* Enum:

Sometimes, you will run into a function that expects a parameter that is either a number or a string. For example:

```
function addNumber(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" || typeof b === "string") {
    return a + "-" + b;
  } else {
    return "Invalid type";
  }
}

console.log(addNumber(1, 2)); // 3
```

#### \* Interface:

#### \* Generics:
