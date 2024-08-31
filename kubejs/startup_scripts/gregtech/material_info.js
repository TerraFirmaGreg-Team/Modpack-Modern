// priority: 0

const registerGTCEuMaterialInfo = (event) => {
    //#region Дерево

    global.VANILLA_WOOD_TYPES.forEach(woodType => {
        event.remove(`minecraft:${woodType}_planks`)
        event.remove(`minecraft:${woodType}_stairs`)
        event.remove(`minecraft:${woodType}_slab`)
        event.remove(`minecraft:${woodType}_fence`)
        event.remove(`minecraft:${woodType}_fence_gate`)
        event.remove(`minecraft:${woodType}_door`)
        event.remove(`minecraft:${woodType}_button`)
        event.remove(`minecraft:${woodType}_boat`)
    })

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
};
