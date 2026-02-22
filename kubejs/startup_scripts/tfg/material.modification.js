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
	const $ROTOR_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.RotorProperty')
	const $HAZARD_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.HazardProperty')
	const $TFGT_MEDICAL_CONDITIONS = Java.loadClass('su.terrafirmagreg.core.common.data.tfgt.TFGTMedicalConditions')

	const $MATERIAL_FLAGS = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlags')

	const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys')
	const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');

	const $GreateMaterials = Java.loadClass("electrolyte.greate.registry.GreateMaterials")

	const $GTToolType = Java.loadClass('com.gregtechceu.gtceu.api.item.tool.GTToolType')
	const $toolTypes = $GTToolType.getTypes()

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
		$toolTypes.getTypes().get("mv_buzzsaw"),
		GTToolType.SCYTHE,
		$toolTypes.getTypes().get("mv_wirecutter"),
		GTToolType.DRILL_EV,
		$toolTypes.getTypes().get("mv_screwdriver"),
		$toolTypes.getTypes().get("mv_chainsaw"),
		$toolTypes.getTypes().get("mv_wrench"),
		GTToolType.CROWBAR,
        //Hiden
        GTToolType.WRENCH,
		GTToolType.WRENCH_LV,
        GTToolType.SCREWDRIVER,
		GTToolType.SCREWDRIVER_LV,
        GTToolType.WIRE_CUTTER,
        GTToolType.WIRE_CUTTER_LV,
        GTToolType.DRILL_LV,
		GTToolType.CHAINSAW_LV,
		GTToolType.BUZZSAW
	]

	const HVTools = [
		GTToolType.HARD_HAMMER,
		GTToolType.BUTCHERY_KNIFE,
		GTToolType.SWORD,
		GTToolType.FILE,
		GTToolType.HOE,
		GTToolType.KNIFE,
		$toolTypes.getTypes().get("hv_buzzsaw"),
		GTToolType.SCYTHE,
		$toolTypes.getTypes().get("hv_wirecutter"),
		GTToolType.DRILL_HV,
		$toolTypes.getTypes().get("hv_screwdriver"),
		$toolTypes.getTypes().get("hv_chainsaw"),
		$toolTypes.getTypes().get("hv_wrench"),
		GTToolType.CROWBAR,
        //Hiden
        GTToolType.WRENCH,
		GTToolType.WRENCH_LV,
        GTToolType.SCREWDRIVER,
		GTToolType.SCREWDRIVER_LV,
        GTToolType.WIRE_CUTTER,
        GTToolType.WIRE_CUTTER_LV,
        GTToolType.DRILL_LV,
		GTToolType.CHAINSAW_LV,
		GTToolType.BUZZSAW
	]

	const EVTools = [
		GTToolType.HARD_HAMMER,
		GTToolType.BUTCHERY_KNIFE,
		GTToolType.SWORD,
		GTToolType.FILE,
		GTToolType.HOE,
		GTToolType.KNIFE,
		$toolTypes.getTypes().get("ev_buzzsaw"),
		GTToolType.SCYTHE,
		$toolTypes.getTypes().get("ev_wirecutter"),
		GTToolType.DRILL_EV,
		$toolTypes.getTypes().get("ev_screwdriver"),
		$toolTypes.getTypes().get("ev_chainsaw"),
		$toolTypes.getTypes().get("ev_wrench"),
		GTToolType.CROWBAR,
        // Hidden
        GTToolType.WRENCH,
		GTToolType.WRENCH_LV,
        GTToolType.SCREWDRIVER,
		GTToolType.SCREWDRIVER_LV,
        GTToolType.WIRE_CUTTER,
        GTToolType.WIRE_CUTTER_LV,
        GTToolType.DRILL_LV,
		GTToolType.CHAINSAW_LV,
		GTToolType.BUZZSAW
	]

	const IVTools = [
		GTToolType.HARD_HAMMER,
		GTToolType.BUTCHERY_KNIFE,
		GTToolType.SWORD,
		GTToolType.FILE,
		GTToolType.HOE,
		GTToolType.KNIFE,
		$toolTypes.getTypes().get("iv_buzzsaw"),
		GTToolType.SCYTHE,
		GTToolType.WIRE_CUTTER_IV,
		GTToolType.DRILL_IV,
		GTToolType.SCREWDRIVER_IV,
		GTToolType.CHAINSAW_IV,
		GTToolType.WRENCH_IV,
		GTToolType.CROWBAR,
        // Hidden
        GTToolType.WRENCH,
		GTToolType.WRENCH_LV,
        GTToolType.SCREWDRIVER,
		GTToolType.SCREWDRIVER_LV,
        GTToolType.WIRE_CUTTER,
        GTToolType.WIRE_CUTTER_LV,
        GTToolType.DRILL_LV,
		GTToolType.CHAINSAW_LV,
		GTToolType.BUZZSAW
	]

		const ZPMTools = [
		GTToolType.HARD_HAMMER,
		GTToolType.BUTCHERY_KNIFE,
		GTToolType.SWORD,
		GTToolType.FILE,
		GTToolType.HOE,
		GTToolType.KNIFE,
		$toolTypes.getTypes().get("zpm_buzzsaw"),
		GTToolType.SCYTHE,
		$toolTypes.getTypes().get("zpm_wirecutter"),
		$toolTypes.getTypes().get("zpm_drill"),
		$toolTypes.getTypes().get("zpm_screwdriver"),
		$toolTypes.getTypes().get("zpm_chainsaw"),
		$toolTypes.getTypes().get("zpm_wrench"),
		GTToolType.CROWBAR,
        // Hidden
        GTToolType.WRENCH,
		GTToolType.WRENCH_LV,
        GTToolType.SCREWDRIVER,
		GTToolType.SCREWDRIVER_LV,
        GTToolType.WIRE_CUTTER,
        GTToolType.WIRE_CUTTER_LV,
        GTToolType.DRILL_LV,
		GTToolType.CHAINSAW_LV,
		GTToolType.BUZZSAW
	]

    //#region Tools

    // Remove all the tools we don't want anymore
    const noToolMaterials = [
        GTMaterials.Diamond,
        GTMaterials.Invar,
        GTMaterials.RoseGold,
        GTMaterials.SterlingSilver,
        GTMaterials.Aluminium,
        //GTMaterials.Polyethylene,
        //GTMaterials.Polybenzimidazole,
        //GTMaterials.Polytetrafluoroethylene,
        GTMaterials.Titanium,
        GTMaterials.TungstenSteel,
        GTMaterials.Netherite,
        GTMaterials.StainlessSteel,
		GTMaterials.Darmstadtium,
		GTMaterials.RhodiumPlatedPalladium
    ];

    for (let mat of noToolMaterials) {
     if (mat.hasProperty(PropertyKey.TOOL)) {
          mat.removeProperty(PropertyKey.TOOL);
      }
    }

    // Cobalt has its own until we can find a way to generate only the buzzsaw without the tool
    GTMaterials.CobaltBrass.removeProperty(PropertyKey.TOOL);
	GTMaterials.CobaltBrass.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(1, 1, 1, 1, [GTToolType.BUZZSAW]).build());
	// Cast iron tools don't make sense but gregtech shits itself if they're missing,
	// so I'm just giving them terrible terrible stats
	GTMaterials.Iron.removeProperty(PropertyKey.TOOL);
	GTMaterials.Iron.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.5, 1.0, 20, 2, [GTToolType.PICKAXE]).build());

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
    TFGHelpers.getMaterial('ostrum_iodide').setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(18, 8, 3096, 4, EVTools).build());
    TFGHelpers.getMaterial('boron_carbide').setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(3, 9, 3678, 3, HVTools).build());

    // Remove all the tools we want to rebalance
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
        GTMaterials.NaquadahAlloy,
		GTMaterials.Neutronium
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
	GTMaterials.Neutronium.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(180.0, 100.0, 65535, 6, ZPMTools).build());

    //#endregion

	//#region Turbine

    // Remove all the Turbine Rotors we don't want anymore
    const noRotorMaterials = [
        GTMaterials.Bronze,
		GTMaterials.CobaltBrass,
		GTMaterials.Manganese,
		GTMaterials.Molybdenum,
		GTMaterials.RoseGold,
		GTMaterials.Iron,
		GTMaterials.BismuthBronze,
		GTMaterials.Brass,
		GTMaterials.Chromium,
		GTMaterials.Invar,
		GTMaterials.Steel,
		GTMaterials.Magnalium,
		GTMaterials.WroughtIron,
		GTMaterials.Aluminium,
		GTMaterials.Neodymium,
		GTMaterials.VanadiumSteel,
		GTMaterials.StainlessSteel,
		GTMaterials.Titanium,
		GTMaterials.Tungsten,
		GTMaterials.TungstenSteel,
		GTMaterials.HSSG,
		GTMaterials.Iridium,
		GTMaterials.RhodiumPlatedPalladium,
		GTMaterials.Naquadah,
		GTMaterials.Osmium,
    ];
    for (let mat of noRotorMaterials) {
     if (mat.hasProperty(PropertyKey.ROTOR)) {
          mat.removeProperty(PropertyKey.ROTOR);
      }
	};

	// Balance Turbine Rotors Stats

    const BalanceRotorMaterials = [
        GTMaterials.SterlingSilver,
		GTMaterials.Ultimet,
		GTMaterials.HSSS,
		GTMaterials.Osmiridium,
		GTMaterials.NaquadahAlloy,
		GTMaterials.Tritanium
    ];
    for (let mat of BalanceRotorMaterials) {
     if (mat.hasProperty(PropertyKey.ROTOR)) {
          mat.removeProperty(PropertyKey.ROTOR);
      }
	};

	GTMaterials.SterlingSilver.setProperty(PropertyKey.ROTOR, new $ROTOR_PROPERTY(100, 180, 1, 147));
	GTMaterials.Ultimet.setProperty(PropertyKey.ROTOR, new $ROTOR_PROPERTY(140, 140, 4, 786));
	GTMaterials.HSSS.setProperty(PropertyKey.ROTOR, new $ROTOR_PROPERTY(280, 200, 7, 1986));
	GTMaterials.Osmiridium.setProperty(PropertyKey.ROTOR, new $ROTOR_PROPERTY(320, 200, 12, 2364));
	GTMaterials.NaquadahAlloy.setProperty(PropertyKey.ROTOR, new $ROTOR_PROPERTY(370, 180, 13, 3840));
	GTMaterials.Tritanium.setProperty(PropertyKey.ROTOR, new $ROTOR_PROPERTY(380, 240, 15, 7680));

	// New Materials - Require MaterialFlags (Plates, Bolt/Screwdriver)

	//TFGHelpers.getMaterial('sic_sic').setProperty(PropertyKey.ROTOR, new $ROTOR_PROPERTY(200, 80, 2, 238));
	GTMaterials.get('rocket_alloy_t1').setProperty(PropertyKey.ROTOR, new $ROTOR_PROPERTY(170, 105, 3, 1215));
	TFGHelpers.getMaterial('inconel_718').setProperty(PropertyKey.ROTOR, new $ROTOR_PROPERTY(130, 180, 4, 1536));
	TFGHelpers.getMaterial('tungsten_bismuth_oxide_composite').setProperty(PropertyKey.ROTOR, new $ROTOR_PROPERTY(270, 80, 7, 465));
	GTMaterials.get('rocket_alloy_t2').setProperty(PropertyKey.ROTOR, new $ROTOR_PROPERTY(210, 150, 5, 2484));
	//TFGHelpers.getMaterial('mo_si_b').setProperty(PropertyKey.ROTOR, new $ROTOR_PROPERTY(255, 180, 6, 1110));
	//GTMaterials.getMaterial('rocket_alloy_t3').setProperty(PropertyKey.ROTOR, new $ROTOR_PROPERTY(300, 160, 8, 3840));
	//TFGHelpers.getMaterial('ysz').setProperty(PropertyKey.ROTOR, new $ROTOR_PROPERTY(270, 220, 10, 5310));
}