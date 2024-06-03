import java.io.*;  
class Main{  
 void method()throws IOException{  
  throw new IOException("device error");  
 }  
}  
public class Throws{  
   public static void main(String args[]){  
    try{  
     Main main=new Main();  
     main.method();  
    }catch(Exception exception){System.out.println("exception handled");}     
  
    System.out.println("normal flow.");  
  }  
}  