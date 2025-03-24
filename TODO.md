# TO-DO LIST

## Gameplay
- Quest overhaul
- Make backpacks big enough to not go inside vessels - see registerTFCItemSize()
	- newer versions of sophisticated backpacks don't show up in jei for some reason?
- Field guide
	- Fix other field guide pages that are referring to missing recipes (they're listed in the log)
	- Is there a way to use pack.json or something to just hide pages entirely?
- Add insulation for GT armors and diving suits, increase durability of existing clothes
- Make our favourite ores hazardous again :)
- Early game create changes? not sure if 0.9 or post-0.9

## Mods
- Aleki roofs needs to be hidden, it only shows vanilla woods - can't remove it because the ships depends on it
- Recipes for advanced peripherals
- Add particular?
- Add recipes for chalk (nebby finished this)
- Add the one with trans-dimensional logistics? See how difficult it is to make a second "cannon" so we can have one reskin for the nether and one reskin for space
- Add that airplane tfg compat mod in the server thread
- Move over the create deco and locometal recipes from 0.7.19 PRs, update the lights to use glowstone dust?

## Technical
- GT + TFC food expiration compat
- Finish porting everything else in tfg-core that can be ported
- Fix up the ores field guide generator tool
- Add that create movable blacklist tag to greg crates, see if it stops people being able to put them on contraptions
- Add sapling item tag to AFC saplings (they only have the block tag), make greenhouse recipes for them

## Beneath
- Try out the python script to redo bastions? Would be a lot easier than doing them all manually again
	- Retexture the vanilla lantern, add loot table for it
- Add entity zoning supervisor and see if it lets us put tfc animals in the nether
- Fix up the #minecraft:piglin_loved tag 
- A cold water drinkable fluid (for your flask) that lowers your internal temp? Will need java code
- Make an "abandoned camp" structure? Put skeleton photo and spyglass in its loot table?
- Think about fertiliser system, is it possible to turn the ghost peppers into a normal crop and just disable beneath's system? It’s the only thing you can farm along with gleamflowers which are pretty useless
	- Or just disable ghost peppers and that system altogether, maybe they can just be piglin trade/loot exclusive
	- If we disable it, remove vanilla soul soil and replace with an identical block (the texture is nice)

## Post-0.9
- Create 6

## Space
- Put carve tags onto your rock types so they get carved correctly
- Make a custom chunk extension for planets so we can use tfc's climate-dependent features
	- https://terrafirmacraft.github.io/Documentation/1.20.x/worldgen/decorators/#climate
- Tag prefix to auto generate bricks?
- Reskin the rockets to match the GT casing textures
- Caelum TFC mod? makes the sky look more interesting which is thematic, is it compatible with ad astra?
- Waypoints but retextured, is there a way to make it require "payment" like through a bucket of rocket fuel?
- Configure forgiving world to work with orbits

### Mars
- Merge the cold + temperate biomes on mars and instead spread out the different forest tiers
- Come up with like 3 kinds of "trees" to replace vanilla ones, like dark oak + acacia = type 1, spruce + birch = type 2, etc
- Is it possible to have volcano features without the tfc:volcano_caldera? How does it work?
- Apparently mars regolith has a lot of perchlorate
- SHAI'HULUD
