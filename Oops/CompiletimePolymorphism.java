class Student {
    String name;
    int age;
    void display(String name) {
        System.out.println("Name: " + name);
    }
    void display(String name, int age) {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
    void display(String name, int age, char grade) {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Grade: " + grade);
    }
}

public class CompiletimePolymorphism {
    public static void main(String[] args) {
        Student student = new Student();
        student.display("Jeeva");
        student.display("Archana", 20);
        student.display("Babu", 22, 'A');
    }
}
