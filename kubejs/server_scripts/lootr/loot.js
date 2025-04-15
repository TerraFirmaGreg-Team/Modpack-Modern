// priority: 0

function registerLootrLoots(event) {

	event.addBlockLootModifier('lootr:lootr_chest')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addLoot('#tfg:default_chests')

}