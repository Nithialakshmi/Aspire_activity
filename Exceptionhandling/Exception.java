// Title: Exception Handling
// Author: Nithialakshmi.N
// Last modified date:31/5/2024


import java.util.Scanner;

class Exception{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);
        int num1,num2,result;
        
        int[] empId={2,3,4,5,6};
        
        try{
            num1=scan.nextInt();
             num2=scan.nextInt();
             result=num1/num2;
             
        System.out.println(empId[7]);
         System.out.println("Completing try block");
        }
        catch(ArithmeticException exception)
        {
            System.out.println(exception.getMessage());
        }
        catch(ArrayIndexOutOfBoundsException exception){
            System.out.println(exception.getMessage());
        }
    }
}