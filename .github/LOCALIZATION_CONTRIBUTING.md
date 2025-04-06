# Localization Contributions to TerraFirmaGreg-Modern

To contribute to Localization you'll need to know how to Contribute in general, please go to [CONTRIBUTING](CONTRIBUTING.md)

Language files located under ``minecraft/kubejs/assets/MOD_ID/lang`` cannot be modified, if you modify these files you WILL loose your contributions when the mod gets ready for release again.

Instead, you'll want to head towards ``minecraft/tools/LanguageMerger/LanguageFiles``

The LanguageMerger is a Localization Tool used to Merge multiple JSON files into a single output, which is then loaded in Minecraft.

Their folder structure is split into three layers.

* MODID: The ID of the mod, ie: tfc for TerraFirmaCraft
  * LOCALE: The target Locale to write for, ie: en_us for American English, ru_ru for Russian
    * JSON Files: All the files located in the Locale folder will be merged into a single JSON file for the specified Locale.

For example, the files under ``LanguageFiles/tfc/en_us`` are the localization overrides for TerraFirmaCraft in the English Language

## Adding new Localizations

1. Inside the LanguageMerger's Language Files, open the folder of the mod you want to Localize.
    * If the mod is not present, create a new folder with the mod's id's name.
2. Open the Folder for your locale.
    * If your desired locale does not exist, create it (ie: zh_cn).
3. Open the JSON file related to the *type of thing* you're localizing.
    * You can know the *type of thing* by looking at the first word of the Localization Token.
    * IE: ``items.json`` for Items, ``blocks.json`` for Blocks
    * If no JSON file exists, create it.
4. Fill the Localization Keys using JSON

## Running the Merger

* To run the merger, go to ``minecraft/tools`` and run the LanguageMerger shortcut.

## FAQ:

### Q: I dont have a Windows Machine
A: Assuming you have DotNet installed, you can use the dotnet command to execute the main .dll that contains the LanguageMerger.

Open your Terminal and type the command ``dotnet LanguageMerger/bin/Debug/net8.0/LanguageMerger.dll``

### Q: I have other questions
A: You can ask in the TerraFirmaGreg discord server's forum post related to the [1.20 Modpack Contribution Megathread](https://discord.com/channels/400913133620822016/1331744604701069393). Ask there or ping @nebby1999