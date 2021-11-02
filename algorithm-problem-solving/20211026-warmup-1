function squidGame(lightArray, stepsArray){
  let stepsSum = 0;

  for (let lights = 0, steps = 0; steps < stepsArray.length; lights++, steps++){
    
    if(lightArray[lights] === 'red'){
      if(stepsArray[steps] > 0) {
        return 'dead';
      }
    }
    
    if (stepsArray[steps] < 0) {
      stepsArray[steps] = 0;
    }

    if(stepsArray[steps] > 5) {
      stepsArray[steps] = 5;
    }

    stepsSum = stepsSum + stepsArray[steps];
  }

  if (stepsSum === 50){
    return 'alive';
  } else {
    return 'dead';
  }
}

console.log(squidGame(["red","green","red","green","red","green","red","green","red","green","red","green","red","green","red","green","red","green","red","green","red","green","red","green","red"],[0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,4])) // => "dead"

console.log(squidGame(["red","green","red","green","red","green","red","green","red","green","red","green","red","green","red","green","red","green","red","green","red","green","red","green","red"],[0,6,0,6,0,6,0,6,0,6,0,6,0,6,0,6,0,6,0,4])) // => "dead"

console.log(squidGame(["red","green","red","green","red","green","red","green","red","green","red","green","red","green","red","green","red","green","red","green","red","green","red","green","red"],[0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5]));
// => alive

console.log(squidGame(["green","green","green","green","green","green","green","green","green","green","green","green"],[5,5,5,5,5,5,5,5,5,5,-1]));
// => alive

console.log(squidGame(["green","red","green","green","green","red","green","green","green","green","green","green"],[5,5,5,5,5,5,5,5,5,5])); // => "dead"
console.log(squidGame(["green","green","green","green","green","green","green","green","green","green","green","green"],[10,40])); // => "dead"


// If there is no steps element for a corresponding lights element, then that is the same as taking 0 steps.

// If steps > 5, then it's the same as 5.