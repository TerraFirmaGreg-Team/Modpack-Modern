using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide
{
    public static class Util
    {
        /// <summary>
        /// Removes the ModID from a string, assuming <paramref name="input"/> is a minecraft internal item/block/fluid name, IE: minecraft:stone would return just "stone", gtceu:granite_redstone_ore would return "granite_redstone_ore"
        /// </summary>
        public static string RemoveModID(string input)
        {
            return input.Substring(input.IndexOf(':') + 1);
        }

        public static string Dump(this StringBuilder stringBuilder)
        {
            var result = stringBuilder.ToString();
            stringBuilder.Clear();
            return result;
        }

        public static bool TryRemoveStartingSubstring(string input, string substring, out string output)
        {
            if(input.StartsWith(substring))
            {
                output = input.Substring(substring.Length + 1);
                return true;
            }
            output = "";
            return false;
        }

        public static bool TryRemoveLastSubstring(string input, string substring, out string output)
        {
            if(input.EndsWith(substring))
            {
                output = input.Substring(0, input.Length - substring.Length - 1);
                return true;
            }
            output = "";
            return false;
        }
    }
}
