import { json } from "stream/consumers";
import { Login ,User } from './interfaces';
interface Address {
    street:string;
    city:string;
    state:string;
    pin:string;

}


class Employee implements Login {
id:number;
  name:string;
 address:Address;
  
/**
 *
 */
constructor(id:number,name:string,address:Address) {
    this.id = id;
    this.name = name;
    this.address =address;
    
}
    Login(): User {
     return {name:"Jhon",id:1233,email:""}
    }

getNamewithAddress():string{

    return `${this.name} ${this.address}`
}
static getEmployeeCount() : number{
console.log(50)
    return 50
}


}

Employee.getEmployeeCount()

let jhon =  new Employee(1,'AKG',{street:'Block A',city:"LKO",pin:"111000",state:"UP"});



// jhon.id=1;
// jhon.name='jhon';
// jhon.address='lko';
console.log(jhon)
let address : string = jhon.getNamewithAddress();
console.log(address)


// class Manager extends Employee{
//  /**
//   *
//   */
//  constructor(id:number,name:string,address:string) {
//     super(id,name,address);
    
//  }   
// }



