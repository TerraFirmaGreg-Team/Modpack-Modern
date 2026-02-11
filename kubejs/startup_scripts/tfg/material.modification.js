// priority: 0
"use strict";

const registerTFGMaterialModification = (event) => {

	const $TFC_PROPERTY = Java.loadClass('su.terrafirmagreg.core.compat.gtceu.properties.TFCProperty')
	const $ORE_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')
	const $INGOT_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty')
	const $DUST_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
	const $BLAST_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty')
	const $FLUID_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty')
	const $ITEM_PIPE_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ItemPipeProperties')
	const $FLUID_PIPE_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties')
	const $HAZARD_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.HazardProperty')
	const $TFGT_MEDICAL_CONDITIONS = Java.loadClass('su.terrafirmagreg.core.common.data.tfgt.TFGTMedicalConditions')

	const $MATERIAL_FLAGS = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlags')

	const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys')
	const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');

	const $GreateMaterials = Java.loadClass("electrolyte.greate.registry.GreateMaterials")

	const allTools = [
		GTToolType.AXE,
		GTToolType.PICKAXE,
		GTToolType.HARD_HAMMER,
		GTToolType.BUTCHERY_KNIFE,
		GTToolType.SWORD,
		GTToolType.FILE,
		GTToolType.SAW,
		GTToolType.SHOVEL,
		GTToolType.SHOVEL,
		GTToolType.SPADE,
		GTToolType.MINING_HAMMER,
		GTToolType.HOE,
		GTToolType.KNIFE,
		GTToolType.BUZZSAW,
		GTToolType.SCYTHE,
		GTToolType.WIRE_CUTTER,
		GTToolType.WIRE_CUTTER_LV,
		GTToolType.WIRE_CUTTER_HV,
		GTToolType.WIRE_CUTTER_IV,
		GTToolType.DRILL_LV,
		GTToolType.DRILL_MV,
		GTToolType.DRILL_HV,
		GTToolType.DRILL_EV,
		GTToolType.DRILL_IV,
		GTToolType.SCREWDRIVER,
		GTToolType.SCREWDRIVER_LV,
		GTToolType.CHAINSAW_LV,
		GTToolType.WRENCH,
		GTToolType.WRENCH_LV,
		GTToolType.WRENCH_HV,
		GTToolType.WRENCH_IV,
		GTToolType.CROWBAR,
	]

	const ULVTools = [
		GTToolType.AXE,
		GTToolType.PICKAXE,
		GTToolType.HARD_HAMMER,
		GTToolType.BUTCHERY_KNIFE,
		GTToolType.SWORD,
		GTToolType.FILE,
		GTToolType.SAW,
		GTToolType.SHOVEL,
		GTToolType.SHOVEL,
		GTToolType.SPADE,
		GTToolType.MINING_HAMMER,
		GTToolType.HOE,
		GTToolType.KNIFE,
		GTToolType.BUZZSAW,
		GTToolType.SCYTHE,
		GTToolType.WIRE_CUTTER,
		GTToolType.SCREWDRIVER,
		GTToolType.WRENCH,
		GTToolType.CROWBAR,
        //Hidden
        GTToolType.WIRE_CUTTER_LV,
        GTToolType.SCREWDRIVER_LV,
        GTToolType.WRENCH_LV
	]

	const LVTools = [
		GTToolType.AXE,
		GTToolType.PICKAXE,
		GTToolType.HARD_HAMMER,
		GTToolType.BUTCHERY_KNIFE,
		GTToolType.SWORD,
		GTToolType.FILE,
		GTToolType.SAW,
		GTToolType.SHOVEL,
		GTToolType.SPADE,
		GTToolType.MINING_HAMMER,
		GTToolType.HOE,
		GTToolType.KNIFE,
		GTToolType.BUZZSAW,
		GTToolType.SCYTHE,
		GTToolType.WIRE_CUTTER,
		GTToolType.WIRE_CUTTER_LV,
		GTToolType.DRILL_LV,
		GTToolType.SCREWDRIVER,
		GTToolType.SCREWDRIVER_LV,
		GTToolType.CHAINSAW_LV,
		GTToolType.WRENCH,
		GTToolType.WRENCH_LV,
		GTToolType.CROWBAR
	]

	const MVTools = [
		GTToolType.HARD_HAMMER,
		GTToolType.BUTCHERY_KNIFE,
		GTToolType.SWORD,
		GTToolType.FILE,
		GTToolType.HOE,
		GTToolType.KNIFE,
		GTToolType.BUZZSAW,
		GTToolType.SCYTHE,
		GTToolType.WIRE_CUTTER_LV,
		GTToolType.DRILL_LV,
		GTToolType.DRILL_MV,
		GTToolType.SCREWDRIVER_LV,
		GTToolType.CHAINSAW_LV,
		GTToolType.WRENCH_LV,
		GTToolType.CROWBAR,
        //Hiden
        GTToolType.WRENCH,
        GTToolType.SCREWDRIVER,
        GTToolType.WIRE_CUTTER
	]

	const HVTools = [
		GTToolType.HARD_HAMMER,
		GTToolType.BUTCHERY_KNIFE,
		GTToolType.SWORD,
		GTToolType.FILE,
		GTToolType.HOE,
		GTToolType.KNIFE,
		GTToolType.BUZZSAW,
		GTToolType.SCYTHE,
		GTToolType.WIRE_CUTTER_HV,
		GTToolType.DRILL_HV,
		GTToolType.SCREWDRIVER_LV,
		GTToolType.CHAINSAW_LV,
		GTToolType.WRENCH_HV,
		GTToolType.CROWBAR,
        //Hiden
        GTToolType.WRENCH,
		GTToolType.WRENCH_LV,
        GTToolType.SCREWDRIVER,
        GTToolType.WIRE_CUTTER,
        GTToolType.WIRE_CUTTER_LV,
        GTToolType.DRILL_LV
	]

	const EVTools = [
		GTToolType.HARD_HAMMER,
		GTToolType.BUTCHERY_KNIFE,
		GTToolType.SWORD,
		GTToolType.FILE,
		GTToolType.HOE,
		GTToolType.KNIFE,
		GTToolType.BUZZSAW,
		GTToolType.SCYTHE,
		GTToolType.WIRE_CUTTER_HV,
		GTToolType.DRILL_EV,
		GTToolType.SCREWDRIVER_LV,
		GTToolType.CHAINSAW_LV,
		GTToolType.WRENCH_HV,
		GTToolType.CROWBAR,
        // Hidden
        GTToolType.WRENCH,
		GTToolType.WRENCH_LV,
        GTToolType.SCREWDRIVER,
        GTToolType.WIRE_CUTTER,
        GTToolType.WIRE_CUTTER_LV,
        GTToolType.DRILL_LV
	]

	const IVTools = [
		GTToolType.HARD_HAMMER,
		GTToolType.BUTCHERY_KNIFE,
		GTToolType.SWORD,
		GTToolType.FILE,
		GTToolType.HOE,
		GTToolType.KNIFE,
		GTToolType.BUZZSAW,
		GTToolType.SCYTHE,
		GTToolType.WIRE_CUTTER_IV,
		GTToolType.DRILL_IV,
		GTToolType.SCREWDRIVER_LV,
		GTToolType.CHAINSAW_LV,
		GTToolType.WRENCH_IV,
		GTToolType.CROWBAR,
        // Hidden
        GTToolType.WRENCH,
		GTToolType.WRENCH_LV,
        GTToolType.SCREWDRIVER,
        GTToolType.WIRE_CUTTER,
        GTToolType.WIRE_CUTTER_LV,
        GTToolType.DRILL_LV
	]

    //#region Tools

	// Cast iron tools don't make sense but gregtech shits itself if they're missing,
	// so I'm just giving them terrible terrible stats
	GTMaterials.Iron.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.5, 1.0, 20, 2, [GTToolType.PICKAXE]).build());

    // Remove all the tools we don't want anymore
    const noToolMaterials = [
        GTMaterials.Diamond,
        GTMaterials.Invar,
        GTMaterials.RoseGold,
        GTMaterials.SterlingSilver,
        GTMaterials.Aluminium,
        GTMaterials.Polyethylene,
        GTMaterials.Polybenzimidazole,
        GTMaterials.Polytetrafluoroethylene,
        GTMaterials.Titanium,
        GTMaterials.TungstenSteel,
        GTMaterials.Netherite,
        GTMaterials.StainlessSteel
    ];

    for (let mat of noToolMaterials) {
        if (mat.hasProperty(PropertyKey.TOOL)) {
            let toolProp = mat.getProperty(PropertyKey.TOOL);
            toolProp.removeTypes(allTools);
        }
    }
    // Cobalt has its own until we can find a way to generate only the buzzsaw without the tool
    GTMaterials.CobaltBrass.getProperty(PropertyKey.TOOL).removeTypes([
		GTToolType.AXE,
		GTToolType.PICKAXE,
		GTToolType.HARD_HAMMER,
		GTToolType.BUTCHERY_KNIFE,
		GTToolType.SWORD,
		GTToolType.FILE,
		GTToolType.SAW,
		GTToolType.SHOVEL,
		GTToolType.SHOVEL,
		GTToolType.SPADE,
		GTToolType.MINING_HAMMER,
		GTToolType.HOE,
		GTToolType.KNIFE,
		GTToolType.SCYTHE,
		GTToolType.WIRE_CUTTER,
		GTToolType.WIRE_CUTTER_LV,
		GTToolType.WIRE_CUTTER_HV,
		GTToolType.WIRE_CUTTER_IV,
		GTToolType.DRILL_LV,
		GTToolType.DRILL_MV,
		GTToolType.DRILL_HV,
		GTToolType.DRILL_EV,
		GTToolType.DRILL_IV,
		GTToolType.SCREWDRIVER,
		GTToolType.SCREWDRIVER_LV,
		GTToolType.CHAINSAW_LV,
		GTToolType.WRENCH,
		GTToolType.WRENCH_LV,
		GTToolType.WRENCH_HV,
		GTToolType.WRENCH_IV,
		GTToolType.CROWBAR,
	]);

    // Balance Tools

	GTMaterials.Stone.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(1.2, 1.0, 8, 1, [
		GTToolType.AXE,
		GTToolType.HARD_HAMMER,
		GTToolType.HOE,
		GTToolType.KNIFE,
		GTToolType.SHOVEL
	]).build());

	GTMaterials.Flint.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(1.8, 2, 54, 1, [
		GTToolType.AXE,
		GTToolType.HARD_HAMMER,
		GTToolType.HOE,
		GTToolType.KNIFE,
		GTToolType.SHOVEL,
        GTToolType.PICKAXE,
        GTToolType.SWORD
	]).build());

	GTMaterials.Copper.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.0, 1.5, 132, 2, ULVTools).build());
	GTMaterials.BismuthBronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.7, 2.0, 188, 2, ULVTools.concat(GTToolType.MORTAR)).build());
	GTMaterials.BlackBronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(3.1, 2.0, 194, 2, ULVTools.concat(GTToolType.MORTAR)).build());
	GTMaterials.BlackSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(4.5, 3.5, 612, 3, ULVTools.concat(GTToolType.MORTAR)).build());
    let ostrum_iodide = TFGHelpers.getMaterial('ostrum_iodide');
    ostrum_iodide.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(18, 8, 3096, 4, EVTools).build());
    let boron_carbide = TFGHelpers.getMaterial('boron_carbide');
    boron_carbide.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(3, 9, 3678, 3, HVTools).build());

    // Remove all the tools we don't want anymore
    const rebalanceStats = [
        GTMaterials.DamascusSteel,
        GTMaterials.Bronze,
        GTMaterials.WroughtIron,
        GTMaterials.Steel,
        GTMaterials.BlueSteel,
        GTMaterials.RedSteel,
        GTMaterials.VanadiumSteel,
        GTMaterials.Ultimet,
        GTMaterials.TungstenCarbide,
        GTMaterials.HSSE,
        GTMaterials.Duranium,
        GTMaterials.NaquadahAlloy
    ];

    for (let mat of rebalanceStats) {
     if (mat.hasProperty(PropertyKey.TOOL)) {
          mat.removeProperty(PropertyKey.TOOL);
      }
    }

    GTMaterials.DamascusSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(6, 4, 1024, 3, ULVTools.concat(GTToolType.MORTAR)).build());
    GTMaterials.Bronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.5, 2, 212, 2, ULVTools).build());
    GTMaterials.WroughtIron.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(3, 2, 384, 2, ULVTools).build());
    GTMaterials.Steel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(4, 3, 512, 3, ULVTools).build());
    GTMaterials.BlueSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(7, 3, 804, 3, LVTools).build());
    GTMaterials.RedSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(4, 5.5, 1560, 3, LVTools).build());
    GTMaterials.VanadiumSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(5, 6, 2048, 3, MVTools).build());
    GTMaterials.Ultimet.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(14, 7, 1678, 4, HVTools).build());
    GTMaterials.TungstenCarbide.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(32, 10, 1024, 4, EVTools).build());
    GTMaterials.HSSE.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(42, 11, 4012, 3, IVTools).build());
    GTMaterials.Duranium.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(52, 12, 6192, 5, IVTools).build());
    GTMaterials.NaquadahAlloy.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(62, 13, 8192, 5, IVTools).build());

    //#endregion




}