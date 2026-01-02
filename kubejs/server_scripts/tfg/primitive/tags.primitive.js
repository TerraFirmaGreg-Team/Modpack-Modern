"use strict";

function registerTFGPrimitiveItemTags(event) {

	//Decorative Vases
	global.MINECRAFT_DYE_NAMES.forEach(color => {
		event.add('c:hidden_from_recipe_viewers', `tfg:decorative_vase/generated/${color}`)
		event.add('tfg:decorative_vases/generated', `tfg:decorative_vase/generated/${color}`)
		event.add('tfg:decorative_vases', `tfg:decorative_vase/${color}`)
		event.add('tfg:decorative_vases/unfired', `tfg:decorative_vase/unfired/${color}`)
	})
	event.add('tfg:decorative_vases', 'tfg:decorative_vase')
	event.add('tfg:decorative_vases/unfired', 'tfg:decorative_vase/unfired')

	//Knapping
	event.add('tfc:any_knapping', 'minecraft:flint')

	// Tools
	event.add('forge:tools/fishing_nets', 'tfg:fishing_net/wood')
	event.add('forge:tools/fishing_nets', 'tfg:fishing_net/brass')
	event.add('forge:tools/fishing_nets', 'tfg:fishing_net/rose_gold')
	event.add('forge:tools/fishing_nets', 'tfg:fishing_net/sterling_silver')
	event.add('forge:tools/fishing_nets', 'tfg:fishing_net/invar')
	event.add('forge:tools/fishing_nets', 'tfg:fishing_net/tin_alloy')
	event.add('forge:tools/fishing_nets', 'tfg:fishing_net/cupronickel')
	event.add('forge:tools/fishing_nets', 'tfg:fishing_net/magnalium')

	event.add('forge:tools/trowels', 'tfg:trowel')

	event.add('tfg:harvester', 'tfg:harvest_basket')
	event.add('tfg:harvester', 'tfg:aluminium_harvest_basket')

	event.add('tfg:tools/ore_prospectors/copper', 'tfc:metal/propick/copper')
	event.add('tfg:tools/ore_prospectors/bronze', 'tfc:metal/propick/bronze')
	event.add('tfg:tools/ore_prospectors/bronze', 'tfc:metal/propick/bismuth_bronze')
	event.add('tfg:tools/ore_prospectors/bronze', 'tfc:metal/propick/black_bronze')
	event.add('tfg:tools/ore_prospectors/wrought_iron', 'tfc:metal/propick/wrought_iron')
	event.add('tfg:tools/ore_prospectors/steel', 'tfc:metal/propick/steel')
	event.add('tfg:tools/ore_prospectors/black_steel', 'tfc:metal/propick/black_steel')
	event.add('tfg:tools/ore_prospectors/blue_steel', 'tfc:metal/propick/blue_steel')
	event.add('tfg:tools/ore_prospectors/red_steel', 'tfc:metal/propick/red_steel')

	// Paper from wood
	event.add('tfg:hardwood_strips', 'tfg:hardwood_strip')
	event.add('tfg:hardwood_strips', 'tfg:soaked_hardwood_strip')
	//Adding any of these dusts to the forge dusts/wood tag will make it so you can craft softwood pulp using hardwood pulp. which is not ok.
	event.add('tfg:wood_dusts', 'gtceu:hardwood_dust')
	event.add('tfg:tiny_wood_dusts', 'gtceu:tiny_hardwood_dust')
	event.add('tfg:small_wood_dusts', 'gtceu:small_hardwood_dust')
	event.add('tfg:wood_dusts', 'gtceu:wood_dust')
	event.add('tfg:tiny_wood_dusts', 'gtceu:tiny_wood_dust')
	event.add('tfg:small_wood_dusts', 'gtceu:small_wood_dust')

	// Waxe
    event.add('forge:wax', 'gtceu:wax_dust');
	event.add('forge:wax', 'tfg:paraffin_wax')
	event.add('forge:wax', 'firmalife:beeswax')
	event.add('forge:wax', 'tfg:conifer_rosin')
	event.add('forge:wax', 'tfg:crimsene_gem')
	event.add('forge:wax', 'tfg:warpane_gem')

	// Cloth & String
    event.add('tfg:lightweight_cloth', 'tfc:silk_cloth')
    event.add('tfg:lightweight_cloth', 'tfg:phantom_silk')
    event.add('tfg:lightweight_cloth', 'tfg:polycaprolactam_fabric')
	event.add('forge:cloth', 'tfg:phantom_silk')
	event.add('forge:cloth', 'tfg:polycaprolactam_fabric')
	event.add('tfc:high_quality_cloth', 'tfg:phantom_silk')
	event.add('tfc:high_quality_cloth', 'tfg:polycaprolactam_fabric')
	event.add('tfc:sewing_light_cloth', 'tfg:phantom_silk')
	event.add('tfc:sewing_dark_cloth', 'tfg:polycaprolactam_fabric')
	event.add('forge:string', 'tfg:phantom_thread')
	event.add('forge:string', 'tfg:polycaprolactam_string')
	event.add('forge:string', 'firmalife:pineapple_yarn')
}

function registerTFGPrimitiveBlockTags(event) {
	event.add('minecraft:mineable/shovel', 'tfg:ash_pile')

	event.add('tfg:harvester_harvestable', '#tfc:fruit_tree_leaves')
	event.add('tfg:harvester_harvestable', '#tfc:berry_bushes')
	event.add('tfg:harvester_harvestable', '#tfc:any_spreading_bush')
	event.add('tfg:harvester_harvestable', '#firmalife:grape_strings')
	event.add('tfg:harvester_harvestable', '#firmalife:grape_trellis_posts_plant')
	//added for QOL but doesnt harvest anything
	event.add('tfg:harvester_harvestable', 'firmalife:grape_fluff_red')
	event.add('tfg:harvester_harvestable', 'firmalife:grape_fluff_white')
}

function registerTFGPrimitiveFluidTags(event) {
	event.add('tfg:usable_in_small_gear_mold', 'gtceu:copper')
	event.add('tfg:usable_in_small_gear_mold', 'gtceu:tin')
	event.add('tfg:usable_in_small_gear_mold', 'gtceu:sterling_silver')
	event.add('tfg:usable_in_small_gear_mold', 'gtceu:bismuth_bronze')
	event.add('tfg:usable_in_small_gear_mold', 'gtceu:bronze')
	event.add('tfg:usable_in_small_gear_mold', 'gtceu:zinc')
	event.add('tfg:usable_in_small_gear_mold', 'gtceu:silver')
	event.add('tfg:usable_in_small_gear_mold', 'gtceu:potin')
	event.add('tfg:usable_in_small_gear_mold', 'gtceu:bismuth')
	event.add('tfg:usable_in_small_gear_mold', 'gtceu:lead')
	event.add('tfg:usable_in_small_gear_mold', 'gtceu:nickel')
	event.add('tfg:usable_in_small_gear_mold', 'gtceu:brass')
	event.add('tfg:usable_in_small_gear_mold', 'gtceu:gold')
	event.add('tfg:usable_in_small_gear_mold', 'gtceu:red_alloy')
	event.add('tfg:usable_in_small_gear_mold', 'gtceu:black_bronze')
	event.add('tfg:usable_in_small_gear_mold', 'gtceu:rose_gold')

	event.add('tfg:usable_in_rod_mold', 'gtceu:red_alloy')
	event.add('tfg:usable_in_rod_mold', 'gtceu:bronze')
	event.add('tfg:usable_in_rod_mold', 'gtceu:bismuth_bronze')
	event.add('tfg:usable_in_rod_mold', 'gtceu:black_bronze')
	event.add('tfg:usable_in_rod_mold', 'gtceu:brass')
}