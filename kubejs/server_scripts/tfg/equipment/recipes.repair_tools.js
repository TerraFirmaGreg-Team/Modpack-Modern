// Because it's impossible to delete a GTTools in a shapeless recipe without losing its NBT or even modifying the NBT of the tool by a certain amount we are using a different method.
// This function is used to create recipes for every TFG/GT Tools with their repair kit and the percentage of reperation each kits can do.
// Everytime you craft this recipe the event TFGRepairHelper in TFG Core is trigger and recreate the tool with all its NBT.
// The Bonus is that you can choose the amount of reparation for each type of tools. Also we need 4 functions because GT name for their tools is stupid.

function registerTFGRepairKitRecipes(event) {

    const ELECTRIC_TOOLS = ['drill', 'buzzsaw', 'wrench', 'chainsaw', 'wire_cutter', 'screwdriver'];
    const MANUAL_TOOLS = ['knife', 'hoe', 'scythe', 'hammer', 'file', 'sword', 'butchery_knife', 'crowbar'];
    const ONLY_MANUAL_TOOLS = ['spade', 'pickaxe', 'shovel', 'axe', 'wrench', 'mortar', 'saw', 'screwdriver', 'wire_cutter', 'mining_hammer'];
    const ONLY_COLORED_TOOLS = ['buzzsaw'];

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

    function repairOnlyManualTools(namespace, material, repairPercent) {
        ONLY_MANUAL_TOOLS.forEach(tool => {
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



    function repairColoredSteel(namespace, material, repairPercent) {
        ONLY_COLORED_TOOLS.forEach(tool => {
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

    // 'namespace':'tier if electric'_material' Amount repaired in percentage

    repairColoredSteel('gtceu', 'red_steel', 0.25);
    repairColoredSteel('gtceu', 'blue_steel', 0.25);

    repairElectricTools('tfg', 'hv', 'boron_carbide', 0.25);
    repairElectricTools('tfg', 'mv', 'diamond_tipped_mo_50_re', 0.25);
    repairElectricTools('gtceu', 'iv', 'hsse', 0.25);
    repairElectricTools('gtceu', 'iv', 'naquadah_alloy', 0.25);
    repairElectricTools('gtceu', 'iv', 'duranium', 0.25);
    repairElectricTools('gtceu', 'ev', 'ostrum_iodide', 0.25);
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
    repairManualTools('gtceu', 'ostrum_iodide', 0.25);
    repairManualTools('gtceu', 'tungsten_carbide', 0.25);
    repairManualTools('gtceu', 'ultimet', 0.25);
    repairManualTools('gtceu', 'blue_steel', 0.25);
    repairManualTools('gtceu', 'red_steel', 0.25);
    repairManualTools('gtceu', 'vanadium_steel', 0.25);

    repairOnlyManualTools('gtceu', 'black_bronze', 0.25);
    repairOnlyManualTools('gtceu', 'black_steel', 0.25);
    repairOnlyManualTools('gtceu', 'steel', 0.25);
    repairOnlyManualTools('gtceu', 'wrought_iron', 0.25);
    repairOnlyManualTools('gtceu', 'bronze', 0.25);
    repairOnlyManualTools('gtceu', 'copper', 0.25);
    repairOnlyManualTools('gtceu', 'bismuth_bronze', 0.25);

    repairOnlyManualTools('gtceu', 'blue_steel', 0.25);
    repairOnlyManualTools('gtceu', 'red_steel', 0.25);

    repairManualTools('gtceu', 'black_bronze', 0.25);
    repairManualTools('gtceu', 'black_steel', 0.25);
    repairManualTools('gtceu', 'steel', 0.25);
    repairManualTools('gtceu', 'wrought_iron', 0.25);
    repairManualTools('gtceu', 'bronze', 0.25);
    repairManualTools('gtceu', 'copper', 0.25);
    repairManualTools('gtceu', 'bismuth_bronze', 0.25);

    //#region Generate recipe for Repair Kit
/*
    Okay maintenant j'ai besoin de faire la recette pour fabriquer les unfired repair kit
Je voudrais les faire à partir de
#tfg:stone_dusts
'minecraft:clay_ball'
'#forge:dusts/${material}'
dans une shapeless recipe avec 'gtceu:brick_wooden_form' qui ne serait pas consommer
*/
    function materialUnfiredRepairKit(namespace, material) {
        event.shapeless(
            Item.of(`${namespace}:unfired_repair_kit_${material}`, 16), // arg 1: output
            [
                'gtceu:brick_wooden_form',
                '#tfg:stone_dusts',
                'minecraft:clay_ball',
                `#forge:dusts/${material}`
            ]
            )

        event.recipes.gtceu.assembler(`tfg:unfired_repair_kit_${namespace}_${material}`)
            .notConsumable('gtceu:brick_wooden_form')
            .itemInputs(
                '#tfg:stone_dusts',
                'minecraft:clay_ball',
                `#forge:dusts/${material}`)
            .itemOutputs(Item.of(`${namespace}:unfired_repair_kit_${material}`, 16))
            .duration(20 * 5)
            .EUt(GTValues.VHA[GTValues.LV])
            .circuit(7)
    }

    materialUnfiredRepairKit('tfg', 'boron_carbide');
    //materialUnfiredRepairKit('tfg', 'diamond_tipped_mo_50_re');
    materialUnfiredRepairKit('gtceu', 'hsse');
    materialUnfiredRepairKit('gtceu', 'naquadah_alloy');
    materialUnfiredRepairKit('gtceu', 'duranium');
    materialUnfiredRepairKit('gtceu', 'ostrum_iodide');
    materialUnfiredRepairKit('gtceu', 'tungsten_carbide');
    materialUnfiredRepairKit('gtceu', 'ultimet');
    materialUnfiredRepairKit('gtceu', 'blue_steel');
    materialUnfiredRepairKit('gtceu', 'red_steel');
    materialUnfiredRepairKit('gtceu', 'vanadium_steel');
    materialUnfiredRepairKit('gtceu', 'black_bronze');
    materialUnfiredRepairKit('gtceu', 'black_steel');
    materialUnfiredRepairKit('gtceu', 'steel');
    materialUnfiredRepairKit('gtceu', 'wrought_iron');
    materialUnfiredRepairKit('gtceu', 'bronze');
    materialUnfiredRepairKit('gtceu', 'copper');
    materialUnfiredRepairKit('gtceu', 'bismuth_bronze');

    event.recipes.gtceu.assembler(`tfg:unfired_repair_kit_tfg_unfired_repair_kit_diamond_tipped_mo_50_re}`)
            .notConsumable('gtceu:brick_wooden_form')
            .itemInputs(
                '#tfg:stone_dusts',
                'minecraft:clay_ball',
                `#forge:ingots/diamond_tipped_mo_50_re`)
            .itemOutputs(Item.of(`tfg:unfired_repair_kit_diamond_tipped_mo_50_re`, 16))
            .duration(20 * 5)
            .EUt(GTValues.VHA[GTValues.LV])
            .circuit(7)

    event.shapeless(
            Item.of(`tfg:unfired_repair_kit_diamond_tipped_mo_50_re`, 16), // arg 1: output
            [
                'gtceu:brick_wooden_form',
                '#tfg:stone_dusts',
                'minecraft:clay_ball',
                `#forge:ingots/diamond_tipped_mo_50_re`
            ]
            )


    function materialPrimalKit(namespace, repairKitMaterial) {
    event.recipes.tfc.heating(`${namespace}:unfired_repair_kit_${repairKitMaterial}`, 1399)
		.resultItem(`${namespace}:repair_kit_${repairKitMaterial}`)
        .id(`tfg:heating/repair_kit_${namespace}_${repairKitMaterial}`)
    }
/*
    function materialPrimalKit(namespace, repairKitMaterial) {
        event.recipes.tfc.anvil(
            `16x ${namespace}:repair_kit_${repairKitMaterial}`,
            `#forge:ingots/${repairKitMaterial}`,
            ['hit_last', 'hit_second_last', 'hit_third_last']
        )
        .id(`tfg:anvil/repair_kit_${repairKitMaterial}`);
        }
*/
    materialPrimalKit('gtceu', 'black_bronze');
    materialPrimalKit('gtceu', 'black_steel');
    materialPrimalKit('gtceu', 'steel');
    materialPrimalKit('gtceu', 'wrought_iron');
    materialPrimalKit('gtceu', 'bronze');
    materialPrimalKit('gtceu', 'copper');
    materialPrimalKit('gtceu', 'bismuth_bronze');
    materialPrimalKit('gtceu', 'blue_steel');
    materialPrimalKit('gtceu', 'red_steel');

    function materialElectricKit(namespace, repairKitMaterial) {
    event.smelting(
        Item.of(`${namespace}:repair_kit_${repairKitMaterial}`),
        `${namespace}:unfired_repair_kit_${repairKitMaterial}`
    )
    .id(`tfg:smelting/repair_kit_${namespace}_${repairKitMaterial}`)
    }

    materialElectricKit('tfg', 'boron_carbide');
    materialElectricKit('tfg', 'diamond_tipped_mo_50_re');
    materialElectricKit('gtceu', 'hsse');
    materialElectricKit('gtceu', 'naquadah_alloy');
    materialElectricKit('gtceu', 'duranium');
    materialElectricKit('gtceu', 'ostrum_iodide');
    materialElectricKit('gtceu', 'tungsten_carbide');
    materialElectricKit('gtceu', 'ultimet');
    materialElectricKit('gtceu', 'blue_steel');
    materialElectricKit('gtceu', 'red_steel');
    materialElectricKit('gtceu', 'vanadium_steel');
    materialElectricKit('gtceu', 'black_bronze');
    materialElectricKit('gtceu', 'black_steel');
    materialElectricKit('gtceu', 'steel');
    materialElectricKit('gtceu', 'wrought_iron');
    materialElectricKit('gtceu', 'bronze');
    materialElectricKit('gtceu', 'copper');
    materialElectricKit('gtceu', 'bismuth_bronze');
};