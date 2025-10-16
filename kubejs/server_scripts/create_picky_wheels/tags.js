// priority: 0
"use strict";

function registerCreatePickyWheelsBiomeTags(event) {

	event.add('createpickywheels:waterwheels_boosted', '#tfc:is_river')

	event.add('createpickywheels:waterwheels_whitelist', '#tfg:overworld_biomes')
	event.add('createpickywheels:waterwheels_whitelist', '#tfg:nether_biomes')
	event.add('createpickywheels:waterwheels_whitelist', '#tfg:mars_biomes')
	
	event.add('createpickywheels:windmills_whitelist', '#tfg:overworld_biomes')
	event.add('createpickywheels:windmills_whitelist', '#tfg:nether_biomes')
	event.add('createpickywheels:windmills_whitelist', '#tfg:mars_biomes')
}