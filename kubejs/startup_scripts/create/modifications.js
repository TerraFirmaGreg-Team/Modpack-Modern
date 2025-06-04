// priority: 0

function registerCreateItemModifications(event) {

	// Change durability to match blue steel armor

	event.modify('create:netherite_diving_helmet', item => {
		item.maxDamage = 748
	})
	event.modify('create:netherite_backtank', item => {
		item.maxDamage = 1088
	})
	event.modify('create:netherite_diving_boots', item => {
		item.maxDamage = 860
	})

}