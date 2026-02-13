// See https://aka.ms/new-console-template for more information
using System.Runtime.InteropServices;
        //Enums
        enum Status{
            Pending,
                Approved,
                Rejected
        }

class Program
{
    static void Main()
    {   
        //variable defination
        int age = 21;
        string name = "Swaroop";

        //Array Defination
        int[] numbers = new int[3];
        numbers[0] = 1;
        numbers[1] = 2;
        numbers[2] = 3;

        //Var, Dynamic
        var num = 89;
        dynamic x = 20;

        //Nullable Value defination
        int? o = null;

        
        Console.WriteLine("Hello, I am " + name + ". I am a Student. My Age is " + age);

        string abc = name.Replace("a", "x");
        Console.WriteLine(abc);
    }
}
