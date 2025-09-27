// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGMoldRecipes(event) {

	event.shaped('tfg:mining_hammer_head_extruder_mold', [
		'Sfh',
		'   ',
		'   '
	], {
		S: 'gtceu:empty_mold',
		f: '#forge:tools/files',
		h: '#forge:tools/hammers'
	})

	event.shaped('tfg:sword_head_extruder_mold', [
		'Shf',
		'   ',
		'   '
	], {
		S: 'gtceu:empty_mold',
		f: '#forge:tools/files',
		h: '#forge:tools/hammers'
	})

	event.shaped('tfg:pickaxe_head_extruder_mold', [
		'S  ',
		'hf ',
		'   '
	], {
		S: 'gtceu:empty_mold',
		f: '#forge:tools/files',
		h: '#forge:tools/hammers'
	})

	event.shaped('tfg:axe_head_extruder_mold', [
		'S  ',
		' fh',
		'   '
	], {
		S: 'gtceu:empty_mold',
		f: '#forge:tools/files',
		h: '#forge:tools/hammers'
	})

	event.shaped('tfg:hoe_head_extruder_mold', [
		'S  ',
		' hf',
		'   '
	], {
		S: 'gtceu:empty_mold',
		f: '#forge:tools/files',
		h: '#forge:tools/hammers'
	})

	event.shaped('tfg:scythe_head_extruder_mold', [
		'S  ',
		'   ',
		'fh '
	], {
		S: 'gtceu:empty_mold',
		f: '#forge:tools/files',
		h: '#forge:tools/hammers'
	})

	event.shaped('tfg:file_head_extruder_mold', [
		'S  ',
		'   ',
		'hf '
	], {
		S: 'gtceu:empty_mold',
		f: '#forge:tools/files',
		h: '#forge:tools/hammers'
	})

	event.shaped('tfg:hammer_head_extruder_mold', [
		'Sf ',
		' h ',
		'   '
	], {
		S: 'gtceu:empty_mold',
		f: '#forge:tools/files',
		h: '#forge:tools/hammers'
	})

	event.shaped('tfg:saw_head_extruder_mold', [
		'Sh ',
		' f ',
		'   '
	], {
		S: 'gtceu:empty_mold',
		f: '#forge:tools/files',
		h: '#forge:tools/hammers'
	})

	event.shaped('tfg:knife_head_extruder_mold', [
		'S f',
		'   ',
		'  h'
	], {
		S: 'gtceu:empty_mold',
		f: '#forge:tools/files',
		h: '#forge:tools/hammers'
	})

	event.shaped('tfg:butchery_knife_head_extruder_mold', [
		'S h',
		'   ',
		'  f'
	], {
		S: 'gtceu:empty_mold',
		f: '#forge:tools/files',
		h: '#forge:tools/hammers'
	})

	event.shaped('tfg:shovel_head_extruder_mold', [
		'S  ',
		'f  ',
		'h  '
	], {
		S: 'gtceu:empty_mold',
		f: '#forge:tools/files',
		h: '#forge:tools/hammers'
	})

	event.shaped('tfg:spade_head_extruder_mold', [
		'S  ',
		'f  ',
		'  h'
	], {
		S: 'gtceu:empty_mold',
		f: '#forge:tools/files',
		h: '#forge:tools/hammers'
	})

	event.shaped('tfg:propick_head_extruder_mold', [
		'Sxf',
		'   ',
		'   '
	], {
		S: 'gtceu:empty_mold',
		f: '#forge:tools/files',
		x: '#forge:tools/wire_cutters'
	})

	event.shaped('tfg:javelin_head_extruder_mold', [
		'S x',
		'f  ',
		'   '
	], {
		S: 'gtceu:empty_mold',
		f: '#forge:tools/files',
		x: '#forge:tools/wire_cutters'
	})

	event.shaped('tfg:chisel_head_extruder_mold', [
		'S  ',
		'xf ',
		'   '
	], {
		S: 'gtceu:empty_mold',
		f: '#forge:tools/files',
		x: '#forge:tools/wire_cutters'
	})

	event.shaped('tfg:mace_head_extruder_mold', [
		'S  ',
		' xf',
		'   '
	], {
		S: 'gtceu:empty_mold',
		f: '#forge:tools/files',
		x: '#forge:tools/wire_cutters'
	})

	event.shaped('tfg:lamp_casting_mold', [
		'Sh ',
		'   ',
		'  m'
	], {
		S: 'gtceu:empty_mold',
		h: '#forge:tools/hammers',
		m: '#forge:tools/mallets'
	})

	event.shaped('tfg:trapdoor_casting_mold', [
		'S h',
		'   ',
		'  m'
	], {
		S: 'gtceu:empty_mold',
		h: '#forge:tools/hammers',
		m: '#forge:tools/mallets'
	})

	event.shaped('tfg:chain_casting_mold', [
		'S  ',
		'h  ',
		'  m'
	], {
		S: 'gtceu:empty_mold',
		h: '#forge:tools/hammers',
		m: '#forge:tools/mallets'
	})

	event.shaped('tfg:bell_casting_mold', [
		'S  ',
		' h ',
		'  m'
	], {
		S: 'gtceu:empty_mold',
		h: '#forge:tools/hammers',
		m: '#forge:tools/mallets'
	})

	event.shaped('tfg:mattock_head_extruder_mold', [
		'  h',
		'fS ',
		'   '
	], {
		S: 'gtceu:empty_mold',
		f: '#forge:tools/files',
		h: '#forge:tools/hammers'
	})

	event.shaped('tfg:fish_hook_extruder_mold', [
		'f  ',
		' S ',
		'  h'
	], {
		S: 'gtceu:empty_mold',
		f: '#forge:tools/files',
		h: '#forge:tools/hammers'
	})

	event.shaped('tfg:whisk_extruder_mold', [
		'f h',
		' S ',
		'   '
	], {
		S: 'gtceu:empty_mold',
		f: '#forge:tools/files',
		h: '#forge:tools/hammers'
	})
	
	event.shaped('tfg:screwdriver_tip_extruder_mold', [
		'f  ',
		' S ',
		' h '
	], {
		S: 'gtceu:empty_mold',
		f: '#forge:tools/files',
		h: '#forge:tools/hammers'
	})
	
	event.shaped('tfg:wrench_tip_extruder_mold', [
		'f  ',
		'hS ',
		'   '
	], {
		S: 'gtceu:empty_mold',
		f: '#forge:tools/files',
		h: '#forge:tools/hammers'
	})

	event.shaped('tfg:wire_cutter_head_extruder_mold', [
		'hS ',
		'   ',
		' f '
	], {
		S: 'gtceu:empty_mold',
		f: '#forge:tools/files',
		h: '#forge:tools/hammers'
	})

	let steelIngots = ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 4);
	let steelDusts = ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 4);

	global.TFG_EXTRUDER_MOLDS.forEach(mold => {

		event.recipes.gtceu.arc_furnace(`arc_${mold}`.replace("tfg:", ""))
			.itemInputs(mold)
			.itemOutputs(steelIngots)
			.duration(224)
			.EUt(GTValues.VA[GTValues.LV])
			.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

		event.recipes.gtceu.macerator(`macerate_${mold}`.replace("tfg:", ""))
			.itemInputs(mold)
			.itemOutputs(steelDusts)
			.duration(224)
			.EUt(GTValues.VA[GTValues.ULV])
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		event.recipes.gtceu.forming_press(`copy_shape_${mold}`.replace("tfg:", ""))
			.itemInputs('gtceu:empty_mold')
			.notConsumable(mold)
			.itemOutputs(mold)
			.duration(120)
			.EUt(GTValues.VA[GTValues.LV])
	})

	global.TFG_CASTING_MOLDS.forEach(mold => {

		event.recipes.gtceu.arc_furnace(`arc_${mold}`.replace("tfg:", ""))
			.itemInputs(mold)
			.itemOutputs(steelIngots)
			.duration(224)
			.EUt(GTValues.VA[GTValues.LV])
			.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

		event.recipes.gtceu.macerator(`macerate_${mold}`.replace("tfg:", ""))
			.itemInputs(mold)
			.itemOutputs(steelDusts)
			.duration(224)
			.EUt(GTValues.VA[GTValues.ULV])
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		event.recipes.gtceu.forming_press(`copy_shape_${mold}`.replace("tfg:", ""))
			.itemInputs('gtceu:empty_mold')
			.notConsumable(mold)
			.itemOutputs(mold)
			.duration(120)
			.EUt(GTValues.VA[GTValues.LV])
	})

	//TODO: Fix this code to respect full molds
	// //craft mold to scrub nbt
	// const molds = Ingredient.of('#tfc:fired_molds').itemIds;

	// molds.forEach(mold => {
	// 	event.shapeless(Item.of(mold), [mold])
	// 	.id(`tfg:shapeless/mold_cleaning/${mold.replace(":", "/")}`);
	// });

	// //craft vessel to scrub nbt
	// const vessels = Ingredient.of('#tfc:fired_vessels').itemIds;

	// vessels.forEach(vessel => {
	// 	event.shapeless(Item.of(vessel), [vessel])
	// 	.id(`tfg:shapeless/vessel_cleaning/${vessel.replace(":", "/")}`);
	// });

}
