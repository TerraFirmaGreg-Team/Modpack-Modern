// priority: 0

function registerBeneathItemModifications(event) {

	// Make sure lavaproof hide is in fact lavaproof
	event.modify('beneath:cursed_hide', item => {
		item.fireResistant = true
	})

}