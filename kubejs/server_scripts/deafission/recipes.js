// priority: 0
"use strict";

function registerDeaFissionRecipes(event) {
	event.remove({ id: 'deafission:fission_reactor_fuel/uranium' })
	event.remove({ id: 'deafission:fission_reactor_fuel/thorium' })
	event.remove({ id: 'deafission:fission_reactor_coolant/thorium/nak_to_plasma' })
	event.remove({ id: 'deafission:fission_reactor_coolant/uranium/water_to_steam' })
}