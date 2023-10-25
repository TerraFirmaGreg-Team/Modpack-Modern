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

            global.allTFCStoneTypeNames.forEach(stoneTypeName => {
                generateRecipesForOres(event, stoneTypeName, material)
            })
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

const generateRecipesForOres = (event, stoneTypeName, material) => {
    const materialOreProperty = material.getProperty($PropertyKey.ORE)
    let byproductMaterial = materialOreProperty.getOreByProducts()[0]
    if (byproductMaterial == null) byproductMaterial = material

    const ingotPrefix = TagPrefix.getPrefix('ingot')
    const gemPrefix = TagPrefix.getPrefix('gem')
    const dustPrefix = TagPrefix.getPrefix('dust')
    const crushedOrePrefix = TagPrefix.getPrefix('crushedOre')

    let ingotStack;
    let byproductStack = ChemicalHelper.get(gemPrefix, byproductMaterial, 1);
    if (byproductStack.isEmpty()) byproductStack = ChemicalHelper.get(dustPrefix, byproductMaterial, 1);
    const smeltingMaterial = materialOreProperty.getDirectSmeltResult() == null ? material : materialOreProperty.getDirectSmeltResult();
    const crushedStack = ChemicalHelper.get(crushedOrePrefix, material, 1);

    if (smeltingMaterial.hasProperty($PropertyKey.INGOT)) {
        ingotStack = ChemicalHelper.get(ingotPrefix, smeltingMaterial, 1);
    } else if (smeltingMaterial.hasProperty($PropertyKey.GEM)) {
        ingotStack = ChemicalHelper.get(gemPrefix, smeltingMaterial, 1);
    } else {
        ingotStack = ChemicalHelper.get(dustPrefix, smeltingMaterial, 1);
    }
    
    if (!crushedStack.isEmpty()) {
        let outputItems;
    
        if (material.hasProperty($PropertyKey.GEM) && !gemPrefix.isIgnored(material)) {
            outputItems = `1x gtceu:${material}_gem`
        } else {
            outputItems = `1x gtceu:${material}_crushed_ore`
        }

        const forgeHammerRecipeName = `hammer_${stoneTypeName}_${material}_ore_to_raw_ore`
        const maceratorRecipeName = `macerate_${stoneTypeName}_${material}_ore_to_raw_ore`
    
        const oreRecipeEntry = `1x gtceu:tfc_${stoneTypeName}_${material}_ore`
        const crushedRecipeEntry = `${crushedStack.getCount() * 2}x gtceu:${material}_crushed_ore`
        const stoneTypeMaterialEntry = `1x gtceu:${stoneTypeName}_dust`
        
        event.recipes.gtceu.forge_hammer(forgeHammerRecipeName)
            .itemInputs(oreRecipeEntry)
            .itemOutputs(outputItems)
            .duration(10).EUt(16);

        event.recipes.gtceu.macerator(maceratorRecipeName)
            .itemInputs(oreRecipeEntry)
            .itemOutputs(crushedRecipeEntry)
            .chancedOutput(byproductStack, 1400, 850)
            .chancedOutput(stoneTypeMaterialEntry, 5000, 850)
            .duration(10).EUt(16);
    }
    /*
    // do not try to add smelting recipes for materials which require blast furnace
    if (!ingotStack.isEmpty() && doesMaterialUseNormalFurnace(smeltingMaterial) && !orePrefix.isIgnored(material)) {
        float xp = Math.round(((1 + oreMultiplier * 0.5f) * 0.5f - 0.05f) * 10f) / 10f;
        VanillaRecipeHelper.addSmeltingRecipe(provider, "smelt_" + prefixString + material.getName() + "_ore_to_ingot",
                ChemicalHelper.getTag(orePrefix, material), ingotStack, xp);
        VanillaRecipeHelper.addBlastingRecipe(provider, "smelt_" + prefixString + material.getName() + "_ore_to_ingot",
                ChemicalHelper.getTag(orePrefix, material), ingotStack, xp);
    }*/
    
}