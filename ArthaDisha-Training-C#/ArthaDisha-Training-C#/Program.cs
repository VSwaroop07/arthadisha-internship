// See https://aka.ms/new-console-template for more information
using System.Runtime.InteropServices;
using ArthaDisha_Training_C_;
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

        //classes
        Task2 T1 = new Task2();
                   
        Console.WriteLine("Hello, I am " + name + ". I am a Student. My Age is " + age);

        string abc = name.Replace("a", "x");
        Console.WriteLine(abc);

        //Inheritance
        Dog D = new Dog();
        D.Bark();
        D.Eat();

        //Polymorphism
        int a = 10;
        int b = 20;
        double c = 30;
        double d = 50;
        Calculator cs = new Calculator();
        Console.WriteLine(cs.Add(a, b));
        Console.WriteLine(cs.Add(c, d));

        


}
}
