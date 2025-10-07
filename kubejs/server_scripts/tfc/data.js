// priority: 0
"use strict";

const registerTFCDataForTFC = (event) => {
	registerTFCHeats(event)
	registerTFCFuels(event)
	registerTFCLampFuels(event)
	registerTFCFertilizers(event)
	registerTFCKnappingTypes(event)
	registerTFCItemSize(event)
	registerTFCFoodData(event)
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

	event.fuel('minecraft:coal', 1415, 2200, 1.0)
	event.fuel('gtceu:rich_raw_coal', 1415, 2200, 0.95)
	event.fuel('gtceu:raw_coal', 1415, 1900, 0.95)
	event.fuel('gtceu:poor_raw_coal', 1415, 1600, 0.95)
	event.fuel('gtceu:coal_dust', 1415, 600, 0.95)
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

	event.fertilizer('gtceu:tiny_saltpeter_dust', 0.01, null, 0.038)
	event.fertilizer('gtceu:small_saltpeter_dust', 0.025, null, 0.0875)
	event.fertilizer('gtceu:saltpeter_dust', 0.10, null, 0.35)

	event.fertilizer('gtceu:tiny_bone_dust', null, 0.01, null)
	event.fertilizer('gtceu:small_bone_dust', null, 0.025, null)
}


const registerTFCKnappingTypes = (event) => {
	event.knappingType('minecraft:flint', 1, 1, 'tfc:item.knapping.stone', true, false, true, 'minecraft:flint', 'tfg:flint')
	event.knappingType('tfc:straw', 4, 4, 'tfc:item.knapping.leather', false, false, false, 'tfc:straw', 'tfg:straw')
}


const registerTFCItemSize = (event) => {
	event.itemSize('#tfc:ore_pieces', 'very_small', 'very_light', 'tfc_ores')

	event.itemSize('#tfc:foods/sealed_preserves', 'tiny', 'medium', 'sealed_preserves')
	event.itemSize('#tfc:foods/preserves', 'tiny', 'medium', 'preserves')

	event.itemSize('#forge:tools/wrenches', 'very_large', 'very_heavy', 'wrenches')
	event.itemSize('#forge:tools/mining_hammers', 'very_large', 'very_heavy', 'mining_hammers')
	event.itemSize('#forge:tools/spades', 'very_large', 'very_heavy', 'spades')
}


const registerTFCFoodData = (event) => {
	
	event.foodItem('firmalife:ice_shavings', food => {
		food.water(5)
		food.decayModifier(0)
	})
}
