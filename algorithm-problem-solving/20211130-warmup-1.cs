using System;

class Program {
  public static void Main(string[] args) {
    Console.WriteLine(isNarcissisticNumber(201));
    Console.WriteLine(isNarcissisticNumber(259));
    Console.WriteLine(isNarcissisticNumber(4210818));
  }
  public static bool isNarcissisticNumber(int n) {
    var temp = n.ToString();
    //Length of the number
    var digitsLength = temp.Length;
    var sum = 0;
    var x = n;
    var resultSum = 0;
    //iterate
    for(var i = 0; i < digitsLength; i++){
      // sum = 3
      // x = 153
      sum = x%10; //1st iteration sum = 3
       Console.WriteLine("1:"+resultSum);
      resultSum = resultSum + (int) Math.Pow(sum, digitsLength);
       Console.WriteLine("2:"+resultSum);
      x /= 10;
    }
    Console.WriteLine(resultSum);
    return n == resultSum;
  }
}