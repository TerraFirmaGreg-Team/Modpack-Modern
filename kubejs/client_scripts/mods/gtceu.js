// priority: 0

const hideGTCEUStuff = (event) => {
    global.GTCEU_DISABLED_ITEMS.forEach(item => {
        event.hide(item)
    })
}

const groupGTCEUStuff = (event) => {
    event.groupItemsByTag('tfg:rei_groups/dusts/pure', 'Pure Dusts', 'forge:pure_dusts')
    event.groupItemsByTag('tfg:rei_groups/dusts/impure', 'Impure Dusts', 'forge:impure_dusts')
    event.groupItemsByTag('tfg:rei_groups/dusts', 'Dusts', 'forge:dusts')
    event.groupItemsByTag('tfg:rei_groups/dusts/small', 'Small Dusts', 'forge:small_dusts')
    event.groupItemsByTag('tfg:rei_groups/dusts/tiny', 'Tiny Dusts', 'forge:tiny_dusts')
    
    event.groupItemsByTag('tfg:rei_groups/ores', 'Ores', 'forge:ores')
    event.groupItemsByTag('tfg:rei_groups/crushed_ores', 'Crushed Ores', 'forge:crushed_ores')
    event.groupItemsByTag('tfg:rei_groups/purified_ores', 'Purified Ores', 'forge:purified_ores')
    event.groupItemsByTag('tfg:rei_groups/refined_ores', 'Refined Ores', 'forge:refined_ores')

    event.groupItemsByTag('tfg:rei_groups/ingots', 'Ingots', 'forge:ingots')
    event.groupItemsByTag('tfg:rei_groups/ingots/hot', 'Hot Ingots', 'forge:hot_ingots')

    event.groupItemsByTag('tfg:rei_groups/gears/small', 'Small Gears', 'forge:small_gears')
    event.groupItemsByTag('tfg:rei_groups/gears', 'Gears', 'forge:gears')

    event.groupItemsByTag('tfg:rei_groups/rods', 'Rods', 'forge:rods')
    event.groupItemsByTag('tfg:rei_groups/rods/long', 'Long Rods', 'forge:rods/long')

    event.groupItemsByTag('tfg:rei_groups/plates', 'Plates', 'forge:plates')
    event.groupItemsByTag('tfg:rei_groups/plates/double', 'Double Plates', 'forge:double_plates')
    event.groupItemsByTag('tfg:rei_groups/plates/dense', 'Dense Plates', 'forge:dense_plates')

    event.groupItemsByTag('tfg:rei_groups/springs', 'Springs', 'forge:springs')
    event.groupItemsByTag('tfg:rei_groups/springs/small', 'Small Springs', 'forge:small_springs')

    event.groupItemsByTag('tfg:rei_groups/gems/exquisite', 'Exquisite Gems', 'forge:exquisite_gems')
    event.groupItemsByTag('tfg:rei_groups/gems', 'Gems', 'forge:gems')
    event.groupItemsByTag('tfg:rei_groups/gems/flawless', 'Flawless Gems', 'forge:flawless_gems')
    event.groupItemsByTag('tfg:rei_groups/gems/flawed', 'Flawed Gems', 'forge:flawed_gems')
    event.groupItemsByTag('tfg:rei_groups/gems/chipped', 'Chipped Gems', 'forge:chipped_gems')
    
    event.groupItemsByTag('tfg:rei_groups/blocks/raw', 'Raw Material Blocks', 'forge:raw_blocks')
    event.groupItemsByTag('tfg:rei_groups/blocks/material_blocks', 'Material Blocks', 'forge:material_blocks')
    event.groupItemsByTag('tfg:rei_groups/blocks/frame', 'Frames', 'forge:frame_blocks')

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
    event.groupItemsByTag('tfg:rei_groups/wires/fine', 'Fine Wires', 'forge:fine_wires')

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

    event.groupItems("tfg:rei_groups/electric_furnace", "Electric Furnace", [/gtceu:.*_electric_furnace/,]);
    event.groupItems("tfg:rei_groups/alloy_smelter", "Alloy Smelter", [/gtceu:.*_alloy_smelter/,]);
    event.groupItems("tfg:rei_groups/arc_furnace", "Arc Furnace", [/gtceu:.*_arc_furnace/,]);
    event.groupItems("tfg:rei_groups/assembler", "Assembler", [/gtceu:.*_assembler/,]);
    event.groupItems("tfg:rei_groups/autoclave", "Autoclave", [/gtceu:.*_autoclave/,]);
    event.groupItems("tfg:rei_groups/bender", "Bender", [/gtceu:.*_bender/,]);
    event.groupItems("tfg:rei_groups/brewery", "Brewery", [/gtceu:.*_brewery/,]);
    event.groupItems("tfg:rei_groups/canner", "Canner", [/gtceu:.*_canner/,]);
    event.groupItems("tfg:rei_groups/centrifuge", "Centrifuge", [/gtceu:.*_centrifuge/,]);
    event.groupItems("tfg:rei_groups/chemical_bath", "Chemical Bath", [/gtceu:.*_chemical_bath/,]);
    event.groupItems("tfg:rei_groups/chemical_reactor", "Сhemical Reactor", [/gtceu:.*_chemical_reactor/,]);
    event.groupItems("tfg:rei_groups/compressor", "Compressor", [/gtceu:.*_compressor/,]);
    event.groupItems("tfg:rei_groups/cutter", "Cutter", [/gtceu:.*_cutter/,]);
    event.groupItems("tfg:rei_groups/distillery", "Distillery", [/gtceu:.*_distillery/,]);
    event.groupItems("tfg:rei_groups/electrolyzer", "Electrolyzer", [/gtceu:.*_electrolyzer/,]);
    event.groupItems("tfg:rei_groups/electromagnetic_separator", "Electromagnetic Separator", [/gtceu:.*_electromagnetic_separator/,]);
    event.groupItems("tfg:rei_groups/extractor", "Extractor", [/gtceu:.*_extractor/,]);
    event.groupItems("tfg:rei_groups/extruder", "Extruder", [/gtceu:.*_extruder/,]);
    event.groupItems("tfg:rei_groups/fermenter", "Fermenter", [/gtceu:.*_fermenter/,]);
    event.groupItems("tfg:rei_groups/laser_engraver", "Laser Engraver", [/gtceu:.*_laser_engraver/,]);
    event.groupItems("tfg:rei_groups/sifter", "Sifter", [/gtceu:.*_sifter/,]);
    event.groupItems("tfg:rei_groups/wiremill", "Wiremill", [/gtceu:.*_wiremill/,]);
    event.groupItems("tfg:rei_groups/macerator", "Macerator", [/gtceu:.*_macerator/,]);
    event.groupItems("tfg:rei_groups/gas_collector", "Gas Collector", [/gtceu:.*_gas_collector/,]);
    event.groupItems("tfg:rei_groups/rock_crusher", "Rock Crusher", [/gtceu:.*_rock_crusher/,]);
    event.groupItems("tfg:rei_groups/combustion", "Combustion", [/gtceu:.*_combustion/,]);
    event.groupItems("tfg:rei_groups/steam_turbine", "Steam Turbine", [/gtceu:.*_steam_turbine/,]);
    event.groupItems("tfg:rei_groups/gas_turbine", "Gas Turbine", [/gtceu:.*_gas_turbine/,]);
    event.groupItems("tfg:rei_groups/polarizer", "Polarizer", [/gtceu:.*_polarizer/,]);
    event.groupItems("tfg:rei_groups/packer", "Packer", [/gtceu:.*_packer/,]);
    event.groupItems("tfg:rei_groups/ore_washer", "Ore Washer", [/gtceu:.*_ore_washer/,]);
    event.groupItems("tfg:rei_groups/mixer", "Mixer", [/gtceu:.*_mixer/,]);
    event.groupItems("tfg:rei_groups/lathe", "Lathe", [/gtceu:.*_lathe/,]);
    event.groupItems("tfg:rei_groups/forming_press", "Forming Press", [/gtceu:.*_forming_press/,]);
    event.groupItems("tfg:rei_groups/forge_hammer", "Forge Hammer", [/gtceu:.*_forge_hammer/,]);
    event.groupItems("tfg:rei_groups/fluid_solidifier", "Fluid Solidifier", [/gtceu:.*_fluid_solidifier/,]);
    event.groupItems("tfg:rei_groups/fluid_heater", "Fluid Heater", [/gtceu:.*_fluid_heater/,]);
    event.groupItems("tfg:rei_groups/machine_hull", "Machine Hull", [/gtceu:.*_machine_hull/,]);
    event.groupItems("tfg:rei_groups/charger_4x", "Сharger 4x", [/gtceu:.*_charger_4x/,]);
    event.groupItems("tfg:rei_groups/super_chest", "Super Chest", [/gtceu:.*_chest/,]);
    event.groupItems("tfg:rei_groups/super_tank", "Super Tankt", [/gtceu:.*_tank/,]);
    event.groupItems("tfg:rei_groups/crate", "Crate", [/gtceu:.*_crate/,]);
    event.groupItems("tfg:rei_groups/drum", "Drum", [/gtceu:.*_drum/,]);
    event.groupItems("tfg:rei_groups/input_bus", "Input Bus", [/gtceu:.*_input_bus/,]);
    event.groupItems("tfg:rei_groups/output_bus", "Output Bus", [/gtceu:.*_output_bus/,]);
    event.groupItems("tfg:rei_groups/input_hatch", "Input Hatch", [/gtceu:.*_input_hatch/,]);
    event.groupItems("tfg:rei_groups/output_hatch", "Output Hatch", [/gtceu:.*_output_hatch/,]);
    event.groupItems("tfg:rei_groups/muffler_hatch", "Muffler Hatch", [/gtceu:.*_muffler_hatch/,]);
    event.groupItems("tfg:rei_groups/energy_input_hatch", "Energy Input Hatch", [/gtceu:.*_energy_input_hatch/,]);
    event.groupItems("tfg:rei_groups/energy_output_hatch", "Energy Output Hatch", [/gtceu:.*_energy_output_hatch/,]);
    event.groupItems("tfg:rei_groups/item_passthrough_hatch", "Item Passthrough Hatch", [/gtceu:.*_item_passthrough_hatch/,]);
    event.groupItems("tfg:rei_groups/fluid_passthrough_hatch", "Fluid Passthrough Hatch", [/gtceu:.*_fluid_passthrough_hatch/,]);
    event.groupItems("tfg:rei_groups/diode", "diode", [/gtceu:.*_diode/,]);
    event.groupItems("tfg:rei_groups/block_breaker", "Block Breaker", [/gtceu:.*_block_breaker/,]);
    event.groupItems("tfg:rei_groups/pump", "Pump", [/gtceu:.*_pump/,]);
    event.groupItems("tfg:rei_groups/fisher", "Fisher", [/gtceu:.*_fisher/,]);
    event.groupItems("tfg:rei_groups/rotor_holder", "Rotor Holder", [/gtceu:.*_rotor_holder/,]);
    event.groupItems("tfg:rei_groups/miner", "Miner", [/gtceu:.*_miner/,]);
    event.groupItems("tfg:rei_groups/256a_laser_target_hatch", "256a Laser Target Hatch", [/gtceu:.*_256a_laser_target_hatch/,]);
    event.groupItems("tfg:rei_groups/256a_laser_source_hatch", "256a Laser Source Hatch", [/gtceu:.*_256a_laser_source_hatch/,]);
    event.groupItems("tfg:rei_groups/1024a_laser_target_hatch", "1024a Laser Target Hatch", [/gtceu:.*_1024a_laser_target_hatch/,]);
    event.groupItems("tfg:rei_groups/1024a_laser_source_hatch", "1024a Laser Source Hatch", [/gtceu:.*_1024a_laser_source_hatch/,]);
    event.groupItems("tfg:rei_groups/4096a_laser_target_hatch", "4096a Laser Target Hatch", [/gtceu:.*_4096a_laser_target_hatch/,]);
    event.groupItems("tfg:rei_groups/4096a_laser_source_hatch", "4096a Laser Source Hatch", [/gtceu:.*_4096a_laser_source_hatch/,]);
    event.groupItems("tfg:rei_groups/transformer_16a", "Transformer 16a", [/gtceu:.*_transformer_16a/,]);
    event.groupItems("tfg:rei_groups/transformer_4a", "Transformer 4a", [/gtceu:.*_transformer_4a/,]);
    event.groupItems("tfg:rei_groups/transformer_2a", "Transformer 2a", [/gtceu:.*_transformer_2a/,]);
    event.groupItems("tfg:rei_groups/transformer_1a", "Transformer 1a", [/gtceu:.*_transformer_1a/,]);
    event.groupItems("tfg:rei_groups/battery_buffer_4x", "Battery Buffer 4x", [/gtceu:.*_battery_buffer_4x/,]);
    event.groupItems("tfg:rei_groups/battery_buffer_8x", "Battery Buffer 8x", [/gtceu:.*_battery_buffer_8x/,]);
    event.groupItems("tfg:rei_groups/battery_buffer_16x", "Battery Buffer 16x", [/gtceu:.*_battery_buffer_16x/,]);
    event.groupItems("tfg:rei_groups/16a_energy_converter", "16a Energy Converter", [/gtceu:.*_16a_energy_converter/,]);
    event.groupItems("tfg:rei_groups/8a_energy_converter", "8a Energy Converter", [/gtceu:.*_8a_energy_converter/,]);
    event.groupItems("tfg:rei_groups/4a_energy_converter", "4a Energy Converter", [/gtceu:.*_4a_energy_converter/,]);
    event.groupItems("tfg:rei_groups/1a_energy_converter", "1a Energy Converter", [/gtceu:.*_1a_energy_converter/,]);
    event.groupItems("tfg:rei_groups/electric_gear_box_2a", "Electric Gear Box 2a", [/gtceu:.*_electric_gear_box_2a/,]);
    event.groupItems("tfg:rei_groups/electric_gear_box_8a", "Electric Gear Box 8a", [/gtceu:.*_electric_gear_box_8a/,]);
    event.groupItems("tfg:rei_groups/electric_gear_box_16a", "Electric Gear Box 16a", [/gtceu:.*_electric_gear_box_16a/,]);
    event.groupItems("tfg:rei_groups/electric_gear_box_32a", "Electric Gear Box 32a", [/gtceu:.*electric_gear_box_32a/,]);
    event.groupItems("tfg:rei_groups/kinetic_output_box", "kinetic Output Box", [/gtceu:.*_kinetic_output_box/,]);
    event.groupItems("tfg:rei_groups/kinetic_input_box", "kinetic Input Box", [/gtceu:.*_kinetic_input_box/,]);

    event.groupItems("tfg:rei_groups/casting_mold", "Casting Mold", [/gtceu:.*_casting_mold/,]);
    event.groupItems("tfg:rei_groups/head_mold", "Head Mold", [/gtceu:.*_head_mold/,]);
    event.groupItems("tfg:rei_groups/electric_motor", "Electric Motor", [/gtceu:.*_electric_motor/,]);
    event.groupItems("tfg:rei_groups/fluid_regulator", "Fluid Regulator", [/gtceu:.*_fluid_regulator/,]);
    event.groupItems("tfg:rei_groups/conveyor_module", "Conveyor Module", [/gtceu:.*_conveyor_module/,]);
    event.groupItems("tfg:rei_groups/electric_piston", "Electric Piston", [/gtceu:.*_electric_piston/,]);
    event.groupItems("tfg:rei_groups/robot_arm", "Robot Arm", [/gtceu:.*_robot_arm/,]);
    event.groupItems("tfg:rei_groups/field_generator", "Field Generator", [/gtceu:.*_field_generator/,]);
    event.groupItems("tfg:rei_groups/emitter", "Emitter", [/gtceu:.*_emitter/,]);
    event.groupItems("tfg:rei_groups/sensor", "Sensor", [/gtceu:.*_sensor/,]);
    event.groupItems("tfg:rei_groups/solar_panel", "Solar Panel", [/gtceu:.*_solar_panel/,]);

    event.groupItems('tfg:rei_groups/buckets', 'Buckets', [/gtceu:.*_bucket/]);
}

const registerGTCEUCategories = (event) => {
    event.remove('gtceu:primitive_blast_furnace')
}