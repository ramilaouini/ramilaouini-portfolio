using System;
using System.Diagnostics;
using System.IO;
using System.Threading;

class Program
{
    static void Main()
    {
        Console.Title = "Rami Laouini Portfolio - Dev Server";
        Console.ForegroundColor = ConsoleColor.Cyan;
        Console.WriteLine("\n ============================================");
        Console.WriteLine("   Rami Laouini Portfolio - Starting...");
        Console.WriteLine(" ============================================\n");
        Console.ForegroundColor = ConsoleColor.Gray;
        Console.WriteLine(" Starting the development server...");
        Console.WriteLine(" Your portfolio will open in the browser shortly.\n");
        Console.WriteLine(" Press Ctrl+C in this window to stop the server.");
        Console.WriteLine(" ============================================\n");

        string currentDir = AppDomain.CurrentDomain.BaseDirectory;

        // Start a thread to open the browser after a delay
        Thread browserThread = new Thread(() =>
        {
            Thread.Sleep(3000);
            try
            {
                Process.Start(new ProcessStartInfo
                {
                    FileName = "http://localhost:3000",
                    UseShellExecute = true
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine("Failed to open browser: " + ex.Message);
            }
        });
        browserThread.Start();

        // Start npm run dev
        ProcessStartInfo npmInfo = new ProcessStartInfo();
        npmInfo.FileName = "cmd.exe";
        npmInfo.Arguments = "/c npm run dev";
        npmInfo.WorkingDirectory = currentDir;
        npmInfo.UseShellExecute = false; // Run inside the same console window!

        try
        {
            using (Process npmProcess = Process.Start(npmInfo))
            {
                npmProcess.WaitForExit();
            }
        }
        catch (Exception ex)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine("Error launching npm: " + ex.Message);
            Console.ReadLine();
        }
    }
}
