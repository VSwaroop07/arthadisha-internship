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
        int[] arr = new int[3];
        arr[0] = 1;
        arr[1] = 2;
        arr[2] = 3;

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

        //List (DynamicArray)
        List<int> listt = new List<int>();
        listt.Add(10);
        listt.Add(20);

        //Dictionary(HashMap)
        Dictionary<int, string> students = new Dictionary<int, string>();

        students.Add(1, "Swaroop");
        students.Add(2, "Ved");

        Console.WriteLine(students[1]);


        //HashSet Only Unique Values
        HashSet<int> numbers = new HashSet<int>();
        numbers.Add(1);
        numbers.Add(1); // No Duplicates Allowed.
        

        //Queue FIFO
        Queue<string> queue = new Queue<string>();

        queue.Enqueue("Task1");
        queue.Enqueue("Task2");

        queue.Dequeue(); // removes Task1

        //Stack LIFO
        Stack<string> stack = new Stack<string>();

        stack.Push("Page1");
        stack.Push("Page2");

        stack.Pop(); // removes Page2

    }
}
