// priority: 0
"use strict";

const registerHotOrNotRecipes = (event) => {

	// Wooden tongs
		event.shaped('tfchotornot:tongs/wood', [
			'AB ',
			'B  ',
			'   '
		], {
			A: '#forge:tools/knives',
			B: '#forge:rods/wooden'
		})
		.id('tfchotornot:crafting/tongs/wood')

	// Remove recipes
		const HOT_OR_NOT_DISABLED_METALS = [
			'bismuth',
			'brass',
			'cast_iron',
			'gold',
			'nickel',
			'rose_gold',
			'silver',
			'tin',
			'zinc',
			'sterling_silver'
		];

		HOT_OR_NOT_DISABLED_METALS.forEach(metal=>{
			event.remove({ id: `tfchotornot:anvil/tong_part/${metal}` })
			event.remove({ id: `tfchotornot:crafting/tongs/${metal}` })
			event.remove({ id: `tfchotornot:heating/tongs/${metal}` })
		});
}