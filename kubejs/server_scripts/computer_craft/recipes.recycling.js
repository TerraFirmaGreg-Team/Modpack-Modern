// priority: 0
"use strict";

function registerComputerCraftRecyclingRecipes(event) {

	// Computer
	event.recipes.gtceu.macerator('computercraft:macerator/recycling/computer_normal')
		.itemInputs('computercraft:computer_normal')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 5),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.BatteryAlloy, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.MagnesiumDiboride, 1)
	)
		.duration(GTMaterials.Aluminium.getMass() * 5)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('computercraft:arc_furnace/recycling/computer_normal')
		.itemInputs('computercraft:computer_normal')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 5),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.BatteryAlloy, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.MagnesiumDiboride, 1)
		)
		.duration(GTMaterials.Aluminium.getMass() * 5)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Advanced Computer
	event.recipes.gtceu.macerator('computercraft:macerator/recycling/computer_advanced')
		.itemInputs('computercraft:computer_advanced')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 4),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.BatteryAlloy, 8),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.MercuryBariumCalciumCuprate, 1)
	)
		.duration(GTMaterials.StainlessSteel.getMass() * 4)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('computercraft:arc_furnace/recycling/computer_advanced')
		.itemInputs('computercraft:computer_advanced')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 4),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.BatteryAlloy, 8),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.MercuryBariumCalciumCuprate, 1)
		)
		.duration(GTMaterials.StainlessSteel.getMass() * 4)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Turtle
	event.recipes.gtceu.macerator('computercraft:macerator/recycling/turtle_normal')
		.itemInputs('computercraft:turtle_normal')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 20),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.BatteryAlloy, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 12),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 4)
	)
		.duration(GTMaterials.StainlessSteel.getMass() * 20)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('computercraft:arc_furnace/recycling/turtle_normal')
		.itemInputs('computercraft:turtle_normal')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 20),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.BatteryAlloy, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 12),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 4)
		)
		.duration(GTMaterials.StainlessSteel.getMass() * 20)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Advanced Turtle
	event.recipes.gtceu.macerator('computercraft:macerator/recycling/turtle_advanced')
		.itemInputs('computercraft:turtle_advanced')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Titanium, 20),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 15),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.BatteryAlloy, 9),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 4)
	)
		.duration(GTMaterials.Titanium.getMass() * 20)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('computercraft:arc_furnace/recycling/turtle_advanced')
		.itemInputs('computercraft:turtle_advanced')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Titanium, 20),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 15),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.BatteryAlloy, 9),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 4)
	)
		.duration(GTMaterials.Titanium.getMass() * 20)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Pocket Computer
	event.recipes.gtceu.macerator('computercraft:macerator/recycling/pocket_computer_normal')
		.itemInputs('computercraft:pocket_computer_normal')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Titanium, 9),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Chromium, 2),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.BatteryAlloy, 4),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Platinum, 2)
	)
		.duration(GTMaterials.Titanium.getMass() * 9)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('computercraft:arc_furnace/recycling/pocket_computer_normal')
		.itemInputs('computercraft:pocket_computer_normal')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Titanium, 9),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Chromium, 2),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.BatteryAlloy, 4),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Platinum, 2)
	)
		.duration(GTMaterials.Titanium.getMass() * 9)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Advanced Pocket Computer
	event.recipes.gtceu.macerator('computercraft:macerator/recycling/pocket_computer_advanced')
		.itemInputs('computercraft:pocket_computer_advanced')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Titanium, 9),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 1),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Platinum, 2)
	)
		.duration(GTMaterials.Titanium.getMass() * 9)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('computercraft:arc_furnace/recycling/pocket_computer_advanced')
		.itemInputs('computercraft:pocket_computer_advanced')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Titanium, 9),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 1),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Platinum, 2)
	)
		.duration(GTMaterials.Titanium.getMass() * 9)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Monitor
	event.recipes.gtceu.macerator('computercraft:macerator/recycling/monitor_normal')
		.itemInputs('computercraft:monitor_normal')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 5)
	)
		.duration(GTMaterials.Aluminium.getMass() * 5)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('computercraft:arc_furnace/recycling/monitor_normal')
		.itemInputs('computercraft:monitor_normal')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 5)
	)
		.duration(GTMaterials.Aluminium.getMass() * 5)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Advanced Monitor
	event.recipes.gtceu.macerator('computercraft:macerator/recycling/monitor_advanced')
		.itemInputs('computercraft:monitor_advanced')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 4)
	)
		.duration(GTMaterials.StainlessSteel.getMass() * 4)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('computercraft:arc_furnace/recycling/monitor_advanced')
		.itemInputs('computercraft:monitor_advanced')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 4)
	)
		.duration(GTMaterials.StainlessSteel.getMass() * 4)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Printer
	event.recipes.gtceu.macerator('computercraft:macerator/recycling/printer')
		.itemInputs('computercraft:printer')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 15),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Cupronickel, 15),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 2),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Copper, 6)
	)
		.duration(GTMaterials.Aluminium.getMass() * 15)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('computercraft:arc_furnace/recycling/printer')
		.itemInputs('computercraft:printer')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 15),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Cupronickel, 15),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 2),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Copper, 6)
	)
		.duration(GTMaterials.Aluminium.getMass() * 15)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Disk Drive
	event.recipes.gtceu.macerator('computercraft:macerator/recycling/disk_drive')
		.itemInputs('computercraft:disk_drive')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Titanium, 1),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 1)
	)
		.duration(GTMaterials.StainlessSteel.getMass() * 6)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('computercraft:arc_furnace/recycling/disk_drive')
		.itemInputs('computercraft:disk_drive')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Titanium, 1),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 1)
	)
		.duration(GTMaterials.StainlessSteel.getMass() * 6)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])
}