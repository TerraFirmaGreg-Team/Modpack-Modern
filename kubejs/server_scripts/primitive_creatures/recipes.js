// priority: 0
"use strict";

function registerPrimitiveCreaturesRecipes(event) {

	// terrible idol crafting
	event.remove({ id: 'primitive_creatures:h' })
	// the brown idol -> brown dye
	event.remove({ id: 'primitive_creatures:eg' })
	// craft flint club
	event.remove({ id: 'primitive_creatures:rwtge' })
	// battered wool to wool block
	event.remove({ id: 'primitive_creatures:egwgew' })
	// lodestone?
	event.remove({ id: 'primitive_creatures:hhg' })
	// primitive shears
	event.remove({ id: 'primitive_creatures:uuyu' })
	// upgrade idol into terrible idol
	event.remove({ id: 'primitive_creatures:ge' })


	event.recipes.tfc.knapping(
		'tfg:flint_club_head',
		'tfg:flint',
		[
			' XXX ',
			' XXX ',
			'  X  ',
			' XXX ',
			'  X  '
		]
	).outsideSlotRequired(false)
		.id('tfg:knapping/flint_club_head')

	// craft flint club
	event.shapeless('primitive_creatures:yhgi', ['tfg:flint_club_head', '#forge:rods/wooden'])
		.id('tfg:shapeless/flint_club')

	// craft fortified flint club
	event.shaped('primitive_creatures:reh', [
		'AB',
		'CA'
	], {
		A: '#tfc:nuggets',
		B: 'primitive_creatures:yhgi', 
		C: 'tfc:wool',
	}).id('primitive_creatures:wegfweg')

	// turn battered wool into tfc wool
	event.shapeless('tfc:wool', ['primitive_creatures:grh', 'primitive_creatures:grh', '#forge:tools/knives'])
		.id('tfg:shapeless/cleaning_battered_wool')

	// mud idol into mud
	event.shapeless('6x tfc:daub', ['primitive_creatures:totem_3'])
		.id('tfg:shapeless/totem_3_decomp')
}