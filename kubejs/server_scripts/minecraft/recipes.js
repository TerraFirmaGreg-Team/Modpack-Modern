// priority: 0

const registerMinecraftRecipes = (event) => {

    // Copper fix
    event.remove({id: 'minecraft:copper_ingot_from_smelting_raw_copper'})
    event.remove({id: 'minecraft:copper_ingot_from_blasting_raw_copper'})

    event.smelting('2x #forge:ingots/copper', '1x #forge:raw_materials/copper').id('minecraft:copper_ingot_from_smelting_raw_copper').xp(0.7)
    event.blasting('2x #forge:ingots/copper', '1x #forge:raw_materials/copper').id('minecraft:copper_ingot_from_blasting_raw_copper').xp(0.7)

    // Iron fix
    event.remove({id: `minecraft:iron_ingot_from_smelting_raw_iron`})
    event.remove({id: `minecraft:iron_ingot_from_blasting_raw_iron`})

    event.smelting('2x #forge:ingots/iron', '1x #forge:raw_materials/iron').id('minecraft:iron_ingot_from_smelting_raw_iron').xp(0.7)
    event.blasting('2x #forge:ingots/iron', '1x #forge:raw_materials/iron').id('minecraft:iron_ingot_from_blasting_raw_iron').xp(0.7)

    // Gold fix
    event.remove({id: `minecraft:gold_ingot_from_smelting_raw_gold`})
    event.remove({id: `minecraft:gold_ingot_from_blasting_raw_gold`})

    event.smelting('2x #forge:ingots/gold', '1x #forge:raw_materials/gold').id('minecraft:gold_ingot_from_smelting_raw_gold').xp(0.7)
    event.blasting('2x #forge:ingots/gold', '1x #forge:raw_materials/gold').id('minecraft:gold_ingot_from_blasting_raw_gold').xp(0.7)

    event.remove({id: 'minecraft:blast_furnace'})
    event.remove({ id: 'minecraft:furnace_minecart' })
    event.remove({id: 'minecraft:fire_charge'})
    event.remove({id: 'minecraft:fire_charge'})

    event.remove({id: 'minecraft:netherite_sword_smithing'})
    event.remove({id: 'minecraft:netherite_pickaxe_smithing'})
    event.remove({id: 'minecraft:netherite_axe_smithing'})
    event.remove({id: 'minecraft:netherite_shovel_smithing'})
    event.remove({id: 'minecraft:netherite_hoe_smithing'})
    event.remove({id: 'minecraft:netherite_helmet_smithing'})
    event.remove({id: 'minecraft:netherite_chestplate_smithing'})
    event.remove({id: 'minecraft:netherite_leggings_smithing'})
    event.remove({id: 'minecraft:netherite_boots_smithing'})

    event.remove({id: 'minecraft:netherite_ingot_from_netherite_block'})
    event.remove({id: 'minecraft:netherite_block'})
    event.remove({id: 'minecraft:lodestone'})

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
}