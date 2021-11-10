function maxConsecutiveOnes(arr){

    let finalCount = 0;
    let count = 0;
  
    for (let i = 0; i < arr.length; i++){
      console.log("I: " + i);
      console.log("Arr[i]: " + arr[i]);
      console.log("Final count on I: " + finalCount);
        if (arr[i] === 1){
          count+=1;
          console.log("Count on I: " + count);
  
        } else if (arr[i] === 0) {
          if (count > finalCount){
          finalCount = count;
          }
          count = 0;
          continue;
        }
      for (let j = i + 1; j < arr.length; j++){
        console.log("J: " + j);
        console.log("Arr[j]: " + arr[j]);
  
        if (arr[j] === 1){
          count+=1;
          console.log("Count on J: " + count);
          i = i + 1;
          break;
        } else if (arr[j] === 0){
          break;
        }
      }
    }
  
    if (finalCount > count){
      console.log("Final Count: " + finalCount);
      console.log("Count: " + count);
      return finalCount;
      
    } else {
      console.log("Final Count: " + finalCount);
      console.log("Count: " + count);
      return count; 
    }
  }
  
  console.log(maxConsecutiveOnes([1,1,0,1,1,1])) // => 3
  console.log(maxConsecutiveOnes([1,0,1,1,0,1])) // => 2	
  console.log(maxConsecutiveOnes([1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1])); // => 4
  console.log(maxConsecutiveOnes([0,0,0])) // => 0
  console.log(maxConsecutiveOnes([1,1,0,0])) // => 2
  console.log(maxConsecutiveOnes([0,1,0])) // => 1
  console.log(maxConsecutiveOnes([0])) // => 0
  console.log(maxConsecutiveOnes([1])) // => 1
  