# Changelog

## Unreleased
### Breaking changes
- The chemical reactor recipe for making Kaolinite Powder now uses circuit 3 @Pyritie
- The two chemical reactor recipes for Tetramethoxysilane now have circuits (1 and 2) (#2898) @Pyritie
- Toluene + Benzene = Biphenyl + Methane now uses circuit 1 (#2928) @Pyritie
- TFC Gurman changed its name and recipe IDs to TFC Gourmet. There will be conversion items, but not fluids, so drink all your lemonade and kvass before updating.
- The BTX line has been modified, with the Cracker now outputting the used Catalyser instead of the LCR
#### Energy Update
- Cetane Boosted Diesel's duration is buffed by 30%
- Diesel's duration is nerfed by 25%, but can now be crafted at ULV
- Added distillation recipe to get fuel from oil with the Vacuum Chamber
- Light Fuel isn't a fuel anymore (make Diesel with it!)
- High Octane Gasoline now requires an IV Energy Hatch
- Add Small Fission Reactor, Small Turbine Generator, and the Cooling Tower. You can now make power from Fission on Earth!
- BTX has been buffed by 10%, and also produces 12.5% more with each craft!
#### ULV changes
- The vacuum chamber requires a blue steel spring now, so the colored steel anvil can't be skipped
- The steel mechanical mixer can now only make weak red/blue steel dust, not regular (it can still make black steel dust though). The LV mixer can make normal red/blue steel dust
- Changed ULV hulls to needing lead plates instead of wood plates
- Adjusted a few other machine recipes slightly
- Deserts now contain oil spouts for heavy, raw, light, and normal oils
- Oilsands veins are now smaller across most of the world, except the huge ones have been moved to the desert
- Unhid and added a recipe for the kinetic bridge (#2881) @Pyritie
- High speed on a Belt Grinder now only requires 64 RPM instead of 128 RPM
- Added steam alloy smelter glass batch recipes (#2853) @Pyritie
#### LV changes
- Completely rearranged the quest chapter! Now it should be much less intimidating for new players
- Added Bakelite, a new early plastic used for Phenolic Boards and MV machine hulls (instead of wrought iron plates)
- Removed the other fiberboard that was previously used for phenolic boards
- Added some recipes to get Phenol and Methane in LV
- Added new ceramics required to craft Cupronickel Coils, made out of your recycled TFC blast furnace, Magnesia, and some resin
- Cupronickel coils now also need blue steel foil instead of bronze
- Polyethylene now requires an MV chemical reactor
- Added the Artisan Table to "knap" circuit boards and GT extruder and casting molds, replacing their crafting table recipes. @BlueBoat29 @Redeix
#### EV changes
- Added Radon to EV Superconductor so they are gated behind the Uranium Reactor
- Active Energy Transformer and Normal Laser Pipe are moved to EV behind the Uranium Reactor
- Change to Refrigerant Pellet, you now need the TerraFirmaGuard PA6 to run your first Plutonium Rods
- Added the Heat Battery - a new multiblock that stores heat from your fission coolant
- Rework of the Ostrum Linear Accelerator - it can now be expanded in height, requires heat from a Heat Battery to run and used for many new resources
- Every Fission Reactor recipe now outputs a depleted rod that you have to process to get the product from fission
- The depleted rod now has an average heat depending on the temperature of the fission reactor while it was in it. Every time the reactor goes on cooldown, it adds 10,000 heat to your rod
- RTM Coils were modified to require resources from Mars (from the martian trees) and Rockwool, but now you don't need them as early in EV
- Blocks (such as sand piles) in the Nuclear Turbine's chimney or turbine area will now just stop it from working instead of unforming the multiblock
#### IV changes
- Multi-Layer Insulated Shielding is now required for HSS-G coils.
#### Electric Greenhouse changes
- You can now use glass casings and trapdoors for the EGH floor. @Redeix
- Aquaponic multiblocks now only need half an amp to run. (#2950) @Redeix
- Base recipe duration has been reduced to 600/450/300 seconds. (#2950) @Redeix
- More circuit options for recipes that priorities seeds/saplings and recipes that prioritize leaves have been added. (#2950) @Redeix
- More plants have been added for production. @Redeix & @thederpysockdude123
- The EGH and the Pisciculture recipes now require 50% less energy
### Changes
- Added much more music to the different dimensions @Pyritie
- Vanadium magnetite is now usable as an iron ore for TFC purposes (#2834) @Pyritie
- Paracetamol now cures a small amount of the Radioactive condition, and RadAway now cures everything completely @Pyritie
- Glow ink now just requires a fluid solidifier and a ball mold, instead of whatever it was doing before @Pyritie
- TFC "pure" fertilisers are now all craftable and provide 100 fertiliser instead of 15 (#2884) @Coox1e
- Added shapeless recipes to convert any old stone dusts into their new equivalents (#2900) @Pyritie
- Added recipe to convert sedimentary carbonate stone dust into flux (#2862) @Pyritie
- Fixed the crucible capacity config on servers (#2899) @Pyritie
- Some volcanoes should now have much bigger amounts of lava underneath them, for more lava needs, but also infinite obsidian via the rock breaker has been removed. (Use a fluid solidifier instead) @Pyritie
- Added manual/automated sanding recipes for making smooth stone (#2876) @Pyritie
- Added deployer recipes for all the in-world block modification recipes (#2876) @Pyritie
- Added recipe to convert kaolin clay blocks back into kaolin clay (#2904) @Pyritie
- Axolotls now have genders @Pyritie
- Piglins can now spawn with crossbows @Pyritie
- Piglin brutes now always spawn with full armor and harder-hitting weapons @Pyritie
- Added quartzite as a mars stone type @Pyritie
- Added assembler recipe for framed cubes (#2889) @Coox1e
- Added a furnace recipe for dead grass to thatch (#2935) @Coox1e
- Added support for Bluemap (#2922) @trisjob
- Added mixer and barrel recipes for dye fluids (#2925, #2938) @OLOXpl
- Added recipes to convert leaves into leaf piles. (#2950) @Redeix
- Added a recipe to convert fruit leaf blocks into firmalife fruit leaf items. (#2950) @Redeix
- Added a recipe to turn leaf blocks into hedges. (#2950) @Redeix
- Added recipes to make krummholz. (#2950) @Redeix
- Added config file for Via Romana support. (#2950) @Redeix
- Backpack void upgrades are now cheaper @Pyritie
- All tools should now have TFC damage types (#2868) @Pyritie
- Added recipes for advanced GTCEu Terminals @TomPlop
- TFC magma blocks, lightblooms, and bulbkins now correctly have emissive textures @Pyritie
- Quivers can now also go in the belt curios slot (#2927) @Pyritie
### Bug fixes
- Fixed large miners not outputting crushed ore when mining Migmatite @Pyritie
- Fixed red granite ores never dropping poor or rich raw ores @Pyritie
- Fixed rosin leaves and saplings having tags the wrong way around (#2840) @TanJeeSchuan
- Fixed missing borax to flux recipe @Pyritie
- Fixed lavaproof blue steel boots not having armor resistances (#2872) @Paradalope
- Fixed the dye colors used to make Create Deco's bricks (#2859) @silllil
- Fixed the Electric Greenhouse outputting way less Chorus Fruit than before @Pyritie
- Fixed the hot ingot icons for Ostrum and Vanadium ingots looking inconsistent with the regular ingots (#2875) @RubenVerg
- Fixed pyrogallol and black and white film developer requiring too high of a heat on the pot recipe (#2909) @Pyritie
- Fixed not being able to fire scraping blade clay mold (#2905) @Pyritie
- Fixed stair and slab versions of road blocks not having speed bonuses (#2912) @Pyritie
- Fixed RNR roofs not having mineable tags, and blocked the stair/slab frame from Additional Placements (#2870) @Pyritie
- Fixed piglin brutes not dropping meat or bones @Pyritie
- Fixed not being able to put rings, wrench tips, screwdriver tips, buzzsaw blades, or wire cutter tips in a crucible (#2913) @Pyritie
- Fixed a concrete dupe (#2948) and some other stone-related recycling recipes @Pyritie
### Translation updates
- Chinese (simplified) @jmecn
- Russian @Petr211071 + @Nixieeunrare
- Spanish @NikoNeko17

## [0.11.18] - 23-01-2026
### Important notes
If you missed it, 0.11.17 was a Beta version with other important breaking changes. Be sure to [read it](https://github.com/TerraFirmaGreg-Team/Modpack-Modern/releases/tag/0.11.17) as well!
- OC has been fixed on the Pisciculture Fishery and Hydroponics Facility. You will have to break and replace the machine for the fix to take effect.
- The Saltpeter chemical reactor recipe is now on circuit 2, to avoid a conflict with Nitrous Oxide (#2826) @Pyritie
### Breaking changes we forgot to write last time
- Water wheels now *require* flowing water to work correctly. So you can't just put them in a lake, but you can make little flows off the side of it or use aqueducts and those should work. Other than that, they should have their same stress numbers as before.
#### Stone dusts and other rock-related changes
- Individual stone dusts for each rock type have been removed, instead being replaced with more general dusts based on rock composition. The centrifuging recipes have also been removed, though we plan on using these for something else later.
- Marble/chalk dust has been replaced with Carbonate Sedimentary dust in concrete-related recipes
- The Moon Sand in the Regolith Vapor recipe has been replaced with Asurine Dust (renewable via Rock Breaker)
- The Mars rock dusts in the Hexafluorosilic Acid recipe has been replaced with Ochrum Dust (renewable via Rock Breaker)
- Other recipe and tag unifications for consistency, like all cobbles should landslide, all slabs should be craftable the same way, etc
### Changes
- Fixed balancing issues with the Aquaponics Loop. @Redeix
- Mars log electric greenhouse recipes now output the same amount of logs as earth log recipes @Pyritie
- Geodes (in newly generated chunks) are now completely solid so they won't cause cave-ins any more @Pyritie
- Recolored the different oils so you can actually tell them apart visually @Pyritie
- The food meter's saturation level is now indicated by a gold outline instead of a red one, so it's less difficult to see (#2812) @TreyR9
- Changed some of the colors of Greate things to make the different tiers more visually distinct @Pyritie
- Buffed ore washing and ore maceration recipes so at least they aren't so awful compared to Greate's methods @Pyritie
- Added TFG's crops to the field guide's Wild Crops entry @Petr211071
- You can now drink concrete @Pyritie
### Bug fixes
- Fixed a config bug causing waves to deposit shells etc with 100% chance. @Mqrius
- Fixed a bug preventing the Pisciculture Fishery and Hydroponics Facility from overclocking. @Redeix
- Fixed not being able to make glass tubes out of glass dust (#2795) @thederpysockdude123
- Fixed roads losing their movement speed bonus (#2790) @Pyritie
- Fixed water wheels misbehaving again (#2791) @Pyritie
- Fixed not being able to cast steel or higher tier materials into ceramic molds (#2789, #2794) @Pyritie
- Fixed the Ad Astra airlock not counting as a cleanroom door (#2808) @thederpysockdude123
- Removed some leftover rock dust centrifuge recipes (#2804) @thederpysockdude123
- Fixed some mars plants self-destructing @Pyritie
- Fixed mossy cobblestone not collapsing @Pyritie
- Fixed welding not preserving forging bonuses (#2827) @Pyritie
### Translation updates
- Spanish @NikoNeko17
- Russian @Petr211071
- Chinese (simplified) @jmecn
- Japanese @sakura-gondra

## [0.11.17] - 20-01-2026
### Important note
- Due to a config file error, the automatic hourly backup has not been running since 0.11.15. So before you update make sure to make a copy of your world in case anything goes wrong! This is generally good advice but extra important right now.
### Breaking changes
- The steam thermal centrifuge now requires a maintenance hatch. It also now requires 480mB steam per tick instead of 64mb, equivalent to how much 8 LV thermal centrifuges would use. It also also now only takes 20 seconds instead of 30. It also also also now actually outputs byproducts like it was supposed to. @Pyritie
- Single block steam generators are now more expensive to craft, so there isn't such a huge gap between steam, gas, and combustion generators. @TomPlop
- A lot of backend code has been cleaned up and refactored, so there may be duplicate, missing, or incorrect recipes. If you find any, please report them in [our github](https://github.com/TerraFirmaGreg-Team/Modpack-Modern/issues)! @Pyritie
### Electric Greenhouse
- The Electric Greenhouse multiblock has completely changed. It's significantly shorter and slightly narrower too. You can still grow the same things in it, but it no longer has Perfect Overclocking. Instead, it's stronger in LV but starts getting weaker in HV+. @Redeix
- There's a new IV variant (Hydroponics Facility) which supports parallel hatches and can do any recipe on any planet. @Redeix
- Added a new Pisciculture Fishery to mid HV which, when properly looped, will improve the Electric Greenhouse further than just fertiliser. It also breeds fish! @Redeix
- Removed the single-block fishing machines
### Performance improvements
- Fixed the huge amount of lag from looking at lots of interconnected trees @Mqrius
- Fixed tree chopping also stripping nearby trees of all their leaves (note that this will only also apply to earth trees and newly generated Mars trees, old Mars trees will have the old behaviour) @Mqrius
- Fixed tree chopping not working on trees that had no leaves @Mqrius
- Fixed tree chopping working on player-placed logs (yes, this means you can't place logs to chop down many trees at once any more) @Mqrius
- Fixed a huge amount of lag from TFC Ambiental checking for nearby hot/cold sources @Mqrius
- Improved food stacking performance @Mqrius
### Changes
- Added tree index field guide entries for Earth and Mars (#2638) @Jeuvke
- Added drinkable effects field guide entry (#2676) @FlightingFalcon
- Ice slush is now drinkable, for a cooling effect (#2708) @Inceitious
- You can now use coal as bloomery fuel! Both the vanilla item as well as any of the raw coals (#2731) @Pyritie
- The crucible now holds 4608mB (32 ingots) instead of 4032mB (28 ingots) (#2634) @Pyritie
- Large gears can now be crafted in an anvil/mechanical press @Pyritie
- Added recipe to make tubes from volcanic glass batches (#2667) @Redeix
- Added cast iron to the rod, gear, and nugget molds (#2677) @Mqrius
- Added vinegar as an option for curdled milk in a gregtech mixer (#2675) @JeanRdSz
- Fallen leaves, leaf blocks, bio chaff, and plant balls now all count as compost greens (#2653) @Inceitious
- Added more pie charts to various ores and composite materials (#2640) @BlueBoat29
- Unified crafting recipes for all the different metal bars (#2641)
- Changed to a new UI mod that improves performance, let us know if it causes issues! (#2620) @trisjob
- Cut and paste and Copy and paste building gadgets have been moved from IV to EV (#2660) @thederpysockdude123
- The sandworm no longer spawns in the Superflat preset that's a big vanilla desert biome
- You can now also use mars water in gregtech and create boilers @Pyritie
- Changed the texture of out-of-season blood lilies so they're findable year-round @Pyritie
- Added alloy smelter recipes for jar lids (#2705) @thederpysockdude123
- Reduced the amount of ambient awoos at night, and crickets/cicadas now require grass plants instead of grass blocks. Rivers now have a louder water sound and lakes have a quieter one. (#2680) @Pyritie
- You can now use any wrench to remove the extruder molds from the curving press instead of just the create wrench @Pyritie
- Added wrapped locometal to gregtech facade blocks (#2726) @Pyritie
- Peat can now be turned into creosote @Pyritie
- Coke oven bricks now require mortar to craft @Pyritie
- Glowstone can now be quickly broken with a pickaxe/mining hammer @Pyritie
- Added some more knapping recipes for chalk items, improved the durability of others (#2753) @Pyritie
- Red elk now drop bladders rarely, and have increased meat drops when killed with a butchery knife (#2778) @Pyritie
- Vanilla ferns and large ferns now break into straw with a knife, so Beneath start is a bit less painful early on @Pyritie
- Added shapeless pressure plate to button recipes (#2740) @Pyritie
- Added some Beneath plants to the `#tfg:rubber_plants` tag (#2759) @Pyritie
- Cleaned up hanging sign recipes so they don't spam as much (#2733, #2771) @Inceitious
- Added recipes to change AE2 glass cables into covered/smart cables, and changed some recipes to require smart cables instead (#2756) @awfulworldkid
- Crop, tree tap, and beehive tooltips, and the climate tab, now show the accurate current temperature when in an oxygenated area @Mqrius
- Anthracite can now be used as boiler fuel with the same duration as Coke @Pyritie
- Added more grain options for soup (#2785) @Pyritie
- Added a mechanical mixer recipe for crafting sticky resin (#2693) @JeanRdSz
- Framed blocks that have been made "glowing" by right-clicking them with glowstone dust, now only emit a little bit of light @Pyritie
### Bug fixes
- Fixed not being able to craft Paracetamol or Rad-Away @Pyritie
- Fixed the missing dried fruit to yeast starter recipe (#2673) @Mqrius
- Fixed crash when disassembling a train with computercraft @Mqrius
- Water wheels now spin the correct direction in rivers (#2450) @zehmaria
- Water wheels now also work with flowing water from aqueducts, instead of requiring an adjacent source block @zehmaria
- Added locometal to the domum ornamentum whitelist (#2651) @thederpysockdude123
- Fixed the new venus bugs spawning on earth @Pyritie
- Fixed some inconsistent recipes with coal in coke ovens, and removed a duplicate recipe (#2688) @jurjen909
- Fixed the rendering of two-block tall crops in the electric greenhouse @Pyritie
- Fixed dry ice dropping nothing when broken (#2687) @Pyritie
- Fixed the TFC blast furnace on mars but for real this time @Pyritie
- Fixed bismuth bronze and black bronze extractor recipes being tiered at MV (#2684) @Inceitious
- Fixed fridge tooltip power usage (#2689) @Karo4a
- Fixed invar crucible alloying using the wrong amounts of iron and nickel @Pyritie
- Fixed inconsistent saturation values from cooked long pig filet (#2714) @Pyritie
- Fixed soaked paper in a helve hammer having a blow count of less than 1 for some anvils (#2655) @Pyritie
- Fixed casting of rods and gears for various metals @Pyritie
- Fixed a dupe with scraping knives (#2716) @Inceitious
- Fixed a rendering issue with the lunchboxes when held @Thomasx0
- Fixed the lunchbox eating particles so now they look like the food being eaten @Thomasx0
- Fixed the cooling lunchbox not stacking empty cells correctly (#2475) @Thomasx0
- Fixed the lunchboxes not removing the "cooling" trait when items were removed with the number keys @Thomasx0
- Digger helmet crafting now correctly consumes the cloth hat (#2770) @Inceitious
- Fixed an exploit with the schematicannon @Mqrius
- Fixed backup frequency config @Mqrius
### Translation updates
- Chinese (simplified) @jmecn
- Russian @Petr211071 + @Nixieeunrare + @Maxiffon
- Japanese @sakura-gondra
- Ukranian @MetEnBouldry

## [0.11.16] - 05-01-2026
### Changes
- Added new steam multiblocks for the alloy smelter, compressor, forge hammer, and thermal centrifuge @Pyritie
- Reduced the Y level that ad astra considers "space" so rocket launches are faster @Pyritie
- Reduced the amount of loot vases in the newer illages, and reduced how much loot you get from them @Pyritie
- Illages and the smaller mud brick ruins are now a little rarer, and the stone brick ruins are a little more common @Pyritie
- Magnesium Diboride now only requires an MV chem bath to cool, but the MV chem bath now also requires a little plastic to craft (#2575) @Pyritie
- Added an implosion compressor recipe for glowstone dust to glowstone blocks (#2581) @Xaligal
- Ad astra and Create Deco lamps are now half as expensive to craft (#2581) @Xaligal
- Added alloy blast smelter recipes for black bronze and bismuth bronze (#2581) @Xaligal
- The alloy blast smelter recipe for glowstone has been adjusted (#2581) @Xaligal
- Renamed Thorium (the non-isotope one) to Thorianite to better indicate that it's only an ore @Pyritie
- Added a way to get wax and latex in the steam age for those of you starting on mars @Pyritie
- Changed the Rover's step height from 1 block to 1.2 blocks (about 4 extra 'pixels') @Pyritie
- Fixed/improved behaviour of GregTech solar things on non-overworld dimensions, so rain in the overworld doesn't stop the solar array from working on the moon, and mars sandstorms affect solar things as well (#2140) @Pyritie
- Added missing recipes for some Steam 'n' Rails items, and changed the smokestacks to use cast iron instead of black steel (#2610) @thederpysockdude123
- Added missing recipes for new Hypertube redstone things (#2615) @Xtrial-01
- Recolored diamond GregTech things to match the color of the vanilla diamond item @Pyritie
- Buffed the HP of the Illager Beast @Pyritie
- Added a thermochemically treated hardwood dust -> soaked unrefined paper recipe to the helve hammer (#2621) @Pyritie
- Added Ad Astra's decorative blocks to Domum Ornamentum's whitelist (#2627) @thederpysockdude123
#### Hazard changes
- Added a new medical condition, Irradiated, caused by the Radioactive hazard which all radioactive things (including naquadria and neutronium) now have instead of Carcinogenic. It has the same symptoms/side effects as carcinogenic.
- Paracetamol now cures carcinogenic, and Rad-Away cures both carcinogenic and irradiated. This is because you encounter carcinogenic hazards much sooner than radioactive ones, so the only cure for radioactive being way in HV didn't make much sense. In order to change the effects of these pills, we had to make new items, so any existing ones won't have these changes, sorry.
- Weakly Poisonous is no longer permanent and heals over time like other conditions.
### Bug fixes
- Fixed missing crafting table recipes for greate gearboxes (#2577) @Pyritie
- Fixed crashing when attaching shafts to a steam engine (#2578, #2579) @Electrolyte220
- Fixed wrong small cogwheel rotation rendering @Electrolyte220
- Fixed citric acid food processor recipe producing nothing (#2588) @Pyritie
- Fixed not being able to use pickled eggs in sandwiches (#2551) @Pyritie
- Fixed how much aluminium silicate you get from mica, pollucite, and spodumene to more accurately reflect how much aluminium they have @Pyritie
- Fixed being able to put liquid metals into the new molds that didn't have a recipe @Pyritie
- Added some grain nutrition to oatmeal (#2469) @Pyritie
- Fixed hot-protection chestplates not fully protecting against GT hot ingots (#2598) @Pyritie
- Fixed hermetic sandstone's appearance so it looks similar to TFC's raw sandstone @Pyritie
- Fixed some issues with the food autostacking changes in a previous version (#2580) @Mqrius
- Fixed a crash with meal ingredient stacking on servers @Mqrius
- Fixed some translation inconsistencies in the field guide (#2606, #2607) @jmecn @Petr211071
- Fixed incorrect fluid tooltips for the silica glass bottle and iron flask (#2608) @JeanRdSz @Pyritie
- Removed some dough mixing bowl recipes that tried to output more than 5 ingredients because that's the mixing bowl's maximum (#2612) @Pyritie
- Fixed missing heat definition for soybeans (#2603) @Pyritie
- Fixed crafting bacon removing all the other food traits @Pyritie
- Fixed lamps costing 4x as much glass when crafted in an assembler as opposed to elsewhere (#2613) @Inceitious 
- Fixed some inconsistent ladder recipes (#2616) @Pyritie
### Translation updates
- Chinese (simplified) @jmecn
- Russian @Petr211071 @AlexUnder

## [0.11.15] - 31-12-2025
### Bug fixes
- Fixed Greate stress levels (#2564) @Pyritie
- Fixed crash when looking at steam engines while holding a shaft (#2565)

## [0.11.14] - 31-12-2025
### Changes
- Change energy acceptor to use a machine hull instead of a converter. (#2553) @thederpysockdude123
- Update ExtendedAE package name in InvTweaks exclusions. (#2556) @FakeDomi
- Pickled eggs can now be used in sandwiches (#2551) @Pyritie
- Changed small gear mold capacity from 288 to 144mb (#2544) @JeanRdSz
- Create Depots now count as forge insulation, so a basin can output directly onto one @Pyritie
### Mod updates
- New [Greate changelog](https://github.com/GreateBeyondTheHorizon/Greate/releases/tag/0.0.59)
- New [Firmalife changelog](https://github.com/eerussianguy/firmalife/releases/tag/v2.1.25)
### Bug fixes
- Fixed issue where the arc furnace was generating annealed copper nuggets out of nothing @BlueBoat29
- Fixed recipe conflict between Rimmed Blunt Bullet and 45-70 Bullet (#2545) @BlueBoat29
- Fixed cake recipes returning nothing in a food processor (#2558) @Pyritie
- Fixed a crash when generating chunks sometimes @Satherov
### Translation updates
- Chinese (simplified) @jmecn
- Chinese (traditional) @CrazyO9
- Russian @Petr211071

## [0.11.13] - 28-12-2025
### Breaking Changes
- The LCR recipe for BTX fuel now requires circuit 24, to fix a recipe conflict (#2515) @TomPlop
- Loose stones now compress into cobblestone (without any mortar) and vice versa. So if you're currently using gravel to store your loose stones, uncraft them before updating. (#809) @Pyritie
### Changes
- Added casting molds for small gears, nuggets, and rods (#2470) @glitchplaysgames714
- Added some new illages to the hot and dry, and cold and dry climates of the world! @MVG31
- Added some mossy cobblestone to the beneath @Pyritie
- Hardened non-TFC rocks are now craftable (#2447) @glitchplaysgames714
- Magma blocks are now hot to hold @Pyritie
- Added a recipe to craft old gregtech facades into ones with a new texture @Pyritie
- Fluid sources of alcohol and milks are no longer placeable, so you can't drink from them infinitely any more @bigtho80
- Added TFC scraping knives (#2494) @glitchplaysgames714
- Changed the ambient sounds in the Beneath, added some to the moon and mars @Pyritie
- Tweaked the ambient sounds in the overworld @Pyritie
- Apatite, Tricalcium phosphate, rock salt, potassium sulfate, and ammonium chloride dusts now count as crop fertiliser (#2501) @Xtrial-01
- Added quern recipes for gems into dust @Pyritie
- Added recipes for smoke bombs, pet treats, and disguise kits, and added swapper pearls to the loot tables of various endermen @Pyritie
- Added a little saltpeter to cassiterite veins @Pyritie
- Removed the cleanroom requirement for level emitters since they were also craftable in a crafting grid (#2529) @Jeuvke
- Overhauled photographic film development @Pyritie
- Lowered the temperature of gas fuels and their related gases/fluids @Pyritie
- Added drink effects to wines, ethanol, and methanol @Pyritie
### Bug fixes
- Fix for food stacking everywhere! @Mqrius
- Fixed the grappling hook crashing and sending you to the void if you use it while travelling between dimensions (#2514) @Mqrius
- Fixed some curving press tool head recipes being cheaper than intended (#2478) @Pyritie
- Fixed some bastion chests being empty @Pyritie
- Fixed overlapping durability numbers on the curio HUD (#2484) @glitchplaysgames714
- Fixed a potential crash involving the refrigerator @Redeix
- Fixed the evaporation tower requiring an input hatch even for recipes that don't have a fluid input @glitchplaysgames714
- Fixed loot tables for ore indicator buds @Pyritie
- Fixed the new gas fuels being usable on other planets (#2515) @TomPlop
- Fixed hot ingots melting packed ice into water sources @Mqrius
- Fixed inconsistent recipes for metal bars, now they all use the anvil or stonecutter. Also added recycling for them all @Pyritie
- Various quest fixes and improvements @thederpysockdude123
- Added a missing dependency that fixes the rnr roads' crazy acceleration @Pyritie
- Fixed not being able to use aged alcohols to make vinegar (#2519) @Pyritie
- Fix some forge fuels not having the right tag to actually be used as forge fuels @Pyritie
### Translation updates
- Chinese (simplified) @jmecn
- Ukranian @MetEnBouldry
- Spanish @NikoNeko17
- Turkish @MVG31

## [0.11.12] - 19-12-2025
### Changes
- Brick Wooden Form can now be used to make unfired clay and fire clay bricks at the same rate as knapping (#2461) @Pyritie
### Bug fixes
- Fixed missing blocks of coke @Pyritie
- Fixed some missing boiler recipes like charcoal blocks (#2463) @applenper
- Fixed vulcanized latex to raw rubber vacuumizer recipe being the wrong way around (#2464) @Mqrius
- Fixed a crash when loading a chunk that had an old blaze burner with a straw @Pyritie
- Fixed incorrect coil tooltips on the nuclear fuel factory and liquefaction tower @Pyritie
- Fixed new rose quartz lens not being in the pink lens tag @Pyritie
### Translation updates
- Chinese (simplified) @jmecn

## [0.11.11] - 18-12-2025
### Breaking Changes
- Rose Quartz moved namespaces, so you'll have to convert all your old rose quartz items into the new ones. You'll need to explore new chunks to find new geodes with the correct ore blocks.
- The previous silicone rubber styrene butadiene rubber belts have been changed to a different item, so please break and recycle them before updating if you're using any.
- Cleaning meal bag foil packs is now done in the chem bath instead of the ore washer. @Pyritie
- Turning honey into sugar is now done in the extractor instead of the centrifuge. @Pyritie
- Syngas crafting in the Vacuum Chamber will now output into the chamber itself instead of the Basin, so it won't get mixed up with the creosote (#2378) @Pyritie
- Cleaned up the EMI pages for small and large boilers so they aren't flooded with furniture and other things. If you were using something "non-standard" to fuel your boilers, check if they're still valid. (#2421, #2415) @thederpysockdude123 @applenper
- Clay dust is no longer electrolyzable, but now you can get infinite clay blocks from a rock breaker @Pyritie
### Changes
- Added BTX fuel, a new EV-tier gas fuel to replace nitrobenzene. (#2416) @TomPlop
- Primitive illagers will no longer endlessly respawn. Instead, now they only spawn as "structures", so once you kill them they will never return. @Pyritie
#### Hot or Not
- Added "too cold to handle" and "too light to handle" for cold things and lighter-than-air things. Uses the same mechanic as tongs. Lighter-than-air things can also be negated with something Very Heavy in your inventory, and all effects (including "too hot to handle") are negated by super tanks/chests and cells, but *not* drums or buckets. Check the `#tfg:hot_protection_equipment`, `#tfg:cold_protection_equipment`, and `#tfg:floating_protection_equipment` tags for equipment that makes you immune to these effects. The equipment also protects against pipes! @Pyritie
- GregTech hot ingots are also now properly included in the "too hot to handle" system so the same protection applies @Pyritie
- Added machine recipes for crafting tongs @Pyritie
- All baby animals and more "medium" size animals can now be picked up (#2398) @Pyritie
#### Medical Hazards
- Added visual debuff effects for all medical conditions, so you're immediately notified when carrying something hazardous instead of wondering why you have Hunger II. They don't do anything by themselves, they're just a much more visible way of checking your conditions. @Pyritie
- Early `#tfg:medicines` can now also cure medical conditions! Did you think they wouldn't come with side effects? @Pyritie
- The medicines have also been rebalanced, so some of the stronger ones come with a downside, while the weaker ones have a stronger cure effect.
- The medical condition effect that previously instantly killed you (which did not spawn a corpse) now gives you Wither III instead. @Pyritie
#### Other
- Added two more early game mechanical belts, and rubber+ belts are also now more expensive. @Pyritie @Epicificator
- Doubled the durability of all space suits @Pyritie
- Added a way to convert between vinegar and acetic acid (#2386) @Epicificator
- Added a renderer to the electric greenhouse, so now you can visually see your crops grow! @RubenVerg
- Added some distant horizons config options, for those who want to use it (#2406) @Mqrius
- More animals now drop animal fat (#2367) @Pyritie
- Nerfed how much biomass and plant balls are produced from certain vanilla plants (#2361) @Pyritie
- Added some more ruined structures with a small bit of loot.
- Added some resource packs for TFC, disabled by default
- Lenses are now allowed on tool racks (#2434) @thederpysockdude123
- The Active Transformer multiblock is now craftable at EV, with a new texture and casings. (#2424) @BlueBoat29
- Renamed AE2 Sky Stone to Suevite @Pyritie
- Removed the shapeless crafting recipe for colored concrete powder, added an instant barrel recipe to turn it into solid concrete @Pyritie
- GregTech mining machines now replace mined ores with the correct type of cobble, instead of rhyolite or vanilla cobble @Pyritie
### Bug fixes
- Fixed aged sake, vodka, and whiskey losing their buff effects, but for real this time @Pyritie
- Fixed fries and cheese curds not being able to be put on burgers. @Redeix
- Fixed sliced brinza missing the proper cheese tags. @Redeix
- Fixed pyroxenite and keratophyre bricks crafting 1 instead of 4 (#2373) @Pyritie
- Fixed some issues with quest text and items (#2384, #2386, #2435) @Mqrius @thederpysockdude123
- Fixed some tag issues with foods (#2405) @thederpysockdude123
- Fixed treated wooden planks from being excluded in the Domum Ornamentum and Facade whitelists (#2404) @thederpysockdude123
- Fixed a recipe conflict for boiled and fried eggs (#2407) @Mqrius
- Fixed a recipe conflict blocking the crafting of silicone rubber (#2387) @Mqrius
- Fixed the backpack and QuarkTech helmet auto-feeding from feeding you while you're downed @Mqrius
- Fixed drills taking way more damage when mining than intended (#2419, #2428) @Mqrius
- Fixed Ostrum Casing not having a recipe (#2363) @FlightingFalcon
- Fixed warped trees not growing on normal mars dirt @Pyritie
- Fixed missing block names for some of the variations of non-earth stones @Pyritie
- Fixed being able to turn bismuth and black bronze drums into regular bronze drums (#2436) @Jeuvke
- Fixed a recipe conflict with stone plates (#2433) @Pyritie
- Fixed concrete pouring consuming your fluid container if you use anything other than a bucket to pour @Mqrius
- Fixed large amounts of TPS lag when pouring huge areas of concrete at once @Therighthon
### Translation updates
- Chinese (simplified) @jmecn
- Japanese @sakura-gondra
- Russian @Petr211071

## [0.11.10] - 9-12-2025
### Breaking Changes
- Butyraldehyde in a chemical reactor now uses circuit 5 instead of 1 to avoid a conflict with Methanol @Pyritie
### Other Changes
- Added recipes for create's shadow and radiant casings (#2256) @Ujhik
- Some small quest and field guide additions and fixes (#2348, #2356) @Pyritie @jmecn
- Adjusted the spawn weights of primitive illagers @Pyritie
### Bug fixes
- Fixed a crash on boot on some linux systems (#2347, #2355) @Redeix @mgsmyrk
- Fixed missing recipes for many fluid and item pipes (#2359) @Pyritie
- Fixed missing cleanroom tags for the ad astra 3x3 doors, so now you can *actually* use them in a cleanroom @Pyritie
- Fixed aged sake, vodka, and whiskey losing their buff effects @Pyritie
- Fixed some inconsistencies with loose rocks into bricks (#2353) @Pyritie
- Fixed a tag issue with some purified ores and Create's crushed ore tag (#2339) @Pyritie
### Translation updates
- Chinese (simplified) @jmecn
- Japanese @sakura-gondra

## [0.11.9] - 7-12-2025
### Breaking Changes
#### Beginning of the Power Update
- Syngas is now available as a ULV/LV gas fuel - can be crafted from Charcoal and Creosote in a Brewery or Vacuum Chamber.
- The Coal Liquefaction Tower is a new multiblock (craftable at MV) that you can use to make Reformate Gas. It has the same coildiscounts as the Cracker, and can be boosted with hydrogen.
- Reformate Gas is the new gas Fuel starting at MV, with better yields and recipe loops at HV.
- Many quests were updated to explain these changes.
#### Update on Fission
- The Nuclear Steam Turbine has now a baseline power production of 8192 EU/t. What this means is that you now need half as many turbines as before.
- Thorium Fuel Rods got a boost of 50% steam production, so early Mars should be a bit easier.
- Heat Exchanger can now run Radioactive Steam without Ammonium Formate. If you crave for power and don’t mind losing some materials for the Nano Circuit, this is a good deal
- Massive change for steam yield. You now produce 160x more steam, but its yield is 160x less good (so nothing changes power-wise, but now you have to deal with pipe throughput)
#### Other
- All dynamo hatches on Large Turbines now void power when they are full. Be sure to control your turbines with some redstone when your batteries are full!
- The tungsten processing line has been updated to now properly loop and balance all of its intermediates. The actual processes haven't changed, just the numbers, so you shouldn't have to change your setup much. It now also outputs a little extra oxygen instead of sodium (#2267) @SpicyNoodle5 @TomPlop
- Removed black/red/blue arc furnace dust to ingot recipes, but changed the EBF recipes to MV (#2306) @applenper @Pyritie
### Mod updates
- Added TFC Gurman, which adds even more food and drink
- Primitive Creatures has fixed its spawning of Huntmasters
- New GregTech updates, both [7.3.0](https://github.com/GregTechCEu/GregTech-Modern/releases/tag/v7.3.0-1.20.1) and [7.4.0](https://github.com/GregTechCEu/GregTech-Modern/releases/tag/v7.4.0-1.20.1). TL;DR:
    - You can use screwdrivers on drums again
    - Diluted hydrochloric acid distillation circuits have been swapped, so now it's consistent with diluted sulfuric acid
    - Large rebalancing of small and large boiler fuel. Generally speaking, small boilers are worse while large ones are better, and solid fuels are now better and liquids are worse, but if you're putting all your coke oven output into a large bronze boiler, your rates should be mostly the same as before. Blaze burner liquid fuels have been adjusted to these new values as well.
### Other Changes
- Many TACZ balance changes, found [here](https://github.com/TerraFirmaGreg-Team/Modpack-Modern/blob/dev/tacz/TACZ_CHANGELOG.md) @BlueBoat29
- Add shapeless recipes for ae2 p2p clearing (#2234) @SpicyNoodle5
- Added assembler, smelting and heating recipes for firmalife ovens (#2220) @SpicyNoodle5
- Raised player-burning fluid threshold from 370K to 1300K @Redeix
- Added partial unification to the gtceu Wax material @Redeix
- Mars endermen can no longer pick up the wrong kind of warped/crimson sapling, and the correct kind has been added to their loot tables (#2240)
- Cleanrooms now allow 9 door "blocks", so you can use a 3x3 Ad Astra door (#2074) @ko-lja
- Added recycling for astikor carts (#2227) @Pyritie
- Moved Soph Backpack pickup to ULV, adv pickup to MV and magnet to MV @CrashAndSideburns
- Oilsands dust can now be centrifuged in the mechanical centrifuge @Pyritie
- All oils (both the petrochem kind and the cooking kind) can now be used to fuel small boilers as well @Pyritie
- Reduced the cost of the ME Ingredient Buffer @Pyritie
- Renamed Blubber to Animal Fat and added it to the drop tables of more animals (pigs drop a fair bit, orcas drop a ton). You can extract it into Tallow and now also use it for biodiesel! @applenper @Pyritie
- Glass bottles and ceramic jugs can now hold the same fluids as wooden barrels, buckets, etc @Pyritie
- Added fluid/item capacity tooltips to many fluid/item containers @Pyritie
- Spring water is now drinkable (it also heats you up a little) @Pyritie
- The reinforced hang glider has been buffed, is now craftable as soon as you get aluminium, and is also much cheaper to repair (#2314) @jeuvke
- You can now also use bismuth bronze and black bronze crates in recipes that previously required a normal bronze crate (#2328) @jeuvke
- Freeze dried food no longer has any hydration (#2325) @mqrius
- Added a mechanical crafting recipe for the Paving Cart @Pyritie
### Bug fixes
- Fixed the horse crank not working at all @Pyritie
- Fixed brown gravy recipe @Redeix
- Fixed instant mac recipe requiring less cardboard than it gives back @Redeix
- Fixed Ad Astra moon cheese nutrition values being inconsistent @Redeix
- Fixed some quest typos @Pyritie @mqrius
- Fixed duplicate bed dyeing recipe (#2229) @Pyritie
- Fixed Basic Hermetic Casing missing a mineable tag and loot table (#2221) @Pyritie
- Fixed some inconsistencies with gravel to sand recipe tiers (#2292) @Pyritie
- Fixed the thorium-based glowing ink recipe (#2294) @Pyritie
- Fixes crafting table output amount for salsa compared to the food processor (#2295) @Pyritie
- Added missing food processor recipe for cocoa butter @Pyritie
- Fixed recipe conflict with Epichlorohydrin and Sodium Hypochlorite (#2287) @Pyritie
- Fixed summoned pet endermen not being able to survive in space or other planets @Pyritie
- Fixed some recipe imbalances with trimethyl borate and related recipes @Pyritie
- Fixed not being able to feed meat to the Cruncher (#2305) @Pyritie
- Hopefully fixed rockets without a pilot getting stuck and not exploding? (#2137) @Pyritie
- Fixed some missing blocks from the GT facade whitelist (#2299) @MoltonMontro
- Changed the texture of the ME Stocking Input Bus + Hatch to match the hull used to craft them @Pyritie
- Fixed warped/crimson trees only growing on mars mycelium and not mars dirt @Pyritie
- Fixed a few missing crafting recipes for bricks in the assembler (#2333) @Pyritie
- Fixed a recycling dupe with the maintenace hatch (#2321) @Pyritie
### Translation updates
- Chinese (simplified) @jmecn
- Japanese @sakura-gondra
- Russian @Petr211071

## [0.11.8] - 19-11-2025
### Changes
- Added a paving cart for automating RNR roads. (#2144) @Redeix
- Non-TFC armors now have TFC resistances (#2157) @theMegaTech
- Regular Blue Steel Boots now also count towards the lavaproof diving set (#2155) @theMegaTech
- Added more field guide links to the stone age quest chapter (#2147) @FlightingFalcon
- Added an AE2-linked TACZ ammo box @BlueBoat29
- Buffed hiking boots durability by 250%, also changed horseshoe durability and stats to match @Pyritie
- Added more automatable mud brick recipes, ensured all dirt types are renewable (#2169) @Pyritie
- Added a sky stone block duping recipe to the rock breaker (#2159) @Pyritie
- Improved the tag for cleanroom doors @Pyritie
- The food oven and refrigerator now emit heat (for TFC ambiental) @Pyritie
- Dioxygen Difluoride is now cryogenic and acidic @Pyritie
- Added tfc torches and lamps to Not Enough Animations' config, so now you hold them properly @Coopmore
- Barrel Staves (for Kegs) now just use bronze screws instead of wrought iron plates @Pyritie
- Added GTMolDraw with custom TFG compat @BlueBoat29 (special thanks to Maddie for her help)
- Saplings and fruit bushes can now enter the seed pouch. (#2202) @Redeix
- Mars sandstorms are now sandier @Pyritie
- Added an alternative recipe for item frames using cloth @Pyritie
- Added a little more silver to surface bismuth veins, moved apatite veins closer to the surface and with deeper indicators, increased deep sapphire veins' max Y level and added a rock type, and also added a rock type to deep magnetite's veins (all overworld only) @Pyritie
- Buffed the amount of roof tiles from clay knapping (#2178) @Pyritie
- Added sugar cookies, toasts, jams, pickled eggs, and butter to the meal bag tag, removed banana splits (#2129) @Pyritie
- Added lots of new food items including fries, burgers, oatmeal, mac and cheese, poutine, and more! @Redeix
- Added processed spices for firmalife spice crops (except cinnamon). @Redeix
- Reduced base food oven recipe time from 300 to 200 ticks @Redeix
- Made Nitrocellulose less annoying to craft @BlueBoat29
- Added tags to platinum group ores @Mqrius
- Moved the Flintlock from Steel --> Wrought Iron @BlueBoat29
- Added better tooltips for custom machines @Xtrial-01
### Bug fixes
- Fixed TFC bug where paths and roads can collapse on themselves when creating a staircase shape. (#2144) @Redeix
- Fixed the HV aqueous accumulator water recipe so the amount of water can actually fit in the HV machine @Pyritie
- Fixed not being able to make brown universal compost with a mortar if the item is both green and brown (#2091) @Pyritie
- Fixed soup made in the food processor not returning bowls when eaten (#2053) @Pyritie
- Fixed missing helve hammer recipe for silver plates (#2183) @Pyritie
- Fixed some typos in gun/attachment names and descriptions @Jeuvke
- Fixed ocean moai spawning underwater sometimes 🗿 @Pyritie
- Added missing recipes for the Advanced and Electronic Gyroscope @Pyritie
- Fixed several quest typos and errors (#2151, #2176, #2177) @Pyritie
- Fixed not being able to put Seed Oil in a Mixing Bowl (#2203) @slavek
- Added missing items to the smooth stone slabs tag, cleaned up armor stand recipes (#2197) @Pyritie
- Fixed milk curd recipes in food processor outputting rotten curds. (#2209) @Redeix
- Fixed missing nixtamal food processor recipes. @Redeix
- Fixed missing lang string from loading screen. @Redeix
- Fixed some mismatched lang strings between ja_jp and en_us @BlueBoat29 @jmecn
- Fixed Railgun Ammo size @TomPlop
- Fixed bread and cheese ignoring being rotten @theMegaTech
### Translation updates
- Russian @DI-GitH + @nineex + @alexart2006
- Brazilian Portuguese @Redeix
- Chinese (simplified) @jmecn
- Ukranian @MetEnBouldry
- Japanese @sakura-gondra
- Turkish @MVG31

## [0.11.7] - 30-10-2025
### Changes
- Wild canola and flax are now more rare (#2125) @BlueBoat29
- Maple and birch syrup tapping is now more temperature tolerand and works any time of year (#2126) @theMegaTech
### Bug fixes
- Fixed an issue with the fission reactor causing chunkbans @Vazde
- Fixed an issue with the third-person-shooting mod not working correctly on servers sometimes @Xikaro
- Fixed fission components not being registered properly @Pyritie

## [0.11.6] - 29-10-2025
### Mod updates
- New GregTech patch, check the patch notes [here](https://github.com/GregTechCEu/GregTech-Modern/releases/tag/v7.2.1-1.20.1)
- Changed to a different third-person mod that supports TACZ better
- Aged Alcohols added their own effects for aged corn whiskey and rye whiskey (replacing our own), and now also has aged mead
### Changes
- Changed TACZ ammo stack sizes to be more normal @BlueBoat29 
- Buffed how far each Soarer "flap" can glide for @Pyritie
- Polycaprolactam string and phantom string now use circuit 3 in a wiremill instead of 0 (#2096) @SverhRazum-Nah
- Added flax bundles for much faster scraping (#2080) @Xaligal
- Added more mineable tags to cobwebs since swords don't want to work @Pyritie
- Added TACZ Ammo Boxes @BlueBoat29
- Added TACZ Guns and Ammo Boxes to tool rack @BlueBoat29
- Overhauled the recycling recipes and added many more (#1576) @Pyritie
- Added an earlier way to make dough using a normal tfc ceramic/wood bowl @Pyritie
- Added ABS recipe for T2 Rocket Alloy @Xtrial-01
- Changed the color of Rhodium Plated Palladium to be more unique @BlueBoat29
- Changed the Ad Astra planet screen to reflect TFG @BlueBoat29 @Redeix
- Added assembler recipes for railgun buses (#2119) @Xtrial-01
- Changed Salvos to use Phenol instead of Aminophenol (#2119) @Xtrial-01
- The teleporting between the Beneath and the Overworld should now only replace collapsible blocks with air (instead of everything), and will give 30 sec of slow fall and fire protection @Pyritie
- Added tortilla chips, tomato sauce, salsa, and shredded cheese to the meal bag tag @Pyritie
- Glacian Rams now give more wool @BlueBoat29
- Rotor Holders now require an Assembler of the appropriate tier to be crafted (#2123) @TomPlop
- Lowered the craft time of Refrigerant Pellets until a better solution is finished (#2123) @TomPlop
- Lowered the craft time of ammonium tungstate dust (#2123) @TomPlop
### Bug fixes
- Fixed part of the tungsten processing loop giving way too much salt (#2095) @Redeix
- Fixed basic super tanks so you can now left/right click with them in GUIs like you can with the others (#2100) @jurrejelle
- Fixed sometimes crash on startup (#2098) @Pyritie
- Fixed some quest misinformation (#2097, #2119) @Pyritie, @jmecn, @Xtrial-01
- Fixed not being able to ride Soarers (#2082) @Pyritie
- Fixed Soarer "flap" GUI overlapping with the minimap @Pyritie
- Fixed aqueduct recipes (#2101) @vidal-adrien
- Fixed some AFC logs not having stripping recipes @Pyritie
- Fixed some issues related to AE2 blocking mode @ko-lja
- Fixed wild bulbkin plants not dropping bulbkin seeds @Pyritie
- Fixed graphite moderator frame interactions @BlueBoat29
- Fixed some casings not being mineable with a wrench (#2123) @TomPlop
### Translation updates
- Chinese (simplified) @jmecn
- Ukranian @MetEnBouldry
- Japanese @sakura-gondra

## [0.11.5] - 22-10-2025
- Fixed missing ComputerCraft in single player modpack, due to a bug in the latest pakku version

## [0.11.4] - 22-10-2025
### Major Changes
- Refrigerators now have a toggle for forcing food stacking, as a workaround for the food oven's output. It will stack everything down to the oldest expiring item, so be careful when using this! @Redeix
- Refrigerators can now also be connected to AE2 and Create Logistics, so you can pull out your food remotely. AE2 doesn't understand the food traits, however, so all your food will show as it does in EMI @Redeix
### Changes
- Finished EV quest line (#2069) @TomPlop
- Normalized ladder crafting outputs, reduced ladders and wood frame burn times @oosyrag
- Added beer battered dinosaur nuggets, made from real dinosaur and real beer @Pyritie
- Added create packages/jars back to JEI so you can use them in filters, and added a tag for all jars (#2044) @Nashy1232
- Slightly reduced spawn chance of illages and nerfed the amount of loot you get from them @Pyritie
- Rebalanced some of the moon/mars food nutrition/saturation values @Pyritie
- Added casting/extruder molds to tool racks @Pyritie
- Added sandstorms to mars @Zippity
- Massively buffed the density of Beneath naquadah veins until they get a proper home later @Pyritie
- Increased amount of pyrolusite and tantalite on mars @Pyritie
- Added new textures for the fission material holders, redstone ports, and fuel holders (#2073) @Redeix
- Refrigerators now have more inventory space per tier @Redeix
- Buffed the Tungsten Bismuth turbine rotor since it had worse stats than HSS-G which was available at a similar time (#2078) @TomPlop
### Bug fixes
- Fixed the interplanetary wireless card so it doesn't use a huge amount of power when just having it open @ko-lja
- Fixed Firmalife cellar shelves resetting food expiration @Redeix
- Added circuit numbers to the Formic Acid and Ammonium Chloride chemical reactor recipes @Pyritie
- Fixed inconsistent circuit numbers between CR and LCR for specific recipes (#2047) @Redeix
- Driverless rockets should now properly explode at world height limit instead of getting stuck @Pyritie
- Fix inconsistent emitter recipes (#2059) @SpicyNoodle5
- Removed inventory sorting from all Sacks n Such containers and Lunchboxes because they were causing weird stack sizes or voiding (#2018) @Pyritie
- Fixed train conductors suffocating on planets (#2055) @Pyritie
- Fixed firepit with pot and grill not raising the ambient temperature (#2002) @Pyritie
- Fixed a few recipes wanting missing items (#2012) @Pyritie
- Fixed inconsistency between the belt sander and lathe (#2022) @Pyritie
- Fixed double plates not stacking to 16 (#1952, #2051) @WIPocket
- Fixed some EV TACZ extended mags requiring the wrong kind of spring (#2065) @BlueBoat29
- Fixed warped, crimson, and glacian pressure plates using the wrong spring @Pyritie
### Translation updates
- Chinese (simplified) @jmecn
- Russian @DI-GitH
- French @Mattisso3500 
- Japanese @sakura-gondra

## [0.11.3] - 15-10-2025
### Major Changes
- Water wheels are now usable again in all (earth + beneath) biomes outside of rivers, *but* at a reduced efficiency @Pyritie
- Removed the soda ash recipe in the chemical reactor so you have to actually loop your tungsten line (#2037) @TomPlop
- Removed "raw" thorium metal items like ingots and plates - macerate them into dust before updating! @Pyritie
- Most fission line recipes are now locked to Mars @TomPlop
- Graphite Moderators now only require an EV arc furnace instead of an IV one @TomPlop
- Added an implosion compressor recipe to craft Dense Lead Plates much faster, albeit slightly less efficiently @TomPlop
- Heat Exchanger now requires Ostrum Iodide (#2040) @TomPlop
- Refrigerant Pellet now requires a little Radon @TomPlop
- Soarers and Surfers now require TFC familiarity to tame. Surfers were also replaced with a new TFG mob with the same name (look at the mod name in Jade), so only those are affected (and the old ones no longer spawn) @Pyritie
### Changes
- Added more EV chapter quest descriptions (#2037) @TomPlop
- Added dinosaur nest structures to mars @Pyritie
- Added more egg 🥚🍳🦖🦕 @Pyritie 
- Added ULV super tanks and super drums, and a 4A HV Dynamo Hatch for your Large Solar Array MK1 @Pyritie
- Added meats for the surfer, cruncher, stackatick and primitive creatures mobs, reworked the textures of the others (#2001, #2014) @Redeix
- Added a recipe for turning glass dust into lamp glass @Pyritie
- Added more recipe unification for quartz, certus quartz, create's minerals, fixed wall chiseling recipes (#2005) @vidal-adrien
- Added recipes to purify impure dusts in TFC Barrels (#2013) @dimethylene
- Removed raw rubber ingots because they kept confusing people @Pyritie
- Adjusted the colors of thorium and its isotopes to be similar to other radioactive materials @Pyritie
- Added lunch boxes and super chests/tanks to the railgun blacklist @Pyritie
- Added an assembler recipe for the chain conveyor (#2007) @Nashy1232
- Added Packer recipes for gravel to loose stone, adds shapeless cobble unpacking for non-TFC stone types (#2017) @vidal-adrien
- Added food processor recipe for pineapple fiber (#2029) @Nashy1232
- EV superconductors are no longer radioactive @Pyritie
### Bug fixes
- Fixed the interplanetary wireless card, though at the moment it doesn't use extra power @ko-lja
- Fixed a crash with the sandworm on servers (#2006) @BlueBoat29
- Fixed some recipes using the wrong keratophyre loose rock @Pyritie
- Fixed mechanical pumps grabbing tfc:river_water and not water, boilers rejoice! (#1797) @BlueBoat29
- Fixed some dusts having issues with AE2 recipes not completing successfully (#2032) @Pyritie
- Fixed loose pyroxenite rocks crafting into raw pyroxenite (#2017) @vidal-adrien
- Removed armor trimmable tag from the blue steel backtank @Pyritie
- Fixed some recipes showing an invalid glacio dimension icon @Pyritie
### Translation updates
- Chinese (simplified) @jmecn
- Russian @Dl-GitH
- Ukranian @MetEnBouldry

## [0.11.2] - 09-10-2025
### Changes
- Added a recipe for the ae2 auto craft card (#1997) @BlueBoat29
### Bug fixes
- Fixed all tfc:heating recipes being removed (#1987) @BlueBoat29
- Fixed the nuclear fuel factory multiblock not forming without a parallel hatch @TomPlop
### Translation updates
- Chinese (simplified) @jmecn

## [0.11.1] - 08-10-2025
### Changes
- Buffed how many stainless steel jar lids you can get per ingot from 16 to 48 @Pyritie
- Adjusted max HP of various moon and mars mobs @Pyritie
- Added quest text for the mars section of the space survival chapter @Pyritie
- Added field guide entries for mars crops and space animals @Pyritie
- Changed the amount of open space windmills require to be extremely more lenient, so they should always work in tree farms @Pyritie
- Soups are now craftable in the food processor (#1980) @Xaligal @Newlumberjack-sys
- Chocolate now melts into 144mB to work better with the ingot molds (#1977) @Xaligal @Newlumberjack-sys
- Added more sand to the mars desert @Pyritie
- Nerfed the hell out of mars quicksand @Pyritie
- All pressure plate crafting recipes now use circuit #3 (#1970) @Nashy1232
- Plutonium fuel rods now make exactly enough tritiated water for 9 nano wafers (#1978) @TomPlop
- Nerfed dry ice in the fission reactor (#1982) @TomPlop
- Added wind ambient sounds to mars @Pyritie
- Changed the minimum requirements for windmills so now they should still work even in overgrown tree farms @Pyritie
- Axolotls can now be picked up and carried @Pyritie
- Sniffer eggs can now be extracted for Cream @Pyritie
- Adjusted the HP of various mars + moon animals/mobs @Pyritie
- Reduced the fluorine cost of refrigerant pellets to 10% (#1983) @TomPlop
### Bug fixes
- Fixed linux crash from recipe IDs (#1962) @Xaligal @Pyritie
- Fixed Nuclear and Uranium Waste fluids being the wrong way around (#1978) @TomPlop
- Fixed missing texture for interplanetary wireless card (#1965, #1964) @Ko-lja
- Fixed glacian trees floating above ground @Pyritie
- Fixed tameable mars animals giving twice as much meat as they should @Pyritie
- Fixed pyroxenite and keratophyre rocks in various recipes like stone supports @Pyritie
- Fixed uncraftable nuclear fuel rods (#1982) @TomPlop
- Fixed Ostrum Linear Accelerator's multiblock assembly requirements (#1978) @TomPlop
- Fixed the pink bed glacian fur recipe so it now actually needs glacian fur @Pyritie
- Fixed the krypton in the iodine line so it's properly looped
- Fixed not being able to put Bulbkin pie in a firmalife oven @Xaligal
- Fixed missing heat data on baked potatoes @Xaligal
- Fixed being able to nest backpacks and frame packs inside each other infinitely @Xaligal
- Eaters are now actually hostile @Pyritie
### Translation updates
- Chinese (simplified) @jmecn

## [0.11.0] - 05-10-2025
- WARNING! If you're upgrading your world from 0.10 to 0.11, please read the upgrade guide [here](https://github.com/TerraFirmaGreg-Team/Modpack-Modern/wiki/%5BEN%5D-Upgrading-from-0.10-to-0.11). We do not recommend using Alpha versions for progression, but if you do, please make frequent backups!
### Mars
- Build an upgraded rocket and set off to Mars, a long awaited new dimension! You can get started in EV.
- We're still finishing it up, so a few things aren't done yet. Please check [our TODO list](https://github.com/TerraFirmaGreg-Team/Modpack-Modern/discussions/1744) before sending a bug report!
### EV changes
- Radon, Plutonium, the Microprocessor Mainframe and Nano Circuits are now locked behind Fission tech. You shouldn't need IV-tier circuits for anything before then, please let us know if we've missed something.
- Plutonium ore has been removed from the Beneath.
- Tungsten now has a more complicated refinement process! It's pretty straightforward if you just need a little of it, but it has a fully loopable recipe chain too!
- The Netherarium and Enderarium have been removed. You will be able to get all their important outputs from Mars. If you have any nether/ender air stored, distill it because those recipes will be going away soon too.
### Create changes
- Water wheels and windmills are now Greate tiered! Small water wheels are ULS (32 SU max), large water wheels and windmills are LS (128 SU max).
- Large water wheels are now more expensive to craft (and now need steel), but also generate 128 SU by themselves, so you don't need to double them up any more. All water wheels now require actual rivers to rotate at their full effectiveness. You can still use them in oceans and lakes at partial efficiency.
- Windmill Sail Frames no longer generate SU, but are cheaper to craft, only needing a single wrought iron rod per 8 frames. Windmills now also require large open spaces to work at full strength.
- Water wheels and windmills no longer work in orbit or on the moon, and water wheels no longer work in the Beneath.
- Blaze burners now only need regular steel to craft, so they are the best option if you want on-demand power generation anywhere you want. (#1889) @TreyR9
- Removed all passive sources of steam engine heating. @Pyritie
- Create Packagers/Jar Packagers are now significantly cheaper to craft (#1892) @airrice 
- Create Casings now need stripped logs instead of any logs @Pyritie
### AE2 changes
- Programmed Circuit Card has been removed because it was incompatible with the above additions. Making several machines for different circuits is intended, however if you need to do something like make a whole assembler for a single unique recipe, let us know and we can move the circuit numbers around.
- This is because we've moved to a new AE2 fork which comes with a [lot of new features](https://cdn.discordapp.com/attachments/1378754174983868416/1418355912095039570/image.png?ex=68e39321&is=68e241a1&hm=2846f781dbb856cee89a3f80ea3200e0e36840bb10305722b0304240ee1fe6b8&)! Shoutouts to [Cosmic Frontiers](https://www.curseforge.com/minecraft/modpacks/cosmic-frontiers) for their work on this.
- Added the Interplanetary Wireless Card, an infinite-range, cross-dimension upgrade for your wireless terminal but costs a lot of power to transfer items. Great for if you forgot something at home, but not useful for mass logistics.
- Universal Wireless Terminal is now obtainable at EV instead of IV
### Other changes
- Significantly increased durability of hiking boots, and now red steel ones have even more durability while blue steel ones increase your speed a little more (#1894) @Nashy1232
- EV-tier guns and ammo now require titanium or HSLA instead of tungsten for some crafts @BlueBoat29
- Improved placement of Illages so now they should never generate on top of a river, increased the number of mobs they have, and nerfed their loot a little @Pyritie
- You can now use honey to make jam in a food processor (#1921) @ShadowDimentio
- Your first MV circuit now needs a sequenced assembly instead of a crafting table recipe @Pyritie
- Added recipes for making liquid concrete (for supports) with barrels and mixing bowl @Pyritie
- Added a mixer recipe for bio diesel to get started @TomPlop
- Added more stone supports, aqueducts, and many other stone type fixes (#1919) @vidal-adrien
- Added sandpaper recipes for earlier gem rods @Pyritie
### Bug fixes
- Soup can no longer kill you from overheating @BlueBoat29
- Air Distributors now consume as much gas as they should, instead of significantly more (#1760) @Bumperdo09
- Fixed not being able to put igneous intrusive stones into the ore sack (#1893) @Nashy1232
- Fixed food processor jam recipes not accepting honey (#1896) @Xaligal
- Fixed stainless steel needles being consumed in sewing-type crafts (#1900) @Redeix
- Updated boiler minecart models and textures (#1900) @Redeix
- Fixed flux dupe using filled sea shells (#1903) @Redeix
- Fixed some more dupes with tool heads and whisks (#1576) @Pyritie
- Fixed missing recipe for raw to polished alabaster @Pyritie
- Fixed food processor not being able to cut Basil properly (#1934) @aldp2883
- Fixed food processor outputting only 1 shredded cheese instead of 4 (#1925) @aldp2883
- Fixed some more stack size issues with the assembly line (#1952)
### Translation updates
- Chinese (simplified) @jmecn
- Ukranian @MetEnBouldry

## [0.10.17] - 30-09-2025
### Bug fixes
- Fixed not being able to use some extruder molds in the Curving Press @Pyritie
- Fixed a rare crash from waterlogged rock spikes when generating chunks in the Beneath @Pyritie

## [0.10.16] - 23-09-2025
### Bug fixes
- Fix startup crash on linux servers @Pyritie
- Fix broken loot table for badlands enderman @Pyritie

## [0.10.15] - 23-09-2025
### Major Changes
- GregTech updated to 7.2.0, check [here](https://www.curseforge.com/minecraft/mc-mods/gregtechceu-modern/files/7022042) for the full list of changes, but here's a summary:
  - AoE tools like the mining hammer now work properly again
  - Now only multiblock machines turn themselves off if they don't have enough power, but this can be changed with a Machine Control Cover
  - Drums now require a Soft Mallet to turn on their auto-output instead of a Screwdriver
- New overworld structures with new enemies and loot! You can find them in cold and wet climates (#1836) @KrestenFM @Pyritie
- You can no longer light nether portals. Existing ones will still work. @Pyritie
- The old Create Lathe has been replaced with the Belt Grinder, which does exactly the same things as the lathe did, and is much easier to automate. Put your old lathe in a crafting grid to convert it. @Pyritie
### Changes
- Changed and unified stack sizes for many items (check [here](https://github.com/TerraFirmaGreg-Team/Modpack-Modern/pull/1778) for a full list) (#1778) @KonSola5
- Reduced the durability of wooden tongs @Pyritie
- Jute net is renamed to Burlap net and can now also be made from Flax (#1833) @Nashy1232
- Orbits now function as cleanrooms @BlueBoat29
- Added Create Deco catwalks to AE2 and GT Facades @Programmer3481
- Added locometal to GT Facades @Pyritie
- Added mossy, stairs, slabs, walls, and more to the non-TFC stone types (#1845) @vidal-adrien
- Added back vanilla stone and all its variants, craftable out of the stone dust you get from ore processing (#1845) @vidal-adrien
- Tweaked the moon worldgen a bit to add the new stone stuff @Pyritie
- Added rice, pasta, icecream, and chocolates to meal bags @Nashy1232 & @Redeix
- Added back minecart with furnace as a minecart with boiler, and now it can accept any forge fuel (#1860) @Nashy1232
- Adds EMI pages for Create Blaze Burner Fuels and for in-world block modifications @BlueBoat29
- Added recipes for the rest of Create's windows and window panes @Pyritie
- Halved how quickly the durability decreases on the various hiking/steel toe boots @Pyritie
- Added curving press/extruder recipes for TFC shields @Pyritie
- Added `#minecraft:flowers` block tags to flower crops @Redeix
- Added quests for the bauxite and gem slurry processing lines @Pyritie
- Mechanical Arms can now interact with Charcoal Forges, Crucibles, and Rotor Holders @BlueBoat29
### Bug fixes
- Ice soup now requires a bowl to craft, so it doesn't generate free bowls @Pyritie
- Fixed repairing an iron flask consuming the knife, also added some flask recipes with rubber instead of a bladder (#1826) @Pyritie
- Fixed not being able to use the small pipe extruder mold in the curving press (#1823) @Nashy1232
- Fixed some EMI rendering issues on 4x GUI scales and low screen resolutions (#1830) @Newlumberjack-sys
- Fixed not being able to melt mortars and crowbars (#1837) @Newlumberjack-sys
- Fixed problems with moss carpet into biomass (#1842) @Nashy1232
- Fixed lunch boxes giving 1.5-2x more saturation than intended (#1824) @Thomasx0
- Fixed Create Stock Ticker creating phantom copies of the electric lunchbox while open @Thomasx0
- Fixed inconsistencies with tags on sacks (#1820) @BlueBoat29
- Fixed the moon dust harvester not working with 4A or 16A energy hatches (#1874) @TomPlop
- Disabled being able to rotate the Vintage Improvements Lathe because it was causing crashes @Pyritie
- Fixed the Vintage Improvements Curving Press always using one item as an ingredient instead of the full amount @Pyritie
### Translation updates
- Chinese (simplified) @jmecn

## [0.10.14] - 14-09-2025
### Changes
- Wooden crates can now also be crafted with bronze screws @Pyritie
- The tape measure can now be put in your toolbelt (#1813) @Nashy1232
- Added machine processing for Flax (#1803) @BlueBoat29
- Added cobblestones to GT facade crafting @Nashy1232
- Every fluid that can go in wooden pipes can now also go in a wooden bucket and barrel (#1796) @Pyritie
### Bug fixes
- Fixed not downloading the FTB library of mods on server builds (#1811, #1801, #1812, #1411) @Xikaro
- Fixed ingot piles occasionally crashing on servers @Pyritie
- Fixed being able to get infinite lava by bucketing lava aqueducts @Pyritie
- More fixes for the Solar Boilers and TFC's rain system @FiNiTe-Weeb
- Fixed river water not washing ores (#1785)
- Added missing textures for placed Potin ingots/plates @Pyritie
- Fixed recipe conflict with music labels and paper blocks @Pyritie
- Added missing helve hammer recipes for lead, potin, cobalt, cobalt brass, and invar @Pyritie
- Fixed black bronze requiring an LS millstone to macerate (#1786) @Pyritie
- Fixed not being able to melt down certain tools (#1819) @Pyritie
### Translation updates
- Chinese (simplified) @jmecn
- Ukranian @MetEnBouldry
- Brazilian Portuguese @gifpxto

## [0.10.13] - 11-09-2025
### Changes
- Primitive Illagers are now on the hunt... @Pyritie
- Added Vat recipe for boiling salt water into salt (#1784) @TreyR9
- Power Substation is now available at EV (#1790) @TomPlop
- Increased the tier of EBF coil required for Desh (#1790) @TomPlop
- Quantum Eye now requires a Cryogenized Fluix Pearl (#1790) @TomPlop
- Moon ore vein tweaks @Pyritie
### Bug fixes
- Fixed issue with the modpack not loading on MacOS or certain Linux distros @Xikaro
- Fixed Solar Boilers not understanding TFC's variable rain system (#1093) @FiNiTe-Weeb
- Added missing recipes for TFC Macaw's barbed fences @Pyritie
- Fixed Field Generator recipes to follow the new path of pearl progression (#1790) @TomPlop
- Fixed some backpack upgrades to be consistent with their required circuits (#1790) @TomPlop
- Fixed Keratophyre not having a stone dust @Pyritie
### Translation updates
- Chinese (simplified) @jmecn
- Ukranian @MetEnBouldry

## [0.10.12] - 09-09-2025
### Changes
- Added cobblestone, gravel, polished stone, bricks, and chiseled bricks to all stone types that didn't have those stone types, along with some other unification (#1764) @vidal-adrien
- Nether brick is now crafted from Keratophyre (#1764) @vidal-adrien
### Bug fixes
- Fixed two instances of illegal lang exceptions causing errors on servers. @Redeix
- Fixed the field guide having no pages @Pyritie

## [0.10.11] - 08-09-2025
### Mods
- Reverted the change from Embeddium to Xenon, because it was causing more issues than it solved
- Added Sacks 'n' Such which has several new early game bags -- such as one that automatically picks up ore and can hold 512 per slot -- as well as some other things such as hiking boots and horseshoes
### Changes
- Fuelling blaze burners with liquids is now done directly instead of through straws (break and replace your blaze burners to update) @Ghoulcel
- Blaze burner liquid fuelling has been fully made consistent with GregTech power values (#1694) @Ghoulcel
- Create Factory Logistics Jars now hold 8000mB instead of 1000mB (#1707) @Ghoulcel
- Sewing Tables now use a knife instead of shears @BlueBoat29
- Create Logistics Jars now hold 8000 mB each instead of just 1000 mB (#1707) @Ghoulcel
- Added a way to keep your space suit with you on death, so you can more safely set your spawn on other planets (#1710) @BlueBoat29
- Added Flax as a cold-weather alternative to jute and a plant-based option for light colored cloth @BlueBoat29
- Sheet metal blocks are now made in a stonecutter and their yield increased (#1746) @SpicyNoodle5
- Added a small amount of silver to the Bismith (Surface) vein @Pyritie
- Added steel machine casings as an alternative to steel frames in the electric greenhouse @Redeix
- Added the ability for foods to affect the player's temperature @BlueBoat29
- EMI Batched rendering has been disabled by default. @TomPlop
- Automatic backups now happen hourly instead of daily (#1705) @Pyritie @Xikaro
- Advanced Peripherals' Redstone Integrator has been deprecated in favour of ComputerCraft's Redstone Relay (#1737) @Pyritie
- Speed up recipes for turning blocks into sand (#1720) @TomPlop
- Added a recipe for turning bone meal into white dye (#1757) @Pyritie
### Bug fixes
- Fixed tongs getting stuck in ovens, and now you can use them the same way you'd previously use a Peel @Pyritie
- Allowed powders, gears, plates, double plates, springs, and small springs to be heated (#1727) @Redeix
- Fixed rapeseed wild block model @BlueBoat29
- Fixed butchery knife not giving additional meat when used to kill an animal @Pyritie
- Prospector picks can be placed on tool racks and interact with most inventory's again. @Redeix
- Fixed some of the more obvious dupes while we wait for a GregTech to do them properly (#1576) @Pyritie
- Fixed not being able to use buzzsaws (and chainsaws) to cut things into lumber (#1685) @Pyritie
- Fixed recipe conflict with dimethyl carbonate, acetic acid, and formaldehyde (#1731) @Pyritie
- Fixed missing item in quartz sand centrifuging (#1717) @Pyritie
- Popped chorus fruit is now edible (#1722) @programmer3481
- Fixed missing sheet pile texture for cobalt, cobalt brass, aluminium silicate, invar, lead, red alloy, and tin alloy (#1713) @Pyritie
- Fixed missing collapse tags for smooth stone (#1732) @Pyritie
### Translation updates
- Chinese (simplified) @jmecn & @CN059
- Russian @Dl, @Kostabl, @Turikar42, & @But3r
- Ukranian @MetEnBouldry
- Brazilian Portuguese @gifpxto

## [0.10.10] - 23-08-2025
### Major changes
- Complete rework of prospector's picks. (#1594) @Redeix
- Removed the mod that was causing placed entities to sometimes not spawn
- Removed energy P2P (#1661) @TomPlop @BlueBoat29
- Removed GT bedrock miners, replaced with a new system for Moon infinites (#1569) @TomPlop
- Buffed Large Solar Panel MK I so now it has a consistent EV-generating recipe, but halved the output of ad astra solar panels on the moon @TomPlop @Pyritie
### Changes
- Rebalance Large Solar Array to make Mk2 circuit 2 viable, and buffed to LSA Mk3 circuit 2 (#1591) @TomPlop
- Added mechanical press recipes to weld weak steels @Pyritie
- Added backpacks, lunchboxes, and vessels to the toolbelt's blacklist @Pyritie
- Moon rabbits can eat chorus fruit now @Pyritie
- Added electric greenhouse recipes for mushrooms and bamboo (#1610) @Pyritie
- Increased amount of saplings that the electric greenhouse returns to be more in line with create-based tree farms @Pyritie
- Firmalife mixing bowls can now be placed on tool racks (#1623) @Pyritie
- Fixed recipe for pyroxenite button (again) (#1625) @Pyritie
- Refactored locometal recipes to use stonecutters, metal plated locometal is now also much cheaper (#1624) @Pyritie
- Increased the air capacity of space suits by 250% @Pyritie
- Converted custom tooltips to lang strings for translations (#1663) @Redeix
- Fixed grammar on death messages and added some new ones (#1642) @vdegans
- Added IV fridge, and IV-UV aqueous accumulator, food processor, food oven, and gas compressor machines @Pyritie
- Added machine recipes for the wrought iron grill @Pyritie
- Added recipes for redyeing/bleaching shipping containers (#1631) @Pyritie
- Adjusted recipes for ME Interface and Pattern Provider for consistency (#1569) @TomPlop
- Changed the cost of the ME Quantum Tunnel (#1569) @TomPlop
- Alabaster is now renewable via rock breaker @gustovafing
- Added a new ore vein to all dimensions for gypsum, calcite, borax, and fuller's earth @Pyritie
- Added some more moon ore veins for copper, tin, gold, aluminium.. nothing exciting @Pyritie
- Changed the recipe for the infinity construction wand @Pyritie
- Rebalanced the liquid blaze burner fuel recipes to be more in-line with GregTech generation @Pyritie
- Changed the recipes for the circuit boards required for the electron tube and vacuum tube, and phenolic circuit board @TomPlop
### Bug fixes
- Fixed moon mob spawning light levels, so now they need a light level of 0 instead of 11 (#1587) @NINAustinFett
- Fixed wrong output amount of mortaring soybean paste (#1607) @TomPlop
- Fixed duplicate mixer recipes for rose gold and sterling silver @Pyritie
- Added missing rose gold + sterling silver alloy smelter recipes (#1664) @Redeix
- Fixed mechanical mixers requiring an alloy that needed that tier of mixer @Pyritie
- Finally fixed all the issues with upgrading the toolbelt - now you can safely dye and undye, upgrade with and without tools inside it, etc (#368) @Pyritie
- Fixed a dupe with certus quartz @Pyritie
- Moved the golden apple recipe over to the food processor so it respects food expiry data @Pyritie
- Removed some remaining swine-steel crafting recipes @Pyritie
- Added missing hoe/scythe mineable tags from custom crops (#1622) @Pyritie
- Fixed some (but not all) model issues with the reflector block (#1664) @Redeix
- Fixed food processor outputs not stacking @gustovafing
- Fixed using the grappling hook on a ladder killing you (#106) @Zippity 
- Added more missing food processor recipes (#1632, #1638) @Pyritie
- Fixed a few stuck quests (#1667, #1666) @Wicpar
- Fixed inconsistent quern and macerator recipes for small tfc ores (#1672) @Pyritie
- Fixed recipe conflict with ceramic bricks and create deco colored bricks @Pyritie

## [0.10.9] - 10-08-2025
### Changes
- Heavily reduced how much power the electric refrigerators use @Pyritie
- Prevented the ad astra rockets from exploding, due to being unreliable on high latency servers @Pyritie
### Bug fixes
- Fixed kubejs errors on Linux machines. @Pyritie
- Fixed recipe conflict with conductor whistle and clockwork sniper. @Redeix
- Fixed the patchouli page explaining tfc alloys to use the new alloy ratios @Pyritie

## [0.10.8] - 10-08-2025
### Changes
- FTBQuests has been changed back to linear mode, hopefully to prevent future cases where the quests get stuck on something. Please send us feedback! (#1568) @TomPlop
- Added fanfare effects to the railgun launcher multiblock. (#1557) @Redeix
- Added new EMI tab to see ore vein info! Press 'R' on any ore item @gustovafing
- Added some chalk stick knapping recipes (#1562) @3ncanis
- The Vitrified Ender Pearl recipe now only accepts normal ender pearls (#1567) @TomPlop
- Buffed production of fish oil and biomass amounts, tweaked biodiesel recipe slightly @Pyritie
- Added compatibility between ad astra's 3x3 doors and GregTech wrenches (#1554) @Pyritie
- Added more icon sets for dusts and rods, so they look more visually distinct @Pyritie
- Slightly buffed the amount of latex from tree tapping @Pyritie
- Changed the structure of the Large Solar Arrays a little to include new reflector block. (#1575) @Redeix
### Bug fixes
- Fixed a broken model for the aqueous accumulator. (#1557) @Redeix
- Fixed broken recipes for the aqueous accumulator. @Pyritie
- Fixed log spam on the moon @Pyritie
- Fixed recipe collision with maize flour and cured maize @Pyritie
- Fixed Large Solar Array generating twice as much energy as expected with the "active" configuration (#1563) @TomPlop
- Fixed Electric Greenhouse log recipes so they're back to only needing half an amp of LV (#1564) @TomPlop
- Fixed missing quern recipes for softwood/hardwood pulp (#1561) @Pyritie
- Fixed duplicate red alloy mixing recipe (#1565) @Pyritie
- Fixed many raw ores missing smelting recipes (#1566) @Pyritie
- Fixed duplicate fluix block, preventing AE2 controllers from being crafted @Pyritie
- Fixed blaze burner straw consuming fuel 10x as fast as it should've (#1537) @dimethylene
- Fixed stonecutter and feeding backpack upgrades to show up in EMI (#1574) @SpicyNoodle5
- Fixed missing loot tables for some custom casings. (#1575) @Redeix
- Fixed very low block strengths for some custom casings. (#1575) @Redeix
- Fixed missing lang for basic photovoltaic cell. (#1575) @Redeixx

## [0.10.7] - 07-08-2025
- Fixed an issue with mod dependencies

## [0.10.6] - 07-08-2025
### Changes
- Added support for links from quests directly to field guide entries (#854) @Zippity
- Added a second EBF recipe but from LV furnaces @Pyritie
- Added GT machine recipes for maple/birch saps (#1524) @BlueBoat29
- Changed the TFC ratios of bronze and brass to match GregTech's (3:1 instead of 9:1) @Pyritie
- Added Potin, Cobalt, and Cobalt Brass as TFC metals @Pyritie
- Rebalanced all resin, latex, syrup for consistency (#1550) @TomPlop
### Bug fixes
- Fixed chain conveyors not connecting (#1520) @BlueBoat29
- Fixed a crash when opening a world with a railgun logistics monitor (#1526) @Redeix
- Fixed a crash when trying to spawn rabbits on the moon (#1528) @Pyritie
- Fixed duplicate Create/Greate recipes @Pyritie
- Prevented hammers, wrenches, and spades from being placed in chests to match other tools (#1538) @dimethylene
- Removed cinnabar to redstone recipe, which generated free resources (#1548) @SpicyNoodle5
### Known issues
- Some items have multiple, incorrect recycling recipes
- AoE GregTech tools don't display the right graphics or play the right sounds when breaking blocks, but they do function properly 

## [0.10.5] - 03-08-2025
### Major changes
- New major GregTech version! Read all about its new changes [here](https://github.com/GregTechCEu/GregTech-Modern/releases), and please report any issues you find! @gustovafing
- Added initial implementation of interplanetary logistics @gustovafing
### Known issues
- Some items have multiple, incorrect recycling recipes
- Steam machines use twice as much steam as they're supposed to
### Other changes
- Added universal compost items, for more efficient storage of compostables @Vazde @Redeix
- Vanilla moss blocks/carpet are now compostable @Pyritie
- Added missing mixer recipes for turning medium compost greens/browns into compost @Pyritie
- Adjusted recipe times of the VI machines @Pyritie
- Added recipe for backpack feeding upgrade (#1462) @Pyritie
- Greate shaft recipes are now shapeless (#1453) @Pyritie
- Added crafting table recipes for matches and the matchbox (#1449) @Pyritie
- Made "Etched" accessible earlier (#1473) @Nebby1999
- Added faster recipes for crafting dough until the food processor @Pyritie
- Black bronze now has a fluid pipe instead of an item pipe, so the drum has proper containment info @Pyritie
- Added recipes to create basic TFC alcohol in the food processor @Pyritie
- Added melting recipes for all the TFC metal powders @Pyritie
- Added mortar and pestle recipes for soybean and olive paste (#1480) @Pyritie
- Added concrete to the list of valid blocks for GT facades (#1487) @TheAshenWolf
- Removed Advanced Peripherals' Overpowered End Automata for allowing cheap interdimensional travel
- Removed Advanced Peripherals' Chunk Controller for allowing too much offline chunkloading, slowing down large servers
- Added Invar as a TFC-compatible metal (#1496) @Pyritie
- Added extruder/curving press recipes for Tuyeres (#1499) @Pyritie
- Added recipes for more train tracks @Pyritie
- Added a recipe to get Wood Gas for your food processor in LV (#1491) @Pyritie
- Regular thorium is also now weakly radioactive @Pyritie
- Added grape trellises to the list of plants harvestable by baskets (#1510) @Redeix
- Added full PBR material shader support for custom GT machines and casings (#1512) @Redeix
### Bug fixes
- Some bug fixes for the electric refrigerators @gustovafing
- Fixed not being able to craft fine wire in a coiling machine for materials that didn't also have normal wire @Pyritie
- Fixed cobalt brass and potin double plates not being obtainable until MV @Pyritie
- Fixed missing recipe for cooking fox meat @Pyritie
- Fixed ingot extruder mold recipe conflict @BlueBoat29
- Fixed wire cutter head extruder recipes missing a mold @Pyritie
- Possibly fixed the issue with airplanes and akistor carts not appearing when placing them (#1447) @Pyritie
- Fixed not being able to make sea water with TFC salt in a barrel (#1476) @Pyritie
- Fixed the electric greenhouse fruit tree recipes making more saplings instead of fruit (#1445) @Pyritie
- Fixed missing firmalife jam food processor recipes (#1478) @Pyritie
- Book and quill uses any black dye now (#1506) @Pyritie
- Button recipe unification (mostly) (#1461) @Pyritie
### Translation updates
- Ukranian @Furryks & @MetEnBouldry

## [0.10.4] - 25-07-2025
### Changes
- Added block interactions for mossy cobble (#1434) @Redeix
- Clipboards are now craftable earlier (#1432) @Pyritie
### Bug fixes
- Fixed key bindings being reverted every time you started the game (#1430)
- Pushed a patch to fix registry errors on Linux machines. If you are still receiving these errors please report it [here](https://github.com/TerraFirmaGreg-Team/Modpack-Modern/issues/1431) (#1434) @Redeix
- Added a temporary workaround for the blue steel diving suit not protecting from lava (#1361) @Pyritie
- Fixed a broken link in the papermaking field guide entry (#1426) @Pyritie
- Fixed small springs melting into twice as much as they should (#1435) @Pyritie
- Fixed framed item frames having the same crafting ratio as regular ones (#1427) @Pyritie
- Fixed a recipe conflict with kaolinite powder and fire clay in an alloy smelter @Pyritie
- Fixed some mixing bowl recipes with too many outputs @Pyritie

## [0.10.3] - 23-07-2025
### Changes
- Reduced duration of biodiesel recipes @Pyritie
- Changed some options of a performance mod, let us know if you find any weird issues! (#1410) @victordlp8
- Added mortar and pestel recipes for grain to flour @Pyritie
- Added in-world shift + right-click interactions for bricks. Greens can be used to turn bricks into mossy bricks, and a knife reverts it. Hammers make cracked bricks and mortar repairs them. (#1416) @Redeix
- Steam can now be pumped into Blaze Burners via the Straw (#1379) @Nyonyix
- Rearranged some anvil finish sequences to fit TFG convention @Zippity
- Replaced moon skeletons with Strays @Pyritie
- Replaced Beneath cave endermen with a different, passive one (same loot table though) @Pyritie
- Added sandpaper recipes for early game gems @Pyritie
- Unified observer recipes @Pyritie
### Bug fixes
- Fixed butchery knife crafting recipe (#1405) @Pyritie
- Fixed new extruder molds missing a tag to work with the curving press (#1412) @Forsuin
- Fixed contraptions no longer understanding TFC chests @Pyritie
- Fixed ice never melting in the overworld (#1408) @Pyritie
- Fixed small gears not having heat data @Zippity
- Fixed forgeable small gears not being meltable @Zippity
- Removed most empty tag recipes (#1420) @BlueBoat29
- Fixed Styrene Butadiene Belt recipe (#1421) @BlueBoat29
- Fixed deer dropping camelidae meat with a butchery knife @Pyritie
- Fixed gas pressurizer machine not having a GUI (#1425) @Pyritie
- Fixed recipe conflict with hoppers and ULV machine casings (#1423) @Pyritie

## [0.10.2] - 20-07-2025
### Changes
- Aged Corn Whiskey and Aged Rye Whiskey now have status effects (#1390) @EveProgrammingsockson 
### Bug fixes
- Fixed TFG-Core version mismatch @Xikaro
- Fixed hardwood logs macerating into softwood pulp (#1391) @Forsuin
- Fixed iron flask dupe (#1397) @Pyritie
- Fixed amethyst/nether quartz dupe (#1395) @Pyritie

## [0.10.1] - 19-07-2025
### Changes
- Added harvest baskets to pick fruit from fruit trees and berry bushes (#1338) @Redeix
- Added ice soup @Pyritie
- Gave plants tag to bushes so they can be used for other things (#1338) @Redeix
- Allowed elytra's to be repaired regardless of damage (#1338) @Redeix
- Increased maximum range of rope/elevator pulleys to 400 blocks (#1347) @Pyritie
- Added Tier 2 Insulation: Alkaline Earth Silicate @BlueBoat29
- Added tfc data to tacz guns and attachments (#1353) @Redeix
- Allowed "window" blocks and panes to be broken and picked up @BlueBoat29
- Updated title and loading screens to be more memory efficient and hopefully look better on other resolutions. (#1381) @Redeix
- Changed Firmalife greenhouses to no longer allow any doors/trapdoors/pipes (#1363) @BlueBoat29
- Thorium is now Pink (#1378) @Nebby1999
### Bug fixes
- Fixed yeast food processor conflict (#1310) @Redeix
- Fixed seed oil voiding in barrels (#1310) @Redeix
- Fixed inconsistent item sizes for sunflower_product and rapeseed_product (#1310) @Redeix
- Fixed Radiator Fan uncraftable recipe (#1302) @TomPlop
- Fixed Fluid Solidifier Recipe Conflict for Snow (#1295) @TomPlop
- Fixed Steel engine crafting by using the GT Rotor (#1290) @TomPlop
- Change Electrical Greenhouse to not consome the input but lower the seed output @TomPlop
- Fixed the Autoclave recipe to make Rose Quartz at MV @TomPlop
- Fixed bug with Extruder Mold crafting (#1298) @BlueBoat29
- Fixed texture issues found on some of the Extruder Mold textures @BlueBoat29
- Added default GUI Scale (#1313) @Redeix
- Added Kelp and Seaweed drying to electric oven (#1315) @BlueBoat29
- Added Nugget anvil recipe and 45-70 bullet assembler recipe @BlueBoat29 @Pyritie
- Fixed AFC wood stomping barrel recipes @BlueBoat29
- Fixed rotten cheese in moon quest reward @Pyritie
- Fixed create + greate configs (#1300) @HiddenOwlllll1 @Pyritie
- Fixed blue steel diving suit looking like netherite (#1293) @Pyritie
- Fixed anthracite not working with blaze burners @Pyritie
- Fixed baked potato recipe missing from oven (#1338) @Redeix
- Fixed sea water barrel recipes (#1338) @Redeix
- Fixed Quests #1318 #1291 and finish other quests related stuffs @TomPlop
- Integrated Ad Astra wood types with tfc (#1346) @Redeix
- Fixed duplicate pizza dough recipe @Pyritie
- Unified Pressure Plate Recipes among mods @BlueBoat29
- Fixed treated composite barrel recipe lang (#1353) @Redeix
- Fixed food processor jam recipe duping jars (#1353) @Redeix
- Fixed Ad Astra space suit quest mentioning oxygen instead of breathable gas (#1353) @Redeix
- Fixed flintlock not being craftable before LV (#1353) @Redeix
- Fixed the field guide not working for chinese players (#1356) @Pyritie
- Fixed glass blocks dropping with gem saw (#1367) @BlueBoat29
- Fixed Hv Quest TNT #1373 @TomPlop
- Fixed Smooth Stone #1380 @TomPlop

## [0.10.0] - 13.07.2025
- [!WARNING] If you're upgrading your world from 0.9 to 0.10, please read the upgrade guide [here](https://github.com/TerraFirmaGreg-Team/Modpack-Modern/wiki/%5BEN%5D-Upgrading-from-0.9-to-0.10). We do not recommend using Alpha versions for progression, but if you do, please make frequent backups!
### Major changes
- Build a rocket and blast off to the moon, a new dimension! You can get started in mid-HV.
- AE2 inscriber presses are now found on the moon instead of being craftable, and making various AE2 components is also significantly cheaper there. @TomPlop & @Pyritie
- Significant ore changes: certus quartz, raw aluminium, ilmenite, and some other mid-lategame materials have been moved from the overworld to the moon. Check your field guide for more information. @TomPlop
- A new system for interstellar item transport, made just for TerraFirmaGreg - new logistical problems to solve and automate. (Coming soon) @gustovafing
- New machines to properly automate food, along with proper compatibility between machines and TFC's food system, so you can't turn rotten grains into fresh bread any more. The electric greenhouse now also always outputs fresh food. @gustovafing & @Redeix
- New electric refrigerator with different tiers. You can craft the old one into this new one, but please take your food out of it before upgrading otherwise it will be lost! @gustovafing
- Added many new advanced food items including freeze-dried fruit, calorie paste, and meal bags. @Redeix
- Quest updates for all of the above @TomPlop @Redeix @Pyritie
- Main UI overhaul and curseforge branding updated @Redeix
- Added sunflowers and rapeseed to make Bio Diesel viable (#1248) @34y34y34y34y34y34y34y34y34y @Redeix
- Create 6 update! @AirRice @aidie8
- Added guns! @BlueBoat29
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
- Crushing wheels need a machine hull to craft now @Pyritie
- Anvil rod recipes are easier now (#1225) @Redeix
- Minecraft campfires now drop themselves (RIP lost bluesteel) (#1225) @Redeix
- Wooden multiblock tank increased to 1000000mB, and steel multiblock tank increased to 8000000mB @Redeix
- Added back the mechanical press, now it's basically a welding + forge hammer machine @Pyritie
- Changed the recipe to make the steam age plywood @kaylatheegg
- Added a recipe to craft Glow Ink Sacs @BlueBoat29
- New bedrock ore veins on the moon! Much better sources of infinite materials than stone dusts. @TomPlop
- Overhaul of the ore processing quest chapter @Pyritie
- Nanosuit and Quarktech armor have actual armor values now @Pyritie
- Firmalife greenhouses can now be totally automated with the new Sweeper and Picker! Just add redstone @eerussianguy
- Vats can now be opened and closed via redstone @eerussianguy
- New item replacement for ender eyes @Pyritie @Redeix
- Added more tools and components to the anvil and extruder molds (#898) @BlueBoat29 @Pyritie
- Added recipes for crafting all the cakes @Pyritie
- Removed infinite lava from hose-pulleys. Check out new biodiesel line for early power! (#1271) @Redeix 
### Bug fixes
- Fixed a mud hut structure that had deprecated zinc ingots @Pyritie
- The electric greenhouse now also allows loose rocks and plants inside, since TFC spawns them on any grass block @Pyritie
- Fixed double ingots not having a temperature (#1165) @Pyritie
- Removed a few recipes that had unobtainable greate-related materials @Pyritie
- Fixed the color of placed zinc ingots and plated blocks to match the material @Pyritie
- Fixed some other steel/colored steel items being extractable in LV (#1212) @Pyritie
- Fixed polished/cut migmatite recipe conflict (#1153) @JeanRdSz
- Fixed some bugs with the lunchbox (#1200) @Thomasx0
- Greate millstones/crushing wheels now give the correct amount of byproducts @Electrolyte220
- Greate bulk washing now correctly works on depots and belts @Electrolyte220
- Fixed dough consuming whole drums of yeast starter (#1203) @Pyritie
- Fixed missing recipes for some iron create deco things (#1240) @Pyritie
### Translations
- Ukranian @MetenBouldry
- Brazilian Portuguese @gifpxto & @lemonpillow5

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
- Changed LV chem reactor quest to work with any container of rubber instead of just a rubber bucket (#1116) @gustovafing
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
