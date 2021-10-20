var newArray = [];

function steamrollArray(arr) {
  
  for (var i = 0; i < arr.length; i++){
    console.log("i: ");
    console.log(arr[i]);
    console.log(Array.isArray(arr[i]));
    
  if(Array.isArray(arr[i])){
    steamrollArray(arr[i]);
    console.log("newArray: ");
    console.log(newArray);
  } else{
    newArray.push(arr[i]);
    console.log("newArray: ");
    console.log(newArray);
    }
  }
  return newArray;

}

console.log(steamrollArray([1, {}, [3, [[4]]]]));