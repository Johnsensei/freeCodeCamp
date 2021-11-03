function factorialize(num) {
    if (num === 0){
      num = 1;
    } else {
    for (let i = num - 1; i > 0; i--){
      num *= i;
      console.log("i: " + i);
      console.log("num: " + num);
    }
    } 
    return num;
  }
  
  console.log(factorialize(5));