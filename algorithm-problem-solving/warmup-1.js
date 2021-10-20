function product_except_i(arr){

var product = 1;
var index = 0;
var newArray = [];

while(index < arr.length){

  for (let i = 0; i < arr.length; i++){
    if (i !== index){
      product = product * arr[i];
      
    }
  }

  newArray.push(product);
  product = 1;
  index++;

  }

  return newArray;

}

let result = product_except_i([3, 2, 1, -10]);
console.log(result);