// priority: -100
"use strict";

/**
 * Contains items, that should have their tags removed and be hidden from EMI.
 */
global.TFC_DISABLED_ITEMS = /** @type {const} */ ([
    // Ingots
    "tfc:metal/ingot/bismuth",
    "tfc:metal/ingot/bismuth_bronze",
    "tfc:metal/ingot/black_bronze",
    "tfc:metal/ingot/bronze",
    "tfc:metal/ingot/rose_gold",
    "tfc:metal/ingot/sterling_silver",
    "tfc:metal/ingot/wrought_iron",
    "tfc:metal/ingot/steel",
    "tfc:metal/ingot/brass",
    "tfc:metal/ingot/nickel",
    "tfc:metal/ingot/silver",
    "tfc:metal/ingot/tin",
    "tfc:metal/ingot/zinc",
    "tfc:metal/ingot/cast_iron",
    "tfc:metal/ingot/copper",
    "tfc:metal/ingot/gold",

    // Double Ingots
    "tfc:metal/double_ingot/bismuth",
    "tfc:metal/double_ingot/bismuth_bronze",
    "tfc:metal/double_ingot/black_bronze",
    "tfc:metal/double_ingot/bronze",
    "tfc:metal/double_ingot/rose_gold",
    "tfc:metal/double_ingot/sterling_silver",
    "tfc:metal/double_ingot/wrought_iron",
    "tfc:metal/double_ingot/steel",
    "tfc:metal/double_ingot/brass",
    "tfc:metal/double_ingot/nickel",
    "tfc:metal/double_ingot/silver",
    "tfc:metal/double_ingot/tin",
    "tfc:metal/double_ingot/zinc",
    "tfc:metal/double_ingot/copper",
    "tfc:metal/double_ingot/gold",

    // Sheets
    "tfc:metal/sheet/bismuth",
    "tfc:metal/sheet/bismuth_bronze",
    "tfc:metal/sheet/black_bronze",
    "tfc:metal/sheet/bronze",
    "tfc:metal/sheet/rose_gold",
    "tfc:metal/sheet/sterling_silver",
    "tfc:metal/sheet/wrought_iron",
    "tfc:metal/sheet/cast_iron",
    "tfc:metal/sheet/steel",
    "tfc:metal/sheet/black_steel",
    "tfc:metal/sheet/red_steel",
    "tfc:metal/sheet/blue_steel",
    "tfc:metal/sheet/brass",
    "tfc:metal/sheet/copper",
    "tfc:metal/sheet/gold",
    "tfc:metal/sheet/nickel",
    "tfc:metal/sheet/silver",
    "tfc:metal/sheet/tin",
    "tfc:metal/sheet/zinc",
    "tfc:metal/sheet/cast_iron",

    // Double Sheets
    "tfc:metal/double_sheet/bismuth",
    "tfc:metal/double_sheet/bismuth_bronze",
    "tfc:metal/double_sheet/black_bronze",
    "tfc:metal/double_sheet/bronze",
    "tfc:metal/double_sheet/rose_gold",
    "tfc:metal/double_sheet/sterling_silver",
    "tfc:metal/double_sheet/wrought_iron",
    "tfc:metal/double_sheet/cast_iron",
    "tfc:metal/double_sheet/steel",
    "tfc:metal/double_sheet/black_steel",
    "tfc:metal/double_sheet/red_steel",
    "tfc:metal/double_sheet/blue_steel",
    "tfc:metal/double_sheet/brass",
    "tfc:metal/double_sheet/copper",
    "tfc:metal/double_sheet/gold",
    "tfc:metal/double_sheet/nickel",
    "tfc:metal/double_sheet/silver",
    "tfc:metal/double_sheet/tin",
    "tfc:metal/double_sheet/zinc",
    "tfc:metal/double_sheet/cast_iron",

    // Rods
    "tfc:metal/rod/bismuth",
    "tfc:metal/rod/bismuth_bronze",
    "tfc:metal/rod/black_bronze",
    "tfc:metal/rod/bronze",
    "tfc:metal/rod/rose_gold",
    "tfc:metal/rod/sterling_silver",
    "tfc:metal/rod/wrought_iron",
    "tfc:metal/rod/cast_iron",
    "tfc:metal/rod/steel",
    "tfc:metal/rod/black_steel",
    "tfc:metal/rod/red_steel",
    "tfc:metal/rod/blue_steel",
    "tfc:metal/rod/brass",
    "tfc:metal/rod/copper",
    "tfc:metal/rod/gold",
    "tfc:metal/rod/nickel",
    "tfc:metal/rod/silver",
    "tfc:metal/rod/tin",
    "tfc:metal/rod/zinc",
    "tfc:metal/rod/cast_iron",

    // Tool Heads
    // Copper
    "tfc:metal/pickaxe/copper",
    "tfc:metal/pickaxe_head/copper",
    "tfc:metal/axe/copper",
    "tfc:metal/axe_head/copper",
    "tfc:metal/shovel/copper",
    "tfc:metal/shovel_head/copper",
    "tfc:metal/hoe/copper",
    "tfc:metal/hoe_head/copper",
    "tfc:metal/hammer/copper",
    "tfc:metal/hammer_head/copper",
    "tfc:metal/saw/copper",
    "tfc:metal/saw_blade/copper",
    "tfc:metal/sword/copper",
    "tfc:metal/sword_blade/copper",
    "tfc:metal/knife/copper",
    "tfc:metal/knife_blade/copper",
    "tfc:metal/scythe/copper",
    "tfc:metal/scythe_blade/copper",

    // Bismuth Bronze
    "tfc:metal/pickaxe/bismuth_bronze",
    "tfc:metal/pickaxe_head/bismuth_bronze",
    "tfc:metal/axe/bismuth_bronze",
    "tfc:metal/axe_head/bismuth_bronze",
    "tfc:metal/shovel/bismuth_bronze",
    "tfc:metal/shovel_head/bismuth_bronze",
    "tfc:metal/hoe/bismuth_bronze",
    "tfc:metal/hoe_head/bismuth_bronze",
    "tfc:metal/hammer/bismuth_bronze",
    "tfc:metal/hammer_head/bismuth_bronze",
    "tfc:metal/saw/bismuth_bronze",
    "tfc:metal/saw_blade/bismuth_bronze",
    "tfc:metal/sword/bismuth_bronze",
    "tfc:metal/sword_blade/bismuth_bronze",
    "tfc:metal/knife/bismuth_bronze",
    "tfc:metal/knife_blade/bismuth_bronze",
    "tfc:metal/scythe/bismuth_bronze",
    "tfc:metal/scythe_blade/bismuth_bronze",

    // Bronze
    "tfc:metal/pickaxe/bronze",
    "tfc:metal/pickaxe_head/bronze",
    "tfc:metal/axe/bronze",
    "tfc:metal/axe_head/bronze",
    "tfc:metal/shovel/bronze",
    "tfc:metal/shovel_head/bronze",
    "tfc:metal/hoe/bronze",
    "tfc:metal/hoe_head/bronze",
    "tfc:metal/hammer/bronze",
    "tfc:metal/hammer_head/bronze",
    "tfc:metal/saw/bronze",
    "tfc:metal/saw_blade/bronze",
    "tfc:metal/sword/bronze",
    "tfc:metal/sword_blade/bronze",
    "tfc:metal/knife/bronze",
    "tfc:metal/knife_blade/bronze",
    "tfc:metal/scythe/bronze",
    "tfc:metal/scythe_blade/bronze",

    // Black Bronze
    "tfc:metal/pickaxe/black_bronze",
    "tfc:metal/pickaxe_head/black_bronze",
    "tfc:metal/axe/black_bronze",
    "tfc:metal/axe_head/black_bronze",
    "tfc:metal/shovel/black_bronze",
    "tfc:metal/shovel_head/black_bronze",
    "tfc:metal/hoe/black_bronze",
    "tfc:metal/hoe_head/black_bronze",
    "tfc:metal/hammer/black_bronze",
    "tfc:metal/hammer_head/black_bronze",
    "tfc:metal/saw/black_bronze",
    "tfc:metal/saw_blade/black_bronze",
    "tfc:metal/sword/black_bronze",
    "tfc:metal/sword_blade/black_bronze",
    "tfc:metal/knife/black_bronze",
    "tfc:metal/knife_blade/black_bronze",
    "tfc:metal/scythe/black_bronze",
    "tfc:metal/scythe_blade/black_bronze",

    // Wrought Iron
    "tfc:metal/pickaxe/wrought_iron",
    "tfc:metal/pickaxe_head/wrought_iron",
    "tfc:metal/axe/wrought_iron",
    "tfc:metal/axe_head/wrought_iron",
    "tfc:metal/shovel/wrought_iron",
    "tfc:metal/shovel_head/wrought_iron",
    "tfc:metal/hoe/wrought_iron",
    "tfc:metal/hoe_head/wrought_iron",
    "tfc:metal/hammer/wrought_iron",
    "tfc:metal/hammer_head/wrought_iron",
    "tfc:metal/saw/wrought_iron",
    "tfc:metal/saw_blade/wrought_iron",
    "tfc:metal/sword/wrought_iron",
    "tfc:metal/sword_blade/wrought_iron",
    "tfc:metal/knife/wrought_iron",
    "tfc:metal/knife_blade/wrought_iron",
    "tfc:metal/scythe/wrought_iron",
    "tfc:metal/scythe_blade/wrought_iron",

    // Steel
    "tfc:metal/pickaxe/steel",
    "tfc:metal/pickaxe_head/steel",
    "tfc:metal/axe/steel",
    "tfc:metal/axe_head/steel",
    "tfc:metal/shovel/steel",
    "tfc:metal/shovel_head/steel",
    "tfc:metal/hoe/steel",
    "tfc:metal/hoe_head/steel",
    "tfc:metal/hammer/steel",
    "tfc:metal/hammer_head/steel",
    "tfc:metal/saw/steel",
    "tfc:metal/saw_blade/steel",
    "tfc:metal/sword/steel",
    "tfc:metal/sword_blade/steel",
    "tfc:metal/knife/steel",
    "tfc:metal/knife_blade/steel",
    "tfc:metal/scythe/steel",
    "tfc:metal/scythe_blade/steel",

    // Black Steel
    "tfc:metal/pickaxe/black_steel",
    "tfc:metal/pickaxe_head/black_steel",
    "tfc:metal/axe/black_steel",
    "tfc:metal/axe_head/black_steel",
    "tfc:metal/shovel/black_steel",
    "tfc:metal/shovel_head/black_steel",
    "tfc:metal/hoe/black_steel",
    "tfc:metal/hoe_head/black_steel",
    "tfc:metal/hammer/black_steel",
    "tfc:metal/hammer_head/black_steel",
    "tfc:metal/saw/black_steel",
    "tfc:metal/saw_blade/black_steel",
    "tfc:metal/sword/black_steel",
    "tfc:metal/sword_blade/black_steel",
    "tfc:metal/knife/black_steel",
    "tfc:metal/knife_blade/black_steel",
    "tfc:metal/scythe/black_steel",
    "tfc:metal/scythe_blade/black_steel",

    // Red Steel
    "tfc:metal/pickaxe/red_steel",
    "tfc:metal/pickaxe_head/red_steel",
    "tfc:metal/axe/red_steel",
    "tfc:metal/axe_head/red_steel",
    "tfc:metal/shovel/red_steel",
    "tfc:metal/shovel_head/red_steel",
    "tfc:metal/hoe/red_steel",
    "tfc:metal/hoe_head/red_steel",
    "tfc:metal/hammer/red_steel",
    "tfc:metal/hammer_head/red_steel",
    "tfc:metal/saw/red_steel",
    "tfc:metal/saw_blade/red_steel",
    "tfc:metal/sword/red_steel",
    "tfc:metal/sword_blade/red_steel",
    "tfc:metal/knife/red_steel",
    "tfc:metal/knife_blade/red_steel",
    "tfc:metal/scythe/red_steel",
    "tfc:metal/scythe_blade/red_steel",

    // Blue Steel
    "tfc:metal/pickaxe/blue_steel",
    "tfc:metal/pickaxe_head/blue_steel",
    "tfc:metal/axe/blue_steel",
    "tfc:metal/axe_head/blue_steel",
    "tfc:metal/shovel/blue_steel",
    "tfc:metal/shovel_head/blue_steel",
    "tfc:metal/hoe/blue_steel",
    "tfc:metal/hoe_head/blue_steel",
    "tfc:metal/hammer/blue_steel",
    "tfc:metal/hammer_head/blue_steel",
    "tfc:metal/saw/blue_steel",
    "tfc:metal/saw_blade/blue_steel",
    "tfc:metal/sword/blue_steel",
    "tfc:metal/sword_blade/blue_steel",
    "tfc:metal/knife/blue_steel",
    "tfc:metal/knife_blade/blue_steel",
    "tfc:metal/scythe/blue_steel",
    "tfc:metal/scythe_blade/blue_steel",

    // Gems
    "tfc:gem/amethyst",
    "tfc:gem/diamond",
    "tfc:gem/lapis_lazuli",
    "tfc:gem/emerald",
    "tfc:gem/pyrite",
    "tfc:gem/opal",
    "tfc:gem/ruby",
    "tfc:gem/sapphire",
    "tfc:gem/topaz",
    "tfc:ore/amethyst",
    "tfc:ore/diamond",
    "tfc:ore/lapis_lazuli",
    "tfc:ore/emerald",
    "tfc:ore/pyrite",
    "tfc:ore/opal",
    "tfc:ore/ruby",
    "tfc:ore/sapphire",
    "tfc:ore/topaz",
    "tfc:ore/gypsum",
    "tfc:ore/graphite",
    "tfc:ore/sulfur",
    "tfc:ore/cinnabar",
    "tfc:ore/cryolite",
    "tfc:ore/saltpeter",
    "tfc:ore/borax",
    "tfc:ore/bituminous_coal",
    "tfc:ore/lignite",

    // Axles
    "tfc:wood/axle/acacia",
    "tfc:wood/axle/ash",
    "tfc:wood/axle/aspen",
    "tfc:wood/axle/birch",
    "tfc:wood/axle/blackwood",
    "tfc:wood/axle/chestnut",
    "tfc:wood/axle/douglas_fir",
    "tfc:wood/axle/hickory",
    "tfc:wood/axle/kapok",
    "tfc:wood/axle/mangrove",
    "tfc:wood/axle/maple",
    "tfc:wood/axle/oak",
    "tfc:wood/axle/palm",
    "tfc:wood/axle/pine",
    "tfc:wood/axle/rosewood",
    "tfc:wood/axle/sequoia",
    "tfc:wood/axle/spruce",
    "tfc:wood/axle/sycamore",
    "tfc:wood/axle/white_cedar",
    "tfc:wood/axle/willow",

    // Bladed Axles
    "tfc:wood/bladed_axle/acacia",
    "tfc:wood/bladed_axle/ash",
    "tfc:wood/bladed_axle/aspen",
    "tfc:wood/bladed_axle/birch",
    "tfc:wood/bladed_axle/blackwood",
    "tfc:wood/bladed_axle/chestnut",
    "tfc:wood/bladed_axle/douglas_fir",
    "tfc:wood/bladed_axle/hickory",
    "tfc:wood/bladed_axle/kapok",
    "tfc:wood/bladed_axle/mangrove",
    "tfc:wood/bladed_axle/maple",
    "tfc:wood/bladed_axle/oak",
    "tfc:wood/bladed_axle/palm",
    "tfc:wood/bladed_axle/pine",
    "tfc:wood/bladed_axle/rosewood",
    "tfc:wood/bladed_axle/sequoia",
    "tfc:wood/bladed_axle/spruce",
    "tfc:wood/bladed_axle/sycamore",
    "tfc:wood/bladed_axle/white_cedar",
    "tfc:wood/bladed_axle/willow",

    // Encased Axles
    "tfc:wood/encased_axle/acacia",
    "tfc:wood/encased_axle/ash",
    "tfc:wood/encased_axle/aspen",
    "tfc:wood/encased_axle/birch",
    "tfc:wood/encased_axle/blackwood",
    "tfc:wood/encased_axle/chestnut",
    "tfc:wood/encased_axle/douglas_fir",
    "tfc:wood/encased_axle/hickory",
    "tfc:wood/encased_axle/kapok",
    "tfc:wood/encased_axle/mangrove",
    "tfc:wood/encased_axle/maple",
    "tfc:wood/encased_axle/oak",
    "tfc:wood/encased_axle/palm",
    "tfc:wood/encased_axle/pine",
    "tfc:wood/encased_axle/rosewood",
    "tfc:wood/encased_axle/sequoia",
    "tfc:wood/encased_axle/spruce",
    "tfc:wood/encased_axle/sycamore",
    "tfc:wood/encased_axle/white_cedar",
    "tfc:wood/encased_axle/willow",

    // Clutches
    "tfc:wood/clutch/acacia",
    "tfc:wood/clutch/ash",
    "tfc:wood/clutch/aspen",
    "tfc:wood/clutch/birch",
    "tfc:wood/clutch/blackwood",
    "tfc:wood/clutch/chestnut",
    "tfc:wood/clutch/douglas_fir",
    "tfc:wood/clutch/hickory",
    "tfc:wood/clutch/kapok",
    "tfc:wood/clutch/mangrove",
    "tfc:wood/clutch/maple",
    "tfc:wood/clutch/oak",
    "tfc:wood/clutch/palm",
    "tfc:wood/clutch/pine",
    "tfc:wood/clutch/rosewood",
    "tfc:wood/clutch/sequoia",
    "tfc:wood/clutch/spruce",
    "tfc:wood/clutch/sycamore",
    "tfc:wood/clutch/white_cedar",
    "tfc:wood/clutch/willow",

    // Gear Boxes
    "tfc:wood/gear_box/acacia",
    "tfc:wood/gear_box/ash",
    "tfc:wood/gear_box/aspen",
    "tfc:wood/gear_box/birch",
    "tfc:wood/gear_box/blackwood",
    "tfc:wood/gear_box/chestnut",
    "tfc:wood/gear_box/douglas_fir",
    "tfc:wood/gear_box/hickory",
    "tfc:wood/gear_box/kapok",
    "tfc:wood/gear_box/mangrove",
    "tfc:wood/gear_box/maple",
    "tfc:wood/gear_box/oak",
    "tfc:wood/gear_box/palm",
    "tfc:wood/gear_box/pine",
    "tfc:wood/gear_box/rosewood",
    "tfc:wood/gear_box/sequoia",
    "tfc:wood/gear_box/spruce",
    "tfc:wood/gear_box/sycamore",
    "tfc:wood/gear_box/white_cedar",
    "tfc:wood/gear_box/willow",

    // Water Wheels
    "tfc:wood/water_wheel/acacia",
    "tfc:wood/water_wheel/ash",
    "tfc:wood/water_wheel/aspen",
    "tfc:wood/water_wheel/birch",
    "tfc:wood/water_wheel/blackwood",
    "tfc:wood/water_wheel/chestnut",
    "tfc:wood/water_wheel/douglas_fir",
    "tfc:wood/water_wheel/hickory",
    "tfc:wood/water_wheel/kapok",
    "tfc:wood/water_wheel/mangrove",
    "tfc:wood/water_wheel/maple",
    "tfc:wood/water_wheel/oak",
    "tfc:wood/water_wheel/palm",
    "tfc:wood/water_wheel/pine",
    "tfc:wood/water_wheel/rosewood",
    "tfc:wood/water_wheel/sequoia",
    "tfc:wood/water_wheel/spruce",
    "tfc:wood/water_wheel/sycamore",
    "tfc:wood/water_wheel/white_cedar",
    "tfc:wood/water_wheel/willow",

    // Boat
    "tfc:wood/boat/acacia",
    "tfc:wood/boat/ash",
    "tfc:wood/boat/aspen",
    "tfc:wood/boat/birch",
    "tfc:wood/boat/blackwood",
    "tfc:wood/boat/chestnut",
    "tfc:wood/boat/douglas_fir",
    "tfc:wood/boat/hickory",
    "tfc:wood/boat/kapok",
    "tfc:wood/boat/mangrove",
    "tfc:wood/boat/maple",
    "tfc:wood/boat/oak",
    "tfc:wood/boat/palm",
    "tfc:wood/boat/pine",
    "tfc:wood/boat/rosewood",
    "tfc:wood/boat/sequoia",
    "tfc:wood/boat/spruce",
    "tfc:wood/boat/sycamore",
    "tfc:wood/boat/white_cedar",
    "tfc:wood/boat/willow",

    // Windmill Blades
    "tfc:windmill_blade",
    "tfc:rustic_windmill_blade",
    "tfc:lattice_windmill_blade",
    "tfc:orange_windmill_blade",
    "tfc:magenta_windmill_blade",
    "tfc:light_blue_windmill_blade",
    "tfc:yellow_windmill_blade",
    "tfc:lime_windmill_blade",
    "tfc:pink_windmill_blade",
    "tfc:gray_windmill_blade",
    "tfc:light_gray_windmill_blade",
    "tfc:cyan_windmill_blade",
    "tfc:purple_windmill_blade",
    "tfc:blue_windmill_blade",
    "tfc:brown_windmill_blade",
    "tfc:green_windmill_blade",
    "tfc:red_windmill_blade",
    "tfc:black_windmill_blade",

    // Stone tools
    "tfc:stone/knife_head/igneous_extrusive",
    "tfc:stone/knife_head/igneous_intrusive",
    "tfc:stone/knife_head/metamorphic",
    "tfc:stone/knife_head/sedimentary",

    "tfc:stone/knife/igneous_extrusive",
    "tfc:stone/knife/igneous_intrusive",
    "tfc:stone/knife/metamorphic",
    "tfc:stone/knife/sedimentary",

    "tfc:stone/axe_head/igneous_extrusive",
    "tfc:stone/axe_head/igneous_intrusive",
    "tfc:stone/axe_head/metamorphic",
    "tfc:stone/axe_head/sedimentary",

    "tfc:stone/axe/igneous_extrusive",
    "tfc:stone/axe/igneous_intrusive",
    "tfc:stone/axe/metamorphic",
    "tfc:stone/axe/sedimentary",

    "tfc:stone/shovel_head/igneous_extrusive",
    "tfc:stone/shovel_head/igneous_intrusive",
    "tfc:stone/shovel_head/metamorphic",
    "tfc:stone/shovel_head/sedimentary",

    "tfc:stone/shovel/igneous_extrusive",
    "tfc:stone/shovel/igneous_intrusive",
    "tfc:stone/shovel/metamorphic",
    "tfc:stone/shovel/sedimentary",

    "tfc:stone/hammer_head/igneous_extrusive",
    "tfc:stone/hammer_head/igneous_intrusive",
    "tfc:stone/hammer_head/metamorphic",
    "tfc:stone/hammer_head/sedimentary",

    "tfc:stone/hammer/igneous_extrusive",
    "tfc:stone/hammer/igneous_intrusive",
    "tfc:stone/hammer/metamorphic",
    "tfc:stone/hammer/sedimentary",

    "tfc:stone/hoe_head/igneous_extrusive",
    "tfc:stone/hoe_head/igneous_intrusive",
    "tfc:stone/hoe_head/metamorphic",
    "tfc:stone/hoe_head/sedimentary",

    "tfc:stone/hoe/igneous_extrusive",
    "tfc:stone/hoe/igneous_intrusive",
    "tfc:stone/hoe/metamorphic",
    "tfc:stone/hoe/sedimentary",

    // Other
    "tfc:trip_hammer",
    "tfc:steel_pipe",
    "tfc:steel_pump",
    "tfc:crankshaft",
    "tfc:hand_wheel_base",
    "tfc:hand_wheel",
    "tfc:blank_disc",
    "tfc:sandpaper",
    "tfc:brass_mechanisms",

    // Buckets
    "tfc:bucket/metal/bismuth",
    "tfc:bucket/metal/bismuth_bronze",
    "tfc:bucket/metal/black_bronze",
    "tfc:bucket/metal/bronze",
    "tfc:bucket/metal/brass",
    "tfc:bucket/metal/copper",
    "tfc:bucket/metal/gold",
    "tfc:bucket/metal/nickel",
    "tfc:bucket/metal/rose_gold",
    "tfc:bucket/metal/silver",
    "tfc:bucket/metal/tin",
    "tfc:bucket/metal/zinc",
    "tfc:bucket/metal/sterling_silver",
    "tfc:bucket/metal/wrought_iron",
    "tfc:bucket/metal/cast_iron",
    "tfc:bucket/metal/pig_iron",
    "tfc:bucket/metal/steel",
    "tfc:bucket/metal/black_steel",
    "tfc:bucket/metal/blue_steel",
    "tfc:bucket/metal/red_steel"
]);

/** Items that need to be hidden, but you want to keep their tags.*/
global.TFC_HIDDEN_ITEMS = /** @type {const} */ ([
    "tfc:wild_crop/papyrus",
    "tfc:wild_crop/pumpkin",
    "tfc:wild_crop/melon",
    "tfc:wild_crop/red_bell_pepper",
    "tfc:wild_crop/yellow_bell_pepper",
    "tfc:wild_crop/barley",
    "tfc:wild_crop/oat",
    "tfc:wild_crop/rye",
    "tfc:wild_crop/maize",
    "tfc:wild_crop/wheat",
    "tfc:wild_crop/rice",
    "tfc:wild_crop/beet",
    "tfc:wild_crop/cabbage",
    "tfc:wild_crop/carrot",
    "tfc:wild_crop/garlic",
    "tfc:wild_crop/green_bean",
    "tfc:wild_crop/potato",
    "tfc:wild_crop/onion",
    "tfc:wild_crop/soybean",
    "tfc:wild_crop/squash",
    "tfc:wild_crop/sugarcane",
    "tfc:wild_crop/tomato",
    "tfc:wild_crop/jute"
]);

/**
 * Хранит список всех имен типов камней в TFC.
 */
global.TFC_STONE_TYPES = /** @type {const} */ ([
    "gabbro",
    "shale",
    "claystone",
    "limestone",
    "conglomerate",
    "dolomite",
    "chert",
    "chalk",
    "rhyolite",
    "dacite",
    "quartzite",
    "slate",
    "phyllite",
    "schist",
    "gneiss",
    "marble",
    "basalt", // Exists in GT
    "diorite", // Exists in GT
    "andesite", // Exists in GT
    "granite" // Exists in GT
]);

global.TFC_WOOD_TYPES = /** @type {const} */ ([
    "acacia", // Exists in Minecraft
    "ash",
    "aspen",
    "birch", // Exists in Minecraft
    "blackwood",
    "chestnut",
    "douglas_fir",
    "hickory",
    "kapok",
    "mangrove",
    "maple",
    "oak", // Exists in Minecraft
    "palm",
    "pine",
    "rosewood",
    "sequoia",
    "spruce",
    "sycamore",
    "white_cedar",
    "willow"
]);

global.TFC_HARDWOOD_TYPES = /** @type {const} */ ([
    "acacia",
    "ash",
    "aspen",
    "birch",
    "blackwood",
    "chestnut",
    "hickory",
    "maple",
    "oak",
    "rosewood",
    "sycamore"
]);

global.TFC_SOFTWOOD_TYPES = /** @type {const} */ ([
    "douglas_fir",
    "kapok",
    "mangrove",
    "palm",
    "pine",
    "sequoia",
    "spruce",
    "white_cedar",
    "willow"
]);

global.TFC_MUD_TYPES = /** @type {const} */ (["silt", "loam", "sandy_loam", "silty_loam"]);

/**
 * Хранит названия типов полублоков из камня в TFC. (Не кирпичей)
 */
global.TFC_ROCK_SLAB_BLOCK_TYPES = /** @type {const} */ (["raw", "smooth", "cobble", "mossy_cobble"]);

/**
 * Хранит названия типов полублоков из кирпича из камня в TFC
 */
global.TFC_BRICK_SLAB_BLOCK_TYPES = /** @type {const} */ (["bricks", "mossy_bricks", "cracked_bricks"]);

/**
 * Хранит названия цветов песка в TFC.
 */
global.SAND_COLORS = /** @type {const} */ (["brown", "white", "black", "red", "yellow", "green", "pink"]);

global.TFC_MEAT_RECIPE_COMPONENTS = /** @type {const} */ ([
    { input: "tfc:food/horse_meat", output: "tfc:food/cooked_horse_meat", name: "cooked_horse_meat" },
    { input: "tfc:food/bear", output: "tfc:food/cooked_bear", name: "cooked_bear" },
    { input: "tfc:food/mutton", output: "tfc:food/cooked_mutton", name: "cooked_mutton" },
    { input: "tfc:food/pheasant", output: "tfc:food/cooked_pheasant", name: "cooked_pheasant" },
    { input: "tfc:food/quail", output: "tfc:food/cooked_quail", name: "cooked_quail" },
    { input: "tfc:food/chicken", output: "tfc:food/cooked_chicken", name: "cooked_chicken" },
    { input: "tfc:food/pork", output: "tfc:food/cooked_pork", name: "cooked_pork" },
    { input: "tfc:food/beef", output: "tfc:food/cooked_beef", name: "cooked_beef" },
    { input: "tfc:food/crappie", output: "tfc:food/cooked_crappie", name: "cooked_crappie" },
    { input: "tfc:food/lake_trout", output: "tfc:food/cooked_lake_trout", name: "cooked_lake_trout" },
    { input: "tfc:food/largemouth_bass", output: "tfc:food/cooked_largemouth_bass", name: "cooked_largemouth_bass" },
    { input: "tfc:food/rainbow_trout", output: "tfc:food/cooked_rainbow_trout", name: "cooked_rainbow_trout" },
    { input: "tfc:food/salmon", output: "tfc:food/cooked_salmon", name: "cooked_salmon" },
    { input: "tfc:food/smallmouth_bass", output: "tfc:food/cooked_smallmouth_bass", name: "cooked_smallmouth_bass" },
    { input: "tfc:food/camelidae", output: "tfc:food/cooked_camelidae", name: "cooked_camelidae" },
    { input: "tfc:food/frog_legs", output: "tfc:food/cooked_frog_legs", name: "cooked_frog_legs" },
    { input: "tfc:food/gran_feline", output: "tfc:food/cooked_gran_feline", name: "cooked_gran_feline" },
    { input: "tfc:food/turtle", output: "tfc:food/cooked_turtle", name: "cooked_turtle" },
    { input: "tfc:food/cod", output: "tfc:food/cooked_cod", name: "cooked_cod" },
    { input: "tfc:food/tropical_fish", output: "tfc:food/cooked_tropical_fish", name: "cooked_tropical_fish" },
    { input: "tfc:food/calamari", output: "tfc:food/cooked_calamari", name: "cooked_calamari" },
    { input: "tfc:food/shellfish", output: "tfc:food/cooked_shellfish", name: "cooked_shellfish" },
    { input: "tfc:food/bluegill", output: "tfc:food/cooked_bluegill", name: "cooked_bluegill" },
    { input: "tfc:food/turkey", output: "tfc:food/cooked_turkey", name: "cooked_turkey" },
    { input: "tfc:food/peafowl", output: "tfc:food/cooked_peafowl", name: "cooked_peafowl" },
    { input: "tfc:food/grouse", output: "tfc:food/cooked_grouse", name: "cooked_grouse" },
    { input: "tfc:food/venison", output: "tfc:food/cooked_venison", name: "cooked_venison" },
    { input: "tfc:food/wolf", output: "tfc:food/cooked_wolf", name: "cooked_wolf" },
    { input: "tfc:food/rabbit", output: "tfc:food/cooked_rabbit", name: "cooked_rabbit" },
    { input: "tfc:food/hyena", output: "tfc:food/cooked_hyena", name: "cooked_hyena" },
    { input: "tfc:food/duck", output: "tfc:food/cooked_duck", name: "cooked_duck" },
    { input: "tfc:food/chevon", output: "tfc:food/cooked_chevon", name: "cooked_chevon" },
    { input: "tfc:food/fox", output: "tfc:food/cooked_fox", name: "cooked_fox" },
    { input: "#forge:eggs", output: "tfc:food/cooked_egg", name: "cooked_egg" },

    { input: "minecraft:chorus_fruit", output: "minecraft:popped_chorus_fruit", name: "popped_chorus_fruit" },
    { input: "tfg:food/raw_birt", output: "tfg:food/cooked_birt", name: "cooked_birt" },
    { input: "tfg:food/raw_crawlermari", output: "tfg:food/cooked_crawlermari", name: "cooked_crawlermari" },
    { input: "tfg:food/raw_limpet", output: "tfg:food/cooked_limpet", name: "cooked_limpet" },
    { input: "tfg:sunflower_product", output: "tfg:roasted_sunflower_seeds", name: "roasted_sunflower_seeds" },
    { input: "tfg:food/raw_moon_rabbit", output: "tfg:food/cooked_moon_rabbit", name: "cooked_moon_rabbit" },
    { input: "betterend:bolux_mushroom_product", output: "betterend:bolux_mushroom_cooked", name: "bolux_mushroom" },
    { input: "betterend:chorus_mushroom_product", output: "betterend:chorus_mushroom_cooked", name: "chorus_mushroom" },
    { input: "betterend:shadow_berry_product", output: "betterend:shadow_berry_cooked", name: "shadow_berry" },
    { input: "betterend:cave_pumpkin_pie_raw", output: "betterend:cave_pumpkin_pie", name: "cave_pumpkin_pie" },
    { input: "tfg:food/raw_glacian_mutton", output: "tfg:food/cooked_glacian_mutton", name: "cooked_glacian_mutton" },
    { input: "tfg:food/raw_sniffer_beef", output: "tfg:food/cooked_sniffer_beef", name: "cooked_sniffer_beef" },
    { input: "tfg:food/raw_wraptor", output: "tfg:food/cooked_wraptor", name: "cooked_wraptor" },
    { input: "wan_ancient_beasts:toxlacanth", output: "wan_ancient_beasts:cooked_toxlacanth", name: "cooked_toxlacanth" },
    { input: "tfg:food/raw_springling_collar", output: "tfg:food/cooked_springling_collar", name: "cooked_springling_collar" },
    { input: "tfg:food/raw_walker_steak", output: "tfg:food/cooked_walker_steak", name: "cooked_walker_steak" },
    { input: "tfg:food/raw_glider_wings", output: "tfg:food/cooked_glider_wings", name: "cooked_glider_wings" },
    { input: "tfg:food/raw_whole_soarer", output: "tfg:food/cooked_whole_soarer", name: "cooked_whole_soarer" },
    { input: "tfg:food/raw_crusher_meat", output: "tfg:food/cooked_crusher_meat", name: "cooked_crusher_meat" },
    { input: "tfg:food/raw_goober_meat", output: "tfg:food/cooked_goober_meat", name: "cooked_goober_meat" },
    { input: "wan_ancient_beasts:raw_ancient_meat", output: "wan_ancient_beasts:cooked_ancient_meat", name: "cooked_eater_meat" },
    { input: "tfg:food/raw_surfer_steak", output: "tfg:food/cooked_surfer_steak", name: "cooked_surfer_steak" },
    { input: "tfg:food/raw_long_pig_filet", output: "tfg:food/cooked_long_pig_filet", name: "cooked_long_pig_filet" },
    { input: "tfg:food/raw_cruncher_ribs", output: "tfg:food/cooked_cruncher_ribs", name: "cooked_cruncher_ribs" },
    { input: "tfg:food/raw_stickastackatick", output: "tfg:food/cooked_stickastackatick", name: "cooked_stickastackatick" },
    { input: "tfg:food/raw_burger_patty", output: "tfg:food/cooked_burger_patty", name: "cooked_burger_patty" }

]);

global.TFC_GRAINS = /** @type {const} */ (["barley", "maize", "oat", "rye", "rice", "wheat"]);

global.TFC_JAMS = /** @type {const} */ ([
    "blackberry",
    "blueberry",
    "bunchberry",
    "cloudberry",
    "cranberry",
    "elderberry",
    "gooseberry",
    "raspberry",
    "snowberry",
    "strawberry",
    "wintergreen_berry",
    "banana",
    "cherry",
    "green_apple",
    "lemon",
    "olive",
    "orange",
    "peach",
    "plum",
    "red_apple",
    "pumpkin_chunks",
    "melon_slice"
]);

global.TFC_GREENHOUSE_FRUIT_RECIPE_COMPONENTS = /** @type {const} */ ([
    { input: "tfc:plant/cherry_sapling", fluid_amount: 8000, output: "32x tfc:food/cherry", name: "cherry" },
    { input: "tfc:plant/green_apple_sapling", fluid_amount: 8000, output: "32x tfc:food/green_apple", name: "green_apple" },
    { input: "tfc:plant/lemon_sapling", fluid_amount: 8000, output: "32x tfc:food/lemon", name: "lemon" },
    { input: "tfc:plant/olive_sapling", fluid_amount: 8000, output: "32x tfc:food/olive", name: "olive" },
    { input: "tfc:plant/orange_sapling", fluid_amount: 8000, output: "32x tfc:food/orange", name: "orange" },
    { input: "tfc:plant/peach_sapling", fluid_amount: 8000, output: "32x tfc:food/peach", name: "peach" },
    { input: "tfc:plant/plum_sapling", fluid_amount: 8000, output: "32x tfc:food/plum", name: "plum" },
    { input: "tfc:plant/red_apple_sapling", fluid_amount: 8000, output: "32x tfc:food/red_apple", name: "red_apple" },
    { input: "tfc:plant/banana_sapling", fluid_amount: 8000, output: "32x tfc:food/banana", name: "banana" }
]);

global.TFC_GREENHOUSE_VEGETABLE_RECIPE_COMPONENTS = /** @type {const} */ ([
    { input: "8x tfc:seeds/barley", fluid_amount: 4000, output: "24x tfc:food/barley", name: "barley" },
    { input: "8x tfc:seeds/oat", fluid_amount: 4000, output: "24x tfc:food/oat", name: "oat" },
    { input: "8x tfc:seeds/rye", fluid_amount: 4000, output: "24x tfc:food/rye", name: "rye" },
    { input: "8x tfc:seeds/maize", fluid_amount: 4000, output: "24x tfc:food/maize", name: "maize" },
    { input: "8x tfc:seeds/wheat", fluid_amount: 4000, output: "24x tfc:food/wheat", name: "wheat" },
    { input: "8x tfc:seeds/rice", fluid_amount: 4000, output: "24x tfc:food/rice", name: "rice" },
    { input: "8x tfc:seeds/beet", fluid_amount: 4000, output: "24x tfc:food/beet", name: "beet" },
    { input: "8x tfc:seeds/cabbage", fluid_amount: 4000, output: "24x tfc:food/cabbage", name: "cabbage" },
    { input: "8x tfc:seeds/carrot", fluid_amount: 4000, output: "24x tfc:food/carrot", name: "carrot" },
    { input: "8x tfc:seeds/green_bean", fluid_amount: 4000, output: "24x tfc:food/green_bean", name: "green_bean" },
    { input: "8x tfc:seeds/garlic", fluid_amount: 4000, output: "24x tfc:food/garlic", name: "garlic" },
    { input: "8x tfc:seeds/potato", fluid_amount: 4000, output: "24x tfc:food/potato", name: "potato" },
    { input: "8x tfc:seeds/onion", fluid_amount: 4000, output: "24x tfc:food/onion", name: "onion" },
    { input: "8x tfc:seeds/soybean", fluid_amount: 4000, output: "24x tfc:food/soybean", name: "soybean" },
    { input: "8x tfc:seeds/squash", fluid_amount: 4000, output: "24x tfc:food/squash", name: "squash" },
    { input: "8x tfc:seeds/sugarcane", fluid_amount: 4000, output: "24x tfc:food/sugarcane", name: "sugarcane" },
    { input: "8x tfc:seeds/tomato", fluid_amount: 4000, output: "24x tfc:food/tomato", name: "tomato" },
    { input: "8x tfc:seeds/jute", fluid_amount: 4000, output: "24x tfc:jute", name: "jute" },
    { input: "8x tfc:seeds/papyrus", fluid_amount: 4000, output: "24x tfc:papyrus", name: "papyrus" },
    { input: "8x tfc:seeds/pumpkin", fluid_amount: 4000, output: "24x tfc:pumpkin", name: "pumpkin" },
    { input: "8x tfc:seeds/melon", fluid_amount: 4000, output: "24x tfc:melon", name: "melon" },
    { input: "8x tfc:seeds/red_bell_pepper", fluid_amount: 4000, output: "24x tfc:food/red_bell_pepper", name: "red_bell_pepper" },
    { input: "8x tfc:seeds/yellow_bell_pepper", fluid_amount: 4000, output: "24x tfc:food/yellow_bell_pepper", name: "yellow_bell_pepper" },
    { input: "8x tfg:sunflower_seeds", fluid_amount: 4000, output: "24x tfg:sunflower_product", name: "sunflower" },
    { input: "8x tfg:rapeseed_seeds", fluid_amount: 4000, output: "24x tfg:rapeseed_product", name: "rapeseed" },
    { input: "8x tfg:flax_seeds", fluid_amount: 4000, output: "24x tfg:flax_product", name: "flax" }
]);

global.TFC_GREENHOUSE_BERRY_RECIPE_COMPONENTS = /** @type {const} */ ([
    { input: "tfc:plant/snowberry_bush", fluid_amount: 6000, output: "3x tfc:food/snowberry", name: "snowberry" },
    { input: "tfc:plant/bunchberry_bush", fluid_amount: 6000, output: "3x tfc:food/bunchberry", name: "bunchberry" },
    { input: "tfc:plant/gooseberry_bush", fluid_amount: 6000, output: "3x tfc:food/gooseberry", name: "gooseberry" },
    { input: "tfc:plant/cloudberry_bush", fluid_amount: 6000, output: "3x tfc:food/cloudberry", name: "cloudberry" },
    { input: "tfc:plant/strawberry_bush", fluid_amount: 6000, output: "3x tfc:food/strawberry", name: "strawberry" },
    { input: "tfc:plant/wintergreen_berry_bush", fluid_amount: 6000, output: "3x tfc:food/wintergreen_berry", name: "wintergreen_berry" },
    { input: "tfc:plant/blackberry_bush", fluid_amount: 6000, output: "3x tfc:food/blackberry", name: "blackberry" },
    { input: "tfc:plant/raspberry_bush", fluid_amount: 6000, output: "3x tfc:food/raspberry", name: "raspberry" },
    { input: "tfc:plant/blueberry_bush", fluid_amount: 6000, output: "3x tfc:food/blueberry", name: "blueberry" },
    { input: "tfc:plant/elderberry_bush", fluid_amount: 6000, output: "3x tfc:food/elderberry", name: "elderberry" },
    { input: "tfc:plant/cranberry_bush", fluid_amount: 6000, output: "3x tfc:food/cranberry", name: "cranberry" }
]);

global.TFC_MILKS = /** @type {const} */ ([
    { id: "minecraft:milk" },
    { id: "firmalife:yak_milk" },
    { id: "firmalife:goat_milk" }
    // Uncomment this if firmalife ever makes this obtainable
    //{id: 'firmalife:coconut_milk'},
]);

global.TFC_CURDS_AND_CHEESES = /** @type {const} */ ([
    {
        id: "cow", milk: "minecraft:milk", curdled_fluid: "tfc:curdled_milk", curd: "firmalife:food/milk_curd",
        unsalted_cheese: "firmalife:food/gouda", unsalted_wheel: "firmalife:gouda_wheel",
        salted_cheese: "firmalife:food/cheddar", salted_wheel: "firmalife:cheddar_wheel"
    },
    {
        id: "yak", milk: "firmalife:yak_milk", curdled_fluid: "firmalife:curdled_yak_milk", curd: "firmalife:food/yak_curd",
        unsalted_cheese: "firmalife:food/shosha", unsalted_wheel: "firmalife:shosha_wheel",
        salted_cheese: "firmalife:food/rajya_metok", salted_wheel: "firmalife:rajya_metok_wheel"
    },
    {
        id: "goat", milk: "firmalife:goat_milk", curdled_fluid: "firmalife:curdled_goat_milk", curd: "firmalife:food/goat_curd",
        unsalted_cheese: "firmalife:food/feta", unsalted_wheel: "firmalife:feta_wheel",
        salted_cheese: "firmalife:food/chevre", salted_wheel: "firmalife:chevre_wheel"
    },
    {
        id: "ox", milk: "tfc_gurman:ox_milk", curdled_fluid: "tfc_gurman:curdled_ox_milk", curd: "tfc_gurman:ox_curd",
        unsalted_cheese: "tfc_gurman:ox_brinza_slice", unsalted_wheel: "tfc_gurman:ox_brinza_wheel",
        salted_cheese: null, salted_wheel: null
    },
    {
        id: "sheep", milk: "tfc_gurman:sheep_milk", curdled_fluid: "tfc_gurman:curdled_sheep_milk", curd: "tfc_gurman:sheep_curd",
        unsalted_cheese: "tfc_gurman:sheep_brinza_slice", unsalted_wheel: "tfc_gurman:sheep_brinza_wheel",
        salted_cheese: null, salted_wheel: null
    },
    {
        id: "alpaca", milk: "tfc_gurman:alpaca_milk", curdled_fluid: "tfc_gurman:curdled_alpaca_milk", curd: "tfc_gurman:alpaca_curd",
        unsalted_cheese: "tfc_gurman:alpaca_brinza_slice", unsalted_wheel: "tfc_gurman:alpaca_brinza_wheel",
        salted_cheese: null, salted_wheel: null
    }
]);

global.TFC_DRY_MUD_BRICKS = /** @type {const} */ ([
    "tfc:mud_brick/loam",
    "tfc:mud_brick/sandy_loam",
    "tfc:mud_brick/silt",
    "tfc:mud_brick/silty_loam"
]);

global.TFC_WET_MUD_BRICKS = /** @type {const} */ ([
    "tfc:drying_bricks/loam",
    "tfc:drying_bricks/sandy_loam",
    "tfc:drying_bricks/silt",
    "tfc:drying_bricks/silty_loam"
]);

global.TFC_ALCOHOL = /** @type {const} */ ([
    { id: "tfc:beer", ingredient: "tfc:food/barley_flour" },
    { id: "tfc:cider", ingredient: "#tfc:foods/apples" },
    { id: "tfc:rum", ingredient: "#tfg:sugars" },
    { id: "tfc:sake", ingredient: "tfc:food/rice_flour" },
    { id: "tfc:vodka", ingredient: "tfc:food/potato" },
    { id: "tfc:whiskey", ingredient: "tfc:food/wheat_flour" },
    { id: "tfc:corn_whiskey", ingredient: "tfc:food/maize_flour" },
    { id: "tfc:rye_whiskey", ingredient: "tfc:food/rye_flour" },
    { id: "firmalife:mead", ingredient: "firmalife:raw_honey" }
]);

global.TFC_MAGMA_BLOCKS = /** @type {const} */ ([
    "tfc:rock/magma/granite",
    "tfc:rock/magma/diorite",
    "tfc:rock/magma/gabbro",
    "tfc:rock/magma/rhyolite",
    "tfc:rock/magma/basalt",
    "tfc:rock/magma/andesite",
    "tfc:rock/magma/dacite"
]);

/**
 * @param {number} defaultAmount
 * @param {number} percents
 * @returns {number}
 */
global.calcAmountOfMetal = function (defaultAmount, percents) {
    const value = defaultAmount / (100 / percents);
    return value % 2 === 0 ? value : Math.round(value) - 1;
};

/**
 * Calculates the amount of metal processed.
 * This prevents the "exploit" where Cassiterite dust gives 2x as much from melting as smelting in a furnace.
 * @param {number} defaultAmount
 * @param {number} percents
 * @returns {number}
 */
global.calcAmountOfMetalProcessed = function (defaultAmount, percents) {
    const percentPerItem = percents / Math.ceil(percents / 100);
    const value = defaultAmount * (percentPerItem / 100);
    return value % 2 === 0 ? value : Math.round(value) - 1;
};

global.TFC_EQUIPMENT_METALS = /** @type {const} */ ([
    "copper",
    "bismuth_bronze",
    "bronze",
    "black_bronze",
    "wrought_iron",
    "steel",
    "black_steel",
    "red_steel",
    "blue_steel"
]);

 global.TFC_BIOMES = /** @type {const} */ ([
     'tfc:badlands',
     'tfc:canyons',
     'tfc:deep_ocean',
     'tfc:deep_ocean_trench',
     'tfc:highlands',
     'tfc:hills',
     'tfc:inverted_badlands',
     'tfc:lake',
     'tfc:low_canyons',
     'tfc:lowlands',
     'tfc:mountain_lake',
     'tfc:mountains',
     'tfc:ocean',
     'tfc:ocean_reef',
     'tfc:oceanic_mountain_lake',
     'tfc:oceanic_mountains',
     'tfc:old_mountain_lake',
     'tfc:old_mountains',
     'tfc:plains',
     'tfc:plateau',
     'tfc:plateau_lake',
     'tfc:river',
     'tfc:rolling_hills',
     'tfc:salt_marsh',
     'tfc:shore',
     'tfc:tidal_flats',
     'tfc:volcanic_mountain_lake',
     'tfc:volcanic_mountains',
     'tfc:volcanic_oceanic_mountain_lake',
     'tfc:volcanic_oceanic_mountains'
 ])
