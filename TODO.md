Key: 
- ✔ - done, waiting for submit
- ⏳ - being worked on
- ❓ - optional/needs discussion
- Anything else - available!

# 0.9
## Field Guide & Quests
- ⏳ Quest overhaul (being worked on by nebby and tomtomtom)
- Fix other field guide pages that are referring to missing recipes (they're listed in the log)

## Mods & Recipes
- ✔ Move over the create deco and locometal recipes from 0.7.19 PRs, update the lights to use glowstone dust? (done by redeix)
- ⏳ Add recipes for builders wands (being worked on by tomtomtom)
- Aleki roofs needs recipes and names changed to use tfc/afc woods - can't remove the mod because firmaciv depends on it
	- (or just hide them all)
- Recipes for advanced peripherals and computercraft
	- Most of computercraft seems to have vanished for some reason?
- Early game create changes
	- ⏳ Add/integrate Create Horse Power, Create Vintage Improvements, Greate mods (being worked on by pyritie)
	- Add recipes for create additions' alternator/motor, adjust costs to match greate's SU
	- Check LBB efficiency of creosote, think about removing lava
- Change framed button, pressure plates etc recipes to match other "normal" ones
- Give "Aged Corn Whiskey" and "Aged Rye Whisky" status effects when drank

## Worldgen
- ⏳ Redeix is working on some overworld structures
- Try out the python script to redo bastions? Would be a lot easier than doing them all manually again
	- Retexture the vanilla lantern
- ❓ Make an "abandoned camp" structure to put in the upper areas of the nether? Put skeleton photo and spyglass in its loot table?
  
## Technical
- GT + TFC food expiration compat
	- check if the forge capabilities mixin solves this
- ⏳ Fix up the ores field guide generator tool (being worked on by nebby)
- ⏳ Make Particular work with tfc's waters (spring water, sea water, river water) - https://github.com/Leclowndu93150/Particular/issues/6
- Add that create movable blacklist tag to greg crates, see if it stops people being able to put them on contraptions
- Do the ash pile block properly (they still float if you mine the block underneath them)
- ❓ Drinking cold water from your flask lowers your internal temp? Will need java code, gt comes with a 'liquid ice' fluid we could use

# Post-0.9
- Create 6
	- Check create 6 compatibility
		- Vintage improvements: no, but there's a fork which is
		- Framed blocks: yes
		- Greate: yes
- Add building gadgets

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
