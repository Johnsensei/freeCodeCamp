function simpleEncoder(str){
    let splitArray = str.split('');
    let finalArray = [];

    //Build character frequency map.
  
    for (let i = 0; i < splitArray.length; i++){
      if ((splitArray.filter(x => x === splitArray[i]).length) > 1) {
        finalArray.push(']');
      } else {
        finalArray.push('[');
      }
    }
  
    return finalArray.join('');
    
  }
  
  console.log(simpleEncoder("Mubashir")) // ➞ "[[[[[[[["
  console.log(simpleEncoder("Matt")) // ➞ "[[]]"
  console.log(simpleEncoder("eD  aBiT")) // ➞ "[[]][[[["
  