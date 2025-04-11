using System.Text.Json;
using System.Text.Json.Nodes;
using Common;

var mcDir = CommonUtil.GetMinecraftDirectory(Directory.GetCurrentDirectory());
var kjsAssetsDir = CommonUtil.GetKJSAssetsFolder(mcDir);

var input = Path.Combine(mcDir.FullName, "config\\jei\\recipe-category-sort-order.ini");

var outDir = Path.Combine(kjsAssetsDir.FullName, "emi\\category\\properties");

Directory.CreateDirectory(outDir);

int i = 0;
foreach (var line in File.ReadAllLines(input))
{
	if (string.IsNullOrEmpty(line))
		continue;

	var doc = new JsonObject
	{
		[line] = new JsonObject
		{
			["order"] = i++
		}
	};

	File.WriteAllText(Path.Combine(outDir, line.Replace(':', '_')) + ".json", JsonSerializer.Serialize(doc));
}