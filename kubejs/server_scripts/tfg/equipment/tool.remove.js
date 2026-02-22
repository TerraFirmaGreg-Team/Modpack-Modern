// priority: -1
"use strict";

ServerEvents.recipes(event => {
    const MATERIALS_BY_MOD_HV = {
        'gtceu': ['hsse', 'duranium', 'naquadah_alloy', 'tungsten_carbide', 'ultimet', 'ostrum_iodide', 'vanadium_steel', 'neutronium'],
        'tfg': ['boron_carbide']
    };
    const TIERS_HV = ['lv'];
    const MATERIALS_ULV = ['black_steel', 'copper', 'bismuth_bronze', 'black_bronze', 'bronze', 'wrought_iron', 'steel'];
    const TIERS_ULV = ['lv'];
    const MATERIALS_PLASTIC = ['polyethylene', 'polybenzimidazole', 'polytetrafluoroethylene'];

    Object.entries(MATERIALS_BY_MOD_HV).forEach(([modId, materials]) => {
        materials.forEach(material => {
            ['wire_cutter', 'screwdriver', 'wrench', 'buzzsaw'].forEach(tool => {
                event.remove({ output: `${modId}:${material}_${tool}` });
            });
            TIERS_HV.forEach(tier => {
                ['wire_cutter', 'drill', 'wrench', 'screwdriver', 'chainsaw'].forEach(tool => {
                    event.remove({ output: `${modId}:${tier}_${material}_${tool}` });
                });
            });
        });
    });

    MATERIALS_ULV.forEach(material => {
        TIERS_ULV.forEach(tier => {
            ['wrench', 'wire_cutter', 'screwdriver'].forEach(tool => {
                event.remove({ output: `gtceu:${tier}_${material}_${tool}` });
            });
        });
    });

    MATERIALS_PLASTIC.forEach(material => {
        ['mallet'].forEach(tool => {
            event.remove({ output: `gtceu:${material}_${tool}` });
        });
    });
});