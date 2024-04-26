                        // Title of Applications: Oops Concepts
                        // Author: NITHIALAKSHMI
                        // Created date: 1-04-2024
                        // LastModified date: 2-04-2024  



// Abstract class
abstract class Person {
    String name;
    public Person(String name) {
        this.name = name;
    }
    public abstract void display();
}
class Student extends Person {
    int studentId;
    public Student(String name, int studentId) {
        super(name);
        this.studentId = studentId;
    }
    public void display() {
        System.out.println("Name: " + name);
        System.out.println("Student ID: " + studentId);
    }
}

public class Abstraction {
    public static void main(String[] args) {
        Student student = new Student("Nithia", 201021079);
        student.display();
    }
}
