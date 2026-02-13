using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace ArthaDisha_Training_C_
{
    //Constructor
    public class Task2
    {
    public string Name;
    public int Age;
    public Task2()
        {
            Console.WriteLine("Constructor Ran");
        }
    }
    //Inharitance
    class Animal
    {
        public void Eat()
        {
            Console.WriteLine("Eating...");
        }
    }

    class Dog : Animal
    {
        public void Bark()
        {
            Console.WriteLine("Woof!");
        }
    }
    //Polymorphism
    class Calculator
    {
        public int Add(int a, int b) { return a + b; }
        public double Add(double a, double b) { return a + b; }
    }

    //Abstraction
    abstract class Shape
    {
        public abstract double CalculateArea();
    }
    class Circle : Shape
    {
        public double Radius { get; set; }

        public override double CalculateArea()
        {
            return 3.14 * Radius * Radius;
        }
    }

}
