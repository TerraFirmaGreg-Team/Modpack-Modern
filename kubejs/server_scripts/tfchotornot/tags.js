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
    

    event.add('firmalife:usable_on_oven', '#tfchotornot:insulating')

    event.add('tfg:insulating_container', 'gtceu:ulv_super_tank')
    event.add('tfg:insulating_container', 'gtceu:lv_super_tank')
    event.add('tfg:insulating_container', 'gtceu:mv_super_tank')
    event.add('tfg:insulating_container', 'gtceu:hv_super_tank')
    event.add('tfg:insulating_container', 'gtceu:ev_super_tank')
    event.add('tfg:insulating_container', 'gtceu:iv_quantum_tank')
    event.add('tfg:insulating_container', 'gtceu:luv_quantum_tank')
    event.add('tfg:insulating_container', 'gtceu:zpm_quantum_tank')
    event.add('tfg:insulating_container', 'gtceu:uv_quantum_tank')
    event.add('tfg:insulating_container', 'gtceu:uhv_quantum_tank')
    event.add('tfg:insulating_container', 'gtceu:glass_vial')
    event.add('tfg:insulating_container', 'gtceu:fluid_cell')
    event.add('tfg:insulating_container', 'gtceu:universal_fluid_cell')
    event.add('tfg:insulating_container', 'gtceu:steel_fluid_cell')
    event.add('tfg:insulating_container', 'gtceu:aluminium_fluid_cell')
    event.add('tfg:insulating_container', 'gtceu:stainless_steel_fluid_cell')
    event.add('tfg:insulating_container', 'gtceu:titanium_fluid_cell')
    event.add('tfg:insulating_container', 'gtceu:tungsten_steel_fluid_cell')

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
}

const registerHotOrNotBlockTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.HOT_OR_NOT_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}