var fName = "Virat";
var lName = "Kohli";
var result = fName.concat(' ',lName); // ViratKohli
console.log(result);

var replace=fName.replace('We will rock you', 'louder')
console.log(replace);

console.log("==============replace()===============");
var greet = "Good Morning bro and sis";
var replaceDemo = greet.replace("Morning", "Evening");
console.log(replaceDemo);

console.log(replaceDemo.toLocaleUpperCase); 
console.log("==============toUpperCase() and toLowerCase()===============");
console.log(replaceDemo.toUpperCase());
console.log(replaceDemo.toLowerCase());

console.log(greet.length);
greet.trim(greet.length);

var trimResult=greet.trim;
console.log(trimResult.length);
console.log('================================');
var greet = "Good Morning bro and sis";
console.log(greet.includes('bro'));
console.log('================================');
var greet = "Good Morning bro and sis";
greet.substring(8);
console.log(greet.substring(8));
console.log(greet.substring(10,14));

console.log('================================');

greet.slice(13,);
console.log(greet.slice(13,17));
console.log('================================');

console.log("==============split()===============");
var studentList  = "Sunil | Anil| Andy| Jenny| Lata";
var splitResult = studentList.split("");
console.log(splitResult);
console.log('===============================');

var impQuote = `"Do or Die" this attitude is important for this training`;
console.log(impQuote);
console.log('===================================');

var impQuote = `"Do or Die" this attitude is important for this training`;
console.log(impQuote);

var fName = "Virat";
var lName = "Kohli";

// First Name:${fName}  Last Name: ${lName} 
console.log(`First Name : ${fName} and Last Name: ${lName}`);

console.log(`==========================`);

var res = "Hey you are doing good keep it up";
var stepSplit =  res.split(" ");
console.log(stepSplit);
console.log(stepSplit.length);
