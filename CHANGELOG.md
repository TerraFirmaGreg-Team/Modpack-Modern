# Changelog

## [Unreleased]
### Major changes
- Build a rocket and blast off to the moon, a new dimension! You can get started in mid-HV.
- AE2 inscriber presses are now found on the moon instead of being craftable, and making various AE2 components is also significantly cheaper there. @TomPlop & @Pyritie
- Significant ore changes: certus quartz, raw aluminium, ilmenite, and some other mid-lategame materials have been moved from the overworld to the moon. Check your field guide for more information. @TomPlop
- A new system for interstellar item transport, made just for TerraFirmaGreg - new logistical problems to solve and automate. @ofoxsmith
- New bedrock ore veins on the moon! Much better sources of infinite materials than stone dusts. @TomPlop
- New machines to properly automate food, along with proper compatibility between machines and TFC's food system, so you can't turn rotten grains into fresh bread any more. The electric greenhouse now also always outputs fresh food. @ofoxsmith & @Redeix
- New electric refrigerator with different tiers. You can craft the old one into this new one, but please take your food out of it before upgrading otherwise it will be lost! @ofoxsmith
- Added many new advanced food items including freeze-dried fruit, calorie paste, and meal bags. @Redeix
- Quest updates for all of the above. @TomPlop
### Minor changes
- Balance changes for water wheels and glowstone blocks @Pyritie
- Added straws for the blaze burners so now you can pump liquid fuels into them (#1204) @34y34y34y34y34y34y34y34y34y
- Electric greenhouse now accepts any glass instead of exclusively AE2 quartz glass @Pyritie
- Added an ABS recipe to craft your glowstone, matching the mixer recipe (#1201) @34y34y34y34y34y34y34y34y34y
- Lunchboxes now accept GregTech cells filled with ice (#1200) @Thomasx0
- You can now use casting channels, mold tables, and mechanical pumps on top of a Hellforge (#1183) @Indiiix
- Added a second recipe for water flask sides so it doesn't matter if you craft it top-aligned or bottom-aligned @Pyritie
- More recipes to craft dyes @Pyritie
- Adjusted the textures of the generated raw ore items @Pyritie
- Added recipes for AE2's decoration blocks @Pyritie
- Added warning text to macerators, millstones, and crushing wheels about the no-byproducts-until-HV thing @Pyritie
- Added earlier recipes for 1:1 clay bricks @Pyritie
- Changed pineapple yarn recipe from assembler to wiremill & coiling machine, like the other strings (#1162) @Pyritie
- Lowered durability of wooden tongs @Pyritie
- Streamlined the Metallurgy Age quest chapter a bit @Pyritie
- Mushroom blocks now drop way less mushroom @Pyritie
- Removed gems tag from flint @Pyritie
- Updated texture for aqueous accumulator (#1168) @Redeix
- Kaolin Klayzes now also drop blood lilies @Pyritie
### Bug fixes
- Fixed a mud hut structure that had deprecated zinc ingots @Pyritie
- The electric greenhouse now also allows loose rocks and plants inside, since TFC spawns them on any grass block @Pyritie
- Fixed double ingots not having a temperature (#1165) @Pyritie
- Removed a few recipes that had unobtainable greate-related materials @Pyritie
- Fixed the color of placed zinc ingots and plated blocks to match the material @Pyritie
- Fixed some other steel/colored steel items being extractable in LV @Pyritie
- Fixed polished/cut migmatite recipe conflict (#1153) @JeanRdSz
- Fixed some bugs with the lunchbox (#1200) @Thomasx0

## [0.9.11] - 13.06.2025
### New features
- Added back the vanilla stonecutter @Pyritie
- Added our own recipes for crafting GregTech facades - 3 cast iron plates for 8 facades, or 3 titanium plates for 32 facades (#1145) @BlueBoat29
- Added create conductor recipes (#1144) @JeanRdSz
- Added lunch boxes! They keep your food cool and you can even eat right out of them! @Thomasx0
### Changes
- Added cinnabar to piglin bartering and changed the deep cave enderman loot table to raw gold instead of coal @Pyritie
- Nerfed extraction of latex from logs to encourage tree taps instead @Pyritie
- Adjusted temperature tolerance of latex trees, check the field guide for specifics @Pyritie
### Bug fixes
- Fixed trowel being consumed on use (#1143) @Redeix
- Fixed glass dust dupe with unfinished lamps (#1134) @Pyritie
- Fixed ultimate battery recipe stack size issue (#1149) @Pyritie
- Fixed assembler recipe conflicts with certain wrought iron create items (#1142) @TomPlop & @Pyritie
- Quest fixes (#1119, #1142) @TomPlop
- Fixed recipe conflicts with scaffolding and paintings, and wine glasses and jars (#1141) @JeanRdSz
- Fixed piglin disguise loot table giving the wrong item (#1151) @Redeix
- Fixed create encased large cogwheel drops (#1148) @Taskeren

## [0.9.10] - 05.06.2025
### New features
- Added Trowel tool to randomly place blocks from hotbar (#1106) @Redeix
- Started work on Brazilian Portuguese translations @gifpxto
- Added Aqueous Accumulator machine, basically a rock breaker but for fluids (#1030) @Pyritie
### Changes
- Create Steam Engine now also accepts river water and GregTech steam as valid inputs (#947) @Zeropol
- Added Packer recipe for stick bundling (#1101) @JeanRdSz
- Steam grinder and oven are now cheaper and use more steam-age appropriate materials (#1091) @Pyritie
- Changed HS Greate machines to use blue alloy instead of red steel (#1091) @Pyritie
- Changed HV Cutter to use diamond buzzsaw instead of red steel (#1091) @Pyritie
- Added wine-related recipes to GregTech machines (#1111) @JeanRdS
- Added optional quest for bacon because its JEI recipe isn't clear (#1122) @SpicyNoodle5
- Anthracite now also superheats blaze burners @Pyritie
- Changed LV chem reactor quest to work with any container of rubber instead of just a rubber bucket (#1116) @ofoxsmith
- Added perfect overclock to the electric greenhouse so it scales better with the pyro oven @Pyritie
- Electric greenhouse now accepts logs and leaf blocks inside it, so you can build a little tree if you want @Pyritie
- Increased durability of the blue steel diving suit to match blue steel armor @Pyritie
- Phantom Silk and Polycaprolactam Fabric now count as High Quality Fabric @Pyritie
- Added recipes to turn dirt into grass @Pyritie
- Changed durability of the diving equipment to match the TFC armor, made forging bonuses carry across when crafting @Pyritie
- Added/changed more recipes for metal bars, doors, and trapdoors @Pyritie
### Bug fixes
- Fixed issue where "melts into" tooltips and certain timers on Jade were missing (#1102) @Xikaro
- Improved block ordering logic with AoE mining tools to reduce incorrect cave-ins @voidstar240
- Fixed weird assembler piston recipe (#1092) @Redeix
- Fixed texture clipping on piglin disguise, added loot table so you can pick it back up (#1106) @Redeix
- Fixed assembler recipe conflict with Hoppers and Item Vaults (#1098) @TomPlop
- Fixed assembler recipe conflict with Create Pipes and Fluid Tanks (#1103) @Pyritie
- Fixed some assembly line recipes that had incorrect stack sizes (#1108) @Pyritie
- Fixed being able to dupe materials by crafting tools and then recycling them (#1100) @Pyritie
- Fixed kaolin clay duping (#1099) @SpicyNoodle5
- Fixed TFC sugar recipes so they can now use any sugar (#1099) @SpicyNoodle5
- Add the create toolbox to the list of unsortable inventories, fixing a duping exploit (#1120) @esotericist
- Fixed assembler recipe for item silos @Pyritie

## [0.9.9] - 30.05.2025
### Changes
- Added and changed many mods for optimization, please report any problems on github. @Xikaro
- Disabled ability to sort items in the crucible and vessels, which let you stack things that shouldn't be stacked. (#1045) @esotericist
- Other TFC waters also work for bulk washing now. (#1051) @Pyritie
- Added machine recipes for compost and humus. (#1049) @Pyritie
- You can now also use soybean oil to make pizza dough via machines. (#1056) @Pyritie
- Create Deco's metal bars are now breakable with a pickaxe. (#1053) @Pyritie
- Aircraft engine recipes now use the correct tier cables. @Pyritie
- Added Piglin disguise item to prevent Piglin aggro. (#1058) @Redeix
- Fixed recipes involving dyeing terracotta. (#1075) @Pyritie
- Fixed pot recipe for dye liquids. (#1076) @Pyritie
- Fixed anthracite not spawning in the Beneath. (#1063) @Pyritie
- Buffed durability of construction wands. @Pyritie
- Reorganized boat quests, added horse and akistor carts quests. (#1077) @deneth-weerasinghe
- Added missing tin double ingot to plate helve hammer recipe. (#1078) @oogabooga-dev
- Fixed sprinklers, added support for connecting GregTech pipes to hydroponic planters (#1033) @Thomasx0
- Added some more medicinal plants. @Pyritie
- Added lathe recipes to strip logs. @Pyritie
- Iron flask now accepts any cloth, red steel flask now requires phantom silk. @Pyritie
- Make food jars and firmalife jars stack to 16. (#1081) @Zeropol
- Fixed medicine not working with cheats disabled. (#1084) @Redeix
- Added recipes for strings to the coiling machine (#1083) @Pyritie
- Fixed assembler recipe for brass funnel. @TomPlop

## [0.9.8] - 19.05.2025
### Changes
- Changed to a different mod to claim/forceload chunks - use Ctrl+M to open the interface. @Xikaro
- Fixed a bug where sometimes, materials would fail to load and a lot of recipes would break. (#1028) @Pyritie
- Changes to entity loot tables, so now butchery knife gives more meat drops but nothing else. (#1035) @Pyritie 
- Remove various overlapping recipe conflicts. @Oosyrag
- Improved crafting of GregTech credits, if servers want to use them as currency. (#944) @Pyritie
- Fixed some missing behaviours with damascus steel tools from bastion chests. (#1010) @Pyritie 
- Increased the frequency of some overworld structures. @Pyritie
- Decreased the frequency of caves/canyons so the world looks less 'scarred'. @Pyritie
- Added mixer recipe for Sugar Water. @Pyritie
- Shroomlights are no longer easily obtainable for permanent lighting pre-LV. @Pyritie
- Made pressure plates cheaper. @Pyritie
- Added chisel recipes for stone walls. @Pyritie
- Reduced electricity cost of electric greenhouse. @Pyritie
- Added vacuumizer recipe for dandelions and goldenrod to latex. @Pyritie
- Added circuit numbers for the different mixer salt water recipes. @Pyritie
- More quest tweaks and fixes.

## [0.9.7] - 17.05.2025
### Changes
- Fixed Crash Sprinkler.
- Undated the carryon config file to include the arborafirmacraft chests in the whitelist. @NobleWasTaken

## [0.9.6] - 16.05.2025
### Changes
- Changed wooden tongs recipe from shapeless to shaped. @Oosyrag
- Added crafting recipe for tin jar lids. @Oosyrag
- Rebalanced the Large Boilers so now they consume WAY less fuel, so lava is no longer basically mandatory - see #977 for the full math. @Oosyrag
- Greenhouse ports and sprinklers now work directly with gregtech pipes. @Thomasx0
- Added recipes for stainless steel greenhouse parts. @Pyritie
- More field guide updates. @Oosyrag
- Added assembler recipes for more Create and Greate items. @Pyritie
- Blaze burners, alternators, steam engines, and steam multiblock inputs/outputs are now much cheaper. @Pyritie
- Firmaciv sails can now use any fabric instead of just wool. @Pyritie
- Fixed some recycling recipes to prevent dupes. @Pyritie
- Added a circuit to the assembler hopper recipe. @Pyritie
- Fixed chiseling non-tfc blocks so it returns two slabs instead of one. @Pyritie
- Fixed being able to use tree taps on placed logs. @Pyritie
- Fixed tooltips on the uncolored small vessel and AFC wooden supports. @Pyritie
- Fixed assembler clay recipes so they output the correct amount. @Pyritie
- Quest fixes/tweaks. @Pyritie
- Added aluminium, stainless steel, and titanium millstones. @Pyritie
- Fixed fishing nets behavior. @Redeix
- Added item to summon armor stands with arms. @Redeix
- Added recipes for extracting/ forming magma blocks. @Redeix
- Nerfed steel support recipe output. @Redeix
- Fixed assembler recipe conflict with regular vanilla bricks and Create Deco's colored bricks. @TomPlop
- Fixed not being able to use a charcoal forge with a basin. @Pyritie
- Removed programmed circuit from the salt water electrolysis recipe. @SverhRazum-Nah
- Added wrought iron alternatives for early game cast iron recipes, like wooden crates. @ZackH01

## [0.9.5] - 08.05.2025
### Changes
- Disabled pollution
- Fixed a progression softlock involving rubber (AirRice)
- Fixed hide duping recipes. (Redeix)
- Added quest book and field guide instances for fishing nets. (Redeix)
- Fixed rebar support recipe crash. (Redeix)
- Fixed red steel flask dupe. (Redeix)
- Fixed red alloy recipe inconsistency. (Redeix)
- Fixed blue steel backpack block lang. (Redeix)
- Added max vessel fluid warning to small vessels. (Redeix)
- Improved quest proofreading (algol_rithm)
- Fixed some incorrect quest dependencies
- Added a workaround for dyeing wattle and daub (Pyritie)
- Fixed ice shaving duping recipe (Pyritie)
- Added clay block <-> clay ball crafting table recipes (Pyritie)

## [0.9.4] - 06.05.2025
### Changes
- Fixed tags bug.

## [0.9.3] - 05.05.2025
- [!WARNING] 0.9 is now out of alpha and into beta! If you're upgrading from 0.7, we put together a guide [here](https://github.com/TerraFirmaGreg-Team/Modpack-Modern/wiki/%5BEN%5D-Upgrading-from-0.7-to-0.9).
### Changes
- Removed Caelum + TFC Caelum because they were causing crashes for MacOS and other graphics issues, but you can re-add them if you'd like
- Added recipe to separate fertilizer into pure sources, and mix them back together. (Redeix)
- Added recipes to sew hides together and cut them apart. (Redeix)
- Ingot piles now have improved textures for TFC metals (AirRice)
- Fixed issue where red alloy and tin alloy had missing textures in casting tables (AirRice)
- Improvements to MV quests (TomPlop)
- Changed the process for creating rubber to require latex, added a way to get latex even during winter (AirRice)
- Fixed large boilers from being extremely explodey
- Greate shafts, large cogs, and belts are now significantly cheaper, and shaft stress capacity has been doubled
- Update CarryOn so now it works with all TFC chests
- Overhauled the TFG Ores section in the field guide, and it's now 100% accurate again!
- The other AE2 wireless terminals are now craftable in EV instead of LuV
- AE2 MEGA things are also now available in IV
- Added recycling recipes for ceramic molds, large vessels, casting channels and tables
- Fixed issue where the speed buff from Aged Rum was being removed
- Fixed speed of bulk washing
- Lowered SU requirements of some more Create machines
- Reduced how many sticks were being placed in the nether
- Fixed new supports to work correctly
- Changed recipe of create filters so they're available earlier
- Fixed some duping recipes
- Clay and (plain) stone dust decomposition now requires HV
- Fixed a rare race condition when creating material-based recipes
- Fixed cast iron tongs not being craftable
- Added a gas collector recipe to the beneath

## [0.9.2] - 27.04.2025
### Changes
- Fixed mining machines not working.
- Fixed kaolin clay not generating in the overworld.
- Updated field guide for 0.9 (oosyrag).
- Added speed boost to nanosuit leggings (SverhRazum-Nah).
- Updated max capacity of small vessel and crucible to be multiples of 144 (oosyrag).
- Added support for more armor trims from gems (Redeix).
- Added fishing nets (Redeix).
- Added more cloth alternatives (Redeix).
- Fixed milk curdling and olive oil recipes to be consistent with barrels/vats (TomPlop).
- Added universal circuits (from monifactory) for easier ae2 pattern upgrading (TomPlop).
- Added brine and vinegar recipes to GT machines (TomPlop).
- Increased Astikor Carts item size limit (Redeix).
- Changed some quests based on feedback.
- Added recipes for digger helmet upgrades.
- You can no longer use a blowpipe to hold hot ingots, but tongs have been buffed 6x instead.
- You can no longer pick up regular ice with a saw to prevent moving around water sources, but you can craft packed ice instead if you need to cool off.
- Added a temporary fix for the ULS-MV millstones/crushing wheels voiding poor raw ores.
- Added a temporary fix for the mechanical mixer needing a programmed circuit item to work (craft them out of sticks).
- Fixed a duping exploit involving metal plated blocks.
- Fixed some recipes that were using the wrong wrench tag.
- Added an earlier way to get paracetamol (cures gregtech hazards).
- Removed recipes for firmalife sprinklers. Use GT pipes instead, those count as greenhouse walls now, and put your sprinklers on drums/fluid tanks/barrels.
- Buffed the mixer glowstone recipe.
- Nerfed kapok growth speed a little.
- Added recipes to turn more things into biomass.
- Added recipe to turn saplings into sticks.
- Changed mud brick recipes to not require mortar any more.
- Fixed not being able to pick up spring water or put it in a mixing bowl.
- Changed rotation speed controller recipe.
- Now you can put many more things on tool racks.
- Buffed some nether mob loot tables.
- Buffed piglin bartering table.
- Buffed string from cobwebs, TFC shears now work on them too.
- The overworld graphite vein now spawns in every stone type.
- Granitic/basaltic mineral sand is now usable for iron in primitive age.
- Fixed butchery knives missing anvil recipes.
- Added recipes to craft GT's marble blocks.
- Added assembler recipes for create deco's bricks, and made vanilla bricks consistent (4 instead of 1 per craft).
- Doubled the amount of train tracks you get per craft.
- Fixed red alloy/tin alloy double ingots not needing to be heated for anvil recipes.
- Long distance item/fluid pipes now need HV.
- Kaolin patches now spawn less often in lush cave biomes.
- Hid the xp bar because xp isn't used for anything.
- Fixed visual workbench not working with tfc workbenches.
- Removed adjustable chain gearshift and half of create:connected because they let you get around greate's restrictions.
- Added recipe for vanilla campfire for people who like smoke particles.
- Fixed AoE tools in bastion chests not having the AoE property.
- Fixed various decorative glass block/pane recipes to be consistent.
- Bricks and flagstones now use a cutter instead of an assembler.
- Slimeballs now smelt into glue.
- Removed some more duplicate recipes for vanilla items.
- Hid some more things in JEI that aren't craftable.
- Added fishing nets in many tiers for scooping fishies.
- Added nylon string and fabric.
- Added phantom string and fabric, created from phantom membranes--Replacing them in recipes
- Added support for armor trims, fixed some broken textures, added a bunch of materials, and made a helper function.
- Added handcart recipe.
- Allowed more blocks to be used as oven, forge, and bloomery insulation.
- Fixed lang error with treated wood planks recipe.
- Fixed bug with mmc package.
- Added recipe to separate fertilizer into pure sources, and mix them back together.
- Added recipes to sew hides together and cut them apart.

## [0.9.1] - 18.04.2025
### Changes
- Manifest fix.

## [0.9.0] - 18.04.2025
### Warning for upgrading your world
- This is a major update that changes many things! 
- It is safest to create a new instance and copy your world across, instead of trying to update your world in-place. 
- Check that everything works before permanently changing over to the new version!
- GregTech has removed its kinetic machines, so they will disappear when upgrading. Please recycle your machines first!
- Several ores and ingots have changed. After upgrading, they will have a "REPLACE ME" texture. Put them in a crafting grid to change to the new version.
- Create mechanisms will stop working and will need to be replaced with "Greate" equivalents. This means that if you have any boilers running off of create THEY MAY EXPLODE!
- Tree tap has been replaced you will need to craft your old taps into the new ones.
- Gregicality Rocketry has been removed and will be replaced with Ad Astra soon. Please recycle whatever you can and make sure you are in the overworld.
### Changes
- Latest version of GregTech! Comes with new textures and a few new features, many bug fixes and much more stability.
- Early game overhaul! You start getting into some automation much earlier and gradually unlock more as you progress, instead of having it all dumped on you after steel.
- New dimension! The Beneath, basically a TFG-ified version of the nether. Stand on overworld bedrock for a bit to start exploring!
- Quest rewrite! The first few quest chapters have been totally remade from the ground up to be more readable, have fewer breaking dependencies, and reflect actual progression. Most of the optional but useful content has been put into its own dedicated section.
- The minimum amount of lava source blocks to be considered infinite has been increased from 1 to 2000. There's many lava lakes underground, and trains are more accessible.
- Create has changed completely with the addition of "Greate", "VintageImprovements", and "Horse Power".
- New structures have been added to the overworld. Some with loot!
- More cave supports have been added. Including stone, concrete, and steel supports. Higher tier supports can hold a larger area of blocks.
- Medicine had been added and can apply some helpful potion effects or be applied to arrows.
- Wax alternatives have been added, including paraffin wax and tree rosin.
- Planes! Snake-free.
- Many mods have been updated and include new features. Check out the mods list!
- Many other bug fixes, QoL features, mod integration, and recipes tweaks. too many to list!

## [0.7.19] - 25.01.2025
### Changes
- Added budding crystals for the other gemstone ores (Pyritie).
- Add a Forging Guide to the Field Guide (Nebby1999).
- Fixes wool cloth recipe conflict (CaptainGold1).
- Get small dust from failed pressing (Nebby1999).
- Fixed cassiterite heating "exploit" (CaptainGold1).
- TFC magma as passive boiler heater (SverhRazum-Nah).
- Adds heat values for items with valid heating recipes but no heat values (CaptainGold1).
- Add circuit settings to netherarium/enderarium (Pyritie).
- Fixed colored steel dust centrifuge recipes (Pyritie).
- Automatic Scraping with Sequenced Assembly (Nebby1999).
- Add glowstone as infinite lamp fuel (CaptainGold1).
- Changed LV casing/hull recipes (again) (Pyritie).
- Add seaweed and kelp drying recipes (Metriximor).
- Fix assembler wool recipe conflicts (deneth-weerasinghe).
- Feature: Papermaking Overhaul with Wood (Nebby1999).
- Hanging Sign Metal Dupe fix (AirRice).
- Adjusted LV machines book entry (Pyritie).
- Fix collapsible brick slab blocks (Egogorka).

## [0.7.18] - 19.01.2025
### Changes
- Fix moonlight mod.

## [0.7.17] - 19.01.2025
### Changes
- Added ore index, started work on other TFC info category (Pyritie).
- Changed the AE2 network analyzer to HV instead of IV (Pyritie).
- Fixed a typo in salt water boiling recipe's temperature for small salt pile - 1000 > 100 (8oyNextDoor).
- Fix sprinklers + fix bread and yeast starter recipe conflict (Pyritie).
- Added recipes for create glass, more windows, fixed tinted glass recipe conflict (Pyritie).
- Added missing recipe for nether brick (Pyritie).
- Added armor trims (Pyritie).
- Add blast furnace tips entry (CaptainGold1).
- Allows stick bundles to be used in the coke oven (CaptainGold1).
- Allows all colors of glass to be macerated/hammered to dust (CaptainGold1).
- Add alternate papermaking quests using treated hide (CaptainGold1).
- Fix dupes via recycling firmaciv items (Egogorka).
- Create fluxstone recipes in macerator and forge hammer (KorGgenT).
- Fixes fertilizer recipe and modifies some mixer recipes relating to dirt (CaptainGold1).
- Changed train tracks to be cheaper (Pyritie).
- Create Sails: Recipe Improvements (Nebby1999).
- Moved MV superconductor to early HV instead of late HV (Pyritie).
- Added some Italy and Ukraine translation (MetenBouldry).
- Сreate some rich coal recipes in coke oven and pyro oven (Exzept1on).
- Add blaze burner, fix alternator (Pyritie).
- Added budding crystals for the other gemstone ores (Pyritie).
- Fix casing exploit, change recipes for tfc alloy (Pyritie).

## [0.7.16] - 12.01.2025
### Changes
- Removed links for excel spreadsheet ore gen (Pyritie).
- Fix maintenance hatch recycling recipes too (fluffle).
- Olive oil in machines (Saaghh).
- Fix charcoal in macerator overlap (Pyritie).
- Added greenhouse recipes for tfc plants tag (Saaghh).
- Use 2x annealed copper wires in ZPM mainframe recipe (fluffle).
- Craft recipe for framed chest so it isn't cheaper then the alternatives (Juzrm).
- RU_RU translation for tfc guide book (recently added pages) (8oyNextDoor).
- Based gas multiblocks, more suffering! (Pyritie).
- Creosote treated planks fixes (Pyritie).
- Fixed mixer recipes for red/blue steel (Pyritie).
- Added another recipe for Create's electron tubes (Pyritie).
- Electric cheese, tomato sauce and cream (Saaghh).
- Leather producting using GTM machines (Saaghh).

## [0.7.15] - 08.01.2025
### Changes
- Fixed oilsands, added missing english strings, added indicators for all ores (Pyritie).
- Fixed not being able to make cobble in assembler (Pyritie).
- Added recipe for metal bars (Pyritie).
- Added yeast starter and cocoa powder recipes (Pyritie).
- Added quern recipes for graphite (Pyritie).
- Fixed red alloy crucible recipe (Pyritie).
- Precision mech recipe in assembler (SverhRazum-Nah).
- Fixed TFG things in field guide, added oregen section (Pyritie). <-- Legend Feature.
- Various fixes for 0.7.14 (fluffle).
  - It changes the costs of AE2 covered, dense and smart cables so the 3:1 ratio for fluix cables is reduced to 1:1.
    - Covered cables should not be 3x the price for the same functionality.
    - The 3x cost makes it unnecessarily painful and expensive to run dense cable to where it's needed.
  - It re-enables AE2 cutting knives and adds recipes for them.
    - This allows AE parts like interfaces to be renamed easily and cheaply.
  - It removes the in-world transformation recipe for AE2 fluix crystals.
    - Mixer recipes for fluix crystals are buffed to match in-world transformation recipe costs.
    - Mixer recipe duration is reduced.
    - Note that the create mixing recipe for fluix crystals still remains.
  - It adds self-crafting recipes for all super tanks and chests.
    - This means a tank can be crafted to remove NBT data stuck to it, so it can stack with other tanks again.
  - It adds a circuit (1) to the GTCEu assembler recipe for minecraft:redstone_lamp.
    - This was conflicting with the AE2 smart cable recipes.
- Fix LV recycling recipes to produce basic steel (fluffle).
- Adds early glowstone recipe (Pyritie).
- Added recipes to stop duping of red alloy + steam machines (Pyritie).
- Fix stone dust tag (Pyritie).

## [0.7.14] - 01.10.2024
### Changes
- Fixed a crash when cutting down trees with mushrooms on the trunk.
- Adjusted the FTB backups backup that runs every hour.
- FTB backups removed from serverpack.
### Removed mods
- TFCDesirePaths
### Updated mods
- TFCVesselTooltip 1.0 -> 1.1
- waterflasks 3.0.2. -> 3.0.3
- recipeessentials 3.4 -> 3.6
- noisium 2.0.3 -> 2.3.0
- cc-tweaked 1.111.0 -> 1.113.1
- cloth-config 11.1.118 -> 11.1.136
- curios 5.9.1 -> 5.10.0
- astikorcarts 1.1.7 -> 1.1.8
- TFCAstikorCarts 1.1.8.1 -> 1.1.8.2
- u_team_core 5.1.4.299 -> 5.1.4.312
- treetap 0.3.0 -> 0.4.0

## [0.7.13] - 01.10.2024
### Changes
- Fixed Long Distance Pipes recipe.
- Fixed small shit with saltpeter firtilizer.
- Fixed main menu misspelling.
- Changed quantum_bridge_card recipe.
- Added recipe for refrigerator from tfcea.
- For serverpack onlinemod changed to true by default.
### New Mods
- FTB-Backups 2
- OctoLib
- Polylib
- TFC Electrical Appliances
- UniLib
### Removed mods
- AEInfinityBooster
- Seamless-loading-screen
### Updated mods
- ae2insertexportcard 1.2.1 -> 1.3.0
- AmbientSounds 6.0.1 -> 6.1.1
- appliedenergistics2 15.2.2 -> 15.2.13
- balm 7.2.2 -> 7.3.9
- chat_heads 0.12.2 -> 0.13.3
- corpse 1.0.12 -> 1.0.14
- craftingtweaks 18.2.3 -> 18.2.5
- CraftPresence 2.3.9 -> 2.5.0
- createaddition 1.2.3 -> 1.2.4c
- CreativeCore 2.11.30 -> 2.12.15
- Cucumber 7.0.8 -> 7.0.12
- cupboard 2.6 -> 2.7
- emi 1.1.6 -> 1.1.7
- exposure 1.6.0 -> 1.7.7
- ExtendedAE 1.1.8 -> 1.1.14
- fallingtrees 0.12 -> 0.12.7
- firstperson 2.4.1 -> 2.4.5
- FramedBlocks 9.2.2 -> 9.3.1
- ftb-library 2001.2.2 -> 2001.2.4
- ftb-quests 2001.4.5 -> 2001.4.8
- ImmediatelyFast 1.2.18 -> 1.2.17
- inventoryhud 3.4.18 -> 3.4.26
- ItemPhysicLite 1.6.4 -> 1.6.5
- Jade 11.9.3 -> 11.9.4
- jei 15.3.0.4 -> 15.3.0.8
- Ksyxis 1.3.1 -> 1.3.2
- kubejs 2001.6.5-build.14 -> 2001.6.5-build.7
- letmedespawn 1.2.1 -> 1.3.2b
- lootjs 2.11.0 -> 2.12.0
- modernfix 5.17.0 -> 5.19.4
- moonlight 2.11.31 -> 2.13.2
- merequester 1.1.4 -> 1.1.5
- Not Enough Recipe Book 0.3 -> 0.4.1
- notenoughanimations 1.7.3 -> 1.7.6
- open-parties-and-claims 0.22.2 -> 0.23.2
- packetfixer 1.3.2 -> 1.4.2
- pandalib 0.2.1 -> 0.4.2
- Placebo 8.6.1 -> 8.6.2
- PlayerRevive 2.0.25 -> 2.0.27
- PuzzlesLib 8.1.20 -> 8.1.23
- Xaeros_Minimap 24.1.1 -> 24.4.0
- XaerosWorldMap 1.38.4 -> 1.39.0
- YetAnotherConfigLib 3.4.4 -> 3.5.0

## [0.7.12] - 03.06.2024
### Changes
- Small fixes in quests. (FriendlyCube)
- The version of the Falling Tree's has been rolled back because it sometimes crashes, the developer has been notified.
- Added AE2 quest line. (Friendly Cube) 
- ExtendedAE and Mega Cells recipes have been added and changed. (Friendly Cube)
### Updated mods
- Panda's Falling Tree's  0.12.1 -> 0.12

## [0.7.11] - 03.06.2024
### Updated mods
- Packet Fixer 1.4.0 -> 1.3.2

## [0.7.10] - 03.06.2024
### Changes
- Probably fixed strange shit, when items could dispawn VERY quickly. (1-2mins) (by deleting KryptonReforged as incompat with embeddium)
- Fixed a situation where quests could not be counted immediately after completing the quest conditions. (by deleteing FTBQuestsOptimizer)
- Fixed loom recipe of WoolPotholder from TFC Hot Or Not, which is duplicating with wool recipe.
- Fixed a bug, when TFC Guide Book not working, (yes, its was a bug).
- Updated Quests For Primitive Age. (BabBimmaBome)
### New Mods
- Shimmer
### Updated mods
- GregTech Modern 1.2.0.a -> 1.2.3
- TerraFirmaGreg 0.5.6 -> 0.5.9
- GCYR 0.1.6 -> 0.1.8
- Appliedenergistics2 15.1.1 -> 15.2.2
- CC-Tweaked 1.110.3 -> 1.111.0
- Create Connected 0.7.4 -> 0.8.2
- CreativeCore 2.11.28 -> 2.11.30
- Curios 5.9.0 -> 5.9.1
- EnhancedVisuals 1.7.2 -> 1.8.1
- Etched 3.0.1 -> 3.0.2
- Exposure 1.5.1 -> 1.6.0
- ExtendedAE 1.1.4 -> 1.1.8
- Fallingtrees 0.12 -> 0.12.1
- Fancymenu 3.1.2 -> 3.2.3
- First Person 2.4.0 -> 2.4.1
- FTB-Quests 2001.4.4 -> 2001.4.5
- ImmediatelyFast 1.2.15 -> 1.2.17
- Jade 11.9.2 -> 11.9.3
- Ksyxis 1.3.0 -> 1.3.1
- Let Me Despawn 1.2.0 -> 1.2.1
- Mega Cells 2.3.5 -> 2.4.4
- Moonlight 2.11.31 -> 2.11.28
- Packet Fixer 1.3.2 -> 1.4.0
- PuzzlesLib 8.1.19 -> 8.1.20
- Steam_Rails 1.6.3 -> 1.6.4
- ToolBelt 1.20.0 -> 1.20.01
- YetAnotherConfigLib 3.4.2 -> 3.4.4
### Removed mods
- KryptonReforged
- FTBQuestsOptimizer
- Rrls

## [0.7.9] - 22.05.2024
### Fixes
- Fixed some spade and butchery knife recipes.
- Garnierite veins now spawns a bit frequently (60 -> 40).
- Backpack upgrades now can be crafted from any leather.
- Temp fix for glassworking with hot or not.
- Fix some broken quests AGAIN!
- Chisel and bits has been removed because it crashes servers often and has not yet been finalized. You can still return it to the modpack and its recipes that exist now will work correctly, we specifically left them in the modpack for this :)
- Maybe something else? definitely no.
### Updated mods
- Ksysis 1.2.0 -> 1.3.0
- AmbientSounds 5.3.9 -> 6.0.1
- Chat Heads 0.10.33 -> 0.12.2
- CreativeCore 2.11.27 -> 2.11.28
- Do a barrel roll 3.5.5 -> 3.5.6
- Embeddium 0.3.14 -> 0.3.19
- Embeddiumplus 1.2.8 -> 1.2.12
- EMI 1.1.4 -> 1.1.6
- EnhancedVisuals 1.7.1 -> 1.7.2
- FirmaCivilization 0.2.9 -> 0.2.10
- Firstperson 2.3.4 -> 2.4.0
- TFC Groomer 0.1.1 -> 0.1.2
- TFC Ambiental 3.2.0 -> 3.3.0
- TFC Aged Alcohol 2.0 -> 2.1
- Sophisticated core 0.6.21.609 -> 0.6.22.611
- PuzzlesLib 8.1.18 -> 8.1.19
- Open parties and claims 0.22.0 -> 0.22.2
- MouseTweaks 2.25 -> 2.25.1
- Moonlight 2.11.13 -> 2.11.28
- Kubejs TFC 1.1.2 -> 1.1.3
- Jade 11.8.0 -> 11.9.2
- ImmediatelyFast 1.2.12 -> 1.2.15
- FTBQuestsOptimizer 1.2.3 -> 2.0.1
- FTB-Teams 2001.2.0 -> 2001.3.0
- FTB-Quests 2001.3.5 -> 2001.4.4
- FTB-Library 2001.1.5 -> 2001.2.2
### Removed mods
- Chisel And Bits
- Textrues_embeddium_options

## [0.7.8] - 03.05.2024
### Fixes
- Fixed a bug where using GTCEu tools in the AstikoCarts plow caused the game to crash.
- Fixed a bug where it was impossible to make feeders from TFC: Grooming Station.
- Fixed a bug where they could drop when walking on placed blocks.
- Fixed a bug where the boiler could not accept river water.
- Fixed a bug where recipes were incorrectly displayed in EMI. (The EMI version has been downgraded)
- Fixed bug when spades cant be putted into tool rack.
### Updated mods
- EMI 1.1.5 -> 1.1.4
- TerraFirmaGreg-Core 0.5.3 -> 0.5.5

## [0.7.7] - 01.05.2024
### Fixes
- Rolled back the Embeddium version, freezes when loading the world
### Updated mods
- Embeddium -> 0.3.15
### New Mods
- Textrues_embeddium_options

## [0.7.6] - 01.05.2024
### Fixes
- Fixed shit with axe / saw behaviors.
### Updated mods
- TerraFirmaGreg-Core -> 0.5.3
- Embeddium -> 0.3.16
### Removed mods
- Textrues_embeddium_options

## [0.7.5] - 01.05.2024
### Fixes
- Fixed a crash on servers when opening interfaces GT.
### Updated mods
- TerraFirmaGreg-Core -> 0.5.2
- EMI -> 1.1.5
- EnhancedVisuals -> 1.7.1
- Moonlight -> 2.11.13
- TerraFirmaGreg-Core -> 0.5.2

## [0.7.4] - 30.04.2024
### Removed mods
- Clientcrafting
### Updated mods
- TerraFirmaGreg-Core -> 0.5.1

## [0.7.3] - 30.04.2024
### Features
- Using Spout from Create, you can now pour metal into TFC molds.
- Now, when placing ingots, double ingots and plates, they will take the color from GTCEu, that is, they will be painted automatically.
- Improved crafting and decraft recipes for such TFC items: Brass Mechanisms, Anvil, Unfinished Lamp, Lamp, Trapdoor, Chain, etc.
- Added 5 new types of molds for casting various items specified in the last line.
- Added decraft recipes for: toolHeadBuzzSaw, toolHeadScrewdriver, toolHeadDrill, toolHeadChainsaw, toolHeadWrench.
- Now, gem tool headband recipes use a glass lens in their recipe, rather than a glass yellow lens.
- A lot of recipes added using TerraFirmaGregCore now use more logical numbers of duration and amount of energy for recipes.
- Added recipes for double ingots in Bender.
- Added recipes for decrafting double ingots.
- Added a recipe for processing double ingots into plates in ForgeHammer.
- Added recipes for processing small pieces of ore from TFC into GTCEu dust.
- The transfer of various items and recipes to the tfg ID has been completed, which may entail the removal of some items from your world, for example, GTCEu molds.
- Removed the ability to select other generators of the world, except for what TFC adds.
- Now, in the EMI tab, where the veins that spawn in the world are displayed, not only ordinary pieces of ore are displayed, but also poor, rich ones. (Disabled due to the lack of various ores from GTCEu, will appear in the next update, when we migrate from TFC generator to GTCEu)
- Added the ability to randomly rotate surface pieces of ore from GTCEu.
- Improved integration of Create and various blocks from FirmaLife.
- Improved integration of TFC-Ambiental and various blocks (for example, ice, dense ice and many other blocks were added).
- The guide book from TFC is disabled, since the mod pack makes too many changes to the TFC and the book is not relevant, the relevant information will appear in the quests a little later.
- The primitive pump from GTCEu has been disabled, you must now use the mechanical one from Create.
- Infinite pumping of water from any water sources is disabled, now the base value of 1 million blocks for an infinite source is set, have fun.
- The recipe for the endless water cover is disabled, haha.
- Configured CarryOn.
- The recipe for gears from Create has been changed, now it uses creosote-treated boards.
- Quests have been changed to match the removal of the primitive pump.
- Improved Fermalife recipes, the ones that are added by the assembler, as well as Greg's metal/dust coloring.
- Improved FirmaCiv recipes, the ones that are added by the assembler, and his decraft in metal values.
- Added recipes/quests for AE2InfinityCard.
- Added recipes/quests for AE2NetworkAnalyzer.
- Added vanilla bucket recipe to assembler.
- Added a tinted glass recipe via GTCEu machines.
- Coral blocks have been returned to the game, as they still appear in TFC.
- If you are holding tongs from TFCHotOrNot in your hand and you have a hot GTCEu ingot in your inventory, you will not receive damage.
- Added recipes/quests for TFCHotOrNot.
- Added more fertilizer options coming from GTCEu items.
- Added new recipes for rail tracks that were added in the Steam&Rails update.
- Added the ability to put GTCEu power tools in the tool rack.
- Added recipes for CreateConnected.
- Added recipes/quests for для FramedBlocks.
- Energy cells from AE2 have been returned, as they are needed to move blocks using spatial pylons.
- Added TFC sea water recipe.
- Renamed TFC salt water to sea water.
- Recipes for energy converters from GTCEu are enabled.
- The recipe for the AE2 energy converter has been returned, it is needed to power pylons or cells from AE2.
- The mod for the music player was removed, it loaded the RAM too much, it was decided to change it to another one in the next update.
- Added salt recipe through TFC pot.
- Added recipes/quests for MERequester.
- Added recipes/quests for Etched.
- Added few new recipes for minecart.
### Fixes
- Fixed bug with firmaciv blocks, which drops firmaciv copper bolts instead of gtceu.
- Fixed bug, when breaking the ship casing, it can drop copper screws from FirmaCiv (WIP).
- Fixed the recipe for fish oil, now you can use any fish from TFC there.
- Fixed the recipe for golden vanilla rails.
- Fixed the quest for RTM coils, or rather its name and description.
- Fixed the number of metal contained in the rings, now 36.
- Fixed the number of metal contained in the bolts, now 18.
- Fixed the number of metal contained in the screws, now 16.
- Fixed a bug where it was impossible to put the hammer in the tool rack.
- Fixed the compass quest.
- Fixed the recipe for refractory clay in Assembler.
- Fixed a bug with the quest for HSS-G coins.
- Fixed the recipe for Brass Mechanisms in Assembler, now the output is +1.
- Fixed the decraft of a bucket in 1 ingot of red and 1 ingot of blue steel.
- Fixed a bug when the iron door was disassembled in 288 metal, in place 144.
- Fixed bugs related to some metal and not only items that are crafted from 1 metal, for example, but are decoded in GTCEu in 9 or more materials.
- Fixed a bug where there were white particles when the block with TFC ingots broke, now they are completely disabled.
- Fixed a bug where an ordinary block of ore did not have pieces of dust from the rock it was made of in the side.
- Fixed a bug where a wooden plate from GTCEu could not be crafted due to duplicate recipe patterns.
- Fixed the recipe for the shape of bricks from GTCEu due to the update to TFC 3.2.2.
- Fixed a bug where the fisher did not work when installed on salt water from TFC.
- Fixed a bug where the fisher did not work when installed on river water from TFC.
- Fixed a bug where the fisher did not waste the threads that were fed into it.
- Improved the removal of achievements from the game, now there is even more free RAM for players.
- Reduced the amount of material output from poor pieces by 25%.
- Fixed a bug with recipes for poor pieces of ore.
- Fixed a bug where chips were not displayed in chemical reactor recipes using EMI.
- Fixed a bug where an alert about using experimental settings appeared anyway before creating a new world.
- Fixed a bug in the console due to crooked CreateAdditions development handles and create machine rolling recipes.
- Fixed a bad recipe for bloomery after updating TFC to version 3.2.0.
- Fixed the decraft of LV machines in red/blue steel instead of regular steel.
### Updated mods
- Clumps -> 12.0.0.4
- CraftPresence -> 2.3.9
- CreativeCore -> 2.11.27
- Cucumber -> 7.0.8
- FirmaCivilization -> 0.2.8
- Firmalife -> 2.1.0
- ImmediatelyFast -> 1.2.11
- ItemPhysicLite -> 1.6.4
- PlayerRevive -> 2.0.25
- Steam_Rails -> 1.6.3
- TerraFirmaCraft -> 3.2.2
- XaerosWorldMap -> 1.38.4
- Xaeros_Minimap -> 24.1.1
- AE2wtlib -> 15.2.3
- Appliedenergistics2 -> 15.1.1
- CC-tweaked -> 1.110.3
- Chisels-and-bits -> 1.4.148
- Curios -> 5.8.1
- Do_a_barrel_roll -> 3.5.5
- Embeddium -> 0.3.14
- Embeddiumplus -> 1.2.7
- EMI -> 1.1.4
- Exposure -> 1.5.1
- FTB-xmod-compat -> 2.1.1
- GCYR -> 0.1.6
- GTCEU -> 1.2.0.a
- Kubejs -> 2001.6.5-build.7
- Kubejs_tfc -> 1.1.2
- Modernfix -> 5.17.0
- Moonlight -> 2.11.12
- Open-parties-and-claims -> 0.22.0
- PacketFixer -> 1.3.2
- Radium -> 0.12.3
- Sophisticatedbackpacks -> 3.20.5.1039
- Sophisticatedcore -> 0.6.18.597
- U_team_core -> 5.1.4.289
- EnhancedVisuals -> 1.7.0
- Notenoughanimations -> 1.7.2
- Recipeessentials -> 3.4
- Searchables -> 1.0.3
### New Mods
- AE2NetworkAnalyzer
- AEInfinityBooster
- AE2insertexportcard
- ExtendedAE
- TFCDesirePaths
- TFCHotOrNot
- TFCTumbleweed
- TFCVesselTooltip
- FramedBlocks
- Tumbleweed
- TFC_support_indicator
- Supermartijn642configlib
- Supermartijn642corelib
- Showcaseitem
- Seamless-loading-screen
- Pandalib
- Megacells
- Precisionprospecting
- YetAnotherConfigLib
- Glodium
- Fallingtrees
- YeetusExperimentus
- BetterFoliage
- Carryon
- Corals-tfc
- Create_connected
### Removed mods
- Bobby
- Starlight

## [0.7.2] - 22.03.2024
### Changes
- Fix some bugs with LAN game (by removing SimpleLogin).
- Removed fix for simplelogin from TFG-Core.
- Fix for fishing machine from GTCEu (loot).
### Updated mods
- TFG-Core -> 0.4.10
- cc-tweaked -> 1.110.0
- Do_a_barrel_roll -> 3.5.3
- moonlight -> 2.11.9
- sophisticatedbackpacks -> 3.20.3.1034
- modelfix -> 1.15
- PuzzlesLib -> 8.1.18
### New Mods
- bobby
### Removed mods
- CustomSkinLoader
- SimpleLogin
- async-locator
- betterchunkloading
- chunksending
- connectivity
- dynview
- gpumemleakfix
- netherportalfix
- smoothchunk
- voicechat
- farsight

## [0.7.1] - 19.03.2024
### Changes
- Fixed Menu. 

## [0.7.0] - 19.03.2024
### Changes
- Fixed bug when some quests (when using eng language) displays russian titles and descriptions. (FriendlyCube)
- Added new recipes for TFC alebaster via workbench. (FriendlyCube)
- Fixed a lot of shit with quests. (FriendlyCube)
- Added AE2 and Create chapters in quests (FriendlyCube)
- Added new recipes for charged certus quarts. (Exception)
- Fixed Exposure album recipe. (Exception)
- Fixed bug when cleat from firmaciv cant be broken with hand. (Exception)
- Replaced GTCEu lens with tfc lens for camera from Exposure. (Exception)
- Added elytra repairing recipe. (Exception)
- Removed polymer recipes from create press and packer. (Exception)
- Gregified HandGlider recipes. (Exception)
- Fixed some shit with clay -> mold assembler recipes. (Exception)
- Added Olive -> Olive Paste mixer recipes. (Exception)
- Added recipes for charcoal powder. (Exception)
- Added crushing recipes for nixtamal. (Exception)
- Fix dupes with gem blocks. (Exception)
- Fix dupes with vanilla bricks. (Exception)
- Added new recipes for TFC alebaster via GTCEu + Create machines. (FriendlyCube)
- Added a lot of smelting, mixing, and etc recipes for firmalife and tfc. (FriendlyCube)
- Added rubber producing by using vat from firmalife. (FriendlyCube)
- Added new quests for Create. (FriendlyCube)
### New Mods
- Hang Glider
- UTeam Core
- Music Player
- Embeddium/Rubidium Dynamic Lights
- Melody
### Updated mods
- AdditionalPlacements -> 1.8.0
- AmbientSounds -> 5.3.9
- CraftPresence -> 2.3.5
- CreativeCore -> 2.11.25
- FTBQuestsOptimizer -> 1.2.2
- Firmalife -> 2.0.9
- PacketFixer -> 1.2.8
- TerraFirmaCraft -> 3.1.9
- XaerosWorldMap -> 1.38.1
- Xaeros_Minimap -> 24.0.1
- ae2wtlib -> 15.2.2
- appliedenergistics2 -> 15.0.23
- architectury -> 9.2.14
- balm -> 7.2.2
- cc-tweaked -> 1.109.6
- chat_heads -> 0.10.32
- cherishedworlds -> 6.1.6
- connectivity -> 5.5
- corpse -> 1.0.12
- craftingtweaks -> 18.2.3
- cupboard -> 2.6
- curios -> 5.7.2
- do_a_barrel_roll -> 3.5.2
- drippyloadingscreen -> 3.0.1
- embeddium -> 0.3.9
- embeddiumplus -> 1.2.5
- emi -> 1.1.3
- exposure -> 1.4.1
- fancymenu -> 3.1.2
- firstperson -> 2.3.4
- ftb-quests -> 2001.3.5
- ftb-teams -> 2001.2.0
- kubejs -> 2001.6.4-build.138
- kubejs_tfc -> 1.1.0
- modernfix -> 5.14.0
- moonlight -> 2.11.4
- oculus-flywheel-compat -> 0.2.4
- smoothchunk -> 3.6
- sophisticatedbackpacks -> 3.20.3.1029
- sophisticatedcore -> 0.6.11.578
- voicechat -> 2.5.9
- recipeessentials -> 3.3

## [0.6.15] - 17.02.2024
### Changes
- Fixed upgrading backpack through JEI crashes the game.
### Updated mods
- Voicechat-forge -> 2.5.4
- Treetap -> 0.3.0
- Sophisticatedcore -> 0.6.3.553
- Sophisticatedbackpacks -> 3.20.1.1012
- PuzzlesLib -> 8.1.17
- PacketFixer -> 1.2.7
- Oculus -> 1.6.15a
- Moonlight -> 2.9.17
- Embeddium -> 0.3.4
### New Mods
- Better Chunk Loading
- Connectivity
- Oculus Flywheel Compat
- Recipe Essentials
- Smooth Chunk
### Deleted mods
- FastFurnace
- FastSuite
- FastWorkbench

## [0.6.14] - 12.02.2024
### Changes
- Fixed wrong amount smelting recipe output (for example: from redstone).
- Fixed Rose Gold recipe EUt mismatch.
- Fixed Iron Door recipe decomp.
- The dynamic lighting function was temporarily removed from Embeddiumplus for rework, the mod had to be updated because the developer archived other versions.
### Updated mods
- Chisels-and-bits -> 1.4.147
- Createaddition -> 1.2.3
- FastWorkbench -> 8.0.4
- GTCEU -> 1.1.3.b
- JEI -> 15.3.0.4
- Moonlight -> 2.9.12
- TerraFirmaGreg-Core -> 0.4.9
- Embeddiumplus -> 1.2.4

## [0.6.13] - 11.02.2024
### Updated mods
- Embeddiumplus -> 1.2.3
### Deleted mods
- Create Picky Wheels

## [0.6.12] - 11.02.2024
### Changes
- Primitive and Steel Age quests have been improved throughout.
- Removed glass block from Create.
- Fixed names of recipes for the sophisticated backpack mod.
- Recipes for painting toolboxes from Create have been removed from display.
- Added translation for the main quests of the primitive era.
- Fixed the game freezing when opening the quest menu, this was a bug in the FTB-Quests mod.
- Removed many recipes for nether blocks and items, will be returned when hell is added.
- Fixed the recipe for sandstone walls in the carver.
- Added stone output in the form of dust to stone cutting recipes in GTCEu Cutter.
- Added recipes for obtaining oxidized copper blocks, steps from them, and so on.
- Removed recipes for sand half-blocks, stairs and walls in the workbench.
- Fixed display of chunk boundaries.
- BetterF3 is configured once again.
- Fixed a bug when ore dug up with a hammer for drilling did not drop rich and poor chunks.
- Fixed a bug when the miner did not mine rich and poor chunks of ore.
- Fixed the quest for the red and blue anvil.
- Bronze steam boilers have been returned.
- Hidden the category in EMI, reflecting processing in the stone cutter, since there is already the same one from Create.
- Fixed a bug when, when you first logged into the official server, Minecraft was stuck on endless loading.
- Slightly increased the spawn frequency of oil sands.
- Added TFC glass blower recipe for glass pipe from GTCEu.
- Fixed the lamp recipe from TFC.
- Changed quests in connection with unlocking bronze boilers. Now you can switch to the steam era from bronze (though you won’t be able to make cars from bronze, hee hee).
- Fixed recipes for some vanilla items.
- Added more recipes for FirmaLife items via GTCEu machines.
- Decreased EUt required for ae2 quartz glass.
- Hided backpack colorizing recipes because its wont work.
### Updated mods
- Architectury -> 9.1.13
- CreativeCore -> 2.11.24
- Curios -> 5.7.0
- Embeddiumplus -> 1.2.4
- Emi -> 1.1.1
- Exposure -> 1.3.1
- Firmalife -> 2.0.8
- FTB-Quests -> 2001.3.3
- GTCEU -> 1.1.3
- Kubejs -> 2001.6.4-build.133
- Lootjs -> 2.11.0
- Moonlight -> 2.9.10
- Notenoughanimations -> 1.7.1
- PacketFixer -> 1.2.4
- Placebo -> 8.6.1
- PlayerRevive -> 2.0.24
- Saturn -> 0.1.3
- TerraFirmaCraft -> 3.1.8
- TerraFirmaGreg-Core -> 0.4.7
- Textrues_embeddium_options -> 0.1.5
### New Mods
- Create Picky Wheels

## [0.6.11] - 05.02.2024
### Changes
- Fixed smelting recipe of rich raw ores.
- Fixed recipe of bio chaff -> vanilla dirt.
- Fixed pyrolyse oven wood recipes.
- Fixed coal pile mining with mining_hammer/drill/spade
- Fixed *battery preparation* quest.
- Fixed ability of gtceu hoes to hoe dirt under water (u can do this now *yay*).
- Move scary SimpleLogin menu to Multiplayer screen.
- Fixed fluix crystal -> block recipe.
- Fixed voltage of greenhouse recipes.
- Fixed Sterling Silver dust recipe tier mismatch.
- Removed recipes of vanilla AstiCarts.
- Removed some recipes for vanilla blocks, which has been added by gtceu.
- Added AGAIN some recipes for TFC, FirmaLife, WaterFlasks, FirmaCiv items, to make it easier to get on later stages.
- New wet sponge -> sponge recipes!
- New carpet recipes!
- New clay -> assembler -> mold recipes! (Also with fireclay *yay*)
- Fixed some recipes for bamboo blocks.
### Updated mods
- CC-Tweaked -> 1.109.5
- Embeddium -> 0.3.1
- Exposure -> 1.3.0
- Firstperson -> 2.3.3
- Gregicality Rocketry -> 0.1.3
- ImmediatelyFast -> 1.2.10
- Jade -> 11.8.0
- JEI -> 15.3.0.1
- Modernfix -> 5.13.0
- Oculus -> 1.6.15
- PuzzlesLib -> 8.1.16
- Sophisticatedbackpacks -> 3.19.8.1000
- Sophisticatedcore -> 0.5.116.537
- Textrues_embeddium_options -> 0.1.4
- TFCAstikorCarts -> 1.1.7.5
- XaerosWorldMap -> 1.37.8
- TerraFirmaGreg-Core -> 0.4.6

## [0.6.10] - 01.02.2024
### Updated mods
- Embeddium -> 0.2.18
- Textrues_embeddium_options -> 0.1.3

## [0.6.9] - 31.01.2024
### Changes
- The option to disable coordinates and some information has been re-enabled because firmaCiv has finally introduced items for tracking latitude and longitude, which is intended for determining one's own location. You can still view your coordinates through the mini-map, but this functionality will be disabled in the future when Antique Atlas and Game Stages are added.
- BetterF3 has been slightly configured.
- EMI has been restored to replace REI, with bindings configured to be similar to REI. Unnecessary categories have been removed, and a new item hiding system has been added. This fixes a crash issue on servers.
- Now, when items are disabled, their BlockTags are also removed.
- A special Tag has been added to disabled items and liquids, which has facilitated development.
- Greg's method has been used to disable tool heads made from materials that should not exist (again, as Greg fixed this).
- Fixed bow assmebler recipe (now using all string instead of hardcoded vanilla strings).
- Removed assembler lead recipem but added strings + wrought iron ring recipe for lead in workbench.
- Fixed wool assembler recipe (Now consuming any strings).
- Removed outdated concrete colorizing recipes because gtceu adds own.
- Fixed carpet colorizing recipes.
- Removed dye + bed = dye bed recipes, because u should use chemical bath or barrel for that.
- Disabled coordinates displaying in xaeros map. Of course, I understand that everyone can turn this back on, but the modpack involves navigating the terrain using firmaciv devices, so this solution is temporary.
- Disabled entity displaying in xaeros map.
- Players are now displayed on the map as dots. 
- Fixed oil output from tfc dirt -> biomass recipe (what??)
- GTCEu bolts now can be used in FirmaCiv boats (Fix for new FirmaCiv ver).
- Hided for now nether items.
- Added recipe for Elytra.
- Colorizing of Create valves (in TFC barrels).
- Colorizing of Create seats (in TFC barrels).
- Heat recipes for many of FirmaCiv items.
- Added assembler recipes for many of FirmaCiv recipes.
- Added assembler recipes for many of TFC recipes.
- Removed recipes for vanilla candles (use tfc candles pls)
- Added assembler recipes for TFC brick items.
- Hide EMI repairing recipes, because it's cursed..
- Candle colorization recipes in gtceu assembler.
- MoreRed cable colorization via gtceu chemical bath.
- Try to fix crash - create pressing.
- Removed *NewYear* logo from drp.
- Removed fix for xaero-map, because tfc grass colors has been fixed in xaero.
### Updated mods
- AmbientSounds -> 5.3.8
- CC-tweaked -> 1.109.4
- Chat_heads -> 0.10.31
- CraftPresence -> 2.3.0
- Createaddition -> 1.2.2
- CreativeCore -> 2.11.23
- Cupboard -> 2.3
- Curios -> 5.6.1
- Embeddium -> 0.3.0
- FirmaCivilization -> 0.2.2
- Firstperson -> 2.3.2
- GTCEu -> 1.1.2.a
- Kubejs -> 2001.6.4-build.130
- Moonlight -> 2.9.7
- PuzzlesLib -> 8.1.15
- TerraFirmaCraft -> 3.1.6
- TerraFirmaGreg-Core -> 0.4.5
- Textrues_embeddium_options -> 0.1.4
- Voicechat -> 2.5.1
- Xaeros_Minimap -> 23.9.7
- XaerosWorldMap -> 1.37.7
### New Mods
- CustomSkinLoader
- Do_a_barrel_roll
- EMI
- JEI
- Chisels-and-bits
### Deleted mods
- Entityculling
- EverlastingSkins
- REIPluginCompatibilities
- RoughlyEnoughItems

## [0.6.8] - 24.01.2024
### Changes
- Произведен откат версии Firma Civilization из-за краша на сервере
### Deleted mods
- alekiEHM

## [0.6.7] - 24.01.2024
### Changes
- The toolheads have been removed from the materials, and since they should not exist, we clean up after Greg again.
- Added and optimized a lot of mods/configs for optimization.
- Added QOL mods.
- F11 is now working correctly.
- Fixes to work with the latest greg.
- Fixed latex bucket quest.
- Fixed strings quest.
- After the update, you may have chests in REI with a vanilla texture, but from TFC, this is normal, the mod bug has already sent the information to the developer.
### New Mods
- AlekiEHM
- Async-locator
- AttributeFix
- Flickerfix
- Gregicality Rocketry
- ImmediatelyFast
- Ksyxis
- Modelfix
- Nerb
- Netherportalfix
- PacketFixer
- Radium
- Rrls
- Saturn
### Deleted mods
- Сanary
- Сhisels-and-bits
- Сonnectivity
- LocalizedChat
### Updated mods
- AmbientSounds -> 5.3.7
- Embeddiumplus -> 1.2.3
- FirmaCivilization -> 0.2.1
- Firmalife -> 2.0.7
- Ftb-library -> 2001.1.5
- Ftb-quests -> 2001.3.2
- GTCEU -> 1.1.1.a
- Moonlight -> 2.9.3
- PlayerRevive -> 2.0.23
- TerraFirmaGreg-Core -> 0.4.3
- TFCAstikorCarts -> 1.1.7.3

## [0.6.6] - 21.01.2024
### Changes
- Fixed a lot of recipes with unknown tags.
- Fixed a bug when it was impossible to melt ingots of tin and red alloys.
- Fixed tags of some GTCEu blocks.
- Minor code improvements in TFG-Core.
### Updated mods
- TerraFirmaGreg -> 0.4.3

## [0.6.5] - 20.01.2024
### Changes
- Fixed a crash when opening inventory on servers.
- Fixed raw stone blocks in tool recipes.
### Updated mods
- TerraFirmaGreg -> 0.4.2

## [0.6.4] - 20.01.2024
### Changes
- Removed recipe of sea lantern from Minecraft.
- Fixed recipes for iron and copper greenhouses, hidden blocks, some kind of greenhouse made of copper.
- Fixed several quests.
- Fixed the recipe for melting raw gold into a gold bar in furnaces and Create mechanisms.
- Balancing the stats of instruments that do not duplicate TFC metals.
- Multiple reworking of recipes to support GTCEu 1.1.0. In fact, nothing will change for the user, but the code had to be worked on.
- The player's patience effects are displayed in the inventory on the left.
- For the TFC buttons in the inventory on the right, the avoidance of objects from REI has been done, now you can safely press the TFC buttons.
- Blocks of raw ores have been cut from the game.
- Fixed collecting items in lists in REI.
- Fixed localization for GTCEu mold extruder.
- Added localization lines for lists in REI.
- Fixed a bug where it was possible to cast a forged ingot from CastIron.
- Improved some veins (Increased spawn height of indicators + changes in rarity).
- Fixed a Jacks recipe in TFC that conflicted with welding two rods.
- Fixed the drop of TFC gems from flushing.
- CC turtles are hidden, only the default ones remain.
- Added a recipe for a non-black star (temporary), after adding hell it will be deleted.
- The erroneous rubber dust recipe from GTCEu has been removed.
- Removed recipes for board plates in the Create saw.
- Fixed conflicting compass crafting.
- Fixed a bug where chests in REI could have a vanilla texture.
- Extended debug information is enabled back.
- Fixed Toolbelt recipes again.
- Fixed a bug where it was impossible to melt various TFC metals.
- Perhaps something else, thank you for helping the project develop.
### New Mods
- Fps Reducer
- Voice Chat
- Dynview
- KryptonReforged
- LocalizedChat
- nanhealthfixer
- tfcchannelcasting
- toofast
- no-report-button
### Updated mods
- GregTech -> 1.1.0
- TerraFirmaCraft -> 3.1.5
- TerraFirmaGreg Core -> 0.4.0
- Canary -> 0.3.2.
- CreativeCore -> 2.11.22
- Curios -> 5.5.0
- Firstperson -> 2.3.0
- FTB-quests -> 2001.3.1
- kubejs -> 2001.6.4-build.127
- moonlight -> 2.8.84
- PlayerRevive -> 2.0.22
### Deleted mods
- NoChatReports

## [0.6.3] - 16.01.2024
### Changes
- Fixed a bug when it was impossible to make a canoe.
- Added function to disable additional TFC-Ambiental integration.
- Fixed the quest for the copper ingot.
### Updated mods
- TerraFirmaGreg 0.3.1 -> 0.3.2
- appliedenergistics2 -> 15.0.20
- embeddium -> 0.2.18

## [0.6.2] - 15.01.2024
### Changes
- Исправлен уровень ковки для двойных слитков.
- Исправлено удаление рецепта кафедры на Linux подобных системах.
### Update mods
- TerraFirmaGreg -> 0.3.1
### New Mods
- Carpeted
- Catalogue
- ChunkSending
- Connectivity
- CraftingTweaks
- MoonLight

## [0.6.1] - 14.01.2024
### Changes
- Изменился адрес подключения к серверу, скорректирована кнопка.
- Исправление сервер пака.
### Deleted mods
- BetterCompatibilityChecker
### New Mods
- MyServerIsCompatible

## [0.6.0] - 14.01.2024
### Changes
- **ВАЖНОЕ ОБНОВЛЕНИЕ. В ИДЕАЛЕ СТОИТ ПЕРЕСОЗДАТЬ МИР И НАЧАТЬ ИГРАТЬ СНАЧАЛА. ЕСЛИ У ВАС КАКИЕ-ТО ОШИБКИ В СТАРЫХ МИРАХ, НЕ ПИШИТЕ МНЕ ПОЖАЛУЙСТА.**
- Добавлено множество рецептов для оголовий биты TFC (Допустим крафт и раскрафт через GTCEu машины).
- Добавлено множество рецептов для оголовий стамески TFC (Допустим крафт и раскрафт через GTCEu машины).
- Добавлено множество рецептов для оголовий кирки шахтера TFC (Допустим крафт и раскрафт через GTCEu машины).
- Добавлено множество рецептов для оголовий копья TFC (Допустим крафт и раскрафт через GTCEu машины).
- Перенастроена система металлов (снова и в последний раз), теперь cast_iron из TFC это ванильной железо. Да и вообщем мы изабвились от TFC слитков и другой херни.
- Добавлено множество рецептов раскрафта пылей, руд GTCEu в металл TFC.
- Добавлены новые 4 формы экструдера.
- Добавлены собственные двойные слитки.
- Исправлены рецепты оголовий из гемов в extruder.
- Исправлен баг, когда с руды в некоторых случаях выпадал предмет с пустым тегом.
- Исправлены рецепты дробления некоторых слитков в пустоту в машинах create.
- Исправлены рецепты с некоторыми пустыми инструментами.
- EMI заменен обратно на REI (вызывает дикие фризы при открытии меню квестов, не имеет возможности скрытий категорий и отображает неправильно некоторые исправленные рецепты). Поддержка JEI + EMI оставлена в коде, если вы замените REI на EMI + JEI скрытие предметов и другие некоторые функции продолжат работать.
- Расширены рецепты в Лазер Энгрейвере.
- Исправлен повышенный выход металла из бедной руды.
- Исправлена ситуация, когда нельзя было получить пыль графита на старте игры, теперь можно выкопать руду молотом и получить ее дробленный вариант, после, раздробить снова, промыть и раздробить, получив порошек.
- Добавлены двойные слитки для Оловянного сплава.
- Добавлен дроп, материала камня из руды.
- Исправлен баг, когда нельзя было расплавить предметы из оловянного сплава в тигле.
- Добавлены рецепты переработки пшеницы в солому + пшеничные зерна с шансом выхода.
- Исправлен конфликт рецептов земли и удобрения.
- В каолинитовые блоки теперь также как и в латунные можно отливать стекло.
- Исправлен рецепт кирпича для коксовой печи.
- Исправлены баги с инструментами (вроде бы), если у вас, что-то не работает, **ПОЖАЛУЙСТА СОЗДАЙТЕ НОВЫЙ МИР И ПРОТЕСТИРУЙТЕ В НОВОМ МИРЕ**.
- Возможно что-то еще, о чем забыл.
### Update mods
- embeddiumplus -> 1.2.2
- fancymenu -> 2.14.13
- konkrete -> 1.8.0
- modernfix -> 5.12.1
- TerraFirmaGreg-Core - 0.3.0
### New Mods
- REIPluginCompatibilities
- RoughlyEnoughItems
### Deleted mods
- ChatImage
- emi
- jei

## [0.5.1] - 12.01.2024
### Changes
- Исправлен квест на наковальни.
- Исправлены рецепт золотого и медного слитков (используются на данный момент из ваниллы).
- Исправлены рецепты мясницких ножей.
### Update mods
- modernfix -> 5.12.0

## [0.5.0] - 12.01.2024
### Changes
- Исправлены текстуры ванильных кусков руды.
- Исправлены рецепты декрафта через продувку в воде из create у грязной пыль.
- Обновлен интерфейс.
- Добавлены оголовья для Spade.
- Добавлена ковка для Spade.
- MiningHammer теперь делаются из 2 слитков, значит их можно получить до создания экструдера.
- Добавлено больше рецептов через водную продувку из create gt руды.
- Добавлено больше рецептов через бросание в воду AE2.
- Исправлен баг, когда отлично выкованный статус на оголовии не перекладывался на сам инструмент.
- Исправление рецептов терминалов AE2.
- Добавлены 2 новые жилы, Oilsands и Spodumene, подробнее в таблице Excel.
- Обновлены 5 жил, подробнее в таблице Excel, там можно посмотреть изменения.
- Добавлена жидкостная жила с fresh водой.
- Интеграция ComputerCraft.
- Возвращен рецепт костной муки в CrushingWheels.
- Надеюсь исправлены квесты, которые не принимали инструмент как следует.
- Добавлено множестно новых рецептов для CrushingWheels и Milling из Create.
- Отключены рецепты пылей некоторых металлов, теперь их нужно смешивать в Mixer.
- Изменен рецепт досок из креозота.
- Изменен рецепт у лент из мода Exposure.
- Добавлены в TFC металлы Tin Alloy и Red Alloy, теперь их можно смешать и отлить в форму.
- Интеграция FirmaLife насколько это возможно (Удалены рецепты теплицы из нержавейки + скрыты некоторые блоки/жидкости) + заменены рецепты использующие нержавейку (что?).
- Некоторое обновление квестов.
### Update mods
- appliedenergistics2 -> 15.0.19
- embeddiumplus -> 1.2.1
- gtceu-forge -> 1.0.20.b
- kubejs -> 2001.6.4-build.120
- PuzzlesLib -> 8.1.13
- smoothboot(reloaded) -> 0.0.4
- TerraFirmaGreg-Core -> 0.2.11.
### New Mods
- Controlling
- emi
- no-report-button
- Searchables
- textrues embeddium options
### Deleted mods
- REIPluginCompatibilities
- RoughlyEnoughItems

## [0.4.3] - 06.01.2024
### Changes
- Исправлен рецепт точного механизма из Create.
- Исправлен рецепт ремня из Create.
- Исправлен рецепт молотильных камней из Create.
- Исправлен рецепт хранилища из Create.
- Теперь помпа Create не уничтожает жидкости при их выкачивании.
- Теперь помпы и трубы Create не могут устанавливать воду (источник).
- Исправлены рецепты стальных машин.
- Исправлна работа XaeroMinimap и Worldmap с блоками травы TFC (если она у вас была серая, то фикс автоматически начнет работать, если вы переключали режим, то верните на Accurate).
- Исправлена работа дополнения для TFC-Ambiental, теперь все температуры от дополнительных источников работают верно.
- Исправлены некоторые эффекты у Enchanced Visuals.
- Скрыты цветные рюкзаки, чтобы не вводить пользователей в заблуждение, тк рецепты с покраской не работают.
- Исправлена групировка предметов GT в REI.
- Исправлено наложение для руд в GT.
- Исправлены ссылки в кнопках на главном меню.
### Update mods
- TerraFirmaGreg-Core -> 0.2.10
- canary -> 0.3.1

## [0.4.2] - 05.01.2024
### Changes
- Исправлен вылет игры при нахождении рядом с бойлерами.
### New Mods
- embeddiumplus
### Update mods
- TerraFirmaGreg-Core -> 0.2.7
- PuzzlesLib -> 8.1.12
### Deleted mods
- dynamiclightsreforged

## [0.4.1] - 05.01.2024
### Changes
- Исправлена кнопка подключения к официальному серверу.
- Исправлен рецепт молда для лопаты.
### Update mods
- TerraFirmaGreg-Core -> 0.2.5
- notenoughanimations -> 1.7.0

## [0.4.0] - 05.01.2024
### Changes
- Удалены из игры бронзовые паровые машины, тк позволяли скипнуть очень много прогресии TFC.
- Добавлено очень много квестов для Примитивной эры (пока что без описаний).
- Добавлены рецепты покраски для бетона, шерсти, кроватей и др.
- Удален рецепт кроватей через блоки шерсти.
- Удален рецепт кожи из кроличьей шкуры.
- Добавлены единицы металла чистому железу (пыль, блоки, руда и др).
- Добавлена интеграция GT машин с модом TFC Ambiental.
- Исправлен баг, когда нож не получал урон во время копки блоков травы.
- Исправлен баг, когда нельзя было начать делать лодку из firmaCiv из-за GTCEu топора.
- В FirmaCiv теперь используется болт из меди GTCEu, а не их собственный.
- Интеграция мода Create, Create Additions, Create Steam and Rails.
- Интеграция мода FirmaCiv.
- Интеграция мода Chisel And Bits.
- Множество новых рецептов связанных с обжариванием теста и получением хлеба черзе GTCEu машины.
- Новые рецепты прогресии (новый рецепт для ULV и LV микросхем GTCEu).
- Удалены рецепты объединения в блок в компрессоре.
- Удалены все рудные жилы из GTCEu (все равно используем систему TFC, + оптимизация крч).
- Новые текстуры руд взятые с 1.12.
- Улучшения и оптимизации кода скриптов.
- Больше блоков и предметов было отсортировано в отдельные списки в REI.
- Исправлено создание firmaCiv лодки (лодок).
- Руды GTCEu теперь могут осыпаться и ломаться при осыпании, после чего дропать кусок руды.
- Полублоки, ступени, стены и другие блоки теперь могут осыпаться.
- Добавлены бедные и богатые куски руд с их переработкой.
- И еще множество всего, чего я забыл.
### Deleted mods
- TFShips
- smallships
- ad_astra
- botarium
- resourcefulconfig
- resourcefullib
### New Mods
- AdditionalPlacements
- EnhancedVisuals
- PlayerRevive
- cc-tweaked
- chisels-and-bits
- createaddition
- gcyr
- kubejs-create
- lootjs
- starlight
### Update mods
- CreativeCore -> 2.11.18
- Cucumber -> 7.0.7
- FirmaCivilization -> 0.1.10
- Jade -> 11.7.1
- TerraFirmaGreg-Core -> 0.2.4
- appliedenergistics2 -> 15.0.18
- astikorcarts-redux -> 1.1.7
- curios -> 5.4.7
- embeddium -> 0.2.16
- exposure -> 1.2.2
- gtceu -> 1.0.19.b
- sophisticatedbackpacks -> 3.19.5.988
- sophisticatedcore -> 0.5.113.524

## [0.3.0] - 26.12.2023
### Changes
- У руд GTCEu изменен id, это значит, что руда в старых мирах вайпнется, таков путь, зато из-за этого получилось удалить ванильные и кучу других типов руд из GTCEu, что повысит производительность игры.
- Теперь любая руда из GTCEu отображается на диаграмме переработки.
- Исправлен редкий краш с SimpeLogin.
- Заменены каменные инструменты TFC на их варианты из GTCEu.
- Исправлена работа GTCEu, топора, мотыги, лопаты, косы, возможно чего-то еще, я забыл (напомню, что исправлял я это сам в моде, разрабу ваще похер).
- Добавлен декрафт латекса в резину в сепараторе.
- Теперь руда в каждой породе имеет свою пыль, допустим пыль Габбро, которая раскрафчивается в какие-либо элементы, совсем мало, но хоть что-то.
- Изменены ключи локализации руд.
- Удалены некоторые блок-теги, которые уже не нужны.
- Переписаны вроде бы все необходимые рецепты из ваниллы, а также скрыты все не нужные предметы из ваниллы.
- Скрыты дополнительно, некоторые механические предметы и блоки из TFC, о которых я забыл в прошлом патче.
- Добавлены рецепты напильника и ножа мясника в рецепты наковальни.
- Добавлено множество рецептов для TFC дерева и камня в GT машинах.
- Добавлены рецепты преобразования при помощи энтропийной палки из AE2.
- Исправлен баг рецептов AE2 с прессами.
- Удалены рецепты покраски кабелей AE2 через примитивные красители.
- Оптимизированы рецепты покраски кабелей AE2.
- Исправлен рецепт примитивной помпы.
- Возможно, что-то еще, но я об этом забыл.
- Удалены рецепты деревянных оголовий электро инструментов (снова разрабы грега накакали)
### New Mods
- FirmaCivilization
- Steam_Rails
- ad_astra
- barrels_2012
- create
- Curios
### Update mods
- Cloth-config: 11.1.106 -> 11.1.118
- Corpse: 1.0.9 -> 1.0.10
- Exposure: 1.1.1 -> 1.2.1
- Firmalife: 2.0.4 -> 2.0.6
- Jade: 11.6.4 -> 11.7.0
- Modernfix: 5.10.1 -> 5.11.0
- Resourcefullib: 2.1.19 -> 2.1.20
- TerraFirmaCraft: 3.1.3 -> 3.1.4
- TerraFirmaGreg: 0.0.25 -> 0.2.0
- CraftPresence: 2.2.5 -> 2.2.6
- CreativeCore: 2.11.15 -> 2.11.16
- gtceu: 1.0.17 -> 1.0.18a
- treetap: 0.2.1 -> 0.2.3
- Patchouli: 83 -> 84
- open-parties-and-claims: 0.20.3 -> 0.20.4
- Canary: 0.2.7 -> 0.2.10
- cupboard: 2.1 -> 2.2
- modernfix: 5.11.0 -> 5.11.1
- Eembeddium: 0.2.13 -> 0.2.15

## [0.2.1] - 2023-12-14
### Changes
- Исправлен баг, когда нельзя было использователь тфк медный и золотой слитки в расплаве металла.
- Исправлен баг, когда нельзя было класть инструмент из GTCEu в держатель для интструментов.
- Исправлен баг, когда некоторые шахтерские молоты не могли копать 3х3.
- Исправлен баг, когда некоторые блоки GTCEu имели слишком высокий уровень копания (лучше бы разраб гт исправил)
- Исправлен баг, когда нельзя было класть пластины и слитки на землю.
- Скрыты некоторые предметы FirmaLife.
- Исправлен рецепт ванильной двери.
- Добавлено чуточку квестов.
- Исправлен рецепт Sticky Resin.
- В моде на вид от первого лица, теперь дефолтное состояние, это обычное, если хотите включить, нажмите F6.
- Удалены рецепты всей механической херни из тфк, ПОТОМУ ЧТО ОНА НЕ РАБОТАЕТ С CREATE, РАЗРАБ TFC ДЕБИЛ.
- Возможно, что-то еще..
### New Mods
- FTB Filtering Mod
- Clumps
- Get it together drops
- Let me despawn
### Update mods
- TerraFirmaGreg: 0.0.22 -> 0.0.25
- CreativeCore: 2.11.13 -> 2.11.15
### Deleted mods
- AdAstra (будем добавлять по мере переписывания)
- ComputerCraft (будем добавлять по мере переписывания)
- Create + его аддоны (будем добавлять по мере переписывания)
- ItemFilters

## [0.2.0] - 2023-12-14
### Changes
- Исправлены баги, когда некоторые предметы имеющие металл нельзя было нагреть.
- Исправлен баг, когда некоторые тфк предметы не могли быть нагреты.
- Переписаны рецепты WaterFlasks.
- Переписаны рецепты ToolBelt.
- Удалена жила Sylvite.
- Переписаны все рецепты AE2 (Спасибо FriendlyCube).
- Переписаны все рецепты AE2WTLib (Спасибо FriendlyCube).
- Множеству предметов GT добавлены статы удобрений тфк, теперь ими можно удобрять землю вместо Sylvite.
- Исправлены множественные проблемы с рецептами ковки, сварки, нагрева.
- Исправлен баг, когда вещи из кованного железа можно было пережарить в кованое железо.
- Добавлены рецепты раскрафта из тфк рыбы в рыбье масло.
- Добавлены рецепты раскрафта из тфк семян в семянное масло.
- Исправлены все рецепты факелов, теперь они не горят вечно.
- Исправлен баг, когда в рецепты разрезания тыквы пропадал нож.
- Добавлен мод на просмотр скриншотов из чата прямо в игре.
- Переписаны рецепты мода Exposure.
- Переписаны рецепты мода MoreRed.
- Добавлены рецепты раскрафта соленой воды из тфк.
- Добавлены рецепты формочек в печи.
- Добавлены рецепты для ниток из ваниллы.
- Добавлены рецепты для сварки и ковки слитков в молоте гт.
- Исправлена выдача энергии при использовании лавы в бойлере.
- Машины теперь взрываются если подать слишком высокое напряжение.
- Машины теперь взрываются под дождем (или нет).
- Машины теперь нужно вскапывать спец. инструментом.
- Крафты стержней в гт машинах стали сложней.
- Теперь при переработке руды гт получается обычный камень, а не отдельный по типам.
- При вскапывании при помощи бура руды, блоки заменяются на риолит.
- Переписаны основные рецепты FirmaLife связанные с металлом.
- Спустя тысячу лет, были отключены дублирующие предметы в AdAstra и Create (слитки, пластины).
- Переписаны рецепты мода SmallShips.
- Переписаны некоторые рецепты мода TFShips.
- Удалены все рецепты AdAstra.
- Удалены все рецепты ComputerCraft.
- Удалены все рецепты Create.
- Удалены теги пылей у порошков тфк, чтобы не вызывали непоняток.
- Обновлен Rich Presence на новогодний.
- Исправлен баг, когда в квесте требовался не тот слиток для выполнения (не тестировалось, но должно было автоматически починиться после переписи тфк рецептов).
- Добавлены рецепты бесконечного камня в Rock Breaker.
- Исправлен рецепт дробления кирпича (исправился сам).
- Добавлен рецепт ванильного ведра.
- Исправлен рецепт Blast Furnace.
- Исправлены рецепты всех инстурментов.
- Куча скрытых предметов и другой хери.
- Исправлено куча рецептов связанных с дроблением кусков руды в порошек.
- Возможно, что-то еще, все не упомнишь.
- Добавлен перевод gregtech. (Спасибо SoOvey)
### New Mods
- FirstPersonView
- Firmalife
- ChatImage
### Update mods
- LootJS: KubeJS Addon: 2.10.3 -> 2.10.4
- Roughly Enough Items Fabric/Forge (REI): 12.0.674 -> 12.0.684-forge
- FTB Quests Optimizer: 1.1.4 -> 1.1.5
- TFC Ambiental: Second edition: 3.1.0 -> 3.2.0
- Exposure: 1.0.0 -> 1.1.1
- Xaero's World Map: 1.37.1 -> 1.37.2
- FTB Quests (Forge): 2001.2.0 -> 2001.3.0
- CreativeCore: 2.11.10 -> 2.11.13
- Embeddium: 0.2.10 -> 0.2.13+
- Jade Addons (Forge): 5.2.1 -> 5.2.2
- KubeJS: 2001.6.4-build.95 -> 2001.6.4-build.114
- Puzzles Lib [Forge & Fabric]: 8.1.9 -> 8.1.11
- GregTechCEu Modern: 1.0.16 -> 1.0.17
- Sophisticated Core: s0.5.108.504 -> 0.5.111.517
- Applied Energistics 2 Wireless Terminals: 15.1.5 -> 15.2.1
- Rhino: 2001.2.2-build.13 -> 2001.2.2-build.18
- Sophisticated Backpacks: 3.19.1.962 -> 3.19.4.978
- Tree Tap: 0.2.0 -> 0.2.1
- Xaero's Minimap: 23.9.1 -> 23.9.3
- Oculus: 1.6.9 -> 1.6.13
- ModernFix: 5.9.3 -> 5.10.1
- Resourceful Lib: 2.1.18 -> 2.1.19
- Balm (Forge Edition): 7.1.4 -> 7.2.1
- TerraFirmaCraft: 3.1.0 -> 3.1.3
- TerraFirmaGreg: 0.0.13 -> 0.0.22
### Deleted mods
- Macaw AIO
- ExtendedCrafting

## [0.1.2] - 2023-11-30
### Changes
- Исправлен баг, когда тфк порошок можно было переплавить как пыль.
- Улучшено расположение рецептов в скриптах.
- Исправлен баг, когда кирка шахтера не работала.
- Исправлен баг, когда из досок можно было без пилы сделать палки, что порождало кривые рецепты палок.
- Исправлены рецепты у мелких кусков металла, для юзера ничего не поменялось но ген рецептов стал автоматическим.
- Повсеместное улучшение читабильности кода.
- Добавлено несколько рецептов для дробилки тфк, так как некоторые отсутствовали (связано с порошком).
- Изменен рецепт LV Machine Casing, теперь он использует пластины красной и синей стали.
### Update mods
- TerraFirmaGreg 0.0.12 -> 0.0.13
- Cucumber 7.0.4 -> 7.0.6
- ResourcefulLib 2.1.16 -> 2.1.18
- Blur 3.1.0 -> 3.1.1
- XaeroMinimap 23.8.4 -> 23.9.0
- XaeroWorldMap 1.36.0 -> 1.37.0
- Ae2WT 15.1.4 -> 15.1.5
- FTBQuestsOptimizer 1.1.3 -> 1.1.4
- Curios 5.4.3 -> 5.4.4

## [0.1.1] - 2023-11-29
### Changes
- Исправлен баг, когда выходные слитки могли быть из разных модов (ну или нет, но вроде я тестил и все было хорошо).
- Скрыты неиспользуемые жидкости, предметы тфк.
- Скрыто множество ванильных предметов, но еще не всех.
- Исправлен декрафт тфк порошка в металл, который имеет кучу единиц металла.
- Исправлены рецепты песка и стекла.
- Исправлен баг, когда в мире могла генерироваться тфк жила сапфиров и изумрудов.
- Добавлены рецепты булыги и сырого камня в RockBreaker.
- Добавлены новые рецепты SandStone из TFC, ванильные скрыты.
- Вовзращены ванильные текстуры в пауз меню у кнопок.
- Исправлен баг, когда из промывки можно было получить тфк гемы.
- Декрафт всех дервянных предметов тфк в деревянную пыль в гт.
- Исправление рецепта креозотовых досок.
- Исправлен баг, когда можно было сделать некоторые нежелательные рецепты из AdAstra.
- Возвращены рецепты MCW AIO, да они кривые, но я не буду за автора делать всю работу, пусть фиксит свой говно-мод.
- Исправлен рецепт доменной печи тфк.
### New Mods
- exposure
### Update mods
- customSkinLoader -> 14.18.3
- corpse -> 1.0.9
- Placebo -> 8.6.0
- XaeroMinimap -> 23.9.1
- XaeroWorldMap -> 1.37.1
- Curios -> 5.4.5
- sophisticatedbackpacks -> 3.19.1.962
- sophisticatedcore -> 0.5.108.504

## [0.1.0] - 2023-11-27
### Changes
- Исправлен баг, когда можно было дублировать металл через броню, пластины, палки и другое.
- Исправлен баг, когда обычные железные слитки нельзя было расплавить в железо.
- Исправлен баг, когда нельзя было сделать коксовую печь, из-за использования обычных элементов из железа, теперь используется кованное железо.
- Добавлены новые рецепты нагрева для слитков глины для коксовой печи.
- Пластины теперь унифицируются по тэгу sheets и plates.
- Исправлен баг, когда нельзя было использовать каменный уголь и его сырые варианты в firepit (некоторые не работают или работают в бласт печки и костре, это так и должно быть).
- Теперь можно использовать как топливо в тфк коксовый уголь.
- Исправлен баг, когда Goethite нельзя было расправить в железо.
- Тыкву можно теперь разрезать ножом на кусочки, рецепт с молотом так же остался.
- Исправлены все рецепты для Forge Hammer.
- Добавлены рецепты в AlloySmelter и Solidifier для крафта наковален из TFC.
- Исправлен баг, когда не отображались рецепты из золотых слитков и других.
- Удалены рецепты раскрафта и крафта ванильной наковальни + скрыта.
- Удалены рецепты связанные с Primitive Blast Furnace из TFC.
- Удалены рецепты связанные с деревянной бочкой.
- Удалены рецепты связанные с FireBricks.
- Короче удалено еще миилиард рецептов, я устал перечислять.
- Исправлены рецепты рюкзаков (покраска не работает, баг мода).
- Исправлены рецепты бумаги.
- Исправлены рецепты PlantBall.
- Исправлены рецепты Биомассы.
- Исправлен крафт стекла через ТФК механику.
- Теперь краник нельзя поставить на блок дерева которое ты сам поставил.
- Добавлена ковка оголовья напильника и мясницкого ножа.
- Добавлены рецепты переработки муки в дробителе.
- Добавлен русификатор грега.
- Добавлено/Изменено некоторое кол-во квестов.
- У разраба грега кривые руки, мы самолично исправили использование инструментов гт с тфк блоками.
- Изменен рецепт у краника под латекс.
- Изменены рецепты ItemFrame и GlowingItemFrame.
- Удалены рецепты ведра ваниллы из обычного железа (рецепты крафта будут позже).
- Изменен рецепт картины.
- Изменен рецепт седла.
- Ищменен рецепт Повторителя и Компаратора.
- **Изменения в TFC:**
- Добавлены водяные колеса, ветряные мельницы, оси, коробки передач, закрытые оси, сцепления для каждого типа древесины TFC.
- Querns машины могут быть подключены к вращающейся оси для автоматического измельчения.
- Добавлен коленчатый вал, который может быть подключен к bellows для автоматизации.
- Добавлены стальные трубы и стальной насос, способные перемещать несколько исходных блоков воды, соленой воды и родниковой воды.
- Добавлен Отбойный молоток, который можно использовать для автоматической обработки некоторых предметов на наковальне.
- В полевое руководство добавлены новые страницы, объясняющие, как использовать все новые механики.
- Удален рецепт крафта и улучшения для ванильного ведра.
- Синие и красные стальные ведра больше не могут перемещать источники, и оба могут переносить лаву и водоподобные жидкости.
- Исправлены многие несоответствия между соленой и пресной водой из-за нового FORGE FLUID-API (#2542)
- Исправлена ошибка, из-за которой пузыри не появлялись, когда вы покачивались в соляной воде.
- Исправлена ошибка, из-за которой воспроизводился звук "войти в воду" при перемещении между соленой и пресной водой - это исправит раздражающий шум рыбы в реках.
- Исправлена ошибка, из-за которой нахождение под водой в соленой воде имело другой эффект тумана и отсутствовало окружающие звуки.
- Исправлена ошибка, из-за которой соленая вода толкалась сильнее, чем пресная.
- И другие...
- Исправлен ряд случаев, когда бутерброды, супы или салаты не складывались, несмотря на то, что они были созданы в похожих/идентичных ситуациях.
- Исправлена ошибка, из-за которой в JEI отображалась всплывающая подсказка «Never Decay», что могло привести к путанице (#2560).
- Исправлена проблема совместимости, из-за которой модераторы делали странные вещи во время настройки вкладки творческого режима.
- Исправление конфликта с пачулями версий > 81.
- Исправлены некоторые опечатки в руководстве по полям.
- **Изменения в GTCEU:**
- Добавлена электроподстанция.
- Добавлена диаграмма рудных жил.
- Добавлена диаграмма жидких вен.
- Добавление страниц искусственного компаса для всех инструментов.
- Исправлена схема переработки руды.
- Исправление рецептов distillery.
- Исправление рецептов High Power Casing.
- Устранена проблема с производительностью при рендеринге элементов проводов и трубопроводов.
- Исправлена отсутствующая текстура covers.
- Исправлена ошибка, из-за которой empty/equal бочки нельзя было стакать(требуется разместить и разбить затронутые предметы с первого раза).
- Всегда включать кэш VBO для мульти-превью + добавить опцию конфигурации, чтобы отключить его.
### New Mods
- smoothboot
- rubidiumextra
- TFC AgedAlcohol
### Update mods
- embeddium 0.2.9 -> 0.2.10
- AmbientSounds_FORGE 5.3.4 -> 5.3.5
- TFCAstikorCarts 1.1.7.1 -> 1.1.7.2
- gregtech 1.0.15.a -> 1.0.16
- waterflasks 3.0.1 -> 3.0.2
- patchouli 81 -> 83
- terrafirmacraft 3.0.3 -> 3.1.0
- adAstra 1.15.4 -> 1.15.5
- curios 5.4.2 -> 5.4.3
- tfcambiental 3.0.0 -> 3.1.0
- treetap 0.1.0 -> 0.2.0
- craftPresence 2.2.4 -> 2.2.5
- ae2wtlib 15.1.3 -> 15.1.4
- ftb-essentials 2001.2.1 -> 2001.2.2
### Deleted mods
- almostunified

## [0.0.9] - 2023-11-21
### Changes
- Исправление и добавление квестов.
- Снова исправили ошибку с FTB.
### New Mods
- waterflasks
### Update mods
- terrafirmagreg 0.0.8 -> 0.0.9
- almostunified 0.7.1 -> 0.7.2

## [0.0.8] - 2023-11-21
### Changes
- Исправлено отображение версии сборки.
- MMC пакет мигрирован на Forge 47.2.6
- TFCAstikorCarts пока отключен, из-за краша при запуске на сервере, сообщено разработчику, если вы играете в локальных мирах, можете его включить.
- Небольшая кастомизаци меню паузы.
### New Mods
- FTBQuestsOptimizer
- TFC ambiental 

## [0.0.7] - 2023-11-20
### Changes
- Исправлено меню паузы.
- исправлено требование лицензии для создания пати.

## [0.0.6] - 2023-11-20
### Changes
- Теперь используется последний фордж 47.2.6 для запуска сборки.
- Исправлены рецепты связанные с тфк листами металла, теперь все они используют GT вариант пластин.
- Исправлен баг, когда каменные инстурменты копали быстрей металлических. Также исправлены некоторые проблемы с прочностью инструментов.
- При первом запуске игры, отображается пояснительный текст об пароле, потому что это пугало некоторых пользователей.
- Множественные изменения начальных рецептов GT.
- Частично добавлены стартовые квесты для TFC.
- Из-за смены мода на команды, исправлен баг, когда вас выкидывало из команды на сервере.
- Добавлен рецепт Mortar в центрифуге.
- Исправлен крафт Jacks.
- Исправлен металл у касситерита.
- Добавлен металл чалкопириту.
- Удалены бесполезные кнопки в меню паузы.
- Исправлен mmc пакет.
### Update mods
- AmbientSounds_FORGE 5.3.2 -> 5.3.4
- Placebo 8.5.6 -> 8.5.8
- TFCAstikorCarts 1.1.7 -> 1.1.7.1
- Kubejs 2001.6.3-build.83 -> 2001.6.4-build.95
- PuzzlesLib 8.1.8 -> 8.1.9
- Sophisticatedbackpacks 3.18.66.941 -> 3.18.68.952
- Sophisticatedcore 0.5.105.485 -> 0.5.107.496
- terrafirmagreg 0.0.3 -> 0.0.5
### New Mods
- InventorySorter
- FTBQuests
- FTBLibrary
- FTBRanks
- FTBTeams
- Item filters
- MoreRed
- AdAstra
- ComputerCraft
- Macaw's Mods for TerraFirmaCraft
- ToolBelt
- TerraFirmaShips
- Small Ships
- Defaultoptions
### Deleted mods
- Heracles
- Prometheus

## [0.0.5] - 2023-11-17
### Changes
- Исправлен баг, когда руда GT не могла быть вскопана киркой GT.
- Отключены достижения.
- TFC:
- Плющ больше не поддается лазанию, так как теперь это ползучее растение, а не лиана.
- Добавлено больше случайно выбранных моделей для размещенных палочек.
- Опавшие листья с хвойных деревьев теперь всегда будут коричневыми.
- Позвольте океаническим растениям размножаться в солончаках.
- Исправлена ошибка, из-за которой некоторые жидкости TFC оставались невидимыми.
- Исправлена ошибка, из-за которой мшистые камни показывали отсутствующую текстуру.
- Исправлена ошибка, из-за которой урон от метания копья был мал или равен нулю. Обновлена всплывающая подсказка.
- Исправлена ошибка, из-за которой полный блок опавших листьев не сразу превращался в блок листьев.
- Almost-unified:
- исправлена совместимость с GregTech Modern для правильной унификации выходных ингредиентов.
### Update mods
- TerraFirmaCraft 3.0.2 -> 3.0.3
- terrafirmagreg 0.0.2 -> 0.0.3
- CreativeCore 2.11.9 -> 2.11.10
- almostunified 0.7.0 -> 0.7.1

## [0.0.4] - 2023-11-17
### Changes
- Исправлен баг в металлургии. Не переплавляются мелкие куски металла.
- Исправлены не правильные значения уровня у металлов в ковке.
### New Mods
- astikorcarts
- Dynamic Lights Reforged
### Deleted mods
- starlight

## [0.0.3] - 2023-11-16
### Changes
- Исправление спавна в зиме.
- Отключен багануты скрипт Kubejs.

## [0.0.2] - 2023-11-16
### Changes
- Первая бета!
