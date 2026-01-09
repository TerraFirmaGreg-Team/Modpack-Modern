"use strict";

function registerGTCEuItemModifications(event) {

	event.modify('gtceu:nanomuscle_helmet', item => {
		item.armorProtection = 5
		item.armorKnockbackResistance = 0.2
	})
	event.modify('gtceu:nanomuscle_chestplate', item => {
		item.armorProtection = 10
		item.armorKnockbackResistance = 0.2
	})
	event.modify('gtceu:nanomuscle_leggings', item => {
		item.armorProtection = 8
		item.armorKnockbackResistance = 0.2
	})
	event.modify('gtceu:nanomuscle_boots', item => {
		item.armorProtection = 4
		item.armorKnockbackResistance = 0.2
	})
	event.modify('gtceu:advanced_nanomuscle_chestplate', item => {
		item.armorProtection = 10
		item.armorKnockbackResistance = 0.2
	})

	event.modify('gtceu:quarktech_helmet', item => {
		item.armorProtection = 7
		item.armorKnockbackResistance = 0.25
	})
	event.modify('gtceu:quarktech_chestplate', item => {
		item.armorProtection = 12
		item.armorKnockbackResistance = 0.25
	})
	event.modify('gtceu:quarktech_leggings', item => {
		item.armorProtection = 10
		item.armorKnockbackResistance = 0.25
	})
	event.modify('gtceu:quarktech_boots', item => {
		item.armorProtection = 6
		item.armorKnockbackResistance = 0.25
	})
	event.modify('gtceu:advanced_quarktech_chestplate', item => {
		item.armorProtection = 12
		item.armorKnockbackResistance = 0.25
	})
	
	event.modify('gtceu:poor_raw_coal', item => {
		item.burnTime = 30*20
	})
	event.modify('gtceu:raw_coal', item => {
		item.burnTime = 60*20
	})
	event.modify('gtceu:rich_raw_coal', item => {
		item.burnTime = 120*20
	})
	
	
	//#region eating radioactive stuff
	const EDIBLE_ITEMS = [
		'gtceu:thorium_nugget',
		'gtceu:enriched_naquadah_nugget',
		'gtceu:thorium_232_nugget',
		'gtceu:thorium_230_nugget',
		'gtceu:ruthenium_trinium_americium_neutronate_nugget',
		'gtceu:plutonium_nugget',
		'gtceu:plutonium_241_nugget',
		'gtceu:neutronium_nugget',
		'gtceu:naquadria_nugget',
		'gtceu:uranium_nugget',
		'gtceu:uranium_rhodium_dinaquadide_nugget',
		'gtceu:uranium_triplatinum_nugget',
		'gtceu:uranium_235_nugget'
	]
	
	EDIBLE_ITEMS.forEach(edible => {
		event.modify(edible, item => {
			item.foodProperties = food => {
				food.effect('tfg:instant_radiation', -1, 0, 0.5)
			}
		})
	})
	
	// Wood frame burn time

	event.modify('gtceu:wood_frame', item => {
		item.burnTime = 200
	})
}
