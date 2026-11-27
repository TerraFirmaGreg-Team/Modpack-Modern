// priority: 100
"use strict";

/**
 * @typedef {Object} WoodStruct - An object that represents common blocks and metadata for wood sets, used for registration, tags, loot, processes
 * @property {boolean} tfgCore Wether this wood is added or "extended" by TFGCore
 * @property {string} modName the name of the mod that adds the wood set
 * @property {string} name the name of the wood set
 * @property {string} logsTag A "Tag" for all the logs of this wood set
 * @property {TreeData[]} tree_data an array of TreeData, containing the metadata for the different trees this wood set has. Create it using global.woodStructHelpers.treeData2();
 * @property {string} lumber ID for the lumber item
 * @property {string} plank ID for the planks block
 * @property {string} stair ID for the stairs block
 * @property {string} slab ID for the slab block
 * @property {string} fence ID for the fence block
 * @property {string} fence_gate ID for the fence gate block
 * @property {string} log_fence ID for the Log Fence block
 * @property {string} door ID for the door block
 * @property {string} trapdoor ID for the trapdoor block
 * @property {string} button ID for the button
 * @property {string} pressure_plate ID for the pressure plate
 * @property {string} chest ID for the chest
 * @property {string} trapped_chest ID for the trapped chest
 * @property {string} chest_minecart ID for the chest minecart
 * @property {string} sign ID for the sign
 * @property {string} hanging_sign ID for the hanging sign, these are not the "different metal chain" signs, rather the vanilla hanging sign
 * @property {string} workbench ID for the workbench
 * @property {string} crafting_station ID for the crafting station
 * @property {string} crafting_station_slab ID for the crafting station slab
 * @property {string} loom ID for the loom
 * @property {string} sewing_table ID for the sewing table
 * @property {string} scribing_table ID for the scribing table
 * @property {string} big_barrel ID for the big barrel
 * @property {string} stomping_barrel ID for the stomping barrel
 * @property {string} barrel ID for the barrel
 * @property {string} barrel_press ID for the barrel press
 * @property {string} sluice ID for the sluice
 * @property {string} tool_rack ID for the tool rack
 * @property {string} lectern ID for the lectern
 * @property {string} jar_shelf ID for the jar shelf
 * @property {string} food_shelf ID for the food shelf
 * @property {string} bookshelf ID for the bookshelf
 * @property {string} jarbnet ID for the jarbnet
 * @property {string} wine_shelf ID for the wine shelf
 * @property {string} support ID for the support
 * @property {string} window ID for the window, usually from everycompat
 * @property {string} window_pane ID for the window pane, usually from everycompat
 * @property {string} roof ID for the wood roofing
 * @property {string} hanger ID for the hanger
 * @property {string} rope_ladder ID for the rope ladder
 * @property {RnrData} rnr_data Metadata regarding Roads and Roofs' Shingles for this wood, Create it using global.woodStructHelpers.rnrData()
 * @property {AstikorData} astikor_data Metadata regarding AstikorCarts' wheel and carts for this wood, Create it using global.woodStructHelpers.astikorData();
 * @property {RailwaysData} railways_data Metadata regarding Railways' tracks for this wood, Create it using global.railwaysData()
 * @property {MacawData} macaw_data Metadata regarding Macaw's AIO's furniture for this wood, create it using global.macawAIO()
 * @property {TfgData} tfg_data Metadata regarding TFG custom wood sets, create it using global.tfgData();
 * @property {WoodKindEnum} woodKind The type of wood, wether its soft, hard or none.
 */

/**
 * @typedef {Object} TreeData - An object representing metadata for a tree for a wood type.
 * @property {string} tree_name The name of the tree
 * @property {string} nameSpace The mod that added this tree
 * @property {LogData} log_data A data object that represents the logs for this tree. Create it using global.woodStructHelpers' logData methods
 * @property {string} leaf_block The leaf block for this tree
 * @property {string} fallen_leaves the fallen leaves for this tree
 * @property {string} sapling The sapling for this tree
 * @property {string} twig The twig for this tree
 * @property {string} tapper_output What kind of sap this tree produces.
 * @property {string} dimension What dimension does this tree belong in, set to null so it can be grown anywhere
 */

/**
 * @typedef {Object} LogData An object representing the logs for a tree
 * @property {string} log The log block
 * @property {string} stripped_log The stripped log block
 * @property {string} wood The Wood block
 * @property {string} stripped_wood the stripped wood block
 */

/**
 * @typedef {Object} RnrData Metadata object for Roads and Roofs
 * @property {string} shingle The shingle item
 * @property {string} shingle_block the shingle block
 * @property {string} shingle_stair the shingle stairs
 * @property {string} shingle_slab the shingle slab
 */

/**
 * @typedef {Object} AstikorData Metadata object for AstikorCarts
 * @property {string} wheel the wheel item
 * @property {string} supply_cart the supply cart
 * @property {string} plow The plow
 * @property {string} animal_cart the animal cart
 */

/**
 * @typedef {Object} RailwaysData Metadata object for Railways
 * @property {string} track the track block
 * @property {string} incomplete_track the incomplete track item
 * @property {string} track_narrow the track narrow block
 * @property {string} incomplete_track_narrow the incomplete track narrow item
 * @property {string} track_wide the track wide block
 * @property {string} incomplete_track_wide the incomplete track wide item
 */

/**
 * @typedef {Object} MacawData Metadata object for Macaw's AIO
 * @property {string[]} bridges the bridge blocks
 * @property {string[]} fences the fence blocks
 * @property {string[]} roofs the roof blocks
 * @property {MacawFurniture[]} furniture An array of macaw furniture objects
 */

/**
 * @typedef {Object} MacawFurniture metadata for furniture objects for Macaw's AIO
 * @property {string[]} regular the regular wood furniture array
 * @property {string[]} stripped the stripped wood versions of the furniture
 */

/**
 * @typedef {Object} TfgData metadata for TFG's custom wood sets
 * @property {string} barkColor the color for the bark
 * @property {string} woodColor the color for the wood
 * @property {string} leafColor the color for the leaves
 * @property {string} woodSound the sound for the wood
 * @property {string} leafSound the sound for the leaves
 * @property {number} daysToGrow how many days does it take for the sapling to grow
 * @property {string} location where the sapling is found
 */

/**
 * @typedef {Object} TfcFuelData Metadata for TFC's fuel data
 * @property {number} temperature The temperature at which the wood burns
 * @property {number} duration how long the wood burns in ticks (20 = 1s)
 * @property {number} purity how pure the wood is, lower values means more smoke is produced
 */

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
    .concat(global.WAB_WOOD_STRUCT)
    .concat(global.TFG_WOOD_STRUCT);
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

/**
 * @type {Object} A structure set for common wood struct methods
 */
global.woodStructHelpers =
{
    /**
     * 
     * @param {string} nameSpace 
     * @param {string} woodName 
     * @returns {AstikorData}
     */
    astikorData: function (nameSpace, woodName)
    {
        return {
            wheel: `${nameSpace}:wheel/${woodName}`,
            supply_cart: `${nameSpace}:supply_cart/${woodName}`,
            plow: `${nameSpace}:plow/${woodName}`,
            animal_cart: `${nameSpace}:animal_cart/${woodName}`
        };
    },
    /**
     * 
     * @param {any} value 
     * @param {number} count 
     * @returns {any[]}
     */
    arrayAll: function(value, count)
    {
        let result = [];
        for(let index = 0; index < count; index++)
        {
            result.push(value);
        }
        return result;
    },
    /**
     * 
     * @param {string} nameSpace 
     * @param {string} woodName 
     * @returns {string}
     */
    tfcTreeTwig: function(nameSpace, woodName)
    {
        return this.resLocFormat(nameSpace, "wood/twig/{0}", woodName);
    },
    /**
     * 
     * @param {string} nameSpace 
     * @param {string} woodName 
     * @returns {string}
     */
    tfcSapling: function(namespace, woodName)
    {
        return this.resLocFormat(namespace, "wood/sapling/{0}", woodName);
    },
    /**
     * 
     * @param {string} nameSpace 
     * @param {string} woodName 
     * @returns {string}
     */
    tfcLeaves: function(nameSpace, woodName)
    {
        return this.resLocFormat(nameSpace, "wood/leaves/{0}", woodName);
    },
    /**
     * 
     * @param {string} nameSpace 
     * @param {string} woodName 
     * @returns {string}
     */
    tfcFallenLeaves: function(nameSpace, woodName)
    {
        return this.resLocFormat(nameSpace, "wood/fallen_leaves/{0}", woodName)
    },
    /**
     * 
     * @returns {string[]}
     */
    tfcWoodFormatArray()
    {
        return [
            "wood/log/{0}",
            "wood/stripped_log/{0}",
            "wood/wood/{0}",
            "wood/stripped_wood/{0}"
        ];
    },
    /**
     * 
     * @returns {string[]}
     */
    tfcUnstrippedWoodFormatArray()
    {
        let result = this.tfcWoodFormatArray();
        result[1] = null;
        result[3] = null;
        return result;
    },
    /**
     * 
     * @param {string} nameSpace 
     * @param {string} format
     * @param {any} value 
     * @returns {string}
     */
    resLocFormat: function(nameSpace, format, value)
    {
        return global.stringFormat(`${nameSpace}:${format}`, value);
    },
    /**
     * 
     * @param {number} temperature 
     * @param {number} duration 
     * @param {number} purity 
     * @returns {TfcFuelData}
     */
    tfcFuelData: function(temperature, duration, purity)
    {
        return{
            temperature: temperature,
            duration: duration,
            purity: purity
        }
    },
    /**
     * 
     * @param {string} nameSpace 
     * @param {string[]} woodFormats 
     * @param {string} woodName 
     * @param {TfcFuelData} fuelObject 
     * @param {number} count 
     * @returns {LogData|LogData[]}
     */
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
    /**
     * 
     * @param {string} woodFormatsWithNamespaces 
     * @param {string} woodName 
     * @param {TfcFuelData} fuelObject 
     * @param {number} count 
     * @returns {LogData|LogData[]}
     */
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
    /**
     * 
     * @param {number} arrayLen 
     * @param {string[]} nameSpaces 
     * @param {string[]} treeNames 
     * @param {LogData[]} logDatas 
     * @param {string[]} leafBlocks 
     * @param {string[]} fallenLeafBlocks 
     * @param {string[]} saplings 
     * @param {string[]} twigs 
     * @param {string[]} tapperOutputs 
     * @param {string[]} dimensions 
     * @returns {TreeData[]}
     */
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
    /**
     * 
     * @param {string} barkColor 
     * @param {string} woodColor 
     * @param {string} leafColor 
     * @param {string} woodSound 
     * @param {string} leafSound 
     * @param {number} daysToGrow 
     * @param {string} location 
     * @returns {TfgData}
     */
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
    /**
     * 
     * @param {string} nameSpace 
     * @param {string} input 
     * @returns {MacawData}
     */
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
    /**
     * 
     * @param {string} nameSpace 
     * @param {string} input 
     * @returns {RnrData}
     */
    rnrData: function(nameSpace, input)
    {
        return{
            shingle: `${nameSpace}:wood/shingle/${input}`,
            shingle_block: `${nameSpace}:wood/shingles/${input}`,
            shingle_stair: `${nameSpace}:wood/shingles/${input}_stairs`,
            shingle_slab: `${nameSpace}:wood/shingles/${input}_slab`,
        }
    },
    /**
     * 
     * @param {string} nameSpace 
     * @param {string} input 
     * @returns {RailwaysData}
     */
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

