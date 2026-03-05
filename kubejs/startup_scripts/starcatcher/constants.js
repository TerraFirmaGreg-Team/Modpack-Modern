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

        // ------------- Earth Fishes -------------
        // Common Fishes
        'obidontiee': { dimension: ['minecraft:overworld'], filet: 'common'},
        'pale_carp': { dimension: ['minecraft:overworld'], filet: 'common' },
        'wintery_pike': { dimension: ['minecraft:overworld'], filet: 'common' },
        'scorchfish': { dimension: ['minecraft:overworld'], filet: 'common' },
        'cactifish': { dimension: ['minecraft:overworld'], filet: 'common' },
        'rockgill': { dimension: ['minecraft:overworld'], filet: 'common' },
        'peakdweller': { dimension: ['minecraft:overworld'], filet: 'common' },
        'drifting_bream': { dimension: ['minecraft:overworld'], filet: 'common' },
        'downfall_bream': { dimension: ['minecraft:overworld'], filet: 'common' },
        'mistback_chub': { dimension: ['minecraft:overworld'], filet: 'common' },
        'sea_bass': { dimension: ['minecraft:overworld'], filet: 'common' },
        // Uncommon Fishes
        'silverfin_pike': { dimension: ['minecraft:overworld'], filet: 'uncommon' },
        'silverveil_perch': { dimension: ['minecraft:overworld'], filet: 'uncommon' },
        'driftfin': { dimension: ['minecraft:overworld'], filet: 'uncommon' },
        'sludge_catfish': { dimension: ['minecraft:overworld'], filet: 'uncommon' },
        'pinfish': { dimension: ['minecraft:overworld'], filet: 'uncommon' },
        // Rare Fishes
        'lily_snapper': { dimension: ['minecraft:overworld'], filet: 'rare' },
        'pale_pinfish': { dimension: ['minecraft:overworld'], filet: 'rare' },
        'agave_bream': { dimension: ['minecraft:overworld'], filet: 'rare' },
        'sunny_sturgeon': { dimension: ['minecraft:overworld'], filet: 'rare' },
        'sun_seeking_carp': { dimension: ['minecraft:overworld'], filet: 'rare' },
        'redscaled_tuna': { dimension: ['minecraft:overworld'], filet: 'rare' },
        'bigeye_tuna': { dimension: ['minecraft:overworld'], filet: 'rare' },
        // Epic Fishes
        'sage_catfish': { dimension: ['minecraft:overworld'], filet: 'epic' },
        // Legendary Fishes
        'joel': { dimension: ['minecraft:overworld'], filet: 'legendary' },
        // Extras
        'black_eel': { dimension: ['minecraft:overworld'], filet: 'eel' },

        // ------------- Beneath Fishes -------------
        // Common Fishes
        'embergill': { dimension: ['minecraft:the_nether'], filet: 'common' },
        'scalding_pike': { dimension: ['minecraft:the_nether'], filet: 'common' },
        'dripfin': { dimension: ['minecraft:the_nether'], filet: 'common' },
        'stonefish': { dimension: ['minecraft:the_nether'], filet: 'common' },
        'glowstone_seeker': { dimension: ['minecraft:the_nether'], filet: 'common' },
        // Uncommon Fishes
        'magma_fish': { dimension: ['minecraft:the_nether'], filet: 'uncommon' },
        'vivid_moss': { dimension: ['minecraft:the_nether'], filet: 'uncommon' },
        // Rare Fishes
        'fossilized_angelfish': { dimension: ['minecraft:the_nether'], filet: 'rare' },
        // Epic Fishes
        'the_quarrish': { dimension: ['minecraft:the_nether'], filet: 'epic' },
        'molten_deepslate_crab': { dimension: ['minecraft:the_nether'], filet: 'epic' },
        // Legendary Fishes
        'lush_pike': { dimension: ['minecraft:the_nether'], filet: 'legendary' },
        'obsidian_eel': { dimension: ['minecraft:the_nether'], filet: 'legendary' },
        // Extras
        'obsidian_crab': { dimension: ['minecraft:the_nether'], filet: 'crab' },
        'lava_crab': { dimension: ['minecraft:the_nether'], filet: 'crab' },
        'molten_shrimp': { dimension: ['minecraft:the_nether'], filet: 'shrimp' },
        'glowstone_pufferfish': { dimension: ['minecraft:the_nether'], filet: null },
        'cinder_squid': { dimension: ['minecraft:the_nether'], filet: 'calamari' },

        // ------------- Mars Fishes -------------
        // Common Fishes
        'sandtail': { dimension: ['ad_astra:mars'], filet: 'common' },
        'blossomfish': { dimension: ['ad_astra:mars'], filet: 'common' },
        'pink_koi': { dimension: ['ad_astra:mars'], filet: 'common' },
        'bluegigi': { dimension: ['ad_astra:mars'], filet: 'common' },
        'sporefish': { dimension: ['ad_astra:mars'], filet: 'rare' },
        // Uncommon Fishes
        'willish': { dimension: ['ad_astra:mars'], filet: 'uncommon' },
        'petaldrift_carp': { dimension: ['ad_astra:mars'], filet: 'uncommon' },
        'morganite': { dimension: ['ad_astra:mars'], filet: 'uncommon' },
        'mirage_carp': { dimension: ['ad_astra:mars'], filet: 'uncommon' },
        // Epic Fishes
        'twilight_koi': { dimension: ['ad_astra:mars'], filet: 'epic' },
        'rose_siamese_fish': { dimension: ['ad_astra:mars'], filet: 'epic' },
        // Legendary Fishes
        'vesani': { dimension: ['ad_astra:mars'], filet: 'legendary' },
        'shroomfish': { dimension: ['ad_astra:mars'], filet: 'legendary' },

        // ------------- Unimplemented Fishes -------------
        'crystalback_sturgeon': { dimension: null, filet: null },
        'icetooth_sturgeon': { dimension: null, filet: null },
        'boreal': { dimension: null, filet: null },
        'crystalback_boreal': { dimension: null, filet: null },
        'elderscale': { dimension: null, filet: null },
        'thunder_bass': { dimension: null, filet: null },
        'lightning_bass': { dimension: null, filet: null },
        'frostjaw_trout': { dimension: null, filet: null },
        'crystalback_trout': { dimension: null, filet: null },
        'aurora': { dimension: null, filet: null },
        'ghostly_pike': { dimension: null, filet: null },
        'aquamarine_pike': { dimension: null, filet: null },
        'garnet_mackerel': { dimension: null, filet: null },
        'bright_amethyst_snapper': { dimension: null, filet: null },
        'dark_amethyst_snapper': { dimension: null, filet: null },
        'deepslatefish': { dimension: null, filet: null },
        'carpenjoe': { dimension: null, filet: null },
        'willow_bream': { dimension: null, filet: null },
        'hollowbelly_darter': { dimension: null, filet: null },
        'frostgill_chub': { dimension: null, filet: null },
        'crystalback_minnow': { dimension: null, filet: null },
        'azure_crystalback_minnow': { dimension: null, filet: null },
        'blue_crystal_fin': { dimension: null, filet: null },
        'ironjaw_herring': { dimension: null, filet: null },
        'deepjaw_herring': { dimension: null, filet: null },
        'dusktail_snapper': { dimension: null, filet: null },
        'gold_fan': { dimension: null, filet: null },
        'whiteveil': { dimension: null, filet: null },
        'amethystback': { dimension: null, filet: null },
        'yellowstone_fish': { dimension: null, filet: null },
        'sculkfish': { dimension: null, filet: null },
        'ward': { dimension: null, filet: null },
        'glowing_dark': { dimension: null, filet: null },
        'suneater': { dimension: null, filet: null },
        'pyrotrout': { dimension: null, filet: null },
        'cerberay': { dimension: null, filet: null },
        'charfish': { dimension: null, filet: null },
        'end_glow': { dimension: null, filet: null },
        'voidbiter': { dimension: null, filet: null },
        'geode_eel': { dimension: null, filet: null }
    });
};
