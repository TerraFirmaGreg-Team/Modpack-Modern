// priority: 0

const registerFramedBlocksRecipes = (event) => {
    
    event.remove({ id: 'framedblocks:framed_torch' })
    event.remove({ id: 'framedblocks:framing_saw/framed_torch' })
    event.remove({ id: 'framedblocks:framed_soul_torch' })
    event.remove({ id: 'framedblocks:framing_saw/framed_soul_torch' })

    //#region Framed Iron Door
    event.shaped('framedblocks:framed_iron_door', [
        'ABA'
    ], {
        A: '#forge:plates/wrought_iron',
        B: 'framedblocks:framed_door'
    }).id('framedblocks:framed_iron_door')

    event.custom({
        type: "framedblocks:frame",
        additives: [
            {
                "count": 2,
                "ingredient": {
                "tag": "forge:plates/wrought_iron"
                }
            }
        ],
        material: 3072,
        result: {
            item: "framedblocks:framed_iron_door"
        }
    }).id('framedblocks:framing_saw/framed_iron_door')
    //#endregion

    //#region Framed Iron Trapdoor
    event.shapeless('framedblocks:framed_iron_trapdoor', [
        'framedblocks:framed_trapdoor',
        '#forge:plates/wrought_iron'
    ]).id('framedblocks:framed_iron_trapdoor')

    event.custom({
        type: "framedblocks:frame",
        additives: [
            {
                count: 1,
                ingredient: {
                    tag: "forge:plates/wrought_iron"
                }
            }
        ],
        material: 1536,
        result: {
            item: "framedblocks:framed_iron_trapdoor"
        }
    }).id('framedblocks:framing_saw/framed_iron_trapdoor')
    //#endregion

    //#region Framed Obsidian Pressure Plate
    event.shaped('framedblocks:framed_obsidian_pressure_plate', [
        'AA',
        'BB'
    ], {
        A: '#forge:plates/obsidian',
        B: 'framedblocks:framed_cube'
    }).id('framedblocks:framed_obsidian_pressure_plate')

    event.custom({
        type: "framedblocks:frame",
        additives: [
            {
                count: 1,
                ingredient: {
                    tag: "forge:plates/obsidian"
                }
            }
        ],
        material: 1536,
        result: {
            item: "framedblocks:framed_obsidian_pressure_plate"
        }
    }).id('framedblocks:framing_saw/framed_obsidian_pressure_plate')
    //#endregion

    //#region Framed Gold Pressure Plate
    event.shaped('framedblocks:framed_gold_pressure_plate', [
        'AA',
        'BB'
    ], {
        A: '#forge:plates/gold',
        B: 'framedblocks:framed_cube'
    }).id('framedblocks:framed_gold_pressure_plate')

    event.custom({
        type: "framedblocks:frame",
        additives: [
            {
                count: 1,
                ingredient: {
                    tag: "forge:plates/gold"
                }
            }
        ],
        material: 1536,
        result: {
            item: "framedblocks:framed_gold_pressure_plate"
        }
    }).id('framedblocks:framing_saw/framed_gold_pressure_plate')
    //#endregion

    //#region Framed Iron Pressure Plate
    event.shaped('framedblocks:framed_iron_pressure_plate', [
        'AA',
        'BB'
    ], {
        A: '#forge:plates/iron',
        B: 'framedblocks:framed_cube'
    }).id('framedblocks:framed_iron_pressure_plate')

    event.custom({
        type: "framedblocks:frame",
        additives: [
            {
                count: 1,
                ingredient: {
                    tag: "forge:plates/iron"
                }
            }
        ],
        material: 1536,
        result: {
            item: "framedblocks:framed_iron_pressure_plate"
        }
    }).id('framedblocks:framing_saw/framed_iron_pressure_plate')
    //#endregion

    //#region Framed Hanging Sign
    event.shaped('6x framedblocks:framed_hanging_sign', [
        'A A',
        'BBB',
        'BBB'
    ], {
        A: '#tfg:metal_chains',
        B: 'framedblocks:framed_cube'
    }).id('framedblocks:framed_hanging_sign')

    event.custom({
        type: "framedblocks:frame",
        additives: [
            {
                count: 1,
                ingredient: {
                    tag: "tfg:metal_chains"
                }
            }
        ],
        material: 3072,
        result: {
            count: 2,
            item: "framedblocks:framed_hanging_sign"
        }
      }).id('framedblocks:framing_saw/framed_hanging_sign')
    //#endregion

    //#region Framed Collapsible Copycat Block
    event.shaped('4x framedblocks:framed_collapsible_copycat_block', [
        'ABA',
        'B B',
        'ABA'
    ], {
        A: 'framedblocks:framed_cube',
        B: '#forge:sheets/copper'
    }).id('framedblocks:framed_collapsible_copycat_block')

    event.custom({
        type: "framedblocks:frame",
        additives: [
            {
                count: 1,
                ingredient: {
                    tag: "forge:plates/copper"
                }
            }
        ],
        material: 6144,
        result: {
            item: "framedblocks:framed_collapsible_copycat_block"
        }
    }).id('framedblocks:framing_saw/framed_collapsible_copycat_block')
    //#endregion

    //#region Framed Fancy Rail Block
    event.shaped('32x framedblocks:framed_fancy_rail', [
        'A A',
        'ABA',
        'A A'
    ], {
        A: '#forge:rods/wrought_iron',
        B: 'framedblocks:framed_cube'
    }).id('framedblocks:framed_fancy_rail')

    event.custom({
        type: "framedblocks:frame",
        additives: [
            {
                count: 6,
                ingredient: {
                    tag: "forge:rods/wrought_iron"
                }
            }
        ],
        material: 6144,
        result: {
            count: 32,
            item: "framedblocks:framed_fancy_rail"
        }
      }).id('framedblocks:framing_saw/framed_fancy_rail')
    //#endregion

    //#region Framed Fancy Powered Rail Block
    event.shaped('16x framedblocks:framed_fancy_powered_rail', [
        'A A',
        'ABA',
        'ACA'
    ], {
        A: '#forge:rods/gold',
        B: 'framedblocks:framed_cube',
        C: 'minecraft:redstone'
    }).id('framedblocks:framed_fancy_powered_rail')

    event.custom({
        type: "framedblocks:frame",
        additives: [
            {
                count: 6,
                ingredient: {
                    tag: "forge:rods/gold"
                }
            },
            {
                count: 1,
                ingredient: {
                    tag: "forge:dusts/redstone"
                }
            }
        ],
        material: 6144,
        result: {
            count: 16,
            item: "framedblocks:framed_fancy_powered_rail"
        }
      }).id('framedblocks:framing_saw/framed_fancy_powered_rail')
    //#endregion

    //#region Framed Fancy Detector Rail Block
    event.shaped('4x framedblocks:framed_fancy_detector_rail', [
        'ABA',
        'ACA',
        'ADA'
    ], {
        A: '#forge:rods/wrought_iron',
        B: '#minecraft:stone_pressure_plates',
        C: 'framedblocks:framed_cube',
        D: 'minecraft:redstone',
    }).id('framedblocks:framed_fancy_detector_rail')

    event.custom({
        type: "framedblocks:frame",
        additives: [
            {
                count: 6,
                ingredient: {
                    tag: "forge:rods/wrought_iron"
                }
            },
            {
                count: 1,
                ingredient: {
                    tag: "forge:dusts/redstone"
                }
            },
            {
                count: 1,
                ingredient: {
                    tag: "minecraft:stone_pressure_plates"
                }
            }
        ],
        material: 6144,
        result: {
            count: 4,
            item: "framedblocks:framed_fancy_detector_rail"
        }
      }).id('framedblocks:framing_saw/framed_fancy_detector_rail')
    //#endregion

    //#region Framed Fancy Activator Rail Block
    event.shaped('4x framedblocks:framed_fancy_activator_rail', [
        'ABA',
        'ACA',
        'ABA'
    ], {
        A: '#forge:rods/wrought_iron',
        B: 'framedblocks:framed_cube',
        C: 'minecraft:redstone_torch'
    }).id('framedblocks:framed_fancy_activator_rail')

    event.custom({
        type: "framedblocks:frame",
        additives: [
            {
                count: 6,
                ingredient: {
                    tag: "forge:rods/wrought_iron"
                }
            },
            {
                count: 1,
                ingredient: {
                    item: "minecraft:redstone_torch"
                }
            }
        ],
        material: 6144,
        result: {
            count: 4,
            item: "framedblocks:framed_fancy_activator_rail"
        }
      }).id('framedblocks:framing_saw/framed_fancy_activator_rail')
    //#endregion

    // Framed Raiforcement
    event.shaped('32x framedblocks:framed_reinforcement', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:plates/obsidian',
        B: '#forge:plates/wrought_iron',
        C: '#forge:frames'
    }).id('framedblocks:framed_reinforcement')

    // Framed Key
    event.shaped('framedblocks:framed_key', [
        'AAB',
        'CC '
    ], {
        A: '#forge:rods/wooden',
        B: 'framedblocks:framed_cube',
        C: '#forge:nuggets/wrought_iron'
    }).id('framedblocks:framed_key')

    // Framed Cube
    event.shaped('4x framedblocks:framed_cube', [
        'ABA',
        'B B',
        'ABA'
    ], {
        A: '#minecraft:planks',
        B: '#forge:rods/wooden'
    }).id('framedblocks:framed_cube')

    // Framed Fence
    event.shaped('3x framedblocks:framed_fence', [
        'ABA',
        'ABA',
    ], {
        A: 'framedblocks:framed_cube',
        B: '#forge:rods/wooden'
    }).id('framedblocks:framed_fence')

    // Framed Fence Gate 
    event.shaped('framedblocks:framed_fence_gate', [
        'ABA',
        'ABA',
    ], {
        B: 'framedblocks:framed_cube',
        A: '#forge:rods/wooden'
    }).id('framedblocks:framed_fence_gate')

    // Framed Ladder
    event.shaped('3x framedblocks:framed_ladder', [
        'A A',
        'ABA',
        'A A'
    ], {
        A: 'framedblocks:framed_cube',
        B: '#forge:rods/wooden'
    }).id('framedblocks:framed_ladder')

    // Framing Saw
    event.shaped('framedblocks:framing_saw', [
        ' B ',
        'AAA',
    ], {
        A: 'framedblocks:framed_cube',
        B: 'gtceu:wrought_iron_buzz_saw_blade'
    }).id('framedblocks:framing_saw')

    // Powered Framing Saw
    event.shaped('framedblocks:powered_framing_saw', [
        'ABA',
        'CAD',
        'EEE'
    ], {
        A: '#forge:glass',
        B: 'gtceu:wrought_iron_buzz_saw_blade',
        C: 'gtceu:lv_electric_motor',
        D: 'gtceu:lv_electric_motor',
        E: 'framedblocks:framed_cube'
    }).id('framedblocks:powered_framing_saw')

    // Framed Chest
    event.shapeless(
      Item.of('framedblocks:framed_chest', 1), 
      [
        'gtceu:wood_crate',
        'framedblocks:framed_cube',
      ]
    ).id('framedblocks:framed_chest')

    event.custom({
        type: "framedblocks:frame",
        additives: [
            {
                "count": 1,
                "ingredient": {
                item: "gtceu:wood_crate"
                }
            }
        ],
        material: 6144,
        result: {
            item: "framedblocks:framed_chest"
        }
    }).id('framedblocks:framing_saw/framed_chest')
}
