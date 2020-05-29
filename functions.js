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
            highestNumber = arrayIndexes[j]; //basically states if a number in the index is larger than the previous, make that the new highest number
         }
      }
      newArray.push(highestNumber); // once all highest numbers have been taken our of main array, push into a new one that only contains three values
   }
   console.log(newArray);

   return newArray;
}

//Confirming the ending of a string
function confirmTheEnd(string, targetOfString) {
   let lengthOfTarget = targetOfString.length;
   var sliceTheEnd = string.slice(string.length - lengthOfTarget); /// takes the total length of string and subtracts the targets value to see if string ends with target
   if (sliceTheEnd == targetOfString) {
      //if subtracted amount is equal to the targeted amount then return true;
      return true;
   } else {
      return false;
   }
}

//Repeat a String Repeat a String
function repeatingArray(userString, repeatNumber) {
   let repeatedResult = ""; //result will be made into a new string
   if (repeatNumber < 1) {
      return "" + " please enter a number greater than zero"; // result 0- (-infinity) return a empty string
   }
   for (let i = 0; i < repeatNumber; i++) {
      //for loop that iterates through until value is greater than repeatNumber
      repeatedResult += userString; // the userString will repeat according to the repeatNumber, the result will be pushed into same string over and over
   }
   return repeatedResult; // must return the result to see new string
}

//Truncate a String
function truncateString(string, number) {
   var truncated = string.slice(0, number); // slices the string at the start postions, takes the user number to see where the slice ends
   if (truncated < string) {
      return truncated + "..."; //if less, return the truncated amount
   } else {
      return string; // if truncated is longer then return the current string value
   }
}
// Finders Keepers
function findingElement(input, input2, input3) {
   let arr = [input, input2, input3];
   let emptiedArray = [];
   for (var i = 0; i < arr.length; i++) {
      //iterates through  array
      if (arr[i] % 5 === 0) {
         // goes through each index
         return arr[i]; // which ever number is the first to pass the test, that number is returned
      } //can not add return here because the loop will stop
   }
   if (emptiedArray.length !== 0) {
      //if array is not empty
      return emptiedArray.push(arr[i]); // return new array
   } else {
      return "Insert a number that passes the test";
   }
}

//Basic Algorithm Scripting: Boo who
function isABoolean(input) {
   if (typeof input === "boolean") {
      //if the parameter(user input) has a datatype of "boolean" return true
      return true;
   } else {
      return false;
   }
}
//Title Case a Sentence
function titleCase(input) {
   var lowerCase = input.toLowerCase(); // turns all characters in string to lowercase
   var splitCharacters = lowerCase.split(" "); // splits all words of string into substrings inside of an array
   var manipulateCharacters = splitCharacters.map(function (mapWords) {
      // creates a new array which calls our function to manipulate each array element.
      return mapWords[0].toUpperCase() + mapWords.slice(1); // mapWords is the value of each substring, we use the upperCase method on each first character[0] // adds the rest of the substring to the newly manipulated string ex. T + yler; T = mapWords[0].toUpperCase; yler = mapwords.slice[1]
   });
   return manipulateCharacters.join(" "); // all substring now have the first letter capitalized, use join put them back into one string seperated by spaces.
}
// slice and splice
function sliceNSplice(array1, array2, index) {
   var spliceSecondArray = array2.slice(); //creates a copy of second array so we can add the first one inside
   spliceSecondArray.splice(index, 0, ...array1); // splice starts at index input, and does not remove any items, the full first array will be inserted in the value of the index of the second array
   return spliceSecondArray;
}

//Falsy Bouncer
function removeFalsy(input) {
   let filteredArray = input.filter(function (truthy) {
      // filter out truthy values and returns it
      return truthy;
   });
   return filteredArray; //returns new strings of all truthy values
}
//Where do I Belong
function sortNumbers(array, inputNum) {
   array.push(inputNum); //push user num into array
   array.sort((a, b) => a - b); // sorts array from least to greatest, a-b will give negative number meaning a is smaller
   return index; //returns the index of the users num
}

///Basic Algorithm Scripting: Mutations
function mutations(word1, word2) {
   var firstWord = word1.toLowerCase();
   var secondWord = word2.toLowerCase(); //changes letters to lower case to help compare better
   for (var i = 0; i < secondWord.length; i++) {
      if (firstWord.indexOf(secondWord[i]) === -1) return false;
      //if the current index of secondword is in first word, stop loop
   }
   return true; //returns after loop has ended meaning all secondword's characters are in first word
}
//Basic Algorithm Scripting: Chunky Monkey
function chunkyMonkeyArray(array, sizeOfArray) {
   var newArray = []; // new array to push results in
   while (array.length > 0) {
      //while array length is greater than 0, keep running function
      newArray.push(array.splice(0, sizeOfArray)); //push new array with parameters of 0 start, and length of user input
   } /// result [2,3,4,5,6],2 === [2,3],[4,5],[6]
   console.log(newArray);
   return newArray;
}
