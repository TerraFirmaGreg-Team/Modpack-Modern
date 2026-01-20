// priority: 0
"use strict";

function registerTFGSandRecipes(event) {

	event.recipes.gtceu.centrifuge('oilsands_ore_separation')
		.itemInputs('#forge:ores/oilsands')
		.chancedOutput('tfc:sand/yellow', 5000, 5000)
		.outputFluids(Fluid.of('gtceu:oil', 2000))
		.duration(200)
		.EUt(30)

	event.recipes.gtceu.centrifuge('oilsands_dust_separation')
		.itemInputs('gtceu:oilsands_dust')
		.chancedOutput('tfc:sand/yellow', 5000, 5000)
		.outputFluids(Fluid.of('gtceu:oil', 2000))
		.duration(200)
		.EUt(30)

	event.recipes.gtceu.centrifuge('dirt_separation')
		.itemInputs('#tfc:dirt')
		.chancedOutput('gtceu:plant_ball', 1250, 700)
		.chancedOutput('tfc:sand/yellow', 5000, 1200)
		.chancedOutput('gtceu:tiny_clay_dust', 4000, 900)
		.duration(250)
		.EUt(30)

	global.SAND_COLORS.forEach(sandColor => {
		// Raw sandstone -> sand
		event.recipes.gtceu.forge_hammer(`raw_${sandColor}_sandstone_to_sand`)
			.itemInputs(`tfc:raw_sandstone/${sandColor}`)
			.itemOutputs(`4x tfc:sand/${sandColor}`)
			.duration(20*3.5)
			.EUt(2)

		event.recipes.greate.pressing(`4x tfc:sand/${sandColor}`, `tfc:raw_sandstone/${sandColor}`)
			.recipeTier(1)
			.id(`greate:pressing/raw_${sandColor}_sandstone_to_sand`)

		// Smooth sandstone -> sand
		event.recipes.gtceu.forge_hammer(`smooth_${sandColor}_sandstone_to_sand`)
			.itemInputs(`tfc:smooth_sandstone/${sandColor}`)
			.itemOutputs(`4x tfc:sand/${sandColor}`)
			.duration(20*3.5)
			.EUt(2)

		event.recipes.greate.pressing(`4x tfc:sand/${sandColor}`, `tfc:smooth_sandstone/${sandColor}`)
			.recipeTier(1)
			.id(`greate:pressing/smooth_${sandColor}_sandstone_to_sand`)

		// Cut sandstone -> sand
		event.recipes.gtceu.forge_hammer(`cut_${sandColor}_sandstone_to_sand`)
			.itemInputs(`tfc:cut_sandstone/${sandColor}`)
			.itemOutputs(`4x tfc:sand/${sandColor}`)
			.duration(20*3.5)
			.EUt(2)

		event.recipes.greate.pressing(`4x tfc:sand/${sandColor}`, `tfc:cut_sandstone/${sandColor}`)
			.recipeTier(1)
			.id(`greate:pressing/cut_${sandColor}_sandstone_to_sand`)

		// Sand -> sandstone
		event.recipes.gtceu.compressor(`sand_${sandColor}_to_sandstone`)
			.itemInputs(`4x tfc:sand/${sandColor}`)
			.itemOutputs(`tfc:raw_sandstone/${sandColor}`)
			.duration(400)
			.EUt(2)

		// Gravel -> Sand
		event.recipes.gtceu.forge_hammer(`${sandColor}_gravel_to_sand`)
			.itemInputs(`#tfc:${sandColor}_gravel`)
			.itemOutputs(`tfc:sand/${sandColor}`)
			.duration(20*3.5)
			.EUt(2)

		event.recipes.greate.pressing(`tfc:sand/${sandColor}`, `#tfc:${sandColor}_gravel`)
			.recipeTier(1)
			.id(`greate:pressing/${sandColor}_gravel_to_sand`)

		// Smooth -> Raw
		event.stonecutting(`tfc:smooth_sandstone/${sandColor}`, `tfc:raw_sandstone/${sandColor}`)
			.id(`tfg:stonecutting/raw_sandstone_${sandColor}_to_smooth_sandstone`)

		// Cut -> Raw
		event.stonecutting(`tfc:cut_sandstone/${sandColor}`, `tfc:raw_sandstone/${sandColor}`)
			.id(`raw_sandstone_${sandColor}_to_cut_sandstone`)

		// Raw -> Stairs
		event.remove({ id: `tfc:crafting/sandstone/${sandColor}_raw_stairs` })

		event.stonecutting(`tfc:raw_sandstone/${sandColor}_stairs`, `tfc:raw_sandstone/${sandColor}`)
			.id(`tfg:stonecutting/${sandColor}_sandstone_to_stairs`)

		// Raw -> Slab
		event.remove({ id: `tfc:crafting/sandstone/${sandColor}_raw_slab` })

		event.stonecutting(`2x tfc:raw_sandstone/${sandColor}_slab`, `tfc:raw_sandstone/${sandColor}`)
			.id(`tfg:stonecutting/${sandColor}_sandstone_to_slabs`)

		// Raw -> Wall
		event.remove({ id: `tfc:crafting/sandstone/${sandColor}_raw_wall` })

		event.stonecutting(`tfc:raw_sandstone/${sandColor}_wall`, `tfc:raw_sandstone/${sandColor}`)
			.id(`tfg:stonecutting/${sandColor}_sandstone_to_wall`)

		// Smooth -> Stairs
		event.remove({ id: `tfc:crafting/sandstone/${sandColor}_smooth_stairs` })

		event.stonecutting(`tfc:smooth_sandstone/${sandColor}_stairs`, `tfc:smooth_sandstone/${sandColor}`)
			.id(`tfg:stonecutting/${sandColor}_smooth_sandstone_to_stairs`)

		// Smooth -> Slab
		event.remove({ id: `tfc:crafting/sandstone/${sandColor}_smooth_slab` })

		event.stonecutting(`2x tfc:smooth_sandstone/${sandColor}_slab`, `tfc:smooth_sandstone/${sandColor}`)
			.id(`tfg:stonecutting/${sandColor}_smooth_sandstone_to_slab`)

		// Smooth -> Wall
		event.remove({ id: `tfc:crafting/sandstone/${sandColor}_smooth_wall` })

		event.stonecutting(`tfc:smooth_sandstone/${sandColor}_wall`, `tfc:smooth_sandstone/${sandColor}`)
			.id(`tfg:stonecutting/${sandColor}_smooth_sandstone_to_wall`)

		// Cut -> Stairs
		event.remove({ id: `tfc:crafting/sandstone/${sandColor}_cut_stairs` })

		event.stonecutting(`tfc:cut_sandstone/${sandColor}_stairs`, `tfc:cut_sandstone/${sandColor}`)
			.id(`tfg:stonecutting/${sandColor}_cut_sandstone_to_stairs`)

		// Cut -> Slab
		event.remove({ id: `tfc:crafting/sandstone/${sandColor}_cut_slab` })

		event.stonecutting(`2x tfc:cut_sandstone/${sandColor}_slab`, `tfc:cut_sandstone/${sandColor}`)
			.id(`tfg:stonecutting/${sandColor}_cut_sandstone_to_slab`)

		// Cut -> Wall
		event.remove({ id: `tfc:crafting/sandstone/${sandColor}_cut_wall` })

		event.stonecutting(`tfc:cut_sandstone/${sandColor}_wall`, `tfc:cut_sandstone/${sandColor}`)
			.id(`tfg:stonecutting/${sandColor}_cut_sandstone_to_wall`)
	})

	// Quartz sand
	event.shaped('gtceu:quartz_sand_dust', [
		'A',
		'B'
	], {
		A: '#forge:sand',
		B: '#forge:tools/mortars'
	}).id('gtceu:shaped/quartz_sand')

	event.recipes.gtceu.macerator('quartz_sand_from_sand')
		.itemInputs('#forge:sand')
		.itemOutputs('gtceu:quartz_sand_dust')
		.duration(30)
		.EUt(2)

	event.recipes.gtceu.electrolyzer('sand_electrolysis')
		.itemInputs('8x #forge:sand')
		.itemOutputs('gtceu:silicon_dioxide_dust')
		.duration(500)
		.EUt(25)

	event.recipes.gtceu.centrifuge('gtceu:quartz_sand_separation')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(60)
		.itemInputs('2x gtceu:quartz_sand_dust')
		.itemOutputs('gtceu:quartzite_dust')
		.chancedOutput('#forge:dusts/nether_quartz', 2000, 0)

	event.recipes.gtceu.autoclave('tfg:quartz_sand_autoclave')
		.itemInputs('gtceu:quartz_sand_dust')
		.inputFluids(Fluid.of('gtceu:distilled_water', 250))
		.chancedOutput('gtceu:quartzite_gem', 4500, 0)
		.duration(60 * 20)
		.EUt(GTValues.VA[GTValues.LV])
}