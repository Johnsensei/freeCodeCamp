function repeatStringNumTimes(str, num) {
    let newStr = "";
    
    for (let i= num-1; i >= 0; i--){
        newStr += str;
    };
  
    return newStr;
  }
  
  console.log(repeatStringNumTimes("abc", 3));