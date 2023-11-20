// question number 1 print all even number 1 to 100
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
} 
// wuestion number 2  Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function

let n1=parseInt(prompt("entar 1 st number.."));
let n2=parseInt(prompt("enter 2nd number"));
let a=prompt(" entar expression");
switch(a){
 case '+':
   console.log(sum(n1,n2));
  break;
 case '-':
   console.log(subtract(n1,n2));
  break;
 case '*':
   console.log(multiply(n1,n2));
  break;
 case '/':
   console.log(divide(n1,n2));
  break;
 default:
   console.log("something went wrong");
}
function sum(num1,num2){
  return num1+num2;
}
function subtract(num1,num2){
return num1-num2;
}
function multiply(num1,num2){
return num1*num2;
}
function divide(num1,num2){
return num1/num2; 
}


//////////////////////////////
// Question number 4.  sum of product
let sum=0;
function product(n1,n2){
sum =(parseInt(n1%10)*parseInt(n2%10))+((~~(n1/10))*(~~(n2/10)));
return sum;
}
console.log(product(6,34)); 

//////////////////////////////////////
// Question number 3 to calculate tax amount
const salary=parseInt(prompt("enter Salary..."));

function findTax(salary) {
    let taxRate;
    
    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.1;
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxRate = 0.2;
            break;
        case (salary > 1500000):
            taxRate = 0.3;
            break;
        default:
            console.log("Invalid salary amount");
            return; 
    }

    const taxAmount = salary * taxRate;
    console.log(`The tax amount on a salary of ${salary} is: ${taxAmount}`);
    return taxAmount;
}

findTax(salary);
