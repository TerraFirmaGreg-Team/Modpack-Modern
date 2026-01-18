"use strict";

function registerTFGRockBlocks(event) {
	
	const SHAPES = ['stair', 'slab', 'wall']

	function createMissingForms(rock, blockEntry) {
		if (blockEntry === undefined || blockEntry === null)
			return;

		const texture = blockEntry.texture ?? blockEntry.block.replace(/:/g, ":block/");

		if (blockEntry.block.startsWith('tfg:rock/')) {
			const block = event.create(blockEntry.block)
				.textureAll(texture)
				.soundType(rock.sound ?? 'stone')
				.mapColor(rock.mapColor)
				.tagBlock('minecraft:mineable/pickaxe')
				.fullBlock(true)
				.opaque(true)

			if (rock.tfcTag != null) {
				block.tagBoth(rock.tfcTag);
			}
		}

		SHAPES.forEach(shape => {
			if (blockEntry[shape] != null && blockEntry[shape].startsWith('tfg:rock/')) {
				const block = event.create(blockEntry[shape], shape.replace(/stair/g, 'stairs'))
					.textureAll(texture)
					.soundType(rock.sound ?? 'stone')
					.mapColor(rock.mapColor)
					.tagBoth(`tfg:rock_${shape}s`)
					.tagBlock('minecraft:mineable/pickaxe')
					.fullBlock(true)
					.opaque(true)

				if (rock.tfcTag != null) {
					block.tagBoth(rock.tfcTag);
				}
			}
		})
	}


	for (const [rockId, rock] of Object.entries(global.BIG_ROCK_TABLE))
	{
		// Do raw separately because of the tfc:raw_rock builder
		const rawTexture = rock.raw.texture ?? rock.raw.block.replace(/:/g, ":block/");

		if (rock.raw.block.startsWith('tfg:rock/')) {
			const block = event.create(rock.raw.block, 'tfc:raw_rock')
				.textureAll(rawTexture)
				.soundType(rock.sound ?? 'stone')
				.mapColor(rock.mapColor)
				.tagBlock('minecraft:mineable/pickaxe')
				.fullBlock(true)
				.opaque(true)
				.naturallySupported(false)

			if (rock.tfcTag != null) {
				block.tagBoth(rock.tfcTag);
			}
		}

		SHAPES.forEach(shape => {
			if (rock.raw[shape] != null && rock.raw[shape].startsWith('tfg:rock/')) {
				const block = event.create(rock.raw[shape], shape.replace(/stair/g, 'stairs'))
					.textureAll(rawTexture)
					.soundType(rock.sound ?? 'stone')
					.mapColor(rock.mapColor)
					.tagBoth(`tfg:rock_${shape}s`)
					.tagBlock('minecraft:mineable/pickaxe')
					.fullBlock(true)
					.opaque(true)

				if (rock.tfcTag != null) {
					block.tagBoth(rock.tfcTag);
				}
			}
		})

		// TODO: tag blocks as can_landslide and forge:cobblestone and forge:cobblestone/normal
		createMissingForms(rock, rock.cobble);
		if (rock.cobble != null) {
			createMissingForms(rock, rock.cobble.mossy); // TODO: forge:cobblestone/mossy
		}
		// TODO: tag as minecraft:stone_bricks and forge:stone_bricks and tfc:rock/bricks
		createMissingForms(rock.bricks);
		if (rock.bricks != null) {
			createMissingForms(rock, rock.bricks.mossy); // TODO: tag as tfc:rock/mossy_bricks
			createMissingForms(rock, rock.bricks.cracked); // TODO: tag as tfc:rock/cracked_bricks
		}
		// TODO: tag as tfc:rock/smooth
		createMissingForms(rock, rock.polished);
		// TODO: tag as tfc:rock/chiseled_bricks
		createMissingForms(rock, rock.chiseled);

		if (rock.stonecutting != null) {
			rock.stonecutting.forEach(stonecuttingEntry => {
				createMissingForms(rock, stonecuttingEntry);
				createMissingForms(rock, stonecuttingEntry.mossy);
				createMissingForms(rock, stonecuttingEntry.cracked);
			});
		}

		// Individual blocks

		// Hardened
		if (rock.hardened != null && rock.hardened.startsWith('tfg:rock/')) {
			event.create(rock.hardened)
				.soundType(rock.sound ?? 'stone')
				.property(BlockProperties.AXIS)
				.requiresTool(true)
				.item(item => {
					item.modelJson({ parent: 'minecraft:item/deepslate' })
				})
				.tagBlock('tfc:can_carve')
				.tagBoth('forge:stone')
				.tagBoth('tfc:rock/hardened')
				.tagBoth(rock.tfcTag)
				.mapColor(rock.mapColor)
				.tagBlock('minecraft:mineable/pickaxe')
				.fullBlock(true)
				.opaque(true)
		}
		
		const tfcRockType = rock.tfcTag.replace(/tfc:/g, "").replace(/_items/g, "");

		// Loose
		if (rock.loose != null && rock.loose.startsWith('tfg:loose/')) {
			event.create(rock.loose, 'tfc:loose_rock')
				.soundType(rock.sound ?? 'stone')
				.itemTexture(rock.loose.replace(/:/g, ":item/"))
				.textureAll(rawTexture)
				.rockTypeModel(tfcRockType)
				.mapColor(rock.mapColor)
				.tagBlock('tfc:loose_rocks')
				.tagItem('tfc:any_knapping')
				.tagItem('tfc:rock_knapping')
				.tagItem(`tfc:${tfcRockType}_rock`)
				.tagBoth(rock.tfcTag)
				.tagItem("rnr:loose_rock_items")
		}

		// Spike
		if (rock.spike != null && rock.spike.startsWith('tfg:spike/')) {
			event.create(rock.spike, 'tfc:rock_spike')
				.textureAll(rawTexture)
				.soundType(rock.sound ?? 'stone')
				.tagBoth(rock.tfcTag)
				.mapColor(rock.mapColor)
				.tagBlock('minecraft:mineable/pickaxe')
				.hardness(0.8)
				.resistance(0.8)
				.requiresTool(true)
		}

		// Gravel
		if (rock.gravel != null && rock.gravel.startsWith('tfg:rock/')) {
			event.create(rock.gravel)
				.soundType('gravel')
				.tagBoth('forge:gravel')
				.tagBoth('tfc:rock/gravel')
				.tagBoth(rock.tfcTag)
				.mapColor(rock.mapColor)
				.tagBlock('minecraft:mineable/shovel')
				.tagBlock('tfc:can_landslide')
				.tagItem(rock.gravelTag)
				.fullBlock(true)
				.opaque(true)
		}

		// Aqueducts
		if (rock.aqueduct != null && rock.aqueduct.startsWith('tfg:rock/')) {
			event.create(rock.aqueduct, 'tfc:aqueduct')
				.soundType(rock.sound ?? 'stone')
				.textureAll(rock.bricks.texture ?? rock.bricks.block.replace(/:/g, ":block/"))
				.mapColor(rock.mapColor)
				.tagBoth(rock.tfcTag)
				.tagBoth('tfg:rock/aqueducts')
		}
		
		// Supports
		if (rock.support != null && rock.support.startsWith('tfg:')) {
			event.create(rock.support, 'tfc:support')
				.textureAll(rawTexture)
				.horizontal(horizontal => {
					horizontal.textureAll(rawTexture)
					horizontal.soundType(rock.sound ?? 'stone')
					horizontal.hardness(5)
					horizontal.resistance(8)
					horizontal.mapColor(rock.mapColor)
					horizontal.tagBlock('minecraft:mineable/pickaxe')
					horizontal.requiresTool(true)
				})
				.soundType(rock.sound ?? 'stone')
				.hardness(5)
				.resistance(8)
				.mapColor(rock.mapColor)
				.tagBlock('minecraft:mineable/pickaxe')
				.tagBoth(rock.tfcTag)
				.requiresTool(true)
		}		
	}


	// #region Sandstone
	event.create('tfg:rock/smooth_red_sandstone_wall', 'wall')
		.soundType('stone')
		.textureAll('minecraft:block/red_sandstone_top')
		.mapColor('teracotta_red')
		.tagBlock('minecraft:mineable/pickaxe')
		.fullBlock(true)
		.opaque(true)

	event.create('tfg:rock/cut_red_sandstone_stairs', 'stairs')
		.soundType('stone')
		.textureAll('minecraft:block/cut_red_sandstone')
		.mapColor('teracotta_red')
		.tagBlock('minecraft:mineable/pickaxe')
		.fullBlock(true)
		.opaque(true)
		
	event.create('tfg:rock/cut_red_sandstone_wall', 'wall')
		.soundType('stone')
		.textureAll('minecraft:block/cut_red_sandstone')
		.mapColor('teracotta_red')
		.tagBlock('minecraft:mineable/pickaxe')
		.fullBlock(true)
		.opaque(true)

	event.create('tfg:rock/bricks_venus_sandstone_wall', 'wall')
		.soundType('stone')
		.textureAll('ad_astra:block/venus_sandstone_bricks')
		.mapColor(global.STONE_CHARACS.venus.mapColor)
		.tagBlock('minecraft:mineable/pickaxe')
		.fullBlock(true)
		.opaque(true)

	SHAPES.forEach(shape => {
		event.create(`tfg:rock/cracked_bricks_venus_sandstone_${shape}`, shape)
			.soundType(global.STONE_CHARACS.venus.sound)
			.textureAll('ad_astra:block/cracked_venus_sandstone_bricks')
			.tagBoth(`tfg:brick_${shape}`.replace(/ss/g, 's'))
			.mapColor(global.STONE_CHARACS.venus.mapColor)
			.tagBlock('minecraft:mineable/pickaxe')
			.fullBlock(true)
			.opaque(true)
	})

	// #endregion Sandstone

}