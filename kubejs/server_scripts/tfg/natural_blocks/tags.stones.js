// priority: 0

function registerTFGStoneItemTags(event) {

	function addToTfcTag(rock, block) {
		if (rock.tfcTag != null) {
			event.add(rock.tfcTag, block);
		}
	}

	function addToMaterialTag(material, block) {
		if (material != null) {
			if (block.endsWith('_slab') || block.endsWith('_wall') || block.endsWith('_support')) {
				event.add(`tfg:stone_composition/${material}_half`, block);
			}
			else {
				event.add(`tfg:stone_composition/${material}`, block);
			}
		}
	}

	const SHAPES = ['stair', 'slab', 'wall'];

	for (let [rockId, rock] of Object.entries(global.BIG_ROCK_TABLE)) {

		let material = null;
		if (rock.material != null)
			material = rock.material.replace(/tfg:/g, '');

		if (rock.raw != null) {
			if (rock.collapsible) {
				event.add('tfc:rock/raw', rock.raw.block);
				event.add('forge:stone', rock.raw.block);
			}
			addToTfcTag(rock.raw.block);
			addToMaterialTag(material, rock.raw.block);

			SHAPES.forEach(shape => {
				if (rock.raw[shape] != null) {
					event.add(`tfg:rock_${shape}s`, rock.raw[shape]);
					addToTfcTag(rock.raw[shape]);
					addToMaterialTag(material, rock.raw[shape]);
				}
			})
		}

		if (rock.cobble != null) {
			event.add('tfg:interaction/cobble', rock.cobble.block);
			event.add('forge:cobblestone', rock.cobble.block);
			event.add('forge:cobblestone/normal', rock.cobble.block);
			addToTfcTag(rock.cobble.block);
			addToMaterialTag(material, rock.cobble.block);

			SHAPES.forEach(shape => {
				if (rock.cobble[shape] != null) {
					event.add(`tfg:interaction/cobble_${shape.replace(/stair/g, 'stairs')}`, rock.cobble[shape]);
					event.add(`tfg:rock_${shape}s`, rock.cobble[shape]);
					addToTfcTag(rock.cobble[shape]);
					addToMaterialTag(material, rock.cobble[shape]);
				}
			})

			if (rock.cobble.mossy != null) {
				event.add('tfg:interaction/mossy_cobble', rock.cobble.mossy.block);
				event.add('forge:cobblestone/mossy', rock.cobble.block);
				addToTfcTag(rock.cobble.mossy.block);
				addToMaterialTag(material, rock.cobble.mossy.block);

				SHAPES.forEach(shape => {
					if (rock.cobble.mossy[shape] != null) {
						event.add(`tfg:interaction/mossy_cobble_${shape.replace(/stair/g, 'stairs')}`, rock.cobble.mossy[shape]);
						event.add(`tfg:rock_${shape}s`, rock.cobble.mossy[shape]);
						addToTfcTag(rock.cobble.mossy[shape]);
						addToMaterialTag(material, rock.cobble.mossy[shape]);
					}
				})
			}
		}

		if (rock.bricks != null) {
			event.add('tfg:brick_index', rock.bricks.block);
			event.add('tfg:interaction/brick', rock.bricks.block);
			event.add('minecraft:stone_bricks', rock.bricks.block);
			event.add('forge:stone_bricks', rock.bricks.block);
			event.add('tfc:rock/bricks', rock.bricks.block);
			addToTfcTag(rock.bricks.block);
			addToMaterialTag(material, rock.bricks.block);

			SHAPES.forEach(shape => {
				if (rock.bricks[shape] != null) {
					event.add('tfg:brick_index', rock.bricks[shape]);
					event.add(`tfg:interaction/brick_${shape.replace(/stair/g, 'stairs')}`, rock.bricks[shape]);
					event.add(`tfg:brick_${shape}s`, rock.bricks[shape]);
					addToTfcTag(rock.bricks[shape]);
					addToMaterialTag(material, rock.bricks[shape]);
				}
			})

			if (rock.bricks.mossy != null) {
				event.add('tfg:brick_index', rock.bricks.mossy.block);
				event.add('tfg:interaction/mossy_brick', rock.bricks.mossy.block);
				event.add('tfc:rock/bricks', rock.bricks.block);
				event.add('tfc:rock/mossy_bricks', rock.bricks.block);
				addToTfcTag(rock.bricks.mossy.block);
				addToMaterialTag(material, rock.bricks.mossy.block);

				SHAPES.forEach(shape => {
					if (rock.bricks.mossy[shape] != null) {
						event.add('tfg:brick_index', rock.bricks.mossy[shape]);
						event.add(`tfg:interaction/mossy_brick_${shape.replace(/stair/g, 'stairs')}`, rock.bricks.mossy[shape]);
						event.add(`tfg:brick_${shape}s`, rock.bricks.mossy[shape]);
						addToTfcTag(rock.bricks.mossy[shape]);
						addToMaterialTag(material, rock.bricks.mossy[shape]);
					}
				})
			}

			if (rock.bricks.cracked != null) {
				event.add('tfg:brick_index', rock.bricks.cracked.block);
				event.add('tfg:interaction/cracked_brick', rock.bricks.cracked.block);
				event.add('tfc:rock/bricks', rock.bricks.block);
				event.add('tfc:rock/cracked_bricks', rock.bricks.block);
				addToTfcTag(rock.bricks.cracked.block);
				addToMaterialTag(material, rock.bricks.cracked.block);

				SHAPES.forEach(shape => {
					if (rock.bricks.cracked[shape] != null) {
						event.add('tfg:brick_index', rock.bricks.cracked[shape]);
						event.add(`tfg:interaction/cracked_brick_${shape.replace(/stair/g, 'stairs')}`, rock.bricks.cracked[shape]);
						event.add(`tfg:brick_${shape}s`, rock.bricks.cracked[shape]);
						addToTfcTag(rock.bricks.cracked[shape]);
						addToMaterialTag(material, rock.bricks.cracked[shape]);
					}
				})
			}
		}

		if (rock.polished != null) {
			event.add('tfg:brick_index', rock.polished.block);
			event.add('tfg:interaction/smooth_brick', rock.polished.block);
			event.add('tfc:rock/smooth', rock.polished.block);
			event.add('forge:smooth_stone', rock.polished.block);
			addToTfcTag(rock.polished.block);
			addToMaterialTag(material, rock.polished.block);
			if (rock.stonecutterTag != null) {
				event.add(rock.stonecutterTag, rock.polished.block);
			}

			SHAPES.forEach(shape => {
				if (rock.polished[shape] != null) {
					event.add('tfg:brick_index', rock.polished[shape]);
					event.add(`tfg:rock_${shape}s`, rock.polished[shape]);
					addToTfcTag(rock.polished[shape]);
					addToMaterialTag(material, rock.polished[shape]);

					if (shape == 'slab') {
						event.add('forge:smooth_stone_slabs', rock.polished.slab);
					}
				}
			})
		}

		if (rock.chiseled != null) {
			event.add('tfc:rock/bricks', rock.chiseled.block);
			event.add('tfc:rock/chiseled_bricks', rock.chiseled.block);
			addToTfcTag(rock.chiseled.block);
			addToMaterialTag(material, rock.chiseled.block);
			if (rock.stonecutterTag != null) {
				event.add(rock.stonecutterTag, rock.chiseled.block);
				addToMaterialTag(material, rock.chiseled.block);
			}
		}

		if (rock.gravel != null) {
			addToTfcTag(rock.gravel);
			addToMaterialTag(material, rock.gravel);
			if (rock.gravelTag != null) {
				event.add(rock.gravelTag, rock.gravel);
			}
		}

		if (rock.hardened != null) {
			addToTfcTag(rock.hardened);
			addToMaterialTag(material, rock.hardened);
		}

		if (rock.loose != null) {
			event.add('rnr:loose_rock_items', rock.loose);
			addToTfcTag(rock.loose);
		}

		if (rock.brick != null) {
			event.add('tfg:stone_brick', rock.brick);
			addToTfcTag(rock.brick);
		}

		if (rock.support != null) {
			addToTfcTag(rock.support);
			addToMaterialTag(material, rock.support);
		}

		if (rock.aqueduct != null) {
			addToTfcTag(rock.aqueduct);
			addToMaterialTag(material, rock.aqueduct);
		}

		if (rock.spike != null) {
			addToTfcTag(rock.spike);
		}

		if (rock.pillar != null) {
			addToTfcTag(rock.pillar);
			addToMaterialTag(material, rock.pillar);
			if (rock.stonecutterTag != null) {
				event.add(rock.stonecutterTag, rock.pillar);
			}
		}

		if (rock.pillar2 != null) {
			addToTfcTag(rock.pillar2);
			addToMaterialTag(material, rock.pillar2);
			if (rock.stonecutterTag != null) {
				event.add(rock.stonecutterTag, rock.pillar2);
			}
		}

		if (rock.stonecutting != null) {
			rock.stonecutting.forEach(blockForms => {
				event.add('tfc:rock/bricks', blockForms.block);
				event.add('tfc:rock/chiseled_bricks', blockForms.block);
				addToTfcTag(blockForms.block);
				addToMaterialTag(material, blockForms.block);
				if (rock.stonecutterTag != null) {
					event.add(rock.stonecutterTag, blockForms.block);
				}

				SHAPES.forEach(shape => {
					if (blockForms[shape] != null) {
						addToTfcTag(blockForms[shape]);
						addToMaterialTag(material, blockForms[shape]);
						if (rock.stonecutterTag != null) {
							event.add(rock.stonecutterTag, blockForms[shape]);
						}
					}
				})
			})
		}
	}

	// Stone Dusts Tag
	event.add('tfg:stone_dusts', 'gtceu:stone_dust')
	event.add('tfg:stone_dusts', 'tfg:sedimentary_clastic_dust')
	event.add('tfg:stone_dusts', 'tfg:sedimentary_carbonate_dust')
	event.add('tfg:stone_dusts', 'tfg:sedimentary_organic_dust')
	event.add('tfg:stone_dusts', 'tfg:metamorphic_dust')
	event.add('tfg:stone_dusts', 'tfg:igneous_ultramafic_dust')
	event.add('tfg:stone_dusts', 'tfg:igneous_mafic_dust')
	event.add('tfg:stone_dusts', 'tfg:igneous_intermediate_dust')
	event.add('tfg:stone_dusts', 'tfg:igneous_felsic_dust')

	// Extra basalt blocks
	event.add('forge:stone', 'minecraft:basalt')
	event.add(`tfc:igneous_extrusive_items`, 'minecraft:basalt')

	event.add('forge:smooth_stone', 'minecraft:smooth_basalt')
	event.add(`tfc:igneous_extrusive_items`, 'minecraft:smooth_basalt')
	event.add('tfc:rock/smooth', 'minecraft:smooth_basalt')

	event.add('forge:smooth_stone', 'minecraft:polished_basalt')
	event.add(`tfc:igneous_extrusive_items`, 'minecraft:polished_basalt')
	event.add('tfc:rock/smooth', 'minecraft:polished_basalt')
}


function registerTFGStoneBlockTags(event) {

	const SHAPES = ['stair', 'slab', 'wall'];

	for (let [rockId, rock] of Object.entries(global.BIG_ROCK_TABLE)) {

		if (rock.raw != null) {
			event.add('forge:stone', rock.raw.block)
			event.add('minecraft:mineable/pickaxe', rock.raw.block)
			event.add('tfc:can_carve', rock.raw.block)
			event.add('tfc:powderkeg_breaking_blocks', rock.raw.block)
			event.add('tfc:bloomery_insulation', rock.raw.block)
			event.add('firmalife:oven_insulation', rock.raw.block)
			event.add('tfc:forge_insulation', rock.raw.block)

			if (rock.collapsible && rock.cobble != null) {
				event.add('tfc:rock/raw', rock.raw.block)
				// Collapse tags also require a collapse recipe to work.
				// Don't add the recipe if you don't want them to actually collapse!
				event.add('tfc:can_collapse', rock.raw.block)
				event.add('tfc:can_trigger_collapse', rock.raw.block)
				event.add('tfc:can_start_collapse', rock.raw.block)
				event.add('tfc:breaks_when_isolated', rock.raw.block)
			}

			SHAPES.forEach(shape => {
				if (rock.raw[shape] != null) {
					event.add(`tfg:rock_${shape}s`, rock.raw[shape]);
					
					if (rock.collapsible && rock.cobble != null) {
						event.add('tfc:can_collapse', rock.raw[shape])
						event.add('tfc:can_trigger_collapse', rock.raw[shape])
						event.add('tfc:can_start_collapse', rock.raw[shape])
					}
				}
			})
		}

		if (rock.hardened != null) {
			event.add('minecraft:mineable/pickaxe', rock.hardened)
			event.add('tfc:powderkeg_breaking_blocks', rock.hardened)
			event.add('tfc:bloomery_insulation', rock.hardened)
			event.add('firmalife:oven_insulation', rock.hardened)
			event.add('tfc:forge_insulation', rock.hardened)
			event.add('tfc:can_carve', rock.hardened)
			// hardened stone always collapses, but never starts them
			event.add('tfc:can_collapse', rock.hardened)
			event.add('tfc:can_trigger_collapse', rock.hardened)
		}

		if (rock.cobble != null) {
			event.add('tfc:can_landslide', rock.cobble.block)
			event.add('forge:cobblestone', rock.cobble.block)

			if (rock.cobble.mossy != null) {
				event.add('tfc:can_landslide', rock.cobble.mossy.block)
				event.add('forge:cobblestone', rock.cobble.mossy.block)
			}
		}
		
		if (rock.gravel != null) {
			event.add('tfc:can_landslide', rock.gravel)
		}

		if (rock.polished != null) {
			event.add('tfc:bloomery_insulation', rock.polished.block);
			event.add('tfc:forge_insulation', rock.polished.block);
			event.add('firmalife:oven_insulation', rock.polished.block);

			if (rock.collapsible && rock.cobble != null) {
				event.add('tfc:can_collapse', rock.polished.block)
				event.add('tfc:can_trigger_collapse', rock.polished.block)
				event.add('tfc:can_start_collapse', rock.polished.block)
			}

			SHAPES.forEach(shape => {
				if (rock.polished[shape] != null) {
					event.add(`tfg:rock_${shape}s`, rock.polished[shape]);

					if (rock.collapsible && rock.cobble != null) {
						event.add('tfc:can_collapse', rock.polished[shape])
						event.add('tfc:can_trigger_collapse', rock.polished[shape])
						event.add('tfc:can_start_collapse', rock.polished[shape])
					}
				}
			})
		}

		if (rock.chiseled != null) {
			event.add('tfc:bloomery_insulation', rock.chiseled.block);
			event.add('tfc:forge_insulation', rock.chiseled.block);
			event.add('firmalife:oven_insulation', rock.chiseled.block);
		}

		if (rock.bricks != null) {
			event.add('tfc:bloomery_insulation', rock.bricks.block);
			event.add('tfc:forge_insulation', rock.bricks.block);
			event.add('firmalife:oven_insulation', rock.bricks.block);

			if (rock.bricks.mossy != null) {
				event.add('tfc:bloomery_insulation', rock.bricks.mossy.block);
				event.add('tfc:forge_insulation', rock.bricks.mossy.block);
				event.add('firmalife:oven_insulation', rock.bricks.mossy.block);
			}

			if (rock.bricks.cracked != null) {
				event.add('tfc:bloomery_insulation', rock.bricks.cracked.block);
				event.add('tfc:forge_insulation', rock.bricks.cracked.block);
				event.add('firmalife:oven_insulation', rock.bricks.cracked.block);
			}
		}

		if (rock.stonecutting != null) {
			rock.stonecutting.forEach(blockForms => {
				event.add('tfc:bloomery_insulation', blockForms.block);
				event.add('tfc:forge_insulation', blockForms.block);
				event.add('firmalife:oven_insulation', blockForms.block);
			})
		}
	}
}