// priority: 0

function registerPrimitiveCreaturesRecipes(event) {

	// terrible idol crafting
	event.remove({ id: 'kaolinclayze:h' })
	// the brown idol -> brown dye
	event.remove({ id: 'kaolinclayze:eg' })
	// craft flint club
	event.remove({ id: 'kaolinclayze:rwtge' })
	// battered wool to wool block
	event.remove({ id: 'kaolinclayze:egwgew' })
	// lodestone?
	event.remove({ id: 'kaolinclayze:hhg' })

	// craft fortified flint club
	event.replaceInput({ id: 'kaolinclayze:wegfweg' }, 'kaolinclayze:tt_5', '#tfc:nuggets')
	event.replaceInput({ id: 'kaolinclayze:wegfweg' }, 'kaolinclayze:grh', 'tfc:wool')

	event.recipes.tfc.knapping(
		'tfg:flint_club_head',
		'tfg:flint',
		[
			'  X  ',
			' XXX ',
			'  X  ',
			' XXX ',
			'  X  '
		]
	).outsideSlotRequired(false)
		.id('tfg:knapping/flint_club_head')

	// craft flint club
	event.shapeless('kaolinclayze:yhgi', ['tfg:flint_club_head', '#forge:rods/wooden'])
		.id('tfg:shapeless/flint_club')

	// turn battered wool into tfc wool
	event.shapeless('tfc:wool', ['kaolinclayze:grh', 'kaolinclayze:grh', '#forge:tools/knives'])
		.id('tfg:shapeless/cleaning_battered_wool')

	// mud idol into mud
	event.shapeless('6x tfc:daub', ['kaolinclayze:totem_3'])
		.id('tfg:shapeless/totem_3_decomp')
}