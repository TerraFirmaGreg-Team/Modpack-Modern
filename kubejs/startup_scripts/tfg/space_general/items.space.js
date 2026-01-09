"use strict";

function registerTFGSpaceItems(event) {

	// Space suits
	event.create('tfg:space_suit_fabric')
	event.create('tfg:better_space_suit_fabric')

	// Tier2 Insulation
	event.create('tfg:aes_wool')
	event.create('tfg:aes_compressed_wool')
	event.create('tfg:aes_insulation_sheet')
	event.create('tfg:aes_insulation_roll')

	//Tier 2 Rocket Parts
	event.create('tfg:rocket_fin_t2')
	event.create('tfg:rocket_cone_t2')

	//Tier 3 Insulation
	event.create('tfg:aes_polyurethane')
	event.create('tfg:mli_shielding')
	event.create('tfg:silica_aerogel')

	//Tier 3 Rocket Parts
	event.create('tfg:rocket_fin_t3')
	event.create('tfg:rocket_cone_t3')
	event.create('tfg:elite_power_thruster')
	
	// Solar Panel
	event.create('tfg:photo_cell_t1')
		.translationKey("item.tfg.basic.photovoltaic.cell")
		.texture('tfg:item/photo_cell_t1')
}