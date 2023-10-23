// priority: 1000

global.allTFCStoneTypeNames = [
    'gabbro', 
    'shale', 
    'claystone', 
    'limestone', 
    'conglomerate', 
    'dolomite', 
    'chert', 
    'chalk', 
    'rhyolite', 
    'dacite', 
    'quartzite', 
    'slate', 
    'phyllite', 
    'schist', 
    'gneiss', 
    'marble',
    'basalt',
    'diorite',
    'andesite',
    'granite'
];

global.allTFCStoneTypeNamesWithoutDups = [
    'gabbro', 
    'shale', 
    'claystone', 
    'limestone', 
    'conglomerate', 
    'dolomite', 
    'chert', 
    'chalk', 
    'rhyolite', 
    'dacite', 
    'quartzite', 
    'slate', 
    'phyllite', 
    'schist', 
    'gneiss', 
    'marble'
];

global.allTFCStoneTypeNamesOnlyDups = [
    'basalt',
    'diorite',
    'andesite',
    'granite'
];

global.veins = [
    {
        random_name: "normal_gold",
        veinType: "tfc:disc_vein",
        rarity: 70,
        maxY: 60,
        minY: -32,
        size: 35,
        density: 0.6,
        stoneTypes: ["rhyolite", "basalt", "andesite", "dacite", "granite", "diorite", "gabbro"],
        ores: [
            {
                weight: 5,
                material: "goethite"
            },
            {
                weight: 20,
                material: "yellow_limonite"
            },
            {
                weight: 20,
                material: "hematite"
            },
            {
                weight: 55,
                material: "gold"
            }
        ],
        indicator: {
            rarity: 12,
            blocks: [
                {
                    block: "tfc:ore/small_native_gold"
                }
            ]
        }
    }
    /*,
    {
        name: "",
        veinType: "tfc:disc_vein",
        rarity: "",
        maxY: 0,
        minY: 0,
        size: 0,
        density: 0.0,
        stoneTypes: ["marble", "diorite"],
        ores: [
            {
                weight: 0,
                ore: ""
            }
        ],
        customOreRules: [
            {
                stoneType: "",
                ores: [
                    {
                        weight: 0,
                        ore: ""
                    }
                ]
            }
        ],
        indicator: {
            rarity: 12,
            blocks: [
                {
                    block: "tfc:ore/small_native_gold"
                }
            ]
        }
    }*/
]