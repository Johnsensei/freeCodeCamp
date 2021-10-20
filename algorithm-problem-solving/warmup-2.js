function stringy (size) {

var str = "";
var bool = true;


  while (size > 0) {
  
    let i = bool ? 1 : 0;

    str = str + i.toString();

    bool = !bool;

    size--;

  }

  return str;

}

console.log(stringy(9));