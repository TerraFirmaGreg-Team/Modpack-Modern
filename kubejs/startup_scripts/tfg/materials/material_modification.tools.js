// priority: 0
"use strict";

function registerTFGToolMaterialModification(event) {
	const $ROTOR_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.RotorProperty')
	const $FLUID_PIPE_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties');

	const {
		GENERATE_BUZZSAW_BLADE,
		GENERATE_SCREWDRIVER_HEAD,
		GENERATE_DRILL_HEAD,
		GENERATE_CHAINSAW_HEAD,
		GENERATE_WRENCH_HEAD,
		GENERATE_WIRE_CUTTER_HEAD
	} = TFGMaterialFlags;

	const $GTToolType = Java.loadClass('com.gregtechceu.gtceu.api.item.tool.GTToolType')
	const $toolTypes = $GTToolType.getTypes()

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
		GTToolType.SCYTHE,
		GTToolType.WIRE_CUTTER,
		GTToolType.SCREWDRIVER,
		GTToolType.WRENCH,
		GTToolType.CROWBAR
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
		$toolTypes.get("mv_buzzsaw"),
		GTToolType.SCYTHE,
		$toolTypes.get("mv_wirecutter"),
		GTToolType.DRILL_MV,
		$toolTypes.get("mv_screwdriver"),
		$toolTypes.get("mv_chainsaw"),
		$toolTypes.get("mv_wrench"),
		GTToolType.CROWBAR
	]

	const HVTools = [
		GTToolType.HARD_HAMMER,
		GTToolType.BUTCHERY_KNIFE,
		GTToolType.SWORD,
		GTToolType.FILE,
		GTToolType.HOE,
		GTToolType.KNIFE,
		$toolTypes.get("hv_buzzsaw"),
		GTToolType.SCYTHE,
		GTToolType.WIRE_CUTTER_HV,
		GTToolType.DRILL_HV,
		GTToolType.SCREWDRIVER_HV,
		GTToolType.CHAINSAW_HV,
		GTToolType.WRENCH_HV,
		GTToolType.CROWBAR
	]

	const EVTools = [
		GTToolType.HARD_HAMMER,
		GTToolType.BUTCHERY_KNIFE,
		GTToolType.SWORD,
		GTToolType.FILE,
		GTToolType.HOE,
		GTToolType.KNIFE,
		$toolTypes.get("ev_buzzsaw"),
		GTToolType.SCYTHE,
		$toolTypes.get("ev_wirecutter"),
		GTToolType.DRILL_EV,
		$toolTypes.get("ev_screwdriver"),
		$toolTypes.get("ev_chainsaw"),
		$toolTypes.get("ev_wrench"),
		GTToolType.CROWBAR
	]

	const IVTools = [
		GTToolType.HARD_HAMMER,
		GTToolType.BUTCHERY_KNIFE,
		GTToolType.SWORD,
		GTToolType.FILE,
		GTToolType.HOE,
		GTToolType.KNIFE,
		$toolTypes.get("iv_buzzsaw"),
		GTToolType.SCYTHE,
		GTToolType.WIRE_CUTTER_IV,
		GTToolType.DRILL_IV,
		GTToolType.SCREWDRIVER_IV,
		GTToolType.CHAINSAW_IV,
		GTToolType.WRENCH_IV,
		GTToolType.CROWBAR
	]

	const ZPMTools = [
		GTToolType.HARD_HAMMER,
		GTToolType.BUTCHERY_KNIFE,
		GTToolType.SWORD,
		GTToolType.FILE,
		GTToolType.HOE,
		GTToolType.KNIFE,
		$toolTypes.get("zpm_buzzsaw"),
		GTToolType.SCYTHE,
		$toolTypes.get("zpm_wirecutter"),
		$toolTypes.get("zpm_drill"),
		$toolTypes.get("zpm_screwdriver"),
		$toolTypes.get("zpm_chainsaw"),
		$toolTypes.get("zpm_wrench"),
		GTToolType.CROWBAR,
		//Hidden
		GTToolType.PICKAXE
	]

	//#region Tools

	const toRemove = [
		// Remove all the tools we don't want anymore
		GTMaterials.CobaltBrass,
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
		GTMaterials.RhodiumPlatedPalladium,
		// Remove all the tools we want to rebalance
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

	for (let mat of toRemove) {
		if (mat.hasProperty(PropertyKey.TOOL)) {
			mat.removeProperty(PropertyKey.TOOL);
		}
	}

	// Add buzzsaw blades
	GTMaterials.CobaltBrass.addFlags(GENERATE_BUZZSAW_BLADE);
	GTMaterials.WroughtIron.addFlags(GENERATE_BUZZSAW_BLADE);
	GTMaterials.Steel.addFlags(GENERATE_BUZZSAW_BLADE);

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
		GTToolType.HOE,
		GTToolType.KNIFE,
		GTToolType.SHOVEL,
		GTToolType.PICKAXE,
		GTToolType.SWORD
	]).build());
	
	GTMaterials.Copper.addFlags(GENERATE_SCREWDRIVER_HEAD, GENERATE_WRENCH_HEAD, GENERATE_WIRE_CUTTER_HEAD);
	GTMaterials.Copper.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.0, 3.5, 132, 2, ULVTools).build());
	GTMaterials.BismuthBronze.addFlags(GENERATE_SCREWDRIVER_HEAD, GENERATE_WRENCH_HEAD, GENERATE_WIRE_CUTTER_HEAD);
	GTMaterials.BismuthBronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.7, 4.0, 188, 2, ULVTools.concat(GTToolType.MORTAR)).build());
	GTMaterials.BlackBronze.addFlags(GENERATE_SCREWDRIVER_HEAD, GENERATE_WRENCH_HEAD, GENERATE_WIRE_CUTTER_HEAD);
	GTMaterials.BlackBronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(3.1, 4.0, 194, 2, ULVTools.concat(GTToolType.MORTAR)).build());
	GTMaterials.Bronze.addFlags(GENERATE_SCREWDRIVER_HEAD, GENERATE_WRENCH_HEAD, GENERATE_WIRE_CUTTER_HEAD);
	GTMaterials.Bronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.5, 4, 212, 2, ULVTools.concat(GTToolType.MORTAR)).build());
	GTMaterials.WroughtIron.addFlags(GENERATE_SCREWDRIVER_HEAD, GENERATE_WRENCH_HEAD, GENERATE_WIRE_CUTTER_HEAD);
	GTMaterials.WroughtIron.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(3, 4, 384, 2, ULVTools.concat(GTToolType.MORTAR)).build());
	GTMaterials.Steel.addFlags(GENERATE_SCREWDRIVER_HEAD, GENERATE_WRENCH_HEAD, GENERATE_WIRE_CUTTER_HEAD);
	GTMaterials.Steel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(4, 5, 512, 3, ULVTools.concat(GTToolType.MORTAR)).build());
	GTMaterials.DamascusSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(6, 6, 1024, 3, ULVTools.concat(GTToolType.MORTAR)).build());
	GTMaterials.BlackSteel.addFlags(GENERATE_SCREWDRIVER_HEAD, GENERATE_WRENCH_HEAD, GENERATE_WIRE_CUTTER_HEAD);
	GTMaterials.BlackSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(4.5, 5.5, 612, 3, ULVTools.concat(GTToolType.MORTAR)).build());
	
	GTMaterials.BlueSteel.addFlags(GENERATE_SCREWDRIVER_HEAD, GENERATE_WRENCH_HEAD, GENERATE_WIRE_CUTTER_HEAD, GENERATE_BUZZSAW_BLADE, GENERATE_DRILL_HEAD, GENERATE_CHAINSAW_HEAD);
	GTMaterials.BlueSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(7, 5, 804, 3, LVTools).build());
	GTMaterials.RedSteel.addFlags(GENERATE_SCREWDRIVER_HEAD, GENERATE_WRENCH_HEAD, GENERATE_WIRE_CUTTER_HEAD, GENERATE_BUZZSAW_BLADE, GENERATE_DRILL_HEAD, GENERATE_CHAINSAW_HEAD);
	GTMaterials.RedSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(4, 7.5, 1560, 3, LVTools).build());

	GTMaterials.VanadiumSteel.addFlags(GENERATE_SCREWDRIVER_HEAD, GENERATE_WRENCH_HEAD, GENERATE_WIRE_CUTTER_HEAD, GENERATE_BUZZSAW_BLADE, GENERATE_DRILL_HEAD, GENERATE_CHAINSAW_HEAD);
	GTMaterials.VanadiumSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(5, 8, 2048, 3, MVTools).build());

	GTMaterials.Ultimet.addFlags(GENERATE_SCREWDRIVER_HEAD, GENERATE_WRENCH_HEAD, GENERATE_WIRE_CUTTER_HEAD, GENERATE_BUZZSAW_BLADE, GENERATE_DRILL_HEAD, GENERATE_CHAINSAW_HEAD);
	GTMaterials.Ultimet.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(14, 9, 1678, 4, HVTools).build());
	TFGHelpers.getMaterial('boron_carbide').addFlags(GENERATE_SCREWDRIVER_HEAD, GENERATE_WRENCH_HEAD, GENERATE_WIRE_CUTTER_HEAD, GENERATE_BUZZSAW_BLADE, GENERATE_DRILL_HEAD, GENERATE_CHAINSAW_HEAD);
	TFGHelpers.getMaterial('boron_carbide').setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(3, 11, 3678, 3, HVTools).build());

	GTMaterials.TungstenCarbide.addFlags(GENERATE_SCREWDRIVER_HEAD, GENERATE_WRENCH_HEAD, GENERATE_WIRE_CUTTER_HEAD, GENERATE_BUZZSAW_BLADE, GENERATE_DRILL_HEAD, GENERATE_CHAINSAW_HEAD);
	GTMaterials.TungstenCarbide.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(32, 12, 1024, 4, EVTools).build());
	TFGHelpers.getMaterial('ostrum_iodide').addFlags(GENERATE_SCREWDRIVER_HEAD, GENERATE_WRENCH_HEAD, GENERATE_WIRE_CUTTER_HEAD, GENERATE_BUZZSAW_BLADE, GENERATE_DRILL_HEAD, GENERATE_CHAINSAW_HEAD);
	TFGHelpers.getMaterial('ostrum_iodide').setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(18, 10, 3096, 4, EVTools).build());

	GTMaterials.HSSE.addFlags(GENERATE_SCREWDRIVER_HEAD, GENERATE_WRENCH_HEAD, GENERATE_WIRE_CUTTER_HEAD, GENERATE_BUZZSAW_BLADE, GENERATE_DRILL_HEAD, GENERATE_CHAINSAW_HEAD);
	GTMaterials.HSSE.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(42, 13, 4012, 3, IVTools).build());
	GTMaterials.Duranium.addFlags(GENERATE_SCREWDRIVER_HEAD, GENERATE_WRENCH_HEAD, GENERATE_WIRE_CUTTER_HEAD, GENERATE_BUZZSAW_BLADE, GENERATE_DRILL_HEAD, GENERATE_CHAINSAW_HEAD);
	GTMaterials.Duranium.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(52, 14, 6192, 5, IVTools).build());
	GTMaterials.NaquadahAlloy.addFlags(GENERATE_SCREWDRIVER_HEAD, GENERATE_WRENCH_HEAD, GENERATE_WIRE_CUTTER_HEAD, GENERATE_BUZZSAW_BLADE, GENERATE_DRILL_HEAD, GENERATE_CHAINSAW_HEAD);
	GTMaterials.NaquadahAlloy.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(62, 15, 8192, 5, IVTools).build());

	GTMaterials.Neutronium.addFlags(GENERATE_SCREWDRIVER_HEAD, GENERATE_WRENCH_HEAD, GENERATE_WIRE_CUTTER_HEAD, GENERATE_BUZZSAW_BLADE, GENERATE_DRILL_HEAD, GENERATE_CHAINSAW_HEAD);
	GTMaterials.Neutronium.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(180.0, 100.0, 65535, 6, ZPMTools).build());

	//#endregion

	//#region Turbine

	// Remove all the Turbine Rotors we don't want anymore
	const noRotorMaterials = [
		GTMaterials.Bronze,
		GTMaterials.BlackBronze,
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
		GTMaterials.TungstenCarbide,
		GTMaterials.HSSG,
		GTMaterials.HSSE,
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

	TFGHelpers.getMaterial('silicon_carbide_silicon_carbide').setProperty(PropertyKey.ROTOR, new $ROTOR_PROPERTY(200, 50, 2, 238));
	GTMaterials.get('rocket_alloy_t1').setProperty(PropertyKey.ROTOR, new $ROTOR_PROPERTY(170, 105, 3, 1215));
	TFGHelpers.getMaterial('inconel_718').setProperty(PropertyKey.ROTOR, new $ROTOR_PROPERTY(130, 180, 4, 1536));
	TFGHelpers.getMaterial('tungsten_bismuth_oxide_composite').setProperty(PropertyKey.ROTOR, new $ROTOR_PROPERTY(270, 80, 7, 465));
	GTMaterials.get('rocket_alloy_t2').setProperty(PropertyKey.ROTOR, new $ROTOR_PROPERTY(210, 150, 5, 2484));
	TFGHelpers.getMaterial('mo_si_b').setProperty(PropertyKey.ROTOR, new $ROTOR_PROPERTY(270, 180, 6, 1610));
	//GTMaterials.getMaterial('rocket_alloy_t3').setProperty(PropertyKey.ROTOR, new $ROTOR_PROPERTY(300, 160, 8, 3840));
	//TFGHelpers.getMaterial('ysz').setProperty(PropertyKey.ROTOR, new $ROTOR_PROPERTY(270, 220, 10, 5310));

	//#endregion

	//#region Fluid Pipes

	// Old Pipe we keep so we don't break worlds
	GTMaterials.RedSteel.setProperty(PropertyKey.FLUID_PIPE, new $FLUID_PIPE_PROPERTY(370, 75, true, false, true, false));
	GTMaterials.BlueSteel.setProperty(PropertyKey.FLUID_PIPE, new $FLUID_PIPE_PROPERTY(4618, 75, true, false, false, false));
	GTMaterials.get('ostrum').setProperty(PropertyKey.FLUID_PIPE, new $FLUID_PIPE_PROPERTY(3700, 150, true, false, true, false));
	GTMaterials.BlackBronze.setProperty(PropertyKey.FLUID_PIPE, new $FLUID_PIPE_PROPERTY(1696, 20, true, false, false, false));
	GTMaterials.BismuthBronze.setProperty(PropertyKey.FLUID_PIPE, new $FLUID_PIPE_PROPERTY(1696, 20, true, false, false, false));
	TFGHelpers.getMaterial('tungsten_bismuth_oxide_composite').setProperty(PropertyKey.FLUID_PIPE, new $FLUID_PIPE_PROPERTY(4250, 1700, true, false, false, false));

	// Balance Fluid Pipe Stats

	const BalanceFluidPipeMaterials = [
		GTMaterials.Wood,
		GTMaterials.Copper,
		GTMaterials.Bronze,
		GTMaterials.TinAlloy,
		GTMaterials.Gold,
		GTMaterials.Potin,
		GTMaterials.Steel,
		GTMaterials.Polyethylene,
		GTMaterials.StainlessSteel,
		GTMaterials.Aluminium,
		GTMaterials.Polytetrafluoroethylene,
		GTMaterials.Titanium,
		GTMaterials.TungstenSteel,
		GTMaterials.Polybenzimidazole,
		GTMaterials.NiobiumTitanium,
		GTMaterials.Naquadah,
		GTMaterials.Iridium,
		GTMaterials.Duranium
	];
	for (let mat of BalanceFluidPipeMaterials) {
		if (mat.hasProperty(PropertyKey.FLUID_PIPE)) {
			mat.removeProperty(PropertyKey.FLUID_PIPE);
		}
	};

		GTMaterials.Wood.setProperty(PropertyKey.FLUID_PIPE, 					new $FLUID_PIPE_PROPERTY(340, 	10, 	false, false, false, false));
		GTMaterials.Copper.setProperty(PropertyKey.FLUID_PIPE, 					new $FLUID_PIPE_PROPERTY(1696, 	12, 	true, false, false, false));
		GTMaterials.Bronze.setProperty(PropertyKey.FLUID_PIPE, 					new $FLUID_PIPE_PROPERTY(1696, 	40, 	true, false, false, false));
		GTMaterials.TinAlloy.setProperty(PropertyKey.FLUID_PIPE,				new $FLUID_PIPE_PROPERTY(1572, 	40, 	true, false, false, false));
		GTMaterials.Gold.setProperty(PropertyKey.FLUID_PIPE, 					new $FLUID_PIPE_PROPERTY(1671, 	50, 	true, true, false, false));
		GTMaterials.Potin.setProperty(PropertyKey.FLUID_PIPE, 					new $FLUID_PIPE_PROPERTY(1546, 	80, 	true, false, false, false));
		GTMaterials.Steel.setProperty(PropertyKey.FLUID_PIPE, 					new $FLUID_PIPE_PROPERTY(1855, 	100,	true, false, false, false));
		GTMaterials.Polyethylene.setProperty(PropertyKey.FLUID_PIPE, 			new $FLUID_PIPE_PROPERTY(370, 	120, 	true, false, false, false));
		GTMaterials.StainlessSteel.setProperty(PropertyKey.FLUID_PIPE, 			new $FLUID_PIPE_PROPERTY(2428, 	150,	true, true, true, false));
		GTMaterials.Aluminium.setProperty(PropertyKey.FLUID_PIPE, 				new $FLUID_PIPE_PROPERTY(1166, 	200,	true, false, false, false));
		GTMaterials.Polytetrafluoroethylene.setProperty(PropertyKey.FLUID_PIPE, new $FLUID_PIPE_PROPERTY(600, 	800, 	true, true, false, false));
		GTMaterials.Titanium.setProperty(PropertyKey.FLUID_PIPE, 				new $FLUID_PIPE_PROPERTY(3426, 	1200,	true, false, true, false));
		GTMaterials.TungstenSteel.setProperty(PropertyKey.FLUID_PIPE, 			new $FLUID_PIPE_PROPERTY(5137, 	1800,	true, false, true, false));
		GTMaterials.Polybenzimidazole.setProperty(PropertyKey.FLUID_PIPE, 		new $FLUID_PIPE_PROPERTY(1000, 	2800,	true, false, false, false));
		GTMaterials.NiobiumTitanium.setProperty(PropertyKey.FLUID_PIPE, 		new $FLUID_PIPE_PROPERTY(7300, 	1400,	true, true, false, false));
		GTMaterials.Naquadah.setProperty(PropertyKey.FLUID_PIPE, 				new $FLUID_PIPE_PROPERTY(3776, 	1600,	true, false, true, true));
		GTMaterials.Iridium.setProperty(PropertyKey.FLUID_PIPE, 				new $FLUID_PIPE_PROPERTY(3398, 	2000,	true, false, true, false));
		GTMaterials.Duranium.setProperty(PropertyKey.FLUID_PIPE, 				new $FLUID_PIPE_PROPERTY(9625, 	4000,	true, true, true, true));

}