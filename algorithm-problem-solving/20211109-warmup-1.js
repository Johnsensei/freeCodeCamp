function sortByLength(arr){
    // console.log(arr);
    // arr.sort(function(a, b) {
    //   console.log("A: " + a);
    //   console.log("B: " + b);
    //   return b.length - a.length || a.localeCompare(b);
    // })
  
    arr.sort((a, b) => a.length - b.length)
    return(JSON.stringify(arr, null, '\t'));
  }
  
  
  
  console.log(sortByLength(["a", "ccc", "dddd", "bb"])) // ➞ ["a", "bb", "ccc", "dddd"]
  console.log(sortByLength(["apple", "pie", "shortcake"])) // ➞ ["pie", "apple", "shortcake"]
  console.log(sortByLength(["may", "april", "september", "august"])) // ➞ ["may", "april", "august", "september"]
  console.log(sortByLength([])) // ➞ []
  