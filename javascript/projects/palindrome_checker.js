function palindrome(str) {
    //Use regex to remove non-alphanumerics.
    str = str.replaceAll(/[^0-9a-z]/gi, "");
    
    //Make all characters lowercase.
    str = str.toLowerCase();
    //console.log(str);
  
    //Loop through from left to right (positive increment).
    for (let i = 0; i < str.length; i++)
    //Compare first character in loop to last in string.
      {
        if(str[i] === str[(str.length - i - 1)]){
          //console.log("yes")
          continue;
        } else{return false}
      }
    
    return true;
  }
  
  console.log(palindrome("five|\_/|four"));