//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.
const input = require('readline-sync');

let protein= ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains= ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies= ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let beverage= ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let fruits= ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];

// b. Use an “array of arrays” to store the food options in a ‘pantry’.
let pantry=[];
pantry.push(protein)
pantry.push(grains)
pantry.push(veggies)
pantry.push(beverage)
pantry.push(fruits)
console.log("pantry",pantry)
//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.

let meals =input.question("Enter the number of meals:")
meals=Number(meals)

//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.
while(meals<1||meals>6||!Number.isInteger(meals)){
  console.log(meals)
meals=Number(input.question("Invalid selection.Enter the number of meals(1-6)"))
}

for(let i=0;i<meals;i++){
   let arr=[];
 arr.push(protein[i].toUpperCase())
 arr.push(grains[i].toUpperCase())
 arr.push(veggies[i].toUpperCase())
 arr.push(beverage[i].toUpperCase())
 arr.push(fruits[i].toUpperCase())
//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.

//console.log("$")
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”
if(arr[i]==='KALE'|| arr[i]==='MORE KALE'){
  console.log("_________________________")
  console.log("Don’t worry, you can have double chocolate tomorrow.")
 console.log("_________________________")
}
console.log(arr,"\n")
}

