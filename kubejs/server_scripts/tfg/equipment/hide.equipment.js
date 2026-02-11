"use strict";
function registerDisabledTools(event) {
    const TOOL_PATTERNS = [
        'screwdriver',
        'wrench',
        'wire_cutter',
        'drill'
    ];
    
    const MATERIALS = ['hsse', 'duranium', 'naquadah_alloy'];
    const TIERS = ['lv'];
    
    MATERIALS.forEach(material => {
        ['screwdriver', 'wrench'].forEach(tool => {
            event.add('tfg:delete_test', `gtceu:${material}_${tool}`);
        });
    });
    
    MATERIALS.forEach(material => {
        TIERS.forEach(tier => {
            ['wire_cutter', 'drill', 'wrench'].forEach(tool => {
                event.add('tfg:delete_test', `gtceu:${tier}_${material}_${tool}`);
            });
        });
    });
}