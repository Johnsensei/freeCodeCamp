function convertToRoman(num) {
 
    //Make the number into an array of separate digits.
    let numberString = num.toString();
    let numberArray = [...numberString];
    let numeralArray = [];
    //console.log(numberArray)

    //Loop through the array by decrementing.
    for (let i = numberArray.length-1; i >= 0; i--){

    if(i === numberArray.length - 1){
       switch (true){
         
           case (numberArray[i] == "0"):
           numeralArray.unshift("");
           break;
   
           case (numberArray[i] == "1"):
           numeralArray.unshift("I");
           break;
   
           case (numberArray[i] == "2"):
           numeralArray.unshift("II");
           break;
   
           case (numberArray[i] == "3"):
           numeralArray.unshift("III");
           break;
   
           case (numberArray[i] == "4"):
           numeralArray.unshift("IV");
           break;
   
           case (numberArray[i] == "5"):
           numeralArray.unshift("V");
           break;
   
           case (numberArray[i] == "6"):
           numeralArray.unshift("VI");
           break;
   
           case (numberArray[i] == "7"):
           numeralArray.unshift("VII");
           break;
   
           case (numberArray[i] == "8"):
           numeralArray.unshift("VIII");
           break;
   
           case (numberArray[i] == "9"):
           numeralArray.unshift("IX");
           break;

           default:
           console.log("S1 Hit the default")
       }
    }


      else if(i === numberArray.length - 2){
        switch (true){
         
           case (numberArray[i] == "0"):
           numeralArray.unshift("");
           break;
   
           case (numberArray[i] === "1"):
           numeralArray.unshift("X");
           //console.log("Hit a 10.");
           break;
   
           case (numberArray[i] == "2"):
           numeralArray.unshift("XX");
           break;
   
           case (numberArray[i] == "3"):
           numeralArray.unshift("XXX");
           break;
   
           case (numberArray[i] == "4"):
           numeralArray.unshift("XL");
           break;
   
           case (numberArray[i] == "5"):
           numeralArray.unshift("L");
           break;
   
           case (numberArray[i] == "6"):
           numeralArray.unshift("LX");
           break;
   
           case (numberArray[i] == "7"):
           numeralArray.unshift("LXX");
           break;
   
           case (numberArray[i] == "8"):
           numeralArray.unshift("LXXX");
           break;
   
           case (numberArray[i] == "9"):
           numeralArray.unshift("XC");
           break;

           default:
           console.log("Hit the default")
        }
      }       
       else if (i === numberArray.length - 3){
        switch (true){
         
           case (numberArray[i] == "0"):
           numeralArray.unshift("");
           break;
   
           case (numberArray[i] === "1"):
           numeralArray.unshift("C");
           break;
   
           case (numberArray[i] == "2"):
           numeralArray.unshift("CC");
           break;
   
           case (numberArray[i] == "3"):
           numeralArray.unshift("CCC");
           break;
   
           case (numberArray[i] == "4"):
           numeralArray.unshift("CD");
           break;
   
           case (numberArray[i] == "5"):
           numeralArray.unshift("D");
           break;
   
           case (numberArray[i] == "6"):
           numeralArray.unshift("DC");
           break;
   
           case (numberArray[i] == "7"):
           numeralArray.unshift("DCC");
           break;
   
           case (numberArray[i] == "8"):
           numeralArray.unshift("DCCC");
           break;
   
           case (numberArray[i] == "9"):
           numeralArray.unshift("CM");
           break;

           default:
           console.log("Hit the default")
        }
       }

    else if (i === numberArray.length - 4){
        switch (true){
         
           case (numberArray[i] == "0"):
           numeralArray.unshift("");
           break;
   
           case (numberArray[i] === "1"):
           numeralArray.unshift("M");
           break;
   
           case (numberArray[i] == "2"):
           numeralArray.unshift("MM");
           break;
   
           case (numberArray[i] == "3"):
           numeralArray.unshift("MMM");
           break;

           default:
           console.log("Hit the default")
        }
       }

    }
   
    console.log(numeralArray)
    return numeralArray.join("");
   
   }
   
  
   console.log(convertToRoman(3999));