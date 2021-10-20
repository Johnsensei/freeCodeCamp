//Find the least common multiple (LCM) of the provided parameters that can be evenly divided by both,
//as well as by all sequential numbers in the range between these parameters.
//For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 
//that is also evenly divisible by all numbers between 1 and 3 (1, 2, 3). The answer here would be 6.
function smallestCommons(arr) {
  
    var newArray = [];
    var trueCount = 0;
  
//Creates an array filling in all the numbers inclusive of the two values given to the function.
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
      newArray.push(i);
    }
    console.log(newArray)
//Sets testNum as the max of this newArray that includes all the values.
    var testNum = Math.max(...newArray);
    console.log(testNum);

//While all the numbers in the array are not evenly divided by the testNum...
    while (trueCount < newArray.length) {
//Loop through the array.
//This next line gives an infinite loop warning when certain values are passed in, ex: [23,18]
//and the program fails to calculate the correct result.
      for (var i = 0; i < newArray.length; i++){

//If dividing the current testNum by the newArray indexed number divides evenly (does not produce a remainder)...
      if (testNum % newArray[i] === 0) {
//Then increase the trueCount by 1
          trueCount++;

//If there is a remainder, reset the loop, increase the testNum by 1, start the loop again with the new testNum.
//I'm not resetting trueCount to 0, so I can add trueCount=0; here but it doesn't change anything.
        } else {i=0; testNum++;}
      }
    }

//When the testNum is evenly divisible by all values in the array, the trueCount should be = to newArray.length
//This should stop the while loop and then return whatever the final testNum was, which should be the LCM.
  return testNum;
  }

  //Works for the following test cases: [1, 5]; [5, 1]; [2, 10]; [1, 13]
  //Produces an infinite loop warning and produces an incorrect result for the following test cases:
  //[23, 18]; [1, 16] and anything higher. It seems to fail with really big numbers.
  
  //Here is where you pass in two numbers and log the result to the console.
  console.log(smallestCommons([1,5]));