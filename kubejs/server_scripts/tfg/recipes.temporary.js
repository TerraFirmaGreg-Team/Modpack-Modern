// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGTemporaryRecipes(event) {
	
	event.shapeless('vintageimprovements:belt_grinder', 'vintageimprovements:lathe')

	event.shapeless('tfg:ostrum_linear_accelerator', 'gtceu:ostrum_linear_accelerator')

	// TODO: remove nether/ender air in 0.12


	// Temporary recipes until gregtech fixes its pipe problem with .setIgnored()
	const broken_pipes = [
		GTMaterials.Copper,
		GTMaterials.Brass,
		GTMaterials.Gold,
		GTMaterials.Iron,
		GTMaterials.Cobalt,
		GTMaterials.RoseGold,
		GTMaterials.Aluminium,
		GTMaterials.Invar,
		GTMaterials.Lead,
		GTMaterials.Nickel,
		GTMaterials.Osmium,
		GTMaterials.Palladium,
		GTMaterials.Platinum,
		GTMaterials.Rhodium,
		GTMaterials.Silver,
		GTMaterials.Vanadium,
		GTMaterials.Zinc,
		TFGHelpers.getMaterial('ostrum')
	]
	broken_pipes.forEach(material => {
		if (material.hasProperty(PropertyKey.FLUID_PIPE)) {
			event.shaped(ChemicalHelper.get(TagPrefix.pipeTinyFluid, material, 2), [
				' S ',
				'HPW'
			], {
				P: ChemicalHelper.get(TagPrefix.plate, material, 1),
				H: '#forge:tools/hammers',
				W: '#forge:tools/wrenches',
				S: '#forge:tools/saws'
			}).id(`tfg:temp/tiny_fluid_pipe_${material.getName()}`)

			event.shaped(ChemicalHelper.get(TagPrefix.pipeSmallFluid, material, 1), [
				'WPH'
			], {
				P: ChemicalHelper.get(TagPrefix.plate, material, 1),
				H: '#forge:tools/hammers',
				W: '#forge:tools/wrenches'
			}).id(`tfg:temp/small_fluid_pipe_${material.getName()}`)

			event.shaped(ChemicalHelper.get(TagPrefix.pipeNormalFluid, material, 1), [
				'PPP',
				'W H'
			], {
				P: ChemicalHelper.get(TagPrefix.plate, material, 1),
				H: '#forge:tools/hammers',
				W: '#forge:tools/wrenches'
			}).id(`tfg:temp/normal_fluid_pipe_${material.getName()}`)

			event.shaped(ChemicalHelper.get(TagPrefix.pipeLargeFluid, material, 1), [
				'PPP',
				'W H',
				'PPP'
			], {
				P: ChemicalHelper.get(TagPrefix.plate, material, 1),
				H: '#forge:tools/hammers',
				W: '#forge:tools/wrenches'
			}).id(`tfg:temp/large_fluid_pipe_${material.getName()}`)
		}
		else if (material.hasProperty(PropertyKey.ITEM_PIPE)) {
			event.shaped(ChemicalHelper.get(TagPrefix.pipeSmallItem, material, 1), [
				'WPH'
			], {
				P: ChemicalHelper.get(TagPrefix.plate, material, 1),
				H: '#forge:tools/hammers',
				W: '#forge:tools/wrenches'
			}).id(`tfg:temp/small_item_pipe_${material.getName()}`)

			event.shaped(ChemicalHelper.get(TagPrefix.pipeNormalItem, material, 1), [
				'PPP',
				'W H'
			], {
				P: ChemicalHelper.get(TagPrefix.plate, material, 1),
				H: '#forge:tools/hammers',
				W: '#forge:tools/wrenches'
			}).id(`tfg:temp/normal_item_pipe_${material.getName()}`)

			event.shaped(ChemicalHelper.get(TagPrefix.pipeLargeItem, material, 1), [
				'PPP',
				'W H',
				'PPP'
			], {
				P: ChemicalHelper.get(TagPrefix.plate, material, 1),
				H: '#forge:tools/hammers',
				W: '#forge:tools/wrenches'
			}).id(`tfg:temp/large_item_pipe_${material.getName()}`)
		}
	})
}
