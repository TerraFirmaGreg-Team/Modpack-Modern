"use strict";

function registerTFGWorldGenEuropaDecoBlocks(event) {
	
	createPlant(event, 'crystal_grass', 'unused')
		.box(3, 0, 3, 13, 12, 13)
	createPlant(event, 'blooming_cooksonia', 'unused')
		.box(3, 0, 3, 13, 12, 13)
	createPlant(event, 'fracturn', 'unused')
		.box(3, 0, 3, 13, 12, 13)
	createPlant(event, 'jungle_grass', 'unused')
		.box(3, 0, 3, 13, 12, 13)
	createPlant(event, 'creeping_moss', 'unused')
		.box(2, 0, 2, 14, 20, 14)

	event.create('tfg:corallium_arenicolus_0', 'tfg:tall_decorative_plant')
		.height(2)
		.soundType('nether_wart')
		.tagItem('tfg:venus_plants')
		.lightLevel(0.4)
		.renderType('translucent')

	event.create('tfg:corallium_arenicolus_1', 'tfg:decorative_plant')
		.soundType('nether_wart')
		.tagItem('tfg:venus_plants')
		.box(3, 0, 3, 13, 14, 13)

	event.create('tfg:corallium_arenicolus_2', 'tfg:decorative_plant')
		.soundType('nether_wart')
		.tagItem('tfg:venus_plants')
		.renderType('translucent')
		.box(0, 0, 0, 16, 4, 16)

	event.create('tfg:corallium_arenicolus_3', 'tfg:decorative_plant')
		.soundType('nether_wart')
		.tagItem('tfg:venus_plants')
		.box(3, 0, 3, 13, 14, 13)

	event.create('tfg:corallium_arenicolus_4', 'tfg:decorative_plant')
		.soundType('nether_wart')
		.tagItem('tfg:venus_plants')
		.box(3, 0, 3, 13, 14, 13)

	event.create('tfg:corallium_arenicolus_5', 'tfg:decorative_plant')
		.soundType('nether_wart')
		.tagItem('tfg:venus_plants')
		.box(3, 0, 3, 13, 14, 13)

}