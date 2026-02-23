// priority: 0
"use strict";

function registerTFCMaterialModification(event) {
	
	const $TFC_PROPERTY = Java.loadClass('su.terrafirmagreg.core.compat.gtceu.properties.TFCProperty')

	
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
	GTMaterials.get('tfg:weak_blue_steel').setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 6));
	GTMaterials.get('tfg:weak_red_steel').setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 6));

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
	GTMaterials.Limonite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));
	GTMaterials.Magnetite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));
	GTMaterials.Pyrite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));
	GTMaterials.Goethite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));
	GTMaterials.BasalticMineralSand.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 80));
	GTMaterials.GraniticMineralSand.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 80));
	GTMaterials.VanadiumMagnetite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 80));
	
	GTMaterials.Malachite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1080, GTMaterials.Copper, 1, 90));
	GTMaterials.Tetrahedrite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1080, GTMaterials.Copper, 1, 90));
	GTMaterials.Chalcopyrite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1080, GTMaterials.Copper, 1, 85));
	GTMaterials.Chalcocite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1080, GTMaterials.Copper, 1, 95));
	GTMaterials.Bornite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1080, GTMaterials.Copper, 1, 90));

	GTMaterials.Cassiterite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(648, 864, 230, GTMaterials.Tin, 1, 100));
	GTMaterials.CassiteriteSand.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 230, GTMaterials.Tin, 1, 80));
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
	GTMaterials.Mica.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1540, 1540, 1540, AlSi, 1, 40))
	GTMaterials.Spodumene.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1540, 1540, 1540, AlSi, 1, 30))
	GTMaterials.Pollucite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1540, 1540, 1540, AlSi, 1, 25))

}