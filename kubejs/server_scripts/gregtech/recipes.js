// priority: 0

const registerGTCEURecipes = (event) => {
    
    //#region Выход: Удобрение

    // В обычном миксере
    event.recipes.gtceu.mixer('fertilizer')             
        .itemInputs(
            '#tfc:dirt',
            '2x #forge:dusts/wood',
            '4x #forge:sand'
        )
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .itemOutputs('4x gtceu:fertilizer')
        .duration(300)
        .EUt(30)

    // В create миксере
    event.recipes.gtceu.create_mixer('fertilizer')             
        .itemInputs(
            '#tfc:dirt',
            '2x #forge:dusts/wood',
            '4x #forge:sand'
        )
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .itemOutputs('4x gtceu:fertilizer')
        .duration(300)
        .EUt(30)
        .rpm(96)

    //#endregion

    //#region Выход: Кварцевый песок

    event.shaped('gtceu:quartz_sand_dust', [
        'A', 
        'B'
    ], {
        A: '#forge:sand',
        B: '#forge:tools/mortars'
    }).id('gtceu:shaped/quartz_sand')

    event.recipes.gtceu.macerator('quartz_sand_from_sand')             
        .itemInputs('#forge:sand')
        .itemOutputs('gtceu:quartz_sand_dust')
        .duration(30)
        .EUt(2)

    //#endregion

    //#region Выход: Диоксид силикона

    event.recipes.gtceu.electrolyzer('sand_electrolysis')             
        .itemInputs('8x #forge:sand')
        .itemOutputs('gtceu:silicon_dioxide_dust')
        .duration(500)
        .EUt(25)

    //#endregion

    //#region Выход: Соленая пыль + Вода

    // Декрафт в центрифуге
    event.recipes.gtceu.centrifuge('centrifuging_tfc_salt_water')             
        .inputFluids(Fluid.of('tfc:salt_water', 1000))
        .itemOutputs('1x gtceu:salt_dust')
        .outputFluids(Fluid.of('minecraft:water', 500))
        .duration(51)
        .EUt(30)

    // Декрафт в электролайзере
    event.recipes.gtceu.electrolyzer('electrolyze_tfc_salt_water')             
        .inputFluids(Fluid.of('tfc:salt_water', 1000))
        .itemOutputs('1x gtceu:sodium_hydroxide_dust', '2x gtceu:sodium_hydroxide_small_dust')
        .outputFluids(Fluid.of('gtceu:chlorine', 500), Fluid.of('gtceu:hydrogen', 500))
        .duration(720)
        .EUt(30)

    //#endregion

    //#region Выход: Крошечная кучка камня

    event.remove({ id: 'gtceu:macerator/macerate_stone_button' })

    //#endregion
    
    //#region Выход: Маленькая кучка камня

    event.remove({ id: 'gtceu:macerator/macerate_stone_stairs' })
    event.remove({ id: 'gtceu:macerator/macerate_stone_slab' })
    event.remove({ id: 'gtceu:macerator/macerate_stone_brick_stairs' })
    event.remove({ id: 'gtceu:macerator/macerate_stone_brick_slab' })
    event.remove({ id: 'gtceu:macerator/macerate_sandstone_stairs' })
    event.remove({ id: 'gtceu:macerator/macerate_sandstone_slab' })
    event.remove({ id: 'gtceu:macerator/macerate_red_sandstone_stairs' })
    event.remove({ id: 'gtceu:macerator/macerate_red_sandstone_slab' })
    event.remove({ id: 'gtceu:macerator/macerate_granite' })
    event.remove({ id: 'gtceu:macerator/macerate_diorite' })
    event.remove({ id: 'gtceu:macerator/macerate_cobblestone_slab' })
    event.remove({ id: 'gtceu:macerator/macerate_andesite' })

    //#endregion
    
    //#region Выход: Кучка камня

    event.remove({ id: 'gtceu:macerator/macerate_stone_sword' })
    event.remove({ id: 'gtceu:macerator/macerate_stone_shovel' })
    event.remove({ id: 'gtceu:macerator/macerate_stone_pressure_plate' })
    event.remove({ id: 'gtceu:macerator/macerate_stone_pickaxe' })
    event.remove({ id: 'gtceu:macerator/macerate_stone_hoe' })
    event.remove({ id: 'gtceu:macerator/macerate_stone_bricks' })
    event.remove({ id: 'gtceu:macerator/macerate_stone_axe' })
    event.remove({ id: 'gtceu:macerator/macerate_mossy_cobblestone' })
    event.remove({ id: 'gtceu:macerator/macerate_cobblestone_wall' })
    event.remove({ id: 'gtceu:macerator/macerate_cobblestone' })
    event.remove({ id: 'gtceu:macerator/gravel_to_flint' })
    event.remove({ id: 'gtceu:macerator/macerate_furnace' })

    //#endregion

    //#region Выход: Каменный стержень

    // Из сырого камня
    event.recipes.gtceu.lathe('stone_rod_from_stone')             
        .itemInputs('#tfc:rock/raw')
        .itemOutputs('gtceu:stone_rod', 'gtceu:stone_small_dust')
        .duration(15)
        .EUt(2)

    // Из булыжника
    event.recipes.gtceu.lathe('stone_rod_from_cobblestone')             
        .itemInputs('#forge:cobblestone')
        .itemOutputs('gtceu:stone_rod', 'gtceu:stone_small_dust')
        .duration(15)
        .EUt(2)

    //#endregion

    //#region Выход: Сырая резиновая пыль
    
    // Из бревна капока
    event.recipes.gtceu.extractor('raw_rubber_from_log')             
        .itemInputs('#tfc:kapok_logs')
        .itemOutputs('gtceu:raw_rubber_dust')
        .duration(300)
        .EUt(2)

    // Из саженца капока
    event.recipes.gtceu.extractor('raw_rubber_from_sapling')             
        .itemInputs('tfc:wood/sapling/kapok')
        .itemOutputs('gtceu:raw_rubber_dust')
        .duration(300)
        .EUt(2)

    // Из листвы капока
    event.recipes.gtceu.extractor('raw_rubber_from_leaves')             
        .itemInputs('16x tfc:wood/leaves/kapok')
        .itemOutputs('gtceu:raw_rubber_dust')
        .duration(300)
        .EUt(2)

    //#endregion

    //#region Выход: Пропитанные доски

    event.shaped('8x gtceu:treated_wood_planks', [
        'AAA', 
        'ABA',
        'AAA'
    ], {
        A: '#minecraft:planks',
        B: Item.of('tfc:wooden_bucket', '{fluid:{Amount:1000,FluidName:"gtceu:creosote"}}').strongNBT()
    }).id('tfg:shaped/treated_wood_planks_wood_bucket')

    event.shaped('8x gtceu:treated_wood_planks', [
        'AAA', 
        'ABA',
        'AAA'
    ], {
        A: '#minecraft:planks',
        B: Item.of('tfc:metal/bucket/red_steel', '{fluid:{Amount:1000,FluidName:"gtceu:creosote"}}').strongNBT()
    }).id('tfg:shaped/treated_wood_planks_red_steel_bucket')

    event.shaped('8x gtceu:treated_wood_planks', [
        'AAA', 
        'ABA',
        'AAA'
    ], {
        A: '#minecraft:planks',
        B: Item.of('tfc:metal/bucket/blue_steel', '{fluid:{Amount:1000,FluidName:"gtceu:creosote"}}').strongNBT()
    }).id('tfg:shaped/treated_wood_planks_blue_steel_bucket')

    //#endregion

    //#region Выход: Капля резины

    // Из латекса
    event.recipes.tfc.pot('tfc:powder/sulfur', Fluid.of('gtceu:latex', 1000), 5000, 300)
        .itemOutput('gtceu:sticky_resin')
        .id('tfg:pot/sticky_resin')

    // Из бревна капока
    event.recipes.gtceu.centrifuge('rubber_log_separation')             
        .itemInputs('#tfc:kapok_logs')
        .chancedOutput('gtceu:sticky_resin', 5000, 1200)
        .chancedOutput('gtceu:plant_ball', 3750, 900)
        .chancedOutput('gtceu:carbon_dust', 2500, 600)
        .chancedOutput('gtceu:wood_dust', 2500, 700)
        .outputFluids(Fluid.of('gtceu:methane', 60))
        .duration(200)
        .EUt(20)

    //#endregion

    //#region Выход: Растительный шарик

    // 8x Ванильная растительность -> Plant Ball (Compressor)
    event.remove({id: 'gtceu:compressor/plant_ball_from_wheat'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_warped_stem'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_crimson_stem'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_tube_coral'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_sugar_cane'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_red_mushroom'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_potato'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_nether_wart'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_horn_coral'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_fire_coral'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_carrot'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_cactus'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_bubble_coral'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_brown_mushroom'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_brain_coral'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_beetroot'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_moss'})

    event.recipes.gtceu.compressor('plant_ball_from_tfc_seeds')             
        .itemInputs('8x #tfc:seeds')
        .itemOutputs('gtceu:plant_ball')
        .duration(300)
        .EUt(2)

    event.recipes.gtceu.compressor('plant_ball_from_tfc_food')             
        .itemInputs('8x #tfc:foods')
        .itemOutputs('gtceu:plant_ball')
        .duration(300)
        .EUt(2)

    event.recipes.gtceu.compressor('plant_ball_from_tfc_plants')             
        .itemInputs('8x #tfc:plants')
        .itemOutputs('gtceu:plant_ball')
        .duration(300)
        .EUt(2)

    event.recipes.gtceu.compressor('plant_ball_from_tfc_corals')             
        .itemInputs('8x #tfc:corals')
        .itemOutputs('gtceu:plant_ball')
        .duration(300)
        .EUt(2)

    //#endregion

    //#region Выход: Биомасса

    // Ванильная растительность -> Биомасса (Brewery)
    event.remove({id: 'gtceu:brewery/biomass_from_sugar_cane'})
    event.remove({id: 'gtceu:brewery/biomass_from_red_mushroom'})
    event.remove({id: 'gtceu:brewery/biomass_from_potato'})
    event.remove({id: 'gtceu:brewery/biomass_from_carrot'})
    event.remove({id: 'gtceu:brewery/biomass_from_cactus'})
    event.remove({id: 'gtceu:brewery/biomass_from_brown_mushroom'})
    event.remove({id: 'gtceu:brewery/biomass_from_beetroot'})

    event.recipes.gtceu.brewery('biomass_from_tfc_seeds')             
        .itemInputs('#tfc:seeds')
        .outputFluids(Fluid.of('gtceu:biomass', 20))
        .duration(128)
        .EUt(3)

    event.recipes.gtceu.brewery('biomass_from_tfc_food')             
        .itemInputs('#tfc:foods')
        .outputFluids(Fluid.of('gtceu:biomass', 20))
        .duration(128)
        .EUt(3)

    event.recipes.gtceu.brewery('biomass_from_tfc_plants')             
        .itemInputs('#tfc:plants')
        .outputFluids(Fluid.of('gtceu:biomass', 20))
        .duration(128)
        .EUt(3)

    event.recipes.gtceu.brewery('biomass_from_tfc_corals')             
        .itemInputs('#tfc:corals')
        .outputFluids(Fluid.of('gtceu:biomass', 20))
        .duration(128)
        .EUt(3)

    //#endregion

    //#region Выход: Рыбье масло

    event.remove({ id: 'gtceu:extractor/fish_oil_from_tropical_fish' })
    event.remove({ id: 'gtceu:extractor/fish_oil_from_salmon' })
    event.remove({ id: 'gtceu:extractor/fish_oil_from_pufferfish' })
    event.remove({ id: 'gtceu:extractor/fish_oil_from_cod' })

    event.recipes.gtceu.extractor(`tfg/fish_oil`)             
        .itemInputs('#minecraft:fishes')
        .outputFluids(Fluid.of('gtceu:fish_oil', 40))
        .duration(16)
        .EUt(4)

    //#endregion

    //#region Выход: Семянное масло

    event.remove({ id: 'gtceu:extractor/seed_oil_from_tag_seeds' })
    event.remove({ id: 'gtceu:extractor/seed_oil_from_pumpkin' })
    event.remove({ id: 'gtceu:extractor/seed_oil_from_melon' })
    event.remove({ id: 'gtceu:extractor/seed_oil_from_beetroot' })

    event.recipes.gtceu.extractor(`tfg/seed_oil`)             
        .itemInputs('#tfc:seeds')
        .outputFluids(Fluid.of('gtceu:seed_oil', 16))
        .duration(32)
        .EUt(2)

    //#endregion

    //#region Выход: Цемент

    generateMixerRecipe(
        event, 
        ['2x #tfg:stone_dusts', 'gtceu:marble_dust', 'gtceu:gypsum_dust'], 
        Fluid.of('minecraft:water', 1000),
        [],
        Fluid.of('gtceu:concrete', 1152),
        40,
        16,
        64,
        'concrete_from_marble'
    )

    generateMixerRecipe(
        event, 
        ['3x #tfg:stone_dusts', 'gtceu:clay_dust'], 
        Fluid.of('minecraft:water', 500),
        [],
        Fluid.of('gtceu:concrete', 576),
        20,
        16,
        64,
        'concrete_from_clay'
    )

    generateMixerRecipe(
        event, 
        ['3x #tfg:stone_dusts', 'gtceu:calcite_dust', 'gtceu:gypsum_dust'], 
        Fluid.of('minecraft:water', 1000),
        [],
        Fluid.of('gtceu:concrete', 1152),
        40,
        16,
        64,
        'concrete_from_calcite'
    )

    //#endregion

    //#region Выход: Бурильная жидкость
    
    generateMixerRecipe(
        event, 
        ['2x #tfg:stone_dusts'], 
        [Fluid.of('gtceu:lubricant', 20), Fluid.of('minecraft:water', 4000)],
        [],
        Fluid.of('gtceu:drilling_fluid', 5000),
        40,
        16,
        64,
        'drilling_fluid'
    )

    //#endregion

    //#region Выход: Крошечная кучка дерева

    event.remove({ id: 'gtceu:macerator/macerate_warped_button' })
    event.remove({ id: 'gtceu:macerator/macerate_spruce_button' })
    event.remove({ id: 'gtceu:macerator/macerate_oak_button' })
    event.remove({ id: 'gtceu:macerator/macerate_mangrove_button' })
    event.remove({ id: 'gtceu:macerator/macerate_jungle_button' })
    event.remove({ id: 'gtceu:macerator/macerate_dark_oak_button' })
    event.remove({ id: 'gtceu:macerator/macerate_crimson_button' })
    event.remove({ id: 'gtceu:macerator/macerate_cherry_button' })
    event.remove({ id: 'gtceu:macerator/macerate_birch_button' })
    event.remove({ id: 'gtceu:macerator/macerate_bamboo_button' })
    event.remove({ id: 'gtceu:macerator/macerate_acacia_button' })

    //#endregion

    //#region Выход: Маленькая кучка дерева

   event.remove({ id: 'gtceu:macerator/macerate_wooden_sword' })
   event.remove({ id: 'gtceu:macerator/macerate_wooden_shovel' })
   event.remove({ id: 'gtceu:macerator/macerate_wooden_pickaxe' })
   event.remove({ id: 'gtceu:macerator/macerate_wooden_hoe' })
   event.remove({ id: 'gtceu:macerator/macerate_wooden_axe' })
   event.remove({ id: 'gtceu:macerator/macerate_warped_stairs' })
   event.remove({ id: 'gtceu:macerator/macerate_warped_slab' })
   event.remove({ id: 'gtceu:macerator/macerate_spruce_stairs' })
   event.remove({ id: 'gtceu:macerator/macerate_spruce_slab' })
   event.remove({ id: 'gtceu:macerator/macerate_oak_stairs' })
   event.remove({ id: 'gtceu:macerator/macerate_oak_slab' })
   event.remove({ id: 'gtceu:macerator/macerate_mangrove_stairs' })
   event.remove({ id: 'gtceu:macerator/macerate_mangrove_slab' })
   event.remove({ id: 'gtceu:macerator/macerate_jungle_stairs' })
   event.remove({ id: 'gtceu:macerator/macerate_jungle_slab' })
   event.remove({ id: 'gtceu:macerator/macerate_iron_sword' })
   event.remove({ id: 'gtceu:macerator/macerate_iron_shovel' })
   event.remove({ id: 'gtceu:macerator/macerate_iron_pickaxe' })
   event.remove({ id: 'gtceu:macerator/macerate_iron_hoe' })
   event.remove({ id: 'gtceu:macerator/macerate_iron_axe' })
   event.remove({ id: 'gtceu:macerator/macerate_golden_sword' })
   event.remove({ id: 'gtceu:macerator/macerate_golden_shovel' })
   event.remove({ id: 'gtceu:macerator/macerate_golden_pickaxe' })
   event.remove({ id: 'gtceu:macerator/macerate_golden_hoe' })
   event.remove({ id: 'gtceu:macerator/macerate_golden_axe' })
   event.remove({ id: 'gtceu:macerator/macerate_diamond_sword' })
   event.remove({ id: 'gtceu:macerator/macerate_diamond_shovel' })
   event.remove({ id: 'gtceu:macerator/macerate_diamond_pickaxe' })
   event.remove({ id: 'gtceu:macerator/macerate_diamond_hoe' })
   event.remove({ id: 'gtceu:macerator/macerate_diamond_axe' })
   event.remove({ id: 'gtceu:macerator/macerate_dark_oak_stairs' })
   event.remove({ id: 'gtceu:macerator/macerate_dark_oak_slab' })
   event.remove({ id: 'gtceu:macerator/macerate_crimson_stairs' })
   event.remove({ id: 'gtceu:macerator/macerate_crimson_slab' })
   event.remove({ id: 'gtceu:macerator/macerate_cherry_stairs' })
   event.remove({ id: 'gtceu:macerator/macerate_cherry_slab' })
   event.remove({ id: 'gtceu:macerator/macerate_birch_stairs' })
   event.remove({ id: 'gtceu:macerator/macerate_birch_slab' })
   event.remove({ id: 'gtceu:macerator/macerate_bamboo_stairs' })
   event.remove({ id: 'gtceu:macerator/macerate_bamboo_slab' })
   event.remove({ id: 'gtceu:macerator/macerate_bamboo_mosaic_stairs' })
   event.remove({ id: 'gtceu:macerator/macerate_bamboo_mosaic_slab' })
   event.remove({ id: 'gtceu:macerator/macerate_acacia_stairs' })
   event.remove({ id: 'gtceu:macerator/macerate_acacia_slab' })

   //#endregion

    //#region Выход: Деревянная пыль

    event.remove({id: 'gtceu:macerator/macerate_trapped_chest'})
    event.remove({id: 'gtceu:macerator/macerate_spruce_planks'})
    event.remove({id: 'gtceu:macerator/macerate_spruce_fence_gate'})
    event.remove({id: 'gtceu:macerator/macerate_spruce_fence'})
    event.remove({id: 'gtceu:macerator/macerate_spruce_door'})
    event.remove({id: 'gtceu:macerator/macerate_spruce_boat'})
    event.remove({id: 'gtceu:macerator/macerate_oak_planks'})
    event.remove({id: 'gtceu:macerator/macerate_oak_fence_gate'})
    event.remove({id: 'gtceu:macerator/macerate_oak_fence'})
    event.remove({id: 'gtceu:macerator/macerate_oak_door'})
    event.remove({id: 'gtceu:macerator/macerate_oak_boat'})
    event.remove({id: 'gtceu:macerator/macerate_mangrove_planks'})
    event.remove({id: 'gtceu:macerator/macerate_mangrove_fence_gate'})
    event.remove({id: 'gtceu:macerator/macerate_mangrove_fence'})
    event.remove({id: 'gtceu:macerator/macerate_mangrove_door'})
    event.remove({id: 'gtceu:macerator/macerate_mangrove_boat'})
    event.remove({id: 'gtceu:macerator/macerate_jungle_planks'})
    event.remove({id: 'gtceu:macerator/macerate_jungle_fence_gate'})
    event.remove({id: 'gtceu:macerator/macerate_jungle_fence'})
    event.remove({id: 'gtceu:macerator/macerate_jungle_door'})
    event.remove({id: 'gtceu:macerator/macerate_jungle_boat'})
    event.remove({id: 'gtceu:macerator/macerate_dark_oak_planks'})
    event.remove({id: 'gtceu:macerator/macerate_dark_oak_fence_gate'})
    event.remove({id: 'gtceu:macerator/macerate_dark_oak_fence'})
    event.remove({id: 'gtceu:macerator/macerate_dark_oak_door'})
    event.remove({id: 'gtceu:macerator/macerate_dark_oak_boat'})
    event.remove({id: 'gtceu:macerator/macerate_crafting_table'})
    event.remove({id: 'gtceu:macerator/macerate_chest'})
    event.remove({id: 'gtceu:macerator/macerate_chest_minecart'})
    event.remove({id: 'gtceu:macerator/macerate_cherry_planks'})
    event.remove({id: 'gtceu:macerator/macerate_cherry_fence_gate'})
    event.remove({id: 'gtceu:macerator/macerate_cherry_fence'})
    event.remove({id: 'gtceu:macerator/macerate_cherry_door'})
    event.remove({id: 'gtceu:macerator/macerate_cherry_boat'})
    event.remove({id: 'gtceu:macerator/macerate_bookshelf'})
    event.remove({id: 'gtceu:macerator/macerate_birch_planks'})
    event.remove({id: 'gtceu:macerator/macerate_birch_fence_gate'})
    event.remove({id: 'gtceu:macerator/macerate_birch_fence'})
    event.remove({id: 'gtceu:macerator/macerate_birch_door'})
    event.remove({id: 'gtceu:macerator/macerate_birch_boat'})
    event.remove({id: 'gtceu:macerator/macerate_acacia_planks'})
    event.remove({id: 'gtceu:macerator/macerate_acacia_fence_gate'})
    event.remove({id: 'gtceu:macerator/macerate_acacia_fence'})
    event.remove({id: 'gtceu:macerator/macerate_acacia_door'})
    event.remove({id: 'gtceu:macerator/macerate_acacia_boat'})
    event.remove({id: 'gtceu:macerator/macerate_bamboo_raft'})
    event.remove({id: 'gtceu:macerator/macerate_bamboo_planks'})
    event.remove({id: 'gtceu:macerator/macerate_bamboo_fence_gate'})
    event.remove({id: 'gtceu:macerator/macerate_bamboo_fence'})
    event.remove({id: 'gtceu:macerator/macerate_bamboo_door'})
    event.remove({id: 'gtceu:macerator/macerate_crimson_door'})
    event.remove({id: 'gtceu:macerator/macerate_crimson_fence'})
    event.remove({id: 'gtceu:macerator/macerate_crimson_fence_gate'})
    event.remove({id: 'gtceu:macerator/macerate_crimson_planks'})
    event.remove({id: 'gtceu:macerator/macerate_warped_door'})
    event.remove({id: 'gtceu:macerator/macerate_warped_fence'})
    event.remove({id: 'gtceu:macerator/macerate_warped_fence_gate'})
    event.remove({id: 'gtceu:macerator/macerate_warped_planks'})

    //#endregion

    //#region Выход: Бумажная пыль

    event.remove({ id: 'gtceu:shaped/paper_dust' })

    //#endregion

    //#region Выход: Метан

    event.remove({ id: 'gtceu:centrifuge/red_mushroom_separation' })
    event.remove({ id: 'gtceu:centrifuge/brown_mushroom_separation' })

    //#endregion

    //#region Выход: Маленькая кучка мяса

    event.remove({ id: 'gtceu:macerator/macerate_steak' })
    event.remove({ id: 'gtceu:macerator/macerate_rabbit' })
    event.remove({ id: 'gtceu:macerator/macerate_pork_chop' })

    //#endregion

    //#region Выход: Пыль мяса

    event.remove({ id: 'gtceu:macerator/macerate_mutton' })
    event.remove({ id: 'gtceu:macerator/macerate_chicken' })
    
    event.recipes.gtceu.macerator('macerate_meat_to_dust')             
        .itemInputs('#tfc:foods/meats')
        .itemOutputs('gtceu:meat_dust', 'gtceu:bone_tiny_dust')
        .duration(100)
        .EUt(2)

    //#endregion
    
    //#region Выход: Пшеничная пыль

    event.remove({ id: 'gtceu:shapeless/wheat_to_dust' })
    event.remove({ id: 'gtceu:macerator/macerate_wheat' })
    event.remove({ id: 'gtceu:macerator/macerate_hay_block' })

    //#endregion

    //#region Выход: Пыль какао-бобов

    event.recipes.gtceu.assembler('macerate_cocoa')             
        .itemInputs('firmalife:food/cocoa_beans')
        .itemOutputs('gtceu:cocoa_dust')
        .duration(400)
        .EUt(2)

    //#endregion

    //#region Выход: Слиток кованного железа

    event.remove({ id: 'gtceu:arc_furnace/arc_chest_minecart' })
    event.remove({ id: 'gtceu:arc_furnace/arc_iron_trapdoor' })

    //#endregion

    //#region Выход: Кованные самородки

    event.recipes.gtceu.arc_furnace('arc_iron_door')             
        .itemInputs('minecraft:iron_door')
        .itemOutputs('9x gtceu:wrought_iron_dust', 'gtceu:steel_nugget')
        .duration(200)
        .EUt(30)

    //#endregion

    //#region Выход: Железная пыль

    event.remove({ id: 'gtceu:macerator/macerate_iron_trapdoor' })

    //#endregion

    //#region Выход: Крошечная железная пыль

    event.recipes.gtceu.macerator('macerate_iron_door')             
        .itemInputs('minecraft:iron_door')
        .itemOutputs('gtceu:iron_dust', 'gtceu:steel_tiny_dust')
        .duration(200)
        .EUt(8)

    //#endregion

    //#region Выход: Крошечная пыль золы

    event.remove({ id: 'gtceu:arc_furnace/arc_bookshelf' })

    //#endregion








    // Compressed Coke Clay
    event.shaped('gtceu:compressed_coke_clay', [
        'AAA', 
        'BCB',
        'BBB' 
    ], {
        A: 'minecraft:clay_ball',
        B: '#minecraft:sand',
        C: 'gtceu:brick_wooden_form'
    }).replaceIngredient("gtceu:brick_wooden_form", Item.empty).id('gtceu:shaped/compressed_coke_clay')

    // Compressed Coke Clay -> Coke Oven Brick
    event.recipes.tfc.heating('gtceu:compressed_coke_clay', 1399)
        .resultItem('gtceu:coke_oven_brick')
        .id('tfg:heating/coke_oven_bricks')

    // Удаление рецептов связанных с Primitive Blast Furnace
    event.remove({id: 'gtceu:arc_furnace/arc_primitive_blast_furnace'})
    event.remove({id: 'gtceu:macerator/macerate_primitive_blast_furnace'})

    // Удаление рецептов связанных с Barrel
    event.remove({id: 'gtceu:shaped/wooden_barrel'})
    event.remove({id: 'gtceu:assembler/wood_barrel'})
    event.remove({id: 'gtceu:arc_furnace/arc_wood_drum'})
    event.remove({id: 'gtceu:macerator/macerate_wood_drum'})

    // Удаление рецептов связанных с FireBricks
    event.remove({id: 'gtceu:shaped/casing_primitive_bricks'})
    event.remove({id: 'gtceu:macerator/macerate_firebricks'})
    event.remove({id: 'gtceu:extractor/extract_primitive_bricks'})

    // Удаление рецептов связанных с FireBrick
    event.remove({id: 'gtceu:smelting/fireclay_brick'})
    event.remove({id: 'gtceu:macerator/macerate_firebrick'})
    
    // Low Pressure Steam Forge Hammer
    event.shaped('gtceu:lp_steam_forge_hammer', [
        'ABA', 
        'ACA',
        'ADA' 
    ], {
        A: 'gtceu:bronze_small_fluid_pipe',
        B: '#forge:pistons',
        C: 'gtceu:bronze_machine_casing',
        D: 'tfc:metal/anvil/wrought_iron'
    }).id('gtceu:shaped/steam_hammer_bronze')

    // LV Forge Hammer
    event.shaped('gtceu:lv_forge_hammer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:tin_single_cable',
        B: 'gtceu:lv_electric_piston',
        C: '#forge:circuits/lv',
        D: 'gtceu:lv_machine_hull',
        E: 'tfc:metal/anvil/steel',
    }).id('gtceu:shaped/lv_forge_hammer')

    // MV Forge Hammer
    event.shaped('gtceu:mv_forge_hammer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:copper_single_cable',
        B: 'gtceu:mv_electric_piston',
        C: '#forge:circuits/mv',
        D: 'gtceu:mv_machine_hull',
        E: 'tfc:metal/anvil/steel',
    }).id('gtceu:shaped/mv_forge_hammer')

    // HV Forge Hammer
    event.shaped('gtceu:hv_forge_hammer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:gold_single_cable',
        B: 'gtceu:hv_electric_piston',
        C: '#forge:circuits/hv',
        D: 'gtceu:hv_machine_hull',
        E: 'tfc:metal/anvil/steel',
    }).id('gtceu:shaped/hv_forge_hammer')

    // EV Forge Hammer
    event.shaped('gtceu:ev_forge_hammer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:aluminium_single_cable',
        B: 'gtceu:ev_electric_piston',
        C: '#forge:circuits/ev',
        D: 'gtceu:ev_machine_hull',
        E: 'tfc:metal/anvil/black_steel',
    }).id('gtceu:shaped/ev_forge_hammer')

    // IV Forge Hammer
    event.shaped('gtceu:iv_forge_hammer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:platinum_single_cable',
        B: 'gtceu:iv_electric_piston',
        C: '#forge:circuits/iv',
        D: 'gtceu:iv_machine_hull',
        E: 'tfc:metal/anvil/black_steel',
    }).id('gtceu:shaped/iv_forge_hammer')

    // LuV Forge Hammer
    event.shaped('gtceu:luv_forge_hammer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:niobium_titanium_single_cable',
        B: 'gtceu:luv_electric_piston',
        C: '#forge:circuits/luv',
        D: 'gtceu:luv_machine_hull',
        E: 'tfc:metal/anvil/black_steel',
    }).id('gtceu:shaped/luv_forge_hammer')

    // ZPM Forge Hammer
    event.shaped('gtceu:zpm_forge_hammer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:vanadium_gallium_single_cable',
        B: 'gtceu:zpm_electric_piston',
        C: '#forge:circuits/zpm',
        D: 'gtceu:zpm_machine_hull',
        E: '#tfc:red_or_blue_anvil',
    }).id('gtceu:shaped/zpm_forge_hammer')

    // UV Forge Hammer
    event.shaped('gtceu:uv_forge_hammer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:yttrium_barium_cuprate_single_cable',
        B: 'gtceu:uv_electric_piston',
        C: '#forge:circuits/uv',
        D: 'gtceu:uv_machine_hull',
        E: '#tfc:red_or_blue_anvil',
    }).id('gtceu:shaped/uv_forge_hammer')

    // TFC FireBrick -> FireBrick dust
    event.recipes.gtceu.macerator('macerate_firebrick')             
        .itemInputs('tfc:ceramic/fire_brick')
        .itemOutputs('gtceu:fireclay_dust')
        .duration(15)
        .EUt(2)

    // Pump Deck
    event.shaped('gtceu:pump_deck', [
        'ABA', 
        'CDE'  
    ], {
        A: '#forge:screws/wrought_iron',
        B: 'gtceu:treated_wood_planks',  
        C: '#forge:tools/hammers',
        D: '#tfg:rock_slabs',
        E: '#forge:tools/screwdrivers'
    }).id('gtceu:shaped/pump_deck')

    // Pump Hatch
    event.shaped('gtceu:pump_hatch', [
        'ABC', 
        'DED',
        'FBF'  
    ], {
        A: '#forge:screws/wrought_iron',
        B: '#forge:rings/wrought_iron',
        C: '#forge:tools/screwdrivers',
        D: 'gtceu:treated_wood_planks',
        E: 'gtceu:wood_large_fluid_pipe',
        F: '#tfg:rock_slabs'

    }).id('gtceu:shaped/pump_hatch')

    // Primitive Pump
    event.shaped('gtceu:primitive_pump', [
        'ABC', 
        'DEF',
        'GHG'  
    ], {
        A: '#forge:rings/wrought_iron',
        B: 'gtceu:wood_normal_fluid_pipe',
        C: '#forge:screws/wrought_iron',
        D: '#forge:rotors/wrought_iron',
        E: 'gtceu:treated_wood_planks',
        F: '#forge:tools/screwdrivers',
        G: '#tfg:rock_slabs',
        H: 'gtceu:wood_large_fluid_pipe'

    }).id('gtceu:shaped/primitive_pump')

    // Coke Oven
    event.shaped('gtceu:coke_oven', [
        'ABA', 
        'BCB',
        'ABA'  
    ], {
        A: 'gtceu:coke_oven_bricks',
        B: '#forge:plates/wrought_iron',  
        C: '#forge:tools/wrenches'  
    }).id('gtceu:shaped/coke_oven')

    // Coke Oven Hatch
    event.shaped('gtceu:coke_oven_hatch', [
        'AB'  
    ], {
        A: 'gtceu:coke_oven_bricks',
        B: '#tfc:barrels' 
    }).id('gtceu:shaped/coke_oven_hatch')

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

    // Electric Blast Furnace
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

    // LV Casing
    event.shaped('gtceu:lv_machine_casing', [
        'ABA', 
        'BCB',
        'ABA'
    ], {
        A: '#forge:plates/red_steel',
        B: '#forge:plates/blue_steel',
        C: '#forge:tools/wrenches'
    }).id('gtceu:shaped/casing_lv')

    event.recipes.gtceu.assembler('casing_lv')             
        .itemInputs('4x #forge:plates/red_steel', '4x #forge:plates/blue_steel')
        .circuit(8)
        .itemOutputs('gtceu:lv_machine_casing')
        .duration(50)
        .EUt(16)

    event.recipes.gtceu.macerator('macerate_lv_machine_casing')             
        .itemInputs('gtceu:lv_machine_casing')
        .itemOutputs('4x gtceu:red_steel_dust', '4x gtceu:blue_steel_dust')
        .duration(448)
        .EUt(8)

    event.recipes.gtceu.arc_furnace('arc_lv_machine_casing')             
        .itemInputs('gtceu:lv_machine_casing')
        .itemOutputs('4x gtceu:red_steel_ingot', '4x gtceu:blue_steel_ingot')
        .duration(448)
        .EUt(8)

    // Фикс выработки пара на ведре лавы
    event.remove({ id: 'minecraft:large_boiler/lava_bucket' })
    event.recipes.gtceu.large_boiler('lava_bucket')             
        .itemInputs('minecraft:lava_bucket')
        .duration(25)
}

const generateMixerRecipe = (event, input, fluid_input, output, fluid_output, duration, EUt, rpm, id) => {
    event.recipes.gtceu.mixer(id)             
        .itemInputs(input)
        .inputFluids(fluid_input)
        .itemOutputs(output)
        .outputFluids(fluid_output)
        .duration(duration)
        .EUt(EUt)

    event.recipes.gtceu.create_mixer(id)             
        .itemInputs(input)
        .inputFluids(fluid_input)
        .itemOutputs(output)
        .outputFluids(fluid_output)
        .duration(duration)
        .EUt(EUt)
        .rpm(rpm)
}

const generateCutterRecipe = () => {
    // Вот зачем я, скажете вы, делаю тут всякие костыли, 
    // потому что блядский разработчик GTCEu не может исправить баги своего мода
    // Я так устал..
}