const registerExpandedAE2Recipes = (event) => {

    event.remove({
		not: [
			{ id: 'expandedae:crafting/pattern_refiller_card' },
			{ id: 'expandedae:crafting/auto_complete_card' }
		], mod: 'expandedae'
	});

	event.replaceInput({id: 'expandedae:crafting/auto_complete_card' }, Item.of('ae2:crafting_card'), Item.of('minecraft:paper'))

}