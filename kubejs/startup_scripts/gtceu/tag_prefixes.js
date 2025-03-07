// priority: 0

const registerGTCEuTagPrefixes = (event) => {
    const $TagKeyClazz = Java.loadClass('net.minecraft.tags.TagKey')
    const $ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries')
    const $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')

    const $TFGMaterialFlags = Java.loadClass('su.terrafirmagreg.core.compat.gtceu.materials.TFGMaterialFlags')

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
        $TagKeyClazz.create($ForgeRegistries.BLOCKS.getRegistryKey(), new $ResourceLocation(path))

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
        .defaultTagPath("poor_raw_materials/%s")
        .unformattedTagPath("poor_raw_materials")
        .materialIconType(poorRawOreIcon)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(TagPrefix.Conditions.hasOreProperty);

    event.create("rich_raw")
        .defaultTagPath("rich_raw_materials/%s")
        .unformattedTagPath("rich_raw_materials")
        .materialIconType(richRawOreIcon)
        .unificationEnabled(true)
        .generateItem(true)
        .generationCondition(TagPrefix.Conditions.hasOreProperty);

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
}