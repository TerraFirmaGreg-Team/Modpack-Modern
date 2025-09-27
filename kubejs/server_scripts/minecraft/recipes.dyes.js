// priority: 0
"use strict";

function registerMinecraftDyeRecipes(event) {

	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		event.remove({ id: `minecraft:dye_${dye}_wool` })
		event.remove({ id: `minecraft:${dye}_candle` })
		event.remove({ id: `minecraft:dye_${dye}_carpet` })
		event.remove({ id: `minecraft:${dye}_bed` })
		event.remove({ id: `minecraft:dye_${dye}_bed` })

		//#region Выход: Ковры, Кровати

		event.shapeless(`2x minecraft:${dye}_carpet`, [
			'#tfc:saws',
			`minecraft:${dye}_wool`
		]).id(`minecraft:${dye}_carpet`)

		if (dye !== 'white') {
			event.recipes.gtceu.chemical_bath(`tfg:${dye}_carpet`)
				.itemInputs(`minecraft:white_carpet`)
				.inputFluids(Fluid.of(`tfc:${dye}_dye`, 72))
				.itemOutputs(`minecraft:${dye}_carpet`)
				.duration(300)
				.EUt(4)
				.category(GTRecipeCategories.CHEM_DYES)

			event.recipes.gtceu.chemical_bath(`${dye}_bed`)
					.itemInputs(`minecraft:white_bed`)
					.inputFluids(Fluid.of(`tfc:${dye}_dye`, 216))
					.itemOutputs(`minecraft:${dye}_bed`)
					.duration(300)
					.EUt(4)
					.category(GTRecipeCategories.CHEM_DYES)
		}

		//#endregion
	})

	// White
	event.remove({ id: 'minecraft:white_dye_from_lily_of_the_valley' })
	event.remove({ id: 'gtceu:extractor/lily_of_the_valley_dye' })

	event.recipes.gtceu.extractor('white_dye')
		.itemInputs('1x #tfc:makes_white_dye')
		.itemOutputs('2x minecraft:white_dye')
		.duration(200)
		.EUt(2)

	event.recipes.createMilling('2x minecraft:white_dye', '1x #tfc:makes_white_dye')
		.id('tfg:milling/white_dye')

	// Red
	event.remove({ id: 'minecraft:red_dye_from_tulip' })
	event.remove({ id: 'minecraft:red_dye_from_rose_bush' })
	event.remove({ id: 'minecraft:red_dye_from_poppy' })
	event.remove({ id: 'minecraft:red_dye_from_beetroot' })
	event.remove({ id: 'gtceu:extractor/rose_bush_dye' })
	event.remove({ id: 'gtceu:extractor/red_tulip_dye' })
	event.remove({ id: 'gtceu:extractor/poppy_dye' })
	event.remove({ id: 'gtceu:extractor/beetroot_dye' })

	event.recipes.gtceu.extractor('red_dye')
		.itemInputs('1x #tfc:makes_red_dye')
		.itemOutputs('2x minecraft:red_dye')
		.duration(200)
		.EUt(2)

	event.recipes.createMilling('2x minecraft:red_dye', '1x #tfc:makes_red_dye')
		.id('tfg:milling/red_dye')

	// Lime
	event.remove({ id: 'minecraft:lime_dye_from_smelting' })

	event.recipes.gtceu.extractor('lime_dye')
		.itemInputs('1x tfc:plant/moss')
		.itemOutputs('2x minecraft:lime_dye')
		.duration(200)
		.EUt(2)

	event.recipes.createMilling('2x minecraft:lime_dye', '1x #tfc:makes_lime_dye')
		.id('tfg:milling/lime_dye')

	// Light Blue
	event.remove({ id: 'minecraft:light_blue_dye_from_blue_orchid' })
	event.remove({ id: 'gtceu:extractor/blue_orchid_dye' })

	event.recipes.gtceu.extractor('light_blue_dye')
		.itemInputs('1x #tfc:makes_light_blue_dye')
		.itemOutputs('2x minecraft:light_blue_dye')
		.duration(200)
		.EUt(2)

	event.recipes.createMilling('2x minecraft:light_blue_dye', '1x #tfc:makes_light_blue_dye')
		.id('tfg:milling/light_blue_dye')

	// Green
	event.remove({ id: 'minecraft:green_dye' })

	event.recipes.gtceu.extractor('green_dye')
		.itemInputs('1x #tfc:makes_green_dye')
		.itemOutputs('2x minecraft:green_dye')
		.duration(200)
		.EUt(2)

	event.recipes.createMilling('2x minecraft:green_dye', '1x #tfc:makes_green_dye')
		.id('tfg:milling/green_dye')

	// Magenta
	event.remove({ id: 'minecraft:magenta_dye_from_lilac' })
	event.remove({ id: 'minecraft:magenta_dye_from_allium' })
	event.remove({ id: 'gtceu:extractor/lilac_dye' })
	event.remove({ id: 'gtceu:extractor/allium_dye' })

	event.recipes.gtceu.extractor('magenta_dye')
		.itemInputs('1x #tfc:makes_magenta_dye')
		.itemOutputs('2x minecraft:magenta_dye')
		.duration(200)
		.EUt(2)

	event.recipes.createMilling('2x minecraft:magenta_dye', '1x #tfc:makes_magenta_dye')
		.id('tfg:milling/magenta_dye')

	// Orange
	event.remove({ id: 'minecraft:orange_dye_from_torchflower' })
	event.remove({ id: 'minecraft:orange_dye_from_orange_tulip' })
	event.remove({ id: 'gtceu:extractor/orange_tulip_dye' })

	event.recipes.gtceu.extractor('orange_dye')
		.itemInputs('1x #tfc:makes_orange_dye')
		.itemOutputs('2x minecraft:orange_dye')
		.duration(200)
		.EUt(2)

	event.recipes.createMilling('2x minecraft:orange_dye', '1x #tfc:makes_orange_dye')
		.id('tfg:milling/orange_dye')

	// Purple
	event.recipes.gtceu.extractor('purple_dye')
		.itemInputs('1x #tfc:makes_purple_dye')
		.itemOutputs('2x minecraft:purple_dye')
		.duration(200)
		.EUt(2)

	event.recipes.createMilling('2x minecraft:purple_dye', '1x #tfc:makes_purple_dye')
		.id('tfg:milling/purple_dye')

	// Brown
	event.remove({ id: 'minecraft:brown_dye' })

	event.recipes.gtceu.extractor('brown_dye')
		.itemInputs('1x #tfc:makes_brown_dye')
		.itemOutputs('2x minecraft:brown_dye')
		.duration(200)
		.EUt(2)

	event.recipes.createMilling('2x minecraft:brown_dye', '1x #tfc:makes_brown_dye')
		.id('tfg:milling/brown_dye')

	// Light Gray
	event.remove({ id: 'minecraft:light_gray_dye_from_white_tulip' })
	event.remove({ id: 'minecraft:light_gray_dye_from_azure_bluet' })
	event.remove({ id: 'minecraft:light_gray_dye_from_oxeye_daisy' })
	event.remove({ id: 'gtceu:extractor/white_tulip_dye' })
	event.remove({ id: 'gtceu:extractor/azure_bluet_dye' })
	event.remove({ id: 'gtceu:extractor/oxeye_daisy_dye' })

	event.recipes.gtceu.extractor('light_gray_dye')
		.itemInputs('1x tfc:plant/yucca')
		.itemOutputs('2x minecraft:light_gray_dye')
		.duration(200)
		.EUt(2)

	event.recipes.createMilling('2x minecraft:light_gray_dye', '1x #tfc:makes_light_gray_dye')
		.id('tfg:milling/light_gray_dye')

	// Yellow
	event.remove({ id: 'minecraft:yellow_dye_from_sunflower' })
	event.remove({ id: 'minecraft:yellow_dye_from_dandelion' })
	event.remove({ id: 'gtceu:extractor/sunflower_dye' })
	event.remove({ id: 'gtceu:extractor/dandelion_dye' })

	event.recipes.gtceu.extractor('yellow_dye')
		.itemInputs('1x #tfc:makes_yellow_dye')
		.itemOutputs('2x minecraft:yellow_dye')
		.duration(200)
		.EUt(2)

	event.recipes.createMilling('2x minecraft:yellow_dye', '1x #tfc:makes_yellow_dye')
		.id('tfg:milling/yellow_dye')

	// Blue
	event.remove({ id: 'minecraft:blue_dye_from_cornflower' })
	event.remove({ id: 'gtceu:extractor/cornflower_dye' })

	event.recipes.gtceu.extractor('blue_dye')
		.itemInputs('1x #tfc:makes_blue_dye')
		.itemOutputs('2x minecraft:blue_dye')
		.duration(200)
		.EUt(2)

	event.recipes.createMilling('2x minecraft:blue_dye', '1x #tfc:makes_blue_dye')
		.id('tfg:milling/blue_dye')

	// Pink
	event.remove({ id: 'minecraft:pink_dye_from_pink_petals' })
	event.remove({ id: 'minecraft:pink_dye_from_pink_tulip' })
	event.remove({ id: 'minecraft:pink_dye_from_peony' })
	event.remove({ id: 'gtceu:extractor/pink_tulip_dye' })
	event.remove({ id: 'gtceu:extractor/peony_dye' })

	event.recipes.gtceu.extractor('pink_dye')
		.itemInputs('1x #tfc:makes_pink_dye')
		.itemOutputs('2x minecraft:pink_dye')
		.duration(200)
		.EUt(2)

	event.recipes.createMilling('2x minecraft:pink_dye', '1x #tfc:makes_pink_dye')
		.id('tfg:milling/pink_dye')

	// Cyan
	event.remove({ id: 'minecraft:cyan_dye_from_pitcher_plant' })

	// Black
	event.remove({ id: 'minecraft:black_dye_from_wither_rose' })
	event.remove({ id: 'gtceu:extractor/wither_rose_dye' })


	//#region Выход: Кровати

	event.recipes.gtceu.chemical_bath(`bed_decolor`)
		.itemInputs('#tfc:colored_bed')
		.inputFluids(Fluid.of(`gtceu:chlorine`, 72))
		.itemOutputs(`minecraft:white_bed`)
		.duration(300)
		.EUt(4)
        .category(GTRecipeCategories.CHEM_DYES)

	//#endregion
}