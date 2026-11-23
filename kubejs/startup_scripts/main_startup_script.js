// priority: 100
"use strict";

/** 
 * Correct strings to replace invalid characters for use in recipe IDs.
 * @param {string} value - The string to correct.
 * @returns {string} The corrected string. Example: `minecraft:iron_ingot` -> `minecraft_iron_ingot`
 */
global.linuxUnfucker = function(value) {
	let str = (value === undefined || value === null) ? "" : String(value);
	// 1. Convert to en_us lowercase first to handle languages like Turkish.
	// 2. Replace all characters except "a-z", "0-9", and "_" with "_".
	// 3. Remove any leading and trailing underscores.
	return str.toLocaleLowerCase('en-US').replace(/[^0-9_a-z]+/g, "_").replace(/^_+|_+$/g, "");
};

//We put this here so the other constant javascript files can reference them properly
global.getWoodStructArray = function(){
    return global.TFC_WOOD_STRUCT
    .concat(global.AFC_WOOD_STRUCT)
    .concat(global.BENEATH_WOOD_STRUCT);
}
/**
 * @typedef {Object} WoodKindEnum
 * @property {"HARD"} HARD
 * @property {"SOFT"} SOFT
 * @property {"NONE"} NONE
 */

/** @type {WoodKindEnum} */
global.WOOD_KIND = ({
    HARD: "HARD",
    SOFT: "SOFT",
    NONE: "NONE"
});

global.woodStructHelpers =
{
    astikorData: function (nameSpace, woodName)
    {
        return {
            wheel: `${nameSpace}:wheel/${woodName}`,
            supply_cart: `${nameSpace}:supply_cart/${woodName}`,
            plow: `${nameSpace}:plow/${woodName}`,
            animal_cart: `${nameSpace}:animal_cart/${woodName}`
        };
    },
    logDataUnstripped: function(nameSpace, woodName, count)
    {
        return this.logData(nameSpace, woodName, true, false, true, false, count);
    },
    logDataStripped: function(nameSpace, woodName, count)
    {
        return this.logData(nameSpace, woodName, false, true, false, true, count);
    },
    logDataLogs: function(nameSpace, woodName, count)
    {
        return this.logData(nameSpace, woodName, true, true, false, false, count)
    },
    logDataWoods: function(namespace, woodName, count)
    {
        return this.logData(namespace, woodName, false, false, true, true, count);
    },
    logDataFull: function(nameSpace, woodName, count)
    {
        return this.logData(nameSpace, woodName, true, true, true, true, count);
    },
    tapperOutput: function(tapperOutput, count)
    {
        let result = [];
        for(let index = 0; index < count; index++)
        {
            result.push(tapperOutput);
        }
        return result;
    },
    treeTwig: function(nameSpace, woodName)
    {
        return `${nameSpace}:wood/twig/${woodName}`;
    },
    twigArray: function(nameSpace, woodName, count)
    {        
        let result = [];
        for(let index = 0; index < count; index++)
        {
            result.push(this.treeTwig(nameSpace, woodName));
        }
        return result;
    },
    logData: function(nameSpace, woodName, hasLog, hasStrippedLog, hasWood, hasStrippedWood, count)
    {
        let logData = 
        {
            log: hasLog ? `${nameSpace}:wood/log/${woodName}` : null,
            stripped_log: hasStrippedLog ? `${nameSpace}:wood/stripped_log/${woodName}` : null,
            wood: hasWood ? `${nameSpace}:wood/wood/${woodName}` : null,
            stripped_wood: hasStrippedWood ? `${nameSpace}:wood/stripped_wood/${woodName}` : null,
        };

        if(count == 1)
        {
            return logData;
        }
        else{
            let result = [];
            for (let index = 0; index < count; index++) {
                result.push(logData);
            }
            return result;
        }
    },
    treeData: function(arrayLen, nameSpaces, logDatas, leafNames, saplingNames, twigs, tapperOutputs)
    {
        let result = [];
        for (let index = 0; index < arrayLen; index++) {

            let treeName = leafNames[index];
            let nameSpace = nameSpaces[index];
            let logData = logDatas[index];
            let leafBlock = `${nameSpaces[index]}:wood/leaves/${leafNames[index]}`;
            let fallenLeaves = `${nameSpaces[index]}:wood/fallen_leaves/${leafNames[index]}`;
            let sapling = `${nameSpaces[index]}:wood/sapling/${saplingNames[index]}`;
            let twig = twigs[index];
            let tapperOutput = tapperOutputs[index];

            result.push({ 
                tree_name: treeName,
                nameSpace: nameSpace,
                log_data: logData,
                leaf_block: leafBlock,
                fallen_leaves: fallenLeaves,
                sapling: sapling,
                twig: twig,
                tapper_output: tapperOutput
            });
        }
        return result;
    },
    firmalifeData: function(nameSpace, input)
    {
        return{
            foodShelf: `${nameSpace}:wood/food_shelf/${input}`,
            hanger: `${nameSpace}:wood/hanger/${input}`,
            jarbnet: `${nameSpace}:wood/jarbnet/${input}`,
            big_barrel: `${nameSpace}:wood/big_barrel/${input}`,
            wine_shelf: `${nameSpace}:wood/wine_shelf/${input}`,
            stomping_barrel: `${nameSpace}:wood/stomping_barrel/${input}`,
            barrel_press: `${nameSpace}:wood/barrel_press/${input}`,
        }
    },
    tfcData: function(nameSpace, input)
    {
        return{
            sewing_table: `${nameSpace}:wood/sewing_table/${input}`,
            scribing_table: `${nameSpace}:wood/scribing_table/${input}`,
            jar_shelf: `${nameSpace}:wood/jar_shelf/${input}`,
            chest_minecart: `${nameSpace}:wood/chest_minecart`,
        }
    },
    macawAIO: function(nameSpace, input)
    {
        function bridges(nameSpace, input)
        {
                return [
                `${nameSpace}:bridges/${input}_bridges/${input}_bridge_pier`,
                `${nameSpace}:bridges/${input}_bridges/${input}_log_bridge_middle`,
                `${nameSpace}:bridges/${input}_bridges/${input}_log_bridge_stair`,
                `${nameSpace}:bridges/${input}_bridges/${input}_rail_bridge`,
                `${nameSpace}:bridges/${input}_bridges/rope_${input}_bridge`,
                `${nameSpace}:bridges/${input}_bridges/${input}_rope_bridge_stair`,
            ]
        }

        function fences(nameSpace, input)
        {
            return [
                `${nameSpace}:bridges/${input}_bridges/${input}_bridge_pier`,
                `${nameSpace}:bridges/${input}_bridges/${input}_log_bridge_middle`,
                `${nameSpace}:bridges/${input}_bridges/${input}_log_bridge_stair`,
                `${nameSpace}:bridges/${input}_bridges/${input}_rail_bridge`,
                `${nameSpace}:bridges/${input}_bridges/rope_${input}_bridge`,
                `${nameSpace}:bridges/${input}_bridges/${input}_rope_bridge_stair`,
            ];
        }

        function roofs(nameSpace, input)
        {
            const ROOF_TYPES = [
                '_attic_roof',
                '_lower_roof',
                '_roof',
                '_steep_roof',
                '_top_roof',
                '_upper_lower_roof',
                '_upper_steep_roof'
            ]

            let result = [];
            ROOF_TYPES.forEach(roofType =>
            {
                result.push(`${nameSpace}:roof/${input}_roofs/${input}_planks${roofType}`);
                result.push(`${nameSpace}:roof/${input}_roofs/${input}${roofType}`);
            });

            return result;
        }

        function furniture(nameSpace, input)
        {
            const MACAW_FURNITURE_TYPES = [
                '_wardrobe',
                '_chair',
                '_modern_wardrobe',
                '_double_wardrobe',
                '_bookshelf',
                '_bookshelf_cupboard',
                '_drawer',
                '_double_drawer',
                '_bookshelf_drawer',
                '_lower_bookshelf_drawer',
                '_large_drawer',
                '_lower_triple_drawer',
                '_triple_drawer',
                '_desk',
                '_covered_desk',
                '_modern_desk',
                '_table',
                '_end_table',
                '_coffee_table',
                '_glass_table',
                '_modern_chair',
                '_striped_chair',
                '_stool_chair',
                '_counter',
                '_drawer_counter',
                '_double_drawer_counter',
                '_cupboard_counter'
            ];

            const regular = () =>
            {
                let result = []
                MACAW_FURNITURE_TYPES.forEach(furnitureType =>
                {
                    result.push(`${nameSpace}:furniture/${input}_furniture/${input}${furnitureType}`);
                })
                return result;
            }

            const stripped = () =>
            {
                let result = []
                MACAW_FURNITURE_TYPES.forEach(furnitureType =>
                {
                    result.push(`${nameSpace}:furniture/${input}_furniture/stripped_${input}${furnitureType}`);
                })
                return result;
            }

            return{
                regular: regular(),
                stripped: stripped()
            };
        }

        return{
            bridges: bridges(nameSpace, input),
            fences: fences(nameSpace, input),
            roofs: roofs(nameSpace, input),
            furniture: furniture(nameSpace, input)
        };
    },
    rnrData: function(nameSpace, input)
    {
        return{
            shingle: `${nameSpace}:wood/shingle/${input}`,
            shingle_block: `${nameSpace}:wood/shingles/${input}`,
            shingle_stair: `${nameSpace}:wood/shingles/${input}_stairs`,
            shingle_slab: `${nameSpace}:wood/shingles/${input}_slab`,
        }
    },
    railwaysData: function(nameSpace, input)
    {
        return {
            track: `${nameSpace}:track_${input}`,
            incomplete_track: `${nameSpace}:track_incomplete_${input}`,
            track_wide: `${nameSpace}:track_${input}_wide`,
            incomplete_track_wide: `${nameSpace}:track_incomplete_${input}_wide`,
            track_narrow: `${nameSpace}:track_${input}_narrow`,
            incomplete_track_narrow: `${nameSpace}:track_incomplete_${input}_narrow`
        };
    }
}

StartupEvents.registry('item', event => {
    registerTFGItems(event)
})

StartupEvents.registry('block', event => {
	registerTFGBlocks(event)
})

BlockEvents.modification(event => {
	registerAdAstraBlockModifications(event)
	registerAliencraftBlockModification(event)
	registerBeneathBlockModifications(event)
	registerSpeciesBlockModifications(event)
	registerMinecraftBlockModifications(event)
})

ItemEvents.modification(event => {
	registerAdAstraItemModifications(event)
	registerBeneathItemModifications(event)
	registerCreateItemModifications(event)
	registerFirmalifeItemModifications(event)
	registerGTCEuItemModifications(event)
	registerMinecraftItemModifications(event)
    registerSNSItemModifications(event)
	registerSpeciesItemModifications(event)
	registerTFGItemModifications(event)
	registerTFCHotOrNotItemModifications(event)
})

StartupEvents.registry('fluid', event => {
	registerTFGFluids(event)
})

StartupEvents.registry('sound_event', event => {
	registerTFGSounds(event)
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	registerGTCEuRecipeTypes(event)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
	registerGTCEuMachines(event)
})

GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
	registerAE2TagPrefixes(event)
	registerGTCEuTagPrefixes(event)
	registerTFGTagPrefixes(event)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
	registerAE2Materials(event)
	registerCreateMaterials(event)
	registerGreateMaterials(event)
	registerTFGMaterials(event)
})

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
	registerTFGIconSets(event)
})

GTCEuStartupEvents.materialModification(event => {
	registerGreateMaterialModification(event)
	registerTFGMaterialModification(event)
})

GTCEuStartupEvents.registry('gtceu:dimension_marker', event => {
	registerTFGDimensionMarkers(event)
})

GTCEuStartupEvents.registry("gtceu:element", event => {
	registerTFGElement(event)
})

GTCEuStartupEvents.craftingComponents(event => {
	registerTFGCraftingComponents(event)
})

Platform.mods.primitive_creatures.name = "Primitive Creatures";
Platform.mods.tfg.name = "TerraFirmaGreg";
Platform.mods.kubejs.name = "TerraFirmaGreg";
Platform.mods.wan_ancient_beasts.name = "Wan's Ancient Beasts";
