// priority: 0

const registerGTRecipes = (event) => {
    event.remove({id: 'gtceu:shaped/chainmail_boots'})
    event.remove({id: 'gtceu:shaped/chainmail_leggings'})
    event.remove({id: 'gtceu:shaped/chainmail_chestplate'})
    event.remove({id: 'gtceu:shaped/chainmail_helmet'})
    event.remove({id: 'gtceu:shaped/bronze_primitive_blast_furnace'})
    event.remove({id: 'gtceu:shaped/casing_primitive_bricks'})
    event.remove({id: 'gtceu:assembler/furnace'})

    // Fire Brick
    event.smelting('tfc:ceramic/fire_brick', 'gtceu:compressed_fireclay').id('gtceu:smelting/fireclay_brick')

    // TFC FireBrick -> FireBrick dust
    event.recipes.gtceu.macerator('macerator/macerate_firebrick')             
        .itemInputs('tfc:ceramic/fire_brick')
        .itemOutputs('gtceu:fireclay_dust')
        .duration(15)
        .EUt(2)

    // Bronze Steam Furnace
    event.shaped('gtceu:lp_steam_furnace', [
        'AAA', 
        'ABA',
        'ACA'  
    ], {
        A: 'gtceu:bronze_small_fluid_pipe',
        B: 'gtceu:bronze_brick_casing',  
        C: 'tfc:blast_furnace'  
    }).id('gtceu:shaped/steam_furnace_bronze')

    // Steel Steam Boiler
    event.shaped('gtceu:hp_steam_solid_boiler', [
        'AAA', 
        'ACA',
        'BDB'  
    ], {
        A: '#forge:plates/steel',
        B: 'minecraft:bricks',  
        C: '#forge:tools/wrenches',
        D: 'tfc:blast_furnace'
    }).id('gtceu:shaped/steam_boiler_coal_steel')

    // Bronze Steam Boiler
    event.shaped('gtceu:lp_steam_solid_boiler', [
        'AAA', 
        'ACA',
        'BDB'  
    ], {
        A: '#forge:plates/bronze',
        B: 'minecraft:bricks',  
        C: '#forge:tools/wrenches',
        D: 'tfc:blast_furnace'
    }).id('gtceu:shaped/steam_boiler_coal_bronze')

    // Bronze Alloy Smelter
    event.shaped('gtceu:lp_steam_alloy_smelter', [
        'AAA', 
        'BCB',
        'AAA'  
    ], {
        A: 'gtceu:bronze_small_fluid_pipe',
        B: 'tfc:blast_furnace',  
        C: 'gtceu:bronze_brick_casing'
    }).id('gtceu:shaped/steam_alloy_smelter_bronze')

    // Multi-Smelter
    event.shaped('gtceu:multi_smelter', [
        'AAA', 
        'BCB',
        'DBD'  
    ], {
        A: 'gtceu:hp_steam_furnace',
        B: '#forge:circuits/hv',  
        C: 'gtceu:heatproof_machine_casing',
        D: 'gtceu:copper_single_cable'
    }).id('gtceu:shaped/multi_furnace')

    // Multi-Smelter
    event.shaped('gtceu:electric_blast_furnace', [
        'AAA', 
        'BCB',
        'DBD'  
    ], {
        A: 'gtceu:hp_steam_furnace',
        B: '#forge:circuits/lv',  
        C: 'gtceu:heatproof_machine_casing',
        D: 'gtceu:tin_single_cable'
    }).id('gtceu:shaped/electric_blast_furnace')

    
    // White Dye Recipes
    event.remove({id: 'gtceu:extractor/lily_of_the_valley_dye'})
    event.recipes.gtceu.extractor('extractor/white_dye')             
        .itemInputs('1x #tfc:makes_white_dye')
        .itemOutputs('2x minecraft:white_dye')
        .duration(200)
        .EUt(2)

    // Red Dye Recipes
    event.remove({id: 'gtceu:extractor/rose_bush_dye'})
    event.remove({id: 'gtceu:extractor/red_tulip_dye'})
    event.remove({id: 'gtceu:extractor/poppy_dye'})
    event.remove({id: 'gtceu:extractor/beetroot_dye'})
    event.recipes.gtceu.extractor('extractor/red_dye')             
        .itemInputs('1x #tfc:makes_red_dye')
        .itemOutputs('2x minecraft:red_dye')
        .duration(200)
        .EUt(2)

    // Lime Dye Recipes
    event.remove({id: 'gtceu:extractor/rose_bush_dye'})
    event.remove({id: 'gtceu:extractor/red_tulip_dye'})
    event.remove({id: 'gtceu:extractor/poppy_dye'})
    event.remove({id: 'gtceu:extractor/beetroot_dye'})
    event.recipes.gtceu.extractor('extractor/lime_dye')             
        .itemInputs('1x tfc:plant/moss')
        .itemOutputs('2x minecraft:lime_dye')
        .duration(200)
        .EUt(2)

    // Light Blue Dye Recipes
    event.remove({id: 'gtceu:extractor/blue_orchid_dye'})
    event.recipes.gtceu.extractor('extractor/light_blue_dye')             
        .itemInputs('1x #tfc:makes_light_blue_dye')
        .itemOutputs('2x minecraft:light_blue_dye')
        .duration(200)
        .EUt(2)

    // Green Dye Recipes
    event.recipes.gtceu.extractor('extractor/green_dye')             
        .itemInputs('1x #tfc:makes_green_dye')
        .itemOutputs('2x minecraft:green_dye')
        .duration(200)
        .EUt(2)

    // Magenta Dye Recipes
    event.remove({id: 'gtceu:extractor/lilac_dye'})
    event.remove({id: 'gtceu:extractor/allium_dye'})
    event.recipes.gtceu.extractor('extractor/magenta_dye')             
        .itemInputs('1x #tfc:makes_magenta_dye')
        .itemOutputs('2x minecraft:magenta_dye')
        .duration(200)
        .EUt(2)

    // Orange Dye Recipes
    event.remove({id: 'gtceu:extractor/orange_tulip_dye'})
    event.recipes.gtceu.extractor('extractor/orange_dye')             
        .itemInputs('1x #tfc:makes_orange_dye')
        .itemOutputs('2x minecraft:orange_dye')
        .duration(200)
        .EUt(2)

    // Purple Dye Recipes
    event.recipes.gtceu.extractor('extractor/purple_dye')             
        .itemInputs('1x #tfc:makes_purple_dye')
        .itemOutputs('2x minecraft:purple_dye')
        .duration(200)
        .EUt(2)

    // Brown Dye Recipes
    event.recipes.gtceu.extractor('extractor/brown_dye')             
        .itemInputs('1x #tfc:makes_brown_dye')
        .itemOutputs('2x minecraft:brown_dye')
        .duration(200)
        .EUt(2)

    // Light Gray Dye Recipes
    event.recipes.gtceu.extractor('extractor/light_gray_dye')             
        .itemInputs('1x tfc:plant/yucca')
        .itemOutputs('2x minecraft:light_gray_dye')
        .duration(200)
        .EUt(2)

    // Yellow Dye Recipes
    event.remove({id: 'gtceu:extractor/sunflower_dye'})
    event.remove({id: 'gtceu:extractor/dandelion_dye'})
    event.recipes.gtceu.extractor('extractor/yellow_dye')             
        .itemInputs('1x #tfc:makes_yellow_dye')
        .itemOutputs('2x minecraft:yellow_dye')
        .duration(200)
        .EUt(2)

    // Blue Dye Recipes
    event.remove({id: 'gtceu:extractor/cornflower_dye'})
    event.recipes.gtceu.extractor('extractor/blue_dye')             
        .itemInputs('1x #tfc:makes_blue_dye')
        .itemOutputs('2x minecraft:blue_dye')
        .duration(200)
        .EUt(2)

    // Pink Dye Recipes
    event.remove({id: 'gtceu:extractor/pink_tulip_dye'})
    event.remove({id: 'gtceu:extractor/peony_dye'})
    event.recipes.gtceu.extractor('extractor/pink_dye')             
        .itemInputs('1x #tfc:makes_pink_dye')
        .itemOutputs('2x minecraft:pink_dye')
        .duration(200)
        .EUt(2)
}