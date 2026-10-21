const registerExpandedAE2Recipes = (event) => {

    event.remove({
		not: [
			{ id: 'expandedae:crafting/auto_complete_card' },
			{ id: 'expandedae:crafting/pattern_refiller_card' },
		], mod: 'expandedae'
	});

}