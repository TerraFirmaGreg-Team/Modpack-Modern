// priority: 0
"use strict";

const ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries');

//#region item
ServerEvents.tags('item', event => {

    // Tool rack tags - dynamically add GT tools and various other tools
    forEachMaterial((material) => {
        if (material.hasProperty(PropertyKey.TOOL)) {
            for (let [key, value] of Object.entries(global.GTCEU_TOOLTYPES_WHICH_HAS_TFC_DUPS)) {
                let tool = ToolHelper.get(value, material);
                if (!tool.isEmpty()) {
                    event.add(key, tool.getId());
                }
                event.add("tfc:usable_on_tool_rack", `#${key}`);
            }
        }
    });

	/*
	*   How to use:
	*	'target_tag':  //this is the tag you're adding items/blocks/fluids to
	*		['item_1', 'item_2', 'item_3'] //the items you're adding to the tag go here
	*/
    const itemTagAdditions = {
        'tfc:usable_on_tool_rack':
            ['#forge:tools/mining_hammers', '#forge:tools/spades', '#forge:tools/wrenches',
            '#forge:tools/files', '#forge:tools/crowbars', '#forge:tools/screwdrivers',
            '#forge:tools/wire_cutters', '#forge:tools/butchery_knives', '#forge:tools/plungers',
            '#forge:tools/mortars', '#forge:tools/mallets', '#forge:tools/chainsaws',
            '#forge:tools/buzzsaws', '#forge:tools/drills', '#forge:tools/fishing_nets',
            '#tfc:buckets', 'tfc:lens', '#forge:lenses', 'buildinggadgets2:gadget_building',
            'buildinggadgets2:gadget_exchanging', 'buildinggadgets2:gadget_copy_paste',
            'buildinggadgets2:gadget_cut_paste', 'buildinggadgets2:gadget_destruction',
            'create:super_glue', 'exposure:camera', 'measurements:tape_measure',
            '#chalk:chalks', 'chalk:chalk_box', 'computercraft:pocket_computer_normal',
            'computercraft:pocket_computer_advanced', 'grapplemod:grapplinghook',
            'grapplemod:launcheritem', 'ae2:color_applicator', 'ae2:matter_cannon',
            'ae2:network_tool', 'ae2:wireless_terminal', 'ae2:wireless_crafting_terminal',
            'waterflasks:leather_flask', 'waterflasks:iron_flask', 'waterflasks:red_steel_flask',
            'tfc:wool_cloth', 'firmalife:mixing_bowl', '#gtceu:molds', 'create:wrench',
            'framedblocks:framed_screwdriver', 'framedblocks:framed_wrench', 'framedblocks:framed_hammer',
            'framedblocks:framed_key', 'mcw_tfc_aio:roofing_hammer', 'mcw_tfc_aio:pliers',
            'tfclunchbox:lunchbox', 'tfclunchbox:cooling_lunchbox', 'tfclunchbox:electric_lunchbox',
            'primitive_creatures:yhgi', 'primitive_creatures:reh', 'species:harpoon',
            'species:crankbow', 'tfg:trowel'],

        'tfc:nonplaceable':
            ['minecraft:milk_bucket', 'firmalife:bucket/yak_milk', 'firmalife:bucket/goat_milk',
            'tfc_gourmet:ox_milk_bucket', 'tfc_gourmet:sheep_milk_bucket', 'tfc_gourmet:alpaca_milk_bucket',
            'tfc:bucket/beer', 'tfc:bucket/cider', 'tfc:bucket/rum', 'tfc:bucket/sake',
            'tfc:bucket/vodka', 'tfc:bucket/whiskey', 'tfc:bucket/corn_whiskey', 'tfc:bucket/rye_whiskey',
            'tfcagedalcohol:bucket/aged_beer', 'tfcagedalcohol:bucket/aged_cider', 'tfcagedalcohol:bucket/aged_rum',
            'tfcagedalcohol:bucket/aged_sake', 'tfcagedalcohol:bucket/aged_vodka', 'tfcagedalcohol:bucket/aged_whiskey',
            'tfcagedalcohol:bucket/aged_corn_whiskey', 'tfcagedalcohol:bucket/aged_rye_whiskey',
            'tfcagedalcohol:bucket/aged_mead', 'tfc_gourmet:nalivka_bucket', 'tfc_gourmet:coffee_bucket',
            'tfc_gourmet:tea_mint_bucket', 'tfc_gourmet:tea_chamomile_bucket', 'tfc_gourmet:tea_rosehip_bucket',
            'tfc_gourmet:tea_nettle_bucket', 'tfc_gourmet:cocoa_bucket', 'tfc_gourmet:compote_bucket',
            'tfc_gourmet:kvass_bucket', 'tfc_gourmet:lemonade_bucket', 'firmalife:bucket/mead',
            'firmalife:bucket/red_wine', 'firmalife:bucket/white_wine', 'firmalife:bucket/rose_wine',
            'firmalife:bucket/sparkling_wine', 'firmalife:bucket/dessert_wine'],

        'tfg:ferments_to_rennet':
            ['tfc:food/soybean', 'firmalife:food/fig', 'tfc:plant/ivy'],

        'tfc:plants':
            ['#tfc:wild_fruits'],

        'tfc:pileable_ingots':
            ['#forge:ingots'],

        'tfc:pileable_sheets':
            ['#forge:plates'],

        'tfc:pileable_double_ingots':
            ['gtceu:tin_alloy_double_ingot', 'gtceu:red_alloy_double_ingot', 'gtceu:lead_double_ingot',
            'gtceu:invar_double_ingot', 'gtceu:potin_double_ingot', 'gtceu:cobalt_double_ingot',
            'gtceu:cobalt_brass_double_ingot'],

        'minecraft:fishes':
            ['tfc:food/calamari', 'tfc:food/bluegill', 'tfc:food/crappie', 'tfc:food/lake_trout',
            'tfc:food/largemouth_bass', 'tfc:food/rainbow_trout', 'tfc:food/smallmouth_bass'],

        'tfc:foods/grains':
            ['tfc:food/cooked_rice', 'tfc:food/cattail_root', 'tfc:food/taro_root',
            'firmalife:food/tortilla_chips', 'firmalife:food/cooked_rice_noodles',
            'firmalife:food/cooked_pasta', 'firmalife:food/toast'],

        'minecraft:logs_that_burn':
            ['tfc:stick_bundle'],

        'tfc:forge_fuel':
            ['minecraft:coal', 'minecraft:coal_block', 'gtceu:flawless_coal_gem', 'gtceu:exquisite_coal_gem',
            'gtceu:flawed_coal_gem', 'gtceu:chipped_coal_gem', 'gtceu:crushed_coal_ore',
            'gtceu:purified_coal_ore', 'gtceu:refined_coal_ore', 'gtceu:impure_coal_dust',
            'gtceu:rich_raw_coal', 'gtceu:raw_coal', 'gtceu:poor_raw_coal', 'gtceu:coal_dust',
            'gtceu:small_coal_dust', 'gtceu:tiny_coal_dust', 'beneath:cursecoal', 'gtceu:coke_gem',
            'gtceu:coke_dust', 'gtceu:charcoal_dust', 'gtceu:charcoal_block'],

        'tfc:blast_furnace_fuel':
            ['gtceu:coke_gem', 'beneath:cursecoal'],

        'tfc:red_or_blue_anvil':
            ['tfc:metal/anvil/blue_steel', 'tfc:metal/anvil/red_steel'],

        'tfg:metal_bars':
            ['tfc:metal/bars/bismuth_bronze', 'tfc:metal/bars/black_bronze', 'tfc:metal/bars/bronze',
            'tfc:metal/bars/copper', 'tfc:metal/bars/wrought_iron', 'tfc:metal/bars/steel',
            'tfc:metal/bars/black_steel', 'tfc:metal/bars/blue_steel', 'tfc:metal/bars/red_steel'],

        'tfg:metal_chains':
            ['tfc:metal/chain/bismuth_bronze', 'tfc:metal/chain/black_bronze', 'tfc:metal/chain/bronze',
            'tfc:metal/chain/copper', 'tfc:metal/chain/wrought_iron', 'tfc:metal/chain/steel',
            'tfc:metal/chain/black_steel', 'tfc:metal/chain/blue_steel', 'tfc:metal/chain/red_steel'],

        'tfg:unfinished_lamps':
            ['tfc:metal/unfinished_lamp/bismuth_bronze', 'tfc:metal/unfinished_lamp/black_bronze',
            'tfc:metal/unfinished_lamp/bronze', 'tfc:metal/unfinished_lamp/copper',
            'tfc:metal/unfinished_lamp/wrought_iron', 'tfc:metal/unfinished_lamp/steel',
            'tfc:metal/unfinished_lamp/black_steel', 'tfc:metal/unfinished_lamp/blue_steel',
            'tfc:metal/unfinished_lamp/red_steel'],

        'tfc:corals':
            ['tfc:coral/tube_coral_fan', 'tfc:coral/brain_coral_fan', 'tfc:coral/bubble_coral_fan',
            'tfc:coral/fire_coral_fan', 'tfc:coral/horn_coral_fan', 'tfc:coral/tube_coral',
            'tfc:coral/brain_coral', 'tfc:coral/bubble_coral', 'tfc:coral/fire_coral',
            'tfc:coral/horn_coral', 'tfc:coral/tube_dead_coral_fan', 'tfc:coral/brain_dead_coral_fan',
            'tfc:coral/bubble_dead_coral_fan', 'tfc:coral/bubble_dead_coral', 'tfc:coral/fire_dead_coral_fan',
            'tfc:coral/horn_dead_coral_fan', 'tfc:coral/tube_dead_coral', 'tfc:coral/brain_dead_coral',
            'tfc:coral/fire_dead_coral', 'tfc:coral/horn_dead_coral'],

        'forge:corals':
            ['#tfc:corals'],

        'tfc:stone_javelins':
            ['tfc:stone/javelin/igneous_extrusive', 'tfc:stone/javelin/igneous_intrusive',
            'tfc:stone/javelin/metamorphic', 'tfc:stone/javelin/sedimentary'],

        'tfc:moss':
            ['tfc:plant/moss', 'tfc:plant/spanish_moss', 'tfc:plant/reindeer_lichen', 'tfc:plant/cobblestone_lichen'],

        'forge:cloth':
            ['tfc:burlap_cloth', 'tfc:wool_cloth', 'tfc:silk_cloth'],

        'tfc:bells':
            ['tfc:bronze_bell', 'tfc:brass_bell'],

        'tfc:forge_invisible_whitelist':
            ['create:basin', 'tfcchannelcasting:channel', 'tfcchannelcasting:mold_table',
            'greate:steel_mechanical_pump', 'greate:aluminum_mechanical_pump',
            'greate:stainless_steel_mechanical_pump', 'greate:titanium_mechanical_pump'],

        'forge:mushrooms':
            ['tfc:plant/artists_conk'],

        'tfc:any_knapping':
            ['#tfc:pit_kiln_straw'],

        'tfg:burlap_fiber':
            ['tfc:jute_fiber'],

        'tfc:knives':
            ['tfc:stone/knife/sedimentary', 'tfc:stone/knife/metamorphic',
            'tfc:stone/knife/igneous_intrusive', 'tfc:stone/knife/igneous_extrusive'],

        'tfc:compost_greens_low':
            ['#tfc:fallen_leaves', '#minecraft:leaves'],

        'tfc:hematitic_sand':
            ['minecraft:red_sand', 'ad_astra:mars_sand', 'ad_astra:venus_sand'],

        'tfc:olivine_sand':
            ['ad_astra:moon_sand'],

        'tfc:fluxstone':
            ['tfg:loose/dripstone'],

        'tfc:food/bell_peppers':
            ['tfc:food/green_bell_pepper', 'tfc:food/yellow_bell_pepper', 'tfc:food/red_bell_pepper'],

        'tfc:mob_offhand_weapons':
            ['tfchotornot:tongs/gold', 'tfchotornot:tongs/rose_gold', 'gtceu:black_bronze_knife',
            'tfc:metal/javelin/black_bronze', 'tfc:metal/mace/black_bronze'],

        'tfc:starts_fires_with_items':
            ['gtceu:matches'],

        'tfc:starts_fires_with_durability':
            ['gtceu:matchbox', 'gtceu:invar_lighter', 'gtceu:platinum_lighter']
    };

    const itemTagRemovals = {
        'forge:dusts/sulfur':
            ['tfc:powder/sulfur'],

        'tfc:blast_furnace_fuel':
            ['minecraft:coal', 'minecraft:charcoal'],

        'tfc:compost_browns_low':
            ['#tfc:fallen_leaves']
    };

    // Powder dyes mapping
    const powderDyes = {
        'blue': ['tfc:powder/lapis_lazuli', 'tfc:powder/graphite'],
        'black': ['tfc:powder/charcoal', 'tfc:powder/coke'],
        'pink': ['tfc:powder/kaolinite'],
        'orange': ['tfc:powder/sylvite', 'tfc:powder/copper'],
        'light_gray': ['tfc:powder/silver'],
        'gray': ['tfc:powder/cassiterite', 'tfc:powder/magnetite', 'tfc:powder/sphalerite', 'tfc:powder/tetrahedrite'],
        'green': ['tfc:powder/bismuthinite', 'tfc:powder/malachite'],
        'brown': ['tfc:powder/garnierite'],
        'yellow': ['tfc:powder/limonite']
    };

    // Gravel color mapping
    const gravelColors = {
        'brown': ['tfc:rock/gravel/claystone'],
        'white': ['tfc:rock/gravel/chalk', 'tfc:rock/gravel/diorite', 'tfc:rock/gravel/quartzite', 'tfc:rock/gravel/marble'],
        'black': ['tfc:rock/gravel/basalt', 'tfc:rock/gravel/phyllite', 'tfc:rock/gravel/andesite', 
                  'tfc:rock/gravel/dacite', 'tfc:rock/gravel/gabbro', 'tfc:rock/gravel/dolomite', 'tfc:rock/gravel/shale'],
        'red': ['tfc:rock/gravel/chert', 'tfc:rock/gravel/rhyolite'],
        'yellow': ['tfc:rock/gravel/limestone', 'tfc:rock/gravel/slate'],
        'green': ['tfc:rock/gravel/gneiss', 'tfc:rock/gravel/conglomerate', 'tfc:rock/gravel/schist'],
        'pink': ['tfc:rock/gravel/granite']
    };

    // Add krummholz plants
    const krummholz_types = ['aspen', 'douglas_fir', 'pine', 'spruce', 'white_cedar'];
    krummholz_types.forEach(type => {
        event.add('tfc:plants', `tfc:plant/${type}_krummholz`);
        event.add('tfc:krummholz', `tfc:plant/${type}_krummholz`);
    });

    // Add TFC wood types to logs_that_burn
    global.TFC_WOOD_TYPES.forEach(woodType => {
        event.add('minecraft:logs_that_burn', `#tfc:${woodType}_logs`);
    });

    // Add chest and support tags for TFC wood types
    global.TFC_WOOD_TYPES.forEach(woodType => {
        event.add('tfg:default_chests', `tfc:wood/chest/${woodType}`);
        event.add('tfg:trapped_chests', `tfc:wood/trapped_chest/${woodType}`);
        event.add('tfg:bladed_axles', `tfc:wood/bladed_axle/${woodType}`);
    });

    // Add hardwood tags
    global.TFC_HARDWOOD_TYPES.forEach(woodType => {
        event.add('tfg:hardwood', `#tfc:${woodType}_logs`);
        event.add('tfg:stripped_hardwood', `tfc:wood/stripped_log/${woodType}`);
        event.add('tfg:stripped_hardwood', `tfc:wood/stripped_wood/${woodType}`);
        event.add('tfg:hardwood_supports', `tfc:wood/support/${woodType}`);
    });

    // Add softwood tags
    global.TFC_SOFTWOOD_TYPES.forEach(woodType => {
        event.add('tfg:softwood', `#tfc:${woodType}_logs`);
        event.add('tfg:stripped_softwood', `tfc:wood/stripped_log/${woodType}`);
        event.add('tfg:stripped_softwood', `tfc:wood/stripped_wood/${woodType}`);
        event.add('tfg:softwood_supports', `tfc:wood/support/${woodType}`);
    });

    // Add vessel color tags
    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        event.add('tfg:colorized_unfired_vessels', `tfc:ceramic/${dye}_unfired_vessel`);
        event.add('tfg:colorized_fired_vessels', `tfc:ceramic/${dye}_glazed_vessel`);
        event.add('tfg:colorized_unfired_large_vessels', `tfc:ceramic/unfired_large_vessel/${dye}`);
        event.add('tfg:colorized_fired_large_vessels', `tfc:ceramic/large_vessel/${dye}`);
    });

    // Add stone type tags (buttons, slabs, stairs, walls)
    global.TFC_STONE_TYPES.forEach(stoneTypeName => {
        event.add('minecraft:stone_buttons', `tfc:rock/button/${stoneTypeName}`);
        event.add('minecraft:buttons', `tfc:rock/button/${stoneTypeName}`);

        global.TFC_ROCK_SLAB_BLOCK_TYPES.forEach(slabType => {
            event.add('tfg:rock_slabs', `tfc:rock/${slabType}/${stoneTypeName}_slab`);
            event.add('tfg:rock_stairs', `tfc:rock/${slabType}/${stoneTypeName}_stairs`);
            event.add('tfg:rock_walls', `tfc:rock/${slabType}/${stoneTypeName}_wall`);
        });

        global.TFC_BRICK_SLAB_BLOCK_TYPES.forEach(slabType => {
            event.add('tfg:brick_slabs', `tfc:rock/${slabType}/${stoneTypeName}_slab`);
            event.add('tfg:brick_stairs', `tfc:rock/${slabType}/${stoneTypeName}_stairs`);
            event.add('tfg:brick_walls', `tfc:rock/${slabType}/${stoneTypeName}_wall`);
        });
    });

    // Add hanging sign tags for all metals and wood types
    global.TFC_EQUIPMENT_METALS.forEach(metal => {
        event.add(`tfg:hanging_sign/${metal}/hardwood`, global.TFC_HARDWOOD_TYPES.map(wood => `tfc:wood/hanging_sign/${metal}/${wood}`));
        event.add(`tfg:hanging_sign/${metal}/softwood`, global.TFC_SOFTWOOD_TYPES.map(wood => `tfc:wood/hanging_sign/${metal}/${wood}`));
        event.add(`tfg:hanging_sign/${metal}/hardwood`, global.AFC_HARDWOOD_TYPES.map(wood => `afc:wood/hanging_sign/${metal}/${wood}`));
        event.add(`tfg:hanging_sign/${metal}/softwood`, global.AFC_SOFTWOOD_TYPES.map(wood => `afc:wood/hanging_sign/${metal}/${wood}`));
        event.add(`tfg:hanging_sign/${metal}/hardwood`, `beneath:wood/hanging_sign/${metal}/warped`);
        event.add(`tfg:hanging_sign/${metal}/softwood`, `beneath:wood/hanging_sign/${metal}/crimson`);
    });

    // Add powder dyes
    Object.entries(powderDyes).forEach(([color, powders]) => {
        powders.forEach(powder => event.add(`forge:dyes/${color}`, powder));
    });

    // Add gravel colors
    Object.entries(gravelColors).forEach(([color, gravels]) => {
        gravels.forEach(gravel => event.add(`tfc:${color}_gravel`, gravel));
    });

    // Add wet and dry mud bricks
    global.TFC_WET_MUD_BRICKS.forEach(wetMudBrick => event.add('tfc:wet_mud_bricks', wetMudBrick));
    global.TFC_DRY_MUD_BRICKS.forEach(dryMudBrick => event.add('tfc:dry_mud_bricks', dryMudBrick));

    // Add disabled and hidden items
    global.TFC_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item);
        event.add('c:hidden_from_recipe_viewers', item);
    });

    global.TFC_HIDDEN_ITEMS.forEach(item => {
        event.add('c:hidden_from_recipe_viewers', item);
    });

    // Remove ore tags
    event.removeAllTagsFrom('/tfc:ore/[^*]+/[^*]+/');

    // helpers
    Object.entries(itemTagAdditions).forEach(([tag, items]) => {
        items.forEach(item => event.add(tag, item));
    });

    Object.entries(itemTagRemovals).forEach(([tag, items]) => {
        items.forEach(item => event.remove(tag, item));
    });

})
//#endregion

//#region blocks
ServerEvents.tags('block', event => {

    const blockTagAdditions = {
        'tfc:glass_basin_blocks':
            ['create:brass_block', 'tfc:red_kaolin_clay', 'tfc:pink_kaolin_clay', 'tfc:white_kaolin_clay'],

        'tfc:glass_pouring_table':
            ['create:brass_block', 'tfc:red_kaolin_clay', 'tfc:pink_kaolin_clay', 'tfc:white_kaolin_clay'],

        'tfc:forge_invisible_whitelist':
            ['create:basin', 'tfcchannelcasting:channel', 'tfcchannelcasting:mold_table',
            'greate:steel_mechanical_pump', 'greate:aluminum_mechanical_pump',
            'greate:stainless_steel_mechanical_pump', 'greate:titanium_mechanical_pump'],

        'tfc:forge_insulation':
            ['create:depot'],

        'tfc:can_be_snow_piled':
            ['tfc:groundcover/feather']
    };

    // Add stone block tags (slabs, stairs, walls)
    global.TFC_STONE_TYPES.forEach(stoneTypeName => {
        event.add('minecraft:stone_buttons', `tfc:rock/button/${stoneTypeName}`);
        event.add('minecraft:buttons', `tfc:rock/button/${stoneTypeName}`);

        global.TFC_ROCK_SLAB_BLOCK_TYPES.forEach(slabType => {
            event.add('tfg:rock_slabs', `tfc:rock/${slabType}/${stoneTypeName}_slab`);
            event.add('tfg:rock_stairs', `tfc:rock/${slabType}/${stoneTypeName}_stairs`);
            event.add('tfg:rock_walls', `tfc:rock/${slabType}/${stoneTypeName}_wall`);
        });

        global.TFC_BRICK_SLAB_BLOCK_TYPES.forEach(slabType => {
            event.add('tfg:brick_slabs', `tfc:rock/${slabType}/${stoneTypeName}_slab`);
            event.add('tfg:brick_stairs', `tfc:rock/${slabType}/${stoneTypeName}_stairs`);
            event.add('tfg:brick_walls', `tfc:rock/${slabType}/${stoneTypeName}_wall`);
        });
    });

    // Add collapse tags for slabs, stairs, and walls
    ['#tfg:rock_slabs', '#tfg:rock_stairs', '#tfg:rock_walls'].forEach(tag => {
        event.add('tfc:can_collapse', tag);
        event.add('tfc:can_start_collapse', tag);
        event.add('tfc:can_trigger_collapse', tag);
    });

    event.add('tfc:can_start_collapse', '#tfc:rock/smooth');
    event.add('tfc:can_trigger_collapse', '#tfc:rock/smooth');

    // Add magma blocks to infiniburn
    global.TFC_MAGMA_BLOCKS.forEach(magma => event.add('minecraft:infiniburn_overworld', magma));

    // Remove disabled blocks
    global.TFC_DISABLED_ITEMS.forEach(item => event.removeAllTagsFrom(item));

    // Remove ore tags
    event.removeAllTagsFrom('/tfc:ore/[^*]+/[^*]+/');

    // Add blocks with "brick" in ID to bloomery and forge insulation
    const blacklist = ['drying', 'slab', 'stairs', 'wall', 'additionalplacements', 'fence', 'roof', 'bridge'];
    const matches = [];
    ForgeRegistries.BLOCKS.getValues().forEach(block => {
        const id = String(ForgeRegistries.BLOCKS.getKey(block));
        if (id.includes('brick') && !blacklist.some(no_no_word => id.includes(no_no_word))) {
            matches.push(id);
        }
    });
    ['tfc:bloomery_insulation', 'tfc:forge_insulation'].forEach(tag => {
        matches.forEach(id => event.add(tag, id));
    });

    // helpers
    Object.entries(blockTagAdditions).forEach(([tag, items]) => {
        items.forEach(item => event.add(tag, item));
    });

})
//#endregion

//#region fluids
ServerEvents.tags('fluid', event => {

    const $FluidState = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidState');
    const $FluidAttribute = Java.loadClass('com.gregtechceu.gtceu.api.fluids.attribute.FluidAttributes');
    const FluidStack = Java.loadClass('net.minecraftforge.fluids.FluidStack');

    // TFC metal fluids to replace
	// gets added to 'tfc:usable_in_ingot_mold', `tfc:metal/${metal}` and 'c:hidden_from_recipe_viewers', `tfc:metal/${metal}`
    const tfcMetalFluids = [
        'bismuth', 'bismuth_bronze', 'bronze', 'black_bronze', 'brass', 'copper', 'gold',
        'nickel', 'rose_gold', 'silver', 'tin', 'zinc', 'sterling_silver', 'wrought_iron',
        'steel', 'black_steel', 'red_steel', 'blue_steel', 'cast_iron', 'high_carbon_steel',
        'high_carbon_black_steel', 'high_carbon_red_steel', 'high_carbon_blue_steel'
    ];

    // GTCEu metal fluids for ingot mold
	// gets added to 'tfc:usable_in_ingot_mold', `gtceu:${metal}`
    const gtceuIngotMoldFluids = [
        'bismuth', 'bismuth_bronze', 'black_bronze', 'bronze', 'brass', 'copper', 'gold',
        'nickel', 'rose_gold', 'silver', 'tin', 'zinc', 'sterling_silver', 'wrought_iron',
        'iron', 'steel', 'black_steel', 'blue_steel', 'red_steel', 'red_alloy', 'tin_alloy',
        'lead', 'invar', 'potin', 'cobalt', 'cobalt_brass', 'aluminium_silicate'
    ];

    const fluidTagAdditions = {
        'tfc:usable_in_bell_mold':
            ['gtceu:bronze', 'gtceu:gold', 'gtceu:brass'],

        'tfc:usable_in_tool_head_mold':
            ['gtceu:copper', 'gtceu:bismuth_bronze', 'gtceu:black_bronze', 'gtceu:bronze'],

        'tfc:ingredients':
            ['tfc:spring_water'],

        'tfc:drinkables':
            ['tfc:spring_water'],

        'tfg:alcohols':
            ['#tfc:alcohols', 'tfcagedalcohol:aged_beer', 'tfcagedalcohol:aged_cider',
            'tfcagedalcohol:aged_rum', 'tfcagedalcohol:aged_sake', 'tfcagedalcohol:aged_vodka',
            'tfcagedalcohol:aged_whiskey', 'tfcagedalcohol:aged_corn_whiskey',
            'tfcagedalcohol:aged_rye_whiskey', 'tfcagedalcohol:aged_mead', 'tfc_gourmet:nalivka'],

        'tfg:not_solid':
            ['#forge:liquid', '#forge:gaseous', '#forge:plasmatic'],

        'tfc:usable_in_pot':
            ['#forge:neutral_fluids'],

        'firmalife:usable_in_vat':
            ['#forge:neutral_fluids'],

        'tfc:usable_in_barrel':
            ['#forge:neutral_fluids'],

        'tfc:usable_in_wooden_bucket':
            ['#forge:neutral_fluids'],

        'tfc:usable_in_jug':
            ['#forge:neutral_fluids'],

        'firmalife:usable_in_mixing_bowl':
            ['#forge:neutral_fluids']
    };

    // Remove TFC metal fluids from ingot mold
    tfcMetalFluids.forEach(metal => {
        event.remove('tfc:usable_in_ingot_mold', `tfc:metal/${metal}`);
        event.add('c:hidden_from_recipe_viewers', `tfc:metal/${metal}`);
    });

    // Add GTCEu metal fluids to ingot mold
    gtceuIngotMoldFluids.forEach(metal => {
        event.add('tfc:usable_in_ingot_mold', `gtceu:${metal}`);
    });

    // Tag acidic fluids
    forEachMaterial(material => {
        if (material.hasProperty(PropertyKey.FLUID)) {
            let fluid = material.getFluid();
            let fluidType = fluid.getFluidType();
            let fluidName = fluidType.toString();

            try {
                if (fluid.getAttributes().contains($FluidAttribute.ACID)) {
                    event.add('forge:acidic', fluidName);
                }
            } catch (exception) { /* empty */ }
        }
    });

    // Temperature and state-based fluid tagging
    ForgeRegistries.FLUIDS.getValues().forEach(fluid => {
        const id = ForgeRegistries.FLUIDS.getKey(fluid);
        if (!id) return;

        const idString = id.toString();

        // Check if fluid is hidden
        let hiddenWrapper;
        try { hiddenWrapper = event.get('c:hidden_from_recipe_viewers'); } catch (e) { /* ignore */ }

        const wrapperHas = (wrapper) => {
            if (!wrapper) return false;
            try { return wrapper.getObjectIds().toArray().some(wid => String(wid) === idString); } catch (e) { return false; }
        };

        if (wrapperHas(hiddenWrapper)) return;

        // This fetches the temperature
        let temp = -1;
        try {
            temp = fluid.getFluidType().getTemperature();
        } catch (e1) {
            try {
                temp = fluid.getFluidType().getTemperature(new FluidStack(fluid, 1000));
            } catch (e2) {
                temp = -1;
            }
        }

        // Tag based on temp
        if (temp <= 340 && temp >= 120) {
            event.add('tfg:moderate_temperature_fluids', idString);
        }
        if (temp <= 370) {
            event.add('tfc:usable_in_red_steel_bucket', idString);
        }
        if (temp >= 1300) {
            event.add('tfchotornot:hot_whitelist', idString);
        }
        if (temp < 223 && temp > 0) {
            event.add('tfchotornot:cold_whitelist', idString);
        }
        if (temp >= 120) {
            event.add('tfc:usable_in_blue_steel_bucket', idString);
        }

        // Tag liquids (non-gas, non-plasma)
        let gaseousWrapper, plasmaticWrapper;
        try { gaseousWrapper = event.get('forge:gaseous'); } catch (e) { /* ignore */ }
        try { plasmaticWrapper = event.get('forge:plasmatic'); } catch (e) { /* ignore */ }

        const isGaseous = wrapperHas(gaseousWrapper);
        const isPlasmatic = wrapperHas(plasmaticWrapper);

        if (!isGaseous && !isPlasmatic) {
            event.add('forge:liquid', idString);
        }

        // Tag neutral fluids (liquid, non-acidic, moderate temp)
        let acidicWrapper, moderateTemperatureWrapper;
        try { acidicWrapper = event.get('forge:acidic'); } catch (e) { /* ignore */ }
        try { moderateTemperatureWrapper = event.get('tfg:moderate_temperature_fluids'); } catch (e) { /* ignore */ }

        const isAcidic = wrapperHas(acidicWrapper);
        const isExtreme = !wrapperHas(moderateTemperatureWrapper);

        if (!isGaseous && !isPlasmatic && !isAcidic && !isExtreme) {
            event.add('forge:neutral_fluids', idString);
        }
    });

    // helpers
    Object.entries(fluidTagAdditions).forEach(([tag, items]) => {
        items.forEach(item => event.add(tag, item));
    });
	//#endregion
	
})
