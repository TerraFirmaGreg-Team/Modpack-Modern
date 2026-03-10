ServerEvents.recipes(event => {
    const ELECTRIC_TOOLS = ['drill', 'buzzsaw', 'wrench', 'chainsaw', 'wire_cutter', 'screwdriver'];
    const MANUAL_TOOLS = ['knife', 'hoe', 'scythe', 'hammer', 'file', 'sword', 'butchery_knife', 'crowbar'];

    function repairElectricTools(namespace, tierMaterial, repairKitMaterial, repairPercent) {
        ELECTRIC_TOOLS.forEach(tool => {
            let toolId = `${namespace}:${tierMaterial}_${repairKitMaterial}_${tool}`;
            let repairKitId = `${namespace}:repair_kit_${repairKitMaterial}`;
            if (!Item.of(toolId).isEmpty() && !Item.of(repairKitId).isEmpty()) {
                event.recipes.tfc.no_remainder_shapeless_crafting(
                    event.shapeless(
                        toolId,
                        [
                            toolId,
                            Item.of(repairKitId, `{RepairPercent:${repairPercent}f}`)
                        ]
                    )
                );
            }
        });
    }

    function repairManualTools(namespace, material, repairPercent) {
        MANUAL_TOOLS.forEach(tool => {
            let toolId = `${namespace}:${material}_${tool}`;
            let repairKitId = `${namespace}:repair_kit_${material}`;
            if (!Item.of(toolId).isEmpty() && !Item.of(repairKitId).isEmpty()) {
                event.recipes.tfc.no_remainder_shapeless_crafting(
                    event.shapeless(
                        toolId,
                        [
                            toolId,
                            Item.of(repairKitId, `{RepairPercent:${repairPercent}f}`)
                        ]
                    )
                );
            }
        });
    }

    repairElectricTools('tfg', 'hv', 'boron_carbide', 0.25);
    repairElectricTools('tfg', 'mv', 'diamond_tipped_mo_50_re', 0.25);
    repairElectricTools('gtceu', 'iv', 'hsse', 0.25);
    repairElectricTools('gtceu', 'iv', 'naquadah_alloy', 0.25);
    repairElectricTools('gtceu', 'iv', 'duranium', 0.25);
    repairElectricTools('tfg', 'ev', 'ostrum_iodide', 0.25);
    repairElectricTools('gtceu', 'ev', 'tungsten_carbide', 0.25);
    repairElectricTools('gtceu', 'hv', 'ultimet', 0.25);
    repairElectricTools('gtceu', 'lv', 'blue_steel', 0.25);
    repairElectricTools('gtceu', 'lv', 'red_steel', 0.25);
    repairElectricTools('gtceu', 'mv', 'vanadium_steel', 0.25);

    repairManualTools('tfg', 'boron_carbide', 0.25);
    repairManualTools('tfg', 'diamond_tipped_mo_50_re', 0.25);
    repairManualTools('gtceu', 'hsse', 0.25);
    repairManualTools('gtceu', 'naquadah_alloy', 0.25);
    repairManualTools('gtceu', 'duranium', 0.25);
    repairManualTools('tfg', 'ostrum_iodide', 0.25);
    repairManualTools('gtceu', 'tungsten_carbide', 0.25);
    repairManualTools('gtceu', 'ultimet', 0.25);
    repairManualTools('gtceu', 'blue_steel', 0.25);
    repairManualTools('gtceu', 'red_steel', 0.25);
    repairManualTools('gtceu', 'vanadium_steel', 0.25);
    repairManualTools('gtceu', 'black_bronze', 0.25);
    //repairManualTools('gtceu', 'damascus_steel', 0.25);
    repairManualTools('gtceu', 'black_steel', 0.25);
    repairManualTools('gtceu', 'wrought_iron', 0.25);
    repairManualTools('gtceu', 'bronze', 0.25);
    repairManualTools('gtceu', 'copper', 0.25);
    repairManualTools('gtceu', 'bismuth_bronze', 0.25);
});