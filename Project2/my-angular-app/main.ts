import { Console } from "console";

// string
console.log('=============================================================================')
let lname ='jhon'
let str1: string = "Hello, World!";
let str2: string = 'Hello, World!';
let str3: string = `Hello, ${lname}!`;
let str4: String = new String("Hello, World!");
let str5 = "Hello, World!"; // Type inference

console.log(typeof lname, typeof str1, typeof str1, typeof str2, typeof str3)
console.log('=============================================================================')

// array

console.log('=====================================Array========================================')
let arr1: number[] = [1, 2, 3]; 
let arr2: string[] = ["apple", "banana", "cherry"]; 

let arr3: Array<number> = [1, 2, 3]; 
let arr4: Array<string> = ["apple", "banana", "cherry"]; 

let arr5: number[][] = [[1, 2], [3, 4], [5, 6]]; 
let arr6: Array<Array<number>> = [[1, 2], [3, 4], [5, 6]];

let arr7: any[] = [1, "apple", true]; 
let arr8: Array<any> = [1, "apple", true]; 

let arr9: readonly number[] = [1, 2, 3]; 
let arr10: ReadonlyArray<number> = [1, 2, 3]; 

interface Person {
  name: string;
  age: number;
}

let arr11: Person[] = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }];

let arr12: [number, string] = [1, "one"];
let arr13 = ["12",2]
// Print types and values
console.log("arr1:", typeof arr1, arr1);
console.log("arr2:", typeof arr2, arr2);
console.log("arr3:", typeof arr3, arr3);
console.log("arr4:", typeof arr4, arr4);
console.log("arr5:", typeof arr5, arr5);
console.log("arr6:", typeof arr6, arr6);
console.log("arr7:", typeof arr7, arr7);
console.log("arr8:", typeof arr8, arr8);
console.log("arr9:", typeof arr9, arr9);
console.log("arr10:", typeof arr10, arr10);
console.log("arr11:", typeof arr11, arr11);
console.log("arr12:", typeof arr12, arr12);
console.log("arr13:", typeof arr13, arr13);

console.log('=============================================================================')
console.log('====================================Number=========================================')

let num1: number = 42;      // Decimal
let num2: number = 3.14;    // Floating-point
let num3: number = 0x2A;    // Hexadecimal
let num4: number = 0b101010; // Binary
let num5: number = 0o52;    // Octal
let num6: number = Infinity; // Infinity
let num7: number = NaN;     // NaN (Not a Number)
let num8 = 100;             // Type inference as number

console.log( typeof num1, typeof num2, typeof num3, typeof num4,typeof num5,typeof num6,typeof num7)

console.log('=============================================================================')

console.log('===================================ENUM==========================================')

// enums-example.ts

// 1. Numeric Enums
enum Direction {
  Up,      // 0
  Down,    // 1
  Left,    // 2
  Right    // 3
}

console.log(Direction.Up);    // Output: 0
console.log(Direction.Down);  // Output: 1

// 2. String Enums
enum Response {
  Yes = "YES",
  No = "NO",
  Maybe = "MAYBE"
}

console.log(Response.Yes);    // Output: "YES"
console.log(Response.No);     // Output: "NO"

// 3. Heterogeneous Enums
enum Mixed {
  No = 0,
  Yes = "YES"
}

console.log(Mixed.No);    // Output: 0
console.log(Mixed.Yes);   // Output: "YES"

// 4. Constant Enums
const enum Colors {
  Red,
  Green,
  Blue
}

// Usage
let myColor: Colors = Colors.Red; // This will be inlined at compile time
console.log(myColor);              // Output: 0

// 5. Computed Enums
enum FileAccess {
  None = 0,
  Read = 1 << 1,    // 2
  Write = 1 << 2,   // 4
  ReadWrite = Read | Write // 6
}

console.log(FileAccess.Read);        // Output: 2
console.log(FileAccess.Write);       // Output: 4
console.log(FileAccess.ReadWrite);   // Output: 6

// 6. Reverse Mapping
// enum Animal {
//   Dog = 0,
//   Cat = 1,
//   Fish = 2
// }

// console.log(Animal[0]);  // Output: "Dog"
// console.log(Animal[1]);  // Output: "Cat"

// 7. Ambient Enums
declare enum GlobalEnum {
  GlobalValue1,
  GlobalValue2
}

// Additional Example: Iterating Over Numeric Enums
for (let direction in Direction) {
  if (isNaN(Number(direction))) { // Filter out numeric keys
      console.log(direction); // Outputs: Up, Down, Left, Right
  }
}
console.log('=============================================================================')

console.log('=======================================TUPLE======================================')
// various-tuples.ts

// 1. Basic Tuple Declaration
let basicTuple: [number, string];
basicTuple = [1, "Hello"]; // Valid
console.log("Basic Tuple:", basicTuple);

// 2. Optional Elements in Tuples
let optionalTuple: [number, string?];
optionalTuple = [1];             // Valid: string is optional
optionalTuple = [1, "Hello"];   // Valid
console.log("Optional Tuple:", optionalTuple);

// 3. Rest Elements in Tuples
let restTuple: [number, ...string[]];
restTuple = [1];                     // Valid
restTuple = [1, "Hello", "World"];   // Valid
console.log("Rest Tuple:", restTuple);

// 4. Nested Tuples
let nestedTuple: [number, [string, boolean]];
nestedTuple = [1, ["Hello", true]]; // Valid
console.log("Nested Tuple:", nestedTuple);

// 5. Using Type Aliases for Tuples
type Point = [number, number];
let point: Point = [10, 20]; // Valid
console.log("Point Tuple:", point);

// 6. Destructuring Tuples
let destructuringTuple: [number, string] = [1, "Hello"];
let [num, str] = destructuringTuple; // Destructuring
console.log("Destructured Tuple:", num, str);

// 7. Tuples with Readonly
let readonlyTuple: readonly [number, string] = [1, "Hello"];
console.log("Readonly Tuple:", readonlyTuple);

// 8. Using Tuples with Generic Types
function createTuple<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}
let myGenericTuple = createTuple(1, "Hello"); // Valid
console.log("Generic Tuple:", myGenericTuple);


console.log('=============================================================================')
console.log('======================================ANY=======================================')
// various-any.ts

// 1. Basic Declaration
let anyVar: any;
anyVar = 5;            // Valid: number
console.log("Any Variable (number):", anyVar);
anyVar = "Hello";     // Valid: string
console.log("Any Variable (string):", anyVar);
anyVar = true;        // Valid: boolean
console.log("Any Variable (boolean):", anyVar);

// 2. Arrays of Any Type
let anyArray: any[] = [1, "Hello", true];
console.log("Any Array:", anyArray);

// 3. Tuples with Any Type
let anyTuple: [any, any] = [1, "Hello"];
console.log("Any Tuple:", anyTuple);

// 4. Using Any with Objects
let anyObject: { [key: string]: any } = {
    name: "John",
    age: 30,
    isActive: true
};
console.log("Any Object:", anyObject);

// 5. Using Any in Functions
function logAnything(input: any): void {
    console.log("Logging Anything:", input);
}

logAnything(42);          // Valid
logAnything("Text");      // Valid
logAnything({});          // Valid

// 6. Using Any with Generics
function getValue<T>(value: T): any {
    return value;
}

let anyValue1 = getValue<number>(123);   // Valid
let anyValue2 = getValue<string>("Hello"); // Valid
console.log("Generic Any Values:", anyValue1, anyValue2);

// 7. Type Assertion with Any
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length; // Type assertion to string
console.log("Length of String:", strLength);

// 8. Using Any with Union Types
let mixed: number | string | boolean | any = "Hello"; // Union with any
console.log("Mixed Type with Any:", mixed);
mixed = 10; // Valid
console.log("Updated Mixed Type:", mixed);

console.log('=============================================================================')


console.log('========================================VOID=====================================')
// various-void.ts

// 1. Basic Function Declaration with Void
function logMessage(message: string): void {
  console.log(message);
}

// Call the function
logMessage("This is a log message.");

// 2. Arrow Function with Void
const showAlert = (message: string): void => {
  alert(message);
};

// Call the arrow function
showAlert("This is an alert message.");

// 3. Function with No Return Type Implicitly as Void
function noReturn() {
  console.log("This function does not return anything.");
}

// Call the function
noReturn();

// 4. Function Returning Void in a Method
class Logger {
  logInfo(info: string): void {
      console.log(info);
  }
}

const logger = new Logger();
logger.logInfo("Logging information from a class method.");

// 5. As a Callback Function
function executeCallback(callback: () => void): void {
  console.log("Executing callback...");
  callback();
}

// Callback function
const myCallback = (): void => {
  console.log("This is the callback function.");
};

// Call the executeCallback function
executeCallback(myCallback);

// 6. Using Void in Promise
function delayedMessage(message: string): Promise<void> {
  return new Promise<void>((resolve) => {
      setTimeout(() => {
          console.log(message);
          resolve();
      }, 1000);
  });
}

// Call the function with Promise
delayedMessage("This message is delayed by 1 second.");

// 7. Void in a Generic Function
function doNothing<T>(value: T): void {
  // Intentionally do nothing
}

// Call the generic function
doNothing<number>(123);
doNothing<string>("Hello, world!");

// 8. Using Void with Type Assertion
function printMessage(msg: string): void {
  console.log(msg);
}

// let someFunc: any = printMessage; // Some function of any type
// (someFunc as () => void)("This is a type asserted function call.");

// 9. Using Void in a Higher Order Function
function higherOrderFunction(fn: () => void): void {
  console.log("Before calling the function.");
  fn(); // Call the passed function
  console.log("After calling the function.");
}

// Passing a function to higherOrderFunction
higherOrderFunction(() => console.log("This is a passed function."));

// 10. Using Void in an Interface
interface Action {
  execute(): void;
}

class PrintAction implements Action {
  execute(): void {
      console.log("Executing Print Action.");
  }
}

const action: Action = new PrintAction();
action.execute();

console.log('=============================================================================')

console.log('===========================================NEVER==================================')
// various-never.ts

// 1. Function That Always Throws an Error
function throwError(message: string): never {
  throw new Error(message);
}

// Example usage of throwError
try {
  throwError("This is an error.");
} catch (e) {
  console.error(e);
}

// 2. Function That Never Returns (Infinite Loop)
function infiniteLoop(): never {
  while (true) {
      // This function will never return
  }
}

// Uncommenting the following line will cause an infinite loop
// infiniteLoop();

// 3. Exhaustive Checks with Union Types
// type Animal = "dog" | "cat";

// function handleAnimal(animal: Animal): void {
//   switch (animal) {
//       case "dog":
//           console.log("Handling a dog.");
//           break;
//       case "cat":
//           console.log("Handling a cat.");
//       // If all cases are handled, the default case should never occur
//       default:
//           const _exhaustiveCheck: never = animal; // Will error if animal is not handled
//           throw new Error(`Unknown animal: ${animal}`);
//   }
// }

// // Example usage of handleAnimal
// handleAnimal("dog");

// 4. Using Never in a Generic Function
function assertIsNever(value: never): void {
  // This function will assert that value is never
}

// Example usage (will cause an error if not exhaustive)
function handleValue(value: string | number): void {
  if (typeof value === "string") {
      console.log(`String value: ${value}`);
  } else if (typeof value === "number") {
      console.log(`Number value: ${value}`);
  } else {
      assertIsNever(value); // This will trigger an error if value is not string or number
  }
}

// Example usage of handleValue
handleValue("Hello");  // Valid
handleValue(42);       // Valid
// handleValue(true);   // Uncommenting this will cause a TypeScript error

// 5. Using Never in a Function Returning a Promise
function fetchData(url: string): Promise<never> {
  return new Promise((_, reject) => {
      setTimeout(() => {
          reject(new Error("Failed to fetch data."));
      }, 1000);
  });
}

// Example usage of fetchData
fetchData("http://example.com").catch(err => {
  console.error(err);
});

// 6. Never as the Return Type of a Conditional Type
type IsString<T> = T extends string ? true : never;

type Test1 = IsString<string>;  // true
type Test2 = IsString<number>;  // never

// 7. Using Never in a Class Method
class ErrorHandler {
  handleError(error: string): never {
      throw new Error(`Error: ${error}`);
  }
}

// Example usage of ErrorHandler
const errorHandler = new ErrorHandler();
try {
  errorHandler.handleError("Something went wrong.");
} catch (e) {
  console.error(e);
}

// // 8. Using Never in a Switch Case
// function processValue(value: "yes" | "no"): void {
//   switch (value) {
//       case "yes":
//           console.log("Value is yes.");
//           break;
//       case "no":
//           console.log("Value is no.");
//       // If value is not "yes" or "no", it should lead to an unreachable code
//       default:
//           const _assert: never = value; // Will trigger an error if value is not handled
//           throw new Error(`Unexpected value: ${value}`);
//   }
// }

// // Example usage of processValue
// processValue("yes"); // Valid
// processValue("no");  // Valid
// // processValue("maybe"); // Uncommenting this will cause a TypeScript error

console.log('=============================================================================')
