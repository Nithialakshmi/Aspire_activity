//duck typing
class Cat {  
    sound = "meow";  
}  
class Lion {  
    sound = "roaring";  
}  
class Goat {  
    sound = "bleat";  
    swim(){  
        console.log("Sound of animals");  
    }  
}  
let lion: Lion = new Cat(); 
let cat: Cat = new Lion();  
let lionTwo: Lion = new Goat();   
console.log("Lion Sound: "+lion.sound);  
console.log("Dog sound: "+cat.sound);  
console.log("Lion sound: "+lionTwo.sound);  
 
//list in number
let numbers: number[] = [21,41,65,98,63];
let firstNumber = numbers[0];
numbers.push(6); 
numbers.splice(2,1);
let listLength = numbers.length;
console.log(listLength); 

//list in string
let color: string[] = ["Red","Blue","Pink"];
let index = color.indexOf("pink");
console.log(index); 
color.forEach(colors => {
    console.log(colors);
});
