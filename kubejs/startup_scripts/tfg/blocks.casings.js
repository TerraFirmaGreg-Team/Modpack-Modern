"use strict";

function registerTFGCasingBlocks(event) {

	global.TFG_MACHINE_CASINGS.forEach(type => {
		event.create(`tfg:casings/${type}`)
			.translationKey(`block.tfg.casings.${type}`)
			.model(`tfg:block/casings/${type}`)
			.soundType('copper')
			.hardness(5)
			.resistance(6)
			.tagBlock('gtceu:mineable/pickaxe_or_wrench')
			.tagBoth('tfg:casings')
			.mapColor('color_light_gray')
	})

	event.create(`tfg:casings/machine_casing_stainless_evaporation`)
		.translationKey(`block.tfg.casings.machine_casing_stainless_evaporation`)
		.model(`tfg:block/casings/machine_casing_stainless_evaporation`)
		.soundType('copper')
		.hardness(5)
		.resistance(6)
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.tagBoth('tfg:casings')
		.mapColor('color_light_gray')

    event.create('tfg:casings/machine_casing_vacuum_engine_intake', 'gtceu:active')
        .simple('tfg:block/casings/machine_casing_vacuum_engine_intake')
        .translationKey('block.tfg.casings.machine_casing_vacuum_engine_intake')
        .soundType('metal')
        .resistance(6).hardness(5)
        .tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.tagBoth('tfg:casings')
        .requiresTool(true)
		.mapColor('color_light_gray')

	event.create('tfg:casings/machine_casing_bioculture')
		.translationKey('block.tfg.casings.machine_casing_bioculture')
		.model('tfg:block/casings/machine_casing_bioculture')
		.soundType('copper')
		.hardness(5)
		.resistance(6)
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.tagBoth('tfg:casings')
		.mapColor('color_red')

	event.create('tfg:casings/machine_casing_bioculture_glass')
		.translationKey('block.tfg.casings.machine_casing_bioculture_glass')
		.model('tfg:block/casings/machine_casing_bioculture_glass')
		.soundType('glass')
		.hardness(5)
		.resistance(6)
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.tagBoth('tfc:mineable_with_glass_saw')
		.tagBoth('tfg:casings')
		.mapColor('color_orange')
		.defaultTranslucent()

	event.create('tfg:casings/bioculture_rotor_primary', 'tfg:active_particle_emitter')
		.translationKey('block.tfg.casings.bioculture_rotor_primary')
		.soundType('copper')
		.hardness(5)
		.resistance(6)
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.mapColor('color_light_gray')
		.activeOffset(1.6, 2, 1.6)
		.activeVelocity(0, 0, 0)
		.activeParticle('minecraft:landing_lava')
		.activeCount(10)
		.activeForced(false)

	event.create('tfg:casings/bioculture_rotor_secondary', 'gtceu:active')
		.translationKey('block.tfg.casings.bioculture_rotor_secondary')
		.model('tfg:block/casings/bioculture_rotor_secondary')
		.soundType('copper')
		.hardness(5)
		.resistance(6)
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.mapColor('color_light_gray')

	event.create('tfg:casings/machine_casing_ultraviolet', 'gtceu:active')
		.translationKey('block.tfg.casings.machine_casing_ultraviolet')
		.soundType('glass')
		.hardness(5)
		.resistance(6)
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.tagBoth('tfg:casings')
		.mapColor('color_light_gray')
	
	event.create('tfg:casings/heat_pipe_casing')
		.translationKey('block.tfg.casings.heat_pipe_casing')
		.model('tfg:block/casings/heat_pipe_casing')
		.soundType('copper')
		.hardness(5)
		.resistance(6)
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.tagBoth('tfg:casings')
		.mapColor('color_black')

	event.create('tfg:sample_rack', 'tfg:active_cardinal')
		.soundType('copper')
		.hardness(5)
		.resistance(6)
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.mapColor('color_light_gray')
		.notSolid()
		.renderType('cutout')
		.opaque(false)

	event.create('tfg:growth_monitor', 'tfg:active_cardinal')
		.soundType('copper')
		.hardness(5)
		.resistance(6)
		.lightLevel(0.8)
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.mapColor('color_light_gray')
		.notSolid()
		.renderType('cutout')
		.opaque(false)

	event.create('tfg:casings/machine_casing_sterilizing_pipes', 'tfg:active_cardinal')
		.soundType('copper')
		.hardness(5)
		.resistance(6)
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.tagBoth('tfg:casings')
		.mapColor('color_brown')

	event.create('tfg:cultivation_monitor', 'tfg:active_cardinal')
		.soundType('copper')
		.hardness(5)
		.resistance(6)
		.lightLevel(0.8)
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.mapColor('color_light_gray')
		.notSolid()
		.noCollision()
		.renderType('cutout')
		.opaque(false);

	event.create('tfg:egh_planter', 'tfg:active_particle_emitter')
		.translationKey('block.tfg.egh_planter')
		.soundType('copper')
		.hardness(5)
		.resistance(6)
		.notSolid()
		.activeLight(12)
		.inactiveLight(0)
		.renderType('cutout')
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.mapColor('grass')
		.activeOffset(0.2, 0.0, 0.2)
		.activeVelocity(0.0, 0.0, 0.0)
		.activeBase(0.5, -0.1, 0.5)
		.activeCount(1)
		.activeParticle('minecraft:dripping_water')
		.activeForced(false)
		.hasTicker(true)
		.emitDelay(200)
		.tagBlock('tfc:tree_grows_on')
		.tagBlock('tfc:bush_plantable_on')
		.tagBlock('tfc:wild_crop_grows_on')
		.tagBlock('tfc:spreading_fruit_grows_on')
		.tagBlock('tfc:grass_plantable_on')
		.tagBlock('tfc:creeping_plantable_on')
		.tagBlock('minecraft:mushroom_grow_block')
		.tagBlock('minecraft:bamboo_plantable_on')
		.tagBoth('tfc:farmland');

	event.create('tfg:grow_light', 'tfg:active_particle_emitter')
		.translationKey('block.tfg.grow_light')
		.soundType('copper')
		.hardness(5)
		.resistance(6)
		.notSolid()
		.box(0, 12, 0, 16, 16, 16, true)
		.activeLight(12)
		.inactiveLight(0)
		.renderType('cutout')
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.mapColor('grass')
		.activeOffset(0.2, 0.0, 0.2)
		.activeVelocity(0.0, 0.0, 0.0)
		.activeBase(0.5, 0.5, 0.5)
		.activeCount(1)
		.activeParticle('minecraft:dripping_water')
		.activeForced(false)
		.hasTicker(true)
		.emitDelay(200);

	event.create('tfg:casings/machine_casing_egh', 'gtceu:active')
		.translationKey('block.tfg.casings.machine_casing_egh')
		.soundType('metal')
		.hardness(5)
		.resistance(6)
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.tagBoth('tfg:casings')
		.mapColor('color_light_gray');

	/**
	 * @type {string[]} - Tier names of greenhouse casings.
	 */
	const greenhouse_tiers = ['treated_wood', 'copper', 'iron', 'stainless'];

	greenhouse_tiers.forEach(tier => {
		for (let i = 0; i <= 3; i++) {

			let r = event.create(`tfg:casings/greenhouse/${tier}_greenhouse_casing_${i}`)
				.translationKey(`block.tfg.casings.greenhouse.${tier}_greenhouse_casing_${i}`)
				.hardness(0.3)
				.resistance(0.3)
				.soundType('glass')
				.requiresTool(true)
				.tagBoth('tfg:casings')
				.tagBoth('tfc:mineable_with_glass_saw')
				.tagBoth('firmalife:greenhouse')
				.tagBoth('firmalife:greenhouse_full_walls')
				.tagBoth('tfg:all_greenhouse_casings')

			// Exception of shame V
			if (tier === 'stainless') {
				r.tagBoth(`firmalife:${tier}_steel_greenhouse`)
				r.tagBoth(`tfg:${tier}_steel_greenhouse_casings`)
				r.tagBlock(`firmalife:all_${tier}_steel_greenhouse`)
			} else {
				r.tagBoth(`firmalife:${tier}_greenhouse`)
				r.tagBoth(`tfg:${tier}_greenhouse_casings`)
				r.tagBlock(`firmalife:all_${tier}_greenhouse`)
			};

			if (tier === 'treated_wood') {
				r.tagBlock('minecraft:mineable/axe')
			} else {
				r.tagBlock('minecraft:mineable/pickaxe')
			};

			if (i === 3) {
				r.defaultTranslucent()
			} else {
				r.defaultCutout()
			};
		};
	});

	event.create('tfg:casings/test_casing')
		.soundType('copper')
		.hardness(5)
		.resistance(6)
		.tagBoth('c:hidden_from_recipe_viewers')

}