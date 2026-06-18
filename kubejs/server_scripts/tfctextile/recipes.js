// priority: 0
"use strict";

function registerTFCTextileRecipes(event) {

	event.shapeless('tfc:large_raw_hide', ['tfc_textile:crocodile_leather', '#forge:tools/knives'])

	event.replaceInput({ id: 'tfc_textile:clothing/crocodile/crocodile_hat' }, 'tfcambiental:burlap_cowl', ['tfcambiental:burlap_cowl', 'tfcambiental:silk_cowl', 'tfc_textile:linen_hat'])
	event.replaceInput({ id: 'tfc_textile:clothing/crocodile/crocodile_shirt' }, 'tfcambiental:burlap_shirt', ['tfcambiental:burlap_shirt', 'tfcambiental:silk_shirt', 'tfc_textile:linen_shirt'])
	event.replaceInput({ id: 'tfc_textile:clothing/crocodile/crocodile_pants' }, 'tfcambiental:burlap_pants', ['tfcambiental:burlap_pants', 'tfcambiental:silk_pants', 'tfc_textile:linen_pants'])
	event.replaceInput({ id: 'tfc_textile:clothing/crocodile/crocodile_boots' }, 'tfcambiental:burlap_shoes', ['tfcambiental:burlap_shoes', 'tfcambiental:silk_shoes', 'tfc_textile:linen_socks'])

	event.shaped('tfc_textile:caribou_hat', [
		'ABA',
		'ACA',
		' D '
	], {
		A: '#forge:string',
		B: 'tfc_textile:caribou_fur',
		C: 'tfcambiental:wool_hat',
		D: 'tfcambiental:insulated_leather_hat'
	}).id('tfc_textile:clothing/caribou/caribou_hat')

	event.shaped('tfc_textile:caribou_shirt', [
		'ABA',
		'ACA',
		'ADA'
	], {
		A: '#forge:string',
		B: 'tfc_textile:caribou_fur',
		C: 'tfcambiental:wool_sweater',
		D: 'tfcambiental:insulated_leather_tunic'
	}).id('tfc_textile:clothing/caribou/caribou_shirt')

	event.shaped('tfc_textile:caribou_pants', [
		'ABA',
		'ACA',
		'ADA'
	], {
		A: '#forge:string',
		B: 'tfc_textile:caribou_fur',
		C: 'tfcambiental:wool_pants',
		D: 'tfcambiental:insulated_leather_pants'
	}).id('tfc_textile:clothing/caribou/caribou_pants')

	event.shaped('tfc_textile:caribou_boots', [
		'ABA',
		'ACA',
		' D '
	], {
		A: '#forge:string',
		B: 'tfc_textile:caribou_fur',
		C: 'tfcambiental:wool_boots',
		D: 'tfcambiental:insulated_leather_boots'
	}).id('tfc_textile:clothing/caribou/caribou_boots')

	event.shaped('tfc_textile:polar_bear_hat', [
		'ABA',
		'ACA',
		' D '
	], {
		A: '#forge:string',
		B: 'tfc_textile:polar_bear_fur',
		C: 'tfcambiental:wool_hat',
		D: 'tfcambiental:insulated_leather_hat'
	}).id('tfc_textile:clothing/polar_bear/polar_bear_hat')

	event.shaped('tfc_textile:polar_bear_shirt', [
		'ABA',
		'ACA',
		'ADA'
	], {
		A: '#forge:string',
		B: 'tfc_textile:polar_bear_fur',
		C: 'tfcambiental:wool_sweater',
		D: 'tfcambiental:insulated_leather_tunic'
	}).id('tfc_textile:clothing/polar_bear/polar_bear_shirt')

	event.shaped('tfc_textile:polar_bear_pants', [
		'ABA',
		'ACA',
		'ADA'
	], {
		A: '#forge:string',
		B: 'tfc_textile:polar_bear_fur',
		C: 'tfcambiental:wool_pants',
		D: 'tfcambiental:insulated_leather_pants'
	}).id('tfc_textile:clothing/polar_bear/polar_bear_pants')

	event.shaped('tfc_textile:polar_bear_boots', [
		'ABA',
		'ACA',
		' D '
	], {
		A: '#forge:string',
		B: 'tfc_textile:polar_bear_fur',
		C: 'tfcambiental:wool_boots',
		D: 'tfcambiental:insulated_leather_boots'
	}).id('tfc_textile:clothing/polar_bear/polar_bear_boots')

	event.replaceInput({ id: 'tfc_textile:clothing/direwolf/direwolf_hat' }, 'minecraft:leather_helmet', 'tfcambiental:wool_hat')
	event.replaceInput({ id: 'tfc_textile:clothing/direwolf/direwolf_shirt' }, 'minecraft:leather_chestplate', 'tfcambiental:wool_sweater')
	event.replaceInput({ id: 'tfc_textile:clothing/direwolf/direwolf_pants' }, 'minecraft:leather_leggings', 'tfcambiental:wool_pants')
	event.replaceInput({ id: 'tfc_textile:clothing/direwolf/direwolf_boots' }, 'minecraft:leather_boots', 'tfcambiental:wool_boots')

	event.replaceInput({ id: 'tfc_textile:clothing/cougar/cougar_hat' }, 'minecraft:leather_helmet', 'tfcambiental:insulated_leather_hat')
	event.replaceInput({ id: 'tfc_textile:clothing/cougar/cougar_shirt' }, 'minecraft:leather_chestplate', 'tfcambiental:insulated_leather_tunic')
	event.replaceInput({ id: 'tfc_textile:clothing/cougar/cougar_pants' }, 'minecraft:leather_leggings', 'tfcambiental:insulated_leather_pants')
	event.replaceInput({ id: 'tfc_textile:clothing/cougar/cougar_boots' }, 'minecraft:leather_boots', 'tfcambiental:insulated_leather_boots')

	event.replaceInput({ id: 'tfc_textile:clothing/tiger/tiger_hat' }, 'minecraft:leather_helmet', 'tfcambiental:insulated_leather_hat')
	event.replaceInput({ id: 'tfc_textile:clothing/tiger/tiger_shirt' }, 'minecraft:leather_chestplate', 'tfcambiental:insulated_leather_tunic')
	event.replaceInput({ id: 'tfc_textile:clothing/tiger/tiger_pants' }, 'minecraft:leather_leggings', 'tfcambiental:insulated_leather_pants')
	event.replaceInput({ id: 'tfc_textile:clothing/tiger/tiger_boots' }, 'minecraft:leather_boots', 'tfcambiental:insulated_leather_boots')

	event.replaceInput({ id: 'tfc_textile:clothing/panther/panther_hat' }, 'minecraft:leather_helmet', 'tfcambiental:insulated_leather_hat')
	event.replaceInput({ id: 'tfc_textile:clothing/panther/panther_shirt' }, 'minecraft:leather_chestplate', 'tfcambiental:insulated_leather_tunic')
	event.replaceInput({ id: 'tfc_textile:clothing/panther/panther_pants' }, 'minecraft:leather_leggings', 'tfcambiental:insulated_leather_pants')
	event.replaceInput({ id: 'tfc_textile:clothing/panther/panther_boots' }, 'minecraft:leather_boots', 'tfcambiental:insulated_leather_boots')

	event.replaceInput({ id: 'tfc_textile:clothing/sabertooth/sabertooth_hat' }, 'minecraft:leather_helmet', 'tfcambiental:insulated_leather_hat')
	event.replaceInput({ id: 'tfc_textile:clothing/sabertooth/sabertooth_shirt' }, 'minecraft:leather_chestplate', 'tfcambiental:insulated_leather_tunic')
	event.replaceInput({ id: 'tfc_textile:clothing/sabertooth/sabertooth_pants' }, 'minecraft:leather_leggings', 'tfcambiental:insulated_leather_pants')
	event.replaceInput({ id: 'tfc_textile:clothing/sabertooth/sabertooth_boots' }, 'minecraft:leather_boots', 'tfcambiental:insulated_leather_boots')

	event.replaceInput({ id: 'tfc_textile:clothing/black_bear/black_bear_hat' }, 'minecraft:leather_helmet', 'tfcambiental:insulated_leather_hat')
	event.replaceInput({ id: 'tfc_textile:clothing/black_bear/black_bear_shirt' }, 'minecraft:leather_chestplate', 'tfcambiental:insulated_leather_tunic')
	event.replaceInput({ id: 'tfc_textile:clothing/black_bear/black_bear_pants' }, 'minecraft:leather_leggings', 'tfcambiental:insulated_leather_pants')
	event.replaceInput({ id: 'tfc_textile:clothing/black_bear/black_bear_boots' }, 'minecraft:leather_boots', 'tfcambiental:insulated_leather_boots')

	event.replaceInput({ id: 'tfc_textile:clothing/grizzly_bear/grizzly_bear_hat' }, 'minecraft:leather_helmet', 'tfcambiental:insulated_leather_hat')
	event.replaceInput({ id: 'tfc_textile:clothing/grizzly_bear/grizzly_bear_shirt' }, 'minecraft:leather_chestplate', 'tfcambiental:insulated_leather_tunic')
	event.replaceInput({ id: 'tfc_textile:clothing/grizzly_bear/grizzly_bear_pants' }, 'minecraft:leather_leggings', 'tfcambiental:insulated_leather_pants')
	event.replaceInput({ id: 'tfc_textile:clothing/grizzly_bear/grizzly_bear_boots' }, 'minecraft:leather_boots', 'tfcambiental:insulated_leather_boots')

	event.replaceInput({ id: 'tfc_textile:clothing/lion/lion_hat' }, 'minecraft:leather_helmet', 'tfcambiental:insulated_leather_hat')
	event.replaceInput({ id: 'tfc_textile:clothing/lion/lion_shirt' }, 'minecraft:leather_chestplate', 'tfcambiental:insulated_leather_tunic')
	event.replaceInput({ id: 'tfc_textile:clothing/lion/lion_pants' }, 'minecraft:leather_leggings', 'tfcambiental:insulated_leather_pants')
	event.replaceInput({ id: 'tfc_textile:clothing/lion/lion_boots' }, 'minecraft:leather_boots', 'tfcambiental:insulated_leather_boots')

	event.shaped('tfc_textile:linen_hat', [
		'AAA',
		'A A'
	], {
		A: 'tfg:linen_cloth'
	}).id('tfg:shaped/linen_hat')
		
	event.shaped('tfc_textile:linen_shirt', [
		'A A',
		'AAA',
		'AAA'
	], {
		A: 'tfg:linen_cloth'
	}).id('tfg:shaped/linen_shirt')

	event.shaped('tfc_textile:linen_pants', [
		'AAA',
		'A A',
		'A A'
	], {
		A: 'tfg:linen_cloth'
	}).id('tfg:shaped/linen_pants')

	event.shaped('tfc_textile:linen_socks', [
		'A A',
		'A A'
	], {
		A: 'tfg:linen_cloth'
	}).id('tfg:shaped/linen_socks')
}