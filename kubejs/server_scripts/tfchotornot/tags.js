// priority: 0
"use strict";

const registerHotOrNotItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.HOT_OR_NOT_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })

    event.add('tfchotornot:hot_whitelist', '#forge:hot_ingots')
    event.add('tfchotornot:hot_whitelist', 'minecraft:magma_block')
    event.add('tfchotornot:cold_whitelist', 'minecraft:blue_ice')
    event.add('tfchotornot:cold_whitelist', 'tfg:dry_ice')

    global.TFC_MAGMA_BLOCKS.forEach(magma => {
        event.add('tfchotornot:hot_whitelist', magma)
    })
    
    global.TFC_METALS.forEach(metal => {
        event.add('tfchotornot:tong_parts', `tfchotornot:tong_part/${metal}`)
    })
    
    event.add('firmalife:usable_on_oven', '#tfchotornot:insulating')

    event.add('tfg:insulating_container', '#gtceu:super_tanks')
    event.add('tfg:insulating_container', '#gtceu:fluid_cells')

    event.add('tfg:hot_protection_equipment', 'tfc:metal/chestplate/blue_steel')
    event.add('tfg:hot_protection_equipment', 'tfc:metal/boots/blue_steel')
    event.add('tfg:hot_protection_equipment', 'sns:blue_steel_toe_hiking_boots')
    event.add('tfg:hot_protection_equipment', 'minecraft:netherite_boots')
    event.add('tfg:hot_protection_equipment', 'create:netherite_backtank')
    event.add('tfg:hot_protection_equipment', 'create:netherite_diving_boots')
    event.add('tfg:hot_protection_equipment', 'ad_astra:netherite_space_suit')
    event.add('tfg:hot_protection_equipment', 'ad_astra:netherite_space_boots')
    event.add('tfg:hot_protection_equipment', 'gtceu:hazmat_chestpiece')
    event.add('tfg:hot_protection_equipment', 'gtceu:hazmat_boots')
    event.add('tfg:hot_protection_equipment', 'gtceu:quarktech_chestplate')
    event.add('tfg:hot_protection_equipment', 'gtceu:advanced_quarktech_chestplate')
	event.add('tfg:hot_protection_equipment', 'gtceu:quarktech_boots')

    event.add('tfg:cold_protection_equipment', 'tfc:metal/chestplate/red_steel')
    event.add('tfg:cold_protection_equipment', 'tfc:metal/boots/red_steel')
    event.add('tfg:cold_protection_equipment', 'sns:red_steel_toe_hiking_boots')
    event.add('tfg:cold_protection_equipment', 'ad_astra:space_boots')
    event.add('tfg:cold_protection_equipment', 'ad_astra:space_suit')
    event.add('tfg:cold_protection_equipment', 'ad_astra:netherite_space_suit')
    event.add('tfg:cold_protection_equipment', 'ad_astra:netherite_space_boots')
    event.add('tfg:cold_protection_equipment', 'gtceu:hazmat_chestpiece')
    event.add('tfg:cold_protection_equipment', 'gtceu:hazmat_boots')
    event.add('tfg:cold_protection_equipment', 'gtceu:quarktech_chestplate')
    event.add('tfg:cold_protection_equipment', 'gtceu:advanced_quarktech_chestplate')
	event.add('tfg:cold_protection_equipment', 'gtceu:quarktech_boots')

    event.add('tfg:floating_protection_equipment', 'create:copper_diving_boots')
    event.add('tfg:floating_protection_equipment', 'create:netherite_diving_boots')
    event.add('tfg:floating_protection_equipment', 'ad_astra:space_boots')
    event.add('tfg:floating_protection_equipment', 'ad_astra:netherite_space_boots')
    event.add('tfg:floating_protection_equipment', 'gtceu:hazmat_boots')
	event.add('tfg:floating_protection_equipment', 'gtceu:quarktech_boots')
}

const registerHotOrNotFluidTags = (event) => {
    event.add("tfchotornot:gaseous_whitelist", 'gtceu:helium')
    event.add("tfchotornot:gaseous_whitelist", 'gtceu:helium_3')
    event.add("tfchotornot:gaseous_whitelist", 'gtceu:hydrogen')
    event.add("tfchotornot:gaseous_whitelist", 'gtceu:coal_gas')
    event.add("tfchotornot:gaseous_whitelist", 'gtceu:methane')

    event.add("tfchotornot:fluid_whitelist", '#firmalife:oils')
    event.add("tfchotornot:fluid_whitelist", '#tfg:oil_fluids')
}

const registerHotOrNotBlockTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.HOT_OR_NOT_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}