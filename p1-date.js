/*
    CIT 281 Project 1
    Name: Melinda Chan
*/

let dayWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let dayOut = dayWeek[new Date().getDay()]; 
// * new Date() Date object that gets current day and time
// * .getDay() outputs number 0 to 6 representing the day of the week with 0 = Sunday and 6 = Saturday
// * this number corresponds to the day of the week in the dayWeek array
console.log(dayOut);



