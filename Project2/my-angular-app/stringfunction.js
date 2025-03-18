// String Methods Examples
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
// 1. String.raw()
// The String.raw() method is a tagged template literal that provides a raw string representation.
var rawString = String.raw(__makeTemplateObject(["Hello\nWorld"], ["Hello\\nWorld"]));
console.log("1. String.raw():", rawString); // Output: "Hello\nWorld"
// 2. String.fromCharCode()
// The String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.
var char = String.fromCharCode(72, 101, 108, 108, 111); // "Hello"
console.log("2. String.fromCharCode():", char); // Output: "Hello"
// 3. String.prototype.repeat()
// The repeat() method returns a new string which contains the specified number of copies of the string it was called on.
var strRepeat = "Hi! ";
console.log("3. String.prototype.repeat():", strRepeat.repeat(3)); // Output: "Hi! Hi! Hi! "
// 4. String.prototype.padStart()
// The padStart() method pads the current string with another string (from the start) until the resulting string reaches the given length.
var strPadStart = "5";
console.log("4. String.prototype.padStart():", strPadStart.padStart(2, "0")); // Output: "05"
// 5. String.prototype.padEnd()
// The padEnd() method pads the current string with another string (from the end) until the resulting string reaches the given length.
var strPadEnd = "5";
console.log("5. String.prototype.padEnd():", strPadEnd.padEnd(2, "0")); // Output: "50"
// 6. String.prototype.endsWith()
// The endsWith() method determines whether the string ends with the characters of a specified string.
var strEndsWith = "Hello, World!";
console.log("6. String.prototype.endsWith():", strEndsWith.endsWith("World!")); // Output: true
// 7. String.prototype.startsWith()
// The startsWith() method determines whether the string begins with the characters of a specified string.
console.log("7. String.prototype.startsWith():", strEndsWith.startsWith("Hello")); // Output: true
// 8. String.prototype.valueOf()
// The valueOf() method returns the primitive value of a String object.
var strValue = new String("Hello");
console.log("8. String.prototype.valueOf():", strValue.valueOf()); // Output: "Hello"
// 9. String.prototype.replace()
// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
var strReplace = "Hello, World!";
var newStr = strReplace.replace("World", "JavaScript");
console.log("9. String.prototype.replace():", newStr); // Output: "Hello, JavaScript!"
// 10. String.prototype.split()
// The split() method splits a String object into an array of strings by separating the string into substrings.
var strSplit = "apple,banana,cherry";
var fruits = strSplit.split(",");
console.log("10. String.prototype.split():", fruits); // Output: ["apple", "banana", "cherry"]
// 11. String.prototype.slice()
// The slice() method returns a shallow copy of a portion of a string into a new string.
var strSlice = "Hello, World!";
console.log("11. String.prototype.slice():", strSlice.slice(0, 5)); // Output: "Hello"
// 12. String.prototype.toLowerCase()
// The toLowerCase() method returns the calling string value converted to lower case.
var strLower = "HELLO";
console.log("12. String.prototype.toLowerCase():", strLower.toLowerCase()); // Output: "hello"
// 13. String.prototype.toUpperCase()
// The toUpperCase() method returns the calling string value converted to uppercase.
var strUpper = "hello";
console.log("13. String.prototype.toUpperCase():", strUpper.toUpperCase()); // Output: "HELLO"
// 14. String.prototype.trim()
// The trim() method removes whitespace from both ends of a string.
var strTrim = "   Hello, World!   ";
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
var strLastIndex = "Hello, World! Hello again!";
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
var strNormalize = "\u00E9"; // "é"
var normalized = strNormalize.normalize("NFC");
console.log("24. String.prototype.normalize():", normalized); // Output: "é"
// 25. String.prototype.search()
// The search() method executes a search for a match between a regular expression and the calling string.
var regexSearch = /rain/;
var strSearch = "The rain in Spain";
console.log("25. String.prototype.search():", strSearch.search(regexSearch)); // Output: 4
// 26. String.prototype.localeCompare()
// The localeCompare() method compares two strings in the current locale.
var str1 = "a";
var str2 = "a";
console.log("26. String.prototype.localeCompare():", str1.localeCompare(str2)); // Output: -1
// 27. String.prototype.substring()
// The substring() method returns the part of the string between two specified indices.
console.log("27. String.prototype.substring():", strSlice.substring(0, 5)); // Output: "Hello"
// 28. String.prototype.substr()
// The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.
console.log("28. String.prototype.substr():", strSlice.substr(7, 5)); // Output: "World"
// 29. String.prototype.toLocaleUpperCase()
// The toLocaleUpperCase() method returns the calling string value converted to upper case, according to any locale-specific case mappings.
var strLocaleUpper = "i";
console.log("29. String.prototype.toLocaleUpperCase():", strLocaleUpper.toLocaleUpperCase("tr")); // Output: "İ"
// 30. String.prototype.toLocaleLowerCase()
// The toLocaleLowerCase() method returns the calling string value converted to lower case, according to any locale-specific case mappings.
var strLocaleLower = "I";
console.log("30. String.prototype.toLocaleLowerCase():", strLocaleLower.toLocaleLowerCase("tr")); // Output: "ı"
// 31. String.prototype.at()
// The at() method returns the character at a specified index in a string.
console.log("31. String.prototype.at():", strSlice.at(1)); // Output: "e"
console.log("32. String.prototype.at():", strSlice.at(-1)); // Output: "!"
// 33. String.prototype.match()
// The match() method retrieves the matches when matching a string against a regular expression.
var regexMatch = /ain/g;
console.log("33. String.prototype.match():", strSearch.match(regexMatch)); // Output: ["ain", "ain"]
// 34. String.prototype.matchAll()
// The matchAll() method returns an iterable of all matches of a string against a regular expression.
for (var _i = 0, _a = strSearch.matchAll(regexMatch); _i < _a.length; _i++) {
    var match = _a[_i];
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
var strConcat = "Hello" + " " + "World";
console.log("38. String.prototype.concat():", strConcat); // Output: "Hello World"
// 39. String.prototype.split()
// The split() method splits a string into an array of substrings.
var strSplitBySpace = "Split this sentence";
var splitResult = strSplitBySpace.split(" ");
console.log("39. String.prototype.split():", splitResult); // Output: ["Split", "this", "sentence"]
// 40. String.prototype.startsWith()
// The startsWith() method determines whether a string starts with the characters of a specified string.
console.log("40. String.prototype.startsWith():", strConcat.startsWith("Hello")); // Output: true
// 41. String.prototype.endsWith()
// The endsWith() method determines whether a string ends with the characters of a specified string.
console.log("41. String.prototype.endsWith():", strConcat.endsWith("World")); // Output: true
// 42. String.prototype.includes()
// The includes() method determines whether one string may be found within another string.
console.log("42. String.prototype.includes():", strConcat.includes("Hello")); // Output: true
// 43. String.prototype.indexOf()
// The indexOf() method returns the index of the first occurrence of a specified value.
console.log("43. String.prototype.indexOf():", strConcat.indexOf("World")); // Output: 6
// 44. String.prototype.lastIndexOf()
// The lastIndexOf() method returns the index of the last occurrence of a specified value.
console.log("44. String.prototype.lastIndexOf():", strConcat.lastIndexOf("o")); // Output: 4
// 45. String.prototype.slice()
// The slice() method extracts a section of a string and returns it as a new string.
console.log("45. String.prototype.slice():", strConcat.slice(0, 5)); // Output: "Hello"
// 46. String.prototype.substr()
// The substr() method returns a portion of a string starting at the specified index.
console.log("46. String.prototype.substr():", strConcat.substr(6, 5)); // Output: "World"
// 47. String.prototype.substring()
// The substring() method returns a portion of a string between two specified indices.
console.log("47. String.prototype.substring():", strConcat.substring(0, 5)); // Output: "Hello"
// 48. String.prototype.localeCompare()
// The localeCompare() method compares two strings in the current locale.
console.log("48. String.prototype.localeCompare():", "a".localeCompare("b")); // Output: -1
// 49. String.prototype.charAt()
// The charAt() method returns the character at a specified index.
console.log("49. String.prototype.charAt():", strConcat.charAt(1)); // Output: "e"
// 50. String.prototype.charCodeAt()
// The charCodeAt() method returns the Unicode of the character at a specified index.
console.log("50. String.prototype.charCodeAt():", strConcat.charCodeAt(0)); // Output: 72
// 51. String.prototype.match()
// The match() method retrieves the matches when matching a string against a regular expression.
console.log("51. String.prototype.match():", strConcat.match(/World/)); // Output: ["World"]
// 52. String.prototype.matchAll()
// The matchAll() method returns an iterable of all matches of a string against a regular expression.
for (var _b = 0, _c = strConcat.matchAll(/o/g); _b < _c.length; _b++) {
    var match = _c[_b];
    console.log("52. String.prototype.matchAll():", match[0]); // Output: "o" (twice)
}
// 53. String.prototype.replace()
// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
console.log("53. String.prototype.replace():", strConcat.replace("World", "TypeScript")); // Output: "Hello TypeScript"
// // 54. String.prototype.replaceAll()
// // The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.
// console.log("54. String.prototype.replaceAll():", strConcat.replaceAll("o", "O")); // Output: "HellO WOrld"
// 55. String.prototype.toUpperCase()
// The toUpperCase() method returns the calling string value converted to upper case.
console.log("55. String.prototype.toUpperCase():", strConcat.toUpperCase()); // Output: "HELLO WORLD"
// 56. String.prototype.toLowerCase()
// The toLowerCase() method returns the calling string value converted to lower case.
console.log("56. String.prototype.toLowerCase():", strConcat.toLowerCase()); // Output: "hello world"
// 57. String.prototype.trim()
// The trim() method removes whitespace from both ends of a string.
var strTrimmed = "  Hello World!  ";
console.log("57. String.prototype.trim():", strTrimmed.trim()); // Output: "Hello World!"
// 58. String.prototype.trimStart()
// The trimStart() method removes whitespace from the beginning of a string.
console.log("58. String.prototype.trimStart():", strTrimmed.trimStart()); // Output: "Hello World!  "
// 59. String.prototype.trimEnd()
// The trimEnd() method removes whitespace from the end of a string.
console.log("59. String.prototype.trimEnd():", strTrimmed.trimEnd()); // Output: "  Hello World!"
// 60. String.prototype.padStart()
// The padStart() method pads the current string with another string (from the start) until the resulting string reaches the given length.
console.log("60. String.prototype.padStart():", "5".padStart(2, "0")); // Output: "05"
// 61. String.prototype.padEnd()
// The padEnd() method pads the current string with another string (from the end) until the resulting string reaches the given length.
console.log("61. String.prototype.padEnd():", "5".padEnd(2, "0")); // Output: "50"
// 62. String.prototype.normalize()
// The normalize() method returns the Unicode Normalization Form of the string.
var strNormalized = "é";
console.log("62. String.prototype.normalize():", strNormalized.normalize("NFC")); // Output: "é"
// 63. String.prototype.at()
// The at() method returns the character at a specified index in a string.
console.log("63. String.prototype.at():", strConcat.at(1)); // Output: "e"
// 64. String.prototype.toLocaleUpperCase()
// The toLocaleUpperCase() method returns the calling string value converted to upper case, according to any locale-specific case mappings.
console.log("64. String.prototype.toLocaleUpperCase():", "i".toLocaleUpperCase("tr")); // Output: "İ"
// 65. String.prototype.toLocaleLowerCase()
// The toLocaleLowerCase() method returns the calling string value converted to lower case, according to any locale-specific case mappings.
console.log("65. String.prototype.toLocaleLowerCase():", "I".toLocaleLowerCase("tr")); // Output: "ı"
// 66. String.prototype.valueOf()
// The valueOf() method returns the primitive value of a String object.
console.log("66. String.prototype.valueOf():", strValue.valueOf()); // Output: "Hello"
// 67. String.prototype.startsWith()
// Demonstrating startsWith() method again for another example.
console.log("67. String.prototype.startsWith():", strConcat.startsWith("Hello")); // Output: true
// 68. String.prototype.endsWith()
// Demonstrating endsWith() method again for another example.
console.log("68. String.prototype.endsWith():", strConcat.endsWith("!")); // Output: false
// 69. String.prototype.includes()
// Demonstrating includes() method again for another example.
console.log("69. String.prototype.includes():", strConcat.includes("Hello")); // Output: true
// 70. String.prototype.indexOf()
// Demonstrating indexOf() method again for another example.
console.log("70. String.prototype.indexOf():", strConcat.indexOf("Hello")); // Output: 0
// 71. String.prototype.lastIndexOf()
// Demonstrating lastIndexOf() method again for another example.
console.log("71. String.prototype.lastIndexOf():", strConcat.lastIndexOf("l")); // Output: 9
// 72. String.prototype.charAt()
// Demonstrating charAt() method again for another example.
console.log("72. String.prototype.charAt():", strConcat.charAt(7)); // Output: "W"
// 73. String.prototype.charCodeAt()
// Demonstrating charCodeAt() method again for another example.
console.log("73. String.prototype.charCodeAt():", strConcat.charCodeAt(7)); // Output: 87
// 74. String.prototype.repeat()
// Demonstrating repeat() method again for another example.
console.log("74. String.prototype.repeat():", "Hi! ".repeat(2)); // Output: "Hi! Hi! "
// 75. String.prototype.search()
// The search() method executes a search for a match between a regular expression and the calling string.
console.log("75. String.prototype.search():", strConcat.search(/World/)); // Output: 6
// 76. String.prototype.toString()
// Demonstrating toString() method again for another example.
console.log("76. String.prototype.toString():", strValue.toString()); // Output: "Hello"
// 77. String.prototype.toLocaleString()
// The toLocaleString() method returns a string representing the specified object.
console.log("77. String.prototype.toLocaleString():", strValue.toLocaleString()); // Output: "Hello"
// 78. String.prototype.split()
// Demonstrating split() method again for another example.
console.log("78. String.prototype.split():", "one,two,three".split(",")); // Output: ["one", "two", "three"]
// 79. String.prototype.concat()
// Demonstrating concat() method again for another example.
console.log("79. String.prototype.concat():", "Hello".concat(" ", "World")); // Output: "Hello World"
// 80. String.prototype.trim()
// Demonstrating trim() method again for another example.
console.log("80. String.prototype.trim():", "   Hello   ".trim()); // Output: "Hello"
// 81. String.prototype.trimStart()
// Demonstrating trimStart() method again for another example.
console.log("81. String.prototype.trimStart():", "   Hello   ".trimStart()); // Output: "Hello   "
// 82. String.prototype.trimEnd()
// Demonstrating trimEnd() method again for another example.
console.log("82. String.prototype.trimEnd():", "   Hello   ".trimEnd()); // Output: "   Hello"
// 83. String.prototype.padStart()
// Demonstrating padStart() method again for another example.
console.log("83. String.prototype.padStart():", "5".padStart(3, "0")); // Output: "005"
// 84. String.prototype.padEnd()
// Demonstrating padEnd() method again for another example.
console.log("84. String.prototype.padEnd():", "5".padEnd(3, "0")); // Output: "500"
// 85. String.prototype.split()
// Demonstrating split() method again for another example.
console.log("85. String.prototype.split():", "a b c".split(" ")); // Output: ["a", "b", "c"]
// 86. String.prototype.slice()
// Demonstrating slice() method again for another example.
console.log("86. String.prototype.slice():", strConcat.slice(-5)); // Output: "World"
// 87. String.prototype.includes()
// Demonstrating includes() method again for another example.
console.log("87. String.prototype.includes():", strConcat.includes("o")); // Output: true
// 88. String.prototype.indexOf()
// Demonstrating indexOf() method again for another example.
console.log("88. String.prototype.indexOf():", strConcat.indexOf("W")); // Output: 6
// 89. String.prototype.lastIndexOf()
// Demonstrating lastIndexOf() method again for another example.
console.log("89. String.prototype.lastIndexOf():", strConcat.lastIndexOf("o")); // Output: 4
// 90. String.prototype.repeat()
// Demonstrating repeat() method again for another example.
console.log("90. String.prototype.repeat():", "Hello".repeat(3)); // Output: "HelloHelloHello"
// 91. String.prototype.search()
// Demonstrating search() method again for another example.
console.log("91. String.prototype.search():", strConcat.search("World")); // Output: 6
// 92. String.prototype.match()
// Demonstrating match() method again for another example.
console.log("92. String.prototype.match():", "Hello 123".match(/\d+/)); // Output: ["123"]
// 93. String.prototype.split()
// Demonstrating split() method again for another example.
console.log("93. String.prototype.split():", "a,b,c,d".split(",")); // Output: ["a", "b", "c", "d"]
// 94. String.prototype.startsWith()
// Demonstrating startsWith() method again for another example.
console.log("94. String.prototype.startsWith():", "TypeScript".startsWith("Type")); // Output: true
// 95. String.prototype.endsWith()
// Demonstrating endsWith() method again for another example.
console.log("95. String.prototype.endsWith():", "TypeScript".endsWith("Script")); // Output: true
// 96. String.prototype.toUpperCase()
// Demonstrating toUpperCase() method again for another example.
console.log("96. String.prototype.toUpperCase():", "hello".toUpperCase()); // Output: "HELLO"
// 97. String.prototype.toLowerCase()
// Demonstrating toLowerCase() method again for another example.
console.log("97. String.prototype.toLowerCase():", "HELLO".toLowerCase()); // Output: "hello"
// 98. String.prototype.normalize()
// Demonstrating normalize() method again for another example.
console.log("98. String.prototype.normalize():", "Á".normalize("NFC")); // Output: "Á"
// 99. String.prototype.charCodeAt()
// Demonstrating charCodeAt() method again for another example.
console.log("99. String.prototype.charCodeAt():", "Hello".charCodeAt(0)); // Output: 72
// 100. String.prototype.valueOf()
// Demonstrating valueOf() method again for another example.
console.log("100. String.prototype.valueOf():", "Hello World".valueOf()); // Output: "Hello World"
