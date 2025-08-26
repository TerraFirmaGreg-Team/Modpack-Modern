// priority: 0
"use strict";

const registerSoulboundRecipes = (event) => {
	
	const SoulbindableItems = [
		'ad_astra:space_helmet',
		'ad_astra:space_suit',
		'ad_astra:space_pants',
		'ad_astra:space_boots'	
	]
	
	
	SoulbindableItems.forEach(item => {
		event.shapeless(Item.of(item, '{soulbindingSoulboundItems:1b}'), ['minecraft:dirt', item])
		.modifyResult((craftingGrid, result) => {
			let orig = craftingGrid.find(Ingredient.of(item))
			
            result.nbt.put("Damage", orig.nbt.getInt("Damage"));
			if(item === 'ad_astra:space_suit') {
				try {
					result.nbt.put('BotariumData', orig.nbt.get('BotariumData'))
				} catch (exception) {
					console.error(exception);
				}
			}
			result.nbt.put('soulbindingSoulboundItems', true)
			return result;
		}).id(`tfg:soulbind_${item}`);
		
	})
	
}