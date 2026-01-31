// priority: 0
"use strict";

const registerAE2ItemTags = (event) => {
    
    global.AE2_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })

    event.remove('forge:storage_blocks', 'ae2:quartz_block')
    event.remove('forge:storage_blocks/certus_quartz', 'ae2:quartz_block')

    event.removeAll('ae2:p2p_attunements/fe_p2p_tunnel')
    
    event.add('tfg:stone_dusts', 'ae2:sky_dust')

    event.add('tfg:reactant_fluix_ruby', 'gtceu:ruby_gem')
    event.add('tfg:reactant_fluix_ruby', 'gtceu:armalcolite_gem')

    event.add('tfg:reactant_fluix_ruby_exquisite', 'gtceu:exquisite_ruby_gem')
    event.add('tfg:reactant_fluix_ruby_exquisite', 'gtceu:exquisite_armalcolite_gem')

    event.add('tfg:reactant_fluix_quartz', 'minecraft:quartz')
    event.add('tfg:reactant_fluix_quartz', 'gtceu:quartzite_gem')

    event.add('tfg:reactant_fluix_quartz_exquisite', 'gtceu:exquisite_nether_quartz_gem')
    event.add('tfg:reactant_fluix_quartz_exquisite', 'gtceu:exquisite_quartzite_gem')
}

const registerAE2BlockTags = (event) => {
    
	registerAe2FacadeWhitelistTags(event)
    
    global.AE2_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })

}