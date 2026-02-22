// priority: 0
"use strict";

function registerTFGFlagsMaterialModification(event) {
	const $MATERIAL_FLAGS = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlags')

	const {
		HAS_TFC_TOOL, // used to generate new TFC items like javelins
		HAS_GT_TOOL, // does not generate items, just TFC recipes for GT tools
		HAS_TFC_ARMOR, 
		HAS_TFC_UTILITY,
		CAN_BE_UNMOLDED,
		GENERATE_DOUBLE_INGOTS,
		HAS_SMALL_TFC_ORE,
		GENERATE_DUSTY_ORES,
	} = TFGMaterialFlags

	const {
		GENERATE_ROD,
		GENERATE_LONG_ROD,
		GENERATE_BOLT_SCREW,
		GENERATE_ROTOR,
		GENERATE_SPRING,
		GENERATE_SMALL_GEAR,
		GENERATE_GEAR,
		GENERATE_FRAME,
		GENERATE_PLATE,
		GENERATE_DENSE,
		GENERATE_RING,
		GENERATE_FOIL,
		GENERATE_FINE_WIRE,
		NO_ORE_PROCESSING_TAB,
		NO_ORE_SMELTING,
		DISABLE_DECOMPOSITION
	} = $MATERIAL_FLAGS

	const metalTooling = [
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
		GTToolType.SCREWDRIVER_HV,
		GTToolType.SCREWDRIVER_IV,
		GTToolType.CHAINSAW_LV,
		GTToolType.CHAINSAW_HV,
		GTToolType.CHAINSAW_IV,
		GTToolType.WRENCH,
		GTToolType.WRENCH_LV,
		GTToolType.WRENCH_HV,
		GTToolType.WRENCH_IV,
		GTToolType.CROWBAR,
	]

	GTMaterials.Clay.addFlags(DISABLE_DECOMPOSITION);
	GTMaterials.Brick.addFlags(DISABLE_DECOMPOSITION);

	
	// Generate Dusty Ores for Infinite Ores
	GTMaterials.Goethite.addFlags(GENERATE_DUSTY_ORES);
	GTMaterials.Diamond.addFlags(GENERATE_DUSTY_ORES);
	GTMaterials.CertusQuartz.addFlags(GENERATE_DUSTY_ORES);
	GTMaterials.Gold.addFlags(GENERATE_DUSTY_ORES);
	GTMaterials.Cassiterite.addFlags(GENERATE_DUSTY_ORES);
	GTMaterials.Pitchblende.addFlags(GENERATE_DUSTY_ORES);
	GTMaterials.Silver.addFlags(GENERATE_DUSTY_ORES);
	GTMaterials.TricalciumPhosphate.addFlags(GENERATE_DUSTY_ORES);
	GTMaterials.Bauxite.addFlags(GENERATE_DUSTY_ORES);
	GTMaterials.Lead.addFlags(GENERATE_DUSTY_ORES);
	GTMaterials.Beryllium.addFlags(GENERATE_DUSTY_ORES);
	GTMaterials.Thorium.addFlags(GENERATE_DUSTY_ORES);
	GTMaterials.Uraninite.addFlags(GENERATE_DUSTY_ORES);
	GTMaterials.Hematite.addFlags(GENERATE_DUSTY_ORES);

	// Castable stuff 
	GTMaterials.Copper.addFlags(CAN_BE_UNMOLDED);
	GTMaterials.BismuthBronze.addFlags(CAN_BE_UNMOLDED);
	GTMaterials.BlackBronze.addFlags(CAN_BE_UNMOLDED);
	GTMaterials.Bronze.addFlags(CAN_BE_UNMOLDED);
	GTMaterials.Tin.addFlags(CAN_BE_UNMOLDED);
	GTMaterials.Bismuth.addFlags(CAN_BE_UNMOLDED);
	GTMaterials.Zinc.addFlags(CAN_BE_UNMOLDED);
	GTMaterials.SterlingSilver.addFlags(CAN_BE_UNMOLDED);
	GTMaterials.RoseGold.addFlags(CAN_BE_UNMOLDED);
	GTMaterials.Silver.addFlags(CAN_BE_UNMOLDED);
	GTMaterials.Gold.addFlags(CAN_BE_UNMOLDED);
	GTMaterials.Nickel.addFlags(CAN_BE_UNMOLDED);
	GTMaterials.Brass.addFlags(CAN_BE_UNMOLDED);
	GTMaterials.RedAlloy.addFlags(CAN_BE_UNMOLDED);
	GTMaterials.Lead.addFlags(CAN_BE_UNMOLDED);
	GTMaterials.Potin.addFlags(CAN_BE_UNMOLDED);
	GTMaterials.Iron.addFlags(CAN_BE_UNMOLDED);

	// TFC tool tiers
	GTMaterials.Copper.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	GTMaterials.BismuthBronze.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	GTMaterials.Bronze.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	GTMaterials.BlackBronze.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	GTMaterials.WroughtIron.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	GTMaterials.Steel.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	GTMaterials.BlackSteel.addFlags(GENERATE_DOUBLE_INGOTS, GENERATE_ROTOR, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	GTMaterials.RedSteel.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	GTMaterials.BlueSteel.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);

	// TFC ores
	GTMaterials.Bismuth.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Cassiterite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Garnierite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Hematite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Limonite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Magnetite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Malachite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Sphalerite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Tetrahedrite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Chromite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Copper.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Gold.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Silver.addFlags(HAS_SMALL_TFC_ORE);

	// Other materials that are compatible with TFC
	GTMaterials.Iron.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_UTILITY);
	GTMaterials.Gold.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_UTILITY);
	GTMaterials.Bismuth.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_UTILITY);
	GTMaterials.Brass.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_UTILITY);
	GTMaterials.Nickel.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_UTILITY);
	GTMaterials.RoseGold.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_UTILITY);
	GTMaterials.Silver.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_UTILITY);
	GTMaterials.Tin.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_UTILITY);
	GTMaterials.Zinc.addFlags(GENERATE_DOUBLE_INGOTS, GENERATE_BOLT_SCREW, HAS_TFC_UTILITY);
	GTMaterials.SterlingSilver.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_UTILITY);

	GTMaterials.RedAlloy.addFlags(GENERATE_DOUBLE_INGOTS, GENERATE_SMALL_GEAR);
	GTMaterials.TinAlloy.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Lead.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Invar.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Potin.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Cobalt.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.CobaltBrass.addFlags(GENERATE_DOUBLE_INGOTS);

	// Superconductors
	GTMaterials.ManganesePhosphide.addFlags(GENERATE_FINE_WIRE);
	GTMaterials.MagnesiumDiboride.addFlags(GENERATE_FINE_WIRE);
	GTMaterials.MercuryBariumCalciumCuprate.addFlags(GENERATE_FINE_WIRE);
	GTMaterials.UraniumTriplatinum.addFlags(GENERATE_FINE_WIRE);
	GTMaterials.SamariumIronArsenicOxide.addFlags(GENERATE_FINE_WIRE);
	//GTMaterials.IndiumTinBariumTitaniumCuprate.addFlags();
	//GTMaterials.UraniumRhodiumDinaquadide.addFlags();
	//GTMaterials.EnrichedNaquadahTriniumEuropiumDuranide.addFlags();
	GTMaterials.RutheniumTriniumAmericiumNeutronate.addFlags(GENERATE_FINE_WIRE);

	
	// Other flags
	GTMaterials.CertusQuartz.addFlags(GENERATE_ROD);
	GTMaterials.NetherQuartz.addFlags(GENERATE_ROD);	

	GTMaterials.Copper.addFlags(GENERATE_FRAME);
	GTMaterials.BlackBronze.addFlags(GENERATE_FRAME);
	GTMaterials.BismuthBronze.addFlags(GENERATE_FRAME);
	GTMaterials.RhodiumPlatedPalladium.addFlags(GENERATE_FRAME);

	GTMaterials.Wood.addFlags(GENERATE_SMALL_GEAR);
	GTMaterials.Brass.addFlags(GENERATE_SMALL_GEAR, GENERATE_RING);
	GTMaterials.BlackBronze.addFlags(GENERATE_SMALL_GEAR, GENERATE_RING);
	GTMaterials.BismuthBronze.addFlags(GENERATE_SMALL_GEAR, GENERATE_RING);
	
	GTMaterials.Nickel.addFlags(GENERATE_ROD, GENERATE_LONG_ROD);
	GTMaterials.Zinc.addFlags(GENERATE_LONG_ROD);
	GTMaterials.Bismuth.addFlags(GENERATE_LONG_ROD);
	GTMaterials.BlackSteel.addFlags(GENERATE_LONG_ROD, GENERATE_BOLT_SCREW);
	GTMaterials.BlueSteel.addFlags(GENERATE_LONG_ROD, GENERATE_BOLT_SCREW, GENERATE_SPRING, GENERATE_SMALL_GEAR, GENERATE_FOIL);
	GTMaterials.RedSteel.addFlags(GENERATE_LONG_ROD, GENERATE_BOLT_SCREW, GENERATE_FOIL);
	GTMaterials.WroughtIron.addFlags(GENERATE_ROTOR, GENERATE_SPRING, GENERATE_SMALL_GEAR);
	
	GTMaterials.Copper.addFlags(GENERATE_BOLT_SCREW);
	GTMaterials.Duranium.addFlags(GENERATE_BOLT_SCREW);

	GTMaterials.Magnalium.addFlags(GENERATE_GEAR);

	GTMaterials.Cupronickel.addFlags(GENERATE_BOLT_SCREW, GENERATE_RING);

	GTMaterials.BlackBronze.addFlags(GENERATE_ROTOR)
	GTMaterials.BismuthBronze.addFlags(GENERATE_ROTOR)
	GTMaterials.Ultimet.addFlags(GENERATE_ROTOR)
	GTMaterials.CobaltBrass.addFlags(GENERATE_ROTOR)
	GTMaterials.Magnalium.addFlags(GENERATE_ROTOR)
	GTMaterials.VanadiumSteel.addFlags(GENERATE_ROTOR)
	
	GTMaterials.HSLASteel.addFlags(GENERATE_BOLT_SCREW, GENERATE_DENSE)
	
	GTMaterials.Invar.addFlags(GENERATE_RING);
	GTMaterials.Magnalium.addFlags(GENERATE_RING);
	GTMaterials.TinAlloy.addFlags(GENERATE_RING);
	GTMaterials.SterlingSilver.addFlags(GENERATE_RING);

	GTMaterials.Bismuth.addFlags(GENERATE_PLATE, GENERATE_ROD, GENERATE_BOLT_SCREW);
	GTMaterials.IronMagnetic.addFlags(GENERATE_PLATE);
	GTMaterials.Zirconium.addFlags(GENERATE_FINE_WIRE, GENERATE_PLATE, GENERATE_DENSE, NO_ORE_SMELTING);

	GTMaterials.Silicon.addFlags(GENERATE_DENSE);
	GTMaterials.RTMAlloy.addFlags(GENERATE_DENSE, GENERATE_SPRING);
	GTMaterials.Lead.addFlags(GENERATE_DENSE);

	GTMaterials.Beryllium.addFlags(GENERATE_DENSE);
	GTMaterials.MaragingSteel300.addFlags(GENERATE_DENSE);

	GTMaterials.Quartzite.addFlags(GENERATE_ROD);
	
	GTMaterials.TreatedWood.addFlags(GENERATE_LONG_ROD);

	GTMaterials.Cadmium.addFlags(GENERATE_PLATE);

	// Hide ore processing tab for plutonium
	GTMaterials.Plutonium239.addFlags(GENERATE_ROD, GENERATE_LONG_ROD, NO_ORE_PROCESSING_TAB, NO_ORE_SMELTING)
	GTMaterials.Thorium.addFlags(NO_ORE_SMELTING)
}