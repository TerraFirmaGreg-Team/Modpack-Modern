"use strict";

function addDisabledTool(event, id) {
    event.add('c:hidden_from_recipe_viewers', id);
    event.add('tfg:remove_tools', id);
}

function registerDisabledTools(event) {
    // For HV+ Tier removal
    const MATERIALS_BY_MOD_HV = {
        'gtceu': ['hsse', 'duranium', 'naquadah_alloy', 'tungsten_carbide', 'ultimet', 'ostrum_iodide', 'vanadium_steel', 'neutronium'],
        'tfg': ['boron_carbide']
    };
    const TIERS_HV = ['lv'];

    Object.entries(MATERIALS_BY_MOD_HV).forEach(([modId, materials]) => {
        materials.forEach(material => {
            ['wire_cutter', 'screwdriver', 'wrench', 'buzzsaw'].forEach(tool => {
                addDisabledTool(event, `${modId}:${material}_${tool}`);
            });
        });
        materials.forEach(material => {
            TIERS_HV.forEach(tier => {
                ['wire_cutter', 'drill', 'wrench', 'screwdriver', 'chainsaw'].forEach(tool => {
                    addDisabledTool(event, `${modId}:${tier}_${material}_${tool}`);
                });
            });
        });
    });

    /*
    // For MV Tier removal
    const MATERIALS_MV = ['vanadium_steel'];
    const TIERS_MV = ['lv'];
    MATERIALS_MV.forEach(material => {
        ['wire_cutter', 'screwdriver', 'wrench'].forEach(tool => {
            addDisabledTool(event, `gtceu:${material}_${tool}`);
        });
    });
    MATERIALS_MV.forEach(material => {
        TIERS_MV.forEach(tier => {
            ['drill'].forEach(tool => {
                addDisabledTool(event, `gtceu:${tier}_${material}_${tool}`);
            });
        });
    });
    */

    // For ULV Tier removal
    const MATERIALS_ULV = ['black_steel', 'copper', 'bismuth_bronze', 'black_bronze', 'bronze', 'wrought_iron', 'steel'];
    const TIERS_ULV = ['lv'];
    MATERIALS_ULV.forEach(material => {
        TIERS_ULV.forEach(tier => {
            ['wrench', 'wire_cutter', 'screwdriver'].forEach(tool => {
                addDisabledTool(event, `gtceu:${tier}_${material}_${tool}`);
            });
        });
    });

    // For Soft Hammer
    const MATERIALS_PLASTIC = ['polyethylene', 'polybenzimidazole', 'polytetrafluoroethylene'];
    MATERIALS_PLASTIC.forEach(material => {
        ['mallet', 'plunger'].forEach(tool => {
            addDisabledTool(event, `gtceu:${material}_${tool}`);
        });
    });
}