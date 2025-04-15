// priority: 0

function registerTFGCollapseRecipes(event) {

	event.recipes.tfc.collapse('minecraft:cobbled_deepslate', 'minecraft:deepslate')
	event.recipes.tfc.collapse('minecraft:cobbled_deepslate', 'tfg:rock/hardened_deepslate')
	event.recipes.tfc.collapse('minecraft:blackstone', 'minecraft:blackstone')
	event.recipes.tfc.collapse('minecraft:blackstone', 'tfg:rock/hardened_blackstone')
	event.recipes.tfc.collapse('minecraft:dripstone_block', 'minecraft:dripstone_block')
	event.recipes.tfc.collapse('minecraft:dripstone_block', 'tfg:rock/hardened_dripstone')

	event.recipes.tfc.collapse('tfc:rock/cobble/basalt', 'minecraft:basalt')
	event.recipes.tfc.collapse('minecraft:cobbled_deepslate', '#forge:ores_in_ground/deepslate')
	event.recipes.tfc.collapse('minecraft:blackstone', '#forge:ores_in_ground/pyroxenite')
	event.recipes.tfc.collapse('minecraft:dripstone_block', '#forge:ores_in_ground/dripstone')

	
	event.recipes.tfc.landslide('tfg:ash_pile', 'tfg:ash_pile')
	event.recipes.tfc.landslide('minecraft:cobbled_deepslate', 'minecraft:cobbled_deepslate')
}