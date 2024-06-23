// priority: 0

const registerAE2Recipes = (event) => {
    
    // Удаление рецептов мода
    event.remove({ not: [
        { id: 'ae2:transform/entangled_singularity_from_pearl' },
        { id: 'ae2:transform/fluix_crystals' },
        { id: 'ae2:network/parts/energy_acceptor' },
        { id: 'ae2:network/blocks/energy_energy_acceptor_alt' },
        { id: 'ae2:network/blocks/pattern_providers_interface_part' },
        { id: 'ae2:network/blocks/pattern_providers_interface_alt' },
        { id: 'ae2:network/blocks/interfaces_interface_part' },
        { id: 'ae2:network/blocks/interfaces_interface_alt' },
    ], mod: 'ae2' });

    //#region Рецепты энтропии

    global.TFC_STONE_TYPES.forEach(stone => {
        registerEntropyRecipe(event, { block: { id: `tfc:rock/cobble/${stone}` } }, 'heat', { block: { id: `tfc:rock/raw/${stone}` } }, `tfg:entropy_raw_${stone}_to_cobble`)
        registerEntropyRecipe(event, { block: { id: `tfc:rock/raw/${stone}` } }, 'cool', { block: { id: `tfc:rock/cobble/${stone}` } }, `tfg:entropy_cobble_${stone}_to_raw`)
    })

    //#endregion

    // Network tool
    event.shaped('ae2:network_tool', [
        'AB',
        'CD',
    ], {
        A: '#forge:tools/wrenches',
        B: '#gtceu:circuits/lv',
        C: 'ae2:calculation_processor',
        D: '#ae2:illuminated_panel',
    }).id('tfg:crafting/network_tool')
    
    // Wireless Access Point
    event.shaped('ae2:wireless_access_point', [
        'A',
        'B',
        'C'
    ], {
        A: 'ae2:wireless_receiver',
        B: 'ae2:calculation_processor',
        C: '#ae2:glass_cable',
    }).id('tfg:crafting/wireless_access_point')

    // Wireless Receiver
    event.shaped('ae2:wireless_receiver', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#ae2:glass_cable',
        B: 'ae2:fluix_pearl',
        C: 'gtceu:ev_sensor',
        D: '#forge:rods/titanium',
        E: '#gtceu:circuits/ev'
    }).id('tfg:crafting/wireless_receiver')

    // Illuminated Panel
    event.shaped('ae2:semi_dark_monitor', [
        ' AD',
        'BCD',
        ' AD'
    ], {
        A: '#forge:plates/glowstone',
        B: '#forge:plates/aluminium',
        C: '#forge:plates/red_alloy',
        D: 'ae2:quartz_glass'
    }).id('tfg:crafting/semi_dark_monitor')

    // Toggle Bus
    event.shaped('ae2:toggle_bus', [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: '#forge:plates/red_alloy',
        B: '#ae2:glass_cable',
        C: 'minecraft:lever'
    }).id('tfg:crafting/toggle_bus')

    // Capacity Card
    event.shaped('ae2:capacity_card', [
        'AB',
        'BC',
    ], {
        A: 'ae2:basic_card',
        B: 'ae2:cell_component_1k',
        C: '#forge:gems/certus_quartz'
    }).id('tfg:crafting/capacity_card')

    // Crafting Card
    event.shaped('ae2:crafting_card', [
        'AB',
        'BC',
    ], {
        A: 'ae2:basic_card',
        B: 'ae2:cell_component_1k',
        C: '#tfc:workbenches'
    }).id('tfg:crafting/crafting_card')

    // Redstone Card
    event.shaped('ae2:redstone_card', [
        'AB',
        'BC'
    ], {
        A: 'ae2:basic_card',
        B: 'minecraft:redstone_torch',
        C: 'ae2:calculation_processor'
    }).id('tfg:crafting/redstone_card')

    // Fuzzy Card
    event.shaped('ae2:fuzzy_card', [
        'AB',
        'CD',
    ], {
        A: 'ae2:advanced_card',
        B: 'ae2:engineering_processor',
        C: 'ae2:logic_processor',
        D: 'ae2:calculation_processor'
    }).id('tfg:crafting/fuzzy_card')

    // Inverter Card
    event.shaped('ae2:inverter_card', [
        'AB',
        'BC',
    ], {
        A: 'ae2:advanced_card',
        B: 'ae2:inverted_toggle_bus',
        C: 'ae2:calculation_processor'
    }).id('tfg:crafting/inverter_card')

    // Acceleration Card
    event.shaped('ae2:speed_card', [
        'AB',
        'CD',
    ], {
        A: 'ae2:advanced_card',
        B: 'ae2:engineering_processor',
        C: 'ae2:logic_processor',
        D: '#forge:gems/fluix'
    }).id('tfg:crafting/speed_card')
    
    // Void Card
    event.shapeless('ae2:void_card', ['ae2:basic_card','ae2:calculation_processor'])
        .id('tfg:crafting/void_card')
    
    // Equal Distribution Card
    event.shapeless('ae2:equal_distribution_card', ['ae2:advanced_card','ae2:calculation_processor'])
        .id('tfg:crafting/equal_distribution_card')
    
    // Energy Card
    event.shapeless('ae2:energy_card', ['ae2:advanced_card','2x gtceu:hv_lithium_battery'])
        .id('tfg:crafting/energy_card')

    // Quartz Fixture
	event.shapeless('ae2:quartz_fixture', [
        'ae2:charged_certus_quartz_crystal', 
        '#forge:rods/aluminium'
    ]).id('tfg:crafting/quartz_fixture')
	
	// Light Detecting Fixture
    event.shapeless('ae2:light_detector', [
        '#forge:gems/certus_quartz', 
        '#forge:rods/wrought_iron'
    ]).id('tfg:crafting/light_detector')
	
    // Annihilation Core
    event.shaped('ae2:annihilation_core', [
        'ABA',
        'BDB',
        'ABA'
    ], {
        A: '#forge:rods/aluminium',
        B: 'ae2:engineering_processor',
        D: '#forge:gems/certus_quartz',
    }).id('tfg:crafting/annihilation_core')

    // Formation Core
    event.shaped('ae2:formation_core', [
        'ABA',
        'BDB',
        'ABA'
    ], {
        A: '#forge:rods/aluminium',
        B: 'ae2:engineering_processor',
        D: '#forge:gems/nether_quartz',
    }).id('tfg:crafting/formation_core')

    // Wireless Terminal
    event.shaped('ae2:wireless_terminal', [
        'ABA',
        'CDC',
        'FEF'
    ], {
        A: 'ae2:wireless_receiver',
        B: 'ae2:terminal',
        C: 'ae2:engineering_processor',
        D: '#gtceu:circuits/hv',
        E: 'gtceu:hv_lithium_battery',
        F: '#forge:plates/nether_quartz'
    }).id('tfg:crafting/wireless_terminal')

    // Basic Card
    event.shaped('2x ae2:basic_card', [
        'AB ',
        'CDB',
        'EB '
    ], {
        A: '#forge:fine_wires/red_alloy',
        B: '#forge:plates/aluminium',
        C: 'ae2:calculation_processor',
        D: '#gtceu:circuits/mv',
        E: '#forge:fine_wires/gold'
    }).id('tfg:crafting/basic_card')

    // Advanced Card
    event.shaped('2x ae2:advanced_card', [
        'AB ',
        'CDB',
        'EB '
    ], {
        A: '#forge:fine_wires/red_alloy',
        B: '#forge:plates/stainless_steel',
        C: 'ae2:calculation_processor',
        D: '#gtceu:circuits/hv',
        E: '#forge:fine_wires/silver'
    }).id('tfg:crafting/advanced_card')

    // Wireless Booster
    event.shaped('ae2:wireless_booster', [
        'ABC',
        'DDD',
    ], {
        A: '#forge:dusts/fluix',
        B: '#forge:gems/certus_quartz',
        C: '#forge:plates/ender_pearl',
        D: '#forge:plates/titanium',
    }).id('tfg:crafting/wireless_booster')

    // Memory Card
    event.shaped('ae2:memory_card', [
        'ABB',
        'CDC',
    ], {
        A: 'ae2:calculation_processor',
        B: '#forge:plates/iron',
        C: '#forge:plates/gold',
        D: '#forge:plates/red_alloy',
    }).id('tfg:crafting/memory_card')
    
    // Item Cell Housing
    event.shaped('ae2:item_cell_housing', [
        'ABA',
        'CDC',
        'BBB'
    ], {
        A: 'ae2:quartz_glass',
        B: '#forge:plates/steel',
        C: '#forge:fine_wires/red_alloy',
        D: '#gtceu:circuits/lv',
    }).id('tfg:crafting/item_cell_housing')
    
    // Fluid Cell Housing
    event.shaped('ae2:fluid_cell_housing', [
        'ABA',
        'CDC',
        'BBB'
    ], {
        A: 'ae2:quartz_glass',
        B: '#forge:plates/stainless_steel',
        C: '#forge:fine_wires/red_alloy',
        D: '#gtceu:circuits/lv',
    }).id('tfg:crafting/fluid_cell_housing')

    // Level Emitter
    event.shaped('ae2:level_emitter', [
        'DA ',
        'BCB',
        ' A '
    ], {
        A: '#forge:plates/steel',
        B: '#ae2:glass_cable',
        C: 'minecraft:redstone_torch',
        D: 'ae2:calculation_processor',
    }).id('tfg:crafting/level_emitter')

    // Energy Level Emitter
    event.shaped('ae2:energy_level_emitter', [
        'DAE',
        'BCB',
        ' A '
    ], {
        A: '#forge:plates/steel',
        B: '#ae2:glass_cable',
        C: 'minecraft:redstone_torch',
        D: 'ae2:calculation_processor',
        E: 'ae2:charged_certus_quartz_crystal'
    }).id('tfg:crafting/energy_level_emitter')
    
    // P2P Tunnel
    event.shaped('2x ae2:me_p2p_tunnel', [
        'ABA',
        'BCB',
        'DDD'
    ], {
        A: 'ae2:engineering_processor',
        B: '#forge:plates/aluminium',
        C: '#ae2:illuminated_panel',
        D: '#forge:gems/fluix',
    }).id('tfg:crafting/me_p2p_tunnel')

    // ME Chest
    event.shaped('ae2:chest', [
        'AEA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:plates/stainless_steel',
        B: '#gtceu:circuits/mv',
        C: '#ae2:glass_cable',
        D: 'gtceu:aluminium_crate',
        E: 'ae2:terminal'
    }).id('tfg:crafting/me_chest')

    // ME Drive
    event.shaped('ae2:drive', [
        'ABA',
        'CDC',
        'EBE'
    ], {
        A: '#forge:plates/steel',
        B: 'ae2:engineering_processor',
        C: '#ae2:glass_cable',
        D: '#gtceu:circuits/lv',
        E: '#forge:plates/titanium'
    }).id('tfg:crafting/drive')

    // Spatial Pylon
    event.shaped('ae2:spatial_pylon', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:plates/glass',
        B: '#ae2:glass_cable',
        C: '#forge:dusts/fluix',
        D: '#forge:gems/fluix',
    }).id('tfg:crafting/spatial_pylon')

    // IO Port
    event.shaped('ae2:io_port', [
        'AAA',
        'BCB',
        'DED'
    ], {
        A: '#forge:plates/glass',
        B: 'ae2:drive',
        C: '#ae2:glass_cable',
        D: '#forge:plates/titanium',
        E: 'ae2:engineering_processor'
    }).id('tfg:crafting/io_port')

    // Spatial IO Port
    event.shaped('ae2:spatial_io_port', [
        'AAA',
        'BCB',
        'DED'
    ], {
        A: '#forge:plates/glass',
        B: '#ae2:glass_cable',
        C: 'ae2:io_port',
        D: '#forge:plates/titanium',
        E: 'ae2:engineering_processor'
    }).id('tfg:crafting/spatial_io_port')

    // Monitors
    event.shapeless('ae2:semi_dark_monitor', ['ae2:dark_monitor'])
        .id('tfg:crafting/semi_dark_monitor_2')
    
    event.shapeless('ae2:dark_monitor', ['ae2:monitor'])
        .id('tfg:crafting/dark_monitor')
    
    event.shapeless('ae2:monitor', ['ae2:semi_dark_monitor'])
        .id('tfg:crafting/monitor')

    // Cell Workbench
    event.shaped('ae2:cell_workbench', [
        'ABC',
        'DED',
        'DDD'
    ], {
        A: 'gtceu:item_filter',
        B: 'gtceu:computer_monitor_cover',
        C: 'gtceu:fluid_filter',
        D: '#forge:plates/aluminium',
        E: 'ae2:calculation_processor',
    }).id('tfg:crafting/cell_workbench')

    // Matter Condenser
    event.shaped('ae2:condenser', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:plates/stainless_steel',
        B: 'gtceu:hv_electric_piston',
        C: '#gtceu:circuits/hv',
    }).id('tfg:crafting/condenser')
    
    // Toggle Bus
    event.shapeless('ae2:toggle_bus', ['ae2:inverted_toggle_bus'])
        .id('tfg:crafting/toggle_bus_2')
    
    event.shapeless('ae2:inverted_toggle_bus', ['ae2:toggle_bus'])
        .id('tfg:crafting/inverted_toggle_bus')

    // ME Annihilation Plane
    event.shaped('ae2:annihilation_plane', [
        'AAA',
        'CBC'
    ], {
        A: '#forge:gems/fluix',
        B: 'ae2:annihilation_core',
        C: '#forge:plates/aluminium'
    }).id('tfg:crafting/annihilation_plane')

    // ME Formation Plane
    event.shaped('ae2:formation_plane', [
        'AAA',
        'CBC'
    ], {
        A: '#forge:gems/fluix',
        B: 'ae2:formation_core',
        C: '#forge:plates/aluminium'
    }).id('tfg:crafting/formation_plane')

    // ME Terminal
    event.shaped('ae2:terminal', [
        'ABC',
        'DED',
        'FGF'
    ], {
        A: '#forge:tools/screwdrivers',
        B: '#ae2:illuminated_panel',
        C: '#forge:tools/mallets',
        D: '#forge:rods/steel',
        E: '#gtceu:circuits/hv',
        F: '#forge:plates/steel',
        G: '#forge:screws/steel'
    }).id('tfg:crafting/terminal')

    // ME Crafting Terminal
    event.shaped('ae2:crafting_terminal', [
        'ABC',
        'DED',
        'FGF'
    ], {
        A: '#forge:tools/screwdrivers',
        B: 'ae2:terminal',
        C: '#forge:tools/mallets',
        D: '#forge:rods/steel',
        E: '#tfc:workbenches',
        F: '#forge:plates/steel',
        G: 'ae2:engineering_processor'
    }).id('tfg:crafting/crafting_terminal')

    // pattern access terminal
    event.shaped('ae2:pattern_access_terminal', [
        'ABC',
        'DED',
        'FGF'
    ], {
        A: '#forge:tools/screwdrivers',
        B: 'ae2:terminal',
        C: '#forge:tools/mallets',
        D: '#forge:rods/steel',
        E: '#ae2:pattern_provider',
        F: '#forge:plates/steel',
        G: 'ae2:engineering_processor'
    }).id('tfg:crafting/pattern_access_terminal')

    // ME Pattern Terminal
    event.shaped('ae2:pattern_encoding_terminal',[
        'ABC',
        'DED',
        'FGF'
    ], {
        A: '#forge:tools/screwdrivers',
        B: 'ae2:terminal',
        C: '#forge:tools/mallets',
        D: '#forge:rods/steel',
        E: 'ae2:blank_pattern',
        F: '#forge:plates/steel',
        G: 'ae2:engineering_processor'
    }).id('tfg:crafting/pattern_encoding_terminal')
    
    // Matter Cannon
    event.shaped('ae2:matter_cannon',[
        'AAB',
        'CD ',
        'A  '
    ], {
        A: '#forge:plates/steel',
        B: 'ae2:formation_core',
        C: 'ae2:cell_component_4k',
        D: 'gtceu:hv_lithium_battery'
    }).id('tfg:crafting/matter_cannon')

    // Color Applicator
    event.shaped('ae2:color_applicator',[
        'ABA',
        'CDC',
        ' E '
    ], {
        A: 'gtceu:aluminium_single_wire',
        B: 'ae2:formation_core',
        C: 'ae2:cell_component_4k',
        D: 'gtceu:hv_lithium_battery',
        E: '#forge:rods/steel',
    }).id('tfg:crafting/color_applicator')

    // Energy Cell
    event.recipes.gtceu.assembler('tfg:ae2/energy_cell')
        .itemInputs('gtceu:titanium_frame', '6x gtceu:titanium_plate', '24x gtceu:titanium_screw', 'gtceu:energy_crystal')
        .itemOutputs('ae2:energy_cell')
        .circuit(1)
        .duration(960)
        .EUt(256)

    // Dense Energy Cell
    event.recipes.gtceu.assembler('tfg:ae2/dense_energy_cell')
        .itemInputs('8x ae2:energy_cell', '8x gtceu:silver_quadruple_wire', '4x #gtceu:circuits/ev')
        .itemOutputs('ae2:dense_energy_cell')
        .circuit(1)
        .duration(960)
        .EUt(512)

    // Energy Acceptor
    event.recipes.gtceu.assembler('tfg:ae2/energy_acceptor')
        .itemInputs('5x gtceu:silver_double_cable', 'gtceu:hv_1a_energy_converter', 'gtceu:annealed_copper_single_cable')
        .itemOutputs('ae2:energy_acceptor')
        .circuit(1)
        .duration(520)
        .EUt(128)

    // Glass Cable
    event.recipes.gtceu.assembler('fluix_glass_cable')
        .itemInputs(
            '2x #forge:rods/aluminium',
            '3x ae2:quartz_fiber',
            '#forge:dusts/fluix')
        .itemOutputs('ae2:fluix_glass_cable')
        .circuit(1)
        .duration(20)
        .EUt(480)
    
    event.recipes.gtceu.assembler('fluix_glass_cable_fluixfluid')
        .itemInputs(
            '2x #forge:rods/aluminium',
            '3x ae2:quartz_fiber',)
        .inputFluids(Fluid.of('tfg:fluix', 144))
        .itemOutputs('ae2:fluix_glass_cable')
        .circuit(1)
        .duration(20)
        .EUt(480)

    // Covered Cable
    event.recipes.gtceu.assembler('fluix_covered_cable_rubber')
        .itemInputs(
            '3x ae2:fluix_glass_cable')
        .inputFluids(Fluid.of('gtceu:rubber', 432))
        .itemOutputs('ae2:fluix_covered_cable')
        .circuit(1)
        .duration(20)
        .EUt(480)

    event.recipes.gtceu.assembler('fluix_covered_cable_silicone_rubber')
        .itemInputs(
            '3x ae2:fluix_glass_cable')
        .inputFluids(Fluid.of('gtceu:silicone_rubber', 216))
        .itemOutputs('ae2:fluix_covered_cable')
        .circuit(1)
        .duration(20)
        .EUt(480)
        
    event.recipes.gtceu.assembler('fluix_covered_cable_styrene_butadiene_rubber')
        .itemInputs(
            '3x ae2:fluix_glass_cable')
        .inputFluids(Fluid.of('gtceu:styrene_butadiene_rubber', 108))
        .itemOutputs('ae2:fluix_covered_cable')
        .circuit(1)
        .duration(20)
        .EUt(480)
        
    // Smart Cable
    event.recipes.gtceu.assembler('fluix_smart_cable_rubber')
        .itemInputs(
            '3x ae2:fluix_glass_cable',
            '#forge:dusts/glowstone',
            '#forge:dusts/redstone')
        .inputFluids(Fluid.of('gtceu:rubber', 432))
        .itemOutputs('ae2:fluix_smart_cable')
        .circuit(2)
        .duration(20)
        .EUt(480)
        
    event.recipes.gtceu.assembler('fluix_smart_cable_silicone_rubber')        
        .itemInputs(
            '3x ae2:fluix_glass_cable',
            '#forge:dusts/glowstone',
            '#forge:dusts/redstone')
        .inputFluids(Fluid.of('gtceu:silicone_rubber', 216))
        .itemOutputs('ae2:fluix_smart_cable')
        .circuit(2)
        .duration(20)
        .EUt(480)
        
    event.recipes.gtceu.assembler('fluix_smart_cable_styrene_butadiene_rubber')
        .itemInputs(
            '3x ae2:fluix_glass_cable',
            '#forge:dusts/glowstone',
            '#forge:dusts/redstone')
        .inputFluids(Fluid.of('gtceu:styrene_butadiene_rubber', 108))
        .itemOutputs('ae2:fluix_smart_cable')
        .circuit(2)
        .duration(20)
        .EUt(480)
        
    event.recipes.gtceu.assembler('fluix_smart_cable')
        .itemInputs(
            'ae2:fluix_covered_cable',
            '#forge:dusts/glowstone',
            '#forge:dusts/redstone')
        .itemOutputs('ae2:fluix_smart_cable')
        .circuit(2)
        .duration(20)
        .EUt(480)
        
    // Covered dense cable
    event.recipes.gtceu.assembler('fluix_covered_dense_cable_rubber')
        .itemInputs(
            '12x ae2:fluix_glass_cable')
        .inputFluids(Fluid.of('gtceu:rubber', 1728))
        .itemOutputs('ae2:fluix_covered_dense_cable')
        .circuit(3)
        .duration(20)
        .EUt(480)
        
    event.recipes.gtceu.assembler('fluix_covered_dense_cable_silicone_rubber')
        .itemInputs(
            '12x ae2:fluix_glass_cable')
        .inputFluids(Fluid.of('gtceu:silicone_rubber', 864))
        .itemOutputs('ae2:fluix_covered_dense_cable')
        .circuit(3)
        .duration(20)
        .EUt(480)
        
    event.recipes.gtceu.assembler('fluix_covered_dense_cable_styrene_butadiene_rubber')
        .itemInputs(
            '12x ae2:fluix_glass_cable')
        .inputFluids(Fluid.of('gtceu:styrene_butadiene_rubber', 432))
        .itemOutputs('ae2:fluix_covered_dense_cable')
        .circuit(3)
        .duration(20)
        .EUt(480)
        
     event.recipes.gtceu.assembler('fluix_covered_dense_cable')
        .itemInputs(
            '4x ae2:fluix_covered_cable')
        .itemOutputs('ae2:fluix_covered_dense_cable')
        .circuit(3)
        .duration(20)
        .EUt(480)
        
    // Smart dence cable
    event.recipes.gtceu.assembler('fluix_smart_dence_cable_rubber')
        .itemInputs(
            '12x ae2:fluix_glass_cable',
            '#forge:dusts/glowstone',
            '#forge:dusts/redstone')
        .inputFluids(Fluid.of('gtceu:rubber', 1728))
        .itemOutputs('ae2:fluix_smart_dense_cable')
        .circuit(4)
        .duration(20)
        .EUt(480)
        
    event.recipes.gtceu.assembler('fluix_smart_dence_cable_silicone_rubber')        
        .itemInputs(
            '12x ae2:fluix_glass_cable',
            '#forge:dusts/glowstone',
            '#forge:dusts/redstone')
        .inputFluids(Fluid.of('gtceu:silicone_rubber', 864))
        .itemOutputs('ae2:fluix_smart_dense_cable')
        .circuit(4)
        .duration(20)
        .EUt(480)
        
    event.recipes.gtceu.assembler('fluix_smart_dence_cable_styrene_butadiene_rubber')
        .itemInputs(
            '12x ae2:fluix_glass_cable',
            '#forge:dusts/glowstone',
            '#forge:dusts/redstone')
        .inputFluids(Fluid.of('gtceu:styrene_butadiene_rubber', 432))
        .itemOutputs('ae2:fluix_smart_dense_cable')
        .circuit(4)
        .duration(20)
        .EUt(480)
        
    event.recipes.gtceu.assembler('fluix_smart_dence_cable_covered_cable')
        .itemInputs(
            '4x ae2:fluix_covered_cable',
            '#forge:dusts/glowstone',
            '#forge:dusts/redstone')
        .itemOutputs('ae2:fluix_smart_dense_cable')
        .circuit(4)
        .duration(20)
        .EUt(480)
        
    event.recipes.gtceu.assembler('fluix_smart_dence_cable_smart_cable')
        .itemInputs(
            '4x ae2:fluix_smart_cable',)
        .itemOutputs('ae2:fluix_smart_dense_cable')
        .circuit(4)
        .duration(20)
        .EUt(480)
        
    event.recipes.gtceu.assembler('fluix_smart_dence_cable')
        .itemInputs(
            'ae2:fluix_covered_dense_cable',
            '#forge:dusts/glowstone',
            '#forge:dusts/redstone')
        .itemOutputs('ae2:fluix_smart_dense_cable')
        .circuit(4)
        .duration(20)
        .EUt(480)

    // Blank Pattern
    event.recipes.gtceu.assembler('ae2:blank_pattern_pe')
        .itemInputs(
            '3x #forge:plates/steel',
            '2x #forge:sheets/polyethylene',
            '4x #forge:fine_wires/red_alloy',
            '#gtceu:circuits/mv')
        .itemOutputs('ae2:blank_pattern')
        .duration(200)
        .EUt(120)
    
    event.recipes.gtceu.assembler('ae2:blank_pattern_pvc')
        .itemInputs(
            '3x #forge:plates/steel',
            '2x #forge:sheets/polyvinyl_chloride',
            '4x #forge:fine_wires/red_alloy',
            '#gtceu:circuits/mv')
        .itemOutputs('4x ae2:blank_pattern')
        .duration(200)
        .EUt(120)
    
    event.recipes.gtceu.assembler('ae2:blank_pattern_ptfe')
        .itemInputs(
            '3x #forge:plates/steel',
            '2x #forge:sheets/polytetrafluoroethylene',
            '4x #forge:fine_wires/red_alloy',
            '#gtceu:circuits/mv')
        .itemOutputs('16x ae2:blank_pattern')
        .duration(200)
        .EUt(480)
    
    event.recipes.gtceu.assembler('ae2:blank_pattern_pbi')
        .itemInputs(
            '3x #forge:plates/steel',
            '2x #forge:sheets/polybenzimidazole',
            '4x #forge:fine_wires/red_alloy',
            '#gtceu:circuits/mv')
        .itemOutputs('64x ae2:blank_pattern')
        .duration(200)
        .EUt(480)

    // Annihilation Core
    event.recipes.gtceu.assembler('ae2:annihilation_core')        
        .itemInputs(
            '2x #forge:rods/aluminium',
            '2x ae2:engineering_processor',
            '#forge:gems/certus_quartz')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('4x ae2:annihilation_core')
        .circuit(5)
        .duration(20)
        .EUt(7680)
        .cleanroom(CleanroomType.CLEANROOM)
    
        // Formation Core
    event.recipes.gtceu.assembler('ae2:formation_core')        
        .itemInputs(
            '2x #forge:rods/aluminium',
            '2x ae2:engineering_processor',
            '#forge:gems/nether_quartz')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('4x ae2:formation_core')
        .circuit(5)
        .duration(20)
        .EUt(7680)
        .cleanroom(CleanroomType.CLEANROOM)
    
        // Wireless Crafting Terminal
    event.recipes.gtceu.assembler('ae2:wireless_crafting_terminal')
        .itemInputs(
            '2x gtceu:hv_lithium_battery',
            '2x gtceu:luv_sensor',
            'gtceu:luv_emitter',
            '2x #forge:rods/osmiridium',
            'ae2:wireless_terminal',
            'ae2:crafting_terminal')
        .itemOutputs('ae2:wireless_crafting_terminal')
        .duration(30)
        .EUt(250)
    
    //#region Storage Components
    
    // 1k storage components
    event.recipes.gtceu.assembler('ae2:cell_component_1k')
        .itemInputs(
            '4x #gtceu:batteries/ulv',
            '4x #forge:plates/wrought_iron',
            '4x #forge:dusts/certus_quartz',
            'ae2:logic_processor',)
        .inputFluids(Fluid.of('gtceu:steel', 144))
        .itemOutputs('ae2:cell_component_1k')
        .duration(200)
        .EUt(480)

    // 4k storage components
    event.recipes.gtceu.assembler('ae2:cell_component_4k')
        .itemInputs(
            '4x #gtceu:circuits/ev',
            '4x #forge:plates/titanium',
            '4x #forge:dusts/certus_quartz',
            'ae2:logic_processor')
        .inputFluids(Fluid.of('gtceu:steel', 144))
        .itemOutputs('ae2:cell_component_4k')
        .duration(200)
        .EUt(1920)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.assembler('ae2:cell_component_4k_1k')
        .itemInputs(
            'ae2:logic_processor',
            '2x #gtceu:circuits/ev',
            '4x ae2:cell_component_1k')
        .inputFluids(Fluid.of('gtceu:steel', 144))
        .itemOutputs('ae2:cell_component_4k')
        .duration(400)
        .EUt(1920)
        .cleanroom(CleanroomType.CLEANROOM)

    // 16k storage components
    event.recipes.gtceu.assembler('ae2:cell_component_16k')
        .itemInputs(
            '4x #gtceu:circuits/iv',
            '4x #forge:plates/tungsten_steel',
            '8x #forge:dusts/certus_quartz',
            'ae2:engineering_processor',)
        .inputFluids(Fluid.of('gtceu:steel', 144))
        .itemOutputs('ae2:cell_component_16k')
        .duration(200)
        .EUt(7680)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.assembler('ae2:cell_component_16k_4k')
        .itemInputs(
            'ae2:logic_processor',
            '2x #gtceu:circuits/iv',
            '4x ae2:cell_component_4k')
        .inputFluids(Fluid.of('gtceu:steel', 144))
        .itemOutputs('ae2:cell_component_16k')
        .duration(400)
        .EUt(7680)
        .cleanroom(CleanroomType.CLEANROOM)

    // 64k storage components
    event.recipes.gtceu.assembler('ae2:cell_component_64k')
        .itemInputs(
            '4x #gtceu:circuits/luv',
            '4x #forge:plates/rhodium_plated_palladium',
            '8x #forge:dusts/certus_quartz',
            'ae2:engineering_processor')
        .inputFluids(Fluid.of('gtceu:steel', 144))
        .itemOutputs('ae2:cell_component_64k')
        .duration(200)
        .EUt(30720)
        .cleanroom(CleanroomType.CLEANROOM)
        event.recipes.gtceu.assembler('ae2:cell_component_64k_16k')
        .itemInputs(
            'ae2:engineering_processor',
            '2x #gtceu:circuits/luv',
            '4x ae2:cell_component_16k')
        .inputFluids(Fluid.of('gtceu:steel', 144))
        .itemOutputs('ae2:cell_component_64k')
        .duration(400)
        .EUt(30720)
        .cleanroom(CleanroomType.CLEANROOM)

    // 256k storage components
    event.recipes.gtceu.assembler('ae2:cell_component_256k')
        .itemInputs(
            '4x #gtceu:circuits/zpm',
            '4x #forge:plates/naquadah_alloy',
            '16x #forge:dusts/certus_quartz',
            'ae2:engineering_processor',)
        .inputFluids(Fluid.of('gtceu:steel', 144))
        .itemOutputs('ae2:cell_component_256k')
        .duration(200)
        .EUt(122880)
        .cleanroom(CleanroomType.CLEANROOM)
    event.recipes.gtceu.assembler('ae2:cell_component_256k_64k')
        .itemInputs(
            'ae2:engineering_processor',
            '2x #gtceu:circuits/zpm',
            '4x ae2:cell_component_64k')
        .inputFluids(Fluid.of('gtceu:steel', 144))
        .itemOutputs('ae2:cell_component_256k')
        .duration(400)
        .EUt(122880)
        .cleanroom(CleanroomType.CLEANROOM)

    //#endregion
    
    //#region Spatial Components
    
    // 2³ Spatial Component
    event.recipes.gtceu.assembler('ae2:spatial_cell_component_2')
        .itemInputs(
            '4x #gtceu:circuits/ev',
            '4x #forge:plates/titanium',
            '32x #forge:dusts/certus_quartz',
            'ae2:calculation_processor',)
        .inputFluids(Fluid.of('gtceu:hsla_steel', 144))
        .itemOutputs('ae2:spatial_cell_component_2')
        .duration(200)
        .EUt(1920)

    // 16³ Spatial Component
    event.recipes.gtceu.assembler('ae2:spatial_cell_component_16')
        .itemInputs(
            '4x #gtceu:circuits/iv',
            '4x #forge:plates/tungsten_steel',
            '32x #forge:dusts/certus_quartz',
            'ae2:calculation_processor',)
        .inputFluids(Fluid.of('gtceu:tungsten_steel', 144))
        .itemOutputs('ae2:spatial_cell_component_16')
        .duration(200)
        .EUt(7680)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.assembler('ae2:spatial_cell_component_16_2')
        .itemInputs(
            'ae2:calculation_processor',
            '2x #gtceu:circuits/iv',
            '4x ae2:spatial_cell_component_2')
        .inputFluids(Fluid.of('gtceu:tungsten_steel', 144))
        .itemOutputs('ae2:spatial_cell_component_16')
        .duration(400)
        .EUt(7680)
        .cleanroom(CleanroomType.CLEANROOM)

    // 128³ Spatial Component
    event.recipes.gtceu.assembler('ae2:spatial_cell_component_128')
        .itemInputs(
            '4x #gtceu:circuits/luv',
            '4x #forge:plates/rhodium_plated_palladium',
            '32x #forge:dusts/certus_quartz',
            'ae2:calculation_processor')
        .inputFluids(Fluid.of('gtceu:tungsten_steel', 144))
        .itemOutputs('ae2:spatial_cell_component_128')
        .duration(200)
        .EUt(30720)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.assembler('ae2:spatial_cell_component_128_16')
        .itemInputs(
            'ae2:calculation_processor',
            '2x #gtceu:circuits/luv',
            '4x ae2:spatial_cell_component_16') 
        .inputFluids(Fluid.of('gtceu:tungsten_steel', 144))
        .itemOutputs('ae2:spatial_cell_component_128')
        .duration(400)
        .EUt(30720)
        .cleanroom(CleanroomType.CLEANROOM)
    
    //#endregion

    // Storage Monitor
    event.recipes.gtceu.assembler('ae2:storage_monitor')
        .itemInputs(
            '#ae2:illuminated_panel',
            'ae2:level_emitter')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:storage_monitor')
        .duration(200)
        .EUt(480)

    // Conversion Monitor
    event.recipes.gtceu.assembler('ae2:conversion_monitor')
        .itemInputs(
            '2x ae2:formation_core',
            '2x ae2:annihilation_core',
            'ae2:storage_monitor',)
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:conversion_monitor')
        .duration(200)
        .EUt(480)

    // Level Emitter
    event.recipes.gtceu.assembler('ae2:level_emitter')
        .itemInputs(
            'minecraft:redstone_torch',
            '#ae2:glass_cable',
            '#forge:plates/steel',
            'ae2:calculation_processor')
        .itemOutputs('ae2:level_emitter')
        .circuit(1)
        .duration(20)
        .EUt(480)
        .cleanroom(CleanroomType.CLEANROOM)

    // Storage Bus
    event.recipes.gtceu.assembler('ae2:storage_bus')
        .itemInputs(
            '#ae2:interface',
            '2x gtceu:mv_electric_piston',
            '#ae2:glass_cable')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:storage_bus')
        .circuit(1)
        .duration(200)
        .EUt(480)
    
    // Import Bus
    event.recipes.gtceu.assembler('ae2:import_bus')
        .itemInputs(
            '#forge:plates/iron',
            'ae2:annihilation_core',
            '2x gtceu:mv_robot_arm',
            '#ae2:glass_cable')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:import_bus')
        .circuit(2)
        .duration(200)
        .EUt(480)
    
    // Export Bus
    event.recipes.gtceu.assembler('ae2:export_bus')
        .itemInputs(
            '#forge:plates/iron',
            'ae2:formation_core',
            '2x gtceu:mv_robot_arm',
            '#ae2:glass_cable')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:export_bus')
        .circuit(3)
        .duration(200)
        .EUt(480)

    // CPU Crafting Unit
    event.recipes.gtceu.assembler('ae2:crafting_unit')
        .itemInputs(
            'ae2:logic_processor',
            'ae2:engineering_processor',
            'ae2:calculation_processor',
            '#gtceu:circuits/hv',
            '2x #forge:plates/steel')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:crafting_unit')
        .circuit(1)
        .duration(20)
        .EUt(680)

    //#region Molecular Assembler
    
    // HV
    event.recipes.gtceu.assembler('ae2:molecular_assembler_hv')
        .itemInputs(
            '2x ae2:quartz_glass',
            '2x #gtceu:circuits/hv',
            'ae2:annihilation_core',
            'ae2:formation_core',
            '2x gtceu:hv_conveyor_module',
            '2x gtceu:hv_robot_arm',
            '4x #forge:plates/stainless_steel')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:molecular_assembler')
        .duration(200)
        .EUt(480)
        .cleanroom(CleanroomType.CLEANROOM)
    
    // EV
    event.recipes.gtceu.assembler('ae2:molecular_assembler_ev')
        .itemInputs(
            '2x ae2:quartz_glass',
            '2x #gtceu:circuits/ev',
            'ae2:annihilation_core',
            'ae2:formation_core',
            '2x gtceu:ev_conveyor_module',
            '2x gtceu:ev_robot_arm',
            '4x #forge:plates/titanium')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('2x ae2:molecular_assembler')
        .duration(200)
        .EUt(1920)
        .cleanroom(CleanroomType.CLEANROOM)
    
    // IV
    event.recipes.gtceu.assembler('ae2:molecular_assembler_iv')
        .itemInputs(
            '2x ae2:quartz_glass',
            '2x #gtceu:circuits/iv',
            'ae2:annihilation_core',
            'ae2:formation_core',
            '2x gtceu:iv_conveyor_module',
            '2x gtceu:iv_robot_arm',
            '4x #forge:plates/tungsten_steel')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('8x ae2:molecular_assembler')
        .duration(200)
        .EUt(7680)
        .cleanroom(CleanroomType.CLEANROOM)

    //#endregion

    // ME Контроллер
	event.recipes.gtceu.assembler('ae2:controller')
        .itemInputs(
            '2x ae2:engineering_processor',
            '2x #gtceu:circuits/hv',
            '2x #forge:plates/titanium',
            'ae2:fluix_block')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:controller')
        .duration(200)
        .EUt(480)
        .cleanroom(CleanroomType.CLEANROOM)
    
    //#region ME Interfaces

    // MV
    event.recipes.gtceu.assembler('ae2:interface_mv')
        .itemInputs(
            'gtceu:mv_conveyor_module',
            '8x #forge:plates/glass',
            '4x #forge:plates/steel',
            'ae2:annihilation_core',
            'ae2:formation_core',)
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:interface')
        .duration(200)
        .EUt(120)
    
    // HV
    event.recipes.gtceu.assembler('ae2:interface_hv')
        .itemInputs(
            'gtceu:hv_conveyor_module',
            '8x #forge:plates/glass',
            '4x #forge:plates/aluminium',
            'ae2:annihilation_core',
            'ae2:formation_core',)
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('2x ae2:interface')
        .duration(200)
        .EUt(480)
    
    // EV
    event.recipes.gtceu.assembler('ae2:interface_ev')
        .itemInputs(
            'gtceu:ev_conveyor_module',
            '8x #forge:plates/glass',
            '4x #forge:plates/stainless_steel',
            'ae2:annihilation_core',
            'ae2:formation_core',)
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('4x ae2:interface')
        .duration(200)
        .EUt(1980)
        .cleanroom(CleanroomType.CLEANROOM)
    
    // IV
    event.recipes.gtceu.assembler('ae2:interface_iv')
        .itemInputs(
            'gtceu:iv_conveyor_module',
            '8x #forge:plates/glass',
            '4x #forge:plates/titanium',
            'ae2:annihilation_core',
            'ae2:formation_core',)
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('8x ae2:interface')
        .duration(200)
        .EUt(7480)
        .cleanroom(CleanroomType.CLEANROOM)
    
    //#endregion
    
    //#region Pattern Providers
    
    // MV
    event.recipes.gtceu.assembler('ae2:pattern_provider_mv')
        .itemInputs(
            'gtceu:mv_conveyor_module',
            '2x #tfc:workbenches',
            '4x #forge:plates/steel',
            'ae2:annihilation_core',
            'ae2:formation_core',)
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:pattern_provider')
        .duration(200)
        .EUt(120)
    
    // HV
    event.recipes.gtceu.assembler('ae2:pattern_provider_hv')
        .itemInputs(
            'gtceu:hv_conveyor_module',
            '2x #tfc:workbenches',
            '4x #forge:plates/aluminium',
            'ae2:annihilation_core',
            'ae2:formation_core',)
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('2x ae2:pattern_provider')
        .duration(200)
        .EUt(480)
    
    // EV
    event.recipes.gtceu.assembler('ae2:pattern_provider_ev')
        .itemInputs(
            'gtceu:ev_conveyor_module',
            '2x #tfc:workbenches',
            '4x #forge:plates/stainless_steel',
            'ae2:annihilation_core',
            'ae2:formation_core',)
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('4x ae2:pattern_provider')
        .duration(200)
        .EUt(1980)
        .cleanroom(CleanroomType.CLEANROOM)
    
    // IV
    event.recipes.gtceu.assembler('ae2:pattern_provider_iv')
        .itemInputs(
            'gtceu:iv_conveyor_module',
            '2x #tfc:workbenches',
            '4x #forge:plates/titanium',
            'ae2:annihilation_core',
            'ae2:formation_core',)
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('8x ae2:pattern_provider')
        .duration(200)
        .EUt(7480)
        .cleanroom(CleanroomType.CLEANROOM)

    //#endregion
    
    //#region Portable Cells
    
    //#region Item
    
    // 1k
    event.recipes.gtceu.assembler('ae2:portable_item_cell_1k')
        .itemInputs(
            'ae2:chest',
            'ae2:cell_component_1k',
            'gtceu:mv_sodium_battery',
            'ae2:item_cell_housing')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:portable_item_cell_1k')
        .duration(200)
        .EUt(480)
    
    // 4k
    event.recipes.gtceu.assembler('ae2:portable_item_cell_4k')
        .itemInputs(
            'ae2:chest',
            'ae2:cell_component_4k',
            'gtceu:mv_sodium_battery',
            'ae2:item_cell_housing')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:portable_item_cell_4k')
        .duration(200)
        .EUt(1920)
        .cleanroom(CleanroomType.CLEANROOM)
    
    // 16k
    event.recipes.gtceu.assembler('ae2:portable_item_cell_16k')
        .itemInputs(
            'ae2:chest',
            'ae2:cell_component_16k',
            'gtceu:mv_sodium_battery',
            'ae2:item_cell_housing')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:portable_item_cell_16k')
        .duration(200)
        .EUt(7680)
        .cleanroom(CleanroomType.CLEANROOM)
    
    // 64k
    event.recipes.gtceu.assembler('ae2:portable_item_cell_64k')
        .itemInputs(
            'ae2:chest',
            'ae2:cell_component_64k',
            'gtceu:mv_sodium_battery',
            'ae2:item_cell_housing')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:portable_item_cell_64k')
        .duration(200)
        .EUt(30720)
        .cleanroom(CleanroomType.CLEANROOM)
    
    // 256k
    event.recipes.gtceu.assembler('ae2:portable_item_cell_256k')
        .itemInputs(
            'ae2:chest',
            'ae2:cell_component_256k',
            'gtceu:mv_sodium_battery',
            'ae2:item_cell_housing')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:portable_item_cell_256k')
        .duration(200)
        .EUt(122880)
        .cleanroom(CleanroomType.CLEANROOM)

    //#endregion

    //#region Fluid

    // 1k
    event.recipes.gtceu.assembler('ae2:portable_fluid_cell_1k')
        .itemInputs(
            'ae2:chest',
            'ae2:cell_component_1k',
            'gtceu:mv_sodium_battery',
            'ae2:fluid_cell_housing')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:portable_fluid_cell_1k')
        .duration(200)
        .EUt(480)
    
    // 4k
    event.recipes.gtceu.assembler('ae2:portable_fluid_cell_4k')
        .itemInputs(
            'ae2:chest',
            'ae2:cell_component_4k',
            'gtceu:mv_sodium_battery',
            'ae2:fluid_cell_housing')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:portable_fluid_cell_4k')
        .duration(200)
        .EUt(1920)
        .cleanroom(CleanroomType.CLEANROOM)
    
    // 16k
    event.recipes.gtceu.assembler('ae2:portable_fluid_cell_16k')
        .itemInputs(
            'ae2:chest',
            'ae2:cell_component_16k',
            'gtceu:mv_sodium_battery',
            'ae2:fluid_cell_housing')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:portable_fluid_cell_16k')
        .duration(200)
        .EUt(7680)
        .cleanroom(CleanroomType.CLEANROOM)
    
    // 64k
    event.recipes.gtceu.assembler('ae2:portable_fluid_cell_64k')
        .itemInputs(
            'ae2:chest',
            'ae2:cell_component_64k',
            'gtceu:mv_sodium_battery',
            'ae2:fluid_cell_housing')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:portable_fluid_cell_64k')
        .duration(200)
        .EUt(30720)
        .cleanroom(CleanroomType.CLEANROOM)
    
    // 256k
    event.recipes.gtceu.assembler('ae2:portable_fluid_cell_256k')
        .itemInputs(
            'ae2:chest',
            'ae2:cell_component_256k',
            'gtceu:mv_sodium_battery',
            'ae2:fluid_cell_housing')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:portable_fluid_cell_256k')
        .duration(200)
        .EUt(122880)
        .cleanroom(CleanroomType.CLEANROOM)

    //#endregion

    //#endregion

    // Logic Processor
    event.recipes.gtceu.circuit_assembler('ae2:logic_processor')
        .itemInputs(
            'ae2:printed_silicon',
            'ae2:printed_logic_processor',
            '#gtceu:circuits/lv',
            '2x #gtceu:resistors',
            '2x #forge:fine_wires/tin',)
        .inputFluids(Fluid.of('gtceu:redstone', 144))
        .itemOutputs('2x ae2:logic_processor')
        .duration(20)
        .EUt(480)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.circuit_assembler('ae2:logic_processor_adv')
        .itemInputs(
            'ae2:printed_silicon',
            'ae2:printed_logic_processor',
            '#gtceu:circuits/lv',
            'gtceu:advanced_smd_resistor',
            '2x #forge:fine_wires/tin',)
        .inputFluids(Fluid.of('gtceu:redstone', 144))
        .itemOutputs('2x ae2:logic_processor')
        .duration(20)
        .EUt(480)
        .cleanroom(CleanroomType.CLEANROOM)

    // Calculation Processor
    event.recipes.gtceu.circuit_assembler('ae2:calculation_processor')
        .itemInputs(
            'ae2:printed_silicon',
            'ae2:printed_calculation_processor',
            '#gtceu:circuits/lv',
            '2x #gtceu:resistors',
            '2x #forge:fine_wires/tin',)
        .inputFluids(Fluid.of('gtceu:redstone', 144))
        .itemOutputs('2x ae2:calculation_processor')
        .duration(20)
        .EUt(480)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.circuit_assembler('ae2:calculation_processor_adv')
        .itemInputs(
            'ae2:printed_silicon',
            'ae2:printed_calculation_processor',
            '#gtceu:circuits/lv',
            'gtceu:advanced_smd_resistor',
            '2x #forge:fine_wires/tin',)
        .inputFluids(Fluid.of('gtceu:redstone', 144))
        .itemOutputs('2x ae2:calculation_processor')
        .duration(20)
        .EUt(480)
        .cleanroom(CleanroomType.CLEANROOM)

    // Engineering Processor
    event.recipes.gtceu.circuit_assembler('ae2:engineering_processor')
        .itemInputs(
            'ae2:printed_silicon',
            'ae2:printed_engineering_processor',
            '#gtceu:circuits/lv',
            '2x #gtceu:resistors',
            '2x #forge:fine_wires/tin',)
        .inputFluids(Fluid.of('gtceu:redstone', 144))
        .itemOutputs('2x ae2:engineering_processor')
        .duration(20)
        .EUt(480)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.circuit_assembler('ae2:engineering_processor_adv')
        .itemInputs(
            'ae2:printed_silicon',
            'ae2:printed_engineering_processor',
            '#gtceu:circuits/lv',
            'gtceu:advanced_smd_resistor',
            '2x #forge:fine_wires/tin',)
        .inputFluids(Fluid.of('gtceu:redstone', 144))
        .itemOutputs('2x ae2:engineering_processor')
        .duration(20)
        .EUt(480)
        .cleanroom(CleanroomType.CLEANROOM)

    // Printed Calculation Processor
    event.recipes.gtceu.forming_press('ae2:printed_calculation_processor')
        .itemInputs('#forge:plates/certus_quartz')
        .notConsumable('ae2:calculation_processor_press')
        .itemOutputs('ae2:printed_calculation_processor')
        .duration(20)
        .EUt(480)

    // Printed Engineering Processor
    event.recipes.gtceu.forming_press('ae2:printed_engineering_processor')
        .itemInputs('#forge:plates/diamond')
        .notConsumable('ae2:engineering_processor_press')
        .itemOutputs('ae2:printed_engineering_processor')
        .duration(20)
        .EUt(480)

    // Printed Logic Processor
    event.recipes.gtceu.forming_press('ae2:printed_logic_processor')
        .itemInputs('#forge:plates/gold')
        .notConsumable('ae2:logic_processor_press')
        .itemOutputs('ae2:printed_logic_processor')
        .duration(20)
        .EUt(480)

    // Printed Silicon
    event.recipes.gtceu.forming_press('ae2:printed_silicon')
        .itemInputs('#forge:plates/silicon')
        .notConsumable('ae2:silicon_press')
        .itemOutputs('ae2:printed_silicon')
        .duration(20)
        .EUt(480)

    // Glass Cable 
    event.recipes.gtceu.chemical_bath('ae2:fluix_glass_cable')
        .itemInputs('#ae2:glass_cable')
        .inputFluids(Fluid.of('gtceu:chlorine', 100))
        .itemOutputs('ae2:fluix_glass_cable')
        .duration(8)
        .EUt(480)
    
    // Covered Cable
    event.recipes.gtceu.chemical_bath('ae2:fluix_covered_cable')
        .itemInputs('#ae2:covered_cable')
        .inputFluids(Fluid.of('gtceu:chlorine', 100))
        .itemOutputs('ae2:fluix_covered_cable')
        .duration(8)
        .EUt(480)

    // Dense Covered Cable
    event.recipes.gtceu.chemical_bath('ae2:fluix_covered_dense_cable')
        .itemInputs('#ae2:covered_dense_cable')
        .inputFluids(Fluid.of('gtceu:chlorine', 100))
        .itemOutputs('ae2:fluix_covered_dense_cable')
        .duration(8)
        .EUt(480)

    // Smart Cable
    event.recipes.gtceu.chemical_bath('ae2:fluix_smart_cable')
        .itemInputs('#ae2:smart_cable')
        .inputFluids(Fluid.of('gtceu:chlorine', 100))
        .itemOutputs('ae2:fluix_smart_cable')
        .duration(8)
        .EUt(480)

    // Dense Smart Cable
    event.recipes.gtceu.chemical_bath('ae2:fluix_smart_dense_cable')
        .itemInputs('#ae2:smart_dense_cable')
        .inputFluids(Fluid.of('gtceu:chlorine', 100))
        .itemOutputs('ae2:fluix_smart_dense_cable')
        .duration(8)
        .EUt(480)

    // Cable Colorization
    for (var i = 0; i < 16; i++) {
        event.recipes.gtceu.chemical_bath(global.AE2_GLASS_CABLES[i] + '_dye')
            .itemInputs('ae2:fluix_glass_cable')
            .inputFluids(Fluid.of(`gtceu:${global.MINECRAFT_DYE_NAMES[i]}_dye`, 72))
            .itemOutputs(global.AE2_GLASS_CABLES[i])
            .duration(20)
            .EUt(7)

        event.recipes.gtceu.chemical_bath(global.AE2_COVERED_CABLES[i] + '_dye')
            .itemInputs('ae2:fluix_covered_cable')
            .inputFluids(Fluid.of(`gtceu:${global.MINECRAFT_DYE_NAMES[i]}_dye`, 72))
            .itemOutputs(global.AE2_COVERED_CABLES[i])
            .duration(20)
            .EUt(7)

        event.recipes.gtceu.chemical_bath(global.AE2_COVERED_DENSE_CABLES[i] + '_dye')
            .itemInputs('ae2:fluix_covered_dense_cable')
            .inputFluids(Fluid.of(`gtceu:${global.MINECRAFT_DYE_NAMES[i]}_dye`, 72))
            .itemOutputs(global.AE2_COVERED_DENSE_CABLES[i])
            .duration(20)
            .EUt(7)

        event.recipes.gtceu.chemical_bath(global.AE2_SMART_CABLES[i] + '_dye')
            .itemInputs('ae2:fluix_smart_cable')
            .inputFluids(Fluid.of(`gtceu:${global.MINECRAFT_DYE_NAMES[i]}_dye`, 72))
            .itemOutputs(global.AE2_SMART_CABLES[i])
            .duration(20)
            .EUt(7)

        event.recipes.gtceu.chemical_bath(global.AE2_SMART_DENSE_CABLES[i] + '_dye')
            .itemInputs('ae2:fluix_smart_dense_cable')
            .inputFluids(Fluid.of(`gtceu:${global.MINECRAFT_DYE_NAMES[i]}_dye`, 72))
            .itemOutputs(global.AE2_SMART_DENSE_CABLES[i])
            .duration(20)
            .EUt(7)

        // Paint Balls
        event.recipes.gtceu.chemical_bath(global.AE2_PAINTBALLS[i] + '_dye')
            .itemInputs('ae2:matter_ball')
            .inputFluids(Fluid.of(`gtceu:${global.MINECRAFT_DYE_NAMES[i]}_dye`, 36))
            .itemOutputs(global.AE2_PAINTBALLS[i])
            .duration(20)
            .EUt(7)

        // Lumen Paint Ball
        event.recipes.gtceu.chemical_bath(global.AE2_LUMEN_PAINTBALLS[i] + '_gtceu_dye')
            .itemInputs(global.AE2_PAINTBALLS[i])
            .inputFluids(Fluid.of('gtceu:glowstone', 125))
            .itemOutputs(global.AE2_LUMEN_PAINTBALLS[i])
            .duration(20)
            .EUt(7)
    };

    // Inscriber Silicon Press
    event.recipes.gtceu.laser_engraver('ae2:silicon_press_iron')
        .itemInputs('#forge:plates/iron')
        .notConsumable('#forge:lenses/white')
        .itemOutputs('ae2:silicon_press')
        .duration(12000)
        .EUt(116)
    
    event.recipes.gtceu.laser_engraver('ae2:silicon_press_wrought_iron')
        .itemInputs('#forge:plates/wrought_iron')
        .notConsumable('#forge:lenses/white')
        .itemOutputs('ae2:silicon_press')
        .duration(8000)
        .EUt(116)

    // Inscriber logic Press
    event.recipes.gtceu.laser_engraver('ae2:logic_processor_press_iron')
        .itemInputs('#forge:plates/iron')
        .notConsumable('#forge:lenses/green')
        .itemOutputs('ae2:logic_processor_press')
        .duration(12000)
        .EUt(116)
    
    event.recipes.gtceu.laser_engraver('ae2:logic_processor_press_wrought_iron')
        .itemInputs('#forge:plates/wrought_iron')
        .notConsumable('#forge:lenses/green')
        .itemOutputs('ae2:logic_processor_press')
        .duration(8000)
        .EUt(116)

    // Inscriber engineering Press
    event.recipes.gtceu.laser_engraver('ae2:engineering_press_iron')
        .itemInputs('#forge:plates/iron')
        .notConsumable('#forge:lenses/light_blue')
        .itemOutputs('ae2:engineering_processor_press')
        .duration(12000)
        .EUt(116)
    
    event.recipes.gtceu.laser_engraver('ae2:engineering_press_wrought_iron')
        .itemInputs('#forge:plates/wrought_iron')
        .notConsumable('#forge:lenses/light_blue')
        .itemOutputs('ae2:engineering_processor_press')
        .duration(8000)
        .EUt(116)

    // Inscriber calculation Press
    event.recipes.gtceu.laser_engraver('ae2:calculation_press_iron')
        .itemInputs('#forge:plates/iron')
        .notConsumable('#forge:lenses/blue')
        .itemOutputs('ae2:calculation_processor_press')
        .duration(12000)
        .EUt(116)
    
    event.recipes.gtceu.laser_engraver('ae2:calculation_press_wrought_iron')
        .itemInputs( '#forge:plates/wrought_iron')
        .notConsumable('#forge:lenses/blue')
        .itemOutputs('ae2:calculation_processor_press')
        .duration(8000)
        .EUt(116)

    // Quartz Fiber
    event.recipes.gtceu.wiremill('ae2:quartz_fiber_certus')
        .itemInputs('#forge:rods/certus_quartz')
        .itemOutputs('ae2:quartz_fiber')
        .duration(200)
        .EUt(7)
    
    event.recipes.gtceu.wiremill('ae2:quartz_fiber_nether')
        .itemInputs('#forge:rods/nether_quartz')
        .itemOutputs('ae2:quartz_fiber')
        .duration(200)
        .EUt(7)

    // Quartz Glass
    event.recipes.gtceu.alloy_smelter('ae2:quartz_glass')
        .itemInputs('5x #forge:dusts/certus_quartz', '4x #forge:glass')
        .itemOutputs('4x ae2:quartz_glass')
        .duration(20)
        .EUt(120)
    
    // Vibrant Quartz Glass
    event.recipes.gtceu.alloy_smelter('ae2:quartz_vibrant_glass')
        .itemInputs('ae2:quartz_glass', '8x #forge:dusts/glowstone')
        .itemOutputs('ae2:quartz_vibrant_glass')
        .duration(20)
        .EUt(480)

    // Charged Certus Quartz 1x
    event.recipes.gtceu.polarizer('ae2:charged_certus_quartz_crystal_1x')
        .itemInputs('ae2:certus_quartz_crystal')
        .itemOutputs('ae2:charged_certus_quartz_crystal')
        .duration(800)
        .EUt(190)

    // Charged Certus Quartz 2x
    event.recipes.gtceu.polarizer('ae2:charged_certus_quartz_crystal_2x')
        .itemInputs('gtceu:flawless_certus_quartz_gem')
        .itemOutputs('2x ae2:charged_certus_quartz_crystal')
        .duration(800)
        .EUt(190)

    // Charged Certus Quartz 4x
    event.recipes.gtceu.polarizer('ae2:charged_certus_quartz_crystal_4x')
        .itemInputs('gtceu:exquisite_certus_quartz_gem')
        .itemOutputs('4x ae2:charged_certus_quartz_crystal')
        .duration(800)
        .EUt(190)

    //#region Cell Packing
    
    event.recipes.gtceu.packer('ae2:view_cell')
        .itemInputs( 'ae2:item_cell_housing', '#forge:gems/certus_quartz')
        .itemOutputs('ae2:view_cell')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.packer('ae2:item_storage_cell_1k')
        .itemInputs('ae2:item_cell_housing', 'ae2:cell_component_1k')
        .itemOutputs('ae2:item_storage_cell_1k')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.packer('ae2:item_storage_cell_4k')
        .itemInputs('ae2:item_cell_housing', 'ae2:cell_component_4k')
        .itemOutputs('ae2:item_storage_cell_4k')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.packer('ae2:item_storage_cell_16k')
        .itemInputs('ae2:item_cell_housing', 'ae2:cell_component_16k')
        .itemOutputs('ae2:item_storage_cell_16k')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.packer('ae2:item_storage_cell_64k')
        .itemInputs('ae2:item_cell_housing', 'ae2:cell_component_64k')
        .itemOutputs('ae2:item_storage_cell_64k')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.packer('ae2:item_storage_cell_256k')
        .itemInputs('ae2:item_cell_housing', 'ae2:cell_component_256k')
        .itemOutputs('ae2:item_storage_cell_256k')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.packer('ae2:fluid_storage_cell_1k')
        .itemInputs('ae2:fluid_cell_housing', 'ae2:cell_component_1k')
        .itemOutputs('ae2:fluid_storage_cell_1k')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.packer('ae2:fluid_storage_cell_4k')
        .itemInputs('ae2:fluid_cell_housing', 'ae2:cell_component_4k')
        .itemOutputs('ae2:fluid_storage_cell_4k')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.packer('ae2:fluid_storage_cell_16k')
        .itemInputs('ae2:fluid_cell_housing', 'ae2:cell_component_16k')
        .itemOutputs('ae2:fluid_storage_cell_16k')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.packer('ae2:fluid_storage_cell_64k')
        .itemInputs('ae2:fluid_cell_housing', 'ae2:cell_component_64k')
        .itemOutputs('ae2:fluid_storage_cell_64k')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.packer('ae2:fluid_storage_cell_256k')
        .itemInputs('ae2:fluid_cell_housing', 'ae2:cell_component_256k')
        .itemOutputs('ae2:fluid_storage_cell_256k')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.packer('ae2:spatial_storage_cell_2')
        .itemInputs('ae2:item_cell_housing', 'ae2:spatial_cell_component_2')
        .itemOutputs('ae2:spatial_storage_cell_2')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
   
    event.recipes.gtceu.packer('ae2:spatial_storage_cell_16')
        .itemInputs('ae2:item_cell_housing', 'ae2:spatial_cell_component_16')
        .itemOutputs('ae2:spatial_storage_cell_16')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.packer('ae2:spatial_storage_cell_128')
        .itemInputs('ae2:item_cell_housing', 'ae2:spatial_cell_component_128')
        .itemOutputs('ae2:spatial_storage_cell_128')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.packer('ae2:view_cell_back')
        .itemInputs('ae2:view_cell')
        .itemOutputs('ae2:item_cell_housing','#forge:gems/certus_quartz')
        .duration(10)
        .EUt(12)

    event.recipes.gtceu.packer('ae2:item_storage_cell_1k_back')
        .itemInputs('ae2:item_storage_cell_1k')
        .itemOutputs('ae2:item_cell_housing', 'ae2:cell_component_1k')
        .duration(10)
        .EUt(12)
    
    event.recipes.gtceu.packer('ae2:item_storage_cell_4k_back')
        .itemInputs('ae2:item_storage_cell_4k')
        .itemOutputs('ae2:item_cell_housing', 'ae2:cell_component_4k')
        .duration(10)
        .EUt(12)
    
    event.recipes.gtceu.packer('ae2:item_storage_cell_16k_back')
        .itemInputs('ae2:item_storage_cell_16k')
        .itemOutputs('ae2:item_cell_housing', 'ae2:cell_component_16k')
        .duration(10)
        .EUt(12)
   
    event.recipes.gtceu.packer('ae2:item_storage_cell_64k_back')
        .itemInputs('ae2:item_storage_cell_64k')
        .itemOutputs('ae2:item_cell_housing', 'ae2:cell_component_64k')
        .duration(10)
        .EUt(12)
    
    event.recipes.gtceu.packer('ae2:item_storage_cell_256k_back')
        .itemInputs('ae2:item_storage_cell_256k')
        .itemOutputs('ae2:item_cell_housing', 'ae2:cell_component_256k')
        .duration(10)
        .EUt(12)
       
    event.recipes.gtceu.packer('ae2:fluid_storage_cell_1k_back')
        .itemInputs('ae2:fluid_storage_cell_1k')
        .itemOutputs('ae2:fluid_cell_housing', 'ae2:cell_component_1k')
        .duration(10)
        .EUt(12)
    
    event.recipes.gtceu.packer('ae2:fluid_storage_cell_4k_back')
        .itemInputs('ae2:fluid_storage_cell_4k')
        .itemOutputs('ae2:fluid_cell_housing', 'ae2:cell_component_4k')
        .duration(10)
        .EUt(12)
    
    event.recipes.gtceu.packer('ae2:fluid_storage_cell_16k_back')
        .itemInputs('ae2:fluid_storage_cell_16k')
        .itemOutputs('ae2:fluid_cell_housing','ae2:cell_component_16k')
        .duration(10)
        .EUt(12)
    
    event.recipes.gtceu.packer('ae2:fluid_storage_cell_64k_back')
        .itemInputs('ae2:fluid_storage_cell_64k')
        .itemOutputs('ae2:fluid_cell_housing', 'ae2:cell_component_64k')
        .duration(10)
        .EUt(12)
    
    event.recipes.gtceu.packer('ae2:fluid_storage_cell_256k_back')
        .itemInputs('ae2:fluid_storage_cell_256k')
        .itemOutputs('ae2:fluid_cell_housing', 'ae2:cell_component_256k')
        .duration(10)
        .EUt(12)
       
    event.recipes.gtceu.packer('ae2:spatial_storage_cell_2_back')
        .itemInputs('ae2:spatial_storage_cell_2')
        .itemOutputs('ae2:item_cell_housing', 'ae2:spatial_cell_component_2')
        .duration(10)
        .EUt(12)
   
    event.recipes.gtceu.packer('ae2:spatial_storage_cell_16_back')
        .itemInputs('ae2:spatial_storage_cell_16')
        .itemOutputs('ae2:item_cell_housing', 'ae2:spatial_cell_component_16')
        .duration(10)
        .EUt(12)
    
    event.recipes.gtceu.packer('ae2:spatial_storage_cell_128_back')
        .itemInputs('ae2:spatial_storage_cell_128')
        .itemOutputs('ae2:item_cell_housing', 'ae2:spatial_cell_component_128')
        .duration(10)
        .EUt(12)
        
    //#endregion 

    // Crafting  Storage
    event.recipes.gtceu.packer('ae2:crafting_accelerator')
        .itemInputs('ae2:crafting_unit', 'ae2:engineering_processor')
        .itemOutputs('ae2:crafting_accelerator')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.packer('ae2:1k_crafting_storage')
        .itemInputs('ae2:crafting_unit', 'ae2:cell_component_1k')
        .itemOutputs('ae2:1k_crafting_storage')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
   
    event.recipes.gtceu.packer('ae2:4k_crafting_storage')
        .itemInputs('ae2:crafting_unit', 'ae2:cell_component_4k')
        .itemOutputs('ae2:4k_crafting_storage')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.packer('ae2:16k_crafting_storage')
        .itemInputs('ae2:crafting_unit', 'ae2:cell_component_16k')
        .itemOutputs('ae2:16k_crafting_storage')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.packer('ae2:64k_crafting_storage')
        .itemInputs('ae2:crafting_unit', 'ae2:cell_component_64k')
        .itemOutputs('ae2:64k_crafting_storage')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.packer('ae2:256k_crafting_storage')
        .itemInputs('ae2:crafting_unit', 'ae2:cell_component_256k')
        .itemOutputs('ae2:256k_crafting_storage')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.packer('ae2:crafting_monitor')
        .itemInputs('ae2:crafting_unit', 'ae2:storage_monitor')
        .itemOutputs('ae2:crafting_monitor')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.packer('ae2:crafting_accelerator_back')
        .itemInputs('ae2:crafting_accelerator')
        .itemOutputs('ae2:crafting_unit', 'ae2:engineering_processor')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.packer('ae2:1k_crafting_storage_back')
        .itemInputs('ae2:1k_crafting_storage')
        .itemOutputs('ae2:crafting_unit', 'ae2:cell_component_1k')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.packer('ae2:4k_crafting_storage_back')
        .itemInputs('ae2:4k_crafting_storage')
        .itemOutputs('ae2:crafting_unit', 'ae2:cell_component_4k')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.packer('ae2:16k_crafting_storage_back')
        .itemInputs('ae2:16k_crafting_storage')
        .itemOutputs('ae2:crafting_unit', 'ae2:cell_component_16k')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.packer('ae2:64k_crafting_storage_back')
        .itemInputs(
            'ae2:64k_crafting_storage')
        .itemOutputs(
            'ae2:crafting_unit',
            'ae2:cell_component_64k')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.packer('ae2:256k_crafting_storage_back')
        .itemInputs('ae2:256k_crafting_storage')
        .itemOutputs('ae2:crafting_unit', 'ae2:cell_component_256k')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.packer('ae2:crafting_monitor_back')
        .itemInputs('ae2:crafting_monitor')
        .itemOutputs('ae2:crafting_unit', 'ae2:storage_monitor')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
       
    // Cable Anchor
    event.recipes.gtceu.extruder('ae2:cable_anchor')
        .itemInputs('#forge:plates/steel')
	    .notConsumable('gtceu:bolt_extruder_mold')
	    .itemOutputs('8x ae2:cable_anchor')
	    .duration(15)
        .EUt(120)
    
    // Quantum Ring
    event.recipes.gtceu.assembly_line('ae2:quantum_ring')
        .itemInputs(
            '6x #gtceu:batteries/hv',
            '12x #gtceu:circuits/iv',
            '16x gtceu:iv_emitter',
            '8x ae2:engineering_processor',
            '14x gtceu:iv_sensor',
            'ae2:logic_processor',)
        .inputFluids(Fluid.of('gtceu:titanium', 1440))
	    .itemOutputs('ae2:quantum_ring')
	    .duration(900)
        .EUt(8300)
        .cleanroom(CleanroomType.CLEANROOM)
    
    // Quantum Link Chamber
    event.recipes.gtceu.assembly_line('ae2:quantum_link')
        .itemInputs(
            '8x ae2:fluix_pearl',
            '6x ae2:quartz_vibrant_glass',
            '8x ae2:engineering_processor',
            '14x gtceu:iv_sensor',
            '2x gtceu:hv_lithium_battery')
        .inputFluids(Fluid.of('gtceu:titanium', 1088))
	    .itemOutputs('ae2:quantum_link')
	    .duration(700)
        .EUt(8300)
        .cleanroom(CleanroomType.CLEANROOM)

    // Chemical Reactor
    event.recipes.gtceu.chemical_reactor('ae2:fluix_pearl')
        .itemInputs('4x #forge:gems/fluix', '#forge:gems/ender_eye')
        .inputFluids(Fluid.of('tfg:fluix', 576))
	    .itemOutputs('ae2:fluix_pearl')
	    .duration(200)
        .EUt(480)
        .cleanroom(CleanroomType.CLEANROOM)
    
    // Fluix crystal
    event.recipes.gtceu.mixer('ae2:fluix_crystal')
        .itemInputs(
            '#forge:gems/nether_quartz',
            '4x #forge:dusts/redstone',
            'ae2:charged_certus_quartz_crystal')
        .inputFluids(Fluid.of('minecraft:water', 144))
        .itemOutputs('ae2:fluix_crystal')
        .duration(420)
        .EUt(256)
    
    event.recipes.gtceu.mixer('ae2:fluix_crystal_ruby')
        .itemInputs(
            '#forge:gems/nether_quartz',
            '#forge:exquisite_gems/ruby',
            'ae2:charged_certus_quartz_crystal')
            .inputFluids(Fluid.of('minecraft:water', 144))
        .itemOutputs('4x ae2:fluix_crystal')
        .duration(440)
        .EUt(256)
    
    event.recipes.gtceu.mixer('ae2:fluix_crystal_quartz')
        .itemInputs(
            '#forge:exquisite_gems/nether_quartz',
            '4x #forge:dusts/redstone',
            'ae2:charged_certus_quartz_crystal')
            .inputFluids(Fluid.of('minecraft:water', 144))
        .itemOutputs('4x ae2:fluix_crystal')
        .duration(460)
        .EUt(256)
   
    event.recipes.gtceu.mixer('ae2:fluix_crystal_quartz_ruby')
        .itemInputs(
            '#forge:exquisite_gems/nether_quartz',
            '#forge:exquisite_gems/ruby',
            'ae2:charged_certus_quartz_crystal')
        .inputFluids(Fluid.of('minecraft:water', 144))
        .itemOutputs('12x ae2:fluix_crystal')
        .duration(480)
        .EUt(256)

    //charger
    event.recipes.gtceu.assembler('ae2:charger')
        .itemInputs(
            'gtceu:hv_battery_buffer_4x',
            '4x gtceu:mercury_barium_calcium_cuprate_quadruple_wire', )
        .inputFluids(Fluid.of('tfg:fluix', 476))
        .itemOutputs('ae2:charger')
        .duration(200)
        .EUt(480)
}