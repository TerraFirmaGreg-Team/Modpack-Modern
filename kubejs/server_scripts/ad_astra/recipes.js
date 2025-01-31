// priority: 0

const registerAdAstraRecipes = (event) => {

    //#region Детали Ракеты 1 тира

    //#region Ракетный обтекатель

    event.recipes.gtceu.assembler('tfg:rocket_nose_cone')
        .itemInputs(
            'minecraft:lightning_rod',
            '1x #forge:double_plates/stainless_steel',
            '3x #forge:plates/stainless_steel')
        .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 720 ))
        .itemOutputs('ad_astra:rocket_nose_cone')
        .duration(600)
        .EUt(480)
    //#endregion

    //#region Ракетный двигатель

    event.recipes.gtceu.assembler('tfg:steel_engine')
        .itemInputs(
            '2x #forge:double_plates/stainless_steel',
            '2x #gtceu:circuits/hv',
            'gtceu:hv_electric_pump',
            '2x gtceu:power_thruster',
            '#forge:rotors/stainless_steel')
        .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 720 ))
        .itemOutputs('ad_astra:steel_engine')
        .duration(600)
        .EUt(480)
    //#endregion

    //#region Ракетный стабилизатор

    event.shaped('2x ad_astra:rocket_fin', [
        ' A ',
        'AAA',
        'A A'
    ], {
        A: '#forge:plates/aluminium',
    }).id('tfg:rocket_fin')
    //#endregion

    //#region Ракета 1 тира

    event.custom({ 
        type: 'ad_astra:nasa_workbench',
        ingredients: [
          { item: 'ad_astra:rocket_nose_cone' },
          { item: 'gtceu:clean_machine_casing' },
          { item: 'gtceu:clean_machine_casing' },
          { item: 'gtceu:mv_sensor' },
          { item: 'gtceu:mv_emitter' },
          { item: 'gtceu:aluminium_crate' },
          { item: 'gtceu:maintenance_hatch' },
          { item: 'ad_astra:rocket_fin'  },
          { item: 'gtceu:aluminium_drum'  },
          { item: 'gtceu:aluminium_drum'  },
          { item: 'ad_astra:rocket_fin'  },
          { item: 'ad_astra:rocket_fin'  },
          { item: 'ad_astra:steel_engine' },
          { item: 'ad_astra:rocket_fin'  }
        ],
        result: {
          count: 1,
          id: 'ad_astra:tier_1_rocket'
        }
    })

    //#endregion
    //#endregion

    //#region Nasa верстак

    event.recipes.gtceu.assembler('tfg:nasa_workbench')
        .itemInputs(
            'gtceu:hv_machine_hull',
            '3x gtceu:hv_robot_arm',
            '3x #gtceu:circuits/hv',
            'gtceu:hv_conveyor_module',
            'gtceu:computer_monitor_cover',
            '#forge:screwdriver_tips')
        .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 864 ))
        .itemOutputs('ad_astra:nasa_workbench')
        .duration(1200)
        .EUt(480)
    
    //#endregion

    //#region Скафандр 1 уровня

    //#region Шлем
   
    event.shaped('ad_astra:space_helmet', [
        'AAA',
        'A A',
        'BCB'
    ], {
        A: 'firmalife:reinforced_glass',
        B: 'gtceu:carbon_fiber_plate',
        C:'#forge:plates/polycaprolactam'
    }).id('tfg:space_helmet')
    
    //#endregion

    //#region Сам скафандр
   
    event.shaped('ad_astra:space_suit', [
        'B B',
        'ADA',
        'BCB'
    ], {
        A: 'ad_astra_giselle_addon:oxygen_can',
        B: 'gtceu:carbon_fiber_plate',
        C:'#forge:plates/polycaprolactam',
        D: 'ad_astra:oxygen_gear'
    }).id('tfg:space_suit')
    
    //#endregion

    //#region Штаны
   
    event.shaped('ad_astra:space_pants', [
        'BAB',
        'C C',
        'B B'
    ], {
        A: 'gtceu:hv_electric_motor',
        B: 'gtceu:carbon_fiber_plate',
        C:'#forge:plates/polycaprolactam'
    }).id('tfg:space_pants')
    
    //#endregion

    //#region Ботинки
   
    event.shaped('ad_astra:space_boots', [
        '   ',
        'C C',
        'B B'
    ], {
        B: 'gtceu:carbon_fiber_plate',
        C:'#forge:plates/polycaprolactam'
    }).id('tfg:space_boots')
    
    //#endregion

    //#region Кислородное оборудование
   
    event.shaped('ad_astra:oxygen_gear', [
        ' A ',
        'BCB',
        'BDB'
    ], {
        A:'#forge:small_fluid_pipes/stainless_steel',
        B: '#forge:tiny_fluid_pipes/stainless_steel',
        C:'gtceu:hv_electric_pump',
        D:'gtceu:fluid_detector_cover'
    }).id('tfg:oxygen_gear')
    
    //#endregion

    //#region Кислородный баллон 1 уровня
   
    event.shaped('ad_astra_giselle_addon:oxygen_can', [
        'ABA',
        'ACA',
        'AAA'
    ], {
        A:'#forge:foils/polyethylene',
        B:'#forge:tiny_fluid_pipes/polyethylene',
        C:'gtceu:aluminium_fluid_cell'
    }).id('tfg:oxygen_can')
    
    //#endregion

    //#endregion

    //#region Кислородный баллон 2 уровня
   
    event.shaped('ad_astra_giselle_addon:netherite_oxygen_can', [
        'ABA',
        'ACA',
        'AAA'
    ], {
        A:'#forge:plates/reinforced_epoxy_resin',
        B:'#forge:tiny_fluid_pipes/titanium',
        C:'gtceu:titanium_fluid_cell'
    }).id('tfg:netherite_oxygen_can')

    //#endregion

    //#region Распылитель кислорода
   
    event.shaped('ad_astra:oxygen_distributor', [
        'ABA',
        'ACA',
        'DED'
    ], {
        A:'#forge:rotors/stainless_steel',
        B:'gtceu:aluminium_fluid_cell',
        C:'ad_astra:oxygen_gear',
        D:'gtceu:filter_casing',
        E: 'gtceu:mv_canner'
    }).id('tfg:oxygen_distributor')

    //#endregion

    //#region Генератор гравитации
   
    event.shaped('ad_astra:gravity_normalizer', [
        'A A',
        'ABA',
        'CDC'
    ], {
        A:'#forge:rods/magnetic_neodymium',
        B:'gtceu:hv_field_generator',
        C:'gtceu:stainless_steel_block',
        D:'gtceu:hv_polarizer',
    }).id('tfg:gravity_normalizer')

    //#endregion

    //#region Детектор кислорода
   
    event.shaped('ad_astra:oxygen_sensor', [
        'AAA',
        'ABA',
        'ACA'
    ], {
        A:'#forge:plates/red_alloy',
        B:'gtceu:activity_detector_cover',
        C:'gtceu:fluid_detector_cover',
    }).id('tfg:oxygen_sensor')

    //#endregion

    //#region TI-69 (ручной детектор кислорода хз)
   
    event.shaped('ad_astra:ti_69', [
        'ABC',
        'BDB',
        'BEB'
    ], {
        A:'gtceu:lv_emitter',
        B:'#forge:plates/steel',
        C:'gtceu:lv_sensor',
        D:'gtceu:computer_monitor_cover',
        E:'#gtceu:batteries/lv'
    }).id('tfg:ti_69')

    //#endregion

    //#region Солнечная панель
   
    event.shaped('ad_astra:solar_panel', [
        'AAA',
        'BCD',
        'EFE'
    ], {
        A:'gtceu:solar_panel',
        B:'minecraft:daylight_detector',
        C:'#forge:rods/long/titanium',
        D:'gtceu:hv_sensor',
        E:'#gtceu:circuits/hv',
        F:'gtceu:hv_battery_buffer_4x'
    }).id('tfg:solar_panel')

    //#endregion

    //#region Радио
   
    event.shaped('ad_astra:radio', [
        'AB ',
        'CDC',
        'CCC'
    ], {
        A:'gtceu:lv_sensor',
        B:'#forge:tools/screwdrivers',
        C:'#forge:plates/iron',
        D:'#gtceu:circuits/lv'
    }).damageIngredient('#forge:tools/screwdrivers','1')
    .id('tfg:radio')
    

    //#endregion

    //#region Колесо
   
    event.shaped('ad_astra:wheel', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A:'#forge:plates/polyphenylene_sulfide',
        B:'#forge:rings/titanium',
    }).id('tfg:ad_astra_wheel')
    

    //#endregion

    //#region Ровер (марсоход)

    event.recipes.gtceu.assembler('tfg:tier_1_rover')
        .itemInputs(
            'gtceu:hv_sensor',
            'ad_astra:radio',
            'ad_astra_giselle_addon:netherite_oxygen_can',
            '4x ad_astra:wheel',
            '2x gtceu:ev_electric_motor',
            '4x #forge:plates/titanium',
            '4x #forge:frames/titanium')
        .itemOutputs('ad_astra:tier_1_rover')
        .duration(2000)
        .EUt(1920)
    
    //#endregion

    //#region Ракетный двигатель т2

    event.recipes.gtceu.assembler('tfg:desh_engine')
        .itemInputs(
            '2x #forge:double_plates/titanium',
            '2x #gtceu:circuits/iv',
            'gtceu:ev_electric_pump',
            '2x gtceu:advanced_power_thruster',
            '#forge:rotors/titanium')
        .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 720 ))
        .itemOutputs('ad_astra:desh_engine')
        .duration(600)
        .EUt(1920)
    //#endregion

    //#region Ракета 2 тира
   
    event.custom({ 
        type: 'ad_astra:nasa_workbench',
        ingredients: [
          { item: 'ad_astra:rocket_nose_cone' },
          { item: 'gtceu:stable_machine_casing' },
          { item: 'gtceu:stable_machine_casing' },
          { item: 'gtceu:ev_sensor' },
          { item: 'gtceu:ev_emitter' },
          { item: 'gtceu:titanium_crate' },
          { item: 'gtceu:configurable_maintenance_hatch' },
          { item: 'ad_astra:rocket_fin'  },
          { item: 'gtceu:titanium_drum'  },
          { item: 'gtceu:titanium_drum'  },
          { item: 'ad_astra:rocket_fin'  },
          { item: 'ad_astra:rocket_fin'  },
          { item: 'ad_astra:desh_engine' },
          { item: 'ad_astra:rocket_fin'  }
        ],
        result: {
          count: 1,
          id: 'ad_astra:tier_2_rocket'
        }
    })

    //#endregion

    //#region Стальной FE кабель т1

    event.recipes.gtceu.assembler('tfg:ad_astra_steel_cable')
        .itemInputs(
            '#forge:double_wires/annealed_copper',
            '#forge:plates/steel',)
        .inputFluids(Fluid.of('gtceu:polyethylene', 144 ))
        .itemOutputs('ad_astra:steel_cable')
        .duration(60)
        .EUt(120)

    //#endregion

    //#region FE кабель т2

    event.recipes.gtceu.assembler('tfg:ad_astra_desh_cable')
        .itemInputs(
            '#forge:double_wires/aluminium',
            '#forge:plates/titanium',)
        .inputFluids(Fluid.of('gtceu:polyethylene', 144 ))
        .itemOutputs('ad_astra:desh_cable')
        .duration(60)
        .EUt(480)
        
    //#endregion

    //#region Колесо
   
    event.shaped('ad_astra:white_flag', [
        'ABB',
        'ABB',
        'A  '
    ], {
        A:'#forge:rods/long/steel',
        B:'tfc:wool_cloth',
    }).id('tfg:white_flag')
    
    //#endregion

    //#region Воздушный пистолет
   
    event.shaped('ad_astra:zip_gun', [
        'ABC',
        'D  ',
        '   '
    ], {
        A:'gtceu:lv_electric_pump',
        B:'#forge:small_fluid_pipes/steel',
        C:'#forge:tiny_fluid_pipes/steel' ,
        D:'ad_astra_giselle_addon:oxygen_can' ,
    }).id('tfg:zip_gun')
    
    //#endregion

    //#region Космо картина
   
    event.shaped('ad_astra:space_painting', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A:'#forge:nuggets/desh',
        B:'#forge:ingots/desh',
        C:'tfc:wool_cloth' ,
    }).id('tfg:space_painting')
    
    //#endregion

}
