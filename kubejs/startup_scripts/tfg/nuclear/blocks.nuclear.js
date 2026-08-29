"use strict";

function registerTFGNuclearBlocks(event) {

	// Insulation Fission Reactor
	event.create('tfg:glacian_wool_frame')
		.soundType('copper')
		.hardness(4)
		.resistance(6)
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')

	event.create('tfg:aes_insulation_frame')
		.soundType('copper')
		.hardness(5)
		.resistance(6)
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')

	event.create('tfg:moderate_core_frame')
		.soundType('copper')
		.hardness(4)
		.resistance(6)
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')

	event.create('tfg:impure_moderate_core_frame')
		.soundType('copper')
		.hardness(5)
		.resistance(6)
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')

	// Unfinished Insulation Reactor
	event.create('tfg:moderate_core')
		.soundType('ancient_debris')
		.hardness(7)
		.resistance(8)
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.model('tfg:block/fission/moderate_core')

	event.create('tfg:impure_moderate_core')
		.soundType('ancient_debris')
		.hardness(7)
		.resistance(8)
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.model('tfg:block/fission/impure_moderate_core')

	// Heat Battery Components

	event.create('tfg:copper_sandy')
		.soundType('ancient_debris')
		.hardness(7)
		.resistance(8)
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.model('tfg:block/fission/copper_sandy')

	event.create('tfg:beryllium_sandy')
		.soundType('ancient_debris')
		.hardness(7)
		.resistance(8)
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.model('tfg:block/fission/beryllium_sandy')

	event.create('tfg:copper_sandy_frame')
		.soundType('copper')
		.hardness(4)
		.resistance(6)
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')

	event.create('tfg:beryllium_sandy_frame')
		.soundType('copper')
		.hardness(5)
		.resistance(6)
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')

	// Nuclear cooling tower
	event.create('tfg:titanium_exhaust_vent', 'tfg:active_particle_emitter')
		.textureAll('tfg:block/titanium_exhaust_vent')
		.soundType('metal')
		.hardness(5)
		.resistance(6)
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.mapColor('color_black')
		.speedFactor(1.1)
		.activeParticles(a => a
			.range(2, 2, 2)
			.velocity(0.0, 0.0, 0.0)
			.particle('tfg:cooling_steam')
			.position(0.0, 13.5, 0.0)
			.count(2)
			.forced(false))
		.hasTicker(true)
		.emitDelay(4);

	event.create('tfg:titanium_concrete')
		.translationKey('block.tfg.titanium_concrete')
		.model('tfg:block/concrete/titanium_concrete')
		.soundType('stone')
		.mapColor('stone')
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.tagBoth('tfg:titanium_concrete')
		
	event.create('tfg:polished_titanium_concrete')
		.translationKey('block.tfg.polished_titanium_concrete')
		.model('tfg:block/concrete/polished_titanium_concrete')
		.soundType('stone')
		.mapColor('stone')
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.tagBoth('tfg:titanium_concrete')
		
	event.create('tfg:titanium_concrete_tile')
		.translationKey('block.tfg.titanium_concrete_tile')
		.model('tfg:block/concrete/titanium_concrete_tile')
		.soundType('stone')
		.mapColor('stone')
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.tagBoth('tfg:titanium_concrete')
		
	event.create('tfg:titanium_concrete_tile_small')
		.translationKey('block.tfg.titanium_concrete_tile_small')
		.model('tfg:block/concrete/titanium_concrete_tile_small')
		.soundType('stone')
		.mapColor('stone')
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.tagBoth('tfg:titanium_concrete')
		
	event.create('tfg:titanium_concrete_bricks')
		.translationKey('block.tfg.titanium_concrete_bricks')
		.model('tfg:block/concrete/titanium_concrete_bricks')
		.soundType('stone')
		.mapColor('stone')
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.tagBoth('tfg:titanium_concrete')
		
	event.create('tfg:titanium_concrete_bricks_small')
		.translationKey('block.tfg.titanium_concrete_bricks_small')
		.model('tfg:block/concrete/titanium_concrete_bricks_small')
		.soundType('stone')
		.mapColor('stone')
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.tagBoth('tfg:titanium_concrete')
		
	event.create('tfg:titanium_concrete_bricks_square')
		.translationKey('block.tfg.titanium_concrete_bricks_square')
		.model('tfg:block/concrete/titanium_concrete_bricks_square')
		.soundType('stone')
		.mapColor('stone')
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.tagBoth('tfg:titanium_concrete')

}