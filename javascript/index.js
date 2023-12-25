const first = "sahil";
console.log(first);

const age = 20;
console.log(age);

const users = ["sahil", "emir", "light", "levi"];
console.log(users[1]);
console.log(users[10]);

const user1 = {
  name: "sahil",
  age: 20,
  phone: 987656765,
};

const usersArray = [
  { name: "John", age: 30 },
  { name: "Emma", age: 40 },
];
console.log(usersArray[0].name);
// for(i=0; i<usersArray.length; i++){
//     const detail = usersArray[i].name + " is " + usersArray[i].age +" years old."
//     console.log(detail);
// }

function printDetails(usersArray) {
  for (let i = 0; i < usersArray.length; i++) {
    const detail =
      usersArray[i].name + " is " + usersArray[i].age + " years old.";
    console.log(detail);
  }
}
printDetails(usersArray);
printDetails(usersArray);
printDetails(usersArray);

console.log(user1);
console.log(user1.phone);

for (var i = 0; i < users.length; i++) {
  console.log(users[i]);
}

//while loop example
let j = 0;
while (j <= 3) {
  console.log("Looping " + j);
  j++;
}

//sum of 1 to 100
let sum = 0;
for (let num = 1; num <= 100; num++) {
  sum += num;
}
console.log("Sum is " + sum);

//print fibonacci series
function fibonacciSeries(n) {
  let a = 0,
    b = 1;
  for (let c = 0; c < n; c++) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
  }
}
fibonacciSeries(10);

//function to print sum 1 to 100
function sum100(startIndex, endIndex) {
  let sum = 0;
  for (let i = startIndex; i <= endIndex; i++) {
    sum += i;
  }
  return sum;
}

// const result = sum100(1, 100);
const result = sum100(1, 20);
console.log(result);


//functions take other functions as input or arguments

function add(a, b){
    return a+b
}
function sub(a, b){
    return a-b
}
function mul(a, b){
    return a*b
}
function div(a, b){
    return a/b
}

function calculator(firstEl, secondEL, arithmeticFn){
    return arithmeticFn(firstEl, secondEL)
}

 console.log(calculator(3,2, add))
 console.log(calculator(3,2, sub))
 console.log(calculator(3,2, mul))

//function to print pattern
 function createPattern(numOfRows){
    for (let i =0; i<numOfRows; i++){
        stringToPrint = ""
        for(let j=0;j<i+1; j++){
            stringToPrint += "*"
        }
        console.log(stringToPrint);
    }
 }
 createPattern(10)


 //pyramid pattern
 function printPyramid(numOfRows){
    for(let i=0; i<numOfRows; i++){
        stringToPrint = ""
        for(j=0;j<i+1;j++){
            stringToPrint+="**"
        }
        console.log(stringToPrint);

    }
 }


 printPyramid(8)