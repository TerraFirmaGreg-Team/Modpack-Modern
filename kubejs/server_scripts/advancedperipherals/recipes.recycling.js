// priority: 0
"use strict";

function registerAdvancedPeripheralsRecyclingRecipes(event) {

	// Chat Box
	event.recipes.gtceu.macerator('advancedperipherals:macerator/recycling/chat_box')
		.itemInputs('advancedperipherals:chat_box')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 12),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Electrum, 5),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Emerald, 2)
		)
		.duration(GTMaterials.Aluminium.getMass() * 12)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('advancedperipherals:arc_furnace/recycling/chat_box')
		.itemInputs('advancedperipherals:chat_box')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 12),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Electrum, 5),
			ChemicalHelper.get(TagPrefix.gemFlawless, GTMaterials.Emerald, 2)
		)
		.duration(GTMaterials.Aluminium.getMass() * 12)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Player Detector
	event.recipes.gtceu.macerator('advancedperipherals:macerator/recycling/player_detector')
		.itemInputs('advancedperipherals:player_detector')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Electrum, 24),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 19),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.MercuryBariumCalciumCuprate, 8),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 3)
		)
		.duration(GTMaterials.Electrum.getMass() * 24)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('advancedperipherals:arc_furnace/recycling/player_detector')
		.itemInputs('advancedperipherals:player_detector')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Electrum, 24),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 19),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.MercuryBariumCalciumCuprate, 8),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 3)
		)
		.duration(GTMaterials.Electrum.getMass() * 24)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// ME Bridge
	event.recipes.gtceu.macerator('advancedperipherals:macerator/recycling/me_bridge')
		.itemInputs('advancedperipherals:me_bridge')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 19),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.CertusQuartz, 11),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Titanium, 2)
		)
		.duration(GTMaterials.Aluminium.getMass() * 19)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('advancedperipherals:arc_furnace/recycling/me_bridge')
		.itemInputs('advancedperipherals:me_bridge')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 19),
			ChemicalHelper.get(TagPrefix.gem, GTMaterials.CertusQuartz, 11),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Titanium, 2)
		)
		.duration(GTMaterials.Aluminium.getMass() * 19)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Environment Detector
	event.recipes.gtceu.macerator('advancedperipherals:macerator/recycling/environment_detector')
		.itemInputs('advancedperipherals:environment_detector')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 8),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Chromium, 2)
		)
		.duration(GTMaterials.StainlessSteel.getMass() * 8)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('advancedperipherals:arc_furnace/recycling/environment_detector')
		.itemInputs('advancedperipherals:environment_detector')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 8),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Chromium, 2)
		)
		.duration(GTMaterials.StainlessSteel.getMass() * 8)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Inventory Manager
	event.recipes.gtceu.macerator('advancedperipherals:macerator/recycling/inventory_manager')
		.itemInputs('advancedperipherals:inventory_manager')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Cupronickel, 24),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 14),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Copper, 11),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 8))
		.duration(GTMaterials.Cupronickel.getMass() * 24)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('advancedperipherals:arc_furnace/recycling/inventory_manager')
		.itemInputs('advancedperipherals:inventory_manager')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Cupronickel, 24),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 14),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Copper, 11),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 8))
		.duration(GTMaterials.Cupronickel.getMass() * 24)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Redstone Integrator
	event.recipes.gtceu.macerator('advancedperipherals:macerator/recycling/redstone_integrator')
		.itemInputs('advancedperipherals:redstone_integrator')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.RedAlloy, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Brass, 5),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 4)
		)
		.duration(GTMaterials.RedAlloy.getMass() * 6)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('advancedperipherals:arc_furnace/recycling/redstone_integrator')
		.itemInputs('advancedperipherals:redstone_integrator')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.RedAlloy, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Brass, 5),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 4)
		)
		.duration(GTMaterials.RedAlloy.getMass() * 6)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Block Reader
	event.recipes.gtceu.macerator('advancedperipherals:macerator/recycling/block_reader')
		.itemInputs('advancedperipherals:block_reader')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Electrum, 2),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.RedSteel, 1)
		)
		.duration(GTMaterials.Steel.getMass() * 6)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('advancedperipherals:arc_furnace/recycling/block_reader')
		.itemInputs('advancedperipherals:block_reader')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Electrum, 2),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.RedSteel, 1)
		)
		.duration(GTMaterials.Steel.getMass() * 6)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Geo Scanner
	event.recipes.gtceu.macerator('advancedperipherals:macerator/recycling/geo_scanner')
		.itemInputs('advancedperipherals:geo_scanner')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 11),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.BatteryAlloy, 4),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Chromium, 3)
		)
		.duration(GTMaterials.StainlessSteel.getMass() * 11)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('advancedperipherals:arc_furnace/recycling/geo_scanner')
		.itemInputs('advancedperipherals:geo_scanner')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 11),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.BatteryAlloy, 4),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Chromium, 3)
		)
		.duration(GTMaterials.StainlessSteel.getMass() * 11)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// NBT Storage
	event.recipes.gtceu.macerator('advancedperipherals:macerator/recycling/nbt_storage')
		.itemInputs('advancedperipherals:nbt_storage')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 10),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Titanium, 1),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 1)
		)
		.duration(GTMaterials.StainlessSteel.getMass() * 10)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('advancedperipherals:arc_furnace/recycling/nbt_storage')
		.itemInputs('advancedperipherals:nbt_storage')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 10),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Titanium, 1),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 1)
		)
		.duration(GTMaterials.StainlessSteel.getMass() * 10)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Memory Card
	event.recipes.gtceu.macerator('advancedperipherals:macerator/recycling/memory_card')
		.itemInputs('advancedperipherals:memory_card')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 2),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Gold, 1)
		)
		.duration(GTMaterials.Steel.getMass() * 2)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('advancedperipherals:arc_furnace/recycling/memory_card')
		.itemInputs('advancedperipherals:memory_card')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 2),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Gold, 1)
		)
		.duration(GTMaterials.Steel.getMass() * 2)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// End Automata Core
	event.recipes.gtceu.macerator('advancedperipherals:macerator/recycling/end_automata_core')
		.itemInputs('advancedperipherals:end_automata_core')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.HSSS, 37),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Ruridit, 12),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.NiobiumTitanium, 3),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Samarium, 2)
		)
		.duration(GTMaterials.HSSS.getMass() * 37)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('advancedperipherals:arc_furnace/recycling/end_automata_core')
		.itemInputs('advancedperipherals:end_automata_core')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.HSSS, 37),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Ruridit, 12),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.NiobiumTitanium, 3),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Samarium, 2)
		)
		.duration(GTMaterials.HSSS.getMass() * 37)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Husbandry Automata Core
	event.recipes.gtceu.macerator('advancedperipherals:macerator/recycling/husbandry_automata_core')
		.itemInputs('advancedperipherals:husbandry_automata_core')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 11),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Electrum, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.BlueSteel, 2),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.RedSteel, 2)
		)
		.duration(GTMaterials.StainlessSteel.getMass() * 11)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('advancedperipherals:arc_furnace/recycling/husbandry_automata_core')
		.itemInputs('advancedperipherals:husbandry_automata_core')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 11),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Electrum, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.BlueSteel, 2),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.RedSteel, 2)
		)
		.duration(GTMaterials.StainlessSteel.getMass() * 11)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Weak Automata Core
	event.recipes.gtceu.macerator('advancedperipherals:macerator/recycling/weak_automata_core')
		.itemInputs('advancedperipherals:weak_automata_core')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Electrum, 22),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 16),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Silver, 11),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 3)
		)
		.duration(GTMaterials.Electrum.getMass() * 22)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('advancedperipherals:arc_furnace/recycling/weak_automata_core')
		.itemInputs('advancedperipherals:weak_automata_core')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Electrum, 22),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 16),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Silver, 11),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 3)
		)
		.duration(GTMaterials.Electrum.getMass() * 22)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Overpowered Husbandry Automata Core
	event.recipes.gtceu.macerator('advancedperipherals:macerator/recycling/overpowered_husbandry_automata_core')
		.itemInputs('advancedperipherals:overpowered_husbandry_automata_core')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 11),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.HSSS, 8),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.BlueSteel, 2),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.RedSteel, 2)
		)
		.duration(GTMaterials.StainlessSteel.getMass() * 11)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('advancedperipherals:arc_furnace/recycling/overpowered_husbandry_automata_core')
		.itemInputs('advancedperipherals:overpowered_husbandry_automata_core')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 11),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.HSSS, 8),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.BlueSteel, 2),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.RedSteel, 2)
		)
		.duration(GTMaterials.StainlessSteel.getMass() * 11)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Overpowered Weak Automata Core
	event.recipes.gtceu.macerator('advancedperipherals:macerator/recycling/overpowered_weak_automata_core')
		.itemInputs('advancedperipherals:overpowered_weak_automata_core')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Electrum, 22),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 16),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Silver, 11),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.HSSS, 8)
		)
		.duration(GTMaterials.Electrum.getMass() * 22)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('advancedperipherals:arc_furnace/recycling/overpowered_weak_automata_core')
		.itemInputs('advancedperipherals:overpowered_weak_automata_core')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Electrum, 22),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 16),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Silver, 11),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.HSSS, 8)
		)
		.duration(GTMaterials.Electrum.getMass() * 22)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])
}