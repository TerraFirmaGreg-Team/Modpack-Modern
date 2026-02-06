// priority: 0
"use strict";

const registerBeneathRecipes = (event) => {

	global.BENEATH_DISABLED_ITEMS.forEach(item => {
		event.remove({ input: item })
		event.remove({ output: item })
	})

	event.remove({ id: 'beneath:collapse/basalt' })
	event.remove({ id: 'beneath:collapse/nether_bricks' })
	event.remove({ id: 'beneath:crafting/nether_bricks' })
	event.remove({ id: 'beneath:crafting/blackstone' })
	event.remove({ id: 'beneath:crafting/blackstone_uncraft' })
	event.remove({ id: 'beneath:crafting/blackstone_bricks' })
	event.remove({ id: 'beneath:crafting/blackstone_bricks_from_soot' })
	event.remove({ id: 'beneath:crafting/blackstone_from_soot' })
	event.remove({ id: 'beneath:crafting/blackstone_plate' })
	event.remove({ id: 'beneath:crafting/blackstone_button' })
	event.remove({ id: 'beneath:crafting/blackstone_aqueduct' })
	event.remove({ id: 'beneath:crafting/hellbricks' })
	event.remove({ id: 'beneath:crafting/nether_brick' })
	event.remove({ id: 'beneath:quern/slime' })
	event.remove({ id: 'beneath:crafting/wood/crimson_planks' })
	event.remove({ id: 'beneath:crafting/wood/crimson_slab' })
	event.remove({ id: 'beneath:crafting/wood/crimson_button' })
	event.remove({ id: 'beneath:crafting/wood/crimson_pressure_plate' })
	event.remove({ id: 'beneath:crafting/wood/crimson_lumber_log' })
	event.remove({ id: 'beneath:crafting/wood/crimson_lumber_planks' })
	event.remove({ id: 'beneath:crafting/wood/crimson_slab_undo' })
	event.remove({ id: 'beneath:crafting/wood/warped_planks' })
	event.remove({ id: 'beneath:crafting/wood/warped_slab' })
	event.remove({ id: 'beneath:crafting/wood/warped_button' })
	event.remove({ id: 'beneath:crafting/wood/warped_pressure_plate' })
	event.remove({ id: 'beneath:crafting/wood/warped_lumber_log' })
	event.remove({ id: 'beneath:crafting/wood/warped_lumber_planks' })
	event.remove({ id: 'beneath:crafting/wood/warped_slab_undo' })
	event.remove({ id: 'beneath:crafting/ancient_altar' })
	
	event.shaped('beneath:unposter', [
		'ABA',
		'AAA',
		'CCC'
	], {
		A: '#tfc:lumber',
		B: 'tfc:composter',
		C: '#tfc:mud'
	}).id('beneath:crafting/unposter')

	event.shapeless('beneath:hellbricks', [
		'minecraft:nether_bricks',
		'minecraft:magma_cream',
		'tfc:powder/sulfur',
		'tfc:soot'
	]).id('tfg:shapeless/hellbricks_from_soot')

	event.shapeless('beneath:hellbricks', [
		'minecraft:nether_bricks',
		'minecraft:magma_cream',
		'tfc:powder/sulfur',
		'tfc:powder/wood_ash'
	]).id('tfg:shapeless/hellbricks_from_wood_ash')

	event.recipes.tfc.landslide('beneath:soul_clay', 'beneath:soul_clay')

	event.shaped('beneath:wood/sewing_table/crimson', [
		' AB',
		'CCC',
		'D D'
	], {
		A: '#forge:leather',
		B: '#forge:tools/knives',
		C: 'beneath:wood/planks/crimson',
		D: 'beneath:wood/log/crimson'
	}).id('tfg:shaped/crimson_sewing_table')

	event.shaped('beneath:wood/sewing_table/warped', [
		' AB',
		'CCC',
		'D D'
	], {
		A: '#forge:leather',
		B: '#forge:tools/knives',
		C: 'beneath:wood/planks/warped',
		D: 'beneath:wood/log/warped'
	}).id('tfg:shaped/warped_sewing_table')

	event.shaped(`4x beneath:wood/fallen_leaves/crimson`,[
		'AA',
		'AA'
	], {
		A: `beneath:wood/leaves/crimson`
	}).id(`tfg:shaped/beneath/crimson_leaves_to_fallen_leaves`);

	event.shaped(`4x beneath:wood/fallen_leaves/warped`,[
		'AA',
		'AA'
	], {
		A: `beneath:wood/leaves/warped`
	}).id(`tfg:shaped/beneath/warped_leaves_to_fallen_leaves`);

	
	/**
	 * @property {Array} beneathWoodRecyclingIndex - Wood recycling material index.
	 */
	const beneathWoodRecyclingIndex = [
		['beneath:wood/chest_minecart/{type}', ['{wood}', 4, GTMaterials.WroughtIron, 5]],
		['beneath:wood/planks/{type}', ['{wood}', 8]],
		['beneath:wood/planks/{type}_door', ['{wood}', 6]],
		['beneath:wood/planks/{type}_trapdoor', ['{wood}', 4]],
		['beneath:wood/planks/{type}_fence', ['{wood}', 4]],
		['beneath:wood/planks/{type}_log_fence', ['{wood}', 8]],
		['beneath:wood/planks/{type}_fence_gate', ['{wood}', 8]],
		['beneath:wood/planks/{type}_slab', ['{wood}', 2]],
		['beneath:wood/planks/{type}_stairs', ['{wood}', 3]],
		['beneath:wood/planks/{type}_pressure_plate', ['{wood}', 4]],
		['beneath:wood/planks/{type}_button', ['{wood}', 1]],
		['beneath:wood/chest/{type}', ['{wood}', 16]],
		['beneath:wood/trapped_chest/{type}', ['{wood}', 16, GTMaterials.WroughtIron, 4/9, GTMaterials.Wood, 1]]
	];
	/**
	 * @param {Array} materials
	 * @param {string} woodMaterial
	 * @return {Array}
	 */
	function resolveArgs(materials, woodMaterial) {
		return materials.map(materials => materials === '{wood}' ? woodMaterial : materials);
	};

	beneathWoodRecyclingIndex.forEach(([template, args]) => {
		const item = template.replace('{type}', 'crimson');
		const resolvedArgs = resolveArgs(args, GTMaterials.get('hardwood'));
		TFGHelpers.registerMaterialInfo(item, resolvedArgs);
	});
	beneathWoodRecyclingIndex.forEach(([template, args]) => {
		const item = template.replace('{type}', 'warped');
		const resolvedArgs = resolveArgs(args, GTMaterials.Wood);
		TFGHelpers.registerMaterialInfo(item, resolvedArgs);
	});
}