function is_valid_PIN(str){
    if(str.length == 4 || str.length == 6){
  
      if(+str){
        return true;
      } else {return false}
      
    } else {return false}
  }
  
  console.log(is_valid_PIN("1234")); // -> True
  console.log(is_valid_PIN("12345")); // -> False
  console.log(is_valid_PIN("a234")); // -> False
  console.log(is_valid_PIN("")); // -> False
  console.log(is_valid_PIN("`234")); // -> False
  console.log(is_valid_PIN("5678")); // -> True
  console.log(is_valid_PIN("5p04")) //-> False
  console.log(is_valid_PIN("23;4"));// -> False
  console.log(is_valid_PIN("123456"));// -> True
  console.log(is_valid_PIN("234/")); //-> False
  