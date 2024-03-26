class Employee {
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
const employee1 = new Employee("Lakshmanan", 21, 60000);
employee1.displayDetails();



//rest operator
function getAverage(...args: number[]) { 
    var avg = args.reduce(function (a, b) { 
        return a + b; 
      }, 0) / args.length; 
    
    return avg; 
  } 
 
  console.log("Average of the given numbers is : " +  
      getAverage(100, 201, 302, 403, 504)); 
  console.log("Average of the given numbers is : " +  
      getAverage(1.15, 3.25, 5.35, 7.45, 9.65)); 


//spread operator

let colour: string[] = ["yellow","Orange","purple"];
let newArray: string[] = [...colour];
console.log(newArray);