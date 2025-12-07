"use strict";

function registerTFGRocketItemTags(event) {

	// Insulation Tier 1
	event.add('forge:insulation_t1', 'gtceu:borosilicate_glass_dust')
	event.add('forge:insulation_t1', 'gtceu:vitrified_asbestos_dust')
	
	//Insulation Tier 2
	event.add('forge:insulation_t2/sheet', 'tfg:aes_insulation_sheet')
	event.add('forge:insulation_t2/roll', 'tfg:aes_insulation_roll')
	
	//Insulation Tier3
	event.add('forge:insulation_t3/foam', 'tfg:aes_polyurethane')
	event.add('forge:insulation_t3/sheet', 'tfg:mli_shielding')
	event.add('forge:insulation_t3/cryo', 'tfg:silica_aerogel')
	
	event.add('forge:aerogels', 'tfg:silica_aerogel')

	//Rocket Engines
	event.add('ad_astra:rocket_engine', 'ad_astra:steel_engine')
	event.add('ad_astra:rocket_engine', 'ad_astra:desh_engine')
	event.add('ad_astra:rocket_engine', 'ad_astra:ostrum_engine')
	
	//Rocket Tank
	event.add('ad_astra:rocket_tank', 'ad_astra:ostrum_tank')

}