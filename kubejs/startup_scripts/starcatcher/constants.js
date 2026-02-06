// priority: -100
"use strict";

if (Platform.isLoaded("starcatcher")){

    /** 
     * @global
     * @type {string[]} - Starcatcher disabled items list.
     * 
     * * Removes all tags.
     * * Hides from EMI.
     * * Removes all recipes with the item as an input or output.
    */
    global.STARCATCHER_DISABLED_ITEMS = /** @type {const} */ ([
        // Removing these here so if someone removes Starcatcher they will get the TFC versions back.
        'tfc:metal/fishing_rod/bismuth_bronze',
        'tfc:metal/fishing_rod/black_bronze',
        'tfc:metal/fishing_rod/bronze',
        'tfc:metal/fishing_rod/copper',
        'tfc:metal/fishing_rod/wrought_iron',
        'tfc:metal/fishing_rod/steel',
        'tfc:metal/fishing_rod/black_steel',
        'tfc:metal/fishing_rod/blue_steel',
        'tfc:metal/fishing_rod/red_steel',

        'starcatcher:gold_hook',
        'starcatcher:boot',
        'starcatcher:mossy_boot',
        'starcatcher:dried_seaweed',
        'starcatcher:conch',
        'starcatcher:clam',
        'starcatcher:lava_crab_claw',
        'starcatcher:cooked_starcaught_fish',
        'starcatcher:display',
        'starcatcher:telescope'

    ]);

    /**
     * @global
     * @type {string[]} - Starcatcher hidden items list.
     * 
     * * Hides from EMI.
    */
    global.STARCATCHER_HIDDEN_ITEMS = /** @type {const} */ ([
        'starcatcher:award_all_fishes',
        'starcatcher:award_one_fish',
        'starcatcher:revoke_all_fishes',
        'starcatcher:award_all_trophies',
        'starcatcher:revoke_all_trophies',
        'starcatcher:award_all_secrets',
        'starcatcher:revoke_all_secrets',
        'starcatcher:revoke_all_extras',
        'starcatcher:secret_note',
        'starcatcher:broken_bottle',
        'starcatcher:drifting_waterlogged_bottle',
        'starcatcher:scalding_bottle',
        'starcatcher:burning_bottle',
        'starcatcher:hopeful_bottle',
        'starcatcher:hopeless_bottle',
        'starcatcher:true_blue_bottle',
        'starcatcher:withered_bottle',
        'starcatcher:waterlogged_bottle'
    ]);

    /**
     * @global
     * @type {Object.<string, {dimension: string}>} - Starcatcher fish data.
     */
    global.STARCATCHER_FISH = /** @type {Object.<string, {dimension: string}>} */ ({

        'obidontiee': { dimension: 'minecraft:overworld', filet: 'white'},
        'pink_koi': { dimension: null, filet: 'white' },
        'morganite': { dimension: null, filet: 'white' },
        'rose_siamese_fish': { dimension: null, filet: 'white' },
        'vesani': { dimension: null, filet: 'white' },
        'crystalback_sturgeon': { dimension: null, filet: 'white' },
        'icetooth_sturgeon': { dimension: null, filet: 'white' },
        'boreal': { dimension: null, filet: 'white' },
        'crystalback_boreal': { dimension: null, filet: 'white' },
        'silverfin_pike': { dimension: 'minecraft:overworld', filet: 'white' },
        'silverveil_perch': { dimension: 'minecraft:overworld', filet: 'white' },
        'elderscale': { dimension: null, filet: 'white' },
        'driftfin': { dimension: 'minecraft:overworld', filet: 'white' },
        'twilight_koi': { dimension: null, filet: 'white' },
        'thunder_bass': { dimension: null, filet: 'white' },
        'lightning_bass': { dimension: null, filet: 'white' },
        'sludge_catfish': { dimension: 'minecraft:overworld', filet: 'white' },
        'lily_snapper': { dimension: 'minecraft:overworld', filet: 'pink' },
        'sage_catfish': { dimension: 'minecraft:overworld', filet: 'white' },
        'pale_carp': { dimension: 'minecraft:overworld', filet: 'white' },
        'pale_pinfish': { dimension: 'minecraft:overworld', filet: 'white' },
        'pinfish': { dimension: 'minecraft:overworld', filet: 'pink' },
        'frostjaw_trout': { dimension: null, filet: 'white' },
        'crystalback_trout': { dimension: null, filet: 'white' },
        'aurora': { dimension: null, filet: 'white' },
        'wintery_pike': { dimension: 'minecraft:overworld', filet: 'white' },
        'sandtail': { dimension: 'minecraft:overworld', filet: 'white' },
        'mirage_carp': { dimension: 'minecraft:overworld', filet: 'white' },
        'scorchfish': { dimension: 'minecraft:overworld', filet: 'pink' },
        'cactifish': { dimension: 'minecraft:overworld', filet: 'white' },
        'agave_bream': { dimension: 'minecraft:overworld', filet: 'pink' },
        'sunny_sturgeon': { dimension: 'minecraft:overworld', filet: 'pink' },
        'rockgill': { dimension: 'minecraft:overworld', filet: 'dark' },
        'peakdweller': { dimension: 'minecraft:overworld', filet: 'dark' },
        'sun_seeking_carp': { dimension: 'minecraft:overworld', filet: 'pink' },
        'blossomfish': { dimension: null, filet: 'white' },
        'petaldrift_carp': { dimension: null, filet: 'white' },
        'lush_pike': { dimension: null, filet: 'white' },
        'vivid_moss': { dimension: null, filet: 'white' },
        'the_quarrish': { dimension: null, filet: 'white' },
        'ghostly_pike': { dimension: null, filet: 'white' },
        'aquamarine_pike': { dimension: null, filet: 'white' },
        'garnet_mackerel': { dimension: null, filet: 'white' },
        'bright_amethyst_snapper': { dimension: null, filet: 'white' },
        'dark_amethyst_snapper': { dimension: null, filet: 'white' },
        'deepslatefish': { dimension: null, filet: 'white' },
        'carpenjoe': { dimension: null, filet: 'white' },
        'willow_bream': { dimension: null, filet: 'white' },
        'drifting_bream': { dimension: 'minecraft:overworld', filet: 'white' },
        'downfall_bream': { dimension: 'minecraft:overworld', filet: 'white' },
        'hollowbelly_darter': { dimension: null, filet: 'white' },
        'mistback_chub': { dimension: 'minecraft:overworld', filet: 'white' },
        'bluegigi': { dimension: null, filet: 'white' },
        'frostgill_chub': { dimension: null, filet: 'white' },
        'crystalback_minnow': { dimension: null, filet: 'white' },
        'azure_crystalback_minnow': { dimension: null, filet: 'white' },
        'blue_crystal_fin': { dimension: null, filet: 'white' },
        'ironjaw_herring': { dimension: null, filet: 'white' },
        'deepjaw_herring': { dimension: null, filet: 'white' },
        'dusktail_snapper': { dimension: null, filet: 'white' },
        'joel': { dimension: 'minecraft:overworld', filet: 'king' },
        'redscaled_tuna': { dimension: 'minecraft:overworld', filet: 'pink' },
        'bigeye_tuna': { dimension: 'minecraft:overworld', filet: 'king' },
        'sea_bass': { dimension: 'minecraft:overworld', filet: 'white' },
        'shroomfish': { dimension: null, filet: 'white' },
        'sporefish': { dimension: null, filet: 'white' },
        'gold_fan': { dimension: null, filet: 'white' },
        'whiteveil': { dimension: null, filet: 'white' },
        'amethystback': { dimension: null, filet: 'white' },
        'stonefish': { dimension: null, filet: 'white' },
        'fossilized_angelfish': { dimension: null, filet: 'white' },
        'dripfin': { dimension: null, filet: 'white' },
        'yellowstone_fish': { dimension: null, filet: 'white' },
        'sculkfish': { dimension: null, filet: 'white' },
        'ward': { dimension: null, filet: 'white' },
        'glowing_dark': { dimension: null, filet: 'white' },
        'suneater': { dimension: null, filet: 'white' },
        'pyrotrout': { dimension: null, filet: 'white' },
        'embergill': { dimension: null, filet: 'white' },
        'scalding_pike': { dimension: null, filet: 'white' },
        'cinder_squid': { dimension: null, filet: 'white' },
        'magma_fish': { dimension: null, filet: 'white' },
        'glowstone_seeker': { dimension: null, filet: 'white' },
        'glowstone_pufferfish': { dimension: null, filet: 'white' },
        'willish': { dimension: null, filet: 'white' },
        'cerberay': { dimension: null, filet: 'white' },
        'charfish': { dimension: null, filet: 'white' },
        'end_glow': { dimension: null, filet: 'white' },
        'voidbiter': { dimension: null, filet: 'white' },
        'geode_eel': { dimension: null, filet: 'white' },
        'black_eel': { dimension: 'minecraft:overworld', filet: 'dark' },
        'obsidian_eel': { dimension: null, filet: 'white' }
    });
};
