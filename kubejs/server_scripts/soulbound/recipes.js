// priority: 0
"use strict";

const registerSoulboundRecipes = (event) => {

	global.SOULBINDABLE_ITEMS.forEach(x => {
		event.shapeless(Item.of(x.equipment, '{soulbindingSoulboundItems:1b}'), [x.item, x.equipment])
			.modifyResult((craftingGrid, result) => {
				let orig = craftingGrid.find(Ingredient.of(x.equipment))

				result.nbt.put("Damage", orig.nbt.getInt("Damage"));
				if (x.equipment === 'ad_astra:space_suit' || x.equipment === 'ad_astra:netherite_space_suit') {
					try {
						result.nbt.put('BotariumData', orig.nbt.get('BotariumData'))
					} catch (exception) {
						console.error(exception);
					}
				}
				result.nbt.put('soulbindingSoulboundItems', true)
				return result;
			}).id(`tfg:soulbind_${x.equipment}`.replace(/[: ]/g, '_'));

	})

}