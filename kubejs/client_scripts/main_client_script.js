ItemEvents.tooltip(evt => {
    registerTooltips(evt);
})

EmiPlusPlusEvents.registerGroups(event => {

    // Raw Ores

    event.register('tfg:small_ore_pieces', '#tfc:small_ore_pieces')
    event.register('tfg:poor_raw_materials', '#forge:poor_raw_materials')
    event.register('tfg:raw_materials', '#forge:raw_materials')
    event.register('tfg:rich_raw_materials', '#forge:rich_raw_materials')

    // Processed Ores

    event.register('tfg:crushed_ores', '#forge:crushed_ores')
    event.register('tfg:purified_ores', '#forge:purified_ores')
    event.register('tfg:refined_ores', '#forge:refined_ores')
    event.register('tfg:dusty_raw_materials', '#forge:dusty_raw_materials')

    // Dusts

    event.register('tfg:impure_dusts', '#forge:impure_dusts')
    event.register('tfg:tiny_dusts', '#forge:tiny_dusts')
    event.register('tfg:small_dusts', '#forge:small_dusts')
    event.register('tfg:dusts', '#forge:dusts')
    event.register('tfg:pure_dusts', '#forge:pure_dusts')
    event.register('tfg:powders', '#forge:powders')

    // Gems

    event.register('tfg:chipped_gems', '#forge:chipped_gems')
    event.register('tfg:flawed_gems', '#forge:flawed_gems')
    event.register('tfg:gems', '#forge:gems')
    event.register('tfg:flawless_gems', '#forge:flawless_gems')
    event.register('tfg:exquisite_gems', '#forge:exquisite_gems')

    // Gem Products

    event.register('tfg:lenses', '#forge:lenses')

    // Ore Products

    event.register('tfg:nuggets', '#forge:nuggets')
    event.register('tfg:ingots', '#forge:ingots')
    event.register('tfg:hot_ingots', '#forge:hot_ingots')
    event.register('tfg:storage_blocks', '#forge:storage_blocks')
    event.register('tfg:double_ingots', '#forge:double_ingots')
    event.register('tfg:dense_plates', '#forge:dense_plates')
    event.register('tfg:plates', '#forge:plates')
    event.register('tfg:double_plates', '#forge:double_plates')
    event.register('tfg:foils', '#forge:foils')
    event.register('tfg:rods', '#forge:rods')
    event.register('tfg:rods/long', '#forge:rods/long')
    event.register('tfg:bolts', '#forge:bolts')
    event.register('tfg:screws', '#forge:screws')
    event.register('tfg:rings', '#forge:rings')
    event.register('tfg:small_springs', '#forge:small_springs')
    event.register('tfg:springs', '#forge:springs')
    event.register('tfg:small_gears', '#forge:small_gears')
    event.register('tfg:gears', '#forge:gears')
    event.register('tfg:fine_wires', '#forge:fine_wires')
    event.register('tfg:rotors', '#forge:rotors')
    event.register('tfg:rounds', '#forge:rounds')
    event.register('tfg:whisks', '#forge:whisks')
    event.register('tfg:turbine_blades', '#forge:turbine_blades')
    event.register('tfg:chains', '#forge:chains')

    // Tool Heads

    event.register('tfg:pickaxe_heads', '#forge:pickaxe_heads')
    event.register('tfg:shovel_heads', '#forge:shovel_heads')
    event.register('tfg:axe_heads', '#forge:axe_heads')
    event.register('tfg:hoe_heads', '#forge:hoe_heads')

    event.register('tfg:sword_heads', '#forge:sword_heads')
    event.register('tfg:butchery_knife_heads', '#forge:butchery_knife_heads')
    event.register('tfg:drill_heads', '#forge:drill_heads')
    event.register('tfg:screwdriver_tips', '#forge:screwdriver_tips')
    event.register('tfg:wire_cutter_heads', '#forge:wire_cutter_heads') // DOES NOT HAVE AN ITEM TAG
    event.register('tfg:file_heads', '#forge:file_heads')
    event.register('tfg:chainsaw_heads', '#forge:chainsaw_heads')
    event.register('tfg:spade_heads', '#forge:spade_heads')
    event.register('tfg:mining_hammer_heads', '#forge:mining_hammer_heads')
    event.register('tfg:hammer_heads', '#forge:hammer_heads')
    event.register('tfg:knife_heads', '#forge:knife_heads')
    event.register('tfg:saw_heads', '#forge:saw_heads')
    event.register('tfg:wrench_tips', '#forge:wrench_tips')
    event.register('tfg:scythe_heads', '#forge:scythe_heads')
    event.register('tfg:fishing_rods', '#forge:fishing_rods')
    event.register('tfg:shears', '#forge:shears')
    event.register('tfg:buzz_saw_heads', '#forge:buzz_saw_heads')

    event.register('tfg:javelin_heads', '#forge:javelin_heads')
    event.register('tfg:mace_heads', '#forge:mace_heads')
    event.register('tfg:chisel_heads', '#forge:chisel_heads')
    event.register('tfg:propick_heads', '#forge:propick_heads')
    event.register('tfg:mattock_heads', '#forge:mattock_heads')
    event.register('tfg:tong_parts', '#tfchotornot:tong_parts') // DOES NOT HAVE AN ITEM TAG
    event.register('tfg:scraping_knife_head', '#tfcscraping:scraping_knife_head') // DOES NOT HAVE AN ITEM TAG

    // Tools (Minecraft)

    event.register('tfg:pickaxes', '#tfc:pickaxes')
    event.register('tfg:shovels', '#tfc:shovels')
    event.register('tfg:axes', '#tfc:axes')
    event.register('tfg:hoes', '#tfc:hoes')

    // Tools (Forge)

    event.register('tfg:butchery_knives', '#forge:tools/butchery_knives')
    event.register('tfg:drills', '#forge:tools/drills')
    event.register('tfg:screwdrivers', '#forge:tools/screwdrivers')
    event.register('tfg:wire_cutters', '#forge:tools/wire_cutters')
    event.register('tfg:files', '#forge:tools/files')
    event.register('tfg:chainsaws', '#forge:tools/chainsaws')
    event.register('tfg:spades', '#forge:tools/spades')
    event.register('tfg:mining_hammers', '#forge:tools/mining_hammers')
    event.register('tfg:hammers', '#forge:tools/hammers')
    event.register('tfg:knives', '#forge:tools/knives')
    event.register('tfg:saws', '#forge:tools/saws')
    event.register('tfg:wrenches', '#forge:tools/wrenches')
    event.register('tfg:scythes', '#forge:tools/scythes')
    event.register('tfg:crowbars', '#forge:tools/crowbars')
    event.register('tfg:plungers', '#forge:tools/plungers')
    event.register('tfg:mallets', '#forge:tools/mallets')
    event.register('tfg:mortars', '#forge:tools/mortars')
    event.register('tfg:fishing_nets', '#forge:tools/fishing_nets')
    event.register('tfg:fish_hooks', '#forge:fish_hooks')
    // Shear... heads?

    // Tools (Other)

    event.register('tfg:javelins', '#tfc:javelins')
    event.register('tfg:maces', '#tfc:maces')
    event.register('tfg:chisels', '#tfc:chisels')
    event.register('tfg:propicks', '#tfc:propicks')
    event.register('tfg:mattocks', '#rnr:mattocks')
    event.register('tfg:tongs', '#tfchotornot:tongs')
    event.register('tfg:scraping_knives', '#tfcscraping:scraping_knives')

    // Items (Forge)

    event.register('tfg:seeds', '#forge:seeds')
    event.register('tfg:dyes', '#forge:dyes')

    // Items (GTCEU)

    event.register('tfg:molds', '#gtceu:molds') 

    // Items (Astikor Carts)

    event.register('tfg:cart_wheel', '#tfcastikorcarts:cart_wheel')
    event.register('tfg:supply_cart', '#tfcastikorcarts:supply_cart')
    event.register('tfg:plow', '#tfcastikorcarts:plow')
    event.register('tfg:animal_cart', '#tfcastikorcarts:animal_cart')

    // Blocks (Forge)

    event.register('tfg:fence_gates', '#forge:fence_gates')
    event.register('tfg:chests', '#forge:chests')
    event.register('tfg:frames', '#forge:frames')
    event.register('tfg:surface_rocks', '#forge:surface_rocks')
    event.register('tfg:bud_indicators', '#forge:bud_indicators')
    event.register('tfg:concretes', '#forge:concretes')
    event.register('tfg:glass', '#forge:glass')
    event.register('tfg:glass_panes', '#forge:glass_panes')

    // Blocks (GTCEU)

    // LAMPS NEED TAGS

    // Blocks (Wires/Cables)

    // GROUP BY TIER
    // single_wires
    // double_wires
    // quadruple_wires
    // octal_wires
    // hex_wires
    // single_cables
    // double_cables
    // quadruple_cables
    // octal_cables
    // hex_cables

    // Blocks (Pipes)
    event.register('tfg:pipes', [
        '#forge:tiny_fluid_pipes', 
        '#forge:small_fluid_pipes', 
        '#forge:normal_fluid_pipes',
        '#forge:large_fluid_pipes',
        '#forge:huge_fluid_pipes',
        '#forge:quadruple_fluid_pipes',
        '#forge:nonuple_fluid_pipes'
    ])

    // Blocks (TFC)

    event.register('tfg:lumber', '#tfc:lumber')
    event.register('tfg:fallen_leaves', '#tfc:fallen_leaves')
    event.register('tfg:bookshelves', '#tfc:bookshelves')
    event.register('tfg:tool_racks', '#tfc:tool_racks')
    event.register('tfg:workbenches', '#tfc:workbenches')
    event.register('tfg:looms', '#tfc:looms')
    event.register('tfg:sluices', '#tfc:sluices')
    event.register('tfg:barrels', '#tfc:barrels')
    event.register('tfg:lecterns', '#tfc:lecterns')
    event.register('tfg:scribing_tables', '#tfc:scribing_tables')
    event.register('tfg:sewing_tables', '#tfc:sewing_tables')
    event.register('tfg:jar_shelves', '#tfc:jar_shelves')
    event.register('tfg:support_beams', '#tfc:support_beams')
    event.register('tfg:minecarts', '#tfc:minecarts')
    event.register('tfg:anvils', '#tfc:anvils')
    event.register('tfg:ore_deposits', '#tfc:ore_deposits')

    // Blocks (Stones)

    // tfc:rock/hardened
    // tfc:rock/raw
    // tfc:rock/spike (NEEDS TO BE HIDDEN)
    // forge:cobblestone
    // tfc:rock/bricks
    // tfc:rock/smooth
    // tfc:rock/aqueducts
    // tfc:rock/gravel / forge:gravel
    // tfc:igneous_intrusive_rock tfc:sedimentary_rock tfc:igneous_extrusive_rock
    // tfg:stone_brick

    // Blocks (Firmalife)

    event.register('tfg:food_shelves', '#firmalife:food_shelves')
    event.register('tfg:hangers', '#firmalife:hangers')
    event.register('tfg:jarbnets', '#firmalife:jarbnets')
    event.register('tfg:big_barrels', '#firmalife:big_barrels')
    event.register('tfg:stomping_barrels', '#firmalife:stomping_barrels')
    event.register('tfg:barrel_presses', '#firmalife:barrel_presses')
    event.register('tfg:wine_shelves', '#firmalife:wine_shelves')

    // Blocks (FirmaCiv)

    event.register('tfg:roofing', '#alekiroofs:roofing')

    // Blocks (RNR)

    event.register('tfg:cobbled_road_blocks', '#rnr:cobbled_road_blocks') // DOES NOT HAVE AN ITEM TAG
    event.register('tfg:cobbled_road_stairs', '#rnr:cobbled_road_stairs') // DOES NOT HAVE AN ITEM TAG
    event.register('tfg:cobbled_road_slabs', '#rnr:cobbled_road_slabs') // DOES NOT HAVE AN ITEM TAG
    event.register('tfg:sett_road_blocks', '#rnr:sett_road_blocks') // DOES NOT HAVE AN ITEM TAG
    event.register('tfg:sett_road_stairs', '#rnr:sett_road_stairs') // DOES NOT HAVE AN ITEM TAG
    event.register('tfg:sett_road_slabs', '#rnr:sett_road_slabs') // DOES NOT HAVE AN ITEM TAG
    event.register('tfg:flagstones_blocks', '#rnr:flagstones_blocks') // DOES NOT HAVE AN ITEM TAG
    event.register('tfg:flagstones_stairs', '#rnr:flagstones_stairs') // DOES NOT HAVE AN ITEM TAG
    event.register('tfg:flagstones_slabs', '#rnr:flagstones_slabs') // DOES NOT HAVE AN ITEM TAG
    event.register('tfg:gravel_road_blocks', '#rnr:gravel_road_blocks') // DOES NOT HAVE AN ITEM TAG
    event.register('tfg:gravel_road_stairs', '#rnr:gravel_road_stairs') // DOES NOT HAVE AN ITEM TAG
    event.register('tfg:gravel_road_slabs', '#rnr:gravel_road_slabs') // DOES NOT HAVE AN ITEM TAG
    event.register('tfg:macadam_road_blocks', '#rnr:macadam_road_blocks') // DOES NOT HAVE AN ITEM TAG
    event.register('tfg:macadam_road_stairs', '#rnr:macadam_road_stairs') // DOES NOT HAVE AN ITEM TAG
    event.register('tfg:macadam_road_slabs', '#rnr:macadam_road_slabs') // DOES NOT HAVE AN ITEM TAG
    event.register('tfg:gravel_road_items', '#rnr:gravel_road_items')
    event.register('tfg:flagstone_road_items', '#rnr:flagstone_road_items')
    event.register('tfg:dry_concrete_roads', '#rnr:dry_concrete_roads') // DOES NOT HAVE AN ITEM TAG
    event.register('tfg:dry_concrete_road_stairs', '#rnr:dry_concrete_road_stairs') // DOES NOT HAVE AN ITEM TAG
    event.register('tfg:dry_concrete_road_slabs', '#rnr:dry_concrete_road_slabs') // DOES NOT HAVE AN ITEM TAG

    // Blocks (Macaw's)

    // event.register('tfg:', '#mcw_tfc_aio:') 
    event.register('tfg:wooden_piers', '#mcw_tfc_aio:wooden_piers') // DOES NOT HAVE AN ITEM TAG
    event.register('tfg:log_bridges', '#mcw_tfc_aio:log_bridges') // DOES NOT HAVE AN ITEM TAG
    event.register('tfg:log_stairs', '#mcw_tfc_aio:log_stairs') // DOES NOT HAVE AN ITEM TAG
    event.register('tfg:rail_bridges', '#mcw_tfc_aio:rail_bridges') // DOES NOT HAVE AN ITEM TAG
    event.register('tfg:rope_bridges', '#mcw_tfc_aio:rope_bridges') // DOES NOT HAVE AN ITEM TAG
    event.register('tfg:rope_stairs', '#mcw_tfc_aio:rope_stairs') // DOES NOT HAVE AN ITEM TAG
    // ROOFS DO NOT HAVE ITEM TAGS
    event.register('tfg:wadrobe', '#mcw_tfc_aio:wadrobe') // Not a typo :KEK:
    // chair
    // modern_wardrobe
    // double_wardrobe
    // bookshelf
    // bookshelf_cupboard
    // drawer
    // double_drawer
    // bookshelf_drawer
    // lower_bookshelf_drawer
    // large_drawer
    // lower_triple_drawer
    // triple_drawer
    // desk
    // covered_desk
    // modern_desk
    // table
    // end_table
    // coffee_table
    // glass_table
    // modern_chair
    // striped_chair
    // stool_chair
})