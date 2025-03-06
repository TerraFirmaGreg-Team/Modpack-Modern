// priority: 1

const registerGTCEuMaterials = (event) => {
    console.log("registerGTCEuMaterials", Object.keys(event))
}

const registerGTCEuMaterialModification = (event) => {
    const $TFC_METAL = Java.loadClass('net.dries007.tfc.util.Metal')
    const $TFC_ITEMS = Java.loadClass('net.dries007.tfc.common.items.TFCItems')
    const $TFC_BLOCKS = Java.loadClass('net.dries007.tfc.common.blocks.TFCBlocks')

    const $TFG_PROPERTY_KEYS = Java.loadClass('su.terrafirmagreg.core.compat.gtceu.TFGPropertyKeys')
    const $TFC_PROPERTY = Java.loadClass('su.terrafirmagreg.core.compat.gtceu.properties.TFCProperty')

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
    const ignorePropick = ([key, material]) => TFGTagPrefix.toolHeadPropick.setIgnored(material, () => TFCItems.METAL_ITEMS.get(Metal.Default[key]).get(Metal.ItemType.PROPICK_HEAD).get());
    Object.entries(toolHeadIgnore).forEach( ignorePropick )
    
    const ignoreJavelin = ([key, material]) => TFGTagPrefix.toolHeadJavelin.setIgnored(material, () => TFCItems.METAL_ITEMS.get(Metal.Default[key]).get(Metal.ItemType.JAVELIN_HEAD).get());
    Object.entries(toolHeadIgnore).forEach( ignoreJavelin )
    const ignoreChisel = ([key, material]) => TFGTagPrefix.toolHeadChisel.setIgnored(material, () => TFCItems.METAL_ITEMS.get(Metal.Default[key]).get(Metal.ItemType.CHISEL_HEAD).get());
    Object.entries(toolHeadIgnore).forEach( ignoreChisel )
    const ignoreMace = ([key, material]) => TFGTagPrefix.toolHeadMace.setIgnored(material, () => TFCItems.METAL_ITEMS.get(Metal.Default[key]).get(Metal.ItemType.MACE_HEAD).get());
    Object.entries(toolHeadIgnore).forEach( ignoreMace )
    const ignoreAnvil = ([key, material]) => TFGTagPrefix.anvil.setIgnored(material, () => TFCItems.METAL_ITEMS.get(Metal.Default[key]).get(Metal.ItemType.ANVIL).get());
    Object.entries(toolHeadIgnore).forEach( ignoreAnvil )

    const ignoreLamp = ([key, material]) => TFGTagPrefix.lamp.setIgnored(material, () => TFCItems.METAL_ITEMS.get(Metal.Default[key]).get(Metal.ItemType.LAMP).get());
    Object.entries(toolHeadIgnore).forEach( ignoreLamp )

    const ignoreLampUnfinished = ([key, material]) => TFGTagPrefix.lampUnfinished.setIgnored(material, () => TFCItems.METAL_ITEMS.get(Metal.Default[key]).get(Metal.ItemType.UNFINISHED_LAMP).get());
    Object.entries(toolHeadIgnore).forEach( ignoreLampUnfinished )

    const ignoreTrapdoor = ([key, material]) => TFGTagPrefix.trapdoor.setIgnored(material, () => TFCItems.METAL_ITEMS.get(Metal.Default[key]).get(Metal.ItemType.TRAPDOOR).get());
    Object.entries(toolHeadIgnore).forEach( ignoreTrapdoor )
    
    const ignoreChain = ([key, material]) => TFGTagPrefix.chain.setIgnored(material, () => TFCItems.METAL_ITEMS.get(Metal.Default[key]).get(Metal.ItemType.CHAIN).get());
    Object.entries(toolHeadIgnore).forEach( ignoreChain )

    const ignoreBars = ([key, material]) => TFGTagPrefix.bars.setIgnored(material, () => TFCItems.METAL_ITEMS.get(Metal.Default[key]).get(Metal.ItemType.BARS).get());
    Object.entries(toolHeadIgnore).forEach( ignoreBars )

    // TFGTagPrefix.bell.setIgnored(GTMaterials.Gold, Blocks.BELL);
    // TFGTagPrefix.bell.setIgnored(GTMaterials.Brass, $TFC_BLOCKS.BRASS_BELL);
    // TFGTagPrefix.bell.setIgnored(GTMaterials.Bronze, $TFC_BLOCKS.BRONZE_BELL);

    // GTMaterials.Gold.addFlags(TFGMaterialFlags.GENERATE_BELL);
    // GTMaterials.Brass.addFlags(TFGMaterialFlags.GENERATE_BELL);
    // GTMaterials.Bronze.addFlags(TFGMaterialFlags.GENERATE_BELL);

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

    // const ignoreBlockPlated = ([key, material]) => TFGTagPrefix.blockPlated.setIgnored(material, () => $TFC_BLOCKS.METALS.get(Metal.Default[key]).get(Metal.BlockType.BLOCK).get())

    // Object.entries(platedIgnore).forEach( ignoreBlockPlated )

    // const ignoreStairPlated = ([key, material]) => TFGTagPrefix.stairPlated.setIgnored(material, () => $TFC_BLOCKS.METALS.get(Metal.Default[key]).get(Metal.BlockType.BLOCK_STAIRS).get())

    // Object.entries(platedIgnore).forEach( ignoreStairPlated )

    // const ignoreSlabPlated = ([key, material]) => TFGTagPrefix.slabPlated.setIgnored(material, () => $TFC_BLOCKS.METALS.get(Metal.Default[key]).get(Metal.BlockType.BLOCK_SLAB).get())

    // Object.entries(platedIgnore).forEach( ignoreSlabPlated )



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