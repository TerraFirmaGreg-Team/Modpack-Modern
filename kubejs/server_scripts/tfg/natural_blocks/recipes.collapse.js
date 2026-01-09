// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGCollapseRecipes(event) {

	// #region Nether
	event.recipes.tfc.collapse('minecraft:cobbled_deepslate', 'minecraft:deepslate')
	event.recipes.tfc.collapse('minecraft:cobbled_deepslate', 'tfg:rock/hardened_deepslate')
	event.recipes.tfc.collapse('tfg:rock/cobble_blackstone', 'minecraft:blackstone')
	event.recipes.tfc.collapse('tfg:rock/cobble_blackstone', 'tfg:rock/hardened_blackstone')
	event.recipes.tfc.collapse('tfg:rock/cobble_dripstone', 'minecraft:dripstone_block')
	event.recipes.tfc.collapse('tfg:rock/cobble_dripstone', 'tfg:rock/hardened_dripstone')
	event.recipes.tfc.collapse('tfg:rock/cobble_crackrack', 'beneath:crackrack')
	event.recipes.tfc.collapse('tfc:rock/cobble/basalt', 'minecraft:basalt')

	event.recipes.tfc.collapse('minecraft:cobbled_deepslate', '#forge:ores_in_ground/deepslate')
	event.recipes.tfc.collapse('tfg:rock/cobble_blackstone', '#forge:ores_in_ground/pyroxenite')
	event.recipes.tfc.collapse('tfg:rock/cobble_dripstone', '#forge:ores_in_ground/dripstone')
		
	event.recipes.tfc.landslide('tfg:ash_pile', 'tfg:ash_pile')
	event.recipes.tfc.landslide('minecraft:cobbled_deepslate', 'minecraft:cobbled_deepslate')
	event.recipes.tfc.landslide('tfg:rock/mossy_cobble_deepslate', 'tfg:rock/mossy_cobble_deepslate')
	event.recipes.tfc.landslide('tfg:rock/cobble_blackstone', 'tfg:rock/cobble_blackstone')
	event.recipes.tfc.landslide('tfg:rock/mossy_cobble_blackstone', 'tfg:rock/mossy_cobble_blackstone')
	event.recipes.tfc.landslide('tfg:rock/cobble_dripstone', 'tfg:rock/cobble_dripstone')
	event.recipes.tfc.landslide('tfg:rock/mossy_cobble_dripstone', 'tfg:rock/mossy_cobble_dripstone')
	event.recipes.tfc.landslide('tfg:rock/cobble_crackrack', 'tfg:rock/cobble_crackrack')
	event.recipes.tfc.landslide('tfg:rock/mossy_cobble_crackrack', 'tfg:rock/mossy_cobble_crackrack')

	event.recipes.tfc.landslide('tfg:rock/gravel_deepslate', 'tfg:rock/gravel_deepslate')
	event.recipes.tfc.landslide('tfg:rock/gravel_blackstone', 'tfg:rock/gravel_blackstone')
	event.recipes.tfc.landslide('tfg:rock/gravel_dripstone', 'tfg:rock/gravel_dripstone')
	event.recipes.tfc.landslide('tfg:rock/gravel_crackrack', 'tfg:rock/gravel_crackrack')

	// #endregion Nether

	// #region Space
	event.recipes.tfc.collapse('ad_astra:moon_cobblestone', 'ad_astra:moon_stone')
	event.recipes.tfc.collapse('ad_astra:moon_cobblestone', 'tfg:rock/hardened_moon_stone')
	event.recipes.tfc.landslide('ad_astra:moon_cobblestone', 'ad_astra:moon_cobblestone')
	event.recipes.tfc.collapse('ad_astra:moon_cobblestone', '#forge:ores_in_ground/moon_stone')
	event.recipes.tfc.landslide('tfg:rock/mossy_cobble_moon', 'tfg:rock/mossy_cobble_moon')
	event.recipes.tfc.landslide('tfg:rock/gravel_moon', 'tfg:rock/gravel_moon')

	event.recipes.tfc.collapse('ad_astra:moon_deepslate', 'ad_astra:moon_deepslate')
	event.recipes.tfc.collapse('ad_astra:moon_deepslate', 'tfg:rock/hardened_moon_deepslate')
	event.recipes.tfc.collapse('ad_astra:moon_deepslate', '#forge:ores_in_ground/moon_deepslate')
	event.recipes.tfc.landslide('tfg:rock/cobble_moon_deepslate', 'tfg:rock/cobble_moon_deepslate')
	event.recipes.tfc.landslide('tfg:rock/mossy_cobble_moon_deepslate', 'tfg:rock/mossy_cobble_moon_deepslate')
	event.recipes.tfc.landslide('tfg:rock/gravel_moon_deepslate', 'tfg:rock/gravel_moon_deepslate')

	event.recipes.tfc.landslide('ad_astra:moon_sand', 'ad_astra:moon_sand')

	event.recipes.tfc.collapse('ad_astra:glacio_cobblestone', 'ad_astra:glacio_stone')
	event.recipes.tfc.collapse('ad_astra:glacio_cobblestone', 'tfg:rock/hardened_glacio_stone')
	event.recipes.tfc.collapse('ad_astra:glacio_cobblestone', '#forge:ores_in_ground/glacio_stone')
	event.recipes.tfc.landslide('ad_astra:glacio_cobblestone', 'ad_astra:glacio_cobblestone')
	event.recipes.tfc.landslide('tfg:rock/mossy_cobble_glacio', 'tfg:rock/mossy_cobble_glacio')
	event.recipes.tfc.landslide('tfg:rock/gravel_glacio', 'tfg:rock/gravel_glacio')

	event.recipes.tfc.collapse('ad_astra:mars_cobblestone', 'ad_astra:mars_stone')
	event.recipes.tfc.collapse('ad_astra:mars_cobblestone', 'tfg:rock/hardened_mars_stone')
	event.recipes.tfc.collapse('ad_astra:mars_cobblestone', '#forge:ores_in_ground/mars_stone')
	event.recipes.tfc.landslide('ad_astra:mars_cobblestone', 'ad_astra:mars_cobblestone')
	event.recipes.tfc.landslide('tfg:rock/mossy_cobble_mars', 'tfg:rock/mossy_cobble_mars')
	event.recipes.tfc.landslide('tfg:rock/gravel_mars', 'tfg:rock/gravel_mars')
	event.recipes.tfc.landslide('ad_astra:mars_sand', 'ad_astra:mars_sand')

	event.recipes.tfc.collapse('ad_astra:venus_cobblestone', 'ad_astra:venus_stone')
	event.recipes.tfc.collapse('ad_astra:venus_cobblestone', 'tfg:rock/hardened_venus_stone')
	event.recipes.tfc.collapse('ad_astra:venus_cobblestone', '#forge:ores_in_ground/venus_stone')
	event.recipes.tfc.landslide('ad_astra:venus_cobblestone', 'ad_astra:venus_cobblestone')
	event.recipes.tfc.landslide('tfg:rock/mossy_cobble_venus', 'tfg:rock/mossy_cobble_venus')
	event.recipes.tfc.landslide('tfg:rock/gravel_venus', 'tfg:rock/gravel_venus')
	event.recipes.tfc.landslide('ad_astra:venus_sand', 'ad_astra:venus_sand')

	event.recipes.tfc.collapse('ad_astra:mercury_cobblestone', 'ad_astra:mercury_stone')
	event.recipes.tfc.collapse('ad_astra:mercury_cobblestone', 'tfg:rock/hardened_mercury_stone')
	event.recipes.tfc.collapse('ad_astra:mercury_cobblestone', '#forge:ores_in_ground/mercury_stone')
	event.recipes.tfc.landslide('ad_astra:mercury_cobblestone', 'ad_astra:mercury_cobblestone')
	event.recipes.tfc.landslide('tfg:rock/mossy_cobble_mercury', 'tfg:rock/mossy_cobble_mercury')
	event.recipes.tfc.landslide('tfg:rock/gravel_mercury', 'tfg:rock/gravel_mercury')

	event.recipes.tfc.collapse('tfg:rock/cobble_permafrost', 'ad_astra:permafrost')
	event.recipes.tfc.collapse('tfg:rock/cobble_permafrost', '#forge:ores_in_ground/permafrost')
	event.recipes.tfc.landslide('tfg:rock/cobble_permafrost', 'tfg:rock/cobble_permafrost')
	event.recipes.tfc.landslide('tfg:rock/mossy_cobble_permafrost', 'tfg:rock/mossy_cobble_permafrost')
	event.recipes.tfc.landslide('tfg:rock/gravel_permafrost', 'tfg:rock/gravel_permafrost')	

	event.recipes.tfc.collapse('gtceu:red_granite_cobblestone', 'gtceu:red_granite')
	event.recipes.tfc.collapse('gtceu:red_granite_cobblestone', 'tfg:rock/hardened_red_granite')
	event.recipes.tfc.collapse('gtceu:red_granite_cobblestone', '#forge:ores_in_ground/red_granite')
	event.recipes.tfc.landslide('gtceu:red_granite_cobblestone', 'gtceu:red_granite_cobblestone')
	event.recipes.tfc.landslide('tfg:rock/mossy_cobble_red_granite', 'tfg:rock/mossy_cobble_red_granite')
	event.recipes.tfc.landslide('tfg:rock/gravel_red_granite', 'tfg:rock/gravel_red_granite')
	event.recipes.tfc.landslide('minecraft:red_sand', 'minecraft:red_sand')
	
	event.recipes.tfc.landslide('tfg:grass/mars_dirt', 'tfg:grass/mars_dirt')
	event.recipes.tfc.landslide('tfg:grass/mars_dirt', 'tfg:grass/amber_mycelium')
	event.recipes.tfc.landslide('tfg:grass/mars_dirt', 'tfg:grass/rusticus_mycelium')
	event.recipes.tfc.landslide('tfg:grass/mars_dirt', 'tfg:grass/sangnum_mycelium')
	event.recipes.tfc.landslide('tfg:grass/mars_dirt', 'tfg:grass/mars_farmland')
	event.recipes.tfc.landslide('tfg:grass/mars_dirt', 'tfg:grass/mars_path')
  
	event.recipes.tfc.landslide('tfg:grass/mars_clay_dirt', 'tfg:grass/mars_clay_dirt')
	event.recipes.tfc.landslide('tfg:grass/mars_clay_dirt', 'tfg:grass/amber_clay_mycelium')
	event.recipes.tfc.landslide('tfg:grass/mars_clay_dirt', 'tfg:grass/rusticus_clay_mycelium')
	event.recipes.tfc.landslide('tfg:grass/mars_clay_dirt', 'tfg:grass/sangnum_clay_mycelium')
	event.recipes.tfc.landslide('tfc:red_kaolin_clay', 'tfg:grass/amber_kaolin_mycelium')
	event.recipes.tfc.landslide('tfc:red_kaolin_clay', 'tfg:grass/rusticus_kaolin_mycelium')
	event.recipes.tfc.landslide('tfc:red_kaolin_clay', 'tfg:grass/sangnum_kaolin_mycelium')

	event.recipes.tfc.landslide('tfg:sand/fluorapatite/blue', 'tfg:sand/fluorapatite/blue')
	event.recipes.tfc.landslide('tfg:sand/fluorapatite/green', 'tfg:sand/fluorapatite/green')
	event.recipes.tfc.landslide('tfg:sand/fluorapatite/brown', 'tfg:sand/fluorapatite/brown')
	event.recipes.tfc.landslide('tfg:sand/fluorapatite/orange', 'tfg:sand/fluorapatite/orange')
	event.recipes.tfc.landslide('tfg:sand/fluorapatite/white', 'tfg:sand/fluorapatite/white')
	event.recipes.tfc.landslide('tfg:sand/fluorapatite/yellow', 'tfg:sand/fluorapatite/yellow')
	// #endregion

	// #region Other
	event.recipes.tfc.collapse('#tfg:rock_slabs').id('tfg:collapse/rock_slabs')
	event.recipes.tfc.collapse('#tfg:rock_stairs').id('tfg:collapse/rock_stairs')
	event.recipes.tfc.collapse('#tfg:rock_walls').id('tfg:collapse/rock_walls')

	event.recipes.tfc.collapse('minecraft:cobblestone', 'minecraft:stone')
	event.recipes.tfc.landslide('minecraft:cobblestone', 'minecraft:cobblestone')
	event.recipes.tfc.landslide('minecraft:mossy_cobblestone', 'minecraft:mossy_cobblestone')
	// #endregion
}