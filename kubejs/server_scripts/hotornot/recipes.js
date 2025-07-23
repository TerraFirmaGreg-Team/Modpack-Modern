// priority: 0
"use strict";

const registerHotOrNotRecipes = (event) => {

    event.shaped('tfchotornot:tongs/wood', [
		'AB ',
		'B  ',
		'   '
	], {
		A: '#forge:tools/knives',
		B: '#forge:rods/wooden'
	}).id('tfchotornot:crafting/tongs/wood')

	event.remove({ id: 'tfchotornot:anvil/tong_part/cast_iron' })
	event.remove({ id: 'tfchotornot:crafting/tongs/cast_iron' })
	event.remove({ id: 'tfchotornot:heating/tongs/cast_iron' })
}