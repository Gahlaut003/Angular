function demoVoid() {
}
function demoNumber() {
    return 12;
}
function demoString() {
    return "Hi";
}
function demoArray() {
    return [12, 1];
}
demoNumber();
demoString();
demoArray();
function demoArrayParameters(num1, num2) {
    console.log("".concat(num1, " : ").concat(num2));
    return [num1, num2];
}
var results;
results = demoArrayParameters(1, 2);
console.log(typeof results);
function demoArrayParametersType(num1, num2) {
    console.log("".concat(num1, " : ").concat(num2));
    return [num1, num2];
}
var resultsParatype;
resultsParatype = demoArrayParameters(1, 2);
console.log(resultsParatype);
