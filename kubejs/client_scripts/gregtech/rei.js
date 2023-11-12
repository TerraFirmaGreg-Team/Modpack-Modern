// priority: 0

const hideGTStuff = (event) => {
    // Hide unused GT ores
    GTRegistries.MATERIALS.forEach(material => {
        stoneTypesToHide.forEach(stoneTypeName => {
            event.hide(`#forge:ores/${stoneTypeName}/${material}`)
        })
    })

    gtItemsToHide.forEach(item => {
        event.hide(item)
    })
}

const groupGTStuff = (event) => {
    event.groupItemsByTag('tfg:rei_groups/dusts/tiny', 'Tiny Dusts', 'forge:dusts/tiny')
    event.groupItemsByTag('tfg:rei_groups/dusts/small', 'Small Dusts', 'forge:dusts/small')
    event.groupItemsByTag('tfg:rei_groups/dusts', 'Dusts', 'forge:dusts')
    event.groupItemsByTag('tfg:rei_groups/dusts/pure', 'Pure Dusts', 'forge:dusts/pure')
    event.groupItemsByTag('tfg:rei_groups/dusts/impure', 'Impure Dusts', 'forge:dusts/impure')

    event.groupItemsByTag('tfg:rei_groups/nuggets', 'Nuggets', 'forge:nuggets')
    
    event.groupItemsByTag('tfg:rei_groups/ores', 'Ores', 'forge:ores')
    event.groupItemsByTag('tfg:rei_groups/crushed_ores', 'Crushed Ores', 'forge:crushed_ores')
    event.groupItemsByTag('tfg:rei_groups/purified_ores', 'Purified Ores', 'forge:purified_ores')
    event.groupItemsByTag('tfg:rei_groups/refined_ores', 'Refined Ores', 'forge:refined_ores')

    event.groupItemsByTag('tfg:rei_groups/ingots', 'Ingots', 'forge:ingots')
    event.groupItemsByTag('tfg:rei_groups/ingots/hot', 'Hot Ingots', 'forge:ingots/hot')

    event.groupItemsByTag('tfg:rei_groups/gears/small', 'Small Gears', 'forge:gears/small')
    event.groupItemsByTag('tfg:rei_groups/gears', 'Gears', 'forge:gears')

    event.groupItemsByTag('tfg:rei_groups/rods', 'Rods', 'forge:rods')
    event.groupItemsByTag('tfg:rei_groups/rods/long', 'Long Rods', 'forge:rods/long')

    event.groupItemsByTag('tfg:rei_groups/plates', 'Plates', 'forge:plates')
    event.groupItemsByTag('tfg:rei_groups/plates/double', 'Double Plates', 'forge:plates/double')
    event.groupItemsByTag('tfg:rei_groups/plates/dense', 'Dense Plates', 'forge:plates/dense')

    event.groupItemsByTag('tfg:rei_groups/springs', 'Springs', 'forge:springs')
    event.groupItemsByTag('tfg:rei_groups/springs/small', 'Small Springs', 'forge:springs/small')

    event.groupItemsByTag('tfg:rei_groups/gems/exquisite', 'Exquisite Gems', 'forge:gems/exquisite')
    event.groupItemsByTag('tfg:rei_groups/gems', 'Gems', 'forge:gems')
    event.groupItemsByTag('tfg:rei_groups/gems/flawless', 'Flawless Gems', 'forge:gems/flawless')
    event.groupItemsByTag('tfg:rei_groups/gems/flawed', 'Flawed Gems', 'forge:gems/flawed')
    event.groupItemsByTag('tfg:rei_groups/gems/chipped', 'Chipped Gems', 'forge:gems/chipped')
    
    event.groupItemsByTag('tfg:rei_groups/material_blocks', 'Material Blocks', 'forge:material_blocks')
    event.groupItemsByTag('tfg:rei_groups/raw_material_blocks', 'Raw Material Blocks', 'forge:raw_material_blocks')

    event.groupItemsByTag('tfg:rei_groups/sword_heads', 'Sword Heads', 'forge:sword_heads')
    event.groupItemsByTag('tfg:rei_groups/butchery_knife_heads', 'Butchery Knife Heads', 'forge:butchery_knife_heads')
    event.groupItemsByTag('tfg:rei_groups/mining_hammer_heads', 'Mining Hammer Heads', 'forge:mining_hammer_heads')
    event.groupItemsByTag('tfg:rei_groups/hoe_heads', 'Hoe Heads', 'forge:hoe_heads')
    event.groupItemsByTag('tfg:rei_groups/hammer_heads', 'Hammer Heads', 'forge:hammer_heads')
    event.groupItemsByTag('tfg:rei_groups/knife_heads', 'Knife Heads', 'forge:knife_heads')
    event.groupItemsByTag('tfg:rei_groups/pickaxe_heads', 'Pickaxe Heads', 'forge:pickaxe_heads')
    event.groupItemsByTag('tfg:rei_groups/axe_heads', 'Axe Heads', 'forge:axe_heads')
    event.groupItemsByTag('tfg:rei_groups/saw_heads', 'Saw Heads', 'forge:saw_heads')
    event.groupItemsByTag('tfg:rei_groups/shovel_heads', 'Shovel Heads', 'forge:shovel_heads')
    event.groupItemsByTag('tfg:rei_groups/scythe_heads', 'Scythe Heads', 'forge:scythe_heads')
    event.groupItemsByTag('tfg:rei_groups/file_heads', 'File Heads', 'forge:file_heads')

    event.groupItemsByTag('tfg:rei_groups/poor_raw_ores', 'Poor Raw Ores', 'forge:poor_raw_materials')
    event.groupItemsByTag('tfg:rei_groups/normal_raw_ores', 'Normal Raw Ores', 'forge:raw_materials')
    event.groupItemsByTag('tfg:rei_groups/rich_raw_ores', 'Rich Raw Ores', 'forge:rich_raw_materials')

    event.groupItemsByTag('tfg:rei_groups/rings', 'Rings', 'forge:rings')
    event.groupItemsByTag('tfg:rei_groups/bolts', 'Bolts', 'forge:bolts')
    event.groupItemsByTag('tfg:rei_groups/screws', 'Screws', 'forge:screws')
    event.groupItemsByTag('tfg:rei_groups/foils', 'Foils', 'forge:foils')
    event.groupItemsByTag('tfg:rei_groups/rotors', 'Rotors', 'forge:rotors')
    event.groupItemsByTag('tfg:rei_groups/wires/fine', 'Fine Wires', 'forge:wires/fine')

    event.groupItems('tfg:rei_groups/drill_heads', 'Drill Heads', [/gtceu:.*_drill_head/])
    event.groupItems('tfg:rei_groups/chainsaw_heads', 'Chainsaw Heads', [/gtceu:.*_chainsaw_head/])
    event.groupItems('tfg:rei_groups/buzzsaw_blades', 'Buzz Saw Blades', [/gtceu:.*_buzz_saw_blade/])

    event.groupItems('tfg:rei_groups/turbine_blades', 'Turbine Blades', [/gtceu:.*_turbine_blade/])
    event.groupItems('tfg:rei_groups/wrench_tips', 'Wrench Tips', [/gtceu:.*_wrench_tip/])
    event.groupItems('tfg:rei_groups/screwdriver_tips', 'Screwdriver Tips', [/gtceu:.*_screwdriver_tip/])
    
    event.groupItems('tfg:rei_groups/buckets', 'Buckets', [/gtceu:.*_bucket/])
    event.groupItems('tfg:rei_groups/frame', 'Frames', [/gtceu:.*_frame/])

    event.groupItems('tfg:rei_groups/single_wires', 'Single Wires', [/gtceu:.*_single_wire/])
    event.groupItems('tfg:rei_groups/double_wires', 'Double Wires', [/gtceu:.*_double_wire/])
    event.groupItems('tfg:rei_groups/quadruple_wires', 'Quadruple Wires', [/gtceu:.*_quadruple_wire/])
    event.groupItems('tfg:rei_groups/octal_wires', 'Octal Wires', [/gtceu:.*_octal_wire/])
    event.groupItems('tfg:rei_groups/hex_wires', 'Hex Wires', [/gtceu:.*_hex_wire/])

    event.groupItems('tfg:rei_groups/single_cables', 'Single Cables', [/gtceu:.*_single_cable/])
    event.groupItems('tfg:rei_groups/double_cables', 'Double Cables', [/gtceu:.*_double_cable/])
    event.groupItems('tfg:rei_groups/quadruple_cables', 'Quadruple Cables', [/gtceu:.*_quadruple_cable/])
    event.groupItems('tfg:rei_groups/octal_cables', 'Octal Cables', [/gtceu:.*_octal_cable/])
    event.groupItems('tfg:rei_groups/hex_cables', 'Hex Cables', [/gtceu:.*_hex_cable/])

    event.groupItems('tfg:rei_groups/tiny_fluid_pipes', 'Tiny Fluid Pipes', [/gtceu:.*_tiny_fluid_pipe/])
    event.groupItems('tfg:rei_groups/small_fluid_pipes', 'Small Fluid Pipes', [/gtceu:.*_small_fluid_pipe/])
    event.groupItems('tfg:rei_groups/normal_fluid_pipes', 'Normal Fluid Pipes', [/gtceu:.*_normal_fluid_pipe/])
    event.groupItems('tfg:rei_groups/large_fluid_pipes', 'Large Fluid Pipes', [/gtceu:.*_large_fluid_pipe/])
    event.groupItems('tfg:rei_groups/huge_fluid_pipes', 'Huge Fluid Pipes', [/gtceu:.*_huge_fluid_pipe/])
    event.groupItems('tfg:rei_groups/quadruple_fluid_pipes', 'Quadruple Fluid Pipes', [/gtceu:.*_quadruple_fluid_pipe/])
    event.groupItems('tfg:rei_groups/nonuple_fluid_pipes', 'Nonuple Fluid Pipes', [/gtceu:.*_nonuple_fluid_pipe/])

    event.groupItems('tfg:rei_groups/tiny_item_pipes', 'Tiny Item Pipes', [/gtceu:.*_tiny_item_pipe/])
    event.groupItems('tfg:rei_groups/small_item_pipes', 'Small Item Pipes', [/gtceu:.*_small_item_pipe/])
    event.groupItems('tfg:rei_groups/normal_item_pipes', 'Normal Item Pipes', [/gtceu:.*_normal_item_pipe/])
    event.groupItems('tfg:rei_groups/large_item_pipes', 'Large Item Pipes', [/gtceu:.*_large_item_pipe/])
    event.groupItems('tfg:rei_groups/huge_item_pipes', 'Huge Item Pipes', [/gtceu:.*_huge_item_pipe/])

    event.groupItems('tfg:rei_groups/small_restrictive_item_pipes', 'Small Resctrictive Item Pipes', [/gtceu:.*_small_restrictive_item_pipe/])
    event.groupItems('tfg:rei_groups/normal_restrictive_item_pipes', 'Normal Resctrictive Item Pipes', [/gtceu:.*_normal_restrictive_item_pipe/])
    event.groupItems('tfg:rei_groups/large_restrictive_item_pipes', 'Large Resctrictive Item Pipes', [/gtceu:.*_large_restrictive_item_pipe/])
    event.groupItems('tfg:rei_groups/huge_restrictive_item_pipes', 'Huge Resctrictive Item Pipes', [/gtceu:.*_huge_restrictive_item_pipe/])
}