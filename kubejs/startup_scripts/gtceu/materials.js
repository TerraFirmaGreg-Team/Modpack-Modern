// priority: 0

const registerGTCEuMaterials = (event) => {
    
}

const registerGTCEuMaterialModification = (event) => {
    const $TFC_METAL = Java.loadClass('net.dries007.tfc.util.Metal')
    const $TFC_ITEMS = Java.loadClass('net.dries007.tfc.common.items.TFCItems')

    const $TFG_PROPERTY_KEYS = Java.loadClass('su.terrafirmagreg.core.compat.gtceu.TFGPropertyKeys')
    const $TFC_PROPERTY = Java.loadClass('su.terrafirmagreg.core.compat.gtceu.properties.TFCProperty')
    
    const PigIron = GTCEuAPI.materialManager.getMaterial('tfg:pig_iron')
    const HighCarbonSteel = GTCEuAPI.materialManager.getMaterial('tfg:high_carbon_steel')
    const HighCarbonBlackSteel = GTCEuAPI.materialManager.getMaterial('tfg:high_carbon_black_steel')
    const HighCarbonRedSteel = GTCEuAPI.materialManager.getMaterial('tfg:high_carbon_red_steel')
    const HighCarbonBlueSteel = GTCEuAPI.materialManager.getMaterial('tfg:high_carbon_blue_steel')
    const WeakSteel = GTCEuAPI.materialManager.getMaterial('tfg:weak_steel')
    const WeakBlueSteel = GTCEuAPI.materialManager.getMaterial('tfg:weak_blue_steel')
    const WeakRedSteel = GTCEuAPI.materialManager.getMaterial('tfg:weak_red_steel')
    const Unknown = GTCEuAPI.materialManager.getMaterial('tfg:unknown')
    
    const Bismuthinite = GTCEuAPI.materialManager.getMaterial('tfg:bismuthinite')
    const Limonite = GTCEuAPI.materialManager.getMaterial('tfg:limonite')

    /* TFC Проперти для материалов */
    GTMaterials.Copper.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(648, 864, 1080, 1));
    GTMaterials.BismuthBronze.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(591, 788, 985, 2));
    GTMaterials.Bronze.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(570, 760, 950, 2));
    GTMaterials.BlackBronze.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(642, 856, 1070, 2));
    GTMaterials.WroughtIron.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3));
    GTMaterials.Steel.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 4));
    GTMaterials.BlackSteel.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(891, 1188, 1485, 5));
    GTMaterials.BlueSteel.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 6));
    GTMaterials.RedSteel.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 6));

    PigIron.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, 3));
    HighCarbonSteel.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 3));
    HighCarbonBlackSteel.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 5));
    HighCarbonRedSteel.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 5));
    HighCarbonBlueSteel.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 5));
    WeakSteel.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 4));
    WeakBlueSteel.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 5));
    WeakRedSteel.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 5));
    Unknown.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(240, 320, 400, 1));

    GTMaterials.Gold.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(636, 848, 1060, 1));
    GTMaterials.Bismuth.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(162, 216, 270, 1));
    GTMaterials.Brass.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(558, 744, 930, 2));
    GTMaterials.Nickel.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(872, 1162, 1453, 1));
    GTMaterials.RoseGold.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(576, 768, 960, 1));
    GTMaterials.Silver.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(577, 769, 961, 1));
    GTMaterials.Tin.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 230, 1));
    GTMaterials.Zinc.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(252, 336, 420, 1));
    GTMaterials.SterlingSilver.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(570, 760, 950, 1));
    GTMaterials.Iron.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, 3));

    GTMaterials.Hematite.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));
    GTMaterials.YellowLimonite.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));
    GTMaterials.Magnetite.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));
    GTMaterials.Pyrite.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));
    GTMaterials.Goethite.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 85));
    GTMaterials.Malachite.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1080, GTMaterials.Copper, 1, 90));
    GTMaterials.Tetrahedrite.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1080, GTMaterials.Copper, 1, 90));
    GTMaterials.Chalcopyrite.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1080, GTMaterials.Copper, 1, 90));
    GTMaterials.Cassiterite.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(648, 864, 230, GTMaterials.Tin, 1, 200));
    GTMaterials.CassiteriteSand.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 230, GTMaterials.Tin, 1, 150));
    GTMaterials.Sphalerite.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 420, GTMaterials.Zinc, 1, 90));
    GTMaterials.Garnierite.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1453, GTMaterials.Nickel, 1, 90));

    GTMaterials.Redstone.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(240, 320, 460, 1));
    GTMaterials.RedAlloy.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(570, 650, 740, 2));
    GTMaterials.TinAlloy.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(1000, 1100, 1250, 3));

    Bismuthinite.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(162, 216, 270, GTMaterials.Bismuth, 1));
    Limonite.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));

    /* Игнорирование для некоторых металлов */
    const list = [PigIron, HighCarbonSteel, HighCarbonBlackSteel, HighCarbonRedSteel, HighCarbonBlueSteel, WeakSteel, WeakBlueSteel, WeakRedSteel, Unknown]

    list.forEach(item => {
        TagPrefix.dustTiny.setIgnored(item);
        TagPrefix.dustSmall.setIgnored(item);
        TagPrefix.dust.setIgnored(item);
        TagPrefix.block.setIgnored(item);
    })

    TagPrefix.ingot.setIgnored(PigIron, () => $TFC_ITEMS.METAL_ITEMS.get($TFC_METAL.Default.PIG_IRON).get($TFC_METAL.ItemType.INGOT).get())
    TagPrefix.ingot.setIgnored(HighCarbonSteel, () => $TFC_ITEMS.METAL_ITEMS.get($TFC_METAL.Default.HIGH_CARBON_STEEL).get($TFC_METAL.ItemType.INGOT).get())
    TagPrefix.ingot.setIgnored(HighCarbonBlackSteel, () => $TFC_ITEMS.METAL_ITEMS.get($TFC_METAL.Default.HIGH_CARBON_BLACK_STEEL).get($TFC_METAL.ItemType.INGOT).get())
    TagPrefix.ingot.setIgnored(HighCarbonRedSteel, () => $TFC_ITEMS.METAL_ITEMS.get($TFC_METAL.Default.HIGH_CARBON_RED_STEEL).get($TFC_METAL.ItemType.INGOT).get())
    TagPrefix.ingot.setIgnored(HighCarbonBlueSteel, () => $TFC_ITEMS.METAL_ITEMS.get($TFC_METAL.Default.HIGH_CARBON_BLUE_STEEL).get(Me$TFC_METALtal.ItemType.INGOT).get())
    TagPrefix.ingot.setIgnored(WeakSteel, () => $TFC_ITEMS.METAL_ITEMS.get($TFC_METAL.Default.WEAK_STEEL).get($TFC_METAL.ItemType.INGOT).get())
    TagPrefix.ingot.setIgnored(WeakBlueSteel, () => $TFC_ITEMS.METAL_ITEMS.get($TFC_METAL.Default.WEAK_BLUE_STEEL).get($TFC_METAL.ItemType.INGOT).get())
    TagPrefix.ingot.setIgnored(WeakRedSteel, () => $TFC_ITEMS.METAL_ITEMS.get($TFC_METAL.Default.WEAK_RED_STEEL).get($TFC_METAL.ItemType.INGOT).get())
    TagPrefix.ingot.setIgnored(Unknown, () => $TFC_ITEMS.METAL_ITEMS.get($TFC_METAL.Default.UNKNOWN).get($TFC_METAL.ItemType.INGOT).get())

//        toolHeadPropick.setIgnored(Copper, () -> TFCItems.METAL_ITEMS.get(Metal.Default.COPPER).get(Metal.ItemType.PROPICK_HEAD).get());
//        toolHeadPropick.setIgnored(BismuthBronze, () ->S TFCItems.METAL_ITEMS.get(Metal.Default.BISMUTH_BRONZE).get(Metal.ItemType.PROPICK_HEAD).get());
//        toolHeadPropick.setIgnored(Bronze, () -> TFCItems.METAL_ITEMS.get(Metal.Default.BRONZE).get(Metal.ItemType.PROPICK_HEAD).get());
//        toolHeadPropick.setIgnored(BlackBronze, () -> TFCItems.METAL_ITEMS.get(Metal.Default.BLACK_BRONZE).get(Metal.ItemType.PROPICK_HEAD).get());
//        toolHeadPropick.setIgnored(WroughtIron, () -> TFCItems.METAL_ITEMS.get(Metal.Default.WROUGHT_IRON).get(Metal.ItemType.PROPICK_HEAD).get());
//        toolHeadPropick.setIgnored(Steel, () -> TFCItems.METAL_ITEMS.get(Metal.Default.STEEL).get(Metal.ItemType.PROPICK_HEAD).get());
//        toolHeadPropick.setIgnored(BlackSteel, () -> TFCItems.METAL_ITEMS.get(Metal.Default.BLACK_STEEL).get(Metal.ItemType.PROPICK_HEAD).get());
//        toolHeadPropick.setIgnored(RedSteel, () -> TFCItems.METAL_ITEMS.get(Metal.Default.RED_STEEL).get(Metal.ItemType.PROPICK_HEAD).get());
//        toolHeadPropick.setIgnored(BlueSteel, () -> TFCItems.METAL_ITEMS.get(Metal.Default.BLUE_STEEL).get(Metal.ItemType.PROPICK_HEAD).get());
//
//        toolHeadJavelin.setIgnored(Copper, () -> TFCItems.METAL_ITEMS.get(Metal.Default.COPPER).get(Metal.ItemType.JAVELIN_HEAD).get());
//        toolHeadJavelin.setIgnored(BismuthBronze, () -> TFCItems.METAL_ITEMS.get(Metal.Default.BISMUTH_BRONZE).get(Metal.ItemType.JAVELIN_HEAD).get());
//        toolHeadJavelin.setIgnored(Bronze, () -> TFCItems.METAL_ITEMS.get(Metal.Default.BRONZE).get(Metal.ItemType.JAVELIN_HEAD).get());
//        toolHeadJavelin.setIgnored(BlackBronze, () -> TFCItems.METAL_ITEMS.get(Metal.Default.BLACK_BRONZE).get(Metal.ItemType.JAVELIN_HEAD).get());
//        toolHeadJavelin.setIgnored(WroughtIron, () -> TFCItems.METAL_ITEMS.get(Metal.Default.WROUGHT_IRON).get(Metal.ItemType.JAVELIN_HEAD).get());
//        toolHeadJavelin.setIgnored(Steel, () -> TFCItems.METAL_ITEMS.get(Metal.Default.STEEL).get(Metal.ItemType.JAVELIN_HEAD).get());
//        toolHeadJavelin.setIgnored(BlackSteel, () -> TFCItems.METAL_ITEMS.get(Metal.Default.BLACK_STEEL).get(Metal.ItemType.JAVELIN_HEAD).get());
//        toolHeadJavelin.setIgnored(RedSteel, () -> TFCItems.METAL_ITEMS.get(Metal.Default.RED_STEEL).get(Metal.ItemType.JAVELIN_HEAD).get());
//        toolHeadJavelin.setIgnored(BlueSteel, () -> TFCItems.METAL_ITEMS.get(Metal.Default.BLUE_STEEL).get(Metal.ItemType.JAVELIN_HEAD).get());
//
//        toolHeadChisel.setIgnored(Copper, () -> TFCItems.METAL_ITEMS.get(Metal.Default.COPPER).get(Metal.ItemType.CHISEL_HEAD).get());
//        toolHeadChisel.setIgnored(BismuthBronze, () -> TFCItems.METAL_ITEMS.get(Metal.Default.BISMUTH_BRONZE).get(Metal.ItemType.CHISEL_HEAD).get());
//        toolHeadChisel.setIgnored(Bronze, () -> TFCItems.METAL_ITEMS.get(Metal.Default.BRONZE).get(Metal.ItemType.CHISEL_HEAD).get());
//        toolHeadChisel.setIgnored(BlackBronze, () -> TFCItems.METAL_ITEMS.get(Metal.Default.BLACK_BRONZE).get(Metal.ItemType.CHISEL_HEAD).get());
//        toolHeadChisel.setIgnored(WroughtIron, () -> TFCItems.METAL_ITEMS.get(Metal.Default.WROUGHT_IRON).get(Metal.ItemType.CHISEL_HEAD).get());
//        toolHeadChisel.setIgnored(Steel, () -> TFCItems.METAL_ITEMS.get(Metal.Default.STEEL).get(Metal.ItemType.CHISEL_HEAD).get());
//        toolHeadChisel.setIgnored(BlackSteel, () -> TFCItems.METAL_ITEMS.get(Metal.Default.BLACK_STEEL).get(Metal.ItemType.CHISEL_HEAD).get());
//        toolHeadChisel.setIgnored(RedSteel, () -> TFCItems.METAL_ITEMS.get(Metal.Default.RED_STEEL).get(Metal.ItemType.CHISEL_HEAD).get());
//        toolHeadChisel.setIgnored(BlueSteel, () -> TFCItems.METAL_ITEMS.get(Metal.Default.BLUE_STEEL).get(Metal.ItemType.CHISEL_HEAD).get());
//
//        toolHeadMace.setIgnored(Copper, () -> TFCItems.METAL_ITEMS.get(Metal.Default.COPPER).get(Metal.ItemType.MACE_HEAD).get());
//        toolHeadMace.setIgnored(BismuthBronze, () -> TFCItems.METAL_ITEMS.get(Metal.Default.BISMUTH_BRONZE).get(Metal.ItemType.MACE_HEAD).get());
//        toolHeadMace.setIgnored(Bronze, () -> TFCItems.METAL_ITEMS.get(Metal.Default.BRONZE).get(Metal.ItemType.MACE_HEAD).get());
//        toolHeadMace.setIgnored(BlackBronze, () -> TFCItems.METAL_ITEMS.get(Metal.Default.BLACK_BRONZE).get(Metal.ItemType.MACE_HEAD).get());
//        toolHeadMace.setIgnored(WroughtIron, () -> TFCItems.METAL_ITEMS.get(Metal.Default.WROUGHT_IRON).get(Metal.ItemType.MACE_HEAD).get());
//        toolHeadMace.setIgnored(Steel, () -> TFCItems.METAL_ITEMS.get(Metal.Default.STEEL).get(Metal.ItemType.MACE_HEAD).get());
//        toolHeadMace.setIgnored(BlackSteel, () -> TFCItems.METAL_ITEMS.get(Metal.Default.BLACK_STEEL).get(Metal.ItemType.MACE_HEAD).get());
//        toolHeadMace.setIgnored(RedSteel, () -> TFCItems.METAL_ITEMS.get(Metal.Default.RED_STEEL).get(Metal.ItemType.MACE_HEAD).get());
//        toolHeadMace.setIgnored(BlueSteel, () -> TFCItems.METAL_ITEMS.get(Metal.Default.BLUE_STEEL).get(Metal.ItemType.MACE_HEAD).get());
//
//        anvil.setIgnored(Copper, () -> TFCBlocks.METALS.get(Metal.Default.COPPER).get(Metal.BlockType.ANVIL).get());
//        anvil.setIgnored(BismuthBronze, () -> TFCBlocks.METALS.get(Metal.Default.BISMUTH_BRONZE).get(Metal.BlockType.ANVIL).get());
//        anvil.setIgnored(Bronze, () -> TFCBlocks.METALS.get(Metal.Default.BRONZE).get(Metal.BlockType.ANVIL).get());
//        anvil.setIgnored(BlackBronze, () -> TFCBlocks.METALS.get(Metal.Default.BLACK_BRONZE).get(Metal.BlockType.ANVIL).get());
//        anvil.setIgnored(WroughtIron, () -> TFCBlocks.METALS.get(Metal.Default.WROUGHT_IRON).get(Metal.BlockType.ANVIL).get());
//        anvil.setIgnored(Steel, () -> TFCBlocks.METALS.get(Metal.Default.STEEL).get(Metal.BlockType.ANVIL).get());
//        anvil.setIgnored(BlackSteel, () -> TFCBlocks.METALS.get(Metal.Default.BLACK_STEEL).get(Metal.BlockType.ANVIL).get());
//        anvil.setIgnored(RedSteel, () -> TFCBlocks.METALS.get(Metal.Default.RED_STEEL).get(Metal.BlockType.ANVIL).get());
//        anvil.setIgnored(BlueSteel, () -> TFCBlocks.METALS.get(Metal.Default.BLUE_STEEL).get(Metal.BlockType.ANVIL).get());
//
//        lamp.setIgnored(Copper, () -> TFCBlocks.METALS.get(Metal.Default.COPPER).get(Metal.BlockType.LAMP).get());
//        lamp.setIgnored(BismuthBronze, () -> TFCBlocks.METALS.get(Metal.Default.BISMUTH_BRONZE).get(Metal.BlockType.LAMP).get());
//        lamp.setIgnored(Bronze, () -> TFCBlocks.METALS.get(Metal.Default.BRONZE).get(Metal.BlockType.LAMP).get());
//        lamp.setIgnored(BlackBronze, () -> TFCBlocks.METALS.get(Metal.Default.BLACK_BRONZE).get(Metal.BlockType.LAMP).get());
//        lamp.setIgnored(WroughtIron, () -> TFCBlocks.METALS.get(Metal.Default.WROUGHT_IRON).get(Metal.BlockType.LAMP).get());
//        lamp.setIgnored(Steel, () -> TFCBlocks.METALS.get(Metal.Default.STEEL).get(Metal.BlockType.LAMP).get());
//        lamp.setIgnored(BlackSteel, () -> TFCBlocks.METALS.get(Metal.Default.BLACK_STEEL).get(Metal.BlockType.LAMP).get());
//        lamp.setIgnored(RedSteel, () -> TFCBlocks.METALS.get(Metal.Default.RED_STEEL).get(Metal.BlockType.LAMP).get());
//        lamp.setIgnored(BlueSteel, () -> TFCBlocks.METALS.get(Metal.Default.BLUE_STEEL).get(Metal.BlockType.LAMP).get());
//
//        lampUnfinished.setIgnored(Copper, () -> TFCItems.METAL_ITEMS.get(Metal.Default.COPPER).get(Metal.ItemType.UNFINISHED_LAMP).get());
//        lampUnfinished.setIgnored(BismuthBronze, () -> TFCItems.METAL_ITEMS.get(Metal.Default.BISMUTH_BRONZE).get(Metal.ItemType.UNFINISHED_LAMP).get());
//        lampUnfinished.setIgnored(Bronze, () -> TFCItems.METAL_ITEMS.get(Metal.Default.BRONZE).get(Metal.ItemType.UNFINISHED_LAMP).get());
//        lampUnfinished.setIgnored(BlackBronze, () -> TFCItems.METAL_ITEMS.get(Metal.Default.BLACK_BRONZE).get(Metal.ItemType.UNFINISHED_LAMP).get());
//        lampUnfinished.setIgnored(WroughtIron, () -> TFCItems.METAL_ITEMS.get(Metal.Default.WROUGHT_IRON).get(Metal.ItemType.UNFINISHED_LAMP).get());
//        lampUnfinished.setIgnored(Steel, () -> TFCItems.METAL_ITEMS.get(Metal.Default.STEEL).get(Metal.ItemType.UNFINISHED_LAMP).get());
//        lampUnfinished.setIgnored(BlackSteel, () -> TFCItems.METAL_ITEMS.get(Metal.Default.BLACK_STEEL).get(Metal.ItemType.UNFINISHED_LAMP).get());
//        lampUnfinished.setIgnored(RedSteel, () -> TFCItems.METAL_ITEMS.get(Metal.Default.RED_STEEL).get(Metal.ItemType.UNFINISHED_LAMP).get());
//        lampUnfinished.setIgnored(BlueSteel, () -> TFCItems.METAL_ITEMS.get(Metal.Default.BLUE_STEEL).get(Metal.ItemType.UNFINISHED_LAMP).get());
//
//        trapdoor.setIgnored(Copper, () -> TFCBlocks.METALS.get(Metal.Default.COPPER).get(Metal.BlockType.TRAPDOOR).get());
//        trapdoor.setIgnored(BismuthBronze, () -> TFCBlocks.METALS.get(Metal.Default.BISMUTH_BRONZE).get(Metal.BlockType.TRAPDOOR).get());
//        trapdoor.setIgnored(Bronze, () -> TFCBlocks.METALS.get(Metal.Default.BRONZE).get(Metal.BlockType.TRAPDOOR).get());
//        trapdoor.setIgnored(BlackBronze, () -> TFCBlocks.METALS.get(Metal.Default.BLACK_BRONZE).get(Metal.BlockType.TRAPDOOR).get());
//        trapdoor.setIgnored(WroughtIron, () -> TFCBlocks.METALS.get(Metal.Default.WROUGHT_IRON).get(Metal.BlockType.TRAPDOOR).get());
//        trapdoor.setIgnored(Steel, () -> TFCBlocks.METALS.get(Metal.Default.STEEL).get(Metal.BlockType.TRAPDOOR).get());
//        trapdoor.setIgnored(BlackSteel, () -> TFCBlocks.METALS.get(Metal.Default.BLACK_STEEL).get(Metal.BlockType.TRAPDOOR).get());
//        trapdoor.setIgnored(RedSteel, () -> TFCBlocks.METALS.get(Metal.Default.RED_STEEL).get(Metal.BlockType.TRAPDOOR).get());
//        trapdoor.setIgnored(BlueSteel, () -> TFCBlocks.METALS.get(Metal.Default.BLUE_STEEL).get(Metal.BlockType.TRAPDOOR).get());
//
//        chain.setIgnored(Copper, () -> TFCBlocks.METALS.get(Metal.Default.COPPER).get(Metal.BlockType.CHAIN).get());
//        chain.setIgnored(BismuthBronze, () -> TFCBlocks.METALS.get(Metal.Default.BISMUTH_BRONZE).get(Metal.BlockType.CHAIN).get());
//        chain.setIgnored(Bronze, () -> TFCBlocks.METALS.get(Metal.Default.BRONZE).get(Metal.BlockType.CHAIN).get());
//        chain.setIgnored(BlackBronze, () -> TFCBlocks.METALS.get(Metal.Default.BLACK_BRONZE).get(Metal.BlockType.CHAIN).get());
//        chain.setIgnored(WroughtIron, () -> TFCBlocks.METALS.get(Metal.Default.WROUGHT_IRON).get(Metal.BlockType.CHAIN).get());
//        chain.setIgnored(Steel, () -> TFCBlocks.METALS.get(Metal.Default.STEEL).get(Metal.BlockType.CHAIN).get());
//        chain.setIgnored(BlackSteel, () -> TFCBlocks.METALS.get(Metal.Default.BLACK_STEEL).get(Metal.BlockType.CHAIN).get());
//        chain.setIgnored(RedSteel, () -> TFCBlocks.METALS.get(Metal.Default.RED_STEEL).get(Metal.BlockType.CHAIN).get());
//        chain.setIgnored(BlueSteel, () -> TFCBlocks.METALS.get(Metal.Default.BLUE_STEEL).get(Metal.BlockType.CHAIN).get());
//
//        bars.setIgnored(Copper, () -> TFCBlocks.METALS.get(Metal.Default.COPPER).get(Metal.BlockType.BARS).get());
//        bars.setIgnored(BismuthBronze, () -> TFCBlocks.METALS.get(Metal.Default.BISMUTH_BRONZE).get(Metal.BlockType.BARS).get());
//        bars.setIgnored(Bronze, () -> TFCBlocks.METALS.get(Metal.Default.BRONZE).get(Metal.BlockType.BARS).get());
//        bars.setIgnored(BlackBronze, () -> TFCBlocks.METALS.get(Metal.Default.BLACK_BRONZE).get(Metal.BlockType.BARS).get());
//        bars.setIgnored(WroughtIron, () -> TFCBlocks.METALS.get(Metal.Default.WROUGHT_IRON).get(Metal.BlockType.BARS).get());
//        bars.setIgnored(Steel, () -> TFCBlocks.METALS.get(Metal.Default.STEEL).get(Metal.BlockType.BARS).get());
//        bars.setIgnored(BlackSteel, () -> TFCBlocks.METALS.get(Metal.Default.BLACK_STEEL).get(Metal.BlockType.BARS).get());
//        bars.setIgnored(RedSteel, () -> TFCBlocks.METALS.get(Metal.Default.RED_STEEL).get(Metal.BlockType.BARS).get());
//        bars.setIgnored(BlueSteel, () -> TFCBlocks.METALS.get(Metal.Default.BLUE_STEEL).get(Metal.BlockType.BARS).get());
//
//        bell.setIgnored(Gold, Blocks.BELL);
//        bell.setIgnored(Brass, TFCBlocks.BRASS_BELL);
//        bell.setIgnored(Bronze, TFCBlocks.BRONZE_BELL);
//
//        blockPlated.setIgnored(Copper, () -> TFCBlocks.METALS.get(Metal.Default.COPPER).get(Metal.BlockType.BLOCK).get());
//        blockPlated.setIgnored(BismuthBronze, () -> TFCBlocks.METALS.get(Metal.Default.BISMUTH_BRONZE).get(Metal.BlockType.BLOCK).get());
//        blockPlated.setIgnored(Bronze, () -> TFCBlocks.METALS.get(Metal.Default.BRONZE).get(Metal.BlockType.BLOCK).get());
//        blockPlated.setIgnored(BlackBronze, () -> TFCBlocks.METALS.get(Metal.Default.BLACK_BRONZE).get(Metal.BlockType.BLOCK).get());
//        blockPlated.setIgnored(WroughtIron, () -> TFCBlocks.METALS.get(Metal.Default.WROUGHT_IRON).get(Metal.BlockType.BLOCK).get());
//        blockPlated.setIgnored(Steel, () -> TFCBlocks.METALS.get(Metal.Default.STEEL).get(Metal.BlockType.BLOCK).get());
//        blockPlated.setIgnored(BlackSteel, () -> TFCBlocks.METALS.get(Metal.Default.BLACK_STEEL).get(Metal.BlockType.BLOCK).get());
//        blockPlated.setIgnored(RedSteel, () -> TFCBlocks.METALS.get(Metal.Default.RED_STEEL).get(Metal.BlockType.BLOCK).get());
//        blockPlated.setIgnored(BlueSteel, () -> TFCBlocks.METALS.get(Metal.Default.BLUE_STEEL).get(Metal.BlockType.BLOCK).get());
//        blockPlated.setIgnored(Brass, () -> TFCBlocks.METALS.get(Metal.Default.BRASS).get(Metal.BlockType.BLOCK).get());
//        blockPlated.setIgnored(Gold, () -> TFCBlocks.METALS.get(Metal.Default.GOLD).get(Metal.BlockType.BLOCK).get());
//        blockPlated.setIgnored(Nickel, () -> TFCBlocks.METALS.get(Metal.Default.NICKEL).get(Metal.BlockType.BLOCK).get());
//        blockPlated.setIgnored(RoseGold, () -> TFCBlocks.METALS.get(Metal.Default.ROSE_GOLD).get(Metal.BlockType.BLOCK).get());
//        blockPlated.setIgnored(Silver, () -> TFCBlocks.METALS.get(Metal.Default.SILVER).get(Metal.BlockType.BLOCK).get());
//        blockPlated.setIgnored(Tin, () -> TFCBlocks.METALS.get(Metal.Default.TIN).get(Metal.BlockType.BLOCK).get());
//        stairPlated.setIgnored(SterlingSilver, () -> TFCBlocks.METALS.get(Metal.Default.STERLING_SILVER).get(Metal.BlockType.BLOCK).get());
//        blockPlated.setIgnored(Bismuth, () -> TFCBlocks.METALS.get(Metal.Default.BISMUTH).get(Metal.BlockType.BLOCK).get());
//        blockPlated.setIgnored(Zinc, () -> TFCBlocks.METALS.get(Metal.Default.ZINC).get(Metal.BlockType.BLOCK).get());
//
//        stairPlated.setIgnored(Copper, () -> TFCBlocks.METALS.get(Metal.Default.COPPER).get(Metal.BlockType.BLOCK_STAIRS).get());
//        stairPlated.setIgnored(BismuthBronze, () -> TFCBlocks.METALS.get(Metal.Default.BISMUTH_BRONZE).get(Metal.BlockType.BLOCK_STAIRS).get());
//        stairPlated.setIgnored(Bronze, () -> TFCBlocks.METALS.get(Metal.Default.BRONZE).get(Metal.BlockType.BLOCK_STAIRS).get());
//        stairPlated.setIgnored(BlackBronze, () -> TFCBlocks.METALS.get(Metal.Default.BLACK_BRONZE).get(Metal.BlockType.BLOCK_STAIRS).get());
//        stairPlated.setIgnored(WroughtIron, () -> TFCBlocks.METALS.get(Metal.Default.WROUGHT_IRON).get(Metal.BlockType.BLOCK_STAIRS).get());
//        stairPlated.setIgnored(Steel, () -> TFCBlocks.METALS.get(Metal.Default.STEEL).get(Metal.BlockType.BLOCK_STAIRS).get());
//        stairPlated.setIgnored(BlackSteel, () -> TFCBlocks.METALS.get(Metal.Default.BLACK_STEEL).get(Metal.BlockType.BLOCK_STAIRS).get());
//        stairPlated.setIgnored(RedSteel, () -> TFCBlocks.METALS.get(Metal.Default.RED_STEEL).get(Metal.BlockType.BLOCK_STAIRS).get());
//        stairPlated.setIgnored(BlueSteel, () -> TFCBlocks.METALS.get(Metal.Default.BLUE_STEEL).get(Metal.BlockType.BLOCK_STAIRS).get());
//        stairPlated.setIgnored(Brass, () -> TFCBlocks.METALS.get(Metal.Default.BRASS).get(Metal.BlockType.BLOCK_STAIRS).get());
//        stairPlated.setIgnored(Gold, () -> TFCBlocks.METALS.get(Metal.Default.GOLD).get(Metal.BlockType.BLOCK_STAIRS).get());
//        stairPlated.setIgnored(Nickel, () -> TFCBlocks.METALS.get(Metal.Default.NICKEL).get(Metal.BlockType.BLOCK_STAIRS).get());
//        stairPlated.setIgnored(RoseGold, () -> TFCBlocks.METALS.get(Metal.Default.ROSE_GOLD).get(Metal.BlockType.BLOCK_STAIRS).get());
//        stairPlated.setIgnored(Silver, () -> TFCBlocks.METALS.get(Metal.Default.SILVER).get(Metal.BlockType.BLOCK_STAIRS).get());
//        stairPlated.setIgnored(Tin, () -> TFCBlocks.METALS.get(Metal.Default.TIN).get(Metal.BlockType.BLOCK_STAIRS).get());
//        stairPlated.setIgnored(SterlingSilver, () -> TFCBlocks.METALS.get(Metal.Default.STERLING_SILVER).get(Metal.BlockType.BLOCK_STAIRS).get());
//        stairPlated.setIgnored(Bismuth, () -> TFCBlocks.METALS.get(Metal.Default.BISMUTH).get(Metal.BlockType.BLOCK_STAIRS).get());
//        stairPlated.setIgnored(Zinc, () -> TFCBlocks.METALS.get(Metal.Default.ZINC).get(Metal.BlockType.BLOCK_STAIRS).get());
//
//        slabPlated.setIgnored(Copper, () -> TFCBlocks.METALS.get(Metal.Default.COPPER).get(Metal.BlockType.BLOCK_SLAB).get());
//        slabPlated.setIgnored(BismuthBronze, () -> TFCBlocks.METALS.get(Metal.Default.BISMUTH_BRONZE).get(Metal.BlockType.BLOCK_SLAB).get());
//        slabPlated.setIgnored(Bronze, () -> TFCBlocks.METALS.get(Metal.Default.BRONZE).get(Metal.BlockType.BLOCK_SLAB).get());
//        slabPlated.setIgnored(BlackBronze, () -> TFCBlocks.METALS.get(Metal.Default.BLACK_BRONZE).get(Metal.BlockType.BLOCK_SLAB).get());
//        slabPlated.setIgnored(WroughtIron, () -> TFCBlocks.METALS.get(Metal.Default.WROUGHT_IRON).get(Metal.BlockType.BLOCK_SLAB).get());
//        slabPlated.setIgnored(Steel, () -> TFCBlocks.METALS.get(Metal.Default.STEEL).get(Metal.BlockType.BLOCK_SLAB).get());
//        slabPlated.setIgnored(BlackSteel, () -> TFCBlocks.METALS.get(Metal.Default.BLACK_STEEL).get(Metal.BlockType.BLOCK_SLAB).get());
//        slabPlated.setIgnored(RedSteel, () -> TFCBlocks.METALS.get(Metal.Default.RED_STEEL).get(Metal.BlockType.BLOCK_SLAB).get());
//        slabPlated.setIgnored(BlueSteel, () -> TFCBlocks.METALS.get(Metal.Default.BLUE_STEEL).get(Metal.BlockType.BLOCK_SLAB).get());
//        slabPlated.setIgnored(Brass, () -> TFCBlocks.METALS.get(Metal.Default.BRASS).get(Metal.BlockType.BLOCK_SLAB).get());
//        slabPlated.setIgnored(Gold, () -> TFCBlocks.METALS.get(Metal.Default.GOLD).get(Metal.BlockType.BLOCK_SLAB).get());
//        slabPlated.setIgnored(Nickel, () -> TFCBlocks.METALS.get(Metal.Default.NICKEL).get(Metal.BlockType.BLOCK_SLAB).get());
//        slabPlated.setIgnored(RoseGold, () -> TFCBlocks.METALS.get(Metal.Default.ROSE_GOLD).get(Metal.BlockType.BLOCK_SLAB).get());
//        slabPlated.setIgnored(Silver, () -> TFCBlocks.METALS.get(Metal.Default.SILVER).get(Metal.BlockType.BLOCK_SLAB).get());
//        slabPlated.setIgnored(Tin, () -> TFCBlocks.METALS.get(Metal.Default.TIN).get(Metal.BlockType.BLOCK_SLAB).get());
//        slabPlated.setIgnored(SterlingSilver, () -> TFCBlocks.METALS.get(Metal.Default.STERLING_SILVER).get(Metal.BlockType.BLOCK_SLAB).get());
//        slabPlated.setIgnored(Bismuth, () -> TFCBlocks.METALS.get(Metal.Default.BISMUTH).get(Metal.BlockType.BLOCK_SLAB).get());
//        slabPlated.setIgnored(Zinc, () -> TFCBlocks.METALS.get(Metal.Default.ZINC).get(Metal.BlockType.BLOCK_SLAB).get());
//
//        oreSmall.setIgnored(Bismuthinite, () -> TFCBlocks.SMALL_ORES.get(Ore.BISMUTHINITE).get());
//        oreSmall.setIgnored(Cassiterite, () -> TFCBlocks.SMALL_ORES.get(Ore.CASSITERITE).get());
//        oreSmall.setIgnored(Garnierite, () -> TFCBlocks.SMALL_ORES.get(Ore.GARNIERITE).get());
//        oreSmall.setIgnored(Hematite, () -> TFCBlocks.SMALL_ORES.get(Ore.HEMATITE).get());
//        oreSmall.setIgnored(Limonite, () -> TFCBlocks.SMALL_ORES.get(Ore.LIMONITE).get());
//        oreSmall.setIgnored(Magnetite, () -> TFCBlocks.SMALL_ORES.get(Ore.MAGNETITE).get());
//        oreSmall.setIgnored(Malachite, () -> TFCBlocks.SMALL_ORES.get(Ore.MALACHITE).get());
//        oreSmall.setIgnored(Sphalerite, () -> TFCBlocks.SMALL_ORES.get(Ore.SPHALERITE).get());
//        oreSmall.setIgnored(Tetrahedrite, () -> TFCBlocks.SMALL_ORES.get(Ore.TETRAHEDRITE).get());
//
//        oreSmallNative.setIgnored(Copper, () -> TFCBlocks.SMALL_ORES.get(Ore.NATIVE_COPPER).get());
//        oreSmallNative.setIgnored(Gold, () -> TFCBlocks.SMALL_ORES.get(Ore.NATIVE_GOLD).get());
//        oreSmallNative.setIgnored(Silver, () -> TFCBlocks.SMALL_ORES.get(Ore.NATIVE_SILVER).get());
//
//        /* Имеют колоколы */
//        Gold.addFlags(GENERATE_BELL);
//        Brass.addFlags(GENERATE_BELL);
//        Bronze.addFlags(GENERATE_BELL);
//
//        /* Имеют двойные слитки */
//        Gold.addFlags(GENERATE_DOUBLE_INGOTS);
//        Bismuth.addFlags(GENERATE_DOUBLE_INGOTS);
//        Brass.addFlags(GENERATE_DOUBLE_INGOTS);
//        Nickel.addFlags(GENERATE_DOUBLE_INGOTS);
//        RoseGold.addFlags(GENERATE_DOUBLE_INGOTS);
//        Silver.addFlags(GENERATE_DOUBLE_INGOTS);
//        Tin.addFlags(GENERATE_DOUBLE_INGOTS);
//        Zinc.addFlags(GENERATE_DOUBLE_INGOTS);
//        SterlingSilver.addFlags(GENERATE_DOUBLE_INGOTS);
//
//        /* Имеют инструменты, броню TFC, двойные слитки */
//        Copper.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY, CAN_BE_UNMOLDED);
//        BismuthBronze.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY, CAN_BE_UNMOLDED);
//        Bronze.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY, CAN_BE_UNMOLDED);
//        BlackBronze.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY, CAN_BE_UNMOLDED);
//        WroughtIron.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
//        Steel.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
//        BlackSteel.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
//        RedSteel.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
//        BlueSteel.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
//
//        /* Имеют маленькие куски руды TFC */
//        Bismuthinite.addFlags(HAS_SMALL_TFC_ORE);
//        Cassiterite.addFlags(HAS_SMALL_TFC_ORE);
//        Garnierite.addFlags(HAS_SMALL_TFC_ORE);
//        Hematite.addFlags(HAS_SMALL_TFC_ORE);
//        Limonite.addFlags(HAS_SMALL_TFC_ORE);
//        Magnetite.addFlags(HAS_SMALL_TFC_ORE);
//        Malachite.addFlags(HAS_SMALL_TFC_ORE);
//        Sphalerite.addFlags(HAS_SMALL_TFC_ORE);
//        Tetrahedrite.addFlags(HAS_SMALL_TFC_ORE);
//
//        /* Имеют маленькие чистые куски руды TFC */
//        Copper.addFlags(HAS_SMALL_NATIVE_TFC_ORE);
//        Gold.addFlags(HAS_SMALL_NATIVE_TFC_ORE);
//        Silver.addFlags(HAS_SMALL_NATIVE_TFC_ORE);
//
//        /* Имеют двойные слитки */
//        RedAlloy.addFlags(GENERATE_DOUBLE_INGOTS);
//        TinAlloy.addFlags(GENERATE_DOUBLE_INGOTS);
//
//        /* Другое */
//        Bismuth.setProperty(PropertyKey.ORE, new OreProperty());
//        Bismuth.addFlags(EXT2_METAL.toArray(new MaterialFlag[0]));
//
//        Borax.setProperty(PropertyKey.ORE, new OreProperty());
//
//        CertusQuartz.addFlags(GENERATE_ROD);
//        NetherQuartz.addFlags(GENERATE_ROD);
//
//        Nickel.addFlags(GENERATE_ROD, GENERATE_LONG_ROD);
//        BlackSteel.addFlags(GENERATE_LONG_ROD, GENERATE_BOLT_SCREW);
//        BlueSteel.addFlags(GENERATE_LONG_ROD, GENERATE_BOLT_SCREW);
//        RedSteel.addFlags(GENERATE_LONG_ROD, GENERATE_BOLT_SCREW);
//        WroughtIron.addFlags(GENERATE_ROTOR, GENERATE_SPRING, GENERATE_SMALL_GEAR);
//
//        Copper.addFlags(GENERATE_BOLT_SCREW, GENERATE_FRAME);
//        DamascusSteel.addFlags(GENERATE_BOLT_SCREW);
//        Duranium.addFlags(GENERATE_BOLT_SCREW);
//
//        Stone.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(1.2F, 1.0F, 8, 1, new GTToolType[]{
//                GTToolType.AXE,
//                GTToolType.HARD_HAMMER,
//                GTToolType.HOE,
//                GTToolType.KNIFE,
//                GTToolType.SHOVEL
//        }).build());
//        Copper.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.0F, 1.5F, 132, 2).build());
//        BismuthBronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.5F, 2.0F, 178, 2).build());
//        BlackBronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(3.3F, 2.0F, 204, 2).build());
//        BlackSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(6.5F, 4.5F, 1228, 3).build());
//
//        for (var material : GTCEuAPI.materialManager.getRegisteredMaterials()) {
//            var toolProperty = material.getProperty(PropertyKey.TOOL);
//            if (toolProperty == null) continue;
//
//            toolProperty.setDurability(toolProperty.getDurability() * 6);
//        }
//
//        /* AE 2 */
//        if (TFGModsResolver.AE2.isLoaded()) {
//            block.setIgnored(Fluix, () -> AEBlocks.FLUIX_BLOCK);
//            dust.setIgnored(Fluix, () -> AEItems.FLUIX_DUST);
//            gem.setIgnored(Fluix, () -> AEItems.FLUIX_CRYSTAL);
//
//            block.setIgnored(CertusQuartz, () -> AEBlocks.QUARTZ_BLOCK);
//            dust.setIgnored(CertusQuartz, () -> AEItems.CERTUS_QUARTZ_DUST);
//            gem.setIgnored(CertusQuartz, () -> AEItems.CERTUS_QUARTZ_CRYSTAL);
//
//            dust.setIgnored(EnderPearl, () -> AEItems.ENDER_DUST);
//
//            block.modifyMaterialAmount(TFGMaterials.Fluix, 4);
//        }
//    }
}