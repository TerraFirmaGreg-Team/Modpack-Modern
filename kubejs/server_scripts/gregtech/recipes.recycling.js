// priority: 0

function registerGTCEURecyclingRecipes(event) {

	// Tantalum Capacitor
	event.recipes.gtceu.macerator('gtceu:macerator/recycling/tantulum_capacitor')
		.itemInputs('gtceu:tantalum_capacitor')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Tantalum, 1),
			ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Polyethylene, 1)
		)
		.duration(GTMaterials.Tantalum.getMass() * 1)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('gtceu:arc_furnace/recycling/tantulum_capacitor')
		.itemInputs('gtceu:tantalum_capacitor')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.nugget, GTMaterials.Tantalum, 1),
			ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Ash, 1)
		)
		.duration(GTMaterials.Tantalum.getMass() * 1)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Capacitor
	event.recipes.gtceu.macerator('gtceu:macerator/recycling/capacitor')
		.itemInputs('gtceu:capacitor')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Polyethylene, 1)
		)
		.duration(GTMaterials.Polyethylene.getMass() * 1)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('gtceu:arc_furnace/recycling/capacitor')
		.itemInputs('gtceu:capacitor')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Ash, 1)
		)
		.duration(GTMaterials.Ash.getMass() * 1)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Empty Tier I Capacitor
	event.recipes.gtceu.macerator('gtceu:macerator/recycling/empty_tier_i_battery')
		.itemInputs('gtceu:empty_tier_i_battery')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Ultimet, 6)
		)
		.duration(GTMaterials.Ultimet.getMass() * 6)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('gtceu:arc_furnace/recycling/empty_tier_i_battery')
		.itemInputs('gtceu:empty_tier_i_battery')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Ultimet, 6)
		)
		.duration(GTMaterials.Ultimet.getMass() * 6)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.extractor('gtceu:extractor/recycling/empty_tier_i_battery')
		.itemInputs('gtceu:empty_tier_i_battery')
		.outputFluids(Fluid.of('gtceu:ultimet', 864))
		.duration(GTMaterials.Ultimet.getMass() * 6)
		.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Empty Tier II Capacitor
	event.recipes.gtceu.macerator('gtceu:macerator/recycling/empty_tier_ii_battery')
		.itemInputs('gtceu:empty_tier_ii_battery')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Ruridit, 6)
		)
		.duration(GTMaterials.Ruridit.getMass() * 6)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('gtceu:arc_furnace/recycling/empty_tier_ii_battery')
		.itemInputs('gtceu:empty_tier_ii_battery')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Ruridit, 6)
		)
		.duration(GTMaterials.Ruridit.getMass() * 6)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.extractor('gtceu:extractor/recycling/empty_tier_ii_battery')
		.itemInputs('gtceu:empty_tier_ii_battery')
		.outputFluids(Fluid.of('gtceu:ruridit', 864))
		.duration(GTMaterials.Ruridit.getMass() * 6)
		.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Empty Tier III Capacitor
	event.recipes.gtceu.macerator('gtceu:macerator/recycling/empty_tier_iii_battery')
		.itemInputs('gtceu:empty_tier_iii_battery')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Neutronium, 6)
		)
		.duration(GTMaterials.Neutronium.getMass() * 6)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('gtceu:arc_furnace/recycling/empty_tier_iii_battery')
		.itemInputs('gtceu:empty_tier_iii_battery')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Neutronium, 6)
		)
		.duration(GTMaterials.Neutronium.getMass() * 6)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.extractor('gtceu:extractor/recycling/empty_tier_iii_battery')
		.itemInputs('gtceu:empty_tier_iii_battery')
		.outputFluids(Fluid.of('gtceu:neutronium', 864))
		.duration(GTMaterials.Neutronium.getMass() * 6)
		.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Iron Door

	event.recipes.gtceu.macerator('gtceu:macerate_iron_door')
		.itemInputs('minecraft:iron_door')
		.itemOutputs('2x #forge:dusts/wrought_iron')
		.duration(GTMaterials.WroughtIron.getMass() * 2)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('gtceu:arc_iron_door')
		.itemInputs('minecraft:iron_door')
		.itemOutputs('2x #forge:ingots/wrought_iron')
		.duration(GTMaterials.WroughtIron.getMass() * 2)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Redstone lamp

	event.recipes.gtceu.macerator('gtceu:macerate_redstone_lamp')
		.itemInputs('minecraft:redstone_lamp')
		.itemOutputs('2x #forge:small_dusts/red_alloy', '21x #forge:tiny_dusts/glass', '4x #forge:dusts/glowstone')
		.duration(GTMaterials.RedAlloy.getMass() * 2)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('gtceu:arc_redstone_lamp')
		.itemInputs('minecraft:redstone_lamp')
		.itemOutputs('4x #forge:nuggets/red_alloy')
		.duration(GTMaterials.RedAlloy.getMass() * 2)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Dispenser

	event.recipes.gtceu.macerator('gtceu:macerate_dispenser')
		.itemInputs('minecraft:dispenser')
		.itemOutputs('6x #forge:dusts/stone', '1x #forge:dusts/redstone', '1x #forge:dusts/brass')
		.duration(GTMaterials.Brass.getMass() * 2)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('gtceu:arc_dispenser')
		.itemInputs('minecraft:dispenser')
		.itemOutputs('1x #forge:ingots/brass')
		.duration(GTMaterials.Brass.getMass() * 2)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Dropper

	event.recipes.gtceu.macerator('gtceu:macerate_dropper')
		.itemInputs('minecraft:dropper')
		.itemOutputs('7x #forge:dusts/stone', '1x #forge:dusts/redstone', '1x #forge:dusts/brass')
		.duration(GTMaterials.Brass.getMass() * 2)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('gtceu:arc_dropper')
		.itemInputs('minecraft:dropper')
		.itemOutputs('1x #forge:ingots/brass')
		.duration(GTMaterials.Brass.getMass() * 2)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Steam oven

	event.recipes.gtceu.macerator('gtceu:macerate_steam_oven')
		.itemInputs('gtceu:steam_oven')
		.itemOutputs('18x #forge:dusts/bronze', '8x #forge:dusts/invar', '7x #forge:dusts/wrought_iron', '2x #forge:dusts/steel')
		.duration(1972)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('gtceu:arc_steam_oven')
		.itemInputs('gtceu:steam_oven')
		.itemOutputs('18x #forge:ingots/bronze', '8x #forge:ingots/invar', '7x #forge:ingots/wrought_iron', '2x #forge:ingots/steel')
		.duration(1792)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Steam grinder

	event.recipes.gtceu.macerator('gtceu:macerate_steam_grinder')
		.itemInputs('gtceu:steam_grinder')
		.itemOutputs('18x #forge:dusts/bronze', '8x #forge:dusts/invar', '7x #forge:dusts/wrought_iron', '2x #forge:dusts/steel')
		.duration(1972)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('gtceu:arc_steam_grinder')
		.itemInputs('gtceu:steam_grinder')
		.itemOutputs('18x #forge:ingots/bronze', '8x #forge:ingots/invar', '7x #forge:ingots/wrought_iron', '2x #forge:ingots/steel')
		.duration(1792)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])
}