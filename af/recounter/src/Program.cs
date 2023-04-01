using System.Threading;
using System;

namespace MyApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Print("-------------------------------------------------------------------------");
            Print("Welcome to the first official beta of ", "");
            Console.ForegroundColor = ConsoleColor.Yellow;
            Print("RECOUNTER", "");
            Console.ResetColor();
            Print(".");
            Print("After 4 years in development, hopefully it will have been worth the wait.");
            Print("-------------------------------------------------------------------------");

            PressAnyKey();

            AnimateLoading(10);

            LineByLine(@"
   █▀▀█ █▀▀█ █▀▀█ ▀▀█▀▀ █     
   █▄▄█ █▀▀▀ █▀▀▄   █   █     
   █  █ █    █  █ ▄▄█▄▄ █▄▄   
                              ▄
  █▀▀▀ ▄▀▀▀▄  ▄▀▀▀▄ █    ▄▀▀▀ ▀
  █▀▀▀ █ █ █  █ █ █ █    ▀▀▀▄ 
  █    ▀▄▄▄▀  ▀▄▄▄▀ █▄▄▄ ▄▄▄▀ 
                              
        ▀▀▀█▀▀▀▀▀█            
           ▀▄▄▄▄▄▀           ", "\n\n");

            PressAnyKey("exit");
        }

        static void LineByLine(string s, string end)
        {
            string[] lines = s.Split('\n');

            foreach (var line in lines)
            {
                Print(line);
                Thread.Sleep(250);
            }

            Print(end, "");
        }

        static void Print(string s, string end = "\n") => Console.Write(s + end);

        static void PressAnyKey(string action = "continue")
        {
            Print($"Press any key to {action}...");
            Console.ReadKey();
            Console.Clear();
        }

        static void AnimateLoading(int seconds)
        {
            string animation = @"─\|/";

            for (int i = 0; i < seconds * 10; i++) {
                Print("\rLoading..." + animation[i % animation.Length], "");
                Thread.Sleep(100);
            }

            Console.Clear();
        }
    }
}