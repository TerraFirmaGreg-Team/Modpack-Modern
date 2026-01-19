"use strict";

function registerTFGRockBlocks(event) {
	
	const SHAPES = ['stair', 'slab', 'wall'];

	function createMissingForms(rock, blockEntry) {
		if (blockEntry === undefined || blockEntry === null)
			return;

		let texture = blockEntry.texture ?? blockEntry.block.replace(/:/g, ":block/");

		if (blockEntry.block.startsWith('tfg:rock/')) {
			let block = event.create(blockEntry.block)
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
				let block = event.create(blockEntry[shape], shape.replace(/stair/g, 'stairs'))
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
		})
	}


	for (let [rockId, rock] of Object.entries(global.BIG_ROCK_TABLE)) {
		// Do raw separately because of the tfc:raw_rock builder
		let rawTexture = "";
		if (rock.raw != null) {
			rawTexture = rock.raw.texture ?? rock.raw.block.replace(/:/g, ":block/");

			if (rock.raw.block.startsWith('tfg:rock/')) {
				let block = event.create(rock.raw.block, 'tfc:raw_rock')
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
					let block = event.create(rock.raw[shape], shape.replace(/stair/g, 'stairs'))
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
		}

		createMissingForms(rock, rock.cobble);
		if (rock.cobble != null) {
			createMissingForms(rock, rock.cobble.mossy);
		}
		createMissingForms(rock, rock.bricks);
		if (rock.bricks != null) {
			createMissingForms(rock, rock.bricks.mossy);
			createMissingForms(rock, rock.bricks.cracked);
		}
		createMissingForms(rock, rock.polished);
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
		if (rock.raw != null && rock.hardened != null && rock.hardened.startsWith('tfg:rock/')) {
			let hardened = event.create(rock.hardened)
				.textureAll(rawTexture)
				.soundType(rock.sound ?? 'stone')
				.property(BlockProperties.AXIS)
				.requiresTool(true)
				.tagBlock('tfc:can_carve')
				.tagBoth('forge:stone')
				.tagBoth('tfc:rock/hardened')
				.mapColor(rock.mapColor)
				.tagBlock('minecraft:mineable/pickaxe')
				.fullBlock(true)
				.opaque(true)

			if (rock.tfcTag != null) {
				hardened.tagBoth(rock.tfcTag);
			}
		}
		

		// Loose
		if (rock.raw != null && rock.loose != null && rock.loose.startsWith('tfg:loose/')) {
			let looseRock = event.create(rock.loose, 'tfc:loose_rock')
				.soundType(rock.sound ?? 'stone')
				.itemTexture(rock.loose.replace(/:/g, ":item/"))
				.textureAll(rawTexture)
				.mapColor(rock.mapColor)
				.tagBlock('tfc:loose_rocks')
				.tagItem('tfc:any_knapping')
				.tagItem('tfc:rock_knapping')
				.tagBoth(rock.tfcTag)
				.tagItem("rnr:loose_rock_items")

			if (rock.tfcTag != null) {
				let tfcRockType = rock.tfcTag.replace(/tfc:/g, "").replace(/_items/g, "");
				looseRock.rockTypeModel(tfcRockType);
				looseRock.tagBoth(rock.tfcTag)
				looseRock.tagItem(`tfc:${tfcRockType}_rock`)
			}
			else {
				looseRock.rockTypeModel('sedimentary');
			}
		}

		// Spike
		if (rock.raw != null && rock.spike != null && rock.spike.startsWith('tfg:spike/')) {
			let spike = event.create(rock.spike, 'tfc:rock_spike')
				.textureAll(rawTexture)
				.soundType(rock.sound ?? 'stone')
				.mapColor(rock.mapColor)
				.tagBlock('minecraft:mineable/pickaxe')
				.hardness(0.8)
				.resistance(0.8)
				.requiresTool(true)

			if (rock.tfcTag != null) {
				spike.tagBoth(rock.tfcTag);
			}
		}

		// Gravel
		if (rock.gravel != null && rock.gravel.startsWith('tfg:rock/')) {
			let gravel = event.create(rock.gravel)
				.soundType('gravel')
				.tagBoth('forge:gravel')
				.tagBoth('tfc:rock/gravel')
				.mapColor(rock.mapColor)
				.tagBlock('minecraft:mineable/shovel')
				.tagBlock('tfc:can_landslide')
				.fullBlock(true)
				.opaque(true)

			if (rock.tfcTag != null) {
				gravel.tagBoth(rock.tfcTag);
			}
			if (rock.gravelTag != null) {
				gravel.tagItem(rock.gravelTag)
			}
		}

		// Aqueducts
		if (rock.bricks != null && rock.aqueduct != null && rock.aqueduct.startsWith('tfg:rock/')) {
			let aqueduct = event.create(rock.aqueduct, 'tfc:aqueduct')
				.soundType(rock.sound ?? 'stone')
				.textureAll(rock.bricks.texture ?? rock.bricks.block.replace(/:/g, ":block/"))
				.mapColor(rock.mapColor)
				.tagBoth('tfg:rock/aqueducts')

			if (rock.tfcTag != null) {
				aqueduct.tagBoth(rock.tfcTag);
			}
		}
		
		// Supports
		if (rock.raw != null && rock.support != null && rock.support.startsWith('tfg:')) {
			let support = event.create(rock.support, 'tfc:support')
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
				.requiresTool(true)

			if (rock.tfcTag != null) {
				support.tagBoth(rock.tfcTag);
			}
		}

		// Pillar
		if (rock.pillar != null && rock.pillar.startsWith('tfg:rock/')) {
			let block = event.create(rock.pillar)
				.textureAll(rock.pillar.replace(/:/g, ":block/"))
				.soundType(rock.sound ?? 'stone')
				.mapColor(rock.mapColor)
				.tagBlock('minecraft:mineable/pickaxe')
				.fullBlock(true)
				.opaque(true)

			if (rock.tfcTag != null) {
				block.tagBoth(rock.tfcTag);
			}
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
		.mapColor(global.BIG_ROCK_TABLE.venus_stone.mapColor)
		.tagBlock('minecraft:mineable/pickaxe')
		.fullBlock(true)
		.opaque(true)

	SHAPES.forEach(shape => {
		event.create(`tfg:rock/cracked_bricks_venus_sandstone_${shape}`, shape.replace(/stair/g, 'stairs'))
			.soundType(global.BIG_ROCK_TABLE.venus_stone.sound)
			.textureAll('ad_astra:block/cracked_venus_sandstone_bricks')
			.tagBoth(`tfg:brick_${shape}s`)
			.mapColor(global.BIG_ROCK_TABLE.venus_stone.mapColor)
			.tagBlock('minecraft:mineable/pickaxe')
			.fullBlock(true)
			.opaque(true)
	})

	// #endregion Sandstone

}