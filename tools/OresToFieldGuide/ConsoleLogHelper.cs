using System.Diagnostics;

namespace OresToFieldGuide
{
    public static class ConsoleLogHelper
    {
        public static void Write(string text, LogLevel logLevel, bool formatText = false)
        {
            using (new ConsoleForegroundColorScope(GetConsoleColorFromLogLevel(logLevel)))
            {
                Console.Write(formatText ? FormatText(text, logLevel) : text);
            }
        }

        public static void WriteLine(string text, LogLevel logLevel)
        {
            using (new ConsoleForegroundColorScope(GetConsoleColorFromLogLevel(logLevel)))
            {
                Console.WriteLine(FormatText(text, logLevel));
            }
        }

        private static ConsoleColor GetConsoleColorFromLogLevel(LogLevel logLevel)
        {
            switch (logLevel)
            {
                default:
                case LogLevel.Info: return ConsoleColor.White;
                case LogLevel.Message: return ConsoleColor.Cyan;
                case LogLevel.Debug: return ConsoleColor.Gray;
                case LogLevel.Warning: return ConsoleColor.Yellow;
                case LogLevel.Error: return ConsoleColor.Red;
                case LogLevel.Fatal: return ConsoleColor.DarkRed;
            }
        }

        private static string FormatText(string text, LogLevel logLevel)
        {
            switch(logLevel)
            {
                default:
                case LogLevel.Info: return $"[Info:] {text}";
                case LogLevel.Message: return $"[Message:] {text}";
                case LogLevel.Debug: return $"[Debug:] {text}";
                case LogLevel.Warning: return $"[Warning:] {text}";
                case LogLevel.Error: return $"[Error:] {text}";
                case LogLevel.Fatal: return $"[F A T A L :] {text}";
            }
        }
    }

    public enum LogLevel
    {
        Info,
        Message,
        Debug,
        Warning,
        Error,
        Fatal
    }
}