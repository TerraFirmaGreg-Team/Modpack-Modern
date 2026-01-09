"use strict";

function registerTFGSteamBloomeryRecipes(event) {

	event.recipes.gtceu.steam_bloomery('steam_raw_iron_bloom_coal')
		.itemInputs('#forge:ingots/iron', '#tfg:steam_bloomery_basic_fuels')
		.itemOutputs('tfc:raw_iron_bloom')
		.duration(2400)
		.EUt(2)

	event.recipes.gtceu.steam_bloomery('steam_raw_iron_bloom_coalcoke')
		.itemInputs('2x #forge:ingots/iron', '#tfc:blast_furnace_fuel')
		.itemOutputs('2x tfc:raw_iron_bloom')
		.duration(2400)
		.EUt(2)

	forEachMaterial(material => {

		const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY)
		if (tfcProperty === null)
			return;

		const outputMaterial = tfcProperty.getOutputMaterial() === null ? material : tfcProperty.getOutputMaterial()
		if (outputMaterial === GTMaterials.Iron) {
			event.recipes.gtceu.steam_bloomery(`steam_raw_iron_bloom_coal_${material.getName()}`)
				.itemInputs(ChemicalHelper.get(TagPrefix.dust, material, 1), '#tfg:steam_bloomery_basic_fuels')
				.itemOutputs('tfc:raw_iron_bloom')
				.duration(2400)
				.EUt(2)

			event.recipes.gtceu.steam_bloomery(`steam_raw_iron_bloom_coalcoke_${material.getName()}`)
				.itemInputs(ChemicalHelper.get(TagPrefix.dust, material, 2), '#tfc:blast_furnace_fuel')
				.itemOutputs('2x tfc:raw_iron_bloom')
				.duration(2400)
				.EUt(2)
		}
	})
}