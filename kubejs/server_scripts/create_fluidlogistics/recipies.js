// priority: 0
"use strict";

function registerCreateFluidLogisticsRecipes(event) {

	event.remove({ mod: "fluidlogistics" });

    event.shapeless('fluidlogistics:waterproof_cardboard_block', ['create:cardboard_block', '#forge:wax'])
    event.recipes.create.item_application('fluidlogistics:waterproof_cardboard_block', ['create:cardboard_block', '#forge:wax'])
    
	event.recipes.gtceu.packer('tfg:waterproof_cardboard_block')
		.itemInputs('4x create:cardboard', '#forge:wax')
		.itemOutputs('fluidlogistics:waterproof_cardboard_block')
		.duration(500)
		.EUt(7)

    event.recipes.gtceu.shaped('fluidlogistics:fluid_packager', [
		' A ',
		'BCD',
		' E '
	], {
		A: '#forge:small_gears/red_alloy',
		B: '#forge:springs/wrought_iron',
		C: 'create:copper_casing',
		D: 'fluidlogistics:waterproof_cardboard_block',
		E: 'create:electron_tube'
	}).id("fluidlogistics:shaped/fluid_packager")
		
    event.recipes.gtceu.shaped('fluidlogistics:multi_fluid_tank', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: '#forge:bolts/brass',
		B: '#forge:tools/screwdrivers',
		C: '#forge:plates/brass',
		D: '#forge:glass_panes',
		E: '#forge:tools/wrenches'
	}).id("fluidlogistics:shaped/multi_fluid_tank")

	event.recipes.shapeless('fluidlogistics:horizontal_multi_fluid_tank', 'fluidlogistics:multi_fluid_tank').id("fluidlogistics:shapeless/multi_fluid_tank_conversion_from_normal")
	event.recipes.shapeless('fluidlogistics:multi_fluid_tank', 'fluidlogistics:horizontal_multi_fluid_tank').id("fluidlogistics:shapeless/multi_fluid_tank_conversion_from_horizontal")

	event.recipes.gtceu.assembler('fluidlogistics:fluid_packager')
		.itemInputs('#forge:small_gears/red_alloy', '#forge:springs/wrought_iron', 'create:copper_casing', 'fluidlogistics:waterproof_cardboard_block', 'create:electron_tube')
		.itemOutputs('fluidlogistics:fluid_packager')
		.circuit(20)
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])
		.addMaterialInfo(true)

    event.recipes.gtceu.shaped('fluidlogistics:multi_fluid_access_port', [
		' A ',
		' B ',
		' C '
	], {
		A: 'create:copper_sheet',
		B: 'fluidlogistics:multi_fluid_tank',
		C: 'create:electron_tube',
    }).id("fluidlogistics:shaped/multi_fluid_access_port1")

    event.recipes.gtceu.shaped('fluidlogistics:multi_fluid_access_port', [
		' A ',
		' B ',
		' C '
	], {
		A: 'create:copper_sheet',
		B: 'fluidlogistics:horizontal_multi_fluid_tank',
		C: 'create:electron_tube',
	}).id("fluidlogistics:shaped/multi_fluid_access_port2")

	event.recipes.createMechanicalCrafting('fluidlogistics:hand_pointer', [
		'A',
		'B',
		'C',
		'D',
		'D'
	], {
		A: 'create:brass_hand',
		B: 'create:electron_tube',
		C: 'create:precision_mechanism',
		D: 'gtceu:brass_rod'
	}).id("fluidlogistics:mechanical_crafting/hand_pointer")


}