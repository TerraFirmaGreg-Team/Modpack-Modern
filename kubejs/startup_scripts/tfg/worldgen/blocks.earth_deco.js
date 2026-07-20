"use strict";

function registerTFGWorldGenEarthDecoBlocks(event) {

	global.TFC_EQUIPMENT_METALS.forEach(metal => {
		
		event.create(`tfg:groundcover/fallen_${metal}_lamp`, 'tfc:ground_cover')
			.box(4,0,4,12, 6,12)
			.soundType('metal')
			.groundCoverModelShape('fallen_lamp')
			.withPreexistingItem(`tfc:metal/unfinished_lamp/${metal}`)
			.texture('metal', `tfc:block/metal/smooth/${metal}`)
			.texture('particle', `tfc:block/metal/smooth/${metal}`)
	});
	
	event.create('tfg:rusted_pully', 'cardinal')
		.model('tfg:block/rusted_pulley')
		.renderType('cutout_mipped')
		.soundType('metal')
		.notSolid()
		.tagBlock('minecraft:mineable/axe')
		.tagBlock('minecraft:mineable/pickaxe')
		
		
	
}