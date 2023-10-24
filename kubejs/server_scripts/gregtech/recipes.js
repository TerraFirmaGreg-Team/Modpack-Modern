// priority: 0

const registerGTrecipes = (event) => {
    
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