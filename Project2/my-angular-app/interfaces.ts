export interface User{
    name :string;
    age?:number; //optional
    id:number;
    email:string;
}


let {name : userName,  email : userLogin} : User = {name:"AKG",id:12233,email:"akg123@gmail.com"}

interface Employees extends User {
 salary:number;

}


let employee : Employees = {name:"AKG",id:12233,email:"akg123@gmail.com",salary:100000}



export interface Login {
    Login():User;
}


let [user1,user2, ...restUsers] : User[] = [
    {name: "AKG",id:1223,email:"akg123@gmail.com"},
    {name: "AKG",id:1223,email:"akg123@gmail.com"},
    {name: "AKG",id:1223,email:"akg123@gmail.com"}
]

console.log(user1)
console.log(user2)
console.log(restUsers)
