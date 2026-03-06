"use strict";

const registerSingleGroups = (event) => {
    const SINGLE_GROUPS_TO_REGISTER = [
        // Raw Ores
        '#tfc:small_ore_pieces',
        '#forge:poor_raw_materials',
        '#forge:raw_materials',
        '#forge:rich_raw_materials',

        // Processed Ores
        '#forge:crushed_ores',
        '#forge:purified_ores',
        '#forge:refined_ores',
        '#forge:dusty_raw_materials',

        // Dusts
        '#forge:impure_dusts',
        '#forge:tiny_dusts',
        '#forge:small_dusts',
        '#forge:dusts',
        '#forge:pure_dusts',
        '#forge:powders',

        // Gems
        '#forge:chipped_gems',
        '#forge:flawed_gems',
        '#forge:gems',
        '#forge:flawless_gems',
        '#forge:exquisite_gems',

        // Gem Products
        '#forge:lenses',

        // Ore Products
        '#forge:nuggets',
        '#forge:ingots',
        '#forge:hot_ingots',
        '#forge:storage_blocks',
        '#forge:double_ingots',
        '#forge:dense_plates',
        '#forge:plates',
        '#forge:double_plates',
        '#forge:foils',
        '#forge:rods',
        '#forge:rods/long',
        '#forge:bolts',
        '#forge:screws',
        '#forge:rings',
        '#forge:small_springs',
        '#forge:springs',
        '#forge:small_gears',
        '#forge:gears',
        '#forge:fine_wires',
        '#forge:rotors',
        '#forge:rounds',
        '#forge:whisks',
        '#forge:turbine_blades',
        '#forge:chains',

        // Tool Heads
        '#forge:pickaxe_heads',
        '#forge:shovel_heads',
        '#forge:axe_heads',
        '#forge:hoe_heads',
        '#forge:sword_heads',
        '#forge:butchery_knife_heads',
        '#forge:drill_heads',
        '#forge:screwdriver_tips',
        '#forge:wire_cutter_heads',
        '#forge:file_heads',
        '#forge:chainsaw_heads',
        '#forge:spade_heads',
        '#forge:mining_hammer_heads',
        '#forge:hammer_heads',
        '#forge:knife_heads',
        '#forge:saw_heads',
        '#forge:wrench_tips',
        '#forge:scythe_heads',
        '#forge:buzz_saw_heads',
        '#forge:javelin_heads',
        '#forge:mace_heads',
        '#forge:chisel_heads',
        '#forge:propick_heads',
        '#forge:mattock_heads',
        '#tfchotornot:tong_parts',
        '#tfcscraping:scraping_knife_blades',
        '#forge:fish_hooks',

        // Tools (Minecraft)
        '#tfc:pickaxes',
        '#tfc:shovels',
        '#tfc:axes',
        '#tfc:hoes',

        // Tools (Forge)
        '#forge:tools/butchery_knives',
        '#forge:tools/drills',
        '#forge:tools/screwdrivers',
        '#forge:tools/wire_cutters',
        '#forge:tools/files',
        '#forge:tools/chainsaws',
        '#forge:tools/spades',
        '#forge:tools/mining_hammers',
        '#forge:tools/hammers',
        '#forge:tools/knives',
        '#forge:tools/saws',
        '#forge:tools/wrenches',
        '#forge:tools/scythes',
        '#forge:fishing_rods',
        '#forge:shears',
        '#forge:tools/crowbars',
        '#forge:tools/plungers',
        '#forge:tools/mallets',
        '#forge:tools/mortars',
        '#forge:tools/fishing_nets',

        // Tools (Other)
        '#tfc:javelins',
        '#tfc:maces',
        '#tfc:chisels',
        '#tfc:propicks',
        '#rnr:mattocks',
        '#tfchotornot:tongs',
        '#tfcscraping:scraping_knives',

        // Items (Forge)
        '#forge:seeds',
        '#forge:dyes',

        // Items (GTCEU)
        '#gtceu:extruder_molds', 
        '#gtceu:casting_molds',

        // Items (TFC)
        '#tfc:unfired_molds', 
        '#tfc:fired_molds',

        // Items (Astikor Carts)
        '#tfcastikorcarts:cart_wheel',
        '#tfcastikorcarts:supply_cart',
        '#tfcastikorcarts:plow',
        '#tfcastikorcarts:animal_cart',

        // Blocks (Forge)
        '#forge:fence_gates',
        '#forge:chests',
        '#forge:frames',
        '#forge:surface_rocks',
        '#forge:bud_indicators',
        '#forge:glass',
        '#forge:glass_panes',

        // Blocks (GTCEU)
        '#gtceu:lamps',

        // Blocks (TFC)
        '#tfc:lumber',
        '#tfc:fallen_leaves',
        '#tfc:bookshelves',
        '#tfc:tool_racks',
        '#tfc:workbenches',
        '#tfc:looms',
        '#tfc:sluices',
        '#tfc:barrels',
        '#tfc:lecterns',
        '#tfc:scribing_tables',
        '#tfc:sewing_tables',
        '#tfc:jar_shelves',
        '#tfc:support_beams',
        '#tfc:minecarts',
        '#tfc:anvils',
        '#tfc:ore_deposits',

        // Stone-related
        '#tfc:rock/hardened',
        '#tfc:rock/raw',
        '#forge:cobblestone',
        '#tfc:rock/smooth',
        '#tfc:rock/gravel',

        // Blocks (Firmalife)
        '#firmalife:food_shelves',
        '#firmalife:hangers',
        '#firmalife:jarbnets',
        '#firmalife:big_barrels',
        '#firmalife:stomping_barrels',
        '#firmalife:barrel_presses',
        '#firmalife:wine_shelves',

        // Blocks (FirmaCiv)
        '#alekiroofs:roofing',

        // RNR
        '#rnr:cobbled_roads',
        '#rnr:sett_roads',
        '#rnr:flagstone_roads',
        '#rnr:gravel_roads',
        '#rnr:macadam_roads',
        '#rnr:concrete_roads',
        '#rnr:gravel_road_items',
        '#rnr:flagstone_road_items',
        '#rnr:shingles',
        '#rnr:roof_blocks',

        // Macaw's
        '#mcw_tfc_aio:bridges',
        '#mcw_tfc_aio:roofs',
        '#mcw_tfc_aio:gutters',
        '#mcw_tfc_aio:awnings',
        '#mcw_tfc_aio:furniture',
        '#mcw_tfc_aio:stripped_furniture'
    ]

    SINGLE_GROUPS_TO_REGISTER.forEach(x => {
        const [mod, item] = x.split(":");
        const safeItem = item.split("/").join("_");
        event.register(`tfg:tfg_${safeItem}`, x)
    })
}

const registerMultiGroups = (event) => {
    const MULTI_GROUPS_TO_REGISTER = [
        { group_name: 'loose_rocks', tags: [
            '#tfc:igneous_intrusive_rock',
            '#tfc:sedimentary_rock',
            '#tfc:igneous_extrusive_rock',
            '#tfc:metamorphic_rock'
        ]},
        { group_name: 'bricks', tags: [
            '#tfg:stone_brick',
            '#tfc:wet_mud_bricks',
            '#tfc:dry_mud_bricks',
            'tfc:alabaster_brick',
            'tfc:ceramic/unfired_brick',
            'tfc:ceramic/unfired_fire_brick',
            'tfc:ceramic/fire_brick',
            'gtceu:coke_oven_brick'
        ]},
        { group_name: 'brick_blocks', tags: [
            '#tfc:rock/bricks',
            '#tfc:rock/mossy_bricks',
            '#tfc:rock/cracked_bricks',
            '#tfc:rock/chiseled_bricks'
        ]},
        { group_name: 'aqueducts', tags: [
            '#tfc:rock/aqueducts',
            '#tfg:rock/aqueducts'
        ]},
        { group_name: 'concretes', tags: [
            '#forge:concretes',
            '#forge:concrete_powders'
        ]},
        { group_name: 'fluid_pipes', tags: [
            '#forge:tiny_fluid_pipes', 
            '#forge:small_fluid_pipes', 
            '#forge:normal_fluid_pipes',
            '#forge:large_fluid_pipes',
            '#forge:huge_fluid_pipes',
            '#forge:quadruple_fluid_pipes',
            '#forge:nonuple_fluid_pipes'
        ]},
        { group_name: 'item_pipes', tags: [
            '#forge:small_item_pipes',
            '#forge:normal_item_pipes',
            '#forge:large_item_pipes',
            '#forge:huge_item_pipes'
        ]},
        { group_name: 'restrictive_pipes', tags: [
            '#forge:small_restrictive_pipes',
            '#forge:normal_restrictive_pipes',
            '#forge:large_restrictive_pipes',
            '#forge:huge_restrictive_pipes'
        ]}
    ]

    MULTI_GROUPS_TO_REGISTER.forEach(x => {
        event.register(`tfg:tfg_${x.group_name}`, x.tags)
    })
}

const registerWireGroups = (event) => {
    const WIRE_TYPES = [
        '#forge:single_wires/',
        '#forge:double_wires/',
        '#forge:quadruple_wires/',
        '#forge:octal_wires/',
        '#forge:hex_wires/',
        '#forge:single_cables/',
        '#forge:double_cables/',
        '#forge:quadruple_cables/',
        '#forge:octal_cables/',
        '#forge:hex_cables/'
    ]

    function makeWireArray(materials) {
        const output = []

        WIRE_TYPES.forEach(type => {
            materials.forEach(mat => {
                output.push(type + mat)
            })
        })

        return output
    }
 
    event.register('tfg:tfg_ulv_wires', makeWireArray([
        'lead', 'red_alloy'
    ]))

    event.register('tfg:tfg_lv_wires', makeWireArray([
        'manganese_phosphide', 'nickel', 'cobalt', 'tin'
    ]))

    event.register('tfg:tfg_mv_wires', makeWireArray([
        'copper', 'magnesium_diboride', 'cupronickel', 'annealed_copper', 'iron'
    ]))

    event.register('tfg:tfg_hv_wires', makeWireArray([
        'blue_alloy', 'kanthal', 'gold', 'mercury_barium_calcium_cuprate', 'electrum', 'silver'
    ]))

    event.register('tfg:tfg_ev_wires', makeWireArray([
        'black_steel', 'nichrome', 'aluminium', 'rtm_alloy', 'steel', 'uranium_triplatinum'
    ]))

    event.register('tfg:tfg_iv_wires', makeWireArray([
        'tungsten', 'tungsten_steel', 'samarium_iron_arsenic_oxide', 'platinum', 'graphene'
    ]))

    event.register('tfg:tfg_luv_wires', makeWireArray([
        'hssg', 'osmium', 'niobium_titanium', 'niobium_nitride', 'indium_tin_barium_titanium_cuprate'
    ]))

    event.register('tfg:tfg_zpm_wires', makeWireArray([
        'naquadah', 'vanadium_gallium', 'uranium_rhodium_dinaquadide', 'trinium'
    ]))

    event.register('tfg:tfg_uv_wires', makeWireArray([
        'naquadah_alloy', 'yttrium_barium_cuprate', 'enriched_naquadah_trinium_europium_duranide', 'tritanium'
    ]))

    event.register('tfg:tfg_uhv_wires', makeWireArray([
        'ruthenium_trinium_americium_neutronate', 'europium'
    ]))
}