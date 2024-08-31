// priority: 1

/**
 * Событие регистрации предметов.
 */
StartupEvents.registry('item', event => {
    registerGTCEuItems(event)
})

/**
 * Событие регистрации блоков.
 */
StartupEvents.registry('block', event => {
    // registerGTCEuBlocks(event)

    
})

/**
 * Событие изменения блоков.
 */
BlockEvents.modification(event => {
    // modifyFirmaCivBlocks(event)
})

/**
 * Событие изменения предметов.
 */
ItemEvents.modification(event => {})

/**
 * Событие регистрации жидкостей.
 */
StartupEvents.registry('fluid', event => {})

/**
 * Событие регистрации типов рецептов.
 */
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    // registerGTCEuRecipeTypes(event)
})

/**
 * Событие регистрации механизмов.
 */
GTCEuStartupEvents.registry('gtceu:machine', event => {
    // registerGTCEuMachines(event)
})

/**
 * Событие регистрации слоев пород GTM.
 */
GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    registerGTMWorldGenLayers(event)
})

/**
 * Событие регистрации информации о составе предмета.
 */
// TFGStartupEvents.materialInfo(event => {
//     registerGTCEuMaterialInfo(event)
// })


//    /**
//     * Отключение рецепта генерации nugget'ов из слитков, если nugget'а нет.
//     */
//    @Redirect(method = "processIngot", at = @At(value = "INVOKE", target = "Lcom/gregtechceu/gtceu/data/recipe/builder/GTRecipeBuilder;save(Ljava/util/function/Consumer;)V", ordinal = 3), remap = false)
//    private static void tfg$processIngot$gtRecipeBuilder$save$nugget(GTRecipeBuilder instance, Consumer<FinishedRecipe> consumer, TagPrefix ingotPrefix, Material material, IngotProperty property) {
//        if (!ChemicalHelper.get(TagPrefix.nugget, material).isEmpty()) {
//            instance.save(consumer);
//        }
//    }
//
//    /**
//     * В GT при добавлении предмета в output или input сразу проверяется empty ли он,
//     * чтобы отключить рецепт не хватит просто его не сохранять в некоторых случаях.
//     * Если output'а или input'а нет, то нужно будет еще задать условие и какой-то предмет который существует,
//     * собственно это мы тут и делаем.
//     */
//    @Redirect(method = "processIngot", at = @At(value = "INVOKE", target = "Lcom/gregtechceu/gtceu/data/recipe/builder/GTRecipeBuilder;outputItems(Lcom/gregtechceu/gtceu/api/data/tag/TagPrefix;Lcom/gregtechceu/gtceu/api/data/chemical/material/Material;I)Lcom/gregtechceu/gtceu/data/recipe/builder/GTRecipeBuilder;", ordinal = 1), remap = false)
//    private static GTRecipeBuilder tfg$processIngot$gtRecipeBuilder$outputItems(GTRecipeBuilder instance, TagPrefix orePrefix, Material material, int count) {
//        if (!ChemicalHelper.get(TagPrefix.nugget, material).isEmpty()) {
//            instance.outputItems(TagPrefix.nugget, material, 9);
//        }
//        return instance;
//    }
//
//    /**
//     * Отключение генерации рецептов: 2 слитка + молот = пластина (верстак).
//     * */
//    @Redirect(method = "processIngot", at = @At(value = "INVOKE", target = "Lcom/gregtechceu/gtceu/data/recipe/VanillaRecipeHelper;addShapedRecipe(Ljava/util/function/Consumer;Ljava/lang/String;Lnet/minecraft/world/item/ItemStack;[Ljava/lang/Object;)V", ordinal = 2), remap = false)
//    private static void tfg$processIngot$addShapedRecipe$plate(Consumer<FinishedRecipe> provider, String regName, ItemStack result, Object[] recipe) {}
//
//    /**
//     * Отключение генерации рецептов: 9 слитков -> блок. (Компрессор)
//     */
//    @Redirect(method = "processIngot", at = @At(value = "INVOKE", target = "Lcom/gregtechceu/gtceu/data/recipe/builder/GTRecipeBuilder;save(Ljava/util/function/Consumer;)V", ordinal = 5), remap = false)
//    private static void tfg$processIngot$gtRecipeBuilder$save$block(GTRecipeBuilder instance, Consumer<FinishedRecipe> consumer) {}

//    /**
//     * Отключение генерации рецептов: 2 пластины + молот = двойная пластина (верстак).
//     * */
//    @Redirect(method = "processPlateDouble", at = @At(value = "INVOKE", target = "Lcom/gregtechceu/gtceu/data/recipe/VanillaRecipeHelper;addShapedRecipe(Ljava/util/function/Consumer;Ljava/lang/String;Lnet/minecraft/world/item/ItemStack;[Ljava/lang/Object;)V"), remap = false)
//    private static void tfg$processPlateDouble$vanillaRecipeHelper$addShapedRecipe$doublePlate(Consumer<FinishedRecipe> provider, String regName, ItemStack result, Object[] recipe) {}
//
//    /**
//     * Отключение генерации рецептов: 2 стержня + молот = длинный стержень (верстак).
//     * */
//    @Redirect(method = "processLongStick", at = @At(value = "INVOKE", target = "Lcom/gregtechceu/gtceu/data/recipe/VanillaRecipeHelper;addShapedRecipe(Ljava/util/function/Consumer;Ljava/lang/String;Lnet/minecraft/world/item/ItemStack;[Ljava/lang/Object;)V", ordinal = 3), remap = false)
//    private static void tfg$processLongStick$vanillaRecipeHelper$addShapedRecipe$longStick(Consumer<FinishedRecipe> provider, String regName, ItemStack result, Object[] recipe) {}