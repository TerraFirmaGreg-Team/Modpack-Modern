// priority: 0

function registerTFGGemSlurriesProcessing(event) {

    const $ChanceLogic = Java.loadClass('com.gregtechceu.gtceu.api.recipe.chance.logic.ChanceLogic')

    // Slurry Refining

    function slurryProcessing(event, input, output, amount) {
        event.recipes.gtceu.coal_liquefaction_tower(`tfg:dirty_${output}_slurry_${global.linuxUnfucker(input.getItem())}`)
            .itemInputs(input)
            .perTick(true)
		    .chancedFluidInput(Fluid.of('gtceu:hydrogen', 10), 1000)
		    .perTick(false)
            .outputFluids(Fluid.of(`tfg:dirty_${output}_slurry`, amount))
            .duration(20 * 50)
            .EUt(GTValues.VA[GTValues.LV])
            .circuit(4);
    }

    const SLURRY = { gem: 100, flawless: 250, exquisite: 500 };

    const gemMaterials = [
        [GTMaterials.Diamond,                          'diamond',        SLURRY],
        [GTMaterials.Pyrope,                           'pyrope',         SLURRY],
        [GTMaterials.Sapphire,                         'sapphire',       SLURRY],
        [GTMaterials.Amethyst,                         'amethyst',       SLURRY],
        [GTMaterials.Apatite,                          'apatite',        SLURRY],
        [GTMaterials.Almandine,                        'almandine',      SLURRY],
        [GTMaterials.Emerald,                          'emerald',        SLURRY],
        [GTMaterials.Sodalite,                         'sodalite',       SLURRY],
        [GTMaterials.RockSalt,                         'rock_salt',      SLURRY],
        [GTMaterials.GarnetRed,                        'red_garnet',     SLURRY],
        [GTMaterials.Ruby,                             'ruby',           SLURRY],
        [GTMaterials.Coal,                             'coal',           SLURRY],
        [GTMaterials.Topaz,                            'topaz',          SLURRY],
        [GTMaterials.Cinnabar,                         'cinnabar',       SLURRY],
        [GTMaterials.Lapis,                            'lapis',          SLURRY],
        [GTMaterials.BlueTopaz,                        'blue_topaz',     SLURRY],
        [GTMaterials.Monazite,                         'monazite',       SLURRY],
        [GTMaterials.GreenSapphire,                    'green_sapphire', SLURRY],
        [GTMaterials.Olivine,                          'olivine',        SLURRY],
        [GTMaterials.Andradite,                        'andradite',      SLURRY],
        [GTMaterials.Lazurite,                         'lazurite',       SLURRY],
        [GTMaterials.Malachite,                        'malachite',      SLURRY],
        [TFGHelpers.getMaterial('gtceu:armalcolite'),  'armalcolite',    SLURRY],
        [GTMaterials.Grossular,                        'grossular',      SLURRY],
        [GTMaterials.Spessartine,                      'spessartine',    SLURRY],
        [GTMaterials.Opal,                             'opal',           SLURRY],
        [GTMaterials.GarnetYellow,                     'yellow_garnet',  SLURRY],
        [GTMaterials.Realgar,                          'realgar',        SLURRY],
    ];

    gemMaterials.forEach(([material, output, amounts]) => {
        //slurryProcessing(event, ChemicalHelper.get(TagPrefix.dust,         material, 1), output, amounts.dust);
        slurryProcessing(event, ChemicalHelper.get(TagPrefix.gem,          material, 1), output, amounts.gem);
        slurryProcessing(event, ChemicalHelper.get(TagPrefix.gemFlawless,  material, 1), output, amounts.flawless);
        slurryProcessing(event, ChemicalHelper.get(TagPrefix.gemExquisite, material, 1), output, amounts.exquisite);
    });

    function slurryFiltering(event, name) {
        event.recipes.gtceu.chemical_bath(`tfg:filtered_${name}_slurry`)
            .chancedInput(Item.of('gtceu:tiny_perlite_dust', 1), 5000)
            .inputFluids(Fluid.of(`tfg:dirty_${name}_slurry`, 50))
            .outputFluids(Fluid.of(`tfg:filtered_${name}_slurry`, 50))
            .duration(20 * 5)
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
    // Items per batch (gem/flawless/exquisite)
    // dirty 20/8/4 - filtered 10/4/2 - clean 5/2/1
    // added a Math.floor in case something change and kubejs stop truncating

    const STAGE_MULT = { dirty: 1.5, filtered: 1.5, clean: 3 };

    function slurryCentrifuging(event, tier, name, amount, itemOutputs, fluidOutputs, chancedOutputs) {
        const mult = STAGE_MULT[tier];
        const recipe = event.recipes.gtceu.centrifuge(`tfg:${tier}_${name}_slurry_centrifuge`)
            .inputFluids(Fluid.of(`tfg:${tier}_${name}_slurry`, amount))
            .itemOutputs(itemOutputs.map(([item, count]) => Item.of(item, Math.floor(count * mult))))
            .duration(20 * 16)
            .EUt(GTValues.VA[GTValues.MV]);

        if (fluidOutputs && fluidOutputs.length > 0) {
            recipe.outputFluids(fluidOutputs.map(([fluid, amt]) => Fluid.of(fluid, Math.floor(amt * mult))));
        }
        if (chancedOutputs && chancedOutputs.length > 0) {
            chancedOutputs.forEach(([item, chance, tierBoost]) => {
                recipe.chancedOutput(Item.of(item), chance);
            });
        }
    }
    // Always target 30 dusts equal to Electrolyzer / Centrifuge
    const GEM_CENTRIFUGE = [
        //  name            dirty   filtered  clean(TBD)   itemOutputs                                                                                                               fluidOutputs                                                                             chancedOutputs
        ['diamond',         2000,   1000,     500,   [['gtceu:carbon_dust', 64], ['gtceu:graphite_dust', 1]],                                                                        [],                                                                                      []],
        ['pyrope',          2000,   1000,     500,   [['gtceu:aluminium_dust', 2*1.5], ['gtceu:magnesium_dust', 3*1.5], ['gtceu:silicon_dust', 3*1.5]],                              [['gtceu:oxygen', 12000*1.5]],                                                           []],
        ['sapphire',        2000,   1000,     500,   [['gtceu:aluminium_dust', 2*6]],                                                                                                [['gtceu:oxygen', 3000*6]],                                                              [['gtceu:ilmenite_dust', 200], ['gtceu:iron_dust', 200], ['gtceu:vanadium_dust', 200]]],
        ['amethyst',        2000,   1000,     500,   [['gtceu:silicon_dioxide_dust', 4*6], ['gtceu:iron_dust', 1*6]],                                                                [],                                                                                      []],
        ['apatite',         2000,   1000,     500,   [['gtceu:calcium_dust', 5*3], ['gtceu:phosphorus_dust', 3*3]],                                                                  [['gtceu:chlorine', 1000*3]],                                                            []],
        ['almandine',       2000,   1000,     500,   [['gtceu:aluminium_dust', 2*1.5], ['gtceu:iron_dust', 3*1.5], ['gtceu:silicon_dust', 3*1.5]],                                   [['gtceu:oxygen', 12000*1.5]],                                                           []],
        ['emerald',         2000,   1000,     500,   [['gtceu:beryllium_dust', 3], ['gtceu:aluminium_dust', 2], ['gtceu:silicon_dust', 6]],                                          [['gtceu:oxygen', 18000]],                                                               [['gtceu:ilmenite_dust', 200]]],
        ['sodalite',        2000,   1000,     500,   [['gtceu:aluminium_dust', 3*3], ['gtceu:silicon_dust', 3*3], ['gtceu:sodium_dust', 4*3]],                                       [['gtceu:chlorine', 1000*3]],                                                            []],
        ['rock_salt',       2000,   1000,     500,   [['gtceu:potassium_dust', 1*15]],                                                                                               [['gtceu:chlorine', 1000*15]],                                                           []],
        ['red_garnet',      2000,   1000,     500,   [['gtceu:pyrope_dust', 3*2], ['gtceu:almandine_dust', 5*2], ['gtceu:spessartine_dust', 8*2]],                                   [],                                                                                      []],
        ['coal',            2000,   1000,     500,   [['gtceu:carbon_dust', 2*30]],                                                                                                  [],                                                                                      [['gtceu:graphite_dust', 2000], ['gtceu:thorium_dust', 200]]],
        ['topaz',           2000,   1000,     500,   [['gtceu:aluminium_dust', 2*3], ['gtceu:silicon_dust', 1*3]],                                                                   [['gtceu:oxygen', 5000*3], ['gtceu:fluorine', 1000*3], ['gtceu:hydrogen', 1000*3]],      []],
        ['cinnabar',        2000,   1000,     500,   [['gtceu:sulfur_dust', 1*15]],                                                                                                  [['gtceu:mercury', 1000*15]],                                                            []],
        ['lapis',           2000,   1000,     500,   [['gtceu:lazurite_dust', 12*2], ['gtceu:sodalite_dust', 2*2], ['gtceu:pyrite_dust', 1*2], ['gtceu:calcite_dust', 1*2]],         [],                                                                                      []],
        ['blue_topaz',      2000,   1000,     500,   [['gtceu:aluminium_dust', 2*3], ['gtceu:silicon_dust', 1*3]],                                                                   [['gtceu:oxygen', 4000*3], ['gtceu:fluorine', 2000*3]],                                  []],
        ['monazite',        2000,   1000,     500,   [['gtceu:rare_earth_dust', 1*15], ['gtceu:phosphate_dust', 1*15]],                                                              [],                                                                                      []],
        ['green_sapphire',  2000,   1000,     500,   [['gtceu:aluminium_dust', 2*6]],                                                                                                [['gtceu:oxygen', 3000*6]],                                                              []],
        ['olivine',         2000,   1000,     500,   [['gtceu:magnesium_dust', 1*7.5], ['gtceu:iron_dust', 1*7.5], ['gtceu:silicon_dioxide_dust', 2*7.5]],                           [],                                                                                      []],  
        ['andradite',       2000,   1000,     500,   [['gtceu:calcium_dust', 3*1.5], ['gtceu:iron_dust', 2*1.5], ['gtceu:silicon_dust', 3*1.5]],                                     [['gtceu:oxygen', 12000*1.5]],                                                           []],
        ['lazurite',        2000,   1000,     500,   [['gtceu:aluminium_dust', 3*2], ['gtceu:silicon_dust', 3*2], ['gtceu:calcium_dust', 4*2], ['gtceu:sodium_dust', 4*2]],          [],                                                                                      []],
        ['malachite',       2000,   1000,     500,   [['gtceu:copper_dust', 2*3], ['gtceu:carbon_dust', 1*3]],                                                                       [['gtceu:hydrogen', 2000*3], ['gtceu:oxygen', 5000*3]],                                  []],
        ['grossular',       2000,   1000,     500,   [['gtceu:calcium_dust', 3*1.5], ['gtceu:aluminium_dust', 2*1.5], ['gtceu:silicon_dust',3*1.5]],                                 [['gtceu:oxygen', 12000*1.5]],                                                           []],
        ['spessartine',     2000,   1000,     500,   [['gtceu:aluminium_dust', 2*1.5], ['gtceu:manganese_dust', 3*1.5], ['gtceu:silicon_dust', 3*1.5]],                              [['gtceu:oxygen', 12000*1.5]],                                                           []],
        ['opal',            2000,   1000,     500,   [['gtceu:silicon_dioxide_dust', 1*30], ['tfc:powder/kaolinite', 1]],                                                            [],                                                                                      []],
        ['yellow_garnet',   2000,   1000,     500,   [['gtceu:andradite_dust', 5*2], ['gtceu:grossular_dust', 8*2], ['gtceu:uvarovite_dust', 3*2]],                                  [],                                                                                      []],
        ['armalcolite',     2000,   1000,     500,   [['gtceu:magnesium_dust', 1*7.5], ['gtceu:ilmenite_dust', 1*7.5]],                                                              [['gtceu:oxygen', 2000*7.5]],                                                            []],
        ['realgar',         2000,   1000,     500,   [['gtceu:arsenic_dust', 1*15], ['gtceu:sulfur_dust', 1*15]],                                                                    [],                                                                                      []],
        //['',     2000,   1000,     500,   [['', ], ['', ], ['',]],  [['', ]],      []],
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