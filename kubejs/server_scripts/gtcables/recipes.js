// priority: 0
"use strict";

function registerGTCablesRecipes(event) {
	
	event.remove({ id: 'gtcables:spool' })
	event.remove({ id: 'gtcables:spool_from_treated_wood' })
	event.remove({ id: 'gtcables:assembler/assemble_spools' })
	event.remove({ id: 'gtcables:assembler/assemble_spools_from_treated_wood' })

	event.shapeless('gtcables:spool', 'gtcables:spool')
		.id('tfg:shapeless/gtcables_spool_clear')

	event.shaped('gtcables:spool', [
		' A ',
		'BCB',
		' D '
	], {
		A: '#forge:tools/mallets',
		B: 'firmalife:treated_wood',
		C: 'firmalife:treated_lumber',
		D: '#forge:tools/files'
	}).id('tfg:shaped/gtcables_spool_from_wax')

	event.shaped('gtcables:spool', [
		' A ',
		'BCB',
		' D '
	], {
		A: '#forge:tools/mallets',
		B: 'gtceu:treated_wood_planks',
		C: 'gtceu:treated_wood_plate',
		D: '#forge:tools/files'
	}).id('tfg:shaped/gtcables_spool_from_treated')

	event.recipes.gtceu.assembler('gtcables:assemble_spools')
		.itemInputs('2x firmalife:treated_wood', 'firmalife:treated_lumber')
		.itemOutputs('gtcables:spool')
		.duration(50)
		.EUt(2)
		.circuit(5)

	event.recipes.gtceu.assembler('gtcables:assemble_spools_from_treated_wood')
		.itemInputs('2x gtceu:treated_wood_planks', 'gtceu:treated_wood_plate')
		.itemOutputs('gtcables:spool')
		.duration(50)
		.EUt(2)
		.circuit(5)
}