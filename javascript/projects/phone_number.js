function telephoneCheck(str) {
  
    let numCount = 0;
    let strArray = [...str];
    let parenOpen = false;
    let parenClose = false;
    let parenOpenIndex = 0;
    let parenCloseIndex = 0;
    let regex = /[^0-9\(\)\s-]/;
    console.log(strArray)
  
    //Loop through the string array.
    for (let i = 0; i < strArray.length; i++){
  
      console.log("i = " + i);
      console.log("strArray[i] = " + strArray[i]);
      console.log("The number is " + Number(strArray[i]));
    //Check if the current index is a number or accepted symbol( -). Increment a count if a number.
      if(regex.test(strArray[i])){
        return false;
      } else
      if((Number(strArray[i])) || strArray[i] === "0"){numCount++;}
      console.log("numCount: " + numCount)
    } //End of i loop

    //If the count of numbers is less than 10, return false.
    //If the count is greater than 11, return false.
      if(numCount < 10 || numCount > 11){return false;}
    
    //If the count of numbers = 11, check if the first number is a 1. If not, return false.
      if(numCount === 11){
        if(strArray[0] != 1){return false}
      }
  
    //Could have a boolean switch going on to check if parentheses get properly opened and closed ().
    for (let j = 0; j < strArray.length; j++){
      
          if(strArray[j] == "("){
            parenOpen = true;
            parenOpenIndex = j;
          } else 
          if(strArray[j] == ")"){
            parenClose = true;
            parenCloseIndex = j;
          }  
    } //End j loop
    
    if((!parenOpen && !parenClose) ||
        (parenOpen && parenClose) &&
          (parenCloseIndex - parenOpenIndex == 4)
    ){return true} else{return false}
  }
  
  console.log(telephoneCheck("1 555-555-5000"));