/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var canMakeArithmeticProgression = function(arr) {

    let sortedArray = (arr.sort((a,b) => a - b));
    let tempNum = Math.min();
    // console.log(sortedArray);
    for (let i = 0; i < sortedArray.length - 1; i++){
        let diff = sortedArray[i] - sortedArray[i + 1];
        if(i == 0){
            tempNum = diff;
        }
        // console.log({tempNum, diff});
        if(tempNum != diff){
            return false;
           }
        
    }
    
    return true
    
};