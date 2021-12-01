using System;
using static System.Math;

class Program {
  public static void Main(string[] args){
    Console.WriteLine(fitIn(3,1,4,2));
    Console.WriteLine(fitIn(4,1,5,3));
    Console.WriteLine(fitIn(2,1,4,3));
    Console.WriteLine(fitIn(41,49,59,88));
    Console.WriteLine(fitIn(48,22,97,53));
    Console.WriteLine(fitIn(8,21,59,27));
  }
  // longRectSide = max(x,y)
  // 
  public static bool fitIn(int a, int b, int x, int y){
    int longestSide = Math.Max(a, b);
    if (longestSide > Math.Min(x,y)) return false;

    if (a + b > Math.Max(x,y)) return false;

    return true;
  }
}