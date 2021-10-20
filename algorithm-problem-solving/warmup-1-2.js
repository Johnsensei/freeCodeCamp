function product_except_i(arr){

var product = 1;
var newArray = [];

for (let i = 0; i < arr.length; i++){
  product = product * arr[i];
}

for (let j = 0; j < arr.length; j++){
  newArray.push(product/arr[j]);
}

return newArray;

}

let result = product_except_i([3, 2, 1, -10]);
console.log(result);