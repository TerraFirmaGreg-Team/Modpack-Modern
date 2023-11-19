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
    event.groupItemsByTag('tfg:rei_groups/dusts/pure', 'Pure Dusts', 'forge:dusts/pure')
    event.groupItemsByTag('tfg:rei_groups/dusts/impure', 'Impure Dusts', 'forge:dusts/impure')
    event.groupItemsByTag('tfg:rei_groups/dusts', 'Dusts', 'forge:dusts')
    event.groupItemsByTag('tfg:rei_groups/dusts/small', 'Small Dusts', 'forge:dusts/small')
    event.groupItemsByTag('tfg:rei_groups/dusts/tiny', 'Tiny Dusts', 'forge:dusts/tiny')
    
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
    
    event.groupItemsByTag('tfg:rei_groups/material_blocks/raw', 'Raw Material Blocks', 'forge:material_blocks/raw')
    event.groupItemsByTag('tfg:rei_groups/material_blocks/block', 'Material Blocks', 'forge:material_blocks/block')
    event.groupItemsByTag('tfg:rei_groups/material_blocks/frame', 'Frames', 'forge:material_blocks/frame')

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

    event.groupItemsByTag('tfg:rei_groups/drill_heads', 'Drill Heads', 'forge:drill_heads')
    event.groupItemsByTag('tfg:rei_groups/chainsaw_heads', 'Chainsaw Heads', 'forge:chainsaw_heads')
    event.groupItemsByTag('tfg:rei_groups/buzz_saw_heads', 'Buzz Saw Blades', 'forge:buzz_saw_heads')

    event.groupItemsByTag('tfg:rei_groups/turbine_blades', 'Turbine Blades', 'forge:turbine_blades')
    event.groupItemsByTag('tfg:rei_groups/wrench_tips', 'Wrench Tips', 'forge:wrench_tips')
    event.groupItemsByTag('tfg:rei_groups/screwdriver_tips', 'Screwdriver Tips', 'forge:screwdriver_tips')

    event.groupItemsByTag('tfg:rei_groups/poor_raw_ores', 'Poor Raw Ores', 'forge:poor_raw_materials')
    event.groupItemsByTag('tfg:rei_groups/normal_raw_ores', 'Normal Raw Ores', 'forge:raw_materials')
    event.groupItemsByTag('tfg:rei_groups/rich_raw_ores', 'Rich Raw Ores', 'forge:rich_raw_materials')

    event.groupItemsByTag('tfg:rei_groups/lenses', 'Lenses', 'forge:lenses')
    event.groupItemsByTag('tfg:rei_groups/rounds', 'Rounds', 'forge:rounds')
    event.groupItemsByTag('tfg:rei_groups/nuggets', 'Nuggets', 'forge:nuggets')
    event.groupItemsByTag('tfg:rei_groups/rings', 'Rings', 'forge:rings')
    event.groupItemsByTag('tfg:rei_groups/bolts', 'Bolts', 'forge:bolts')
    event.groupItemsByTag('tfg:rei_groups/screws', 'Screws', 'forge:screws')
    event.groupItemsByTag('tfg:rei_groups/foils', 'Foils', 'forge:foils')
    event.groupItemsByTag('tfg:rei_groups/rotors', 'Rotors', 'forge:rotors')
    event.groupItemsByTag('tfg:rei_groups/wires/fine', 'Fine Wires', 'forge:wires/fine')

    event.groupItemsByTag('tfg:rei_groups/wires/single', 'Single Wires', 'forge:wires/single')
    event.groupItemsByTag('tfg:rei_groups/wires/double', 'Double Wires','forge:wires/double')
    event.groupItemsByTag('tfg:rei_groups/wires/quadruple', 'Quadruple Wires', 'forge:wires/quadruple')
    event.groupItemsByTag('tfg:rei_groups/wires/octal', 'Octal Wires', 'forge:wires/octal')
    event.groupItemsByTag('tfg:rei_groups/wires/hex', 'Hex Wires', 'forge:wires/hex')

    event.groupItemsByTag('tfg:rei_groups/cables/single', 'Single Cables', 'forge:cables/single')
    event.groupItemsByTag('tfg:rei_groups/cables/double', 'Double Cables', 'forge:cables/double')
    event.groupItemsByTag('tfg:rei_groups/cables/quadruple', 'Quadruple Cables', 'forge:cables/quadruple')
    event.groupItemsByTag('tfg:rei_groups/cables/octal', 'Octal Cables', 'forge:cables/octal')
    event.groupItemsByTag('tfg:rei_groups/cables/hex', 'Hex Cables', 'forge:cables/hex')

    event.groupItemsByTag('tfg:rei_groups/fluid_pipes/tiny', 'Tiny Fluid Pipes', 'forge:fluid_pipes/tiny')
    event.groupItemsByTag('tfg:rei_groups/fluid_pipes/small', 'Small Fluid Pipes', 'forge:fluid_pipes/small')
    event.groupItemsByTag('tfg:rei_groups/fluid_pipes/normal', 'Normal Fluid Pipes', 'forge:fluid_pipes/normal')
    event.groupItemsByTag('tfg:rei_groups/fluid_pipes/large', 'Large Fluid Pipes', 'forge:fluid_pipes/large')
    event.groupItemsByTag('tfg:rei_groups/fluid_pipes/huge', 'Huge Fluid Pipes', 'forge:fluid_pipes/huge')
    event.groupItemsByTag('tfg:rei_groups/fluid_pipes/quadruple', 'Quadruple Fluid Pipes', 'forge:fluid_pipes/quadruple')
    event.groupItemsByTag('tfg:rei_groups/fluid_pipes/nonuple', 'Nonuple Fluid Pipes', 'forge:fluid_pipes/nonuple')

    event.groupItemsByTag('tfg:rei_groups/item_pipes/small', 'Small Item Pipes', 'forge:item_pipes/small')
    event.groupItemsByTag('tfg:rei_groups/item_pipes/normal', 'Normal Item Pipes', 'forge:item_pipes/normal')
    event.groupItemsByTag('tfg:rei_groups/item_pipes/large', 'Large Item Pipes', 'forge:item_pipes/large')
    event.groupItemsByTag('tfg:rei_groups/item_pipes/huge', 'Huge Item Pipes', 'forge:item_pipes/huge')

    event.groupItemsByTag('tfg:rei_groups/restrictive_pipes/small', 'Small Restrictive Pipes', 'forge:restrictive_pipes/small')
    event.groupItemsByTag('tfg:rei_groups/restrictive_pipes/normal', 'Normal Resctrictive Pipes', 'forge:restrictive_pipes/normal')
    event.groupItemsByTag('tfg:rei_groups/restrictive_pipes/large', 'Large Resctrictive Pipes', 'forge:restrictive_pipes/large')
    event.groupItemsByTag('tfg:rei_groups/restrictive_pipes/huge', 'Huge Resctrictive Pipes', 'forge:restrictive_pipes/huge')

    event.groupItems('tfg:rei_groups/buckets', 'Buckets', [/gtceu:.*_bucket/])
}

const registerGTCategories = (event) => {
    event.remove('gtceu:primitive_blast_furnace')
}