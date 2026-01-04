// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGTemporaryRecipes(event) {
	
	event.shapeless('vintageimprovements:belt_grinder', 'vintageimprovements:lathe')

	event.shapeless('tfg:ostrum_linear_accelerator', 'gtceu:ostrum_linear_accelerator')
	event.shapeless('tfg:steam_bloomery', 'gtceu:steam_bloomery')

	event.shapeless('greate:rose_quartz_dust', 'gtceu:rose_quartz_dust')
	event.shapeless('greate:tiny_rose_quartz_dust', 'gtceu:tiny_rose_quartz_dust')
	event.shapeless('greate:small_rose_quartz_dust', 'gtceu:small_rose_quartz_dust')
	event.shapeless('greate:poor_raw_rose_quartz', 'gtceu:poor_raw_rose_quartz')
	event.shapeless('greate:raw_rose_quartz', 'gtceu:raw_rose_quartz')
	event.shapeless('greate:rich_raw_rose_quartz', 'gtceu:rich_raw_rose_quartz')
	event.shapeless('greate:chipped_rose_quartz_gem', 'gtceu:chipped_rose_quartz_gem')
	event.shapeless('greate:flawed_rose_quartz_gem', 'gtceu:flawed_rose_quartz_gem')
	event.shapeless('greate:flawless_rose_quartz_gem', 'gtceu:flawless_rose_quartz_gem')
	event.shapeless('greate:exquisite_rose_quartz_gem', 'gtceu:exquisite_rose_quartz_gem')
	event.shapeless('greate:pure_rose_quartz_dust', 'gtceu:pure_rose_quartz_dust')
	event.shapeless('greate:impure_rose_quartz_dust', 'gtceu:impure_rose_quartz_dust')
	event.shapeless('greate:purified_rose_quartz_ore', 'gtceu:purified_rose_quartz_ore')
	event.shapeless('greate:crushed_rose_quartz_ore', 'gtceu:crushed_rose_quartz_ore')
	event.shapeless('greate:refined_rose_quartz_ore', 'gtceu:refined_rose_quartz_ore')
	event.shapeless('greate:rose_quartz_lens', 'gtceu:rose_quartz_lens')
	event.shapeless('greate:rose_quartz_plate', 'gtceu:rose_quartz_plate')

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
