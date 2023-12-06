// priority: 0

const registerMinecraftRecipes = (event) => {
    // Удаление рецептов палок
    event.remove({id: 'minecraft:stick'})

    // Удаление рецептов камня
    event.remove({id: 'gtceu:compressor/stone_from_dust'})

    // Удаление рецептов жиги
    event.remove({id: 'tfc:crafting/vanilla/flint_and_steel'})
    event.remove({id: 'ad_astra:recipes/flint_and_steel'})

    // Удаление рецептов связанных с наковальней
    event.remove({id: 'gtceu:arc_furnace/arc_anvil'})
    event.remove({id: 'gtceu:macerator/macerate_anvil'})
    event.remove({id: 'gtceu:alloy_smelter/anvil'})
    event.remove({id: 'gtceu:fluid_solidifier/solidify_anvil'})

    event.remove({id: 'gtceu:arc_furnace/arc_damaged_anvil'})
    event.remove({id: 'gtceu:macerator/macerate_damaged_anvil'})
    event.remove({id: 'gtceu:arc_furnace/arc_chipped_anvil'})
    event.remove({id: 'gtceu:macerator/macerate_chipped_anvil'})

    // Удаление рецептов связанных с печкой
    event.remove({id: 'gtceu:assembler/furnace'})
    event.remove({id: 'gtceu:macerator/macerate_furnace'})
    event.remove({id: 'gtceu:assembler/furnace_minecart'})

    // Удаление рецептов связанных с вагонеткой с печкой
    event.remove({id: 'minecraft:furnace_minecart'})
    event.remove({id: 'gtceu:arc_furnace/arc_furnace_minecart'})
    event.remove({id: 'gtceu:macerate/macerate_furnace_minecart'})

    // Удаление рецептов связанных с Кольчугой
    event.remove({id: 'gtceu:shaped/chainmail_boots'})
    event.remove({id: 'gtceu:shaped/chainmail_leggings'})
    event.remove({id: 'gtceu:shaped/chainmail_chestplate'})
    event.remove({id: 'gtceu:shaped/chainmail_helmet'})
    event.remove({id: 'gtceu:arc_furnace/arc_chainmail_boots'})
    event.remove({id: 'gtceu:arc_furnace/arc_chainmail_leggings'})
    event.remove({id: 'gtceu:arc_furnace/arc_chainmail_chestplate'})
    event.remove({id: 'gtceu:arc_furnace/arc_chainmail_helmet'})
    event.remove({id: 'gtceu:macerator/macerate_chainmail_boots'})
    event.remove({id: 'gtceu:macerator/macerate_chainmail_leggings'})
    event.remove({id: 'gtceu:macerator/macerate_chainmail_chestplate'})
    event.remove({id: 'gtceu:macerator/macerate_chainmail_helmet'})
    event.remove({id: 'minecraft:iron_nugget_from_smelting'})
    event.remove({id: 'minecraft:iron_nugget_from_blasting'})

    // Удаление рецептов связанных с Железной броней
    event.remove({id: 'gtceu:arc_furnace/arc_iron_boots'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_leggings'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_chestplate'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_helmet'})
    event.remove({id: 'gtceu:macerator/macerate_iron_boots'})
    event.remove({id: 'gtceu:macerator/macerate_iron_leggings'})
    event.remove({id: 'gtceu:macerator/macerate_iron_chestplate'})
    event.remove({id: 'gtceu:macerator/macerate_iron_helmet'})
    event.remove({id: 'gtceu:shaped/iron_horse_armor'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_horse_armor'})
    event.remove({id: 'gtceu:macerator/macerate_iron_horse_armor'})

    // Удаление рецептов связанных с Золотой броней
    event.remove({id: 'gtceu:arc_furnace/arc_golden_boots'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_leggings'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_chestplate'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_helmet'})
    event.remove({id: 'gtceu:macerator/macerate_golden_boots'})
    event.remove({id: 'gtceu:macerator/macerate_golden_leggings'})
    event.remove({id: 'gtceu:macerator/macerate_golden_chestplate'})
    event.remove({id: 'gtceu:macerator/macerate_golden_helmet'})
    event.remove({id: 'gtceu:shaped/golden_horse_armor'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_horse_armor'})
    event.remove({id: 'gtceu:macerator/macerate_golden_horse_armor'})
    event.remove({id: 'minecraft:gold_nugget_from_smelting'})
    event.remove({id: 'minecraft:gold_nugget_from_blasting'})

    // Удаление рецептов связанных с Алмазной броней
    event.remove({id: 'gtceu:macerator/macerate_diamond_boots'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_leggings'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_chestplate'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_helmet'})
    event.remove({id: 'gtceu:shaped/diamond_horse_armor'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_horse_armor'})

    // Удаление рецептов сваязанных с Незеритовой броней
    event.remove({id: 'minecraft:netherite_helmet_smithing'})
    event.remove({id: 'minecraft:netherite_chestplate_smithing'})
    event.remove({id: 'minecraft:netherite_leggings_smithing'})
    event.remove({id: 'minecraft:netherite_boots_smithing'})

    // Удаление рецептов связанных с шаблонами брони
    event.remove({id: 'minecraft:wild_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:wayfinder_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:ward_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:vex_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:tide_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:spire_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:snout_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:silence_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:shaper_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:sentry_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:rib_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:raiser_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:host_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:eye_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:dune_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:coast_armor_trim_smithing_template_smithing_trim'})

    // Удаление рецептов связанных с Деревянными инструментами
    event.remove({id: 'gtceu:macerator/macerate_wooden_sword'})
    event.remove({id: 'gtceu:macerator/macerate_wooden_pickaxe'})
    event.remove({id: 'gtceu:macerator/macerate_wooden_axe'})
    event.remove({id: 'gtceu:macerator/macerate_wooden_shovel'})
    event.remove({id: 'gtceu:macerator/macerate_wooden_hoe'})

    // Удаление рецептов связанных с Каменными инструментами
    event.remove({id: 'gtceu:macerator/macerate_stone_sword'})
    event.remove({id: 'gtceu:macerator/macerate_stone_pickaxe'})
    event.remove({id: 'gtceu:macerator/macerate_stone_axe'})
    event.remove({id: 'gtceu:macerator/macerate_stone_shovel'})
    event.remove({id: 'gtceu:macerator/macerate_stone_hoe'})

    // Удаление рецептов связанных с Железными инструментами
    event.remove({id: 'gtceu:macerator/macerate_iron_sword'})
    event.remove({id: 'gtceu:macerator/macerate_iron_pickaxe'})
    event.remove({id: 'gtceu:macerator/macerate_iron_axe'})
    event.remove({id: 'gtceu:macerator/macerate_iron_shovel'})
    event.remove({id: 'gtceu:macerator/macerate_iron_hoe'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_sword'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_pickaxe'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_axe'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_shovel'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_hoe'})

    // Удаление рецептов связанных с Золотыми инструментами
    event.remove({id: 'gtceu:macerator/macerate_golden_sword'})
    event.remove({id: 'gtceu:macerator/macerate_golden_pickaxe'})
    event.remove({id: 'gtceu:macerator/macerate_golden_axe'})
    event.remove({id: 'gtceu:macerator/macerate_golden_shovel'})
    event.remove({id: 'gtceu:macerator/macerate_golden_hoe'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_sword'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_pickaxe'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_axe'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_shovel'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_hoe'})

    // Удаление рецептов связанных с Алмазными инструментами
    event.remove({id: 'gtceu:macerator/macerate_diamond_sword'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_pickaxe'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_axe'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_shovel'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_hoe'})
    event.remove({id: 'gtceu:arc_furnace/arc_diamond_sword'})
    event.remove({id: 'gtceu:arc_furnace/arc_diamond_pickaxe'})
    event.remove({id: 'gtceu:arc_furnace/arc_diamond_axe'})
    event.remove({id: 'gtceu:arc_furnace/arc_diamond_shovel'})
    event.remove({id: 'gtceu:arc_furnace/arc_diamond_hoe'})

    // Удаление рецептов связанных с Незеритовыми инструментами
    event.remove({id: 'minecraft:netherite_sword_smithing'})
    event.remove({id: 'minecraft:netherite_pickaxe_smithing'})
    event.remove({id: 'minecraft:netherite_axe_smithing'})
    event.remove({id: 'minecraft:netherite_shovel_smithing'})
    event.remove({id: 'minecraft:netherite_hoe_smithing'})

    // Удаление рецептов связанных с Repeater
    event.remove({id: 'minecraft:repeater'})

    // Удаление рецептов связанных с Comparator
    event.remove({id: 'tfc:crafting/vanilla/redstone/comparator'})
    event.remove({id: 'minecraft:comparator'})
    event.remove({id: 'gtceu:shaped/comparator_quartzite'})
    event.remove({id: 'gtceu:shaped/certus'})

    // Удаление рецептов связанных с Paper
    event.remove({id: 'gtceu:shaped/paper'})

    // Удаление рецептов связанных с Iron Bars
    event.remove({id: 'gtceu:shaped/iron_bars'})
    event.remove({id: 'gtceu:assembler/iron_bars'})

    // Удаление рецептов связанных с Wheat
    event.remove({id: 'minecraft:packed_mud'})
    event.remove({id: 'minecraft:cookie'})
    event.remove({id: 'minecraft:cake'})
    event.remove({id: 'minecraft:bread'})
    event.remove({id: 'gtceu:packer/hay_block'})
    
    // Удаление рецептов связанных с Wheat Dust
    event.remove({id: 'gtceu:packer/package_wheat_tiny_dust'})
    event.remove({id: 'gtceu:packer/package_wheat_small_dust'})
    event.remove({id: 'gtceu:packer/unpackage_wheat_tiny_dust'})
    event.remove({id: 'gtceu:packer/unpackage_wheat_small_dust'})
    event.remove({id: 'gtceu:shaped/tiny_dust_assembling_wheat'})
    event.remove({id: 'gtceu:shaped/small_dust_assembling_wheat'})
    event.remove({id: 'gtceu:shaped/tiny_dust_disassembling_wheat'})
    event.remove({id: 'gtceu:shaped/small_dust_disassembling_wheat'})
    event.remove({id: 'gtceu:macerator/macerate_wheat'})
    event.remove({id: 'gtceu:macerator/macerate_hay_block'})
    event.remove({id: 'gtceu:shapeless/wheat_to_dust'})

    // Удаление рецептов связанных с TripWire Hook
    event.remove({id: 'minecraft:tripwire_hook'})
    event.remove({id: 'tfc:crafting/vanilla/redstone/tripwire_hook'})
    event.remove({id: 'gtceu:assembler/tripwire_hook_wrought_iron'})
    event.remove({id: 'gtceu:assembler/tripwire_hook_iron'})

    // Удаление рецептовсвязанных с ведром
    event.remove({id: 'gtceu:bender/bucket'})
    event.remove({id: 'gtceu:shaped/iron_bucket'})

    // Удаление рецептов связанных с Saddle
    event.remove({id: 'gtceu:shaped/saddle'})

    // Удаление рецептов связанных с песком
    event.remove({id: 'gtceu:forge_hammer/smooth_sandstone_to_sand'})
    event.remove({id: 'gtceu:forge_hammer/sandstone_to_sand'})
    event.remove({id: 'gtceu:forge_hammer/chiseled_sandstone_to_sand'})

    event.remove({id: 'gtceu:centrifuge/soul_sand_separation'})
    event.remove({id: 'gtceu:centrifuge/mycelium_separation'})
    event.remove({id: 'gtceu:centrifuge/endstone_separation'})

    // Удаление рецептов связанных с красным песком
    event.remove({id: 'gtceu:forge_hammer/smooth_red_sandstone_to_red_sand'})
    event.remove({id: 'gtceu:forge_hammer/red_sandstone_to_red_sand'})
    event.remove({id: 'gtceu:forge_hammer/chiseled_red_sandstone_to_red_sand'})

    // Удаление рецептов связанных с SandStone
    event.remove({id: 'minecraft:sandstone'})
    event.remove({id: 'gtceu:compressor/sandstone'})

    // Удаление рецептов связанных с Red SandStone

    // Удаление рецептов блоков из RockBreaker
    event.remove({id: 'gtceu:rock_breaker/stone'})
    event.remove({id: 'gtceu:rock_breaker/obsidian'})
    event.remove({id: 'gtceu:rock_breaker/granite'})
    event.remove({id: 'gtceu:rock_breaker/diorite'})
    event.remove({id: 'gtceu:rock_breaker/andesite'})
    event.remove({id: 'gtceu:rock_breaker/cobblestone'})

    // Удаление рецептов связанных с книжными полками
    event.remove({id: 'minecraft:chiseled_bookshelf'})
    event.remove({id: 'gtceu:assembler/bookshelf'})
    event.remove({id: 'gtceu:arc_furnace/arc_bookshelf'})
    event.remove({id: 'gtceu:macerator/macerate_bookshelf'})
    event.remove({id: 'gtceu:extractor/bookshelf_extraction'})

    // Удаление рецептов связанных с сундуками
    event.remove({id: 'gtceu:assembler/chest'})
    event.remove({id: 'gtceu:arc_furnace/arc_trapped_chest'})
    event.remove({id: 'gtceu:macerator/macerate_trapped_chest'})

    // Удаление других рецептов
    event.remove({ id: 'tfc:crafting/vanilla/lapis_block' })
    event.remove({id: 'minecraft:blast_furnace'})
    event.remove({id: 'minecraft:fire_charge'})
    event.remove({id: 'minecraft:netherite_ingot_from_netherite_block'})
    event.remove({id: 'minecraft:netherite_block'})
    event.remove({id: 'minecraft:lodestone'})

    // Исправление рецептов пережарки меди, удволетворяя условиям: обычный кусок -> 2 слитка
    event.remove({id: 'minecraft:copper_ingot_from_smelting_raw_copper'})
    event.remove({id: 'minecraft:copper_ingot_from_blasting_raw_copper'})

    event.smelting('2x #forge:ingots/copper', '1x #forge:raw_materials/copper').id('minecraft:copper_ingot_from_smelting_raw_copper').xp(0.7)
    event.blasting('2x #forge:ingots/copper', '1x #forge:raw_materials/copper').id('minecraft:copper_ingot_from_blasting_raw_copper').xp(0.7)

    // Исправление рецептов пережарки железа, удволетворяя условиям: обычный кусок -> 2 слитка
    event.remove({id: `minecraft:iron_ingot_from_smelting_raw_iron`})
    event.remove({id: `minecraft:iron_ingot_from_blasting_raw_iron`})

    event.smelting('2x #forge:ingots/iron', '1x #forge:raw_materials/iron').id('minecraft:iron_ingot_from_smelting_raw_iron').xp(0.7)
    event.blasting('2x #forge:ingots/iron', '1x #forge:raw_materials/iron').id('minecraft:iron_ingot_from_blasting_raw_iron').xp(0.7)

    // Исправление рецептов пережарки золота, удволетворяя условиям: обычный кусок -> 2 слитка
    event.remove({id: `minecraft:gold_ingot_from_smelting_raw_gold`})
    event.remove({id: `minecraft:gold_ingot_from_blasting_raw_gold`})

    event.smelting('2x #forge:ingots/gold', '1x #forge:raw_materials/gold').id('minecraft:gold_ingot_from_smelting_raw_gold').xp(0.7)
    event.blasting('2x #forge:ingots/gold', '1x #forge:raw_materials/gold').id('minecraft:gold_ingot_from_blasting_raw_gold').xp(0.7)

    // Bucket
    addWeldingRecipe(event, 
        'tfg:recipes/anvil/vanilla_bucket',
        { item: 'tfc:metal/bucket/red_steel' },
        { item: 'tfc:metal/bucket/blue_steel' },
        { item: 'minecraft:bucket' },
        6
    )

    // Fire Charge
    event.remove({ id: 'tfc:crafting/vanilla/fire_charge' })
    event.shapeless('3x minecraft:fire_charge', [
        '#forge:dusts/gunpowder',
        '#minecraft:coals',
        'tfc:firestarter'
    ])

    // Стекло
    event.recipes.gtceu.alloy_smelter('glass')             
        .itemInputs('#forge:dusts/glass')
        .notConsumable('gtceu:block_casting_mold')
        .itemOutputs('minecraft:glass')
        .duration(120)
        .EUt(16)

    event.recipes.gtceu.arc_furnace('glass_from_sand')             
        .itemInputs('#forge:sand')
        .itemOutputs('2x minecraft:glass')
        .duration(20)
        .EUt(30)

    // Компаратор
    event.shaped('minecraft:comparator', [
        ' A ',
        'ABA',
        'CCC'
    ], {
        A: 'minecraft:redstone_torch',
        B: '#forge:gems/certus_quartz',
        C: '#tfc:rock/smooth'
    }).id('tfg:recipes/comparator_certus');

    event.shaped('minecraft:comparator', [
        ' A ',
        'ABA',
        'CCC'
    ], {
        A: 'minecraft:redstone_torch',
        B: '#forge:gems/quartzite',
        C: '#tfc:rock/smooth'
    }).id('tfg:recipes/comparator_quartzite');

    event.shaped('minecraft:comparator', [
        ' A ',
        'ABA',
        'CCC'
    ], {
        A: 'minecraft:redstone_torch',
        B: '#forge:gems/nether_quartz',
        C: '#tfc:rock/smooth'
    }).id('tfg:recipes/comparator_nether_quartz');

    // TripWire Hook
    event.shapeless('minecraft:tripwire_hook', [
        '#forge:rods/wood',
        '#forge:rings/wrought_iron',
        '#forge:springs/small'
    ]).id('tfg:recipes/tripwire_hook')

    event.recipes.gtceu.assembler('tfg/tripwire_hook')             
        .itemInputs(
            '#forge:rods/wood',
            '#forge:rings/wrought_iron',
            '#forge:springs/small'
            )
        .itemOutputs('2x minecraft:tripwire_hook')
        .duration(100)
        .EUt(4)

    // ItemFrame
    event.recipes.gtceu.assembler('item_frame')             
        .itemInputs(
            '8x #forge:rods/wood',
            'minecraft:leather'
            )
        .itemOutputs('2x minecraft:item_frame')
        .duration(100)
        .EUt(4)

    event.recipes.gtceu.assembler('tfg/item_frame_lumber')             
        .itemInputs(
            '8x #tfc:lumber',
            'minecraft:leather'
        )
    .itemOutputs('8x minecraft:item_frame')
    .duration(100)
    .EUt(4)

    // Glow Item Frame
    event.shapeless('minecraft:glow_item_frame', [
        'minecraft:item_frame',
        '#forge:dusts/glowstone'
    ]).id('minecraft:glow_item_frame')

    event.recipes.gtceu.assembler('tfg/glow_item_frame')             
        .itemInputs(
            '2x minecraft:item_frame',
            '#forge:dusts/glowstone'
        )
    .itemOutputs('2x minecraft:glow_item_frame')
    .duration(100)
    .EUt(4)

    // Painting
    event.recipes.gtceu.assembler('painting')             
        .itemInputs(
            '#tfc:high_quality_cloth',
            '8x #forge:rods/wood'
        )
    .itemOutputs('2x minecraft:painting')
    .circuit(1)
    .duration(100)
    .EUt(4)

    // Sugar Cane (Papyrus) -> Paper
    event.remove({id: 'gtceu:chemical_bath/paper_from_sugar_cane_distilled'})
    event.remove({id: 'gtceu:chemical_bath/paper_from_sugar_cane'})

    event.recipes.gtceu.chemical_bath('paper_from_papyrus_distilled')             
        .itemInputs('tfc:papyrus')
        .inputFluids(Fluid.of('gtceu:distilled_water', 100))
        .itemOutputs('minecraft:paper')
        .duration(100)
        .EUt(7)

    event.recipes.gtceu.chemical_bath('paper_from_papyrus')             
        .itemInputs('tfc:papyrus')
        .inputFluids(Fluid.of('minecraft:water', 100))
        .itemOutputs('minecraft:paper')
        .duration(100)
        .EUt(7)

    // White Dye Recipes
    event.remove({id: 'gtceu:extractor/lily_of_the_valley_dye'})
    
    event.recipes.gtceu.extractor('white_dye')             
        .itemInputs('1x #tfc:makes_white_dye')
        .itemOutputs('2x minecraft:white_dye')
        .duration(200)
        .EUt(2)

    // Red Dye Recipes
    event.remove({id: 'gtceu:extractor/rose_bush_dye'})
    event.remove({id: 'gtceu:extractor/red_tulip_dye'})
    event.remove({id: 'gtceu:extractor/poppy_dye'})
    event.remove({id: 'gtceu:extractor/beetroot_dye'})
    
    event.recipes.gtceu.extractor('red_dye')             
        .itemInputs('1x #tfc:makes_red_dye')
        .itemOutputs('2x minecraft:red_dye')
        .duration(200)
        .EUt(2)

    // Lime Dye Recipes
    event.remove({id: 'gtceu:extractor/rose_bush_dye'})
    event.remove({id: 'gtceu:extractor/red_tulip_dye'})
    event.remove({id: 'gtceu:extractor/poppy_dye'})
    event.remove({id: 'gtceu:extractor/beetroot_dye'})
    
    event.recipes.gtceu.extractor('lime_dye')             
        .itemInputs('1x tfc:plant/moss')
        .itemOutputs('2x minecraft:lime_dye')
        .duration(200)
        .EUt(2)

    // Light Blue Dye Recipes
    event.remove({id: 'gtceu:extractor/blue_orchid_dye'})
    
    event.recipes.gtceu.extractor('light_blue_dye')             
        .itemInputs('1x #tfc:makes_light_blue_dye')
        .itemOutputs('2x minecraft:light_blue_dye')
        .duration(200)
        .EUt(2)

    // Green Dye Recipes
    event.recipes.gtceu.extractor('green_dye')             
        .itemInputs('1x #tfc:makes_green_dye')
        .itemOutputs('2x minecraft:green_dye')
        .duration(200)
        .EUt(2)

    // Magenta Dye Recipes
    event.remove({id: 'gtceu:extractor/lilac_dye'})
    event.remove({id: 'gtceu:extractor/allium_dye'})
    
    event.recipes.gtceu.extractor('magenta_dye')             
        .itemInputs('1x #tfc:makes_magenta_dye')
        .itemOutputs('2x minecraft:magenta_dye')
        .duration(200)
        .EUt(2)

    // Orange Dye Recipes
    event.remove({id: 'gtceu:extractor/orange_tulip_dye'})
    
    event.recipes.gtceu.extractor('orange_dye')             
        .itemInputs('1x #tfc:makes_orange_dye')
        .itemOutputs('2x minecraft:orange_dye')
        .duration(200)
        .EUt(2)

    // Purple Dye Recipes
    event.recipes.gtceu.extractor('purple_dye')             
        .itemInputs('1x #tfc:makes_purple_dye')
        .itemOutputs('2x minecraft:purple_dye')
        .duration(200)
        .EUt(2)

    // Brown Dye Recipes
    event.recipes.gtceu.extractor('brown_dye')             
        .itemInputs('1x #tfc:makes_brown_dye')
        .itemOutputs('2x minecraft:brown_dye')
        .duration(200)
        .EUt(2)

    // Light Gray Dye Recipes
    event.recipes.gtceu.extractor('light_gray_dye')             
        .itemInputs('1x tfc:plant/yucca')
        .itemOutputs('2x minecraft:light_gray_dye')
        .duration(200)
        .EUt(2)

    // Yellow Dye Recipes
    event.remove({id: 'gtceu:extractor/sunflower_dye'})
    event.remove({id: 'gtceu:extractor/dandelion_dye'})
    
    event.recipes.gtceu.extractor('yellow_dye')             
        .itemInputs('1x #tfc:makes_yellow_dye')
        .itemOutputs('2x minecraft:yellow_dye')
        .duration(200)
        .EUt(2)

    // Blue Dye Recipes
    event.remove({id: 'gtceu:extractor/cornflower_dye'})
    
    event.recipes.gtceu.extractor('blue_dye')             
        .itemInputs('1x #tfc:makes_blue_dye')
        .itemOutputs('2x minecraft:blue_dye')
        .duration(200)
        .EUt(2)

    // Pink Dye Recipes
    event.remove({id: 'gtceu:extractor/pink_tulip_dye'})
    event.remove({id: 'gtceu:extractor/peony_dye'})
    
    event.recipes.gtceu.extractor('pink_dye')             
        .itemInputs('1x #tfc:makes_pink_dye')
        .itemOutputs('2x minecraft:pink_dye')
        .duration(200)
        .EUt(2)
}