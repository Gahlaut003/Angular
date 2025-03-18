let numarray : Array<number> = [1,2,3,4,5,6,7,8,9,10];
let newnumArray : number[] = [1,11,111,1111,111111,1111111] 


let result =  numarray.filter((num => num %2 ==0))
console.log(result)
let result2 =  numarray.find((num => num == null))
console.log(result2)


let result3 = numarray.reduce((acc,num) =>acc+num)

console.log(result3)



const enum Color {

    Blue,
    green,red
}


let c : Color = Color.green

console.log(c)

