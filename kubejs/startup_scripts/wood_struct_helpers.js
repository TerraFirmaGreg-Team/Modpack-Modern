// priority: 100
"use strict";

//We put this here so the other constant javascript files can reference them properly
/**
 * Returns an array of WoodStruct containing all the wood structure data from TFC, AFC, and Beneath mods.
 * @returns {WoodStruct[]}
 */
global.getWoodStructArray = function(){
    return global.TFC_WOOD_STRUCT
    .concat(global.AFC_WOOD_STRUCT)
    .concat(global.BENEATH_WOOD_STRUCT)
    .concat(global.AD_ASTRA_WOOD_STRUCT)
    .concat(global.WAB_WOOD_STRUCT);
};


/**
 * @typedef {Object} WoodKindEnum
 * @property {"HARD"} HARD Rerpresents a Hard Wood, used to make Rowboats, Sloops, can be used for paper making
 * @property {"SOFT"} SOFT Represents a Soft Wood, used to make Canoes, cannot be used for paper making
 * @property {"NONE"} NONE Represents a wood that is not a Hard or Soft wood, cannot be used to make Rowboats, Sloops, Canoes, or paper
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
    arrayAll: function(value, count)
    {
        let result = [];
        for(let index = 0; index < count; index++)
        {
            result.push(value);
        }
        return result;
    },
    tfcTreeTwig: function(nameSpace, woodName)
    {
        return this.resLocFormat(nameSpace, "wood/twig/{0}", woodName);
    },
    tfcSapling: function(namespace, woodName)
    {
        return this.resLocFormat(namespace, "wood/sapling/{0}", woodName);
    },
    tfcLeaves: function(nameSpace, woodName)
    {
        return this.resLocFormat(nameSpace, "wood/leaves/{0}", woodName);
    },
    tfcFallenLeaves: function(nameSpace, woodName)
    {
        return this.resLocFormat(nameSpace, "wood/fallen_leaves/{0}", woodName)
    },
    tfcWoodFormatArray()
    {
        return [
            "wood/log/{0}",
            "wood/stripped_log/{0}",
            "wood/wood/{0}",
            "wood/stripped_wood/{0}"
        ];
    },
    tfcUnstrippedWoodFormatArray()
    {
        let result = this.tfcWoodFormatArray();
        result[1] = null;
        result[3] = null;
        return result;
    },
    resLocFormat: function(nameSpace, format, value)
    {
        return global.stringFormat(`${nameSpace}:${format}`, value);
    },
    tfcFuelData: function(temperature, duration, purity)
    {
        return{
            temperature: temperature,
            duration: duration,
            purity: purity
        }
    },
    logDataFormat: function(nameSpace, woodFormats, woodName, fuelObject, count)
    {
        let logData =
        {
            log: woodFormats[0] ? this.resLocFormat(nameSpace, woodFormats[0], woodName) : null,
            stripped_log: woodFormats[1] ? this.resLocFormat(nameSpace, woodFormats[1], woodName) : null,
            wood: woodFormats[2] ? this.resLocFormat(nameSpace, woodFormats[2], woodName) : null,
            stripped_wood: woodFormats[3] ? this.resLocFormat(nameSpace, woodFormats[3], woodName) : null,
            fuel_data: fuelObject ? fuelObject : null
        };

        if(count == 1)
        {
            return logData;
        }
        else
        {
            let result = [];
            for (let index = 0; index < count; index++) {
                result.push(logData);
            }
            return result;
        }
    },
    logDataNamespaceFormat: function(woodFormatsWithNamespaces, woodName, fuelObject, count)
    {
        let logData = 
        {
            log: woodFormatsWithNamespaces[0] ? global.stringFormat(woodFormatsWithNamespaces[0], woodName) : null,
            stripped_log: woodFormatsWithNamespaces[1] ? global.stringFormat(woodFormatsWithNamespaces[1], woodName) : null,
            wood: woodFormatsWithNamespaces[2] ? global.stringFormat(woodFormatsWithNamespaces[2], woodName) : null,
            stripped_wood: woodFormatsWithNamespaces[3] ? global.stringFormat(woodFormatsWithNamespaces[3], woodName) : null,
            fuel_data: fuelObject ? fuelObject : null,
        };

        if(count == 1)
        {
            return logData;
        }
        else
        {
            let result = [];
            for(let index = 0; index < count; index++)
            {
                result.push(logData);
            }
            return result;
        }
    },
    treeData2: function(arrayLen, nameSpaces, treeNames, logDatas, leafBlocks, fallenLeafBlocks, saplings, twigs, tapperOutputs, dimensions)
    {
        let result = [];
        for (let index = 0; index < arrayLen; index++) {

            let treeName = treeNames[index];
            let nameSpace = nameSpaces[index];
            let logData = logDatas[index];
            let leafBlock = leafBlocks[index];
            let fallenLeaves = fallenLeafBlocks[index];
            let sapling = saplings[index];
            let twig = twigs[index];
            let tapperOutput = tapperOutputs[index];
            let dimension = dimensions[index];

            result.push({ 
                tree_name: treeName,
                nameSpace: nameSpace,
                log_data: logData,
                leaf_block: leafBlock,
                fallen_leaves: fallenLeaves,
                sapling: sapling,
                twig: twig,
                tapper_output: tapperOutput,
                dimension: dimension,
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
    tfcDataTFG: function(nameSpace, input)
    {
        return{
            sewing_table: `${nameSpace}:wood/sewing_table/${input}`,
            scribing_table: `${nameSpace}:wood/scribing_table/${input}`,
            jar_shelf: `${nameSpace}:wood/jar_shelf/${input}`,
            chest_minecart: null,
        }
    },
    tfgData(barkColor, woodColor, leafColor, woodSound, leafSound, daysToGrow, location)
    {
        return {
            barkColor: barkColor,
            woodColor: woodColor,
            leafColor: leafColor,
            woodSound: woodSound,
            leafSound: leafSound,
            daysToGrow: daysToGrow,
            location: location
        };
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

