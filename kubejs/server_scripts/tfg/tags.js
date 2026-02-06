"use strict";

//#region items
ServerEvents.tags('item', event => {

    registerTFGTrimItemTags(event);
    registerTFGFacadeWhitelistItemTags(event);
    registerTFGStoneItemTags(event);
    registerTFGFoodItemTags(event);
    registerTFGMedicineItemTags(event);
    registerTFGPrimitiveItemTags(event);
    registerTFGEquipmentItemTags(event);
    registerTFGRailgunItemTags(event);
    registerTFGRocketItemTags(event);
    registerTFGGeneralWorldgenItemTags(event);
    registerTFGBeneathItemTags(event);
    registerTFGMoonItemTags(event);
    registerTFGMarsItemTags(event);
    registerTFGVenusItemTags(event);
    registerTFGAquaponicsItemTags(event);

		/*
	*	How to use:
	*	'target_tag':  //this is the tag you're adding items/blocks/fluids to
	*		['item_1', 'item_2', 'item_3'] //the items you're adding to the tag go here
	*
	*    ммм ну типа вот как это всё работает:
	*    'target_tag':  //прикинь, это тег, в него добавляют предметы жижи или другой мусор
	*        ['item_1', 'item_2', 'item_3'] //твой мусор
	*/
    const itemTagAdditions = {
        'tfg:components/uv_leds':
            ['tfg:uv_led', 'tfg:smd_uv_led'],

        'tfg:platinum_ore_group':
            ['gtceu:purified_pentlandite_ore', 'gtceu:purified_chalcopyrite_ore', 
            'gtceu:purified_tetrahedrite_ore', 'gtceu:purified_bornite_ore',
            'gtceu:purified_cooperite_ore', 'gtceu:purified_chalcocite_ore'],

        'tfg:any_bronze_crate':
            ['gtceu:bronze_crate', 'gtceu:black_bronze_crate', 'gtceu:bismuth_bronze_crate'],

        'tfg:any_bronze_drum':
            ['gtceu:bronze_drum', 'gtceu:black_bronze_drum', 'gtceu:bismuth_bronze_drum'],

        'tfg:empty_dna_syringes':
            ['tfg:empty_dna_syringe', 'tfg:clean_dna_syringe'],

        'tfc:sewing_needles':
            ['tfg:stainless_steel_needle'],

        'tfg:aluminium_oxide':
            ['#forge:dusts/bauxite', '#forge:dusts/sapphire', '#forge:dusts/green_sapphire'],

        'tfg:any_iron_double_ingot':
            ['#forge:double_ingots/iron', '#forge:double_ingots/wrought_iron'],

        'tfg:any_bronze_frame':
            ['#forge:frames/bronze', '#forge:frames/bismuth_bronze', '#forge:frames/black_bronze'],

        'forge:rods/any_bronze':
            ['#forge:rods/bronze', '#forge:rods/bismuth_bronze', '#forge:rods/black_bronze'],

        'forge:screws/any_bronze':
            ['#forge:screws/bronze', '#forge:screws/bismuth_bronze', '#forge:screws/black_bronze'],

        'tfg:bloomery_basic_fuels':
            ['minecraft:coal', 'minecraft:charcoal', 'gtceu:rich_raw_coal', 
            'gtceu:raw_coal', 'gtceu:poor_raw_coal']
    };

    const itemTagRemovals = {
        'tfc:foods':
            ['tfc_gourmet:havai_pizza'],

        'forge:dusts':
            ['tfg:nitrocellulose', 'tfg:cellulose_matrix'],

        'forge:dusts/nitrocellulose':
            ['tfg:nitrocellulose'],

        'forge:dusts/cellulose_matrix':
            ['tfg:cellulose_matrix'],

        'tfc:pileable_ingots':
            ['tfg:polycaprolactam_fabric'],

        'forge:ingots':
            ['tfg:polycaprolactam_fabric'],

        'forge:ingots/tfg_polycaprolactam':
            ['tfg:polycaprolactam_fabric'],

        'forge:nuggets':
            ['tfg:polycaprolactam_string'],

        'forge:nuggets/tfg_polycaprolactam':
            ['tfg:polycaprolactam_string']
    };

    // Add aircraft upgrades dynamically
    global.AIRCRAFT_UPGRADES.forEach(value => {
        event.add('immersive_aircraft:upgrades', `tfg:${value}`);
    });

    // Add universal circuits dynamically
    global.UNIVERSAL_CIRCUIT_TIERS.forEach(tier => {
        event.add(`gtceu:circuits/${tier}`, `tfg:${tier}_universal_circuit`);
    });

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

    registerTFGPrimitiveBlockTags(event);
    registerTFGFoodBlockTags(event);
    registerTFGStoneBlockTags(event);
    registerTFGGeneralWorldgenBlockTags(event);
    registerTFGBeneathBlockTags(event);
    registerTFGMoonBlockTags(event);
    registerTFGMarsBlockTags(event);
    registerTFGVenusBlockTags(event);
    registerTFGAquaponicsBlockTags(event);

    const blockTagAdditions = {
        'minecraft:mineable/pickaxe':
            ['tfg:superconductor_coil_large', 'tfg:superconductor_coil_small', 
            'tfg:electromagnetic_accelerator', 'tfg:reflector',
            'tfg:machine_casing_aluminium_plated_steel', 'tfg:mars_ice', 'tfg:dry_ice'],

        'forge:mineable/wrench':
            ['tfg:superconductor_coil_large', 'tfg:superconductor_coil_small',
            'tfg:electromagnetic_accelerator', 'tfg:reflector',
            'tfg:machine_casing_aluminium_plated_steel', 'tfg:machine_casing_power_casing'],

        'tfcambiental:cold_stuff':
            ['tfg:mars_ice', 'tfg:dry_ice'],

        'minecraft:ice':
            ['tfg:mars_ice', 'tfg:dry_ice']
    };

    // helpers
    Object.entries(blockTagAdditions).forEach(([tag, items]) => {
        items.forEach(item => event.add(tag, item));
    });

})
//#endregion

//#region fluids
ServerEvents.tags('fluid', event => {

    registerTFGAquaponicsFluidTags(event);
    registerTFGPrimitiveFluidTags(event);

    const fluidTagAdditions = {
        'tfg:clean_water':
            ['minecraft:water', 'tfc:river_water', 'tfc:spring_water'],

        'tfc:any_water':
            ['tfg:semiheavy_ammoniacal_water', 'tfg:semiheavy_water'],

        'tfc:hydrating':
            ['tfg:semiheavy_ammoniacal_water', 'tfg:semiheavy_water'],

        'tfc:drinkables':
            ['tfg:semiheavy_ammoniacal_water', 'tfg:semiheavy_water', 'tfg:proto_growth_medium',
            'tfg:brown_gravy', 'tfg:rich_stock', 'tfg:light_stock', 'gtceu:ethanol',
            'gtceu:methanol', 'gtceu:concrete', 'rnr:concrete', 'gtceu:ice'],

        'tfc:any_drinkables':
            ['tfg:semiheavy_ammoniacal_water', 'tfg:semiheavy_water', 'tfg:proto_growth_medium',
            'tfg:brown_gravy', 'tfg:rich_stock', 'tfg:light_stock', 'gtceu:ethanol',
            'gtceu:methanol', 'gtceu:concrete', 'gtceu:ice'],

        'tfc:ingredients':
            ['tfg:semiheavy_ammoniacal_water', 'tfg:semiheavy_water'],

        'minecraft:water':
            ['tfg:semiheavy_ammoniacal_water', 'tfg:semiheavy_water', 'tfg:rich_stock', 'tfg:light_stock'],

        'tfg:sulfuric_metal_solution':
            ['gtceu:sulfuric_copper_solution', 'gtceu:sulfuric_nickel_solution']
    };

    // Add breathable compressed airs dynamically
    global.BREATHABLE_COMPRESSED_AIRS.forEach(x => {
        event.add('tfg:breathable_compressed_air', x);
    });

    // helpers
    Object.entries(fluidTagAdditions).forEach(([tag, items]) => {
        items.forEach(item => event.add(tag, item));
    });

})
//#endregion

ServerEvents.tags('worldgen/biome', event => {
    registerTFGOverworldBiomeTags(event);
    registerTFGBeneathBiomeTags(event);
    registerTFGMoonBiomeTags(event);
    registerTFGMarsBiomeTags(event);
    registerTFGVenusBiomeTags(event);
})

ServerEvents.tags('worldgen/configured_feature', event => {
    registerTFGForestConfiguredFeatures(event);
})

ServerEvents.tags('worldgen/placed_feature', event => {
    registerTFGOreVeinFeatures(event);
    registerTFGOverworldPlacedFeatures(event);
    registerTFGBeneathPlacedFeatures(event);
    registerTFGMoonPlacedFeatures(event);
    registerTFGMarsPlacedFeatures(event);
    registerTFGVenusPlacedFeatures(event);
    registerTFGEuropaPlacedFeatures(event);
})

ServerEvents.tags('entity_type', event => {

    registerTFGMoonEntityTypeTags(event);
    registerTFGMarsEntityTypeTags(event);
    registerTFGVenusEntityTypeTags(event);
    registerTFGEuropaEntityTypeTags(event);

    const entityTagAdditions = {
        'tfg:ignores_gravity':
            ['firmalife:bee'],

        'ad_astra:can_survive_in_space':
            ['railways:conductor', 'endermanoverhaul:pet_enderman', 
            'endermanoverhaul:axolotl_pet_enderman', 'endermanoverhaul:hammerhead_pet_enderman']
    };

    // helpers
    Object.entries(entityTagAdditions).forEach(([tag, items]) => {
        items.forEach(item => event.add(tag, item));
    });

})
