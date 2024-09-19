// priority: 0

const registerGregTechItemTags = (event) => {
    
    //#region Базовые теги для инструментов GregTech
    GTMaterialRegistry.getRegisteredMaterials().forEach(material => {
        if (material.hasProperty(PropertyKey.TOOL)) {
            
            //#region Меч
            const swordType = GTToolType.SWORD;
            const swordTool = ToolHelper.get(swordType, material)

            if (!swordTool.isEmpty()) event.add('forge:tools/swords', swordTool.getItem().getId())
            //#endregion
            
            //#region Кирка
            const pickaxeType = GTToolType.PICKAXE;
            const pickaxeTool = ToolHelper.get(pickaxeType, material)

            if (!pickaxeTool.isEmpty()) event.add('forge:tools/pickaxes', pickaxeTool.getItem().getId())
            //#endregion

            //#region Топор
            const axeType = GTToolType.AXE;
            const axeTool = ToolHelper.get(axeType, material)

            if (!axeTool.isEmpty()) event.add('forge:tools/axes', axeTool.getItem().getId())
            //#endregion
            
            //#region Лопата
            const shovelType = GTToolType.SHOVEL;
            const shovelTool = ToolHelper.get(shovelType, material)

            if (!shovelTool.isEmpty()) event.add('forge:tools/shovels', shovelTool.getItem().getId())
            //#endregion

            //#region Мотыга
            const hoeType = GTToolType.HOE;
            const hoeTool = ToolHelper.get(hoeType, material)

            if (!hoeTool.isEmpty()) event.add('forge:tools/hoes', hoeTool.getItem().getId())
            //#endregion
        }
    })
    //#endregion
    
    //#region Пыли пород в один тэг
    event.add('tfg:stone_dusts', 'gtceu:gabbro_dust')
    event.add('tfg:stone_dusts', 'gtceu:shale_dust')
    event.add('tfg:stone_dusts', 'gtceu:claystone_dust')
    event.add('tfg:stone_dusts', 'gtceu:limestone_dust')
    event.add('tfg:stone_dusts', 'gtceu:conglomerate_dust')
    event.add('tfg:stone_dusts', 'gtceu:dolomite_dust')
    event.add('tfg:stone_dusts', 'gtceu:chert_dust')
    event.add('tfg:stone_dusts', 'gtceu:chalk_dust')
    event.add('tfg:stone_dusts', 'gtceu:rhyolite_dust')
    event.add('tfg:stone_dusts', 'gtceu:dacite_dust')
    event.add('tfg:stone_dusts', 'gtceu:quartzite_dust')
    event.add('tfg:stone_dusts', 'gtceu:slate_dust')
    event.add('tfg:stone_dusts', 'gtceu:phyllite_dust')
    event.add('tfg:stone_dusts', 'gtceu:schist_dust')
    event.add('tfg:stone_dusts', 'gtceu:gneiss_dust')
    event.add('tfg:stone_dusts', 'gtceu:marble_dust')
    event.add('tfg:stone_dusts', 'gtceu:basalt_dust')
    event.add('tfg:stone_dusts', 'gtceu:diorite_dust')
    event.add('tfg:stone_dusts', 'gtceu:andesite_dust')
    event.add('tfg:stone_dusts', 'gtceu:granite_dust')

    event.add('tfg:stone_dusts', 'gtceu:stone_dust')
    //#endregion

    //#region Объединение некоторых предметов из WroughtIron и Iron в один тег
    event.add('tfg:all_iron_screws', 'gtceu:iron_screw')
    event.add('tfg:all_iron_screws', 'gtceu:wrought_iron_screw')

    event.add('tfg:all_iron_rings', 'gtceu:iron_ring')
    event.add('tfg:all_iron_rings', 'gtceu:wrought_iron_ring')

    event.add('tfg:all_iron_bolts', 'gtceu:iron_bolt')
    event.add('tfg:all_iron_bolts', 'gtceu:wrought_iron_bolt')

    event.add('tfg:all_iron_springs', 'gtceu:iron_spring')
    event.add('tfg:all_iron_springs', 'gtceu:wrought_iron_spring')

    event.add('tfg:all_iron_nuggets', 'minecraft:iron_nugget')
    event.add('tfg:all_iron_nuggets', 'gtceu:wrought_iron_nugget')
    //#endregion

    //#region Скрываем все руды (не используем #forge:ores, потому что будет пересечение)
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/red_granite') //todo: может его удалить?
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/marble')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/netherrack')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/blackstone')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/gabbro')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/shale')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/claystone')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/limestone')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/conglomerate')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/dolomite')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/chert')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/rhyolite')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/dacite')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/quartzite')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/slate')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/phyllite')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/schist')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/gneiss')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/basalt')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/diorite')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/andesite')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/granite')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/chalk')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/moon')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/mars')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/venus')
    event.add('c:hidden_from_recipe_viewers', '#forge:ores_in_ground/mercury')
    //#endregion

    // Удаление тегов и скрытие предметов
    // global.GTCEU_DISABLED_ITEMS.forEach(item => {
    //     event.removeAllTagsFrom(item)
    //     event.add('c:hidden_from_recipe_viewers', item)
    // })

    // Скрытие предметов
    // global.GTCEU_HIDED_ITEMS.forEach(item => {
    //     event.add('c:hidden_from_recipe_viewers', item)
    // })
}

const registerGregTechBlockTags = (event) => {
    
    // Удаление тегов и скрытие предметов
    // global.GTCEU_DISABLED_ITEMS.forEach(item => {
    //     event.removeAllTagsFrom(item)
    // })
}
