// Convert Celsius to Fahrenheit
function convertTemp(userTempCelsius) {
   var fahrenheit = (userTempCelsius * 9) / 5 + 32; // applies the algorithm to the user input and returns it
   return fahrenheit;
}

//Reverse a StringPassed
function reverseAString(userInput) {
   var changeFromStringToArray = userInput.split(""); // split each character of input and place in own array
   return changeFromStringToArray.reverse().join(""); // the new array will then have its elements reversed but seperated by commas, .join removes and places all elements into one string
}

//Factorialize a Number
function factorialize(input) {
   let outcome = 1;

   for (let i = input; i > 0; i--) {
      // for loop states that if user input is over 0, it will be multiplied by one, the input will decrement each time and then added together for the total
      outcome = outcome * i; // multiples total by i until number reaches 0 also can be written: outcome *= i
   }
   return outcome;
}
// Find the longest word in a string
function longestWordString(addToString) {
   let longestWord = 0; // variable that will set longest word length to empty string
   let wordInStrings1 = addToString.split(" "); // splits string into array where the elements are each word
   for (let i = 0; i < wordInStrings1.length; i++) {
      //iterates through each word in string,increments each time by one and stops if it is greater the array's value
      if (wordInStrings1[i].length > longestWord) {
         //if length of index is greater than previous word, make that the new longest word
         longestWord = wordInStrings1[i].length;
      }
   }
   return longestWord; //TODO read up more on it
}

// Return Largest Numbers in Arrays
function returnLargestNumber(input, input2, input3) {
   var newArray = [];
   var arrayOfNumber = [
      [5, 4, 455, 6, input], //array inside of array that contains user's input
      [34, 45, 75, 345, input2],
      [9, 40, 30, 20, input3],
   ];
   for (let i = 0; i < arrayOfNumber.length; i++) {
      //loop that interates through array's length and stops once it can not fulfill that condition
      let arrayIndexes = arrayOfNumber[i];
      //takes out all sub arrays and puts in indiviual arrays
      let highestNumber = arrayOfNumber[i][0];
      // starts at the 0 index of each array
      for (let j = 0; j < arrayIndexes.length; j++) {
         //interate through each array comparing one number to the next
         if (highestNumber < arrayIndexes[j]) {
            highestNumber = arrayIndexes[j]; //basically states if a number in the index is largest than the previous, make that the new highest number
         }
      }
      newArray.push(highestNumber); // once all highest numbers have been taken our of main array, push into a new one that only contains three values
   }
   console.log(newArray);

   return newArray;
}
