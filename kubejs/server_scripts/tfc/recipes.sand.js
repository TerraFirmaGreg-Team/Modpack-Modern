// priority: 0
"use strict";

function registerTFCSandRecipes(event) {

	// Нефтеносный -> Желтый песок
	event.recipes.gtceu.centrifuge('oilsands_ore_separation')
		.itemInputs('#forge:ores/oilsands')
		.chancedOutput('tfc:sand/yellow', 5000, 5000)
		.outputFluids(Fluid.of('gtceu:oil', 2000))
		.duration(200)
		.EUt(30)

	// Пыль нефтеносного песка -> Желтый песок
	event.recipes.gtceu.centrifuge('oilsands_dust_separation')
		.itemInputs('gtceu:oilsands_dust')
		.chancedOutput('tfc:sand/yellow', 5000, 5000)
		.outputFluids(Fluid.of('gtceu:oil', 2000))
		.duration(200)
		.EUt(30)

	// Земля -> Желтый песок
	event.recipes.gtceu.centrifuge('dirt_separation')
		.itemInputs('#tfc:dirt')
		.chancedOutput('gtceu:plant_ball', 1250, 700)
		.chancedOutput('tfc:sand/yellow', 5000, 1200)
		.chancedOutput('gtceu:tiny_clay_dust', 4000, 900)
		.duration(250)
		.EUt(30)

	// Рецепты где нужно итерироваться по всем цветам
	global.SAND_COLORS.forEach(sandColor => {
		// Песчанник -> Песок
		event.recipes.gtceu.forge_hammer(`raw_${sandColor}_sandstone_to_sand`)
			.itemInputs(`tfc:raw_sandstone/${sandColor}`)
			.itemOutputs(`4x tfc:sand/${sandColor}`)
			.duration(20*3.5)
			.EUt(2)

		event.recipes.greate.pressing(`4x tfc:sand/${sandColor}`, `tfc:raw_sandstone/${sandColor}`)
			.recipeTier(1)
			.id(`greate:pressing/raw_${sandColor}_sandstone_to_sand`)

		// Гладкий песчанник -> Песок
		event.recipes.gtceu.forge_hammer(`smooth_${sandColor}_sandstone_to_sand`)
			.itemInputs(`tfc:smooth_sandstone/${sandColor}`)
			.itemOutputs(`4x tfc:sand/${sandColor}`)
			.duration(20*3.5)
			.EUt(2)

		event.recipes.greate.pressing(`4x tfc:sand/${sandColor}`, `tfc:smooth_sandstone/${sandColor}`)
			.recipeTier(1)
			.id(`greate:pressing/smooth_${sandColor}_sandstone_to_sand`)

		// Обрезанный песчанник -> Песок
		event.recipes.gtceu.forge_hammer(`cut_${sandColor}_sandstone_to_sand`)
			.itemInputs(`tfc:cut_sandstone/${sandColor}`)
			.itemOutputs(`4x tfc:sand/${sandColor}`)
			.duration(20*3.5)
			.EUt(2)

		event.recipes.greate.pressing(`4x tfc:sand/${sandColor}`, `tfc:cut_sandstone/${sandColor}`)
			.recipeTier(1)
			.id(`greate:pressing/cut_${sandColor}_sandstone_to_sand`)

		// Песок -> Песчанник
		event.recipes.gtceu.compressor(`sand_${sandColor}_to_sandstone`)
			.itemInputs(`4x tfc:sand/${sandColor}`)
			.itemOutputs(`tfc:raw_sandstone/${sandColor}`)
			.duration(400)
			.EUt(2)

		// Песчанник -> Гладкий песчанник
		event.stonecutting(`tfc:smooth_sandstone/${sandColor}`, `tfc:raw_sandstone/${sandColor}`)
			.id(`tfg:stonecutting/raw_sandstone_${sandColor}_to_smooth_sandstone`)

		// Песчанник -> Обрезанный песчанник
		event.stonecutting(`tfc:cut_sandstone/${sandColor}`, `tfc:raw_sandstone/${sandColor}`)
			.id(`raw_sandstone_${sandColor}_to_cut_sandstone`)

		// Песчанник -> Ступень
		event.remove({ id: `tfc:crafting/sandstone/${sandColor}_raw_stairs` })

		event.stonecutting(`tfc:raw_sandstone/${sandColor}_stairs`, `tfc:raw_sandstone/${sandColor}`)
			.id(`tfg:stonecutting/${sandColor}_sandstone_to_stairs`)

		// Песчанник -> Плита
		event.remove({ id: `tfc:crafting/sandstone/${sandColor}_raw_slab` })

		event.stonecutting(`2x tfc:raw_sandstone/${sandColor}_slab`, `tfc:raw_sandstone/${sandColor}`)
			.id(`tfg:stonecutting/${sandColor}_sandstone_to_slabs`)

		// Песчанник -> Стена
		event.remove({ id: `tfc:crafting/sandstone/${sandColor}_raw_wall` })

		event.stonecutting(`tfc:raw_sandstone/${sandColor}_wall`, `tfc:raw_sandstone/${sandColor}`)
			.id(`tfg:stonecutting/${sandColor}_sandstone_to_wall`)

		// Гладкий песчанник -> Ступень
		event.remove({ id: `tfc:crafting/sandstone/${sandColor}_smooth_stairs` })

		event.stonecutting(`tfc:smooth_sandstone/${sandColor}_stairs`, `tfc:smooth_sandstone/${sandColor}`)
			.id(`tfg:stonecutting/${sandColor}_smooth_sandstone_to_stairs`)

		// Гладкий песчанник -> Плита
		event.remove({ id: `tfc:crafting/sandstone/${sandColor}_smooth_slab` })

		event.stonecutting(`2x tfc:smooth_sandstone/${sandColor}_slab`, `tfc:smooth_sandstone/${sandColor}`)
			.id(`tfg:stonecutting/${sandColor}_smooth_sandstone_to_slab`)

		// Гладкий песчанник -> Стена
		event.remove({ id: `tfc:crafting/sandstone/${sandColor}_smooth_wall` })

		event.stonecutting(`tfc:smooth_sandstone/${sandColor}_wall`, `tfc:smooth_sandstone/${sandColor}`)
			.id(`tfg:stonecutting/${sandColor}_smooth_sandstone_to_wall`)

		// Обрезанный песчанник -> Ступень
		event.remove({ id: `tfc:crafting/sandstone/${sandColor}_cut_stairs` })

		event.stonecutting(`tfc:cut_sandstone/${sandColor}_stairs`, `tfc:cut_sandstone/${sandColor}`)
			.id(`tfg:stonecutting/${sandColor}_cut_sandstone_to_stairs`)

		// Обрезанный песчанник -> Плита
		event.remove({ id: `tfc:crafting/sandstone/${sandColor}_cut_slab` })

		event.stonecutting(`2x tfc:cut_sandstone/${sandColor}_slab`, `tfc:cut_sandstone/${sandColor}`)
			.id(`tfg:stonecutting/${sandColor}_cut_sandstone_to_slab`)

		// Обрезанный песчанник -> Стена
		event.remove({ id: `tfc:crafting/sandstone/${sandColor}_cut_wall` })

		event.stonecutting(`tfc:cut_sandstone/${sandColor}_wall`, `tfc:cut_sandstone/${sandColor}`)
			.id(`tfg:stonecutting/${sandColor}_cut_sandstone_to_wall`)

	})

	// Коричневый гравий -> Песок
	event.recipes.gtceu.forge_hammer('brown_gravel_to_sand')
		.itemInputs('#tfc:brown_gravel')
		.itemOutputs('tfc:sand/brown')
		.duration(20*3.5)
		.EUt(2)

	event.recipes.greate.pressing('tfc:sand/brown', '#tfc:brown_gravel')
		.recipeTier(1)
		.id(`greate:pressing/brown_gravel_to_sand`)

	// Белый гравий -> Песок
	event.recipes.gtceu.forge_hammer('white_gravel_to_sand')
		.itemInputs('#tfc:white_gravel')
		.itemOutputs('tfc:sand/white')
		.duration(20*3.5)
		.EUt(2)

	event.recipes.greate.pressing('tfc:sand/white', '#tfc:white_gravel')
		.recipeTier(1)
		.id(`greate:pressing/white_gravel_to_sand`)

	// Черный гравий -> Песок
	event.recipes.gtceu.forge_hammer('black_gravel_to_sand')
		.itemInputs('#tfc:black_gravel')
		.itemOutputs('tfc:sand/black')
		.duration(20*3.5)
		.EUt(2)

	event.recipes.greate.pressing('tfc:sand/black', '#tfc:black_gravel')
		.recipeTier(1)
		.id(`greate:pressing/black_gravel_to_sand`)

	// Красный гравий -> Песок
	event.recipes.gtceu.forge_hammer('red_gravel_to_sand')
		.itemInputs('#tfc:red_gravel')
		.itemOutputs('tfc:sand/red')
		.duration(20*3.5)
		.EUt(2)

	event.recipes.greate.pressing('tfc:sand/red', '#tfc:red_gravel')
		.recipeTier(1)
		.id(`greate:pressing/red_gravel_to_sand`)

	// Желтый гравий -> Песок
	event.recipes.gtceu.forge_hammer('yellow_gravel_to_sand')
		.itemInputs('#tfc:yellow_gravel')
		.itemOutputs('tfc:sand/yellow')
		.duration(20*3.5)
		.EUt(2)

	event.recipes.greate.pressing('tfc:sand/yellow', '#tfc:yellow_gravel')
		.recipeTier(1)
		.id(`greate:pressing/yellow_gravel_to_sand`)

	// Зеленый гравий -> Песок
	event.recipes.gtceu.forge_hammer('green_gravel_to_sand')
		.itemInputs('#tfc:green_gravel')
		.itemOutputs('tfc:sand/green')
		.duration(20*3.5)
		.EUt(2)

	event.recipes.greate.pressing('tfc:sand/green', '#tfc:green_gravel')
		.recipeTier(1)
		.id(`greate:pressing/green_gravel_to_sand`)

	// Розовый гравий -> Песок
	event.recipes.gtceu.forge_hammer('pink_gravel_to_sand')
		.itemInputs('#tfc:pink_gravel')
		.itemOutputs('tfc:sand/pink')
		.duration(20*3.5)
		.EUt(2)

	event.recipes.greate.pressing('tfc:sand/pink', '#tfc:pink_gravel')
		.recipeTier(1)
		.id(`greate:pressing/pink_gravel_to_sand`)
}