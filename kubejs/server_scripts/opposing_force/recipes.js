// priority: 0
"use strict";

function registerOpposingForceRecipes(event) {
	
	event.shaped('2x opposing_force:fire_bomb', [
		' A ',
		'BCB',
		'EDE'
	], {
		A: '#forge:string',
		B: 'minecraft:paper',
		C: 'minecraft:fire_charge',
		D: 'gtceu:sticky_resin',
		E: 'minecraft:gunpowder'
	}).id('tfg:shaped/fire_bomb_paper')

	event.shaped('2x opposing_force:fire_bomb', [
		' A ',
		'BC ',
		'EDE'
	], {
		A: '#forge:string',
		B: '#tfc:fired_vessels',
		C: 'minecraft:fire_charge',
		D: 'gtceu:sticky_resin',
		E: 'minecraft:gunpowder'
	}).id('tfg:shaped/fire_bomb_vessel')

	event.shaped('2x opposing_force:lightning_bomb', [
		' A ',
		'BCB',
		'EDE'
	], {
		A: '#forge:string',
		B: 'minecraft:paper',
		C: 'gtceu:fine_red_alloy_wire',
		D: 'gtceu:sticky_resin',
		E: 'minecraft:gunpowder'
	}).id('tfg:shaped/lightning_bomb_paper')

	event.shaped('2x opposing_force:lightning_bomb', [
		' A ',
		'BC ',
		'EDE'
	], {
		A: '#forge:string',
		B: '#tfc:fired_vessels',
		C: 'gtceu:fine_red_alloy_wire',
		D: 'gtceu:sticky_resin',
		E: 'minecraft:gunpowder'
	}).id('tfg:shaped/lightning_bomb_vessel')

	// TOOD: add the other LV explosive from the vehicle branch
	event.shaped('2x opposing_force:kinetic_bomb', [
		' A ',
		'BCB',
		'EDE'
	], {
		A: '#forge:string',
		B: 'minecraft:paper',
		C: 'gtceu:gelled_toluene',
		D: 'gtceu:sticky_resin',
		E: 'minecraft:gunpowder'
	}).id('tfg:shaped/kinetic_bomb_paper')

	event.shaped('2x opposing_force:kinetic_bomb', [
		' A ',
		'BC ',
		'EDE'
	], {
		A: '#forge:string',
		B: '#tfc:fired_vessels',
		C: 'gtceu:gelled_toluene',
		D: 'gtceu:sticky_resin',
		E: 'minecraft:gunpowder'
	}).id('tfg:shaped/kinetic_bomb_vessel')

	event.shaped('opposing_force:strato_bow', [
		'ABA',
		'BCB',
		'DDD'
	], {
		A: '#forge:rods/wrought_iron',
		B: '#forge:rings/gold',
		C: 'minecraft:bow',
		D: '#forge:string'
	}).id('tfg:shaped/strato_bow')

	event.shapeless('opposing_force:slayser_disc', ['etched:blank_music_disc', 'create:electron_tube'])
		.id('tfg:shapeless/slayser_disc')

	event.shapeless('opposing_force:waltz_of_the_slug_disc', ['etched:blank_music_disc', 'minecraft:slime_ball'])
		.id('tfg:shapeless/waltz_of_the_slug_disc')

	event.recipes.tfc.loom(
		'8x opposing_force:deep_silk_block',
		'4x opposing_force:deep_silk',
		4,
		'opposing_force:block/deep_silk_block'
	).id('tfg:loom/deep_silk')

	event.recipes.gtceu.assembler('tfg:assembler/deep_silk_block')
		.itemInputs('opposing_force:deep_silk')
		.circuit(16)
		.itemOutputs('2x opposing_force:deep_silk_block')
		.duration(100)
		.EUt(4)

	event.shaped('3x opposing_force:tomahawk', [
		'AB',
		'BB'
	], {
		A: 'gtceu:stone_axe_head',
		B: '#forge:rods/wooden'
	}).id('tfg:shaped/tomahawk_stone')
	
	event.shaped('6x opposing_force:tomahawk', [
		'AB',
		'BB'
	], {
		A: 'gtceu:flint_axe_head',
		B: '#forge:rods/wooden'
	}).id('tfg:shaped/tomahawk_flint')

	// TODO: inferno pie - add a raw pie? pie dough? you can place it in the world so it's more like a cake
}