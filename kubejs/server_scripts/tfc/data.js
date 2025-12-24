// priority: 0
"use strict";

const registerTFCDataForTFC = (event) => {
	registerTFCHeats(event)
	registerTFCFuels(event)
	registerTFCLampFuels(event)
	registerTFCFertilizers(event)
	registerTFCKnappingTypes(event)
}


const registerTFCHeats = (event) => {

	// Ведро из синей стали
	event.itemHeat('tfc:metal/bucket/blue_steel', 1.429, 924, 1232)

	// Ведро из красной
	event.itemHeat('tfc:metal/bucket/red_steel', 1.429, 924, 1232)

	// Seaweed and Kelp
	event.itemHeat('tfc:groundcover/seaweed', 1.0, null, null)
	event.itemHeat('tfc:plant/leafy_kelp', 1.0, null, null)
	event.itemHeat('tfc:plant/winged_kelp', 1.0, null, null)
	
	// Baked Potato
	event.itemHeat('tfc:food/baked_potato', 1.0, null, null)
}


const registerTFCFuels = (event) => {
	event.fuel('gtceu:coke_gem', 1415, 4400, 1.0)
	event.fuel('gtceu:coke_dust', 1415, 1200, 0.95)

	event.fuel('beneath:cursecoal', 1540, 2200, 1.0)

	event.fuel('minecraft:charcoal_block', 1350, 1800 * 9, 1.0)
	event.fuel('gtceu:charcoal_dust', 1350, 600, 1.0)

	event.fuel('minecraft:coal', 1415, 1900, 1.0)
	event.fuel('minecraft:coal_block', 1415, 1900 * 9, 1.0)
	event.fuel('gtceu:flawless_coal_gem', 1415, 1900 * 2, 1.0)
	event.fuel('gtceu:exquisite_coal_gem', 1415, 1900 * 4, 1.0)
	event.fuel('gtceu:flawed_coal_gem', 1415, 1900 / 2, 1.0)
	event.fuel('gtceu:chipped_coal_gem', 1415, 1900 / 4, 1.0)

	event.fuel('gtceu:crushed_coal_ore', 1415, 1000, 0.8)
	event.fuel('gtceu:purified_coal_ore', 1415, 1000, 1.0)
	event.fuel('gtceu:refined_coal_ore', 1415, 1000, 1.0)
	event.fuel('gtceu:impure_coal_dust', 1415, 500, 0.8)

	event.fuel('gtceu:rich_raw_coal', 1415, 2200, 0.95)
	event.fuel('gtceu:raw_coal', 1415, 1900, 0.95)
	event.fuel('gtceu:poor_raw_coal', 1415, 1600, 0.95)
	event.fuel('gtceu:coal_dust', 1415, 600, 0.85)
	event.fuel('gtceu:small_coal_dust', 1415, 600 / 4, 0.85)
	event.fuel('gtceu:tiny_coal_dust', 1415, 600 / 9, 0.85)
}


const registerTFCLampFuels = (event) => {
	event.lampFuel('gtceu:creosote', '#tfc:lamps', 1000)
	event.lampFuel('gtceu:seed_oil', '#tfc:lamps', 7000)
	event.lampFuel("gtceu:glowstone", "#tfc:lamps", -1)
}


const registerTFCFertilizers = (event) => {
	event.fertilizer('gtceu:fertilizer', 0.15, 0.15, 0.15)

	event.fertilizer('gtceu:tiny_potassium_dust', null, null, 0.016)
	event.fertilizer('gtceu:small_potassium_dust', null, null, 0.037)
	event.fertilizer('gtceu:potassium_dust', null, null, 0.15)

	event.fertilizer('gtceu:tiny_phosphorus_dust', null, 0.016, null)
	event.fertilizer('gtceu:small_phosphorus_dust', null, 0.037, null)
	event.fertilizer('gtceu:phosphorus_dust', null, 0.15, null)

	event.fertilizer('gtceu:tiny_bone_dust', null, 0.01, null)
	event.fertilizer('gtceu:small_bone_dust', null, 0.025, null)

	event.fertilizer('gtceu:tiny_apatite_dust', null, 0.016, null)
	event.fertilizer('gtceu:small_apatite_dust', null, 0.037, null)
	event.fertilizer('gtceu:apatite_dust', null, 0.15, null)

	event.fertilizer('gtceu:tiny_tricalcium_phosphate_dust', null, 0.016, null)
	event.fertilizer('gtceu:small_tricalcium_phosphate_dust', null, 0.037, null)
	event.fertilizer('gtceu:tricalcium_phosphate_dust', null, 0.15, null)

	event.fertilizer('gtceu:tiny_phosphate_dust', null, 0.02, null)
	event.fertilizer('gtceu:small_phosphate_dust', null, 0.05, null)
	event.fertilizer('gtceu:phosphate_dust', null, 0.2, null)

	event.fertilizer('gtceu:tiny_saltpeter_dust', 0.01, null, 0.038)
	event.fertilizer('gtceu:small_saltpeter_dust', 0.025, null, 0.0875)
	event.fertilizer('gtceu:saltpeter_dust', 0.10, null, 0.35)

	event.fertilizer('gtceu:tiny_rock_salt_dust', null, null, 0.025)
	event.fertilizer('gtceu:small_rock_salt_dust', null, null, 0.0625)
	event.fertilizer('gtceu:rock_salt_dust', null, null, 0.25)

	event.fertilizer('gtceu:tiny_potassium_sulfate_dust', null, null, 0.03)
	event.fertilizer('gtceu:small_potassium_sulfate_dust', null, null, 0.075)
	event.fertilizer('gtceu:potassium_sulfate_dust', null, null, 0.3)

	event.fertilizer('gtceu:tiny_ammonium_chloride_dust', 0.03, null, null)
	event.fertilizer('gtceu:small_ammonium_chloride_dust', 0.075, null, null)
	event.fertilizer('gtceu:ammonium_chloride_dust', 0.3, null, null)


}


const registerTFCKnappingTypes = (event) => {
	event.knappingType('minecraft:flint', 1, 1, 'tfc:item.knapping.stone', true, false, true, 'minecraft:flint', 'tfg:flint')
	event.knappingType('tfc:straw', 4, 4, 'tfc:item.knapping.leather', false, false, false, 'tfc:straw', 'tfg:straw')
}