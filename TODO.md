# TO-DO LIST

## Gameplay
- Wait for exception's thoughts about my earlier create progression changes
- Quest overhaul
- Merge medicines into 0.9
- Make chalcocite melt into tfc copper? gtceu/materials.js
- Make backpacks big enough to not go inside vessels - see registerTFCItemSize()
- Field guide
	- Fix other field guide pages that are referring to missing recipes (they're listed in the log)
	- Is there a way to use pack.json or something to just hide pages entirely?
- Add insulation for GT armors and diving suits, increase durability of existing clothes

## Mods
- Check if we want to keep that advanced AE one
- Aleki roofs needs to be hidden, it only shows vanilla woods - can't remove it because the ships depends on it
- Add particular?
- Add recipes for chalk
- Add that one with a helmet with a light in it
- Find and add the one that lets you travel to the nether via bedrock
	- https://www.curseforge.com/minecraft/mc-mods/forgiving-world
- Add the one with trans-dimensional logistics? See how difficult it is to make a second "cannon" so we can have one reskin for the nether and one reskin for space
- TFC textile? for some more drip
- Add that airplane tfg compat mod in the server thread
- Move over the create deco and locometal recipes from 0.7.19 PRs, update the lights to use glowstone dust?

## Technical
- GT icon sets
	- How do the icons for the dirty crushed ores work, they have a non-colored overlay?
		- If I can figure this out, then using tfc textures for gt tools should be very easy
		- Maybe the tfc gems can use their own too
	- Do the rest of the tfc ore block textures
	- Spread out some more of the GT textures to use the other generated overlays
- Auto generate buds
	- Generate loot tables, have it change if you use a gem saw?
- GT + TFC food expiration compat
- Finish porting everything else in tfg-core that can be ported
- Fix up the ores field guide generator tool

## Beneath
- Try out the python script to redo bastions? Would be a lot easier than doing them all manually again
	- Retexture the vanilla lantern, add loot table for it
- Add entity zoning supervisor and see if it lets us put tfc animals in the nether
- A cold water drinkable fluid (for your flask) that lowers your internal temp? Will need java code
- Netherite diving suit needs insulation and art
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

### Mars
- Merge the cold + temperate biomes on mars and instead spread out the different forest tiers
- Come up with like 3 kinds of "trees" to replace vanilla ones, like dark oak + acacia = type 1, spruce + birch = type 2, etc
- Is it possible to have volcano features without the tfc:volcano_caldera? How does it work?
- Apparently mars regolith has a lot of perchlorate
- SHAI'HULUD