// priority: 0

function registerHotOrNotItemModifications(event) {

	global.HOT_OR_NOT_ITEMS.forEach(i => {
		event.modify(i, item => {
			item.maxDamage = item.maxDamage * 3
		})
	})
}