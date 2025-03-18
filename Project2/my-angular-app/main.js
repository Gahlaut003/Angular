"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// string
console.log('=============================================================================');
var lname = 'jhon';
var str1 = "Hello, World!";
var str2 = 'Hello, World!';
var str3 = "Hello, ".concat(lname, "!");
var str4 = new String("Hello, World!");
var str5 = "Hello, World!"; // Type inference
console.log(typeof lname, typeof str1, typeof str1, typeof str2, typeof str3);
console.log('=============================================================================');
// array
console.log('=====================================Array========================================');
var arr1 = [1, 2, 3];
var arr2 = ["apple", "banana", "cherry"];
var arr3 = [1, 2, 3];
var arr4 = ["apple", "banana", "cherry"];
var arr5 = [[1, 2], [3, 4], [5, 6]];
var arr6 = [[1, 2], [3, 4], [5, 6]];
var arr7 = [1, "apple", true];
var arr8 = [1, "apple", true];
var arr9 = [1, 2, 3];
var arr10 = [1, 2, 3];
var arr11 = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }];
var arr12 = [1, "one"];
var arr13 = ["12", 2];
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
console.log('=============================================================================');
console.log('====================================Number=========================================');
var num1 = 42; // Decimal
var num2 = 3.14; // Floating-point
var num3 = 0x2A; // Hexadecimal
var num4 = 42; // Binary
var num5 = 42; // Octal
var num6 = Infinity; // Infinity
var num7 = NaN; // NaN (Not a Number)
var num8 = 100; // Type inference as number
console.log(typeof num1, typeof num2, typeof num3, typeof num4, typeof num5, typeof num6, typeof num7);
console.log('=============================================================================');
console.log('===================================ENUM==========================================');
// enums-example.ts
// 1. Numeric Enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // 3
})(Direction || (Direction = {}));
console.log(Direction.Up); // Output: 0
console.log(Direction.Down); // Output: 1
// 2. String Enums
var Response;
(function (Response) {
    Response["Yes"] = "YES";
    Response["No"] = "NO";
    Response["Maybe"] = "MAYBE";
})(Response || (Response = {}));
console.log(Response.Yes); // Output: "YES"
console.log(Response.No); // Output: "NO"
// 3. Heterogeneous Enums
var Mixed;
(function (Mixed) {
    Mixed[Mixed["No"] = 0] = "No";
    Mixed["Yes"] = "YES";
})(Mixed || (Mixed = {}));
console.log(Mixed.No); // Output: 0
console.log(Mixed.Yes); // Output: "YES"
// Usage
var myColor = 0 /* Colors.Red */; // This will be inlined at compile time
console.log(myColor); // Output: 0
// 5. Computed Enums
var FileAccess;
(function (FileAccess) {
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite"; // 6
})(FileAccess || (FileAccess = {}));
console.log(FileAccess.Read); // Output: 2
console.log(FileAccess.Write); // Output: 4
console.log(FileAccess.ReadWrite); // Output: 6
// 6. Reverse Mapping
var Animal;
(function (Animal) {
    Animal[Animal["Dog"] = 0] = "Dog";
    Animal[Animal["Cat"] = 1] = "Cat";
    Animal[Animal["Fish"] = 2] = "Fish";
})(Animal || (Animal = {}));
console.log(Animal[0]); // Output: "Dog"
console.log(Animal[1]); // Output: "Cat"
// Additional Example: Iterating Over Numeric Enums
for (var direction in Direction) {
    if (isNaN(Number(direction))) { // Filter out numeric keys
        console.log(direction); // Outputs: Up, Down, Left, Right
    }
}
console.log('=============================================================================');
console.log('=======================================TUPLE======================================');
// various-tuples.ts
// 1. Basic Tuple Declaration
var basicTuple;
basicTuple = [1, "Hello"]; // Valid
console.log("Basic Tuple:", basicTuple);
// 2. Optional Elements in Tuples
var optionalTuple;
optionalTuple = [1]; // Valid: string is optional
optionalTuple = [1, "Hello"]; // Valid
console.log("Optional Tuple:", optionalTuple);
// 3. Rest Elements in Tuples
var restTuple;
restTuple = [1]; // Valid
restTuple = [1, "Hello", "World"]; // Valid
console.log("Rest Tuple:", restTuple);
// 4. Nested Tuples
var nestedTuple;
nestedTuple = [1, ["Hello", true]]; // Valid
console.log("Nested Tuple:", nestedTuple);
var point = [10, 20]; // Valid
console.log("Point Tuple:", point);
// 6. Destructuring Tuples
var destructuringTuple = [1, "Hello"];
var num = destructuringTuple[0], str = destructuringTuple[1]; // Destructuring
console.log("Destructured Tuple:", num, str);
// 7. Tuples with Readonly
var readonlyTuple = [1, "Hello"];
console.log("Readonly Tuple:", readonlyTuple);
// 8. Using Tuples with Generic Types
function createTuple(first, second) {
    return [first, second];
}
var myGenericTuple = createTuple(1, "Hello"); // Valid
console.log("Generic Tuple:", myGenericTuple);
console.log('=============================================================================');
