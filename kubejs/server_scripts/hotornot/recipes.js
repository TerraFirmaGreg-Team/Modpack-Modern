// priority: 0

const registerHotOrNotRecipes = (event) => {

    event.shaped('tfchotornot:tongs/wood', [
		'AB ',
		'B  ',
		'   '
	], {
		A: '#forge:tools/knives',
		B: '#forge:rods/wooden'
	}).id('tfchotornot:crafting/tongs/wood')

}