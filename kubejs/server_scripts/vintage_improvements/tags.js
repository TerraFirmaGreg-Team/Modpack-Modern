// priority: 0
"use strict";

function registerVintageImprovementsItemTags(event) {

	global.VINTAGE_IMPROVEMENTS_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	event.add('c:hidden_from_recipe_viewers', '#vintageimprovements:springs')
	event.add('c:hidden_from_recipe_viewers', '#vintageimprovements:small_springs')
	event.add('c:hidden_from_recipe_viewers', '#forge:wires')
	
	event.add('vintageimprovements:custom_hammering_blocks', '#tfc:anvils')

	// Add more if needed, this is for all the LV recipes
	event.add('vintageimprovements:curving_heads', 'tfg:sword_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:mining_hammer_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:pickaxe_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:shovel_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:axe_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:hoe_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:scythe_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:file_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:hammer_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:saw_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:knife_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:butchery_knife_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:spade_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:propick_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:javelin_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:chisel_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:mace_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:mattock_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:screwdriver_tip_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:wrench_tip_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:wire_cutter_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:small_casing_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:shell_casing_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:large_casing_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'gtceu:cell_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'gtceu:ingot_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'gtceu:bottle_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'gtceu:foil_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'gtceu:credit_casting_mold')
}


function registerVintageImprovementsBlockTags(event) {

	global.VINTAGE_IMPROVEMENTS_DISABLED_BLOCKS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	event.add('vintageimprovements:custom_hammering_blocks', '#tfc:anvils')
}


function registerVintageImprovementsFluidTags(event) {

	global.VINTAGE_IMPROVEMENTS_DISABLED_FLUIDS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})
}
