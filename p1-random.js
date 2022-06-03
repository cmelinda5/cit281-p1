/*
    CIT 281 Project 1
    Name: Melinda Chan
*/

// Returns a random number between min (inclusive) and max (inclusive)
function getRandomInteger(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// initialize variable to empty string 
let output = ""; 

// loop from 5 to 25 (inclusive) for length of the string output 
for(let i = 0; i <= getRandomInteger(5, 25); i++) { 
    // get a random integer between the ASCII number corresponding to lowercase "a" and "z"
    // convert to a string in order to use fromCharCode();
    let alphaNum = getRandomInteger("a".charCodeAt(), "z".charCodeAt()); 
    let alphaStr = alphaNum.toString();  

    // convert from number ASCII code to letter
    // concatenate  letters together, for loop will loop through this a random number of times creating string length from 5 to 25
    let alpha = String.fromCharCode(alphaStr); 
    output = output + alpha; 
}

console.log(output);
