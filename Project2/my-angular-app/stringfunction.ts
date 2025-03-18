// String Methods Examples

// 1. String.raw()
// The String.raw() method is a tagged template literal that provides a raw string representation.
let rawString: string = String.raw`Hello\nWorld`;
console.log("1. String.raw():", rawString); // Output: "Hello\nWorld"

// 2. String.fromCharCode()
// The String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.
let char: string = String.fromCharCode(72, 101, 108, 108, 111); // "Hello"
console.log("2. String.fromCharCode():", char); // Output: "Hello"

// 3. String.prototype.repeat()
// The repeat() method returns a new string which contains the specified number of copies of the string it was called on.
let strRepeat: string = "Hi! ";
console.log("3. String.prototype.repeat():", strRepeat.repeat(3)); // Output: "Hi! Hi! Hi! "

// 4. String.prototype.padStart()
// The padStart() method pads the current string with another string (from the start) until the resulting string reaches the given length.
let strPadStart: string = "5";
console.log("4. String.prototype.padStart():", strPadStart.padStart(2, "0")); // Output: "05"

// 5. String.prototype.padEnd()
// The padEnd() method pads the current string with another string (from the end) until the resulting string reaches the given length.
let strPadEnd: string = "5";
console.log("5. String.prototype.padEnd():", strPadEnd.padEnd(2, "0")); // Output: "50"

// 6. String.prototype.endsWith()
// The endsWith() method determines whether the string ends with the characters of a specified string.
let strEndsWith: string = "Hello, World!";
console.log("6. String.prototype.endsWith():", strEndsWith.endsWith("World!")); // Output: true

// 7. String.prototype.startsWith()
// The startsWith() method determines whether the string begins with the characters of a specified string.
console.log("7. String.prototype.startsWith():", strEndsWith.startsWith("Hello")); // Output: true

// 8. String.prototype.valueOf()
// The valueOf() method returns the primitive value of a String object.
let strValue: String = new String("Hello");
console.log("8. String.prototype.valueOf():", strValue.valueOf()); // Output: "Hello"

// 9. String.prototype.replace()
// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
let strReplace: string = "Hello, World!";
let newStr: string = strReplace.replace("World", "JavaScript");
console.log("9. String.prototype.replace():", newStr); // Output: "Hello, JavaScript!"

// 10. String.prototype.split()
// The split() method splits a String object into an array of strings by separating the string into substrings.
let strSplit: string = "apple,banana,cherry";
let fruits: string[] = strSplit.split(",");
console.log("10. String.prototype.split():", fruits); // Output: ["apple", "banana", "cherry"]

// 11. String.prototype.slice()
// The slice() method returns a shallow copy of a portion of a string into a new string.
let strSlice: string = "Hello, World!";
console.log("11. String.prototype.slice():", strSlice.slice(0, 5)); // Output: "Hello"

// 12. String.prototype.toLowerCase()
// The toLowerCase() method returns the calling string value converted to lower case.
let strLower: string = "HELLO";
console.log("12. String.prototype.toLowerCase():", strLower.toLowerCase()); // Output: "hello"

// 13. String.prototype.toUpperCase()
// The toUpperCase() method returns the calling string value converted to uppercase.
let strUpper: string = "hello";
console.log("13. String.prototype.toUpperCase():", strUpper.toUpperCase()); // Output: "HELLO"

// 14. String.prototype.trim()
// The trim() method removes whitespace from both ends of a string.
let strTrim: string = "   Hello, World!   ";
console.log("14. String.prototype.trim():", strTrim.trim()); // Output: "Hello, World!"

// 15. String.prototype.trimStart()
// The trimStart() method removes whitespace from the beginning of a string.
console.log("15. String.prototype.trimStart():", strTrim.trimStart()); // Output: "Hello, World!   "

// 16. String.prototype.trimEnd()
// The trimEnd() method removes whitespace from the end of a string.
console.log("16. String.prototype.trimEnd():", strTrim.trimEnd()); // Output: "   Hello, World!"

// 17. String.prototype.includes()
// The includes() method determines whether one string may be found within another string.
console.log("17. String.prototype.includes():", strEndsWith.includes("World")); // Output: true

// 18. String.prototype.lastIndexOf()
// The lastIndexOf() method returns the index of the last occurrence of a specified value.
let strLastIndex: string = "Hello, World! Hello again!";
console.log("18. String.prototype.lastIndexOf():", strLastIndex.lastIndexOf("Hello")); // Output: 20

// 19. String.prototype.indexOf()
// The indexOf() method returns the index of the first occurrence of a specified value.
console.log("19. String.prototype.indexOf():", strEndsWith.indexOf("World")); // Output: 7

// 20. String.prototype.charAt()
// The charAt() method returns the character at a specified index.
console.log("20. String.prototype.charAt():", strSlice.charAt(1)); // Output: "e"

// 21. String.prototype.charCodeAt()
// The charCodeAt() method returns the numeric Unicode value of the character at a specified index.
console.log("21. String.prototype.charCodeAt():", strSlice.charCodeAt(0)); // Output: 72

// 22. String.prototype.repeat()
// Demonstrating repeat() method again for another example.
console.log("22. String.prototype.repeat():", strRepeat.repeat(2)); // Output: "Hi!Hi!"

// 23. String.prototype.includes()
// Demonstrating includes() method again for another example.
console.log("23. String.prototype.includes():", strEndsWith.includes("World")); // Output: true

// 24. String.prototype.normalize()
// The normalize() method returns the Unicode Normalization Form of the string.
let strNormalize: string = "\u00E9"; // "é"
let normalized: string = strNormalize.normalize("NFC");
console.log("24. String.prototype.normalize():", normalized); // Output: "é"

// 25. String.prototype.search()
// The search() method executes a search for a match between a regular expression and the calling string.
let regexSearch: RegExp = /rain/;
let strSearch: string = "The rain in Spain";
console.log("25. String.prototype.search():", strSearch.search(regexSearch)); // Output: 4

// 26. String.prototype.localeCompare()
// The localeCompare() method compares two strings in the current locale.
let str1: string = "a";
let str2: string = "b";
console.log("26. String.prototype.localeCompare():", str1.localeCompare(str2)); // Output: -1

// 27. String.prototype.substring()
// The substring() method returns the part of the string between two specified indices.
console.log("27. String.prototype.substring():", strSlice.substring(0, 5)); // Output: "Hello"

// 28. String.prototype.substr()
// The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.
console.log("28. String.prototype.substr():", strSlice.substr(7, 5)); // Output: "World"

// 29. String.prototype.toLocaleUpperCase()
// The toLocaleUpperCase() method returns the calling string value converted to upper case, according to any locale-specific case mappings.
let strLocaleUpper: string = "i";
console.log("29. String.prototype.toLocaleUpperCase():", strLocaleUpper.toLocaleUpperCase("tr")); // Output: "İ"

// 30. String.prototype.toLocaleLowerCase()
// The toLocaleLowerCase() method returns the calling string value converted to lower case, according to any locale-specific case mappings.
let strLocaleLower: string = "I";
console.log("30. String.prototype.toLocaleLowerCase():", strLocaleLower.toLocaleLowerCase("tr")); // Output: "ı"

// 31. String.prototype.at()
// The at() method returns the character at a specified index in a string.
console.log("31. String.prototype.at():", strSlice.at(1));  // Output: "e"
console.log("32. String.prototype.at():", strSlice.at(-1)); // Output: "!"

// 33. String.prototype.match()
// The match() method retrieves the matches when matching a string against a regular expression.
let regexMatch: RegExp = /ain/g;
console.log("33. String.prototype.match():", strSearch.match(regexMatch)); // Output: ["ain", "ain"]

// 34. String.prototype.matchAll()
// The matchAll() method returns an iterable of all matches of a string against a regular expression.
for (const match of strSearch.matchAll(regexMatch)) {
    console.log("34. String.prototype.matchAll():", match[0]); // Output: "ain" (twice)
}

// 35. String.prototype.toString()
// The toString() method returns a string representing the specified object.
console.log("35. String.prototype.toString():", strValue.toString()); // Output: "Hello"

// // 36. String.prototype.replaceAll()
// // The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.
// let strReplaceAll: string = "Hello, World! Hello again!";
// console.log("36. String.prototype.replaceAll():", strReplaceAll.replaceAll("Hello", "Hi")); // Output: "Hi, World! Hi again!"


// // 37. String.prototype.toSource()
// // The toSource() method returns a string representing the source code of the object.
// // Note: This method is not standardized and is deprecated in modern browsers.
// console.log("37. String.prototype.toSource():", strValue.toSource()); // Output: "[object String]"

// 38. String.prototype.concat()
// The concat() method combines two or more strings and returns a new string.
let strConcat: string = "Hello" + " " + "World";
console.log("38. String.prototype.concat():", strConcat); // Output: "Hello World"

// 39. String.prototype.split()
// The split() method splits a string into an array of substrings.
let strSplitBySpace: string = "Split this sentence";
let splitResult: string[] = strSplitBySpace.split(" ");
console.log("39. String.prototype.split():", splitResult); // Output: ["Split", "this", "sentence"]

// 40. String.prototype.startsWith()
// The startsWith() method determines whether a string starts with the characters of a specified string.
console.log("40. String.prototype.startsWith():", strConcat.startsWith("Hello")); // Output: true

