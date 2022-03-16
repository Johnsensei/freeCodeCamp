function center(str, width, optional){
    let numOfChar = 0;
    let strArray = [];
  
    if(optional == undefined){
      optional = " ";
    }
    
    if(str.length > width){
    return str;
  } else {
    strArray = [...str];
    // return strArray;
    if ((width - str.length) % 2 != 0){
      numOfChar = Math.ceil((width - str.length)/2);
      
      for (let i = numOfChar; i > 0; i--){
      strArray.unshift(optional);
    }
      for (let i = numOfChar-1; i > 0; i--){
      strArray.push(optional);
    }
    }  else {
      numOfChar = (width - str.length)/2;
        for (let i = numOfChar; i > 0; i--){
        strArray.push(optional);
        strArray.unshift(optional);
    }
            
            }
  
  }
    return strArray.join("");
  }
  
  console.log(center("a", 3)); // -> " a "
  console.log(center("abc", 10, "_")); // -> "____abc___"
  console.log(center("abcdefg", 2)); // -> "abcdefg"
  console.log(center("", 0, "_")); // -> ""
  console.log(center("", 1, "_")); // -> "_"
  console.log(center("", 2, "_")); // -> "__"
  console.log(center("a", 1, "_")); // -> "a"
  console.log(center("a", 2, "_")); // -> "_a"
  console.log(center("abc", 1, "*")); // -> "abc"
  console.log(center("ab", 5)); //) -> "  ab "
  