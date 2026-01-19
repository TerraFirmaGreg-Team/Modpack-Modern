// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGRockRecipes(event) {
	function rawToPolished(id, input, output) {
		event.recipes.tfc.chisel(output, input, 'smooth')
			.id(`tfg:chisel/${id}`);

		event.recipes.tfc.damage_inputs_shapeless_crafting(event.shapeless(
			output, [input, '#tfc:chisels']
		))
		.id(`tfg:shapeless/${id}`);

		event.recipes.gtceu.laser_engraver(`tfg:${id}`)
			.itemInputs(input)
			.itemOutputs(output)
			.notConsumable('tfc:lens')
			.duration(30)
			.EUt(GTValues.VA[GTValues.ULV]);
	}

	rawToPolished('vanilla_basalt_to_smooth', 'minecraft:basalt', 'minecraft:smooth_basalt');
	rawToPolished('vanilla_smooth_to_polished', 'minecraft:smooth_basalt', 'minecraft:polished_basalt');

	function looseToCobble(id, loose, rockEntry) {
		event.shapeless(`4x ${loose}`, [rockEntry.block])
			.id(`tfg:shapeless/unpacking_${id}_cobble`);

		event.shaped(rockEntry.block, [
			'AA',
			'AA'
		], {
			A: loose
		})
		.id(`tfg:shaped/packing_${id}_cobble`);

		event.recipes.gtceu.packer(`tfg:unpacking_${id}_cobble`)
			.itemInputs(`1x ${rockEntry.block}`)
			.itemOutputs(`4x ${loose}`)
			.circuit(1)
			.duration(20)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.packer(`tfg:packing_${id}_cobble`)
			.itemInputs(`4x ${loose}`)
			.itemOutputs(`1x ${rockEntry.block}`)
			.circuit(1)
			.duration(20)
			.EUt(GTValues.VA[GTValues.ULV])

		if (rockEntry.stair != null) {
			event.shapeless(`3x ${loose}`, [rockEntry.stair]);
		}
		if (rockEntry.slab != null) {
			event.shapeless(`2x ${loose}`, [rockEntry.slab]);
		}
		if (rockEntry.wall != null) {
			event.shapeless(`2x ${loose}`, [rockEntry.wall]);
		}
	}

	function changeForms(rockId, rock, blockEntry) {
		if (blockEntry.stair != null) {
			if (blockEntry.block != null) {
				let id = linuxUnfucker(`${blockEntry.block}_to_${blockEntry.stair}`);

				if (!rock.isTFC) {
					event.recipes.tfc.chisel(blockEntry.stair, blockEntry.block, 'stair')
						.id(`tfg:chisel/${id}`);
				}

				event.stonecutting(blockEntry.stair, blockEntry.block)
					.id(`tfg:stonecutter/${id}`);
			}
		}
		if (blockEntry.slab != null) {
			if (blockEntry.block != null) {
				let id = linuxUnfucker(`${blockEntry.block}_to_${blockEntry.slab}`);

				if (!rock.isTFC) {
					event.recipes.tfc.chisel(blockEntry.slab, blockEntry.block, 'slab')
						.extraDrop(blockEntry.slab)
						.id(`tfg:chisel/${id}`);
				}
				
				event.stonecutting(`2x ${blockEntry.slab}`, blockEntry.block)
					.id(`tfg:stonecutting/${id}`);
			}
		}
		if (blockEntry.wall != null) {
			if (blockEntry.block != null) {
				event.stonecutting(blockEntry.wall, blockEntry.block)
					.id(`tfg:stonecutting/${linuxUnfucker(blockEntry.block)}_to_${linuxUnfucker(blockEntry.wall)}`)
			}
			if (blockEntry.slab != null) {
				if (!rock.isTFC) {
					event.recipes.tfc.chisel(blockEntry.wall, blockEntry.slab, 'smooth');
				}
			}
		}
	}

	for (let [rockId, rock] of Object.entries(global.BIG_ROCK_TABLE)) {

		// Bricks to brick blocks
		if (rock.brick != null && rock.bricks != null) {
			event.shaped(`4x ${rock.bricks.block}`, [
				'ABA',
				'BAB',
				'ABA'
			], {
				A: rock.brick,
				B: 'tfc:mortar'
			}).id(`tfg:shaped/${rockId}_brick_to_bricks`)

			event.recipes.gtceu.assembler(`tfg:${rockId}_brick_to_bricks`)
				.itemInputs(`5x ${rock.brick}`)
				.inputFluids(Fluid.of('gtceu:concrete', 72))
				.itemOutputs(`4x ${rock.bricks.block}`)
				.circuit(1)
				.duration(50)
				.EUt(2)
		}

		// Raw to Hardened
		if (rock.raw != null && rock.hardened != null) {
			event.shaped(`2x ${rock.hardened}`, [
				'ABA',
				'BAB',
				'ABA'
			], {
				A: rock.raw.block,
				B: 'tfc:mortar'
			}).id(`tfg:shaped/${rockId}_raw_to_hardened`)

			event.recipes.gtceu.assembler(`tfg:${rockId}_raw_to_hardened`)
				.itemInputs(`4x ${rock.raw.block}`)
				.inputFluids(Fluid.of('gtceu:concrete', 72))
				.itemOutputs(`2x ${rock.hardened}`)
				.circuit(1)
				.duration(50)
				.EUt(2)
		}

		// Loose to cobble
		if (rock.loose != null && rock.cobble != null) {
			looseToCobble(rockId, rock.loose, rock.cobble);

			if (rock.mossyLoose != null && rock.cobble.mossy != null) {
				looseToCobble(`mossy_${rockId}`, rock.mossyLoose, rock.cobble.mossy);
			}
		}

		// Loose to brick
		if (rock.loose != null && rock.brick != null) {
			event.recipes.tfc.damage_inputs_shapeless_crafting(event.shapeless(
				rock.brick, [rock.loose, '#tfc:chisels']
			))
			.id(`tfg:shapeless/${rockId}_loose_to_brick`);

			event.recipes.gtceu.cutter(`tfg:${rockId}_loose_to_brick`)
				.itemInputs(rock.loose)
				.itemOutputs(rock.brick)
				.duration(10)
				.EUt(2);
		}

		// Aqueducts
		if (rock.brick != null && rock.aqueduct != null) {
			event.shaped(rock.aqueduct, [
				'A A',
				'BAB'
			], {
				A: rock.brick,
				B: 'tfc:mortar'
			})
			.id(`tfg:shaped/${rockId}_aqueduct`);

			event.recipes.gtceu.assembler(`tfg:${rockId}_aqueduct`)
				.itemInputs(`3x ${rock.brick}`)
				.circuit(3)
				.inputFluids(Fluid.of('gtceu:concrete', 16))
				.itemOutputs(rock.aqueduct)
				.duration(50)
				.EUt(2);
		}

		// Cobble to mossy cobble
		if (rock.cobble != null && rock.cobble.mossy != null) {
			event.recipes.gtceu.assembler(`tfg:${rockId}_cobble_rocks_to_mossy_cobble`)
				.itemInputs(rock.cobble.block, '#tfc:compost_greens_low')
				.circuit(0)
				.inputFluids("#tfg:clean_water 144")
				.itemOutputs(rock.cobble.mossy.block)
				.duration(50)
				.EUt(2)
		}

		// Raw to polished
		if (rock.raw != null && rock.polished != null) {
			rawToPolished(`${rockId}_raw_to_polished`, rock.raw.block, rock.polished.block);
		}

		if (rock.hardened != null && rock.polished != null) {
			rawToPolished(`${rockId}_hardened_to_polished`, rock.hardened, rock.polished.block);
		}

		if (rock.chiseled != null && rock.bricks != null) {
			rawToPolished(`${rockId}_bricks_to_chiseled`, rock.bricks.block, rock.chiseled.block);
		}

		// Cracking
		if (rock.bricks != null && rock.bricks.cracked != null) {
			event.recipes.tfc.damage_inputs_shapeless_crafting(event.shapeless(
				rock.bricks.cracked.block, [rock.bricks.block, '#tfc:hammers']
			))
			.id(`tfg:shapeless/${rockId}_bricks_to_cracked`);

			event.recipes.gtceu.forge_hammer(`tfg:${rockId}_bricks_to_cracked`)
				.itemInputs(rock.bricks.block)
				.itemOutputs(rock.bricks.cracked.block)
				.duration(12)
				.EUt(8);

			event.recipes.greate.pressing(rock.bricks.cracked.block, rock.bricks.block)
				.recipeTier(0)
				.id(`tfg:pressing/${rockId}_bricks_to_cracked`);
		}

		// Pillars
		if (rock.bricks != null && rock.pillar != null) {
			event.shaped(`2x ${rock.pillar}`, [
				'A',
				'A'
			], {
				A: rock.bricks.block
			})
			.id(`tfg:shaped/${rockId}_pillar`);

			event.stonecutting(rock.pillar, rock.bricks.block)
				.id(`tfg:stonecutting/${rockId}_pillar`);
		}

		if (rock.bricks != null && rock.pillar2 != null) {
			event.shaped(`2x ${rock.pillar2}`, [
				'AA'
			], {
				A: rock.bricks.block
			})
			.id(`tfg:shaped/${rockId}_pillar2`);

			event.stonecutting(rock.pillar2, rock.bricks.block)
				.id(`tfg:stonecutting/${rockId}_pillar2`);
		}

		// Chiseling
		if (rock.raw != null) {
			changeForms(rockId, rock, rock.raw);
		}
		if (rock.cobble != null) {
			changeForms(rockId, rock, rock.cobble);
			if (rock.cobble.mossy != null) {
				changeForms(rockId, rock, rock.cobble.mossy);
			}
		}
		if (rock.bricks != null) {
			changeForms(rockId, rock, rock.bricks);
			if (rock.bricks.mossy != null) {
				changeForms(rockId, rock, rock.bricks.mossy);
			}
			if (rock.bricks.cracked != null) {
				changeForms(rockId, rock, rock.bricks.cracked);
			}
		}
		if (rock.polished != null) {
			changeForms(rockId, rock, rock.polished);
		}
		if (rock.chiseled != null) {
			changeForms(rockId, rock, rock.chiseled);
		}
		if (rock.stonecutting != null) {
			rock.stonecutting.forEach(stonecuttingEntry => {
				changeForms(rockId, rock, stonecuttingEntry);
			})
		}

		// Stonecutting
		if (rock.stonecutterTag != null) {
			// The create tags are already filled out, so just add the polished/chiseled blocks to it
			if (rock.stonecutterTag.startsWith('create')) {
				if (rock.polished != null)
					event.stonecutting(rock.polished.block, `#${rock.stonecutterTag}`);
				if (rock.chiseled != null)
					event.stonecutting(rock.chiseled.block, `#${rock.stonecutterTag}`);
			}
			else {
				let tag_array = Ingredient.of(`#${rock.stonecutterTag}`).itemIds.toArray().map(String);
				tag_array.forEach(item => {
					event.stonecutting(item, Ingredient.of(`#${rock.stonecutterTag}`).subtract(item))
						.id(`tfg:stonecutter/${linuxUnfucker(item)}`)
				})
			}
		}

		// Supports
		if (rock.support != null && rock.loose != null) {
			event.recipes.tfc.damage_inputs_shaped_crafting(
				event.shaped(`8x ${rock.support}`, [
					'AB ',
					'AC ',
					'AC '
				], {
					A: rock.loose,
					B: '#tfc:chisels',
					C: 'tfc:mortar'
				}).id(`tfg:shaped/${rockId}_support`)
			)

			event.recipes.gtceu.assembler(`tfg:${rockId}_support`)
				.circuit(11)
				.inputFluids(Fluid.of('gtceu:concrete', 36))
				.itemOutputs(`8x ${rock.support}`)
				.itemInputs(`3x ${rock.loose}`)
				.duration(40)
				.EUt(GTValues.VA[GTValues.ULV])
		}

		// Rock duping
		if (rock.isTFC) {
			event.recipes.gtceu.rock_breaker(`tfg:${rockId}_raw`)
				.notConsumable(rock.raw.block)
				.itemOutputs(rock.raw.block)
				.duration(16)
				.EUt(7)

			event.recipes.gtceu.rock_breaker(`tfg:${rockId}_cobble`)
				.notConsumable(rock.cobble.block)
				.itemOutputs(rock.cobble.block)
				.duration(16)
				.EUt(7)
		} else if (rock.dimension != null && rock.dimension != []) {
			let rawRecipe = event.recipes.gtceu.rock_breaker(`tfg:${rockId}_raw`)
				.notConsumable(rock.raw.block)
				.itemOutputs(rock.raw.block)
				.duration(16)
				.EUt(7)

			let cobbleRecipe = event.recipes.gtceu.rock_breaker(`tfg:${rockId}_cobble`)
				.notConsumable(rock.cobble.block)
				.itemOutputs(rock.cobble.block)
				.duration(16)
				.EUt(7)

			rock.dimension.forEach(dim => {
				rawRecipe.dimension(dim);
				cobbleRecipe.dimension(dim);
			})
		}
	}
	

	// Misc hammering recipes
	global.HAMMERING.forEach(x => {
		const id = linuxUnfucker(`${x.raw}_to_${x.hammered}`);

		event.recipes.gtceu.forge_hammer(`tfg:${id}`)
			.itemInputs(x.raw)
			.itemOutputs(x.hammered)
			.duration(x.duration)
			.EUt(x.eu);

		event.recipes.greate.pressing(x.hammered, x.raw)
			.recipeTier(x.eu <= 8 ? 0 : 1)
			.id(`tfg:pressing/${id}`);
	})

	// Alabaster
	event.recipes.gtceu.cutter("tfg:raw_alabaster_to_bricks")
		.itemInputs("tfc:alabaster/raw")
		.itemOutputs("4x tfc:alabaster_brick")
		.duration(40)
		.EUt(2)

	// TODO: do alabaster properly

	// MACERATOR
	const ROCK_COMPOSITIONS = ['sedimentary_clastic', 'sedimentary_carbonate', 'sedimentary_organic', 'metamorphic',
		'igneous_ultramafic', 'igneous_mafic', 'igneous_intermediate', 'igneous_felsic'];

	ROCK_COMPOSITIONS.forEach(composition => {
		let material = GTMaterials.get(`tfg:${composition}`);

		event.recipes.gtceu.macerator(`tfg:macerate_${composition}`)
			.itemInputs(`#tfg:stone_composition/${composition}`)
			.itemOutputs(ChemicalHelper.getDust(material, GTValues.M))
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING);

		event.recipes.gtceu.macerator(`tfg:macerate_${composition}_half`)
			.itemInputs(`#tfg:stone_composition/${composition}_half`)
			.itemOutputs(ChemicalHelper.getDust(material, GTValues.M / 2))
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING);
	})

	// COMPRESSOR
	event.recipes.gtceu.compressor('tfg:permafrost')
		.itemInputs('4x tfg:loose/permafrost')
		.itemOutputs('ad_astra:permafrost')
		.duration(40*20)
		.EUt(2)
	
	event.recipes.gtceu.compressor('tfg:venus_sandstone')
		.itemInputs('4x ad_astra:venus_sand')
		.itemOutputs('ad_astra:venus_sandstone')
		.duration(40*20)
		.EUt(2)


	// Magma Blocks
	event.remove({id: 'gtceu:compressor/magma_block'})
	event.remove({id: 'greate:splashing/obsidian'})

	// Magma block + stone group
	const MAGMA_BLOCKS = [
		{ magma: 'minecraft:magma_block',   rock: 'minecraft:blackstone' },
		{ magma: 'tfc:rock/magma/granite',  rock: 'tfc:rock/raw/granite' },
		{ magma: 'tfc:rock/magma/diorite',  rock: 'tfc:rock/raw/diorite' },
		{ magma: 'tfc:rock/magma/gabbro',   rock: 'tfc:rock/raw/gabbro' },
		{ magma: 'tfc:rock/magma/rhyolite', rock: 'tfc:rock/raw/rhyolite' },
		{ magma: 'tfc:rock/magma/basalt',   rock: 'tfc:rock/raw/basalt' },
		{ magma: 'tfc:rock/magma/andesite', rock: 'tfc:rock/raw/andesite' },
		{ magma: 'tfc:rock/magma/dacite',   rock: 'tfc:rock/raw/dacite' }
	];

	MAGMA_BLOCKS.forEach(block => {
		event.recipes.gtceu.fluid_solidifier(`tfg:gtceu/fluid_solidifier/${linuxUnfucker(block.magma)}`)
			.itemInputs(`1x ${block.rock}`)
			.inputFluids(Fluid.of('minecraft:lava', 250))
			.itemOutputs(`1x ${block.magma}`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.ULV])
			
		event.recipes.gtceu.extractor(`tfg:gtceu/extractor/${linuxUnfucker(block.magma)}`)
			.itemInputs(`1x ${block.magma}`)
			.outputFluids(Fluid.of('minecraft:lava', 250))
			.itemOutputs(`1x ${block.rock}`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.LV])
	})

	// Blackstone Buttons
	removeCutterRecipe(event, 'blackstone_button')
	removeCutterRecipe(event, 'blackstone_button_water')
	removeCutterRecipe(event, 'blackstone_button_distilled_water')
	removeCutterRecipe(event, 'cut_polished_blackstone_brickslab_into_button')
	removeCutterRecipe(event, 'cut_polished_blackstone_brickslab_into_button_water')
	removeCutterRecipe(event, 'cut_polished_blackstone_brickslab_into_button_distilled_water')

	event.recipes.gtceu.cutter('tfg:blackstone_button')
		.itemInputs('minecraft:polished_blackstone_pressure_plate')
		.itemOutputs('6x minecraft:polished_blackstone_button')
		.EUt(7)
		.duration(100)

	// Misc
	event.recipes.gtceu.cutter('tfg:vanilla_stone_slab_to_plate')
		.itemInputs('minecraft:stone_slab')
		.itemOutputs('#forge:plates/stone')
		.duration(20)
		.EUt(GTValues.VA[GTValues.LV])
}