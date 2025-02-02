using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide
{
    /// <summary>
    /// A class that uses a StringBuilder to construct strings using the Patchouli text formatting
    /// </summary>
    public class PatchouliStringBuilder
    {
        public const string EMPTY = "$()";
        public const string FORMATTABLE = "$({0})";
        public const string LINE_BREAK = "$(br)";
        public const string LINE_BREAK_2 = "$(br2)";
        public const string PLAYER_NAME = "$(playername)";
        public const string LIST_FORMAT = "$(li{0})";
        public const string INTERNAL_LINK_FORMAT = "$(l:{0})";
        public const string INTERNAL_ANCHOR_LINK_FORMAT = "$(l:{0}#{1})";
        public const string KEY_FORMAT = "$(k:{0})";
        public const string TOOLTIP_FORMAT = "$(t:{0})";
        public const string COMMAND_FORMAT = "$(c:{0})";
        public PatchouliStringBuilder(StringBuilder internalStringBuilder)
        {
            stringBuilder = internalStringBuilder;
            helperStringBuilder = new StringBuilder();
        }

        public readonly StringBuilder stringBuilder;
        private StringBuilder helperStringBuilder;

        public void Append(string value) => stringBuilder.Append(value);

        public void Append(char value) => stringBuilder.Append(value);

        public void Clear() => stringBuilder.Clear();

        public void LineBreak() => Append(LINE_BREAK);

        public void LineBreak2() => Append(LINE_BREAK_2);

        public void PlayerName() => Append(PLAYER_NAME);

        public void Keybind(string keybindName) => Append(string.Format(KEY_FORMAT, keybindName));

        public void ThingMacro(string value) => Append($"$(thing){value}{EMPTY}");

        public void ItemMacro(string value) => Append($"$(item){value}{EMPTY}");

        public void List(string value, int? nesting = null)
        {
            Append($"{string.Format(LIST_FORMAT, nesting?.ToString() ?? "")}{value}{EMPTY}");
        }

        public void Color(string value, string hexColor = "#000000")
        {
            Append($"{string.Format(FORMATTABLE, hexColor)}{value}{EMPTY}");
        }

        public void Color(string value, MinecraftColorCode colorCode = MinecraftColorCode.Black)
        {
            Append($"{string.Format(FORMATTABLE, Convert.ToString((int)colorCode, 16))}{value}{EMPTY}");
        }

        public void Format(string value, MinecraftFormatFlags formatFlags)
        {
            helperStringBuilder.Clear();
            foreach(MinecraftFormatFlags formatFlag in Enum.GetValues(typeof(MinecraftFormatFlags)))
            {
                if(formatFlags.HasFlag(formatFlag))
                {
                    char formatChar = default;
                    switch(formatFlag)
                    {
                        case MinecraftFormatFlags.Obfuscated: formatChar = 'k'; break;
                        case MinecraftFormatFlags.Bold: formatChar = 'l'; break;
                        case MinecraftFormatFlags.StrikeThrough: formatChar = 'm'; break;
                        case MinecraftFormatFlags.Underline: formatChar = 'n'; break;
                        case MinecraftFormatFlags.Italic: formatChar = 'o'; break;
                    }
                    helperStringBuilder.Append(formatChar);
                }
            }
            Append($"{string.Format(FORMATTABLE, helperStringBuilder)}{value}{EMPTY}");
        }

        public void InternalLink(string value, string entryOrCategoryID, string? anchorName = null, bool keepFormatting = false)
        {
            helperStringBuilder.Clear();
            if(!string.IsNullOrEmpty(anchorName))
            {
                helperStringBuilder.Append(string.Format(INTERNAL_ANCHOR_LINK_FORMAT, entryOrCategoryID, anchorName));
            }
            else
            {
                helperStringBuilder.Append(string.Format(INTERNAL_LINK_FORMAT, entryOrCategoryID));
            }
            Append($"{helperStringBuilder}{value}{(keepFormatting ? "$(/l)" : EMPTY)}");
        }

        public void ExternalLink(string value, string externalLink, bool keepFormatting = false)
        {
            Append($"{string.Format(INTERNAL_LINK_FORMAT, externalLink)}{value}{(keepFormatting ? "$(/l)" : EMPTY)}");
        }

        public void Tooltip(string value, string tooltip, bool keepFormatting = false)
        {
            Append($"{string.Format(TOOLTIP_FORMAT, tooltip)}{value}{(keepFormatting ? "$(/t)" : EMPTY)}");
        }

        public void Command(string value, string command, bool keepFormatting = false)
        {
            Append($"{string.Format(COMMAND_FORMAT, command)}{value}{(keepFormatting ? "$(/c)" : EMPTY)}");
        }

        /// <summary>
        /// Returns the built string by calling the <see cref="ToString"/> method, then clears the internal stringbuilder array
        /// </summary>
        public string Dump()
        {
            return stringBuilder.Dump();
        }

        public override string ToString()
        {
            return stringBuilder.ToString();
        }
    }

    /// <summary>
    /// Represents a hexadecimal minecraft color
    /// </summary>
    public enum MinecraftColorCode
    {
        Black = 0,
        DarkBlue = 1,
        DarkGreen = 2,
        DarkAqua = 3,
        DarkRed = 4,
        DarkPurple = 5,
        Gold = 6,
        Gray = 7,
        DarkGray = 8,
        Blue = 9,
        Green = 10,
        Aqua = 11,
        Red = 12,
        LightPurple = 13,
        Yellow = 14,
        White = 15
    }

    /// <summary>
    /// Represents Minecraft's default formatting types as flags
    /// </summary>
    [Flags]
    public enum MinecraftFormatFlags
    {
        Obfuscated = 1,
        Bold = 2,
        StrikeThrough = 4,
        Underline = 8,
        Italic = 16
    }
}
