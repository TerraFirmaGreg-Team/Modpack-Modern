// priority: 0
"use strict";

const registerGTCEuMaterialModification = (event) => {

	//const TFGPropertyKey = Java.loadClass('su.terrafirmagreg.core.compat.gtceu.TFGPropertyKeys')
	const $TFC_PROPERTY = Java.loadClass('su.terrafirmagreg.core.compat.gtceu.properties.TFCProperty')
	const $ORE_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')
	const $INGOT_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty')
	const $DUST_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
	const $BLAST_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty')
	const $ITEM_PIPE_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ItemPipeProperties')
	const $FLUID_PIPE_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties')
	const $HAZARD_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.HazardProperty')

	const $MATERIAL_FLAGS = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlags')

	const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys')

	const $GreateMaterials = Java.loadClass("electrolyte.greate.registry.GreateMaterials")

	const {
		HAS_TFC_TOOL, // used to generate new TFC items like javelins
		HAS_GT_TOOL, // does not generate items, just TFC recipes for GT tools
		HAS_TFC_ARMOR, 
		HAS_TFC_UTILITY,
		CAN_BE_UNMOLDED,
		GENERATE_BELL,
		GENERATE_DOUBLE_INGOTS,
		HAS_SMALL_TFC_ORE,
		HAS_SMALL_NATIVE_TFC_ORE,
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
		NO_ORE_SMELTING
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
		GTToolType.CHAINSAW_LV,
		GTToolType.WRENCH,
		GTToolType.WRENCH_LV,
		GTToolType.WRENCH_HV,
		GTToolType.WRENCH_IV,
		GTToolType.CROWBAR,
	]

	/* TFC Проперти для материалов */

	// TFC_PROPERTY = (forging temp, welding temp, melt temp, material, tier, percent of material)
	// OR			= (forging temp, welding temp, melt temp, tier)
	// 
	// If registering a new material that you want to melt into a liquid in a vessel etc,
	// make sure you add it to registerGTCEUMetals()!

	GTMaterials.Copper.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(648, 864, 1080, 1));
	GTMaterials.BismuthBronze.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(591, 788, 985, 2));
	GTMaterials.Bronze.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(570, 760, 950, 2));
	GTMaterials.BlackBronze.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(642, 856, 1070, 2));
	GTMaterials.WroughtIron.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3));
	GTMaterials.Steel.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 4));
	GTMaterials.BlackSteel.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(891, 1188, 1485, 5));
	GTMaterials.BlueSteel.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 6));
	GTMaterials.RedSteel.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 6));

	GTMaterials.Gold.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(636, 848, 1060, 1));
	GTMaterials.Bismuth.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(162, 216, 270, 1));
	GTMaterials.Brass.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(558, 744, 930, 2));
	GTMaterials.Nickel.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(872, 1162, 1453, 1));
	GTMaterials.RoseGold.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(576, 768, 960, 1));
	GTMaterials.Silver.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(577, 769, 961, 1));
	GTMaterials.Tin.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 230, 1));
	GTMaterials.Zinc.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(252, 336, 420, 1));
	GTMaterials.SterlingSilver.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(570, 760, 950, 1));
	GTMaterials.Iron.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3));

	GTMaterials.Hematite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));
	GTMaterials.YellowLimonite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));
	GTMaterials.Magnetite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));
	GTMaterials.Pyrite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));
	GTMaterials.Goethite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));
	GTMaterials.BasalticMineralSand.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));
	GTMaterials.GraniticMineralSand.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));
	
	GTMaterials.Malachite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1080, GTMaterials.Copper, 1, 90));
	GTMaterials.Tetrahedrite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1080, GTMaterials.Copper, 1, 90));
	GTMaterials.Chalcopyrite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1080, GTMaterials.Copper, 1, 85));
	GTMaterials.Chalcocite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1080, GTMaterials.Copper, 1, 95));
	GTMaterials.Bornite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1080, GTMaterials.Copper, 1, 90));

	GTMaterials.Cassiterite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(648, 864, 230, GTMaterials.Tin, 1, 100));
	GTMaterials.CassiteriteSand.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 230, GTMaterials.Tin, 1, 85));
	GTMaterials.Sphalerite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 420, GTMaterials.Zinc, 1, 90));
	GTMaterials.Garnierite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1453, GTMaterials.Nickel, 1, 100));
	GTMaterials.Pentlandite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1453, GTMaterials.Nickel, 1, 85));
	
	GTMaterials.Redstone.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(240, 320, 460, 1));
	GTMaterials.RedAlloy.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(570, 650, 740, 2));
	GTMaterials.TinAlloy.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1000, 1100, 1250, 3));
	GTMaterials.Lead.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(330 * 0.6, 330 * 0.8, 330, 2));
	GTMaterials.Galena.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(330 * 0.6, 330 * 0.8, 330, GTMaterials.Lead, 2, 85));
	GTMaterials.Invar.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1494 * 0.6, 1494 * 0.8, 1494, 3));
	GTMaterials.Potin.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(807 * 0.6, 807 * 0.8, 807, 2));
	GTMaterials.Cobalt.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1495 * 0.6, 1495 * 0.8, 1495, 3));
	GTMaterials.Cobaltite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1495 * 0.6, 1495 * 0.8, 1495, GTMaterials.Cobalt, 3, 85));
	GTMaterials.CobaltBrass.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1060 * 0.6, 1060 * 0.8, 1060, 3));
	let AlSi = GTMaterials.get('aluminium_silicate')
	AlSi.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1540, 1540, 1540, 1))
	GTMaterials.Kyanite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1540, 1540, 1540, AlSi, 1, 95))
	GTMaterials.Mica.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1540, 1540, 1540, AlSi, 1, 90))
	GTMaterials.Spodumene.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1540, 1540, 1540, AlSi, 1, 85))
	GTMaterials.Pollucite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1540, 1540, 1540, AlSi, 1, 85))


	GTMaterials.Gold.addFlags(GENERATE_BELL);
	GTMaterials.Brass.addFlags(GENERATE_BELL);
	GTMaterials.Bronze.addFlags(GENERATE_BELL);

	//
	//
	//        /* Имеют двойные слитки */
	GTMaterials.Iron.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Gold.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Bismuth.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Brass.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Nickel.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.RoseGold.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Silver.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Tin.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Zinc.addFlags(GENERATE_DOUBLE_INGOTS, GENERATE_BOLT_SCREW);
	GTMaterials.SterlingSilver.addFlags(GENERATE_DOUBLE_INGOTS);

	//#region Generate Dusty Ores for Infinite Ores

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

	//#endregion
	//
	//		  /* Castable stuff */
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
	//
	//        /* Имеют инструменты, броню TFC, двойные слитки */
	GTMaterials.Copper.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	GTMaterials.BismuthBronze.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	GTMaterials.Bronze.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	GTMaterials.BlackBronze.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	GTMaterials.WroughtIron.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	GTMaterials.Steel.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	GTMaterials.BlackSteel.addFlags(GENERATE_DOUBLE_INGOTS, GENERATE_ROTOR, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	GTMaterials.RedSteel.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	GTMaterials.BlueSteel.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	//
	//        /* Имеют маленькие куски руды TFC */
	GTMaterials.Bismuth.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Cassiterite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Garnierite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Hematite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.YellowLimonite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Magnetite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Malachite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Sphalerite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Tetrahedrite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Chromite.addFlags(HAS_SMALL_TFC_ORE);
	//
	//        /* Имеют маленькие чистые куски руды TFC */
	GTMaterials.Copper.addFlags(HAS_SMALL_NATIVE_TFC_ORE);
	GTMaterials.Gold.addFlags(HAS_SMALL_NATIVE_TFC_ORE);
	GTMaterials.Silver.addFlags(HAS_SMALL_NATIVE_TFC_ORE);
	//
	//        /* Имеют двойные слитки */
	GTMaterials.RedAlloy.addFlags(GENERATE_DOUBLE_INGOTS, GENERATE_SMALL_GEAR);
	GTMaterials.TinAlloy.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Lead.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Invar.addFlags(GENERATE_DOUBLE_INGOTS, HAS_GT_TOOL);
	GTMaterials.Potin.addFlags(GENERATE_DOUBLE_INGOTS, );
	GTMaterials.Cobalt.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.CobaltBrass.addFlags(GENERATE_DOUBLE_INGOTS, HAS_GT_TOOL);
	//
	//		  /* Superconductors */
	GTMaterials.ManganesePhosphide.addFlags(GENERATE_FINE_WIRE);
	GTMaterials.MagnesiumDiboride.addFlags(GENERATE_FINE_WIRE);
	GTMaterials.MercuryBariumCalciumCuprate.addFlags(GENERATE_FINE_WIRE);
	GTMaterials.UraniumTriplatinum.addFlags(GENERATE_FINE_WIRE);
	GTMaterials.SamariumIronArsenicOxide.addFlags(GENERATE_FINE_WIRE);
	//GTMaterials.IndiumTinBariumTitaniumCuprate.addFlags();
	//GTMaterials.UraniumRhodiumDinaquadide.addFlags();
	//GTMaterials.EnrichedNaquadahTriniumEuropiumDuranide.addFlags();
	GTMaterials.RutheniumTriniumAmericiumNeutronate.addFlags(GENERATE_FINE_WIRE);
	//
	//        /* Другое (Other) */

	// TODO: Exception needs to check the wizardry
	GTMaterials.Bismuth.setProperty(PropertyKey.ORE, new $ORE_PROPERTY());
	GTMaterials.EXT2_METAL.forEach(tag => GTMaterials.Bismuth.addFlags(tag))

	GTMaterials.Borax.setProperty(PropertyKey.ORE, new $ORE_PROPERTY());
	
	GTMaterials.CertusQuartz.addFlags(GENERATE_ROD);
	GTMaterials.NetherQuartz.addFlags(GENERATE_ROD);

	GTMaterials.Copper.addFlags(GENERATE_FRAME);
	GTMaterials.BlackBronze.addFlags(GENERATE_FRAME);
	GTMaterials.BismuthBronze.addFlags(GENERATE_FRAME);
	GTMaterials.RhodiumPlatedPalladium.addFlags(GENERATE_FRAME);

	GTMaterials.Wood.addFlags(GENERATE_SMALL_GEAR);
	GTMaterials.Brass.addFlags(GENERATE_SMALL_GEAR, GENERATE_RING);
	GTMaterials.BlackBronze.addFlags(GENERATE_SMALL_GEAR);
	GTMaterials.BismuthBronze.addFlags(GENERATE_SMALL_GEAR);
	
	GTMaterials.Nickel.addFlags(GENERATE_ROD, GENERATE_LONG_ROD);
	GTMaterials.Zinc.addFlags(GENERATE_LONG_ROD);
	GTMaterials.BlackSteel.addFlags(GENERATE_LONG_ROD, GENERATE_BOLT_SCREW);
	GTMaterials.BlueSteel.addFlags(GENERATE_LONG_ROD, GENERATE_BOLT_SCREW);
	GTMaterials.RedSteel.addFlags(GENERATE_LONG_ROD, GENERATE_BOLT_SCREW, GENERATE_FOIL);
	GTMaterials.WroughtIron.addFlags(GENERATE_ROTOR, GENERATE_SPRING, GENERATE_SMALL_GEAR);
	
	GTMaterials.Copper.addFlags(GENERATE_BOLT_SCREW);
	GTMaterials.DamascusSteel.addFlags(GENERATE_BOLT_SCREW);
	GTMaterials.Duranium.addFlags(GENERATE_BOLT_SCREW);

	GTMaterials.Magnalium.addFlags(GENERATE_GEAR);

	GTMaterials.Cupronickel.addFlags(GENERATE_BOLT_SCREW, GENERATE_RING);

	GTMaterials.Ultimet.addFlags(GENERATE_ROTOR)
	
	GTMaterials.HSLASteel.addFlags(GENERATE_BOLT_SCREW, GENERATE_DENSE)
	
	GTMaterials.Invar.addFlags(GENERATE_RING);
	GTMaterials.Magnalium.addFlags(GENERATE_RING);
	GTMaterials.TinAlloy.addFlags(GENERATE_RING);
	GTMaterials.SterlingSilver.addFlags(GENERATE_RING);

	GTMaterials.IronMagnetic.addFlags(GENERATE_PLATE)

	GTMaterials.Silicon.addFlags(GENERATE_DENSE);
	GTMaterials.RTMAlloy.addFlags(GENERATE_DENSE, GENERATE_SPRING);
	GTMaterials.Lead.addFlags(GENERATE_DENSE);

	GTMaterials.Quartzite.addFlags(GENERATE_ROD);
	
	GTMaterials.TreatedWood.addFlags(GENERATE_LONG_ROD);

	// Hide ore processing tab for plutonium
	GTMaterials.Plutonium239.addFlags(GENERATE_ROD, NO_ORE_PROCESSING_TAB, NO_ORE_SMELTING)
	GTMaterials.Thorium.addFlags(NO_ORE_SMELTING)

	// Unhiding elements
	GTMaterials.Zirconium.setProperty(PropertyKey.DUST, new $DUST_PROPERTY());
	GTMaterials.Zirconium.setProperty(PropertyKey.INGOT, new $INGOT_PROPERTY());
	GTMaterials.Zirconium.setProperty(PropertyKey.BLAST, new $BLAST_PROPERTY(4200, 'mid', GTValues.VA[GTValues.EV], 1300, GTValues.VA[GTValues.HV], 14.7*20));
	GTMaterials.Zirconium.addFlags(GENERATE_FINE_WIRE, GENERATE_PLATE, NO_ORE_SMELTING);

	// Tools
	GTMaterials.Stone.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(1.2, 1.0, 8, 1, [
		GTToolType.AXE,
		GTToolType.HARD_HAMMER,
		GTToolType.HOE,
		GTToolType.KNIFE,
		GTToolType.SHOVEL
	]).build());

	GTMaterials.Copper.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.0, 1.5, 132, 2, metalTooling).build());
	GTMaterials.BismuthBronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.7, 2.0, 188, 2, metalTooling.concat(GTToolType.MORTAR)).build());
	GTMaterials.BlackBronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(3.1, 2.0, 194, 2, metalTooling.concat(GTToolType.MORTAR)).build());
	GTMaterials.BlackSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(6.5, 4.5, 1228, 3, metalTooling).build());
	// Cast iron tools don't make sense but gregtech shits itself if they're missing,
	// so I'm just giving them terrible terrible stats
	GTMaterials.Iron.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.5, 1.0, 20, 2, [GTToolType.PICKAXE]).build());
	// Hide netherite too
	GTMaterials.Netherite.getProperty(PropertyKey.TOOL).removeTypes(metalTooling);

	for (let material of GTCEuAPI.materialManager.getRegisteredMaterials()) {
		let toolProperty = material.getProperty(PropertyKey.TOOL);
		if (toolProperty === null)
			continue;

		toolProperty.setDurability(toolProperty.getDurability() * 6);
	}

	// Bismuth item pipe - 1/4 as good as tin
	GTMaterials.Bismuth.setProperty(PropertyKey.ITEM_PIPE, new $ITEM_PIPE_PROPERTY(16384, 0.125));
	// Bis bronze fluid pipe - same stats as bronze
	GTMaterials.BismuthBronze.getProperties().removeProperty(PropertyKey.BLAST);
	GTMaterials.BismuthBronze.setProperty(PropertyKey.FLUID_PIPE, new $FLUID_PIPE_PROPERTY(1696, 20, true, false, false, false));
	GTMaterials.BlackBronze.getProperties().removeProperty(PropertyKey.BLAST);
	GTMaterials.BlackBronze.getProperties().removeProperty(PropertyKey.ITEM_PIPE);
	GTMaterials.BlackBronze.setProperty(PropertyKey.FLUID_PIPE, new $FLUID_PIPE_PROPERTY(1696, 20, true, false, false, false));
	// Red steel fluid pipe - same flow rate as aluminium, bad heat tolerance (same as PE) but can do cryo
	GTMaterials.RedSteel.setProperty(PropertyKey.FLUID_PIPE, new $FLUID_PIPE_PROPERTY(370, 75, true, false, true, false));
	// Blue steel fluid pipe - same flow rate as aluminium, same temp tolerance as tungsten
	GTMaterials.BlueSteel.setProperty(PropertyKey.FLUID_PIPE, new $FLUID_PIPE_PROPERTY(4618, 75, true, false, false, false));
	// Ostrum fluid pipe - same flow rate as titanium, higher temp range
	GTMaterials.get('ostrum').setProperty(PropertyKey.FLUID_PIPE, new $FLUID_PIPE_PROPERTY(3700, 150, true, false, true, false));

	// int is how fast the condition progresses (default 1.0)
	// bool is whether or not the condition applies to anything made with the material, other than dusts (default false) 
	GTMaterials.Realgar.setProperty(PropertyKey.HAZARD, new $HAZARD_PROPERTY($HAZARD_PROPERTY.HazardTrigger.INHALATION, GTMedicalConditions.ARSENICOSIS, 1, false));
	GTMaterials.Cobaltite.setProperty(PropertyKey.HAZARD, new $HAZARD_PROPERTY($HAZARD_PROPERTY.HazardTrigger.INHALATION, GTMedicalConditions.ARSENICOSIS, 1, false));
	GTMaterials.Galena.setProperty(PropertyKey.HAZARD, new $HAZARD_PROPERTY($HAZARD_PROPERTY.HazardTrigger.INHALATION, GTMedicalConditions.WEAK_POISON, 1, false));
	GTMaterials.Chromite.setProperty(PropertyKey.HAZARD, new $HAZARD_PROPERTY($HAZARD_PROPERTY.HazardTrigger.SKIN_CONTACT, GTMedicalConditions.IRRITANT, 1, false));
	GTMaterials.Thorium.setProperty(PropertyKey.HAZARD, new $HAZARD_PROPERTY($HAZARD_PROPERTY.HazardTrigger.ANY, GTMedicalConditions.CARCINOGEN, 1, true));

	// This contains hazardous elements so GT tags it as hazardous automatically
	GTMaterials.get('ostrum').getProperties().removeProperty(PropertyKey.HAZARD);
	GTMaterials.get('ostrum_iodide').getProperties().removeProperty(PropertyKey.HAZARD);
	// Superconductors being radioactive at EV is a little evil
	GTMaterials.UraniumTriplatinum.getProperties().removeProperty(PropertyKey.HAZARD);

	// Make these the lowest tier of EBF instead
	GTMaterials.BlackSteel.getProperty(PropertyKey.BLAST).setBlastTemperature(1000)
	GTMaterials.RedSteel.getProperty(PropertyKey.BLAST).setBlastTemperature(1000)
	GTMaterials.BlueSteel.getProperty(PropertyKey.BLAST).setBlastTemperature(1000)

	// Change byproducts so you can't get certus from normal quartzite
	GTMaterials.Quartzite.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.NetherQuartz, GTMaterials.Barite, GTMaterials.NetherQuartz);
	GTMaterials.CertusQuartz.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.CertusQuartz, GTMaterials.Quartzite, GTMaterials.CertusQuartz);

	// Change Beryllium to add Chemical Bath recipe and Thorium byproduct
	GTMaterials.Beryllium.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.Emerald, GTMaterials.Emerald, GTMaterials.Thorium, GTMaterials.Thorium);
	GTMaterials.Beryllium.getProperty(PropertyKey.ORE).setWashedIn(GTMaterials.SodiumPersulfate);

	// Color Adjustments
	GTMaterials.BismuthBronze.setMaterialARGB(0x5A966E)
	GTMaterials.BismuthBronze.setMaterialSecondaryARGB(0x203E2A)
	GTMaterials.BlackBronze.setMaterialARGB(0x9D789D)
	GTMaterials.BlackBronze.setMaterialSecondaryARGB(0x5B425B)
	GTMaterials.Steel.setMaterialARGB(0x9AA9AB)
	GTMaterials.SteelMagnetic.setMaterialARGB(0x9AA9AB)
	GTMaterials.RedSteel.setMaterialARGB(0xDE7B80)
	GTMaterials.RedSteel.setMaterialSecondaryARGB(0xE12323)
	GTMaterials.BlueSteel.setMaterialARGB(0xA0B6EC)
	GTMaterials.BlueSteel.setMaterialSecondaryARGB(0x2B5CD8)
	
	GTMaterials.Bismuth.setMaterialARGB(0x66847E)
	GTMaterials.Bismuth.setMaterialSecondaryARGB(0x25465B)
	GTMaterials.Iron.setMaterialARGB(0x503d32)
	GTMaterials.Iron.setMaterialSecondaryARGB(0x131212)
	GTMaterials.IronMagnetic.setMaterialARGB(0x503d32)
	GTMaterials.IronMagnetic.setMaterialSecondaryARGB(0x131212)
	GTMaterials.Zinc.setMaterialARGB(0xd6ffdc)
	GTMaterials.Zinc.setMaterialSecondaryARGB(0xA3BE9E)
	GTMaterials.Graphite.setMaterialARGB(0x889BA8)
	GTMaterials.Graphite.setMaterialSecondaryARGB(0x30383E)
	GTMaterials.Amethyst.setMaterialARGB(0xCC9EF0)
	GTMaterials.Amethyst.setMaterialSecondaryARGB(0x6F4AB3)
	GTMaterials.Cobalt.setMaterialARGB(0xC9E4FB)
	GTMaterials.Cobalt.setMaterialSecondaryARGB(0x1D2688)
	GTMaterials.CertusQuartz.setMaterialARGB(0xB8D8FC)
	GTMaterials.CertusQuartz.setMaterialSecondaryARGB(0xADCCEF)
	GTMaterials.Vanadium.setMaterialARGB(0xD8D4E7)
	GTMaterials.Vanadium.setMaterialSecondaryARGB(0x7E988F)
	GTMaterials.Brass.setMaterialSecondaryARGB(0x791905)
	GTMaterials.Aluminium.setMaterialARGB(0xb6e5ff)
	GTMaterials.Aluminium.setMaterialSecondaryARGB(0x7ca29b)
	GTMaterials.Titanium.setMaterialARGB(0xe8b1fa)
	GTMaterials.Titanium.setMaterialSecondaryARGB(0xd8d5d9)
	GTMaterials.TungstenSteel.setMaterialARGB(0xadb8df)
	GTMaterials.TungstenSteel.setMaterialSecondaryARGB(0x03192f)
	GTMaterials.RoseGold.setMaterialARGB(0xFCE4D8)
	GTMaterials.RoseGold.setMaterialSecondaryARGB(0xAB675A)
	GTMaterials.Platinum.setMaterialARGB(0xccdff5)
	GTMaterials.Platinum.setMaterialSecondaryARGB(0x59563a)
	GTMaterials.Nickel.setMaterialARGB(0xfff4ba)
	GTMaterials.Nickel.setMaterialSecondaryARGB(0x8d8d71)
	GTMaterials.Thorium.setMaterialARGB(0xc898a0)
	GTMaterials.Thorium.setMaterialSecondaryARGB(0xad6d9c)
	GTMaterials.GraniteRed.setMaterialARGB(0x974B3C)
	GTMaterials.GraniteRed.setMaterialSecondaryARGB(0x632117)
	GTMaterials.RhodiumPlatedPalladium.setMaterialARGB(0xFFC2EC)
	GTMaterials.Rhenium.setMaterialARGB(0x8cb07f)
	GTMaterials.Rhenium.setMaterialSecondaryARGB(0x9ccbd6)

	
	global.MINECRAFT_DYE_NAMES.forEach(colorName => {
		let material = GTMaterials.get(`gtceu:${colorName}_dye`);
		let property = material.getProperty(PropertyKey.FLUID);
		property.getStorage().store($FluidStorageKeys.LIQUID, () => Fluid.of(`tfc:${colorName}_dye`).fluid, null);
	});


	let rose_quartz = $GreateMaterials.RoseQuartz;
	rose_quartz.setProperty(PropertyKey.ORE, new $ORE_PROPERTY());
	rose_quartz.getProperty(PropertyKey.ORE).setOreByProducts(rose_quartz, GTMaterials.Redstone, rose_quartz);
	rose_quartz.setMaterialIconSet(GTMaterialIconSet.getByName('nether_quartz'))

	let zirconium_diboride = TFGHelpers.getMaterial('zirconium_diboride');
	zirconium_diboride.setProperty(PropertyKey.BLAST, new $BLAST_PROPERTY(4500, "high", GTValues.VA[GTValues.EV], 2700, GTValues.VA[GTValues.HV], 12.5*20));
	
	GTMaterials.CertusQuartz.setComponents('1x unknown', '1x silicon', '2x oxygen')
	GTMaterials.GraniteRed.setComponents([])
	GTMaterials.GraniteRed.setFormula("?")
}