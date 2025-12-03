// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGFishingNetsRecipes(event) {

	//wood
	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('1x tfg:fishing_net/wood', [
			' DC',
			'GBE',
			'AF '
		],{
			A: ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.Wood, 1),
			B: ChemicalHelper.get(TagPrefix.rod, GTMaterials.Wood, 1),
			C: 'tfc:jute_net',
			D: 'tfc:glue',
			E: ChemicalHelper.get(TagPrefix.bolt, GTMaterials.Wood, 1),
			F: '#forge:tools/knives',
			G: '#tfc:sewing_needles'
		}).id('tfg:shaped/fishing_net/wood'))

	event.recipes.gtceu.assembler('tfg:assembler/fishing_net/wood')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.Wood, 1),
			ChemicalHelper.get(TagPrefix.rod, GTMaterials.Wood, 1),
			'1x tfc:glue',
			ChemicalHelper.get(TagPrefix.bolt, GTMaterials.Wood, 1),
			'1x tfc:jute_net'
		)
		.itemOutputs('tfg:fishing_net/wood')
		.duration(100)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.ULV])

	//Brass
	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('1x tfg:fishing_net/brass', [
			' DC',
			'GBE',
			'AF '
		],{
			A: ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.Brass, 1),
			B: ChemicalHelper.get(TagPrefix.rod, GTMaterials.Brass, 1),
			C: '#forge:cloth',
			D: ChemicalHelper.get(TagPrefix.ring, GTMaterials.Brass, 1),
			E: ChemicalHelper.get(TagPrefix.screw, GTMaterials.Brass, 1),
			F: '#forge:tools/wire_cutters',
			G: '#tfc:sewing_needles'
		}).id('tfg:shaped/fishing_net/brass'))

	event.recipes.gtceu.assembler('tfg:assembler/fishing_net/brass')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.Brass, 1),
			ChemicalHelper.get(TagPrefix.rod, GTMaterials.Brass, 1),
			ChemicalHelper.get(TagPrefix.ring, GTMaterials.Brass, 1),
			ChemicalHelper.get(TagPrefix.screw, GTMaterials.Brass, 1),
			'1x #forge:cloth'
		)
		.itemOutputs('tfg:fishing_net/brass')
		.duration(100)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.ULV])

	//Rose Gold
	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('1x tfg:fishing_net/rose_gold', [
			' DC',
			'GBE',
			'AF '
		],{
			A: ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.RoseGold, 1),
			B: ChemicalHelper.get(TagPrefix.rod, GTMaterials.RoseGold, 1),
			C: '#forge:cloth',
			D: ChemicalHelper.get(TagPrefix.ring, GTMaterials.RoseGold, 1),
			E: ChemicalHelper.get(TagPrefix.screw, GTMaterials.RoseGold, 1),
			F: '#forge:tools/wire_cutters',
			G: '#tfc:sewing_needles'
		}).id('tfg:shaped/fishing_net/rose_gold'))

	event.recipes.gtceu.assembler('tfg:assembler/fishing_net/rose_gold')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.RoseGold, 1),
			ChemicalHelper.get(TagPrefix.rod, GTMaterials.RoseGold, 1),
			ChemicalHelper.get(TagPrefix.ring, GTMaterials.RoseGold, 1),
			ChemicalHelper.get(TagPrefix.screw, GTMaterials.RoseGold, 1),
			'1x #forge:cloth'
		)
		.itemOutputs('tfg:fishing_net/rose_gold')
		.duration(100)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.ULV])

	//Sterling Silver
	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('1x tfg:fishing_net/sterling_silver', [
			' DC',
			'GBE',
			'AF '
		],{
			A: ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.SterlingSilver, 1),
			B: ChemicalHelper.get(TagPrefix.rod, GTMaterials.SterlingSilver, 1),
			C: '#forge:cloth',
			D: ChemicalHelper.get(TagPrefix.ring, GTMaterials.SterlingSilver, 1),
			E: ChemicalHelper.get(TagPrefix.screw, GTMaterials.SterlingSilver, 1),
			F: '#forge:tools/wire_cutters',
			G: '#tfc:sewing_needles'
		}).id('tfg:shaped/fishing_net/sterling_silver'))

	event.recipes.gtceu.assembler('tfg:assembler/fishing_net/sterling_silver')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.SterlingSilver, 1),
			ChemicalHelper.get(TagPrefix.rod, GTMaterials.SterlingSilver, 1),
			ChemicalHelper.get(TagPrefix.ring, GTMaterials.SterlingSilver, 1),
			ChemicalHelper.get(TagPrefix.screw, GTMaterials.SterlingSilver, 1),
			'1x #forge:cloth'
		)
		.itemOutputs('tfg:fishing_net/sterling_silver')
		.duration(100)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.ULV])

	//Invar
	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('1x tfg:fishing_net/invar', [
			' DC',
			'GBE',
			'AF '
		],{
			A: ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.Invar, 1),
			B: ChemicalHelper.get(TagPrefix.rod, GTMaterials.Invar, 1),
			C: '#forge:cloth',
			D: ChemicalHelper.get(TagPrefix.ring, GTMaterials.Invar, 1),
			E: ChemicalHelper.get(TagPrefix.screw, GTMaterials.Invar, 1),
			F: '#forge:tools/wire_cutters',
			G: '#tfc:sewing_needles'
		}).id('tfg:shaped/fishing_net/invar'))

	event.recipes.gtceu.assembler('tfg:assembler/fishing_net/invar')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.Invar, 1),
			ChemicalHelper.get(TagPrefix.rod, GTMaterials.Invar, 1),
			ChemicalHelper.get(TagPrefix.ring, GTMaterials.Invar, 1),
			ChemicalHelper.get(TagPrefix.screw, GTMaterials.Invar, 1),
			'1x #forge:cloth'
		)
		.itemOutputs('tfg:fishing_net/invar')
		.duration(100)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.LV])

	//Cupronickel
	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('1x tfg:fishing_net/cupronickel', [
			' DC',
			'GBE',
			'AF '
		],{
			A: ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.Cupronickel, 1),
			B: ChemicalHelper.get(TagPrefix.rod, GTMaterials.Cupronickel, 1),
			C: '#forge:cloth',
			D: ChemicalHelper.get(TagPrefix.ring, GTMaterials.Cupronickel, 1),
			E: ChemicalHelper.get(TagPrefix.screw, GTMaterials.Cupronickel, 1),
			F: '#forge:tools/wire_cutters',
			G: '#tfc:sewing_needles'
		}).id('tfg:shaped/fishing_net/cupronickel'))

	event.recipes.gtceu.assembler('tfg:assembler/fishing_net/cupronickel')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.Cupronickel, 1),
			ChemicalHelper.get(TagPrefix.rod, GTMaterials.Cupronickel, 1),
			ChemicalHelper.get(TagPrefix.ring, GTMaterials.Cupronickel, 1),
			ChemicalHelper.get(TagPrefix.screw, GTMaterials.Cupronickel, 1),
			'1x #forge:cloth'
		)
		.itemOutputs('tfg:fishing_net/cupronickel')
		.duration(100)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.LV])

	//Tin Alloy
	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('1x tfg:fishing_net/tin_alloy', [
			' DC',
			'GBE',
			'AF '
		],{
			A: ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.TinAlloy, 1),
			B: ChemicalHelper.get(TagPrefix.rod, GTMaterials.TinAlloy, 1),
			C: '#forge:cloth',
			D: ChemicalHelper.get(TagPrefix.ring, GTMaterials.TinAlloy, 1),
			E: ChemicalHelper.get(TagPrefix.screw, GTMaterials.TinAlloy, 1),
			F: '#forge:tools/wire_cutters',
			G: '#tfc:sewing_needles'
		}).id('tfg:shaped/fishing_net/tin_alloy'))

	event.recipes.gtceu.assembler('tfg:assembler/fishing_net/tin_alloy')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.TinAlloy, 1),
			ChemicalHelper.get(TagPrefix.rod, GTMaterials.TinAlloy, 1),
			ChemicalHelper.get(TagPrefix.ring, GTMaterials.TinAlloy, 1),
			ChemicalHelper.get(TagPrefix.screw, GTMaterials.TinAlloy, 1),
			'1x #forge:cloth'
		)
		.itemOutputs('tfg:fishing_net/tin_alloy')
		.duration(100)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.LV])

	//Magnalium
	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('1x tfg:fishing_net/magnalium', [
			' DC',
			'GBE',
			'AF '
		],{
			A: ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.Magnalium, 1),
			B: ChemicalHelper.get(TagPrefix.rod, GTMaterials.Magnalium, 1),
			C: 'tfg:polycaprolactam_fabric',
			D: ChemicalHelper.get(TagPrefix.ring, GTMaterials.Magnalium, 1),
			E: ChemicalHelper.get(TagPrefix.screw, GTMaterials.Magnalium, 1),
			F: '#forge:tools/wire_cutters',
			G: '#tfc:sewing_needles'
		}).id('tfg:shaped/fishing_net/magnalium'))

	event.recipes.gtceu.assembler('tfg:assembler/fishing_net/magnalium')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.Magnalium, 1),
			ChemicalHelper.get(TagPrefix.rod, GTMaterials.Magnalium, 1),
			ChemicalHelper.get(TagPrefix.ring, GTMaterials.Magnalium, 1),
			ChemicalHelper.get(TagPrefix.screw, GTMaterials.Magnalium, 1),
			'1x tfg:polycaprolactam_fabric'
		)
		.itemOutputs('tfg:fishing_net/magnalium')
		.duration(100)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.LV])
}