function procedure(num){

    let multiple = 1;
    let firstArray = [];
    // 30, 60, 90
    for (multiple; num * multiple <= 100; multiple++){
      firstArray.push(num * multiple);
      // console.log(firstArray);
    }
    
    // 3, 6, 9
    let secondArray = [];
    for (let j = 0; j < firstArray.length; j++){
      secondArray.push([...firstArray[j] + ''].map(Number).reduce((a, b) => a + b));
      // console.log(secondArray);
    }
  
    return secondArray.reduce((a, b) => a + b);
    
  
  }
  
  
  console.log(procedure(30)); // -> 18
  console.log(procedure(12)); // -> 72
  console.log(procedure(41)) // -> 15
  console.log(procedure(32)); // -> 30
  console.log(procedure(18)); // -> 45