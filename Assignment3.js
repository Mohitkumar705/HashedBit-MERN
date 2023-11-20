//Question number 1

const states=['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar',
'Chhattisgarh','Goa	Panaji','Gujarat','Haryana','Himachal Pradesh','Jharkhand'
,'Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh	','Uttarakhand'	,'Gairsain ','West Benga'];
const result=states.filter(state=> !['A', 'E', 'I', 'O', 'U'].includes(state.charAt(0).toUpperCase()));

console.log(result); 


////////////////////////////
// Question number 2  let str = 'I love my India' output expected = 'India my love I'

 let strr = 'I love my India';
 let words=strr.split(' ');
 let reverseword=words.reverse();
 let reverse=reverseword.join(' ');
 console.log(reverse);
 
 ///////////////////////
 
 // Question 3. india to indonesia using array.splice
 

let string = 'INDIA';
let insertion = 'ONES';
 
let stringArray = string.split('');
stringArray.splice(3, 0, ...insertion.split(''));

let outputstr= stringArray.join('');
console.log(outputstr); // Output: 'INDONESIA' 



/////////////////////////

//Question 4  Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

let str='klahfjhajvbjkdslavbabvhsdvbaskh';
let vowelcount=0;
let constantcount=0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
for(let char of str){
  if(vowels.includes(char)){
  vowelcount++;
  }else{
  constantcount++;
  }
}
console.log(vowelcount);
console.log(constantcount);

///////////////////////////////////

//Question 6 

let inputArr = [1,2,3,9,10,7,5,4,3];
const outputa=inputArr.filter(number=>number>5);
console.log(outputa); 


/////////////////////
//Question 5.

function correctFn(sentence, wrong, correct) {
    const regex = new RegExp('\\b' + wrong + '\\b', 'gi');
    const correctedSentence = sentence.replace(regex, correct);
    return correctedSentence;
}

const originalSentence = "This is a wrong sentence with the wrong word.";
const correctedSentence = correctFn(originalSentence, "wrong", "correct");

console.log(correctedSentence); 

//////////////////////////////////

//Question 7 

const students = [
{ name: "Ram", scores: [80, 70, 60] },
{ name: "Mohan", scores: [80, 70, 90] },
{ name: "Sai", scores: [60, 70, 80] },
{ name: "Hemang", scores: [90, 90, 80, 80] },
];
const output = students.map(student=>{
  const average=student.scores.reduce((sum,score)=> sum+score)/student.scores.length;
  return {name: student.name,average: average};
});
console.log(output);

 
 /////////////////
 // Question number 8.


 function findSingleDigitSum(number) {
  while (number >= 10) {
    const digitSum = number.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
   number=digitSum;
   
  }
 
  return number;
 }
 
 
 const resultnumber = findSingleDigitSum(456);
 console.log(resultnumber); // Output: 6

 
 //////////////////////////////
 //Question number 9
 
 function countWords(paragraph) {
    let trimmedParagraph = paragraph.trim();
    
    let words = trimmedParagraph.split(/\s+/);
   
    words = words.filter(word => word !== "");
 
    return words.length;
 }
 
 let paragraph = "This is a sample paragraph for counting words.";
 let wordCount = countWords(paragraph);
 console.log(wordCount); 


///////////////////////
// Question number 10.

function reverseString(input) {
    return input.split('').reverse().join('');
}

let input = "Hello";
let reversed = reverseString(input);
console.log("Reversed: " + reversed);

 
 
 //////////////////
 // Question number 11.
 let data = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];
let resultavg = data.map(studentData => {
    let studentName = Object.keys(studentData)[0];
    let subjects = Object.values(studentData[studentName]);
    let average = subjects.reduce((sum, mark) => sum + mark, 0) / subjects.length;
    let resultObject = {
        [studentName]: {
            average: average
        }
    };

    return resultObject;
});
console.log(resultavg);
