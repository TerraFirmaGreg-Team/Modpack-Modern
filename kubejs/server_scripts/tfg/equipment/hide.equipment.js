"use strict";
function registerDisabledTools(event) {
    // For HV+ Tier removal
    const MATERIALS_BY_MOD_HV = {
        'gtceu': ['hsse', 'duranium', 'naquadah_alloy', 'tungsten_carbide', 'ultimet', 'ostrum_iodide'],
        'tfg': ['boron_carbide']
    };
    const TIERS_HV = ['lv'];
    
    Object.entries(MATERIALS_BY_MOD_HV).forEach(([modId, materials]) => {
        materials.forEach(material => {
            ['wire_cutter', 'screwdriver', 'wrench'].forEach(tool => {
                event.add('c:hidden_from_recipe_viewers', `${modId}:${material}_${tool}`);
                event.add('tfg:remove_tools', `${modId}:${material}_${tool}`);
            });
        });
        
        materials.forEach(material => {
            TIERS_HV.forEach(tier => {
                ['wire_cutter', 'drill', 'wrench'].forEach(tool => {
                    event.add('c:hidden_from_recipe_viewers', `${modId}:${tier}_${material}_${tool}`);
                    event.add('tfg:remove_tools', `${modId}:${tier}_${material}_${tool}`);
                });
            });
        });
    });
    
    // For MV Tier removal
    const MATERIALS_MV = ['vanadium_steel'];
    const TIERS_MV = ['lv'];
    
    MATERIALS_MV.forEach(material => {
        ['wire_cutter', 'screwdriver', 'wrench'].forEach(tool => {
            event.add('c:hidden_from_recipe_viewers', `gtceu:${material}_${tool}`);
            event.add('tfg:remove_tools', `gtceu:${material}_${tool}`);
        });
    });
    
    MATERIALS_MV.forEach(material => {
        TIERS_MV.forEach(tier => {
            ['drill'].forEach(tool => {
                event.add('c:hidden_from_recipe_viewers', `gtceu:${tier}_${material}_${tool}`);
                event.add('tfg:remove_tools', `gtceu:${tier}_${material}_${tool}`);
            });
        });
    });
    
    // For ULV Tier removal
    const MATERIALS_ULV = ['black_steel', 'copper', 'bismuth_bronze', 'black_bronze', 'bronze', 'wrought_iron', 'steel'];
    const TIERS_ULV = ['lv'];
    
    MATERIALS_ULV.forEach(material => {
        TIERS_ULV.forEach(tier => {
            ['wrench', 'wire_cutter', 'screwdriver'].forEach(tool => {
                event.add('c:hidden_from_recipe_viewers', `gtceu:${tier}_${material}_${tool}`);
                event.add('tfg:remove_tools', `gtceu:${tier}_${material}_${tool}`);
            });
        });
    });
}