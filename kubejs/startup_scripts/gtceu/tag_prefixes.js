// priority: 0

const registerGTCEuTagPrefixes = (event) => {
    const $TagKeyClass = Java.loadClass('net.minecraft.tags.TagKey')
    const $ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries')
    const $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
    
	const $TFC_PROPERTY = Java.loadClass('su.terrafirmagreg.core.compat.gtceu.properties.TFCProperty')
	const $TFC_METAL = Java.loadClass('net.dries007.tfc.util.Metal')
	const $TFC_ITEMS = Java.loadClass('net.dries007.tfc.common.items.TFCItems')
	const $TFC_BLOCKS = Java.loadClass('net.dries007.tfc.common.blocks.TFCBlocks')

	const KJSTagPrefix = Java.loadClass('com.gregtechceu.gtceu.integration.kjs.built.KJSTagPrefix')

    const $TFGMaterialFlags = Java.loadClass('su.terrafirmagreg.core.compat.gtceu.materials.TFGMaterialFlags')
	const $TFG_PROPERTY_KEYS = Java.loadClass('su.terrafirmagreg.core.compat.gtceu.TFGPropertyKeys')

    const poorRawOreIcon = GTMaterialIconType.getByName('poor_raw_ore')
    const richRawOreIcon = GTMaterialIconType.getByName('rich_raw_ore')

    const toolHeadMiningHammerIcon = GTMaterialIconType.getByName('tool_head_mining_hammer')
    const toolHeadKnifeIcon = GTMaterialIconType.getByName('tool_head_knife')
    const toolHeadButcheryKnifeIcon = GTMaterialIconType.getByName('tool_head_butchery_knife')
    const toolHeadSpadeIcon = GTMaterialIconType.getByName('tool_head_spade')
    const toolHeadPropickIcon = GTMaterialIconType.getByName('tool_head_propick')
    const toolHeadJavelinIcon = GTMaterialIconType.getByName('tool_head_javelin')
    const toolHeadChiselIcon = GTMaterialIconType.getByName('tool_head_chisel')
    const toolHeadMaceIcon = GTMaterialIconType.getByName('tool_head_mace')

    const bellIcon = GTMaterialIconType.getByName('bell')

    const createBlockTag = (path) => 
        $TagKeyClass.create($ForgeRegistries.BLOCKS.getRegistryKey(), new $ResourceLocation(path))

    event.create("sword_head")
        .defaultTagPath("sword_heads/%s")
        .unformattedTagPath("sword_heads")
        .materialAmount(GTValues.M * 2)
        .maxStackSize(16)
        .materialIconType(GTMaterialIconType.toolHeadSword)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(
            TagPrefix.Conditions.hasToolProperty
            .and(mat => mat.hasFlag(GTMaterialFlags.GENERATE_PLATE))
            .and(mat => mat.getProperty(PropertyKey.TOOL).hasType(GTToolType.SWORD))
        )

    event.create("pickaxe_head")
        .defaultTagPath("pickaxe_heads/%s")
        .unformattedTagPath("pickaxe_heads")
        .materialAmount(GTValues.M)
        .maxStackSize(16)
        .materialIconType(GTMaterialIconType.toolHeadPickaxe)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(
            TagPrefix.Conditions.hasToolProperty
            .and(mat => mat.hasFlag(GTMaterialFlags.GENERATE_PLATE))
            .and(mat => mat.getProperty(PropertyKey.TOOL).hasType(GTToolType.PICKAXE))
        )

    event.create("shovel_head")
        .defaultTagPath("shovel_heads/%s")
        .unformattedTagPath("shovel_heads")
        .materialAmount(GTValues.M)
        .maxStackSize(16)
        .materialIconType(GTMaterialIconType.toolHeadShovel)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(
            TagPrefix.Conditions.hasToolProperty
            .and(mat => mat.hasFlag(GTMaterialFlags.GENERATE_PLATE))
            .and(mat => mat.getProperty(PropertyKey.TOOL).hasType(GTToolType.SHOVEL))
        )

    event.create("axe_head")
        .defaultTagPath("axe_heads/%s")
        .unformattedTagPath("axe_heads")
        .materialAmount(GTValues.M)
        .maxStackSize(16)
        .materialIconType(GTMaterialIconType.toolHeadAxe)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(
            TagPrefix.Conditions.hasToolProperty
            .and(mat => mat.hasFlag(GTMaterialFlags.GENERATE_PLATE))
            .and(mat => mat.getProperty(PropertyKey.TOOL).hasType(GTToolType.AXE))
        )

    event.create("hoe_head")
        .defaultTagPath("hoe_heads/%s")
        .unformattedTagPath("hoe_heads")
        .materialAmount(GTValues.M)
        .maxStackSize(16)
        .materialIconType(GTMaterialIconType.toolHeadHoe)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(
            TagPrefix.Conditions.hasToolProperty
            .and(mat => mat.hasFlag(GTMaterialFlags.GENERATE_PLATE))
            .and(mat => mat.getProperty(PropertyKey.TOOL).hasType(GTToolType.HOE))
        )

    event.create("scythe_head")
        .defaultTagPath("scythe_heads/%s")
        .unformattedTagPath("scythe_heads")
        .materialAmount(GTValues.M)
        .maxStackSize(16)
        .materialIconType(GTMaterialIconType.toolHeadScythe)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(
            TagPrefix.Conditions.hasToolProperty
            .and(mat => mat.hasFlag(GTMaterialFlags.GENERATE_PLATE))
            .and(mat => mat.getProperty(PropertyKey.TOOL).hasType(GTToolType.SCYTHE))
        )

    event.create("file_head")
        .defaultTagPath("file_heads/%s")
        .unformattedTagPath("file_heads")
        .materialAmount(GTValues.M)
        .maxStackSize(16)
        .materialIconType(GTMaterialIconType.toolHeadFile)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(
            TagPrefix.Conditions.hasToolProperty
            .and(mat => mat.hasFlag(GTMaterialFlags.GENERATE_PLATE))
            .and(mat => mat.getProperty(PropertyKey.TOOL).hasType(GTToolType.FILE))
        )

    event.create("hammer_head")
        .defaultTagPath("hammer_heads/%s")
        .unformattedTagPath("hammer_heads")
        .materialAmount(GTValues.M)
        .maxStackSize(16)
        .materialIconType(GTMaterialIconType.toolHeadHammer)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(
            TagPrefix.Conditions.hasToolProperty
            .and(mat => mat.hasFlag(GTMaterialFlags.GENERATE_PLATE))
            .and(mat => mat.getProperty(PropertyKey.TOOL).hasType(GTToolType.HARD_HAMMER))
        )

    event.create("saw_head")
        .defaultTagPath("saw_heads/%s")
        .unformattedTagPath("saw_heads")
        .materialAmount(GTValues.M)
        .maxStackSize(16)
        .materialIconType(GTMaterialIconType.toolHeadSaw)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(
            TagPrefix.Conditions.hasToolProperty
            .and(mat => mat.hasFlag(GTMaterialFlags.GENERATE_PLATE))
            .and(mat => mat.getProperty(PropertyKey.TOOL).hasType(GTToolType.SAW))
        )

    event.create("knife_head")
        .defaultTagPath("knife_heads/%s")
        .unformattedTagPath("knife_heads")
        .materialAmount(GTValues.M)
        .maxStackSize(16)
        .materialIconType(toolHeadKnifeIcon)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(
            TagPrefix.Conditions.hasToolProperty
            .and(mat => mat.hasFlag(GTMaterialFlags.GENERATE_PLATE))
            .and(mat => mat.getProperty(PropertyKey.TOOL).hasType(GTToolType.KNIFE))
        )

    event.create("butchery_knife_head")
        .defaultTagPath("butchery_knife_heads/%s")
        .unformattedTagPath("butchery_knife_heads")
        .materialAmount(GTValues.M * 2)
        .maxStackSize(16)
        .materialIconType(toolHeadButcheryKnifeIcon)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(
            TagPrefix.Conditions.hasToolProperty
            .and(mat => mat.hasFlag(GTMaterialFlags.GENERATE_PLATE))
            .and(mat => mat.getProperty(PropertyKey.TOOL).hasType(GTToolType.BUTCHERY_KNIFE))
        )

    event.create("mining_hammer_head")
        .defaultTagPath("mining_hammer_heads/%s")
        .unformattedTagPath("mining_hammer_heads")
        .materialAmount(GTValues.M * 2)
        .maxStackSize(16)
        .materialIconType(toolHeadMiningHammerIcon)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(
            TagPrefix.Conditions.hasToolProperty
            .and(mat => mat.hasFlag(GTMaterialFlags.GENERATE_PLATE))
            .and(mat => mat.getProperty(PropertyKey.TOOL).hasType(GTToolType.MINING_HAMMER))
        )

    event.create("spade_head")
        .defaultTagPath("spade_heads/%s")
        .unformattedTagPath("spade_heads")
        .materialAmount(GTValues.M * 2)
        .maxStackSize(16)
        .materialIconType(toolHeadSpadeIcon)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(
            TagPrefix.Conditions.hasToolProperty
            .and(mat => mat.hasFlag(GTMaterialFlags.GENERATE_PLATE))
            .and(mat => mat.getProperty(PropertyKey.TOOL).hasType(GTToolType.SPADE))
        )

    event.create("propick_head")
        .defaultTagPath("propick_heads/%s")
        .unformattedTagPath("propick_heads")
        .materialAmount(GTValues.M)
        .maxStackSize(16)
        .materialIconType(toolHeadPropickIcon)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(mat => mat.hasFlag($TFGMaterialFlags.HAS_TFC_TOOL))

    event.create("javelin_head")
        .defaultTagPath("javelin_heads/%s")
        .unformattedTagPath("javelin_heads")
        .materialAmount(GTValues.M)
        .maxStackSize(16)
        .materialIconType(toolHeadJavelinIcon)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(mat => mat.hasFlag($TFGMaterialFlags.HAS_TFC_TOOL))

    event.create("chisel_head")
        .defaultTagPath("chisel_heads/%s")
        .unformattedTagPath("chisel_heads")
        .materialAmount(GTValues.M)
        .maxStackSize(16)
        .materialIconType(toolHeadChiselIcon)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(mat => mat.hasFlag($TFGMaterialFlags.HAS_TFC_TOOL))

    event.create("mace_head")
        .defaultTagPath("mace_heads/%s")
        .unformattedTagPath("mace_heads")
        .materialAmount(GTValues.M * 2)
        .maxStackSize(16)
        .materialIconType(toolHeadMaceIcon)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(mat => mat.hasFlag($TFGMaterialFlags.HAS_TFC_TOOL))

    /* Other */
    event.create("double_ingot")
        .defaultTagPath("double_ingots/%s")
        .unformattedTagPath("double_ingots")
        .materialAmount(GTValues.M)
        .materialIconType(GTMaterialIconType.ingotDouble)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(mat => mat.hasFlag($TFGMaterialFlags.GENERATE_DOUBLE_INGOTS));

    event.create("poor_raw")
        //.idPattern("rich_raw_%s")
        .defaultTagPath("poor_raw_materials/%s")
        .unformattedTagPath("poor_raw_materials")
        .materialIconType(poorRawOreIcon)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(TagPrefix.Conditions.hasOreProperty)
        .base.idPattern("poor_raw_%s");

    event.create("rich_raw")
        .defaultTagPath("rich_raw_materials/%s")
        .unformattedTagPath("rich_raw_materials")
        .materialIconType(richRawOreIcon)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(TagPrefix.Conditions.hasOreProperty)
        .base.idPattern("rich_raw_%s");

    event.create("small_ore")
        .materialAmount(GTValues.M / 4)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(mat => mat.hasFlag($TFGMaterialFlags.HAS_SMALL_TFC_ORE));

    event.create("small_native_ore")
        .materialAmount(GTValues.M / 4)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(mat => mat.hasFlag($TFGMaterialFlags.HAS_SMALL_NATIVE_TFC_ORE));

    event.create("anvil")
        .materialAmount(GTValues.M * 14)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(mat => mat.hasFlag($TFGMaterialFlags.HAS_TFC_UTILITY));

    event.create("lamp")
        .materialAmount(GTValues.M)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(mat => mat.hasFlag($TFGMaterialFlags.HAS_TFC_UTILITY));

    event.create("unfinished_lamp")
        .materialAmount(GTValues.M)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(mat => mat.hasFlag($TFGMaterialFlags.HAS_TFC_UTILITY));

    event.create("trapdoor")
        .materialAmount(GTValues.M)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(mat => mat.hasFlag($TFGMaterialFlags.HAS_TFC_UTILITY));

    event.create("chain")
        .materialAmount(GTValues.M / 16)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(mat => mat.hasFlag($TFGMaterialFlags.HAS_TFC_UTILITY));

    event.create("bars")
        .materialAmount(GTValues.M / 9)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(mat => mat.hasFlag($TFGMaterialFlags.HAS_TFC_UTILITY));

    event.create("bell")
        .materialAmount(GTValues.M)
        .unificationEnabled(true)
        // .materialIconType(bellIcon)
        .generateItem(true)
        .generationCondition(mat => mat.hasFlag($TFGMaterialFlags.GENERATE_BELL));

    event.create("plated_block")
        .materialAmount(GTValues.M)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(mat => mat.hasFlag($TFGMaterialFlags.HAS_PLATED_BLOCK));

    event.create("plated_stair")
        .materialAmount(GTValues.M)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(mat => mat.hasFlag($TFGMaterialFlags.HAS_PLATED_BLOCK));

    event.create("plated_slab")
        .materialAmount(GTValues.M)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(mat => mat.hasFlag($TFGMaterialFlags.HAS_PLATED_BLOCK));

    /* Tag Fixes */
    TagPrefix.plate.defaultTagPath("sheets/%s")
    TagPrefix.plateDouble.defaultTagPath("double_sheets/%s")

    TagPrefix.frameGt.unformattedTagPath("frames")

    TagPrefix.wireGtSingle.defaultTagPath("single_wires/%s")
    TagPrefix.wireGtSingle.unformattedTagPath("single_wires")
    TagPrefix.wireGtDouble.defaultTagPath("double_wires/%s")
    TagPrefix.wireGtDouble.unformattedTagPath("double_wires")
    TagPrefix.wireGtQuadruple.defaultTagPath("quadruple_wires/%s")
    TagPrefix.wireGtQuadruple.unformattedTagPath("quadruple_wires")
    TagPrefix.wireGtOctal.defaultTagPath("octal_wires/%s")
    TagPrefix.wireGtOctal.unformattedTagPath("octal_wires")
    TagPrefix.wireGtHex.defaultTagPath("hex_wires/%s")
    TagPrefix.wireGtHex.unformattedTagPath("hex_wires")

    TagPrefix.cableGtSingle.defaultTagPath("single_cables/%s")
    TagPrefix.cableGtSingle.unformattedTagPath("single_cables")
    TagPrefix.cableGtDouble.defaultTagPath("double_cables/%s")
    TagPrefix.cableGtDouble.unformattedTagPath("double_cables")
    TagPrefix.cableGtQuadruple.defaultTagPath("quadruple_cables/%s")
    TagPrefix.cableGtQuadruple.unformattedTagPath("quadruple_cables")
    TagPrefix.cableGtOctal.defaultTagPath("octal_cables/%s")
    TagPrefix.cableGtOctal.unformattedTagPath("octal_cables")
    TagPrefix.cableGtHex.defaultTagPath("hex_cables/%s")
    TagPrefix.cableGtHex.unformattedTagPath("hex_cables")

    TagPrefix.pipeTinyFluid.defaultTagPath("tiny_fluid_pipes/%s")
    TagPrefix.pipeTinyFluid.unformattedTagPath("tiny_fluid_pipes")
    TagPrefix.pipeSmallFluid.defaultTagPath("small_fluid_pipes/%s")
    TagPrefix.pipeSmallFluid.unformattedTagPath("small_fluid_pipes")
    TagPrefix.pipeNormalFluid.defaultTagPath("normal_fluid_pipes/%s")
    TagPrefix.pipeNormalFluid.unformattedTagPath("normal_fluid_pipes")
    TagPrefix.pipeLargeFluid.defaultTagPath("large_fluid_pipes/%s")
    TagPrefix.pipeLargeFluid.unformattedTagPath("large_fluid_pipes")
    TagPrefix.pipeHugeFluid.defaultTagPath("huge_fluid_pipes/%s")
    TagPrefix.pipeHugeFluid.unformattedTagPath("huge_fluid_pipes")
    TagPrefix.pipeQuadrupleFluid.defaultTagPath("quadruple_fluid_pipes/%s")
    TagPrefix.pipeQuadrupleFluid.unformattedTagPath("quadruple_fluid_pipes")
    TagPrefix.pipeNonupleFluid.defaultTagPath("nonuple_fluid_pipes/%s")
    TagPrefix.pipeNonupleFluid.unformattedTagPath("nonuple_fluid_pipes")

    // FirmaLife Shit
    TagPrefix.pipeTinyFluid.customTagPath("", (prefix, mat) => createBlockTag("firmalife:always_valid_greenhouse_wall"))
    TagPrefix.pipeSmallFluid.customTagPath("", (prefix, mat) => createBlockTag("firmalife:always_valid_greenhouse_wall"))
    TagPrefix.pipeNormalFluid.customTagPath("", (prefix, mat) => createBlockTag("firmalife:always_valid_greenhouse_wall"))
    TagPrefix.pipeLargeFluid.customTagPath("", (prefix, mat) => createBlockTag("firmalife:always_valid_greenhouse_wall"))
    // FirmaLife Shit

    TagPrefix.pipeSmallItem.defaultTagPath("small_item_pipes/%s")
    TagPrefix.pipeSmallItem.unformattedTagPath("small_item_pipes")
    TagPrefix.pipeNormalItem.defaultTagPath("normal_item_pipes/%s")
    TagPrefix.pipeNormalItem.unformattedTagPath("normal_item_pipes")
    TagPrefix.pipeLargeItem.defaultTagPath("large_item_pipes/%s")
    TagPrefix.pipeLargeItem.unformattedTagPath("large_item_pipes")
    TagPrefix.pipeHugeItem.defaultTagPath("huge_item_pipes/%s")
    TagPrefix.pipeHugeItem.unformattedTagPath("huge_item_pipes")

    TagPrefix.pipeSmallRestrictive.defaultTagPath("small_restrictive_pipes/%s")
    TagPrefix.pipeSmallRestrictive.unformattedTagPath("small_restrictive_pipes")
    TagPrefix.pipeNormalRestrictive.defaultTagPath("normal_restrictive_pipes/%s")
    TagPrefix.pipeNormalRestrictive.unformattedTagPath("normal_restrictive_pipes")
    TagPrefix.pipeLargeRestrictive.defaultTagPath("large_restrictive_pipes/%s")
    TagPrefix.pipeLargeRestrictive.unformattedTagPath("large_restrictive_pipes")
    TagPrefix.pipeHugeRestrictive.defaultTagPath("huge_restrictive_pipes/%s")
    TagPrefix.pipeHugeRestrictive.unformattedTagPath("huge_restrictive_pipes")

    TagPrefix.toolHeadDrill.defaultTagPath("drill_heads/%s")
    TagPrefix.toolHeadDrill.unformattedTagPath("drill_heads")

    TagPrefix.toolHeadChainsaw.defaultTagPath("chainsaw_heads/%s")
    TagPrefix.toolHeadChainsaw.unformattedTagPath("chainsaw_heads")

    TagPrefix.toolHeadBuzzSaw.defaultTagPath("buzz_saw_heads/%s")
    TagPrefix.toolHeadBuzzSaw.unformattedTagPath("buzz_saw_heads")

    TagPrefix.toolHeadWrench.defaultTagPath("wrench_tips/%s")
    TagPrefix.toolHeadWrench.unformattedTagPath("wrench_tips")

    TagPrefix.toolHeadScrewdriver.defaultTagPath("screwdriver_tips/%s")
    TagPrefix.toolHeadScrewdriver.unformattedTagPath("screwdriver_tips")

    TagPrefix.turbineBlade.defaultTagPath("turbine_blades/%s")
    TagPrefix.turbineBlade.unformattedTagPath("turbine_blades")


    

	const TFGMetalMaterial = {
		"PIG_IRON": GTCEuAPI.materialManager.getMaterial('tfg:pig_iron'),
		"HIGH_CARBON_STEEL": GTCEuAPI.materialManager.getMaterial('tfg:high_carbon_steel'),
		"HIGH_CARBON_BLACK_STEEL": GTCEuAPI.materialManager.getMaterial('tfg:high_carbon_black_steel'),
		"HIGH_CARBON_RED_STEEL": GTCEuAPI.materialManager.getMaterial('tfg:high_carbon_red_steel'),
		"HIGH_CARBON_BLUE_STEEL": GTCEuAPI.materialManager.getMaterial('tfg:high_carbon_blue_steel'),
		"WEAK_STEEL": GTCEuAPI.materialManager.getMaterial('tfg:weak_steel'),
		"WEAK_BLUE_STEEL": GTCEuAPI.materialManager.getMaterial('tfg:weak_blue_steel'),
		"WEAK_RED_STEEL": GTCEuAPI.materialManager.getMaterial('tfg:weak_red_steel'),
		"UNKNOWN": GTCEuAPI.materialManager.getMaterial('tfg:unknown')
	}


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

    
	const Bismuthinite = GTCEuAPI.materialManager.getMaterial('tfg:bismuthinite')
	const Limonite = GTCEuAPI.materialManager.getMaterial('tfg:limonite')

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
}