function checkCashRegister(price, cash, cid) {

  let changeTotal = Math.round((cash - price) * 100)/100;
  let drawerTotal = 0;
  let result = {
    status: "",
    change: []
  }

//Looks like it doesn't matter if changeTotal == 0 in the test cases.

//Calculate the total in the drawer.
  for (let i = 0; i < cid.length; i++){
    drawerTotal += cid[i][1];
    drawerTotal = Math.round(drawerTotal * 100) / 100;
  }

//Check the different possible cases.
  switch (true){
    case (changeTotal < drawerTotal):
      result.status = "OPEN";
      break;

    case (changeTotal > drawerTotal):
      result.status = "INSUFFICIENT_FUNDS";
      return result;
    
    case (changeTotal == drawerTotal):
      result.status = "CLOSED";
      result.change = cid;
      break;

    default:
      result.status = "No cases found.";
  }

//Define the denominations of money.
  let denominations =[["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.10], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];

//Loop decrementally through the denominations, dividing, checking, and updating result.change as we go.
  for (let j = denominations.length - 1; j >= 0; j--){

      let denomString = denominations[j][0];
      let denomNum = denominations[j][1];
      let denomTotal = cid[j][1];
      let division = changeTotal / denomNum;
      let remainder = changeTotal % denomNum;
      let units = 0;

    //Handle not having correct denoms in drawer.
      if((j === 0) && (changeTotal > denomTotal)){
          result.status = "INSUFFICIENT_FUNDS";
          result.change = [];
          return result;
      } else {

      if(remainder === 0){
        //Needs some handling to check denomTotal.
        if(changeTotal > denomTotal){
         continue;
        } else {
          result.change.push([denomString, (division * denomNum)]);
          break;
          }
      }
      else if (division > 1){
        units = Math.trunc(division);
        if((units * denomNum) > denomTotal){
          units = denomTotal / denomNum;
          changeTotal = changeTotal - (units * denomNum);
          changeTotal = Math.round(changeTotal * 100) / 100;
          result.change.push([denomString, (units * denomNum)]);
        }
         else{
        changeTotal = changeTotal - (units * denomNum);
        changeTotal = Math.round(changeTotal * 100) / 100;
        result.change.push([denomString, (units * denomNum)]);}
        }
    }
  }
  return result;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));