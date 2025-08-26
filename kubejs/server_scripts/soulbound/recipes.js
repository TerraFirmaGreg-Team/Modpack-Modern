// priority: 0
"use strict";

const registerSoulboundRecipes = (event) => {
	
	global.SOULBINDABLE_ITEMS.forEach(item => {
		event.shapeless(Item.of(item, '{soulbindingSoulboundItems:1b}'), ['endermanoverhaul:soul_pearl', item])
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