// priority: 0

const registerGregTechMaterialInfo = (event) => {
    
    //#region Ванильное незер дерево
    global.MINECRAFT_NETHER_WOOD_TYPES.forEach(woodName => {
        const trapdoor = Item.of(`minecraft:${woodName}_trapdoor`)
        const pressurePlate = Item.of(`minecraft:${woodName}_pressure_plate`)
        const button = Item.of(`minecraft:${woodName}_button`)
        const sign = Item.of(`minecraft:${woodName}_sign`)
        const hangingSign = Item.of(`minecraft:${woodName}_hanging_sign`)

        const trapdoorMaterialInfo = new ItemMaterialInfo(new MaterialStack(GTMaterials.Wood, GTValues.M))
        const pressurePlateMaterialInfo = new ItemMaterialInfo(new MaterialStack(GTMaterials.Wood, GTValues.M))
        const buttonMaterialInfo = new ItemMaterialInfo(new MaterialStack(GTMaterials.Wood, GTValues.M / 9))
        const signMaterialInfo = new ItemMaterialInfo(new MaterialStack(GTMaterials.Wood, GTValues.M))
        const hangingButtonMaterialInfo = new ItemMaterialInfo(new MaterialStack(GTMaterials.Wood, GTValues.M))

        event.add(trapdoor, trapdoorMaterialInfo);
        event.add(pressurePlate, pressurePlateMaterialInfo);
        event.add(button, buttonMaterialInfo);
        event.add(sign, signMaterialInfo);
        event.add(hangingSign, hangingButtonMaterialInfo);
        
    })
    //#endregion

    //#region ТФК дерево
    global.TFC_WOOD_TYPES.forEach(woodName => {
        
    })
    //#endregion
    

    //#region Дерево
    // ChemicalHelper.ITEM_MATERIAL_INFO.remove(Item.of('minecraft:acacia_planks'))

    // global.MINECRAFT_ALL_WOOD_TYPES.forEach(woodType => {
    //     event.remove(`minecraft:${woodType}_planks`)
    //     event.remove(`minecraft:${woodType}_stairs`)
    //     event.remove(`minecraft:${woodType}_slab`)
    //     event.remove(`minecraft:${woodType}_fence`)
    //     event.remove(`minecraft:${woodType}_fence_gate`)
    //     event.remove(`minecraft:${woodType}_door`)
    //     event.remove(`minecraft:${woodType}_button`)
    //     event.remove(`minecraft:${woodType}_boat`)
    // })

    // Сундуки
    // removeMaterialInfo(Blocks.CHEST);
    // removeMaterialInfo(Blocks.TRAPPED_CHEST);

    // Верстаки
    // removeMaterialInfo(Blocks.CRAFTING_TABLE);

    //#endregion

    // const testMaterial1 = GTMaterials.Copper;
    // const testMaterial2 = GTMaterials.Tin;

    // const b = new ItemMaterialInfo(
    //     new MaterialStack(testMaterial1, GTValues.M),
    //     new MaterialStack(testMaterial2, GTValues.M)
    // );

    // event.remove("minecraft:acacia_planks");

    // event.add("minecraft:acacia_planks", b);
}

//    private static void processDoubleIngot(TagPrefix prefix, Material material, TFCProperty property, Consumer<FinishedRecipe> provider) {
//        var ingotStack = ChemicalHelper.get(ingot, material);
//        var doubleIngotStack = ChemicalHelper.get(prefix, material);
//
//        EXTRACTOR_RECIPES.recipeBuilder(TFGCore.id("extract_" + material.getName() + "_double_ingot"))
//                .EUt(VA[ULV]).duration((int) material.getMass())
//                .inputItems(doubleIngotStack)
//                .outputFluids(material.getFluid(288))
//                .save(provider);
//
//        MACERATOR_RECIPES.recipeBuilder(TFGCore.id("macerate_" + material.getName() + "_double_ingot"))
//                .EUt(VA[ULV]).duration((int) material.getMass())
//                .inputItems(doubleIngotStack)
//                .outputItems(dust, material, 2)
//                .save(provider);
//    }
