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
        random_name: "basaltic_sands",
        veinType: "tfc:disc_vein",
        rarity: 80,
        maxY: 60,
        minY: 15,
        size: 24,
        density: 0.2,
        stoneTypes: ["granite", "basalt"],
        ores: [
            {
                weight: 35,
                material: "basaltic_mineral_sand"
            },
            {
                weight: 25,
                material: "granitic_mineral_sand"
            },
            {
                weight: 25,
                material: "fullers_earth"
            },
            {
                weight: 15,
                material: "gypsum"
            }
        ],

        height: 3
    },
    {
        random_name: "bauxite",
        veinType: "tfc:cluster_vein",
        rarity: 85,
        maxY: 80,
        minY: 10,
        size: 30,
        density: 0.3,
        stoneTypes: ["shale", "claystone", "limestone", "conglomerate", "dolomite", "chert", "chalk"],
        ores: [
            {
                weight: 45,
                material: "bauxite"
            },
            {
                weight: 30,
                material: "ilmenite"
            },
            {
                weight: 25,
                material: "aluminium"
            }
        ]
    },
    {
        random_name: "beryllium",
        veinType: "tfc:cluster_vein",
        rarity: 130,
        maxY: 10,
        minY: -64,
        size: 40,
        density: 0.35,
        stoneTypes: ["rhyolite"],
        ores: [
            {
                weight: 65,
                material: "beryllium"
            },
            {
                weight: 35,
                material: "emerald"
            }
        ]
    },
    {
        random_name: "certus_quartz",
        veinType: "tfc:cluster_vein",
        rarity: 35,
        maxY: 100,
        minY: -20,
        size: 45,
        density: 0.4,
        stoneTypes: ["shale", "quartzite", "schist", "gneiss"],
        ores: [
            {
                weight: 45,
                material: "quartzite"
            },
            {
                weight: 30,
                material: "certus_quartz"
            },
            {
                weight: 15,
                material: "barite"
            },
            {
                weight: 10,
                material: "nether_quartz"
            }
        ]
    },
    {
        random_name: "coal",
        veinType: "tfc:cluster_vein",
        rarity: 115,
        maxY: 210,
        minY: 0,
        size: 60,
        density: 0.6,
        stoneTypes: ["shale", "claystone", "limestone", "conglomerate", "dolomite", "chert", "chalk"],
        ores: [
            {
                weight: 97,
                material: "coal"
            },
            {
                weight: 3,
                material: "diamond"
            }
        ]
    },
    {
        random_name: "deep_gold",
        veinType: "tfc:cluster_vein",
        rarity: 110,
        maxY: 30,
        minY: -64,
        size: 45,
        density: 0.7,
        stoneTypes: ["rhyolite", "basalt", "andesite", "dacite", "granite", "diorite", "gabbro"],
        ores: [
            {
                weight: 5,
                material: "goethite"
            },
            {
                weight: 5,
                material: "yellow_limonite"
            },
            {
                weight: 15,
                material: "hematite"
            },
            {
                weight: 75,
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
    },
    {
        random_name: "deep_hematite",
        veinType: "tfc:cluster_vein",
        rarity: 100,
        maxY: 30,
        minY: -64,
        size: 50,
        density: 0.8,
        stoneTypes: ["rhyolite", "basalt", "andesite", "dacite"],
        ores: [
            {
                weight: 25,
                material: "goethite"
            },
            {
                weight: 15,
                material: "yellow_limonite"
            },
            {
                weight: 35,
                material: "hematite"
            },
            {
                weight: 5,
                material: "gold"
            },
            {
                weight: 20,
                material: "ruby"
            }
        ],

        indicator: {
            rarity: 12,
            blocks: [
                {
                    block: "tfc:ore/small_hematite"
                }
            ]
        }
    },
    {
        random_name: "deep_limonite",
        veinType: "tfc:cluster_vein",
        rarity: 100,
        maxY: 30,
        minY: -64,
        size: 50,
        density: 0.8,
        stoneTypes: ["shale", "claystone", "limestone", "conglomerate", "dolomite", "chert", "chalk"],
        ores: [
            {
                weight: 50,
                material: "goethite"
            },
            {
                weight: 15,
                material: "yellow_limonite"
            },
            {
                weight: 15,
                material: "hematite"
            },
            {
                weight: 20,
                material: "malachite"
            }
        ],

        indicator: {
            rarity: 12,
            blocks: [
                {
                    block: "tfc:ore/small_limonite"
                }
            ]
        }
    },
    {
        random_name: "deep_magnetite",
        veinType: "tfc:cluster_vein",
        rarity: 100,
        maxY: 30,
        minY: -64,
        size: 55,
        density: 0.7,
        stoneTypes: ["shale", "claystone", "limestone", "conglomerate", "dolomite", "chert", "chalk"],
        ores: [
            {
                weight: 5,
                material: "magnetite"
            },
            {
                weight: 15,
                material: "vanadium_magnetite"
            },
            {
                weight: 60,
                material: "chromite"
            },
            {
                weight: 15,
                material: "gold"
            },
            {
                weight: 5,
                material: "sapphire"
            }
        ],

        indicator: {
            rarity: 12,
            blocks: [
                {
                    block: "tfc:ore/small_magnetite"
                }
            ]
        }
    },
    {
        random_name: "diamond",
        veinType: "tfc:pipe_vein",
        rarity: 60,
        maxY: 100,
        minY: -64,
        size: 60,
        density: 0.4,
        stoneTypes: ["gabbro"],
        ores: [
            {
                weight: 45,
                material: "graphite"
            },
            {
                weight: 25,
                material: "diamond"
            },
            {
                weight: 30,
                material: "coal"
            }
        ],

        min_skew: 5,
        max_skew: 13,
        min_slant: 0,
        max_slant: 2
    },
    {
        random_name: "garnet_amethyst",
        veinType: "tfc:disc_vein",
        rarity: 14,
        maxY: 60,
        minY: 40,
        size: 8,
        density: 0.2,
        stoneTypes: ["shale", "claystone", "limestone", "conglomerate", "dolomite", "chert", "chalk", "quartzite", "slate", "phyllite", "schist", "gneiss", "marble"],
        ores: [
            {
                weight: 5,
                material: "red_garnet"
            },
            {
                weight: 15,
                material: "yellow_garnet"
            },
            {
                weight: 65,
                material: "amethyst"
            },
            {
                weight: 15,
                material: "opal"
            }
        ],

        biomes: "#tfc:is_river",
        height: 4
    },
    {
        random_name: "garnet_opal",
        veinType: "tfc:disc_vein",
        rarity: 14,
        maxY: 60,
        minY: 40,
        size: 8,
        density: 0.2,
        stoneTypes: ["rhyolite", "basalt", "andesite", "dacite", "granite", "diorite", "gabbro"],
        ores: [
            {
                weight: 5,
                material: "red_garnet"
            },
            {
                weight: 15,
                material: "yellow_garnet"
            },
            {
                weight: 25,
                material: "amethyst"
            },
            {
                weight: 55,
                material: "opal"
            }
        ],

        biomes: "#tfc:is_river",
        height: 4
    },
    {
        random_name: "lapis",
        veinType: "tfc:cluster_vein",
        rarity: 70,
        maxY: 10,
        minY: -60,
        size: 40,
        density: 0.25,
        stoneTypes: ["quartzite", "slate", "phyllite", "schist", "gneiss", "marble"],
        ores: [
            {
                weight: 35,
                material: "lazurite"
            },
            {
                weight: 25,
                material: "sodalite"
            },
            {
                weight: 25,
                material: "lapis"
            },
            {
                weight: 15,
                material: "calcite"
            }
        ]
    },
    {
        random_name: "manganese",
        veinType: "tfc:cluster_vein",
        rarity: 70,
        maxY: 0,
        minY: -30,
        size: 35,
        density: 0.25,
        stoneTypes: ["rhyolite", "basalt", "andesite", "dacite", "shale", "claystone", "limestone", "conglomerate", "dolomite", "chert", "chalk"],
        ores: [
            {
                weight: 30,
                material: "grossular"
            },
            {
                weight: 20,
                material: "spessartine"
            },
            {
                weight: 20,
                material: "pyrolusite"
            },
            {
                weight: 10,
                material: "tantalite"
            }
        ]
    },
    {
        random_name: "molydbenum",
        veinType: "tfc:cluster_vein",
        rarity: 150,
        maxY: 50,
        minY: -64,
        size: 25,
        density: 0.25,
        stoneTypes: ["rhyolite", "basalt", "andesite", "dacite", "granite", "diorite", "gabbro"],
        ores: [
            {
                weight: 40,
                material: "wulfenite"
            },
            {
                weight: 30,
                material: "molybdenite"
            },
            {
                weight: 15,
                material: "molybdenum"
            },
            {
                weight: 15,
                material: "powellite"
            }
        ]
    },
    {
        random_name: "monazite",
        veinType: "tfc:cluster_vein",
        rarity: 80,
        maxY: 40,
        minY: -50,
        size: 25,
        density: 0.25,
        stoneTypes: ["granite", "diorite", "gabbro"],
        ores: [
            {
                weight: 50,
                material: "bastnasite"
            },
            {
                weight: 25,
                material: "molybdenum"
            },
            {
                weight: 25,
                material: "neodymium"
            }
        ]
    },
    {
        random_name: "naquadah",
        veinType: "tfc:cluster_vein",
        rarity: 300,
        maxY: -10,
        minY: -64,
        size: 25,
        density: 0.05,
        stoneTypes: ["quartzite", "slate", "phyllite", "schist", "gneiss", "marble"],
        ores: [
            {
                weight: 75,
                material: "naquadah"
            },
            {
                weight: 25,
                material: "plutonium"
            }
        ]
    },
    {
        random_name: "normal_bismuth",
        veinType: "tfc:cluster_vein",
        rarity: 60,
        maxY: 75,
        minY: -32,
        size: 40,
        density: 0.6,
        stoneTypes: ["granite", "diorite", "gabbro", "shale", "claystone", "limestone", "conglomerate", "dolomite", "chert", "chalk"],
        ores: [
            {
                weight: 80,
                material: "bismuth"
            },
            {
                weight: 9,
                material: "sulfur"
            },
            {
                weight: 11,
                material: "lead"
            }
        ],

        indicator: {
            rarity: 12,
            blocks: [
                {
                    block: "tfc:ore/small_bismuthinite"
                }
            ]
        }
    },
    {
        random_name: "normal_cassiterite",
        veinType: "tfc:cluster_vein",
        rarity: 60,
        maxY: 75,
        minY: -32,
        size: 40,
        density: 0.6,
        stoneTypes: ["granite", "diorite", "gabbro"],
        ores: [
            {
                weight: 40,
                material: "cassiterite"
            },
            {
                weight: 60,
                material: "tin"
            }
        ],

        indicator: {
            rarity: 12,
            blocks: [
                {
                    block: "tfc:ore/small_cassiterite"
                }
            ]
        }
    },
    {
        random_name: "normal_copper",
        veinType: "tfc:cluster_vein",
        rarity: 60,
        maxY: 75,
        minY: -32,
        size: 40,
        density: 0.6,
        stoneTypes: ["rhyolite", "basalt", "andesite", "dacite"],
        ores: [
            {
                weight: 20,
                material: "chalcopyrite"
            },
            {
                weight: 5,
                material: "iron"
            },
            {
                weight: 10,
                material: "pyrite"
            },
            {
                weight: 65,
                material: "copper"
            }
        ],

        indicator: {
            rarity: 12,
            blocks: [
                {
                    block: "tfc:ore/small_native_copper"
                }
            ]
        }
    },
    {
        random_name: "normal_garnierite",
        veinType: "tfc:cluster_vein",
        rarity: 70,
        maxY: 60,
        minY: -32,
        size: 35,
        density: 0.6,
        stoneTypes: ["gabbro"],
        ores: [
            {
                weight: 40,
                material: "garnierite"
            },
            {
                weight: 10,
                material: "nickel"
            },
            {
                weight: 20,
                material: "cobaltite"
            },
            {
                weight: 30,
                material: "pentlandite"
            }
        ],

        indicator: {
            rarity: 12,
            blocks: [
                {
                    block: "tfc:ore/small_garnierite"
                }
            ]
        }
    },
    {
        random_name: "normal_gold",
        veinType: "tfc:cluster_vein",
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
    },
    {
        random_name: "normal_hematite",
        veinType: "tfc:cluster_vein",
        rarity: 60,
        maxY: 75,
        minY: -32,
        size: 40,
        density: 0.6,
        stoneTypes: ["rhyolite", "basalt", "andesite", "dacite"],
        ores: [
            {
                weight: 15,
                material: "goethite"
            },
            {
                weight: 30,
                material: "yellow_limonite"
            },
            {
                weight: 50,
                material: "hematite"
            },
            {
                weight: 5,
                material: "gold"
            }
        ],

        indicator: {
            rarity: 12,
            blocks: [
                {
                    block: "tfc:ore/small_hematite"
                }
            ]
        }
    },
    {
        random_name: "normal_limonite",
        veinType: "tfc:cluster_vein",
        rarity: 60,
        maxY: 75,
        minY: -32,
        size: 40,
        density: 0.6,
        stoneTypes: ["shale", "claystone", "limestone", "conglomerate", "dolomite", "chert", "chalk"],
        ores: [
            {
                weight: 15,
                material: "goethite"
            },
            {
                weight: 50,
                material: "yellow_limonite"
            },
            {
                weight: 20,
                material: "hematite"
            },
            {
                weight: 15,
                material: "malachite"
            }
        ],

        indicator: {
            rarity: 12,
            blocks: [
                {
                    block: "tfc:ore/small_limonite"
                }
            ]
        }
    },
    {
        random_name: "normal_magnetite",
        veinType: "tfc:cluster_vein",
        rarity: 60,
        maxY: 75,
        minY: -32,
        size: 40,
        density: 0.6,
        stoneTypes: ["shale", "claystone", "limestone", "conglomerate", "dolomite", "chert", "chalk"],
        ores: [
            {
                weight: 65,
                material: "magnetite"
            },
            {
                weight: 25,
                material: "vanadium_magnetite"
            },
            {
                weight: 10,
                material: "gold"
            }
        ],

        indicator: {
            rarity: 12,
            blocks: [
                {
                    block: "tfc:ore/small_magnetite"
                }
            ]
        }
    },
    {
        random_name: "galena",
        veinType: "tfc:cluster_vein",
        rarity: 60,
        maxY: 75,
        minY: -32,
        size: 40,
        density: 0.6,
        stoneTypes: ["granite", "gneiss"],
        ores: [
            {
                weight: 30,
                material: "galena"
            },
            {
                weight: 15,
                material: "silver"
            },
            {
                weight: 55,
                material: "lead"
            }
        ],

        indicator: {
            rarity: 12,
            blocks: [
                {
                    block: "tfc:ore/small_native_silver"
                }
            ]
        }
    },
    {
        random_name: "normal_sphalerite",
        veinType: "tfc:cluster_vein",
        rarity: 60,
        maxY: 75,
        minY: -32,
        size: 40,
        density: 0.6,
        stoneTypes: ["quartzite", "slate", "phyllite", "schist", "gneiss", "marble"],
        ores: [
            {
                weight: 0,
                material: "sulfur"
            },
            {
                weight: 0,
                material: "sphalerite"
            },
            {
                weight: 0,
                material: "pyrite"
            }
        ],

        indicator: {
            rarity: 12,
            blocks: [
                {
                    block: "tfc:ore/small_sphalerite"
                }
            ]
        }
    },
    {
        random_name: "normal_tetrahedrite",
        veinType: "tfc:cluster_vein",
        rarity: 60,
        maxY: 75,
        minY: -32,
        size: 40,
        density: 0.6,
        stoneTypes: ["quartzite", "slate", "phyllite", "schist", "gneiss", "marble"],
        ores: [
            {
                weight: 35,
                material: "tetrahedrite"
            },
            {
                weight: 40,
                material: "copper"
            },
            {
                weight: 25,
                material: "stibnite"
            }
        ],

        indicator: {
            rarity: 12,
            blocks: [
                {
                    block: "tfc:ore/small_tetrahedrite"
                }
            ]
        }
    },
    {
        random_name: "pitchblende",
        veinType: "tfc:cluster_vein",
        rarity: 200,
        maxY: 20,
        minY: -50,
        size: 22,
        density: 0.1,
        stoneTypes: ["granite", "diorite", "gabbro", "quartzite", "slate", "phyllite", "schist", "gneiss", "marble"],
        ores: [
            {
                weight: 50,
                material: "pitchblende"
            },
            {
                weight: 50,
                material: "uraninite"
            }
        ]
    },
    {
        random_name: "redstone",
        veinType: "tfc:cluster_vein",
        rarity: 90,
        maxY: 100,
        minY: -48,
        size: 25,
        density: 0.6,
        stoneTypes: ["granite"],
        ores: [
            {
                weight: 45,
                material: "redstone"
            },
            {
                weight: 35,
                material: "ruby"
            },
            {
                weight: 20,
                material: "cinnabar"
            }
        ],

        indicator: {
            rarity: 12,
            blocks: [
                {
                    block: "tfc:ore/small_cryolite"
                }
            ]
        }
    },
    {
        random_name: "salt",
        veinType: "tfc:cluster_vein",
        rarity: 80,
        maxY: 70,
        minY: 30,
        size: 30,
        density: 0.2,
        stoneTypes: ["shale", "claystone", "limestone"],
        ores: [
            {
                weight: 40,
                material: "rock_salt"
            },
            {
                weight: 30,
                material: "salt"
            },
            {
                weight: 15,
                material: "lepidolite"
            },
            {
                weight: 15,
                material: "borax"
            }
        ]
    },
    {
        random_name: "saltpeter",
        veinType: "tfc:cluster_vein",
        rarity: 50,
        maxY: 40,
        minY: -55,
        size: 50,
        density: 0.1,
        stoneTypes: ["granite", "diorite", "gabbro", "quartzite", "slate", "phyllite", "schist", "gneiss", "marble"],
        ores: [
            {
                weight: 35,
                material: "saltpeter"
            },
            {
                weight: 25,
                material: "diatomite"
            },
            {
                weight: 25,
                material: "electrotine"
            },
            {
                weight: 25,
                material: "alunite"
            }
        ]
    },
    {
        random_name: "scheelite",
        veinType: "tfc:cluster_vein",
        rarity: 125,
        maxY: 30,
        minY: -30,
        size: 30,
        density: 0.3,
        stoneTypes: ["granite", "diorite", "gabbro"],
        ores: [
            {
                weight: 45,
                material: "scheelite"
            },
            {
                weight: 35,
                material: "tungstate"
            },
            {
                weight: 20,
                material: "lithium"
            }
        ]
    },
    {
        random_name: "sheldonite",
        veinType: "tfc:cluster_vein",
        rarity: 55,
        maxY: 40,
        minY: -50,
        size: 14,
        density: 0.4,
        stoneTypes: ["quartzite", "slate", "phyllite", "schist", "gneiss", "marble"],
        ores: [
            {
                weight: 35,
                material: "bornite"
            },
            {
                weight: 25,
                material: "cooperite"
            },
            {
                weight: 25,
                material: "platinum"
            },
            {
                weight: 15,
                material: "palladium"
            }
        ]
    },
    {
        random_name: "surface_bismuth",
        veinType: "tfc:cluster_vein",
        rarity: 20,
        maxY: 210,
        minY: 60,
        size: 20,
        density: 0.2,
        stoneTypes: ["granite", "diorite", "gabbro", "shale", "claystone", "limestone", "conglomerate", "dolomite", "chert", "chalk"],
        ores: [
            {
                weight: 90,
                material: "bismuth"
            },
            {
                weight: 3,
                material: "sulfur"
            },
            {
                weight: 7,
                material: "lead"
            }
        ],

        indicator: {
            rarity: 12,
            blocks: [
                {
                    block: "tfc:ore/small_bismuthinite"
                }
            ]
        }
    },
    {
        random_name: "surface_cassiterite",
        veinType: "tfc:cluster_vein",
        rarity: 20,
        maxY: 210,
        minY: 60,
        size: 20,
        density: 0.4,
        stoneTypes: ["granite", "diorite", "gabbro"],
        ores: [
            {
                weight: 60,
                material: "cassiterite"
            },
            {
                weight: 40,
                material: "tin"
            }
        ],

        indicator: {
            rarity: 12,
            blocks: [
                {
                    block: "tfc:ore/small_cassiterite"
                }
            ]
        }
    },
    {
        random_name: "surface_cooper",
        veinType: "tfc:cluster_vein",
        rarity: 20,
        maxY: 210,
        minY: 60,
        size: 20,
        density: 0.4,
        stoneTypes: ["rhyolite", "basalt", "andesite", "dacite"],
        ores: [
            {
                weight: 70,
                material: "chalcopyrite"
            },
            {
                weight: 15,
                material: "zeolite"
            },
            {
                weight: 5,
                material: "cassiterite"
            },
            {
                weight: 10,
                material: "realgar"
            }
        ],

        indicator: {
            rarity: 12,
            blocks: [
                {
                    block: "tfc:ore/small_native_copper"
                }
            ]
        }
    },
    {
        random_name: "surface_sphalerite",
        veinType: "tfc:cluster_vein",
        rarity: 20,
        maxY: 210,
        minY: 60,
        size: 20,
        density: 0.4,
        stoneTypes: ["quartzite", "slate", "phyllite", "schist", "gneiss", "marble", "rhyolite", "basalt", "andesite", "dacite"],
        ores: [
            {
                weight: 55,
                material: "sulfur"
            },
            {
                weight: 40,
                material: "sphalerite"
            },
            {
                weight: 5,
                material: "pyrite"
            }
        ],

        indicator: {
            rarity: 12,
            blocks: [
                {
                    block: "tfc:ore/small_sphalerite"
                }
            ]
        }
    },
    {
        random_name: "surface_tetrahedrite",
        veinType: "tfc:cluster_vein",
        rarity: 20,
        maxY: 210,
        minY: 60,
        size: 20,
        density: 0.5,
        stoneTypes: ["quartzite", "slate", "phyllite", "schist", "gneiss", "marble"],
        ores: [
            {
                weight: 60,
                material: "tetrahedrite"
            },
            {
                weight: 10,
                material: "copper"
            },
            {
                weight: 30,
                material: "stibnite"
            }
        ],

        indicator: {
            rarity: 12,
            blocks: [
                {
                    block: "tfc:ore/small_tetrahedrite"
                }
            ]
        }
    },
    {
        random_name: "sulfur",
        veinType: "tfc:cluster_vein",
        rarity: 90,
        maxY: 210,
        minY: 0,
        size: 15,
        density: 0.6,
        stoneTypes: ["rhyolite", "basalt", "andesite", "dacite"],
        ores: [
            {
                weight: 50,
                material: "sulfur"
            },
            {
                weight: 35,
                material: "pyrite"
            },
            {
                weight: 15,
                material: "sphalerite"
            }
        ]
    },
    {
        random_name: "topaz",
        veinType: "tfc:cluster_vein",
        rarity: 30,
        maxY: -30,
        minY: -50,
        size: 15,
        density: 0.3,
        stoneTypes: ["quartzite", "slate", "phyllite", "schist", "gneiss", "marble"],
        ores: [
            {
                weight: 35,
                material: "blue_topaz"
            },
            {
                weight: 25,
                material: "topaz"
            },
            {
                weight: 25,
                material: "chalcocite"
            },
            {
                weight: 15,
                material: "bornite"
            }
        ]
    },
    {
        random_name: "apatite",
        veinType: "tfc:cluster_vein",
        rarity: 90,
        maxY: 20,
        minY: -40,
        size: 32,
        density: 0.25,
        stoneTypes: ["granite", "diorite", "gabbro", "quartzite", "slate", "phyllite", "schist", "gneiss", "marble"],
        ores: [
            {
                weight: 50,
                material: "apatite"
            },
            {
                weight: 35,
                material: "tricalcium_phosphate"
            },
            {
                weight: 15,
                material: "pyrochlore"
            }
        ]
    },
    {
        random_name: "garnet_tin",
        veinType: "tfc:cluster_vein",
        rarity: 300,
        maxY: 65,
        minY: -20,
        size: 36,
        density: 0.1,
        stoneTypes: ["rhyolite", "basalt", "andesite", "dacite", "granite", "diorite", "gabbro", "quartzite", "slate", 
                        "phyllite", "schist", "gneiss", "marble", "shale", "claystone", 
                        "limestone", "conglomerate", "dolomite", "chert", "chalk"],
        ores: [
            {
                weight: 35,
                material: "cassiterite_sand"
            },
            {
                weight: 25,
                material: "garnet_sand"
            },
            {
                weight: 25,
                material: "asbestos"
            },
            {
                weight: 15,
                material: "diatomite"
            }
        ]
    },
    {
        random_name: "lubricant",
        veinType: "tfc:cluster_vein",
        rarity: 90,
        maxY: 50,
        minY: -40,
        size: 22,
        density: 0.2,
        stoneTypes: ["granite", "diorite", "gabbro"],
        ores: [
            {
                weight: 35,
                material: "soapstone"
            },
            {
                weight: 25,
                material: "talc"
            },
            {
                weight: 25,
                material: "glauconite_sand"
            },
            {
                weight: 15,
                material: "pentlandite"
            }
        ]
    },
    {
        random_name: "mica",
        veinType: "tfc:cluster_vein",
        rarity: 90,
        maxY: 210,
        minY: 0,
        size: 24,
        density: 0.6,
        stoneTypes: ["granite", "diorite", "gabbro", "quartzite", "slate", "phyllite", "schist", "gneiss", "marble"],
        ores: [
            {
                weight: 35,
                material: "kyanite"
            },
            {
                weight: 25,
                material: "mica"
            },
            {
                weight: 25,
                material: "bauxite"
            },
            {
                weight: 15,
                material: "pollucite"
            }
        ]
    },
    {
        random_name: "sylvite",
        veinType: "tfc:cluster_vein",
        rarity: 90,
        maxY: 210,
        minY: 0,
        size: 10,
        density: 0.6,
        stoneTypes: ["shale", "claystone", "chert"],
        ores: [
            {
                weight: 100,
                material: "sylvite"
            }
        ]
    },
    {
        random_name: "olivine",
        veinType: "tfc:cluster_vein",
        rarity: 70,
        maxY: 10,
        minY: -20,
        size: 30,
        density: 0.25,
        stoneTypes: ["rhyolite", "basalt", "andesite", "dacite", "granite", "diorite", "gabbro"],
        ores: [
            {
                weight: 35,
                material: "bentonite"
            },
            {
                weight: 25,
                material: "magnetite"
            },
            {
                weight: 25,
                material: "olivine"
            },
            {
                weight: 15,
                material: "glauconite_sand"
            }
        ]
    },
    {
        random_name: "sapphire",
        veinType: "tfc:cluster_vein",
        rarity: 20,
        maxY: 40,
        minY: 0,
        size: 22,
        density: 0.35,
        stoneTypes: ["rhyolite", "basalt", "andesite", "dacite"],
        ores: [
            {
                weight: 35,
                material: "almandine"
            },
            {
                weight: 25,
                material: "pyrope"
            },
            {
                weight: 15,
                material: "sapphire"
            },
            {
                weight: 15,
                material: "green_sapphire"
            }
        ]
    },
]