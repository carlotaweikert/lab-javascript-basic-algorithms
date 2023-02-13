// Iteration 1: Names and Input

let hacker1 = 'Carlota';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Anna'; 
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

// Si hacker1 > hacker2 
if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  // Si hacker1 < hacker2 
} else if(hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  // Si hacker1 == hacker2 
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

// Print capital letter longest name 

let hacker1Mayus = "";

for (let i = 0; i < hacker1.length; i++) {
  hacker1Mayus += hacker1[i] + ' ';
}

console.log(hacker1Mayus.toUpperCase());

// Print hacker2 reverse

let hacker2Reverse = ""; 

for (let i = hacker2.length-1; i >= 0; i--) {
  hacker2Reverse += hacker2[i];
}

console.log(hacker2Reverse); 

// Lexicographic order 

if(hacker1 > hacker2){
  console.log("The driver's name goes first.");
  // Si hacker1 > hacker2 
} else if(hacker1 < hacker2){
  console.log("Yo, the navigator goes first definitely.");
  // Si hacker1 == hacker2 
} else {
  console.log("What?! You both have the same name?");
}
