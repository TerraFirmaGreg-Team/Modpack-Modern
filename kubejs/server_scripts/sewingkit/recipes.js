const registerSewingkitRecipes = (event) => {

    // Удаление рецептов мода
    event.remove({ id: 'sewingkit:wood_sewing_needle'});
    event.remove({ id: 'sewingkit:stone_sewing_needle'});
    event.remove({ id: 'sewingkit:bone_sewing_needle'});
    event.remove({ id: 'sewingkit:gold_sewing_needle'});
    event.remove({ id: 'sewingkit:iron_sewing_needle'});
    event.remove({ id: 'sewingkit:diamond_sewing_needle'});
    event.remove({ id: 'sewingkit:netherite_sewing_needle'});
    event.remove({ id: 'sewingkit:wool_hat_via_sewing'});
    event.remove({ id: 'sewingkit:wool_shirt_via_sewing'});
    event.remove({ id: 'sewingkit:wool_pants_via_sewing'});
    event.remove({ id: 'sewingkit:wool_shoes_via_sewing'});
    event.remove({ id: 'sewingkit:file'});
    event.remove({ id: 'sewingkit:wool_trim_from_wool'});
    event.remove({ id: 'sewingkit:wool_trim_from_carpet'});
    event.remove({ id: 'sewingkit:wool_roll_from_wool'});
    event.remove({ id: 'sewingkit:wool_roll_from_carpet'});

    //needle
    event.shapeless(('sewingkit:iron_sewing_needle'), [
        '#forge:tools/files',
        '#forge:rods/iron'
    ]).id('sewingkit:iron_sewing_needle')

    event.shapeless('sewingkit:gold_sewing_needle', [
        '#forge:tools/files',
        '#forge:rods/gold'
    ]).id('sewingkit:gold_sewing_needle')

    event.shapeless('sewingkit:diamond_sewing_needle', [
        '#forge:tools/files',
        '#forge:rods/diamond'
    ]).id('sewingkit:diamond_sewing_needle')

    // event.custom({
    //     type: "sewingkit:sewing",
    //     materials: [
    //         {
    //         count: 12,
    //         ingredient: {
    //             "item": "sewingkit:leather_sheet"
    //         }},
    //         {
    //         count: 6,
    //         ingredient: {
    //             "item": "sewingkit:leather_strip"
    //         }},
    //         {
    //         count: 1,
    //         ingredient: {
    //             "tag": "forge:string"
    //         }}],
    //     result: {
    //         "item": "create:belt"
    //     },
    //     tool: {
    //         type: "sewingkit:tool_ingredient",
    //         tool_level: "minecraft:iron",
    //         tool_type: "sewingkit_sew"
    // }}).id('sewingkit:tool_ingredient')
}