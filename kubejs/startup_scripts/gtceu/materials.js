const registerGTCEuMaterials = (event) => {
}

const registerGTCEuMaterialModification = (event) => {
    const $TFC_METAL = Java.loadClass('net.dries007.tfc.util.Metal')
    const $TFC_ITEMS = Java.loadClass('net.dries007.tfc.common.items.TFCItems')
    const $TFC_BLOCKS = Java.loadClass('net.dries007.tfc.common.blocks.TFCBlocks')

    const $TFG_PROPERTY_KEYS = Java.loadClass('su.terrafirmagreg.core.compat.gtceu.TFGPropertyKeys')
    const $TFC_PROPERTY = Java.loadClass('su.terrafirmagreg.core.compat.gtceu.properties.TFCProperty')
    const $ORE_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')

    const $MATERIAL_FLAGS = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlags')


    const KJSTagPrefix = Java.loadClass('com.gregtechceu.gtceu.integration.kjs.built.KJSTagPrefix')

    const {
        HAS_TFC_TOOL,
        HAS_TFC_ARMOR,
        HAS_TFC_UTILITY,
        HAS_PLATED_BLOCK,
        CAN_BE_UNMOLDED,
        GENERATE_BELL,
        GENERATE_DOUBLE_INGOTS,
        GENERATE_FIRMALIFE_GREENHOUSE_BLOCKS,
        HAS_SMALL_TFC_ORE,
        HAS_SMALL_NATIVE_TFC_ORE
    } = TFGMaterialFlags

    const {
        GENERATE_ROD,
        GENERATE_LONG_ROD,
        GENERATE_BOLT_SCREW,
        GENERATE_ROTOR,
        GENERATE_SPRING,
        GENERATE_SMALL_GEAR,
        GENERATE_FRAME
    } = $MATERIAL_FLAGS

    var metalTooling = [
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
        GTToolType.DRILL_LV,
        GTToolType.SCREWDRIVER_LV,
        GTToolType.CHAINSAW_LV,
        GTToolType.WRENCH_LV,
    ]

    const TFGMetalMaterial = {
        "PIG_IRON" : GTCEuAPI.materialManager.getMaterial('tfg:pig_iron'),
        "HIGH_CARBON_STEEL" : GTCEuAPI.materialManager.getMaterial('tfg:high_carbon_steel'),
        "HIGH_CARBON_BLACK_STEEL" : GTCEuAPI.materialManager.getMaterial('tfg:high_carbon_black_steel'),
        "HIGH_CARBON_RED_STEEL" : GTCEuAPI.materialManager.getMaterial('tfg:high_carbon_red_steel'),
        "HIGH_CARBON_BLUE_STEEL" : GTCEuAPI.materialManager.getMaterial('tfg:high_carbon_blue_steel'),
        "WEAK_STEEL" : GTCEuAPI.materialManager.getMaterial('tfg:weak_steel'),
        "WEAK_BLUE_STEEL" : GTCEuAPI.materialManager.getMaterial('tfg:weak_blue_steel'),
        "WEAK_RED_STEEL" : GTCEuAPI.materialManager.getMaterial('tfg:weak_red_steel'),
        "UNKNOWN" : GTCEuAPI.materialManager.getMaterial('tfg:unknown')
    }

    
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

    TFGMetalMaterial.PIG_IRON.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, 3));
    TFGMetalMaterial.HIGH_CARBON_STEEL.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 3));
    TFGMetalMaterial.HIGH_CARBON_BLACK_STEEL.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 5));
    TFGMetalMaterial.HIGH_CARBON_RED_STEEL.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 5));
    TFGMetalMaterial.HIGH_CARBON_BLUE_STEEL.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 5));
    TFGMetalMaterial.WEAK_STEEL.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 4));
    TFGMetalMaterial.WEAK_BLUE_STEEL.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 5));
    TFGMetalMaterial.WEAK_RED_STEEL.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 5));
    TFGMetalMaterial.UNKNOWN.setProperty($TFG_PROPERTY_KEYS.TFC_PROPERTY, new $TFC_PROPERTY(240, 320, 400, 1));
    
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
    const list = Object.values(TFGMetalMaterial)

    list.forEach(item => {
        TagPrefix.dustTiny.setIgnored(item);
        TagPrefix.dustSmall.setIgnored(item);
        TagPrefix.dust.setIgnored(item);
        TagPrefix.block.setIgnored(item);
    })

    const ignoreIngot = ([key, material]) => TagPrefix.ingot.setIgnored(material, () => $TFC_ITEMS.METAL_ITEMS.get($TFC_METAL.Default[key]).get($TFC_METAL.ItemType.INGOT).get())
    Object.entries(TFGMetalMaterial).forEach( ignoreIngot )

    // Association between [TFCItems.METAL_ITEMS] and GTMaterials
    const toolHeadIgnore = {
        COPPER: GTMaterials.Copper,
        BISMUTH_BRONZE: GTMaterials.BismuthBronze,
        BRONZE: GTMaterials.Bronze,
        BLACK_BRONZE: GTMaterials.BlackBronze,
        WROUGHT_IRON: GTMaterials.WroughtIron,
        STEEL: GTMaterials.Steel,
        BLACK_STEEL: GTMaterials.BlackSteel,
        RED_STEEL: GTMaterials.RedSteel,
        BLUE_STEEL: GTMaterials.BlueSteel
    }

    const ignorePropick = ([key, material]) => KJSTagPrefix.getPrefix("propick_head").setIgnored(material, () => TFCItems.METAL_ITEMS.get(Metal.Default[key]).get(Metal.ItemType.PROPICK_HEAD).get());
    Object.entries(toolHeadIgnore).forEach( ignorePropick )
    
    const ignoreJavelin = ([key, material]) => KJSTagPrefix.getPrefix("javelin_head").setIgnored(material, () => TFCItems.METAL_ITEMS.get(Metal.Default[key]).get(Metal.ItemType.JAVELIN_HEAD).get());
    Object.entries(toolHeadIgnore).forEach( ignoreJavelin )

    const ignoreChisel = ([key, material]) => KJSTagPrefix.getPrefix("chisel_head").setIgnored(material, () => TFCItems.METAL_ITEMS.get(Metal.Default[key]).get(Metal.ItemType.CHISEL_HEAD).get());
    Object.entries(toolHeadIgnore).forEach( ignoreChisel )

    const ignoreMace = ([key, material]) => KJSTagPrefix.getPrefix("mace_head").setIgnored(material, () => TFCItems.METAL_ITEMS.get(Metal.Default[key]).get(Metal.ItemType.MACE_HEAD).get());
    Object.entries(toolHeadIgnore).forEach( ignoreMace )

    const ignoreAnvil = ([key, material]) => KJSTagPrefix.getPrefix("anvil").setIgnored(material, () => TFCItems.METAL_ITEMS.get(Metal.Default[key]).get(Metal.ItemType.ANVIL).get());
    Object.entries(toolHeadIgnore).forEach( ignoreAnvil )

    const ignoreLamp = ([key, material]) => KJSTagPrefix.getPrefix("lamp").setIgnored(material, () => TFCItems.METAL_ITEMS.get(Metal.Default[key]).get(Metal.ItemType.LAMP).get());
    Object.entries(toolHeadIgnore).forEach( ignoreLamp )

    const ignoreLampUnfinished = ([key, material]) => KJSTagPrefix.getPrefix("unfinished_lamp").setIgnored(material, () => TFCItems.METAL_ITEMS.get(Metal.Default[key]).get(Metal.ItemType.UNFINISHED_LAMP).get());
    Object.entries(toolHeadIgnore).forEach( ignoreLampUnfinished )

    const ignoreTrapdoor = ([key, material]) => KJSTagPrefix.getPrefix("trapdoor").setIgnored(material, () => TFCItems.METAL_ITEMS.get(Metal.Default[key]).get(Metal.ItemType.TRAPDOOR).get());
    Object.entries(toolHeadIgnore).forEach( ignoreTrapdoor )
    
    const ignoreChain = ([key, material]) => KJSTagPrefix.getPrefix("chain").setIgnored(material, () => TFCItems.METAL_ITEMS.get(Metal.Default[key]).get(Metal.ItemType.CHAIN).get());
    Object.entries(toolHeadIgnore).forEach( ignoreChain )

    const ignoreBars = ([key, material]) => KJSTagPrefix.getPrefix("bars").setIgnored(material, () => TFCItems.METAL_ITEMS.get(Metal.Default[key]).get(Metal.ItemType.BARS).get());
    Object.entries(toolHeadIgnore).forEach( ignoreBars )

    KJSTagPrefix.getPrefix("bell").setIgnored(GTMaterials.Gold, Blocks.BELL);
    KJSTagPrefix.getPrefix("bell").setIgnored(GTMaterials.Brass, $TFC_BLOCKS.BRASS_BELL);
    KJSTagPrefix.getPrefix("bell").setIgnored(GTMaterials.Bronze, $TFC_BLOCKS.BRONZE_BELL);

    GTMaterials.Gold.addFlags(GENERATE_BELL);
    GTMaterials.Brass.addFlags(GENERATE_BELL);
    GTMaterials.Bronze.addFlags(GENERATE_BELL);

    const platedIgnore = {
       COPPER: GTMaterials.Copper,
       BISMUTH_BRONZE: GTMaterials.BismuthBronze,
       BRONZE: GTMaterials.Bronze,
       BLACK_BRONZE: GTMaterials.BlackBronze,
       WROUGHT_IRON: GTMaterials.WroughtIron,
       STEEL: GTMaterials.Steel,
       BLACK_STEEL: GTMaterials.BlackSteel,
       RED_STEEL: GTMaterials.RedSteel,
       BLUE_STEEL: GTMaterials.BlueSteel,
       BRASS: GTMaterials.Brass,
       GOLD: GTMaterials.Gold,
       NICKEL: GTMaterials.Nickel,
       ROSE_GOLD: GTMaterials.RoseGold,
       SILVER: GTMaterials.Silver,
       TIN: GTMaterials.Tin,
       STERLING_SILVER: GTMaterials.SterlingSilver,
       BISMUTH: GTMaterials.Bismuth,
       ZINC: GTMaterials.Zinc
    }

    const ignoreBlockPlated = ([key, material]) => KJSTagPrefix.getPrefix("plated_block").setIgnored(material, () => $TFC_BLOCKS.METALS.get(Metal.Default[key]).get(Metal.BlockType.BLOCK).get())

    Object.entries(platedIgnore).forEach( ignoreBlockPlated )

    const ignoreStairPlated = ([key, material]) => KJSTagPrefix.getPrefix("plated_stair").setIgnored(material, () => $TFC_BLOCKS.METALS.get(Metal.Default[key]).get(Metal.BlockType.BLOCK_STAIRS).get())

    Object.entries(platedIgnore).forEach( ignoreStairPlated )

    const ignoreSlabPlated = ([key, material]) => KJSTagPrefix.getPrefix("plated_slab").setIgnored(material, () => $TFC_BLOCKS.METALS.get(Metal.Default[key]).get(Metal.BlockType.BLOCK_SLAB).get())

    Object.entries(platedIgnore).forEach( ignoreSlabPlated )

    KJSTagPrefix.getPrefix("small_ore").setIgnored(Bismuthinite, () => TFCBlocks.SMALL_ORES.get(Ore.BISMUTHINITE).get());
    KJSTagPrefix.getPrefix("small_ore").setIgnored(GTMaterials.Cassiterite, () => TFCBlocks.SMALL_ORES.get(Ore.CASSITERITE).get());
    KJSTagPrefix.getPrefix("small_ore").setIgnored(GTMaterials.Garnierite, () => TFCBlocks.SMALL_ORES.get(Ore.GARNIERITE).get());
    KJSTagPrefix.getPrefix("small_ore").setIgnored(GTMaterials.Hematite, () => TFCBlocks.SMALL_ORES.get(Ore.HEMATITE).get());
    KJSTagPrefix.getPrefix("small_ore").setIgnored(Limonite, () => TFCBlocks.SMALL_ORES.get(Ore.LIMONITE).get());
    KJSTagPrefix.getPrefix("small_ore").setIgnored(GTMaterials.Magnetite, () => TFCBlocks.SMALL_ORES.get(Ore.MAGNETITE).get());
    KJSTagPrefix.getPrefix("small_ore").setIgnored(GTMaterials.Malachite, () => TFCBlocks.SMALL_ORES.get(Ore.MALACHITE).get());
    KJSTagPrefix.getPrefix("small_ore").setIgnored(GTMaterials.Sphalerite, () => TFCBlocks.SMALL_ORES.get(Ore.SPHALERITE).get());
    KJSTagPrefix.getPrefix("small_ore").setIgnored(GTMaterials.Tetrahedrite, () => TFCBlocks.SMALL_ORES.get(Ore.TETRAHEDRITE).get());
//
    KJSTagPrefix.getPrefix("small_native_ore").setIgnored(GTMaterials.Copper, () => TFCBlocks.SMALL_ORES.get(Ore.NATIVE_COPPER).get());
    KJSTagPrefix.getPrefix("small_native_ore").setIgnored(GTMaterials.Gold, () => TFCBlocks.SMALL_ORES.get(Ore.NATIVE_GOLD).get());
    KJSTagPrefix.getPrefix("small_native_ore").setIgnored(GTMaterials.Silver, () => TFCBlocks.SMALL_ORES.get(Ore.NATIVE_SILVER).get());
//
//
//        /* Имеют двойные слитки */
    GTMaterials.Gold.addFlags(GENERATE_DOUBLE_INGOTS);
    GTMaterials.Bismuth.addFlags(GENERATE_DOUBLE_INGOTS);
    GTMaterials.Brass.addFlags(GENERATE_DOUBLE_INGOTS);
    GTMaterials.Nickel.addFlags(GENERATE_DOUBLE_INGOTS);
    GTMaterials.RoseGold.addFlags(GENERATE_DOUBLE_INGOTS);
    GTMaterials.Silver.addFlags(GENERATE_DOUBLE_INGOTS);
    GTMaterials.Tin.addFlags(GENERATE_DOUBLE_INGOTS);
    GTMaterials.Zinc.addFlags(GENERATE_DOUBLE_INGOTS);
    GTMaterials.SterlingSilver.addFlags(GENERATE_DOUBLE_INGOTS);
//
//        /* Имеют инструменты, броню TFC, двойные слитки */
    GTMaterials.Copper.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY, CAN_BE_UNMOLDED);
    GTMaterials.BismuthBronze.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY, CAN_BE_UNMOLDED);
    GTMaterials.Bronze.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY, CAN_BE_UNMOLDED);
    GTMaterials.BlackBronze.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY, CAN_BE_UNMOLDED);
    GTMaterials.WroughtIron.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
    GTMaterials.Steel.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
    GTMaterials.BlackSteel.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
    GTMaterials.RedSteel.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
    GTMaterials.BlueSteel.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
//
//        /* Имеют маленькие куски руды TFC */
    Bismuthinite.addFlags(HAS_SMALL_TFC_ORE);
    GTMaterials.Cassiterite.addFlags(HAS_SMALL_TFC_ORE);
    GTMaterials.Garnierite.addFlags(HAS_SMALL_TFC_ORE);
    GTMaterials.Hematite.addFlags(HAS_SMALL_TFC_ORE);
    Limonite.addFlags(HAS_SMALL_TFC_ORE);
    GTMaterials.Magnetite.addFlags(HAS_SMALL_TFC_ORE);
    GTMaterials.Malachite.addFlags(HAS_SMALL_TFC_ORE);
    GTMaterials.Sphalerite.addFlags(HAS_SMALL_TFC_ORE);
    GTMaterials.Tetrahedrite.addFlags(HAS_SMALL_TFC_ORE);
//
//        /* Имеют маленькие чистые куски руды TFC */
    GTMaterials.Copper.addFlags(HAS_SMALL_NATIVE_TFC_ORE);
    GTMaterials.Gold.addFlags(HAS_SMALL_NATIVE_TFC_ORE);
    GTMaterials.Silver.addFlags(HAS_SMALL_NATIVE_TFC_ORE);
//
//        /* Имеют двойные слитки */
    GTMaterials.RedAlloy.addFlags(GENERATE_DOUBLE_INGOTS);
    GTMaterials.TinAlloy.addFlags(GENERATE_DOUBLE_INGOTS);
//
//        /* Другое */

    // TODO: Exception needs to check the wizardry
    GTMaterials.Bismuth.setProperty(PropertyKey.ORE, new $ORE_PROPERTY());
    GTMaterials.EXT2_METAL.forEach(tag => GTMaterials.Bismuth.addFlags(tag))

    GTMaterials.Borax.setProperty(PropertyKey.ORE, new $ORE_PROPERTY());
    GTMaterials.Titanium.setProperty(PropertyKey.ORE, new $ORE_PROPERTY());
//
    GTMaterials.CertusQuartz.addFlags(GENERATE_ROD);
    GTMaterials.NetherQuartz.addFlags(GENERATE_ROD);
//
    GTMaterials.Nickel.addFlags(GENERATE_ROD, GENERATE_LONG_ROD);
    GTMaterials.BlackSteel.addFlags(GENERATE_LONG_ROD, GENERATE_BOLT_SCREW);
    GTMaterials.BlueSteel.addFlags(GENERATE_LONG_ROD, GENERATE_BOLT_SCREW);
    GTMaterials.RedSteel.addFlags(GENERATE_LONG_ROD, GENERATE_BOLT_SCREW);
    GTMaterials.WroughtIron.addFlags(GENERATE_ROTOR, GENERATE_SPRING, GENERATE_SMALL_GEAR);
//
    GTMaterials.Copper.addFlags(GENERATE_BOLT_SCREW, GENERATE_FRAME);
    GTMaterials.DamascusSteel.addFlags(GENERATE_BOLT_SCREW);
    GTMaterials.Duranium.addFlags(GENERATE_BOLT_SCREW);
//
    GTMaterials.Stone.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(1.2, 1.0, 8, 1, [
            GTToolType.AXE,
            GTToolType.HARD_HAMMER,
            GTToolType.HOE,
            GTToolType.KNIFE,
            GTToolType.SHOVEL
    ]).build());

    GTMaterials.Copper.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.0, 1.5, 132, 2, metalTooling).build());
    GTMaterials.BismuthBronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.5, 2.0, 178, 2, metalTooling).build());
    GTMaterials.BlackBronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(3.3, 2.0, 204, 2, metalTooling).build());
    GTMaterials.BlackSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(6.5, 4.5, 1228, 3, metalTooling).build());
//
    for (var material of GTCEuAPI.materialManager.getRegisteredMaterials()) {
        var toolProperty = material.getProperty(PropertyKey.TOOL);
        if (toolProperty == null) continue;

        toolProperty.setDurability(toolProperty.getDurability() * 6);
    }
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

    console.log(GTMaterials)
    console.log(GTMaterials.Aluminium)
    console.log(GTMaterials.Aluminium.flags)
}