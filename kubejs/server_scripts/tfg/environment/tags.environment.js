"use strict";

/**
 * @param {Internal.TagEventJS} event
 * @param {string} tag
 * @param {string[]} entries
 */
const addAll = (event, tag, entries) => {
    entries.forEach(id => event.add(tag, id));
};

/**
 * @param {Internal.TagEventJS} event
 */
const registerTFGEnvironmentBlockTags = (event) => {

    // --------- Impassable to atmosphere flood fill ---------
    addAll(event, 'tfg:atmosphere_impassable', [
        // Arke really wants railways:track_monorail in here

        'create:fluid_tank', // Pretends to be 3/4 block for smoke particles
        'create:creative_fluid_tank',
        'create_connected:fluid_vessel',
        'create_connected:creative_fluid_vessel',

        'createaddition:modular_accumulator',

        '#mcw_tfc_aio:attic_roofs', // Their collision box is kinda dumb

        // Source blocks. Also flowing water because tags can't distinguish
        'minecraft:water',
        'minecraft:lava',
        'tfc:fluid/river_water',
        'tfc:fluid/salt_water',
        'tfc:fluid/spring_water',
        'tfg:fluid/semiheavy_ammoniacal_water',
        'tfg:fluid/sulfur_fumes',
        'tfg:fluid/geyser_slurry',
    ]);

    // --------- Passable to atmosphere flood fill ---------
    addAll(event, 'tfg:atmosphere_passable', [
        // Various block tags
        '#minecraft:leaves',
        '#minecraft:climbable',
        '#minecraft:replaceable',
        '#tfc:can_be_snow_piled',
        '#minecraft:all_signs',
        '#tfc:plants',
        '#tfg:plants/beneath',
        '#rnr:wet_concrete_roads',

        // Various blocks
        'minecraft:tnt',
        'create:blaze_burner',
        'ae2:charger',
        'expatternprovider:ex_charger',
        'expatternprovider:caner',
        'beneath:soul_clay',
        'mcw_tfc_aio:fences/other_fences/hedge',

        // Environment machines
        'ad_astra:vent',
        'ad_astra:oxygen_distributor',
        'ad_astra:gravity_normalizer',
        'gtceu:oxygen_distributor',

        // Frames, bars, fences
        'minecraft:iron_bars',
        '#forge:frames',
        'create:sail_frame',
        'framedblocks:framed_cube',
        'framedblocks:framed_bars',
        'framedblocks:framed_fence_gate',
        'framedblocks:framed_pane',
        '#tfg:metal_bars',
        '#minecraft:fences',
        '#minecraft:fence_gates',
        '#forge:fences',
        '#forge:fence_gates',

        // Pipes
        '#forge:tiny_fluid_pipes',
        '#forge:small_fluid_pipes',
        '#forge:normal_fluid_pipes',
        '#forge:large_fluid_pipes',
        '#forge:huge_fluid_pipes',
        '#forge:quadruple_fluid_pipes',
        '#forge:nonuple_fluid_pipes',
        '#forge:small_item_pipes',
        '#forge:normal_item_pipes',
        '#forge:large_item_pipes',
        '#forge:huge_item_pipes',
        '#forge:small_restrictive_pipes',
        '#forge:normal_restrictive_pipes',
        '#forge:large_restrictive_pipes',
        '#forge:huge_restrictive_pipes',
        'gtceu:small_duct_pipe',
        'gtceu:normal_duct_pipe',
        'gtceu:large_duct_pipe',
        'gtceu:huge_duct_pipe',
        'gtceu:normal_optical_pipe',
        'gtceu:normal_laser_pipe',

        // Wires and cables
        '#forge:single_wires',
        '#forge:double_wires',
        '#forge:quadruple_wires',
        '#forge:octal_wires',
        '#forge:hex_wires',
        '#forge:single_cables',
        '#forge:double_cables',
        '#forge:quadruple_cables',
        '#forge:octal_cables',
        '#forge:hex_cables',

        // Railways
        'railways:buffer',
        'railways:buffer_narrow',
        'railways:buffer_mono',
        'railways:buffer_wide',
        'railways:casing_collision',
        'railways:handcar',
        'create:tracks',

        // Bridges
        '#mcw_tfc_aio:wooden_piers',
        '#mcw_tfc_aio:log_stairs',
        '#mcw_tfc_aio:rope_bridges',
        '#mcw_tfc_aio:bamboo_stairs',
        '#mcw_tfc_aio:rope_bridges',

        // Crushing wheel controllers
        'create:crushing_wheel_controller',
        'greate:andesite_alloy_crushing_wheel_controller',
        'greate:steel_crushing_wheel_controller',
        'greate:aluminium_crushing_wheel_controller',
        'greate:stainless_steel_crushing_wheel_controller',
        'greate:titanium_crushing_wheel_controller',
        'greate:tungsten_steel_crushing_wheel_controller',
        'greate:rhodium_plated_palladium_crushing_wheel_controller',
        'greate:naquadah_alloy_crushing_wheel_controller',
        'greate:darmstadtium_crushing_wheel_controller',
        'greate:neutronium_crushing_wheel_controller',
    ]);

    // --------- getCollisionShape gives wrong result, use getShape instead ---------
    addAll(event, 'tfg:atmosphere_use_outline', [
        '#minecraft:walls',

        'domum_ornamentum:blockpillar',
        'domum_ornamentum:blockypillar',
        'domum_ornamentum:squarepillar',
        'create:chain_conveyor',
        'create:cart_assembler',

        '#mcw_tfc_aio:log_bridges',
    ]);
};
