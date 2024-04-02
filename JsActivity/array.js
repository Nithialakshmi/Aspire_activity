//array length
let courses = ["HTML", "CSS", "JavaScript", "React"];
console.log(courses.length);

//map
const numbers = [32,44,66,85]
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 5;
}

//concat
let array1 = [11, 12, 13];
let array2 = [14, 15, 16];
let array3 = [17, 18, 19];

let newArray = array1.concat(array2, array3);
console.log(newArray);

//push 


let numArr = [10, 20, 30, 40, 50];
numArr.push(60);
numArr.push(70, 80, 90);
console.log(numArr);
let strArr = ["piyush", "gourav", "smruti", "ritu"];
strArr.push("sumit", "amit");
console.log(strArr);

//pop

let numsArr = [20, 30, 40, 50];
numsArr.pop();
console.log(numsArr);

let stringArr = ["amit", "sumit", "anil"];
stringArr.pop(2);
console.log(stringArr);

