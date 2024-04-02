class User {   
    username:string     
    constructor(Username:string) {   
       this.username = Username
    }   
 }   
 class Admin extends User {   
     Password: string
     constructor(Username: string, password: string) {  
         super(Username);  
         this.Password = password;  
     }  
     display():void {  
         console.log("Username" + this.username);  
         console.log("Password " + this.Password);  
     }  
 }  
 let obj = new Admin("Niven", "123abc" );  
 obj.display();   