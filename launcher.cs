using System;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Threading;
using System.Windows.Forms;

class Program : Form
{
    private RichTextBox logBox;
    private Process npmProcess;

    [STAThread]
    static void Main()
    {
        Application.EnableVisualStyles();
        Application.SetCompatibleTextRenderingDefault(false);
        Application.Run(new Program());
    }

    public Program()
    {
        this.Text = "Rami Laouini Portfolio - Server Console";
        this.Size = new Size(800, 500);
        this.BackColor = Color.Black;
        this.StartPosition = FormStartPosition.CenterScreen;

        try
        {
            this.Icon = Icon.ExtractAssociatedIcon(Application.ExecutablePath);
        }
        catch {}

        // Custom Font
        Font consoleFont = new Font("Consolas", 10, FontStyle.Regular);

        // Text area to act as terminal
        logBox = new RichTextBox();
        logBox.Dock = DockStyle.Fill;
        logBox.BackColor = Color.FromArgb(12, 12, 12);
        logBox.ForeColor = Color.Cyan;
        logBox.Font = consoleFont;
        logBox.ReadOnly = true;
        logBox.BorderStyle = BorderStyle.None;
        this.Controls.Add(logBox);

        this.Load += new EventHandler(OnFormLoad);
        this.FormClosing += new FormClosingEventHandler(OnFormClosing);
    }

    private void AppendLog(string text)
    {
        if (logBox.InvokeRequired)
        {
            logBox.Invoke(new Action<string>(AppendLog), text);
            return;
        }
        logBox.AppendText(text + Environment.NewLine);
        logBox.SelectionStart = logBox.Text.Length;
        logBox.ScrollToCaret();
    }

    private void OnFormLoad(object sender, EventArgs e)
    {
        AppendLog(" ============================================");
        AppendLog("   Rami Laouini Portfolio - Starting...");
        AppendLog(" ============================================");
        AppendLog("");
        AppendLog(" Starting Next.js development server...");
        AppendLog(" Your browser will open shortly at http://localhost:3000");
        AppendLog(" Close this window to stop the server.");
        AppendLog("");

        string currentDir = AppDomain.CurrentDomain.BaseDirectory;

        // Thread to open browser after delay
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
                AppendLog("Failed to open browser: " + ex.Message);
            }
        });
        browserThread.Start();

        // Start npm run dev in background and redirect output
        Thread serverThread = new Thread(() =>
        {
            try
            {
                ProcessStartInfo npmInfo = new ProcessStartInfo();
                npmInfo.FileName = "cmd.exe";
                npmInfo.Arguments = "/c npm run dev";
                npmInfo.WorkingDirectory = currentDir;
                npmInfo.UseShellExecute = false;
                npmInfo.CreateNoWindow = true;
                npmInfo.RedirectStandardOutput = true;
                npmInfo.RedirectStandardError = true;

                npmProcess = new Process();
                npmProcess.StartInfo = npmInfo;
                
                npmProcess.OutputDataReceived += (s, ev) => {
                    if (ev.Data != null) AppendLog(ev.Data);
                };
                npmProcess.ErrorDataReceived += (s, ev) => {
                    if (ev.Data != null) AppendLog("ERROR: " + ev.Data);
                };

                npmProcess.Start();
                npmProcess.BeginOutputReadLine();
                npmProcess.BeginErrorReadLine();
                npmProcess.WaitForExit();
            }
            catch (Exception ex)
            {
                AppendLog("Error launching server: " + ex.Message);
            }
        });
        serverThread.Start();
    }

    private void OnFormClosing(object sender, FormClosingEventArgs e)
    {
        // Kill the server process when user closes the window
        try
        {
            if (npmProcess != null && !npmProcess.HasExited)
            {
                // Kill the process tree (since cmd.exe spawns node.exe)
                Process.Start(new ProcessStartInfo
                {
                    FileName = "taskkill",
                    Arguments = "/F /T /PID " + npmProcess.Id,
                    CreateNoWindow = true,
                    UseShellExecute = true
                });
            }
        }
        catch {}
    }
}
