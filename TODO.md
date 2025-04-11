Key: 
- ✔ - done, waiting for submit
- ⏳ - being worked on
- ❓ - optional/needs discussion
- Anything else - available!

# 0.9

## HIGH PRIORITY:
- Figure out what to do with Colds Grappler
	- Colds Grappler causes the modpack's Modrinth export to be broken because the mod cannot be redistributed.
	- Either try to contact the creator to add his mod in modrinth, or replace it with another mod.

## Field Guide & Quests
- ⏳ Quest overhaul (being worked on by nebby and tomtomtom)
	- Change the FirmaCiv spoke to General Transportation, add Immersive Aircraft onto it
	- Move the Hang glider quests to General Transportation, replace their position with the mining helmet.
	- Finish quest spoke: The Beneath
	- Finish quest spoke: GregTech
- Fix other field guide pages that are referring to missing recipes (they're listed in the log)
- Figure out how to link ftb quests to the field guide entries

## Mods & Recipes
- Early game create changes
	- ⏳ Add/integrate Create Horse Power, Create Vintage Improvements, Greate mods (being worked on by pyritie)
		- ⏳ Create Horse Power still needs configs
		- ✔ Vintage Improvements
		- ✔ Greate
	- Check/configure SU usage of everything else create related so it lines up with Greate's
	- Adjust costs of additions' alternator/motor to match greate's SU
	- Check LBB efficiency of creosote
- ❓ Give "Aged Corn Whiskey" and "Aged Rye Whisky" status effects when drank
- Something about milk curdling having circuit number conflicts?
- ❓ Add that mod that disables xp
- Increase the curving press' item size (so we can get rid of so much warning spam in the logs)

## Worldgen
- ❓ Make an "abandoned camp" structure to put in the upper areas of the nether? Put skeleton photo and spyglass in its loot table?
  
## Technical
- GT + TFC food expiration compat
	- check if the forge capabilities mixin solves this
- Akistor carts mixin is commented out, for the plows
- ⏳ Fix up the ores field guide generator tool (being worked on by nebby)
- Add that create movable blacklist tag to greg crates, see if it stops people being able to put them on contraptions
- ❓ Drinking cold water from your flask lowers your internal temp? Will need java code, gt comes with a 'liquid ice' fluid we could use

# Post-0.9
- Create 6
	- Check create 6 compatibility
		- Vintage improvements: no, but there's a fork which is
		- Framed blocks: yes
		- Greate: yes
	- Change greate's config to allow assemblers to make cables again
- Use mech press whenever Greate updates to let us do our own recipes for it
- Buff duration of the 5-day foods like sandwiches
- Add recipe for the infinite water cover
- Packer recipes to turn cobble into loose rocks

## Space
- Put carve tags onto your rock types so they get carved correctly
- Make a custom chunk extension for planets so we can use tfc's climate-dependent features
	- https://terrafirmacraft.github.io/Documentation/1.20.x/worldgen/decorators/#climate
- Tag prefix to auto generate bricks?
- Reskin the rockets to match the GT casing textures
- Caelum TFC mod? makes the sky look more interesting which is thematic, is it compatible with ad astra?
- Waypoints but retextured, is there a way to make it require "payment" like through a bucket of rocket fuel?
- Configure forgiving world to work with orbits
- Add the mod with trans-dimensional logistics?

### Mars
- Merge the cold + temperate biomes on mars and instead spread out the different forest tiers
- Come up with like 3 kinds of "trees" to replace vanilla ones, like dark oak + acacia = type 1, spruce + birch = type 2, etc
- Is it possible to have volcano features without the tfc:volcano_caldera? How does it work?
- Apparently mars regolith has a lot of perchlorate
- SHAI'HULUD
