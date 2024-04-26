  
public class Encapsulation {  
public static void main(String[] args) {  
    
    Account account=new Account();  

    account.setAccounr_number(7560504000L);  
    account.setName("Soniya");  
    account.setEmail("soniya@gmail.com");  
    account.setAmount(500000f);  
 
    System.out.println(account.getAcc_no()+" "+account.getName()+" "+account.getEmail()+" "+account.getAmount());  
}  
}  