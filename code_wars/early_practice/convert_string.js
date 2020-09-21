// Write a function that takes a string and converts it into a camel case string
// Rules: First character needs to be uppercase
//        every character after a dash needs to be uppercase/
//        dashes should be removed

// Example: the_stealth_warrior = TheStealthWarrior
// Input: String
// Output: String

// Steps:
// initialize a uppercaseIsTrue Variable
// initialize a results variable
// itterate over the string
// if uppercaseIsTrue is true then uppercase
//   set uppercase to false
// check if current itteration is dash if so set uppercase to true
// return resultsvariable


function toCamelCase(str){
  let upperCase = false;
  let results = '';
  str.split('').forEach(char => {
    if (upperCase) {
      results += char.toUpperCase();
      upperCase = false;
    } else if (char === '-' || char === '_') {
      upperCase = true;
    } else {
      results += char;
    }
  });

  return results;
}

console.log(toCamelCase('')); //, '', "An empty string was provided but not returned")
console.log(toCamelCase("the_stealth_warrior")); //, "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
console.log(toCamelCase("The-Stealth-Warrior")); //, "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
console.log(toCamelCase("A-B-C")); //, "ABC", "toCamelCase('A-B-C') did not return correct value")
