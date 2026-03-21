// priority: 0

function registerTFGGemSlurriesProcessing(event) {

    const $ChanceLogic = Java.loadClass('com.gregtechceu.gtceu.api.recipe.chance.logic.ChanceLogic')

    // Slurry Refining

    function slurryProcessing(event, inputId, output, amount) {
        event.recipes.gtceu.coal_liquefaction_tower(`tfg:dirty_${output}_slurry_${linuxUnfucker(inputId)}`)
            .itemInputs(Item.of(inputId))
            .perTick(true)
		    .chancedFluidInput(Fluid.of('gtceu:hydrogen', 10), 1000, 0)
		    .perTick(false)
            .outputFluids(Fluid.of(`tfg:dirty_${output}_slurry`, amount))
            .duration(20 * 50)
            .EUt(GTValues.VA[GTValues.LV])
            .circuit(4);
    }

    const gemMaterials = [
        [GTMaterials.Diamond,                          'diamond',        { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.Pyrope,                           'pyrope',         { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.Sapphire,                         'sapphire',       { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.Amethyst,                         'amethyst',       { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.Apatite,                          'apatite',        { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.Almandine,                        'almandine',      { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.Emerald,                          'emerald',        { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.Sodalite,                         'sodalite',       { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.RockSalt,                         'rock_salt',      { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.GarnetRed,                        'red_garnet',     { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.Ruby,                             'ruby',           { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.Coal,                             'coal',           { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.Topaz,                            'topaz',          { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.Cinnabar,                         'cinnabar',       { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.Lapis,                            'lapis',          { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.BlueTopaz,                        'blue_topaz',     { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.Monazite,                         'monazite',       { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.GreenSapphire,                    'green_sapphire', { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.Olivine,                          'olivine',        { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.Andradite,                        'andradite',      { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.Lazurite,                         'lazurite',       { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.Malachite,                        'malachite',      { gem: 300, flawless: 700, exquisite: 1500 }],
        [TFGHelpers.getMaterial('gtceu:armalcolite'),  'armalcolite',    { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.Grossular,                        'grossular',      { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.Spessartine,                      'spessartine',    { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.Opal,                             'opal',           { gem: 300, flawless: 700, exquisite: 1500 }],
        [GTMaterials.GarnetYellow,                     'yellow_garnet',  { gem: 300, flawless: 700, exquisite: 1500 }],
    ];

    gemMaterials.forEach(([material, output, amounts]) => {
        //slurryProcessing(event, ChemicalHelper.get(TagPrefix.dust,         material, 1), output, amounts.dust);
        slurryProcessing(event, ChemicalHelper.get(TagPrefix.gem,          material, 1), output, amounts.gem);
        slurryProcessing(event, ChemicalHelper.get(TagPrefix.gemFlawless,  material, 1), output, amounts.flawless);
        slurryProcessing(event, ChemicalHelper.get(TagPrefix.gemExquisite, material, 1), output, amounts.exquisite);
    });

    function slurryFiltering(event, name) {
        event.recipes.gtceu.chemical_bath(`tfg:filtered_${name}_slurry`)
            .itemInputs(Item.of('gtceu:tiny_perlite_dust'))
            .inputFluids(Fluid.of(`tfg:dirty_${name}_slurry`, 100))
            .outputFluids(Fluid.of(`tfg:filtered_${name}_slurry`, 100))
            .duration(20 * 10)
            .EUt(GTValues.VA[GTValues.MV]);
    }

    gemMaterials.forEach(([material, output, amounts]) => {
        slurryFiltering(event, output);
    });
    /* HIDDEN UNTIL VENUS - IV => Recipe will be changed
    function slurryCleaning(event, name) {
        event.recipes.gtceu.chemical_bath(`tfg:clean_${name}_slurry`)
            .itemInputs(Item.of('gtceu:perlite_dust'))
            .inputFluids(Fluid.of(`tfg:filtered_${name}_slurry`, 100))
            .outputFluids(Fluid.of(`tfg:clean_${name}_slurry`, 100))
            .duration(20 * 10)
            .EUt(GTValues.VA[GTValues.MV]);
    }

    gemMaterials.forEach(([material, output, amounts]) => {
        slurryCleaning(event, output);
    });
    */

    // Slurry to Ores

    function slurryCentrifuging(event, tier, name, amount, itemOutputs, fluidOutputs, chancedOutputs) {
        const recipe = event.recipes.gtceu.centrifuge(`tfg:${tier}_${name}_slurry_centrifuge`)
            .inputFluids(Fluid.of(`tfg:${tier}_${name}_slurry`, amount))
            .itemOutputs(itemOutputs.map(([item, amount]) => Item.of(item, amount)))
            .duration(20 * 16)
            .EUt(GTValues.VA[GTValues.MV]);

        if (fluidOutputs && fluidOutputs.length > 0) {
            recipe.outputFluids(fluidOutputs.map(([fluid, amount]) => Fluid.of(fluid, amount)));
        }
        if (chancedOutputs && chancedOutputs.length > 0) {
            chancedOutputs.forEach(([item, chance, tierBoost]) => {
                recipe.chancedOutput(Item.of(item), chance, tierBoost);
            });
        }
    }
    // Always target 30 dusts equal to Electrolyzer / Centrifuge
    const GEM_CENTRIFUGE = [
        //  name            dirty   filtered  clean(TBD)   itemOutputs                                                                                                               fluidOutputs                                                                             chancedOutputs
        ['diamond',         4000,   2000,     500,   [['gtceu:carbon_dust', 64], ['gtceu:graphite_dust', 1]],                                                                        [],                                                                                      []],
        ['pyrope',          4000,   2000,     500,   [['gtceu:aluminium_dust', 2*1.5], ['gtceu:magnesium_dust', 3*1.5], ['gtceu:silicon_dust', 3*1.5]],                              [['gtceu:oxygen', 12000*1.5]],                                                           []],
        ['sapphire',        4000,   2000,     500,   [['gtceu:aluminium_dust', 2*6]],                                                                                                [['gtceu:oxygen', 3000*6]],                                                              [['gtceu:ilmenite_dust', 200, 0], ['gtceu:iron_dust', 200, 0], ['gtceu:vanadium_dust', 200, 0]]],
        ['amethyst',        4000,   2000,     500,   [['gtceu:silicon_dioxide_dust', 4*6], ['gtceu:iron_dust', 1*6]],                                                                [],                                                                                      []],
        ['apatite',         4000,   2000,     500,   [['gtceu:calcium_dust', 5*3], ['gtceu:phosphorus_dust', 3*3]],                                                                  [['gtceu:chlorine', 1000*3]],                                                            []],
        ['almandine',       4000,   2000,     500,   [['gtceu:aluminium_dust', 2*1.5], ['gtceu:iron_dust', 3*1.5], ['gtceu:silicon_dust', 3*1.5]],                                   [['gtceu:oxygen', 12000*1.5]],                                                           []],
        ['emerald',         4000,   2000,     500,   [['gtceu:beryllium_dust', 3], ['gtceu:aluminium_dust', 2], ['gtceu:silicon_dust', 6]],                                          [['gtceu:oxygen', 18000]],                                                               [['gtceu:ilmenite_dust', 200, 0]]],
        ['sodalite',        4000,   2000,     500,   [['gtceu:aluminium_dust', 3*3], ['gtceu:silicon_dust', 3*3], ['gtceu:sodium_dust', 4*3]],                                       [['gtceu:chlorine', 1000*3]],                                                            []],
        ['rock_salt',       4000,   2000,     500,   [['gtceu:potassium_dust', 1*15]],                                                                                               [['gtceu:chlorine', 1000*15]],                                                           []],
        ['red_garnet',      4000,   2000,     500,   [['gtceu:pyrope_dust', 3*2], ['gtceu:almandine_dust', 5*2], ['gtceu:spessartine_dust', 8*2]],                                   [],                                                                                      []],
        ['ruby',            4000,   2000,     500,   [['gtceu:chromium_dust', 1*6], ['gtceu:aluminium_dust', 2*6]],                                                                  [['gtceu:oxygen', 3000*6]],                                                              [['gtceu:ilmenite_dust', 200, 0], ['gtceu:iron_dust', 200, 0], ['gtceu:vanadium_dust', 200, 0]]],
        ['coal',            4000,   2000,     500,   [['gtceu:carbon_dust', 2*30]],                                                                                                  [],                                                                                      [['gtceu:graphite_dust', 2000, 0], ['gtceu:thorium_dust', 200, 0]]],
        ['topaz',           4000,   2000,     500,   [['gtceu:aluminium_dust', 2*3], ['gtceu:silicon_dust', 1*3]],                                                                   [['gtceu:oxygen', 5000*3], ['gtceu:fluorine', 1000*3], ['gtceu:hydrogen', 1000*3]],      []],
        ['cinnabar',        4000,   2000,     500,   [['gtceu:sulfur_dust', 1*15]],                                                                                                  [['gtceu:mercury', 1000*15]],                                                            []],
        ['lapis',           4000,   2000,     500,   [['gtceu:lazurite_dust', 12*2], ['gtceu:sodalite_dust', 2*2], ['gtceu:pyrite_dust', 1*2], ['gtceu:calcite_dust', 1*2]],         [],                                                                                      []],
        ['blue_topaz',      4000,   2000,     500,   [['gtceu:aluminium_dust', 2*3], ['gtceu:silicon_dust', 1*3]],                                                                   [['gtceu:oxygen', 4000*3], ['gtceu:fluorine', 2000*3]],                                  []],
        ['monazite',        4000,   2000,     500,   [['gtceu:rare_earth_dust', 1*15], ['gtceu:phosphate_dust', 1*15]],                                                              [],                                                                                      []],
        ['green_sapphire',  4000,   2000,     500,   [['gtceu:aluminium_dust', 2*6]],                                                                                                [['gtceu:oxygen', 3000*6]],                                                              []],
        ['olivine',         4000,   2000,     500,   [['gtceu:magnesium_dust', 1*7.5], ['gtceu:iron_dust', 1*7.5], ['gtceu:silicon_dioxide_dust', 2*7.5]],                           [],                                                                                      []],  
        ['andradite',       4000,   2000,     500,   [['gtceu:calcium_dust', 3*1.5], ['gtceu:iron_dust', 2*1.5], ['gtceu:silicon_dust', 3*1.5]],                                     [['gtceu:oxygen', 12000*1.5]],                                                           []],
        ['lazurite',        4000,   2000,     500,   [['gtceu:aluminium_dust', 3*2], ['gtceu:silicon_dust', 3*2], ['gtceu:calcium_dust', 4*2], ['gtceu:sodium_dust', 4*2]],          [],                                                                                      []],
        ['malachite',       4000,   2000,     500,   [['gtceu:copper_dust', 2*3], ['gtceu:carbon_dust', 1*3]],                                                                       [['gtceu:hydrogen', 2000*3], ['gtceu:oxygen', 5000*3]],                                  []],
        ['grossular',       4000,   2000,     500,   [['gtceu:calcium_dust', 3*1.5], ['gtceu:aluminium_dust', 2*1.5], ['gtceu:silicon_dust',3*1.5]],                                 [['gtceu:oxygen', 12000*1.5]],                                                           []],
        ['spessartine',     4000,   2000,     500,   [['gtceu:aluminium_dust', 2*1.5], ['gtceu:manganese_dust', 3*1.5], ['gtceu:silicon_dust', 3*1.5]],                              [['gtceu:oxygen', 12000*1.5]],                                                           []],
        ['opal',            4000,   2000,     500,   [['gtceu:silicon_dioxide_dust', 1*30]],                                                                                         [],                                                                                      []],
        ['yellow_garnet',   4000,   2000,     500,   [['gtceu:andradite_dust', 5*2], ['gtceu:grossular_dust', 8*2], ['gtceu:uvarovite_dust', 3*2]],                                  [],                                                                                      []],
        ['armalcolite',     4000,   2000,     500,   [['gtceu:magnesium_dust', 1*7.5], ['gtceu:ilmenite_dust', 1*7.5]],                                                              [['gtceu:oxygen', 2000*7.5]],                                                            []],
        //['',     4000,   2000,     500,   [['', ], ['', ], ['',]],  [['', ]],      []],
    ];

    const TIERS = ['dirty', 'filtered', 'clean'];
    const TIER_AMOUNT_INDEX = { dirty: 1, filtered: 2, clean: 3 };

    GEM_CENTRIFUGE.forEach(([name, dirtyAmt, filteredAmt, cleanAmt, itemOutputs, fluidOutputs, chancedOutputs]) => {
        TIERS.forEach(tier => {
            const amount = tier === 'dirty' ? dirtyAmt : tier === 'filtered' ? filteredAmt : cleanAmt;
            slurryCentrifuging(event, tier, name, amount, itemOutputs, fluidOutputs, chancedOutputs);
        });
    });
}