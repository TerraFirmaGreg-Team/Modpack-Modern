using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    /// <summary>
    /// A Disposable class used to temporarily set the console's foreground color, once the class is out of scope and disposed, the console's foreground color is set back to its original color.
    /// </summary>
    internal class ConsoleForegroundColorScope : IDisposable
    {
        private ConsoleColor _originalColor;

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="color">The color to use for the text</param>
        public ConsoleForegroundColorScope(ConsoleColor color)
        {
            _originalColor = Console.ForegroundColor;
            Console.ForegroundColor = color;
        }

        /// <summary>
        /// Dispose Implementation, Sets the foreground color back to its old when the class was instantiated.
        /// </summary>
        public void Dispose()
        {
            Console.ForegroundColor = _originalColor;
        }
    }

    /// <summary>
    /// A Disposable class used to temporarily set the console's background color, once the class is out of scope and disposed, the console's background color is set back to its original color.
    /// </summary>
    internal class ConsoleBackgroundColorScope : IDisposable
    {
        private ConsoleColor _originalColor;

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="color">The color to use for the background</param>
        public ConsoleBackgroundColorScope(ConsoleColor color)
        {
            _originalColor = Console.BackgroundColor;
            Console.BackgroundColor = color;
        }

        /// <summary>
        /// Dispose Implementation, Sets the background color back to its old when the class was instantiated.
        /// </summary>
        public void Dispose()
        {
            Console.BackgroundColor = _originalColor;
        }
    }
}
