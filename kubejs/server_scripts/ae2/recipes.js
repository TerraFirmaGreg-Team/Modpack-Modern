// priority: 0

const registerAE2Recipes = (event) => {
    
    // Удаление рецептов мода
    // event.remove({ mod: 'ae2' });

    // crafting Table
    // network tool
    event.shaped('ae2:network_tool', [
        'AB',
        'CD',
    ], {
        A: '#forge:tools/wrenches',
        B: '#forge:circuits/lv',
        C: 'ae2:calculation_processor',
        D: '#ae2:illuminated_panel',
    });
    
    // wireless access point
    event.shaped('ae2:wireless_access_point', [
        'A',
        'B',
        'C'
    ], {
        A: 'ae2:wireless_receiver',
        B: 'ae2:calculation_processor',
        C: '#ae2:glass_cable',
    });

    // wireless receiver
    event.shaped('ae2:wireless_receiver', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#ae2:glass_cable',
        B: 'ae2:fluix_pearl',
        C: 'gtceu:ev_sensor',
        D: '#forge:rods/titanium',
        E: '#forge:circuits/ev'
    });

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
    });

    // Toggle Bus
    event.shaped('ae2:toggle_bus', [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: '#forge:plates/red_alloy',
        B: '#ae2:glass_cable',
        C: 'minecraft:lever'
    });

    // Capacity Card
    event.shaped('ae2:capacity_card', [
        'AB',
        'BC',
    ], {
        A: 'ae2:basic_card',
        B: 'ae2:cell_component_1k',
        C: '#forge:gems/certus_quartz'
    });

    // Crafting Card
    event.shaped('ae2:crafting_card', [
        'AB',
        'BC',
    ], {
        A: 'ae2:basic_card',
        B: 'ae2:cell_component_1k',
        C: 'minecraft:crafting_table'
    });

    // Redstone Card
    event.shaped('ae2:redstone_card', [
        'AB',
        'BC'
    ], {
        A: 'ae2:basic_card',
        B: 'minecraft:redstone_torch',
        C: 'ae2:calculation_processor'
    });

    // Fuzzy Card
    event.shaped('ae2:fuzzy_card', [
        'AB',
        'CD',
    ], {
        A: 'ae2:advanced_card',
        B: 'ae2:engineering_processor',
        C: 'ae2:logic_processor',
        D: 'ae2:calculation_processor'
    });

    // Inverter Card
    event.shaped('ae2:inverter_card', [
        'AB',
        'BC',
    ], {
        A: 'ae2:advanced_card',
        B: 'ae2:inverted_toggle_bus',
        C: 'ae2:calculation_processor'
    });

    // Acceleration Card(speed card)
    event.shaped('ae2:speed_card', [
        'AB',
        'CD',
    ], {
        A: 'ae2:advanced_card',
        B: 'ae2:engineering_processor',
        C: 'ae2:logic_processor',
        D: '#forge:gems/fluix'
    });

    // Quartz Fixture
	event.shapeless(('ae2:quartz_fixture'), 
	[
        'ae2:charged_certus_quartz_crystal', 
        '#forge:rods/aluminium'
    ])
	
	// Light Detecting Fixture
	event.shapeless(('ae2:light_detector'), 
	[
        'ae2:certus_quartz_crystal', 
        '#forge:rods/iron'
    ])
	
    // Annihilation Core
    event.shaped('ae2:annihilation_core', [
        'ABA',
        'BDB',
        'ABA'
    ], {
        A: '#forge:rods/aluminium',
        B: 'ae2:engineering_processor',
        D: '#forge:gems/certus_quartz',
    });

    // Formation Core
    event.shaped('ae2:formation_core', [
        'ABA',
        'BDB',
        'ABA'
    ], {
        A: '#forge:rods/aluminium',
        B: 'ae2:engineering_processor',
        D: '#forge:gems/nether_quartz',
    });

    // Wireless Terminal
    event.shaped('ae2:wireless_terminal', [
        'ABA',
        'CDC',
        'FEF'
    ], {
        A: 'ae2:wireless_receiver',
        B: 'ae2:crafting_terminal',
        C: 'ae2:engineering_processor',
        D: '#forge:circuits/hv',
        E: 'ae2:dense_energy_cell',
        F: '#forge:plates/nether_quartz'
    });

    // Basic Card
    event.shaped('2x ae2:basic_card', [
        'AB ',
        'CDB',
        'EB '
    ], {
        A: '#forge:wires/fine/red_alloy',
        B: '#forge:plates/aluminium',
        C: 'ae2:calculation_processor',
        D: '#forge:circuits/mv',
        E: '#forge:wires/fine/gold'
    });

    // Advanced Card
    event.shaped('2x ae2:advanced_card', [
        'AB ',
        'CDB',
        'EB '
    ], {
        A: '#forge:wires/fine/red_alloy',
        B: '#forge:plates/stainless_steel',
        C: 'ae2:calculation_processor',
        D: '#forge:circuits/hv',
        E: '#forge:wires/fine/silver'
    });

    // Wireless Booster
    event.shaped('ae2:wireless_booster', [
        'ABC',
        'DDD',
    ], {
        A: '#forge:dusts/fluix',
        B: '#forge:gems/certus_quartz',
        C: '#forge:plates/ender_pearl',
        D: '#forge:plates/titanium',
    });

    // Memory Card
    event.shaped('ae2:memory_card', [
        'ABB',
        'CDC',
    ], {
        A: 'ae2:calculation_processor',
        B: '#forge:plates/iron',
        C: '#forge:plates/gold',
        D: '#forge:plates/red_alloy',
    });
    
    //item cell housing
    event.shaped('ae2:item_cell_housing', [
        'ABA',
        'CDC',
        'BBB'
    ], {
        A: 'ae2:quartz_glass',
        B: '#forge:plates/steel',
        C: '#forge:wires/fine/red_alloy',
        D: '#forge:circuits/lv',
    });
    
    //fluid cell housing
    event.shaped('ae2:fluid_cell_housing', [
        'ABA',
        'CDC',
        'BBB'
    ], {
        A: 'ae2:quartz_glass',
        B: '#forge:plates/stainless_steel',
        C: '#forge:wires/fine/red_alloy',
        D: '#forge:circuits/lv',
    });

    //level emitter
    event.shaped('ae2:level_emitter', [
        'DA ',
        'BCB',
        ' A '
    ], {
        A: '#forge:plates/steel',
        B: '#ae2:glass_cable',
        C: 'minecraft:redstone_torch',
        D: 'ae2:calculation_processor',
    });

    //energy level emitter
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
    });

    // Очистка шаблона
    //event.shapeless('ae2:blank_pattern', ['ae2:crafting_pattern']);

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
    });

        // ME Chest
    event.shaped('ae2:chest', [
        'AEA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:plates/stainless_steel',
        B: '#forge:circuits/mv',
        C: '#ae2:glass_cable',
        D: 'gtceu:aluminium_crate',
        E: 'ae2:terminal'
    });

    // ME Drive
    event.shaped('ae2:drive', [
        'ABA',
        'CDC',
        'EBE'
    ], {
        A: '#forge:plates/steel',
        B: 'ae2:engineering_processor',
        C: '#ae2:glass_cable',
        D: '#forge:circuits/lv',
        E: '#forge:plates/titanium'
    });

    // certus quartz cutting knife
    event.shaped('ae2:certus_quartz_cutting_knife', [
        '  A',
        'BA ',
        'CC '
    ], {
        A: '#tfc:can_be_lit_on_torch',
        B: '#forge:rods/iron',
        C: '#forge:gems/certus_quartz'
    });

    // nether quartz cutting knife'
    event.shaped('ae2:nether_quartz_cutting_knife', [
        '  A',
        'BA ',
        'CC '
    ], {
        A: '#tfc:can_be_lit_on_torch',
        B: '#forge:rods/iron',
        C: '#forge:gems/nether_quartz'
    });

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
    });

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
    });

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
    });

    // Interface
    event.shapeless('ae2:interface', ['ae2:cable_interface']);
    event.shapeless('ae2:cable_interface', ['ae2:interface']);

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
    });

    // Matter Condenser
    event.shaped('ae2:condenser', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:plates/stainless_steel',
        B: 'gtceu:hv_electric_piston',
        C: '#forge:circuits/hv',
    });

    // Energy Acceptor
    event.shaped('ae2:energy_acceptor', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:plates/steel',
        B: '#forge:plates/stainless_steel',
        C: 'gtceu:lv_voltage_coil',
    });

    // ME Annihilation Plane
    event.shaped('ae2:annihilation_plane', [
        'AAA',
        'CBC'
    ], {
        A: '#forge:dusts/fluix',
        B: 'ae2:annihilation_core',
        C: '#forge:plates/aluminium'
    });

    // ME Formation Plane
    event.shaped('ae2:formation_plane', [
        'AAA',
        'CBC'
    ], {
        A: '#forge:dusts/fluix',
        B: 'ae2:formation_core',
        C: '#forge:plates/aluminium'
    });

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
        E: '#forge:circuits/hv',
        F: '#forge:plates/steel',
        G: '#forge:screws/steel'
    });

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
    });

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
    });

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
    });

    //assembler 
    //glass cable
    event.recipes.gtceu.assembler('fluix_glass_cable')
        .itemInputs(
            '2x #forge:rods/aluminium',
            '3x ae2:quartz_fiber',
            '#forge:dusts/fluix')
        .itemOutputs('ae2:fluix_glass_cable')
        .circuit(1)
        .duration(20)
        .EUt(480)

    //covered cable
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
        
    //smart cable
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
        
    //covered dense cable
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
        
    //smart dence cable
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
            '4x #forge:wires/fine/red_alloy',
            '#forge:circuits/mv')
        .itemOutputs('ae2:blank_pattern')
        .duration(200)
        .EUt(120)
    event.recipes.gtceu.assembler('ae2:blank_pattern_pvc')
        .itemInputs(
            '3x #forge:plates/steel',
            '2x #forge:sheets/polyvinyl_chloride',
            '4x #forge:wires/fine/red_alloy',
            '#forge:circuits/mv')
        .itemOutputs('4x ae2:blank_pattern')
        .duration(200)
        .EUt(120)
    event.recipes.gtceu.assembler('ae2:blank_pattern_ptfe')
        .itemInputs(
            '3x #forge:plates/steel',
            '2x #forge:sheets/polytetrafluoroethylene',
            '4x #forge:wires/fine/red_alloy',
            '#forge:circuits/mv')
        .itemOutputs('16x ae2:blank_pattern')
        .duration(200)
        .EUt(480)
    event.recipes.gtceu.assembler('ae2:blank_pattern_pbi')
        .itemInputs(
            '3x #forge:plates/steel',
            '2x #forge:sheets/polybenzimidazole',
            '4x #forge:wires/fine/red_alloy',
            '#forge:circuits/mv')
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
            '2x ae2:dense_energy_cell',
            '2x gtceu:luv_sensor',
            'gtceu:luv_emitter',
            '2x #forge:rods/osmiridium',
            'ae2:wireless_terminal',
            'ae2:crafting_terminal')
        .itemOutputs('ae2:wireless_crafting_terminal')
        .duration(30)
        .EUt(250)
    
    //storage components
    // 1k storage components
    event.recipes.gtceu.assembler('ae2:cell_component_1k')
        .itemInputs(
            '4x #forge:batteries/ulv',
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
            '4x #forge:circuits/ev',
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
            '2x #forge:circuits/ev',
            '4x ae2:cell_component_1k')
        .inputFluids(Fluid.of('gtceu:steel', 144))
        .itemOutputs('ae2:cell_component_4k')
        .duration(400)
        .EUt(1920)
        .cleanroom(CleanroomType.CLEANROOM)

    // 16k storage components
    event.recipes.gtceu.assembler('ae2:cell_component_16k')
        .itemInputs(
            '4x #forge:circuits/iv',
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
            '2x #forge:circuits/iv',
            '4x ae2:cell_component_4k')
        .inputFluids(Fluid.of('gtceu:steel', 144))
        .itemOutputs('ae2:cell_component_16k')
        .duration(400)
        .EUt(7680)
        .cleanroom(CleanroomType.CLEANROOM)

    // 64k storage components
    event.recipes.gtceu.assembler('ae2:cell_component_64k')
        .itemInputs(
            '4x #forge:circuits/luv',
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
            '2x #forge:circuits/luv',
            '4x ae2:cell_component_16k')
        .inputFluids(Fluid.of('gtceu:steel', 144))
        .itemOutputs('ae2:cell_component_64k')
        .duration(400)
        .EUt(30720)
        .cleanroom(CleanroomType.CLEANROOM)

    // 256k storage components
    event.recipes.gtceu.assembler('ae2:cell_component_256k')
        .itemInputs(
            '4x #forge:circuits/zpm',
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
            '2x #forge:circuits/zpm',
            '4x ae2:cell_component_64k')
        .inputFluids(Fluid.of('gtceu:steel', 144))
        .itemOutputs('ae2:cell_component_256k')
        .duration(400)
        .EUt(122880)
        .cleanroom(CleanroomType.CLEANROOM)
        
    //Spatial Component
    // 2³ Spatial Component
    event.recipes.gtceu.assembler('ae2:spatial_cell_component_2')
        .itemInputs(
            '4x #forge:circuits/ev',
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
            '4x #forge:circuits/iv',
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
            '2x #forge:circuits/iv',
            '4x ae2:spatial_cell_component_2')
        .inputFluids(Fluid.of('gtceu:tungsten_steel', 144))
        .itemOutputs('ae2:spatial_cell_component_16')
        .duration(400)
        .EUt(7680)
        .cleanroom(CleanroomType.CLEANROOM)

    // 128³ Spatial Component
    event.recipes.gtceu.assembler('ae2:spatial_cell_component_128')
        .itemInputs(
            '4x #forge:circuits/luv',
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
            '2x #forge:circuits/luv',
            '4x ae2:spatial_cell_component_16') 
        .inputFluids(Fluid.of('gtceu:tungsten_steel', 144))
        .itemOutputs('ae2:spatial_cell_component_128')
        .duration(400)
        .EUt(30720)
        .cleanroom(CleanroomType.CLEANROOM)
    
    // storage_monitor
    event.recipes.gtceu.assembler('ae2:storage_monitor')
        .itemInputs(
            '#ae2:illuminated_panel',
            'ae2:level_emitter')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:storage_monitor')
        .duration(200)
        .EUt(480)

    // conversion_monitor
    event.recipes.gtceu.assembler('ae2:conversion_monitor')
        .itemInputs(
            '2x ae2:formation_core',
            '2x ae2:annihilation_core',
            'ae2:storage_monitor',)
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:conversion_monitor')
        .duration(200)
        .EUt(480)

    //level emitter
    event.recipes.gtceu.assembler('ae2:level_emitter')
        .itemInputs(
            'minecraft:redstone_torch',
            '#ae2:glass_cable',
            '#forge:plates/steel',
            'ae2:calculation_processor')
        .itemOutputs('ae2:level_emitter')
        .circuit(1)
        .duration(20)
        .EUt(7680)
        .cleanroom(CleanroomType.CLEANROOM)

    //storage_bus
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
    
    //import_bus
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
    
    //export_bus
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
            '#forge:circuits/hv',
            '2x #forge:plates/steel')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:crafting_unit')
        .circuit(1)
        .duration(20)
        .EUt(680)

    // Molecular Assembler
    //HV
    event.recipes.gtceu.assembler('ae2:molecular_assembler_HV')
        .itemInputs(
            '2x ae2:quartz_glass',
            '2x #forge:circuits/hv',
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
    event.recipes.gtceu.assembler('ae2:molecular_assembler_EV')
        .itemInputs(
            '2x ae2:quartz_glass',
            '2x #forge:circuits/ev',
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
    event.recipes.gtceu.assembler('ae2:molecular_assembler_IV')
        .itemInputs(
            '2x ae2:quartz_glass',
            '2x #forge:circuits/iv',
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

    // ME Контроллер
	event.recipes.gtceu.assembler('ae2:controller')
        .itemInputs(
            '2x ae2:engineering_processor',
            '2x #forge:circuits/hv',
            '2x #forge:plates/titanium',
            'ae2:fluix_block')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:controller')
        .duration(200)
        .EUt(480)
        .cleanroom(CleanroomType.CLEANROOM)
  
    // Energy Cell
    event.recipes.gtceu.assembler('ae2:energy_cell')
        .itemInputs(
            '#forge:plates/certus_quartz',
            '#forge:batteries/hv',
            '2x #forge:circuits/hv',
            '#ae2:covered_cable')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:energy_cell')
        .circuit(1)
        .duration(200)
        .EUt(500)
  
    // Dense Energy Cell
    event.recipes.gtceu.assembler('ae2:dense_energy_cell')
        .itemInputs(
            '8x ae2:energy_cell',
            'gtceu:ev_battery_buffer_16x',
            '3x ae2:formation_core',
            '#forge:circuits/ev',
            '#ae2:covered_dense_cable')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:dense_energy_cell')
        .circuit(1)
        .duration(20)
        .EUt(7680)
        .cleanroom(CleanroomType.CLEANROOM)
    
    // interface
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
    
    //portable cell
    //item portable cell
    // 1k
    event.recipes.gtceu.assembler('ae2:portable_item_cell_1k')
        .itemInputs(
            'ae2:chest',
            'ae2:cell_component_1k',
            'ae2:energy_cell',
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
            'ae2:energy_cell',
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
            'ae2:energy_cell',
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
            'ae2:energy_cell',
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
            'ae2:energy_cell',
            'ae2:item_cell_housing')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:portable_item_cell_256k')
        .duration(200)
        .EUt(122880)
        .cleanroom(CleanroomType.CLEANROOM)

    //fluid portable cell
    // 1k
    event.recipes.gtceu.assembler('ae2:portable_fluid_cell_1k')
        .itemInputs(
            'ae2:chest',
            'ae2:cell_component_1k',
            'ae2:energy_cell',
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
            'ae2:energy_cell',
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
            'ae2:energy_cell',
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
            'ae2:energy_cell',
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
            'ae2:energy_cell',
            'ae2:fluid_cell_housing')
        .inputFluids(Fluid.of('gtceu:polyethylene', 144))
        .itemOutputs('ae2:portable_fluid_cell_256k')
        .duration(200)
        .EUt(122880)
        .cleanroom(CleanroomType.CLEANROOM)

    //chemical_bath
    //cable
    event.recipes.gtceu.chemical_bath('ae2:fluix_glass_cable')
        .itemInputs(
            '#ae2:glass_cable')
        .inputFluids(Fluid.of('gtceu:chlorine', 144))
        .itemOutputs(
            'ae2:fluix_glass_cable')
        .duration(8)
        .EUt(480)

        for(i = 0; i < 16; i++) {
            event.recipes.gtceu.chemical_bath(rrayAE2.glassCables[i])
                .itemInputs(ore('ae2.cable.glass'))
                .inputFluids(arrayVanila.colorLiquid[i] * 18)
                .itemOutputs(arrayAE2.glassCables[i])
                .duration(20)
                .EUt(7)
        }

}

