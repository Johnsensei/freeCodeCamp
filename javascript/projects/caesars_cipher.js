function rot13(str) {
    // let sent = " ";
    // console.log(sent.charCodeAt(0))
  
    let letterArray = [];
    let code = 0;
  
    //Loop through the string incrementally.
    for (let i = 0; i < str.length; i++){
      console.log("i = " + i);
      console.log("str[i]= " + str[i])
  
    //Get the code of the character at the current index.
      //let character = str.charCodeAt(i);
    //If the code equals non-alphabetic character, return it, push to the array.
      console.log("Non-alphabetic " + (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90));
      if(str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90){
        letterArray.push(str[i]);
        continue;
      }
    //Else Add 13 to the code.
        else {
          code = str.charCodeAt(i) + 13;
          console.log("Code after +13 is " + code);
          }
      //If the code is higher than Z (90), subtract the difference, add that to 64 (A is (65)), then return the code.
      console.log("Code is above Z " +(code > 90))
        if(code > 90){
          code = (code - 90) + 64;
          console.log("Code after Z adjust is " + code);
        }
    //Return the character of that code.
      let character = String.fromCharCode(code);
      console.log("Character: " + character);
  
    //Push that character to the array.
      letterArray.push(character);
      console.log(letterArray);
    }
    
    return letterArray.join("");
  
  }
  
  console.log(rot13("SERR PBQR PNZC"));