// priority: 0
"use strict";

function registerLootrLoots(event) {

	event.addBlockLootModifier('lootr:lootr_chest')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addLoot('#tfg:default_chests')

}