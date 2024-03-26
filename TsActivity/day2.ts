class Animal {   
    Variety:string     
    constructor(variety:string) {   
       this.Variety = variety  
    }   
 }   
 class Dog extends Animal {   
     Price: number  
     constructor(variety: string, price: number) {  
         super(variety);  
         this.Price = price;  
     }  
     display():void {  
         console.log("Variety of the Dog: " + this.Variety);  
         console.log("Price of Dog: " + this.Price);  
     }  
 }  
 let obj = new Dog(" Labradon", 8500000 );  
 obj.display();   