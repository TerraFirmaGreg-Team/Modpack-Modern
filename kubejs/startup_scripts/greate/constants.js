// priority: -100
"use strict";

global.GREATE_DISABLED_ITEMS = /** @type {const} */ ([
    "create:andesite_alloy",
    "greate:steel_alloy",
    "greate:aluminium_alloy",
    "greate:stainless_steel_alloy",
    "greate:titanium_alloy",
    "greate:tungsten_steel_alloy",
    "greate:rhodium_plated_palladium_alloy",
    "greate:naquadah_alloy_alloy",
    "greate:darmstadtium_alloy",
    "greate:neutronium_alloy",

    "gtceu:neutronium_whisk",
    "greate:polyethylene_belt_connector",
    "greate:polytetrafluoroethylene_belt_connector",
    "greate:polybenzimidazole_belt_connector",

    "greate:andesite_alloy_crushing_wheel",
    "greate:andesite_alloy_encased_fan",
    "greate:andesite_alloy_mechanical_mixer",
    "greate:andesite_alloy_mechanical_pump",

    // Disabled because they don't respect the cleanroom requirement of some recipes
    "greate:stainless_steel_mechanical_saw",
    "greate:titanium_mechanical_saw",

    // You should be graduating to IV multiblocks in IV
    "greate:tungsten_steel_shaft",
    "greate:tungsten_steel_cogwheel",
    "greate:large_tungsten_steel_cogwheel",
    "greate:tungsten_steel_crushing_wheel",
    "greate:tungsten_steel_encased_fan",
    "greate:tungsten_steel_gearbox",
    "greate:tungsten_steel_mechanical_press",
    "greate:tungsten_steel_mechanical_mixer",
    "greate:tungsten_steel_millstone",
    "greate:tungsten_steel_mechanical_saw",
    "greate:tungsten_steel_mechanical_pump",
    "greate:tungsten_steel_vertical_gearbox",

    "greate:rhodium_plated_palladium_shaft",
    "greate:rhodium_plated_palladium_cogwheel",
    "greate:large_rhodium_plated_palladium_cogwheel",
    "greate:rhodium_plated_palladium_crushing_wheel",
    "greate:rhodium_plated_palladium_encased_fan",
    "greate:rhodium_plated_palladium_gearbox",
    "greate:rhodium_plated_palladium_mechanical_press",
    "greate:rhodium_plated_palladium_mechanical_mixer",
    "greate:rhodium_plated_palladium_millstone",
    "greate:rhodium_plated_palladium_mechanical_saw",
    "greate:rhodium_plated_palladium_mechanical_pump",
    "greate:rhodium_plated_palladium_vertical_gearbox",

    "greate:naquadah_alloy_shaft",
    "greate:naquadah_alloy_cogwheel",
    "greate:large_naquadah_alloy_cogwheel",
    "greate:naquadah_alloy_crushing_wheel",
    "greate:naquadah_alloy_encased_fan",
    "greate:naquadah_alloy_gearbox",
    "greate:naquadah_alloy_mechanical_press",
    "greate:naquadah_alloy_mechanical_mixer",
    "greate:naquadah_alloy_millstone",
    "greate:naquadah_alloy_mechanical_saw",
    "greate:naquadah_alloy_mechanical_pump",
    "greate:naquadah_alloy_vertical_gearbox",

    "greate:darmstadtium_shaft",
    "greate:darmstadtium_cogwheel",
    "greate:large_darmstadtium_cogwheel",
    "greate:darmstadtium_crushing_wheel",
    "greate:darmstadtium_encased_fan",
    "greate:darmstadtium_gearbox",
    "greate:darmstadtium_mechanical_press",
    "greate:darmstadtium_mechanical_mixer",
    "greate:darmstadtium_millstone",
    "greate:darmstadtium_mechanical_saw",
    "greate:darmstadtium_mechanical_pump",
    "greate:darmstadtium_vertical_gearbox",

    "greate:neutronium_shaft",
    "greate:neutronium_cogwheel",
    "greate:large_neutronium_cogwheel",
    "greate:neutronium_crushing_wheel",
    "greate:neutronium_encased_fan",
    "greate:neutronium_gearbox",
    "greate:neutronium_mechanical_press",
    "greate:neutronium_mechanical_mixer",
    "greate:neutronium_millstone",
    "greate:neutronium_mechanical_saw",
    "greate:neutronium_mechanical_pump",
    "greate:neutronium_vertical_gearbox",

    // Adding these here because they're greate's fault
    "greate:andesite_alloy_bucket",
    "greate:andesite_alloy_ring",
    "greate:tiny_andesite_alloy_dust",
    "greate:small_andesite_alloy_dust",
    "greate:andesite_alloy_dust",
    "greate:andesite_alloy_plate",
    "greate:double_andesite_alloy_plate",
    "greate:andesite_alloy_nugget",
    "greate:andesite_alloy_rotor",
    "greate:andesite_alloy_whisk",
    "greate:andesite_alloy_bolt",
    "greate:andesite_alloy_ingot",
    "greate:andesite_alloy_rod",
    "greate:andesite_alloy_screw",
    "greate:andesite_alloy_buzz_saw_blade",
    "greate:andesite_alloy_block",
    "greate:andesite_alloy_buzzsaw",

    "greate:refined_radiance_bucket",
    "greate:tiny_refined_radiance_dust",
    "greate:small_refined_radiance_dust",
    "greate:refined_radiance_dust",
    "greate:refined_radiance_plate",
    "greate:double_refined_radiance_plate",
    "greate:refined_radiance_nugget",
    "greate:refined_radiance_bolt",
    "greate:refined_radiance_ingot",
    "greate:refined_radiance_rod",
    "greate:refined_radiance_screw",
    "greate:long_refined_radiance_rod",
    "greate:refined_radiance_block",

    "greate:chromatic_compound_bucket",
    "greate:tiny_chromatic_compound_dust",
    "greate:small_chromatic_compound_dust",
    "greate:chromatic_compound_dust",
    "greate:chromatic_compound_nugget",
    "greate:chromatic_compound_ingot",
    "greate:chromatic_compound_block",

    "greate:shadow_steel_bucket",
    "greate:tiny_shadow_steel_dust",
    "greate:small_shadow_steel_dust",
    "greate:shadow_steel_dust",
    "greate:shadow_steel_plate",
    "greate:double_shadow_steel_plate",
    "greate:shadow_steel_nugget",
    "greate:shadow_steel_bolt",
    "greate:shadow_steel_ingot",
    "greate:shadow_steel_rod",
    "greate:shadow_steel_screw",
    "greate:long_shadow_steel_rod",
    "greate:shadow_steel_block"
]);

global.GREATE_DISABLED_FLUIDS = /** @type {const} */ ([
    "greate:andesite_alloy",
    "greate:refined_radiance",
    "greate:chromatic_compound",
    "greate:shadow_steel"
]);

global.GREATE_DISABLED_TAGS = /** @type {const} */ ([
    "#forge:andesite_alloy",
    "#forge:dusts/andesite_alloy",
    "#forge:alloys/andesite_alloy",
    "#forge:alloys/steel",
    "#forge:alloys/aluminium",
    "#forge:alloys/stainless_steel",
    "#forge:alloys/titanium",
    "#forge:alloys/tungsten_steel",
    "#forge:alloys/rhodium_plated_palladium",
    "#forge:alloys/naquadah_alloy",
    "#forge:alloys/darmstadtium",
    "#forge:alloys/neutronium"
]);

global.GREATE_BELTS = /** @type {const} */ ([
    "greate:silicone_rubber_belt_connector",
    "greate:polybenzimidazole_belt_connector",
    "greate:polyethylene_belt_connector",
    "greate:polytetrafluoroethylene_belt_connector",
    "greate:rubber_belt_connector"
]);

global.GREATE_CRUSHING_WHEELS = /** @type {const} */ ([
    "greate:andesite_alloy_crushing_wheel",
    "greate:steel_crushing_wheel",
    "greate:aluminium_crushing_wheel",
    "greate:stainless_steel_crushing_wheel",
    "greate:titanium_crushing_wheel",
    "greate:tungsten_steel_crushing_wheel",
    "greate:rhodium_plated_palladium_crushing_wheel",
    "greate:naquadah_alloy_crushing_wheel",
    "greate:darmstadtium_crushing_wheel",
    "greate:neutronium_crushing_wheel"
]);

global.GREATE_ENCASED_FANS = /** @type {const} */ ([
    "greate:andesite_alloy_encased_fan",
    "greate:steel_encased_fan",
    "greate:aluminium_encased_fan",
    "greate:stainless_steel_encased_fan",
    "greate:titanium_encased_fan",
    "greate:tungsten_steel_encased_fan",
    "greate:rhodium_plated_palladium_encased_fan",
    "greate:naquadah_alloy_encased_fan",
    "greate:darmstadtium_encased_fan",
    "greate:neutronium_encased_fan"
]);

global.GREATE_MECHANICAL_MIXERS = /** @type {const} */ ([
    "greate:andesite_alloy_mechanical_mixer",
    "greate:steel_mechanical_mixer",
    "greate:aluminium_mechanical_mixer",
    "greate:stainless_steel_mechanical_mixer",
    "greate:titanium_mechanical_mixer",
    "greate:tungsten_steel_mechanical_mixer",
    "greate:rhodium_plated_palladium_mechanical_mixer",
    "greate:naquadah_alloy_mechanical_mixer",
    "greate:darmstadtium_mechanical_mixer",
    "greate:neutronium_mechanical_mixer"
]);

global.GREATE_MECHANICAL_PRESSES = /** @type {const} */ ([
    "greate:andesite_alloy_mechanical_press",
    "greate:steel_mechanical_press",
    "greate:aluminium_mechanical_press",
    "greate:stainless_steel_mechanical_press",
    "greate:titanium_mechanical_press",
    "greate:tungsten_steel_mechanical_press",
    "greate:rhodium_plated_palladium_mechanical_press",
    "greate:naquadah_alloy_mechanical_press",
    "greate:darmstadtium_mechanical_press",
    "greate:neutronium_mechanical_press"
]);

global.GREATE_MECHANICAL_PUMPS = /** @type {const} */ ([
    "greate:andesite_alloy_mechanical_pump",
    "greate:steel_mechanical_pump",
    "greate:aluminium_mechanical_pump",
    "greate:stainless_steel_mechanical_pump",
    "greate:titanium_mechanical_pump",
    "greate:tungsten_steel_mechanical_pump",
    "greate:rhodium_plated_palladium_mechanical_pump",
    "greate:naquadah_alloy_mechanical_pump",
    "greate:darmstadtium_mechanical_pump",
    "greate:neutronium_mechanical_pump"
]);

global.GREATE_MECHANICAL_SAWS = /** @type {const} */ ([
    "greate:andesite_alloy_mechanical_saw",
    "greate:steel_mechanical_saw",
    "greate:aluminium_mechanical_saw",
    "greate:stainless_steel_mechanical_saw",
    "greate:titanium_mechanical_saw",
    "greate:tungsten_steel_mechanical_saw",
    "greate:rhodium_plated_palladium_mechanical_saw",
    "greate:naquadah_alloy_mechanical_saw",
    "greate:darmstadtium_mechanical_saw",
    "greate:neutronium_mechanical_saw"
]);

global.GREATE_MILLSTONES = /** @type {const} */ ([
    "greate:andesite_alloy_millstone",
    "greate:steel_millstone",
    "greate:aluminium_millstone",
    "greate:stainless_steel_millstone",
    "greate:titanium_millstone",
    "greate:tungsten_steel_millstone",
    "greate:rhodium_plated_palladium_millstone",
    "greate:naquadah_alloy_millstone",
    "greate:darmstadtium_millstone",
    "greate:neutronium_millstone"
]);
