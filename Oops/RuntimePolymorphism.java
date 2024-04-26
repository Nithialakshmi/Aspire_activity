class Employee {
    int id;
    String name;
    
    Employee(int id, String name) {
        this.id = id;
        this.name = name;
    }
    
    void display() {
        System.out.println("ID: " + id + ", Name: " + name);
    }
}

class Manager extends Employee {
    float salary;
    
    Manager(int id, String name, float salary) {
        super(id, name);
        this.salary = salary;
    }
    
    @Override
    void display() {
        System.out.println("ID: " + id + ", Name: " + name + ", Salary: " + salary);
    }
}

class Clerk extends Employee {
    float hoursWorked;
    
    Clerk(int id, String name, float hoursWorked) {
        super(id, name);
        this.hoursWorked = hoursWorked;
    }
    
    @Override
    void display() {
        System.out.println("ID: " + id + ", Name: " + name + ", Hours Worked: " + hoursWorked);
    }
}

public class RuntimePolymorphism{
    public static void main(String[] args) {
        Employee employee1 = new Manager(1021, "Joel", 5000.0f);
        Employee employee2 = new Clerk(1022, "Naveen", 40.0f);
        
        employee1.display(); 
    }
}
