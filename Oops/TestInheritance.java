

class Employee{  
void  work(){System.out.println("The Employee work at differnt position");}  
}  
class Manager extends Employee{  
void salary(){System.out.println("The Manages have highest packages");}  
}  
class TestInheritance{  
public static void main(String args[]){  
Manager m=new Manager(); 
m.salary();  
m.work();  
 
}}  