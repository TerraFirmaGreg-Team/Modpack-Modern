// priority: 0

const registerGTrecipes = (event) => {
    GTRegistries.MATERIALS.forEach(material => {
        if (material.hasProperty($PropertyKey.ORE)) {
            event.remove({id: `gtceu:forge_hammer/hammer_raw_${material}_to_crushed_ore`})
            event.remove({id: `gtceu:macerator/macerate_raw_${material}_ore_to_crushed_ore`})

            if (doesMaterialUseNormalFurnace(material)) {
                event.remove({id: `gtceu:smelting/smelt_raw_${material}_ore_to_ingot`})
                event.remove({id: `gtceu:blasting/smelt_raw_${material}_ore_to_ingot`})
            }

            generateRecipesForRawOres(event, material)
            generateRecipesForOres(event, material)
        }
    })
}

const doesMaterialUseNormalFurnace = (material) => {
    return !material.hasProperty($PropertyKey.BLAST);
}

const generateRecipesForRawOres = (event, material) => {
    const materialOreProperty = material.getProperty($PropertyKey.ORE)

    const ingotPrefix = TagPrefix.getPrefix('ingot')
    const gemPrefix = TagPrefix.getPrefix('gem')
    const dustPrefix = TagPrefix.getPrefix('dust')
    const crushedOrePrefix = TagPrefix.getPrefix('crushedOre')

    const crushedStack = ChemicalHelper.get(crushedOrePrefix, material, 1);
    
    let ingotStack;
    const smeltingMaterial = materialOreProperty.getDirectSmeltResult() == null ? material : materialOreProperty.getDirectSmeltResult();
    const amountOfCrushedOre = materialOreProperty.getOreMultiplier();
    
    if (smeltingMaterial.hasProperty($PropertyKey.INGOT)) {
        ingotStack = ChemicalHelper.get(ingotPrefix, smeltingMaterial, 1);
    } else if (smeltingMaterial.hasProperty($PropertyKey.GEM)) {
        ingotStack = ChemicalHelper.get(gemPrefix, smeltingMaterial, 1);
    } else {
        ingotStack = ChemicalHelper.get(dustPrefix, smeltingMaterial, 1);
    }
    ingotStack.setCount(ingotStack.getCount() * materialOreProperty.getOreMultiplier());
    crushedStack.setCount(crushedStack.getCount() * materialOreProperty.getOreMultiplier());

    if (crushedStack.isEmpty()) return;

    const generateRecipes = (tagPrefixWithMaterial, tagPrefix, multiplier) => {
        let outputItems;
    
        if (material.hasProperty($PropertyKey.GEM) && !gemPrefix.isIgnored(material)) {
            outputItems = `${amountOfCrushedOre * multiplier}x gtceu:${material}_gem`
        } else {
            outputItems = `${amountOfCrushedOre * multiplier}x gtceu:${material}_crushed_ore`
        }
    
        const forgeHammerRecipeName = `hammer_${tagPrefixWithMaterial}_to_crushed_ore`
        const maceratorRecipeName = `macerate_${tagPrefixWithMaterial}_to_crushed_ore`
    
        const rawRecipeEntry = `1x gtceu:${tagPrefixWithMaterial}`
        const crushedRecipeEntry = `${crushedStack.getCount() * multiplier}x gtceu:${material}_crushed_ore`
        
        event.recipes.gtceu.forge_hammer(forgeHammerRecipeName)
            .itemInputs(rawRecipeEntry)
            .itemOutputs(outputItems)
            .duration(10).EUt(16);
        
        event.recipes.gtceu.macerator(maceratorRecipeName)
                .itemInputs(rawRecipeEntry)
                .itemOutputs(crushedRecipeEntry)
                .chancedOutput(crushedRecipeEntry, 5000, 750)
                .chancedOutput(crushedRecipeEntry, 2500, 500)
                .chancedOutput(crushedRecipeEntry, 1250, 250)
                .duration(10).EUt(16);

        // do not try to add smelting recipes for materials which require blast furnace
        if (!ingotStack.isEmpty() && doesMaterialUseNormalFurnace(smeltingMaterial) && !tagPrefix.isIgnored(material)) {
            const xp = Math.round(((1 + materialOreProperty.getOreMultiplier() * 0.33) / 3) * 10) / 10;
        
            const smeltRecipeName = `tfg:smelting/smelt_${tagPrefixWithMaterial}_to_ingot`
            const blastingRecipeName = `tfg:blasting/smelt_${tagPrefixWithMaterial}_to_ingot`

            const inputEntry = `1x gtceu:${tagPrefixWithMaterial}`
            
            const dolbaeb = ingotStack.copy()
            dolbaeb.setCount(dolbaeb.getCount() * multiplier)
            
            event.smelting(dolbaeb, inputEntry).id(smeltRecipeName).xp(xp)
            event.blasting(dolbaeb, inputEntry).id(blastingRecipeName).xp(xp)
        }
    }

    const poorRawOrePrefix = TagPrefix.getPrefix(`poor_raw`)
    const normalRawOrePrefix = TagPrefix.getPrefix(`raw`)
    const richRawOrePrefix = TagPrefix.getPrefix(`rich_raw`)

    generateRecipes(`${material}_poor_raw`, poorRawOrePrefix, 1)
    generateRecipes(`raw_${material}`, normalRawOrePrefix, 2)
    generateRecipes(`${material}_rich_raw`, richRawOrePrefix, 3)
}

const generateRecipesForOres = (event, material) => {
    
}




// Ore Raw
/*

public static void processRawOre(TagPrefix orePrefix, Material material, OreProperty property, Consumer<FinishedRecipe> provider) {
        ItemStack crushedStack = ChemicalHelper.get(crushed, material);
        ItemStack ingotStack;
        Material smeltingMaterial = property.getDirectSmeltResult() == null ? material : property.getDirectSmeltResult();
        int amountOfCrushedOre = property.getOreMultiplier();
        if (smeltingMaterial.hasProperty(PropertyKey.INGOT)) {
            ingotStack = ChemicalHelper.get(ingot, smeltingMaterial);
        } else if (smeltingMaterial.hasProperty(PropertyKey.GEM)) {
            ingotStack = ChemicalHelper.get(gem, smeltingMaterial);
        } else {
            ingotStack = ChemicalHelper.get(dust, smeltingMaterial);
        }
        ingotStack.setCount(ingotStack.getCount() * property.getOreMultiplier());
        crushedStack.setCount(crushedStack.getCount() * property.getOreMultiplier());

        if (!crushedStack.isEmpty()) {
            GTRecipeBuilder builder = FORGE_HAMMER_RECIPES.recipeBuilder("hammer_" + orePrefix.name + "_" + material.getName() + "_to_crushed_ore")
                    .inputItems(orePrefix, material)
                    .duration(10).EUt(16);
            if (material.hasProperty(PropertyKey.GEM) && !gem.isIgnored(material)) {
                builder.outputItems(GTUtil.copyAmount(amountOfCrushedOre, ChemicalHelper.get(gem, material, crushedStack.getCount())));
            } else {
                builder.outputItems(GTUtil.copyAmount(amountOfCrushedOre, crushedStack));
            }
            builder.save(provider);

            MACERATOR_RECIPES.recipeBuilder("macerate_" + orePrefix.name + "_" + material.getName() + "_ore_to_crushed_ore")
                    .inputItems(orePrefix, material)
                    .outputItems(crushedStack)
                    .chancedOutput(crushedStack, 5000, 750)
                    .chancedOutput(crushedStack, 2500, 500)
                    .chancedOutput(crushedStack, 1250, 250)
                    .EUt(2)
                    .duration(400)
                    .save(provider);
        }

        //do not try to add smelting recipes for materials which require blast furnace
        if (!ingotStack.isEmpty() && doesMaterialUseNormalFurnace(smeltingMaterial) && !orePrefix.isIgnored(material)) {
            float xp = Math.round(((1 + property.getOreMultiplier() * 0.33f) / 3) * 10f) / 10f;
            VanillaRecipeHelper.addSmeltingRecipe(provider, "smelt_" + orePrefix.name + "_" + material.getName() + "_ore_to_ingot",
                    ChemicalHelper.getTag(orePrefix, material), ingotStack, xp);
            VanillaRecipeHelper.addBlastingRecipe(provider, "smelt_" + orePrefix.name + "_" + material.getName() + "_ore_to_ingot",
                    ChemicalHelper.getTag(orePrefix, material), ingotStack, xp);
        }

        if (!ConfigHolder.INSTANCE.recipes.disableManualCompression) {
            VanillaRecipeHelper.addShapedRecipe(provider, "compress_" + material.getName() + "_to_ore_block",
                    ChemicalHelper.get(rawOreBlock, material),
                    "BBB", "BBB", "BBB",
                    'B', ChemicalHelper.getTag(rawOre, material));
            VanillaRecipeHelper.addShapelessRecipe(provider, "decompress_" + material.getName() + "_from_ore_block",
                    ChemicalHelper.get(rawOre, material, 9),
                    ChemicalHelper.getTag(rawOreBlock, material));
            COMPRESSOR_RECIPES.recipeBuilder("compress_" + material.getName() + "to_ore_block")
                    .inputItems(rawOre, material, 9)
                    .outputItems(rawOreBlock, material)
                    .duration(300).EUt(2).save(provider);
        }
    }

*/ 
// Ore
/*

public static void processOre(TagPrefix orePrefix, Material material, OreProperty property, Consumer<FinishedRecipe> provider) {
        Material byproductMaterial = GTUtil.selectItemInList(0, material, property.getOreByProducts(), Material.class);
        ItemStack ingotStack;
        ItemStack byproductStack = ChemicalHelper.get(gem, byproductMaterial);
        if (byproductStack.isEmpty()) byproductStack = ChemicalHelper.get(dust, byproductMaterial);
        Material smeltingMaterial = property.getDirectSmeltResult() == null ? material : property.getDirectSmeltResult();
        ItemStack crushedStack = ChemicalHelper.get(crushed, material);

        if (smeltingMaterial.hasProperty(PropertyKey.INGOT)) {
            ingotStack = ChemicalHelper.get(ingot, smeltingMaterial);
        } else if (smeltingMaterial.hasProperty(PropertyKey.GEM)) {
            ingotStack = ChemicalHelper.get(gem, smeltingMaterial);
        } else {
            ingotStack = ChemicalHelper.get(dust, smeltingMaterial);
        }
        int oreMultiplier = TagPrefix.ORES.get(orePrefix).isNether() ? 2 : 1;
        ingotStack.setCount(ingotStack.getCount() * oreMultiplier);

        String prefixString = orePrefix == ore ? "" : orePrefix.name + "_";
        if (!crushedStack.isEmpty()) {
            GTRecipeBuilder builder = FORGE_HAMMER_RECIPES.recipeBuilder("hammer_" + prefixString + material.getName() + "_ore_to_raw_ore")
                    .inputItems(orePrefix, material)
                    .duration(10).EUt(16);
            if (material.hasProperty(PropertyKey.GEM) && !gem.isIgnored(material)) {
                builder.outputItems(GTUtil.copyAmount(oreMultiplier, ChemicalHelper.get(gem, material, crushedStack.getCount())));
            } else {
                builder.outputItems(GTUtil.copyAmount(oreMultiplier, crushedStack));
            }
            builder.save(provider);

            builder = MACERATOR_RECIPES.recipeBuilder("macerate_" + prefixString + material.getName() + "_ore_to_raw_ore")
                    .inputItems(orePrefix, material)
                    .outputItems(GTUtil.copyAmount(2 * oreMultiplier, crushedStack))
                    .chancedOutput(byproductStack, 1400, 850)
                    .EUt(2)
                    .duration(400);

            Material outputDustMat = GTRegistries.MATERIALS.get(FormattingUtil.toLowerCaseUnder(orePrefix.name));
            if (outputDustMat != null) {
                builder.outputItems(dust, outputDustMat);
            }

            builder.save(provider);
        }

        //do not try to add smelting recipes for materials which require blast furnace
        if (!ingotStack.isEmpty() && doesMaterialUseNormalFurnace(smeltingMaterial) && !orePrefix.isIgnored(material)) {
            float xp = Math.round(((1 + oreMultiplier * 0.5f) * 0.5f - 0.05f) * 10f) / 10f;
            VanillaRecipeHelper.addSmeltingRecipe(provider, "smelt_" + prefixString + material.getName() + "_ore_to_ingot",
                    ChemicalHelper.getTag(orePrefix, material), ingotStack, xp);
            VanillaRecipeHelper.addBlastingRecipe(provider, "smelt_" + prefixString + material.getName() + "_ore_to_ingot",
                    ChemicalHelper.getTag(orePrefix, material), ingotStack, xp);
        }
    }

*/