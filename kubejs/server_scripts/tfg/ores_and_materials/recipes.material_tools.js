// priority: 0
"use strict";


/**
 * @param {Internal.RecipesEventJS} event 
 * @param {GTToolType} toolType 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processToolMortar(event, toolType, material) {
	const toolItem = ToolHelper.get(toolType, material)
	if (toolItem.isEmpty())
		return;

	const usableItem = ChemicalHelper.get(TagPrefix.ingot, material, 1)
	if (usableItem.isEmpty())
		return;

	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped(toolItem, [
			'CA ',
			' B '
		], {
			A: usableItem,
			B: '#tfc:rock/raw',
			C: '#tfc:chisels'
		})
	).id(`gtceu:shaped/mortar_${material.getName()}`);

	const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY)
	if (tfcProperty !== null) {
		addTFCMelting(event, toolItem, material, 144, 'mortar');
	}
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {GTToolType} toolType 
 * @param {String} tagPrefixName
 * @param {TagPrefix} headTagPrefix 
 * @param {Internal.ItemStack} extruderMold 
 * @param {Internal.ItemStack} ceramicMold
 * @param {number} circuitMeta 
 * Used for the laser engraver recipes for gem tools.
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processGTToolHead(event, toolType, tagPrefixName, headTagPrefix, extruderMold, ceramicMold, circuitMeta, material) {
	const toolItem = ToolHelper.get(toolType, material);
	const toolHeadItem = ChemicalHelper.get(headTagPrefix, material, 1);

	if (toolItem.isEmpty() || toolHeadItem.isEmpty())
		return;

	// Skip this one because it has a duping bug, and you can't remove the macerator/arc furnace iron pick recipes
	if (material === GTMaterials.Iron)
		return;

	const materialName = material.getName();

	if (toolType === GTToolType.WRENCH) {
		event.recipes.tfc.advanced_shaped_crafting(
			TFC.itemStackProvider.of(toolItem).copyForgingBonus().copyHeat(), [
			'ABC',
			'DB '
		], {
			A: toolHeadItem,
			B: `#forge:rods/${materialName}`,
			C: '#forge:tools/screwdrivers',
			D: `#forge:bolts/${materialName}`
		}, 0, 0)
		.id(`gtceu:shaped/${toolType.name}_${materialName}`);
	} else if (toolType === GTToolType.WIRE_CUTTER) {
		event.recipes.tfc.advanced_shaped_crafting(
			TFC.itemStackProvider.of(toolItem).copyForgingBonus().copyHeat(), [
			' AD',
			'CBC'
		], {
			A: toolHeadItem,
			B: `#forge:small_springs`,
			C: `#forge:rods/${materialName}`,
			D: '#forge:tools/screwdrivers'
		}, 0, 1)
		.id(`gtceu:shaped/${toolType.name}_${materialName}`);
	} else {
		event.recipes.tfc.advanced_shapeless_crafting(
			TFC.itemStackProvider.of(toolItem).copyForgingBonus().copyHeat(),
			[toolHeadItem, '#forge:rods/wooden'],
			toolHeadItem
		)
		.id(`gtceu:shaped/${toolType.name}_${materialName}`);
	}

	const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY)
	if (tfcProperty !== null) {
		const materialAmount = getMaterialAmount(headTagPrefix, material);
		addTFCMelting(event, toolItem, material, materialAmount * 144, toolType.name);
	}

	processToolHead(event, headTagPrefix, tagPrefixName, extruderMold, ceramicMold, circuitMeta, material);
}

/** 
 * @param {Internal.RecipesEventJS} event 
 * @param {TagPrefix} headTagPrefix 
 * @param {String} tagPrefixName
 * @param {Internal.ItemStack} extruderMold 
 * @param {Internal.ItemStack} ceramicMold
 * @param {number} circuitMeta 
 * Used for the laser engraver recipes for gem tools.
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processToolHead(event, headTagPrefix, tagPrefixName, extruderMold, ceramicMold, circuitMeta, material) {
	const toolHeadItem = ChemicalHelper.get(headTagPrefix, material, 1);
	if (toolHeadItem.isEmpty())
		return;

	event.remove({ mod: 'gtceu', type: 'minecraft:crafting_shaped', output: toolHeadItem })

	const materialName = material.getName();
	const materialAmount = getMaterialAmount(headTagPrefix, material);

	// Metal-based tools
	if (material.hasProperty(PropertyKey.INGOT)) {
		const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);
		if (ingotItem.hasTag('c:hidden_from_recipe_viewers'))
			return

		event.recipes.gtceu.extruder(`tfg:extrude_${materialName}_ingot_to_${tagPrefixName}`)
			.itemInputs(ingotItem.copyWithCount(materialAmount))
			.notConsumable(extruderMold)
			.itemOutputs(toolHeadItem)
			.duration(material.getMass() * 6)
			.EUt(GTValues.VA[GTValues.LV])

		let input_array = [];
		for (let i = 0; i < materialAmount; i++) {
			input_array.push(ingotItem);
		}
		event.recipes.vintageimprovements.curving(toolHeadItem, input_array)
			.head(extruderMold)
			.id(`tfg:vi/curving/${materialName}_ingot_to_${tagPrefixName}`)

		if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED) && ceramicMold !== null) {
			addMaterialCasting(event, toolHeadItem, ceramicMold, false, null, material, tagPrefixName, materialAmount * 144);
		}
	}
	// Gem tools
	else if (material.hasProperty(PropertyKey.GEM)) {
		const gemItem = ChemicalHelper.get(TagPrefix.gem, material, materialAmount)
		if (gemItem.isEmpty() || gemItem.hasTag('c:hidden_from_recipe_viewers'))
			return

		event.recipes.gtceu.laser_engraver(`tfg:engrave_${materialName}_gem_to_${tagPrefixName}`)
			.itemInputs(gemItem)
			.notConsumable(ChemicalHelper.get(TagPrefix.lens, GTMaterials.Glass, 1))
			.circuit(circuitMeta)
			.itemOutputs(toolHeadItem)
			.duration(material.getMass() * 6)
			.EUt(GTValues.VA[GTValues.MV])
	}

	addMaterialRecycling(event, toolHeadItem, material, tagPrefixName, headTagPrefix);
}


/**
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function modifyRecyclingAmounts(material) {
	TagPrefix.toolHeadWrench.modifyMaterialAmount(material, 2);
	TagPrefix.toolHeadBuzzSaw.modifyMaterialAmount(material, 2);
	TagPrefix.toolHeadScrewdriver.modifyMaterialAmount(material, 1);
	TagPrefix.toolHeadWireCutter.modifyMaterialAmount(material, 2);
	TFGTagPrefix.toolHeadSword.modifyMaterialAmount(material, 2);
	TFGTagPrefix.toolHeadButcheryKnife.modifyMaterialAmount(material, 1);
	TFGTagPrefix.toolHeadMiningHammer.modifyMaterialAmount(material, 2);
	TFGTagPrefix.toolHeadSpade.modifyMaterialAmount(material, 2);
	TFGTagPrefix.toolHeadPickaxe.modifyMaterialAmount(material, 1);
	TFGTagPrefix.toolHeadAxe.modifyMaterialAmount(material, 1);
	TFGTagPrefix.toolHeadShovel.modifyMaterialAmount(material, 1);
	TFGTagPrefix.toolHeadHoe.modifyMaterialAmount(material, 1);
	TFGTagPrefix.toolHeadHammer.modifyMaterialAmount(material, 1);
	TFGTagPrefix.toolHeadSaw.modifyMaterialAmount(material, 1);
	TFGTagPrefix.toolHeadFile.modifyMaterialAmount(material, 1);
	TFGTagPrefix.toolHeadKnife.modifyMaterialAmount(material, 1);
}