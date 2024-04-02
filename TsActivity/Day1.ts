class EmployeeDetails {
    name: string;
    age: number;
    salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
       this.salary = salary;
    }
    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
       
        console.log(`Salary: $${this.salary}`);
    }
}
const Employee1 = new EmployeeDetails("Lakshmanan", 21, 60000);
Employee1.displayDetails();



//rest operator
function GetAverage(...args: number[]) { 
    var avg = args.reduce(function (a, b) { 
        return a + b; 
      }, 0) / args.length; 
    
    return avg; 
  } 
 
  console.log("Average of the given numbers is : " +  
      GetAverage(100, 201, 302, 403, 504)); 
  console.log("Average of the given numbers is : " +  
      GetAverage(1.15, 3.25, 5.35, 7.45, 9.65)); 


//spread operator

let positions: string[] = ["Employee","Team Lead","Manager"];
let NewArray: string[] = [...positions];
console.log(NewArray);