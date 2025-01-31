// priority: 0

const registerAdAstraRecipes = (event) => {

    event.remove({ mod: 'ad_astra' })

    //#region Детали Ракеты 1 тира

    //#region Ракетный обтекатель
    event.remove({ id: 'ad_astra:rocket_nose_cone' })

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
    event.remove({ id: 'ad_astra:steel_engine' })

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
    event.remove({ id: 'ad_astra:rocket_fin' })

    event.shaped('2x ad_astra:rocket_fin', [
        ' A ',
        'AAA',
        'A A'
    ], {
        A: '#forge:plates/aluminium',
    }).id('tfg:rocket_fin')
    //#endregion

    //#region Ракета 1 тира
    event.remove({ id: 'ad_astra:tier_1_rocket' })

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
}
