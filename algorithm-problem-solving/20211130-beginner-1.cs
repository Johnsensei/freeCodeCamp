using System;
using static System.Math;

class Program {
  public static void Main(string[] args){
    // Console.WriteLine(spinningRings(2, 3))); // 5
    // Console.WriteLine(spinningRings(3, 2))); // 2
    // Console.WriteLine(spinningRings(1, 1))); // 1
    // Console.WriteLine(spinningRings(2, 2))); // 3
    // Console.WriteLine(spinningRings(3, 3))); // 2
    // Console.WriteLine(spinningRings(18, 12))); // 16
    // Console.WriteLine(spinningRings(6, 11))); // 13
    // Console.WriteLine(spinningRings(11, 2))); // 12
    // Console.WriteLine(spinningRings(21, 25))); // 11
    // Console.WriteLine(spinningRings(20, 11))); // 33

  }
  // longRectSide = max(x,y)
  // 
  public static bool spinningRings(int a, int b){
    var pointerA = 0, pointerB = 0;
    var count = 0;

    while (pointerA != pointerB){
      // step decrement pointer A increment pointer B
      pointerA--;
      pointerB++;
      // mod pointer A & pointer B
    //   (pointerA + (a+1) % (a+1)); 
      // increase count by 1
      count++;
    }
    
    return count;
  }
}

/**
i o
0 0 | 0
2 1 | 1
1 2 | 2
0 3 | 3 
2 0 | 4
1 1 | 5

i o
0 0 | 0
3 1 | 1
2 2 | 2
1 0 | 3 
0 1 | 4
**/