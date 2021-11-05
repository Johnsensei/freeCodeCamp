//Return the length of the longest word in the provided sentence.
//Your response should be a number.

//Can be improved.

function findLongestWordLength(str) {
  let letterCount = 0;
  let currentWord = "";

//Convert each word in the string to an element in an array.
  let strArray = str.split(" ");

//Loop through each element in the array.
  for (let i = 0; i < strArray.length; i++){
    currentWord = strArray[i];

    if (currentWord.length > letterCount){
      letterCount = currentWord.length;
    }   
  }

  return letterCount;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));