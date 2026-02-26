// priority: 0

function registerTFGGemSlurriesProcessing(event) {

    const $ChanceLogic = Java.loadClass('com.gregtechceu.gtceu.api.recipe.chance.logic.ChanceLogic')

    function slurryProcessing(event, inputId, output, amount) {
        event.recipes.gtceu.coal_liquefaction_tower(`tfg:dirty_${output}_slurry_${linuxUnfucker(inputId)}`)
            .itemInputs(Item.of(inputId))
            .perTick(true)
		    .chancedFluidInput(Fluid.of('gtceu:hydrogen', 10), 1000, 0)
		    .perTick(false)
            .outputFluids(Fluid.of(`tfg:dirty_${output}_slurry`, amount))
            .duration(20 * 50)
            .EUt(GTValues.VA[GTValues.LV]);
    }

    const gemMaterials = [
        [GTMaterials.Emerald,    'emerald',     { dust: 100, gem: 300, flawless: 600, exquisite: 1200 }],
        [GTMaterials.Sapphire,   'sapphire',    { dust: 100, gem: 300, flawless: 600, exquisite: 1200 }],
        [GTMaterials.Ruby,       'ruby',        { dust: 100, gem: 300, flawless: 600, exquisite: 1200 }],
        [GTMaterials.Diamond,    'diamond',     { dust: 100, gem: 300, flawless: 600, exquisite: 1200 }],
        [GTMaterials.Apatite,    'apatite',     { dust: 100, gem: 300, flawless: 600, exquisite: 1200 }],
        [GTMaterials.Spessartine,'spessartine', { dust: 100, gem: 300, flawless: 600, exquisite: 1200 }],
    ];

    gemMaterials.forEach(([material, output, amounts]) => {
        slurryProcessing(event, ChemicalHelper.get(TagPrefix.dust,         material, 1), output, amounts.dust);
        slurryProcessing(event, ChemicalHelper.get(TagPrefix.gem,          material, 1), output, amounts.gem);
        slurryProcessing(event, ChemicalHelper.get(TagPrefix.gemFlawless,  material, 1), output, amounts.flawless);
        slurryProcessing(event, ChemicalHelper.get(TagPrefix.gemExquisite, material, 1), output, amounts.exquisite);
    });


function slurryCentrifuging(event, name, itemOutputs, fluidOutputs, chancedOutputs) {
    const recipe = event.recipes.gtceu.centrifuge(`tfg:dirty_${name}_slurry_centrifuge`)
        .inputFluids(Fluid.of(`tfg:dirty_${name}_slurry`, 1000))
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

const GEM_CENTRIFUGE = [
    ['emerald',     [['gtceu:beryllium_dust', 3], ['gtceu:aluminium_dust', 2], ['gtceu:silicon_dust', 6]], [['gtceu:oxygen', 18000]], [['gtceu:ilmenite_dust', 10, 0]]],
    ['sapphire',    [['gtceu:aluminium_dust', 2*6]], [['gtceu:oxygen', 3000*6]], [['gtceu:ilmenite_dust', 200, 0], ['gtceu:iron_dust', 200, 0], ['gtceu:vanadium_dust', 200, 0]]],
    ['ruby',        [['gtceu:chromium_dust', 1*6], ['gtceu:aluminium_dust', 2*6]], [['gtceu:oxygen', 3000*6]], [['gtceu:ilmenite_dust', 200, 0], ['gtceu:iron_dust', 200, 0], ['gtceu:vanadium_dust', 200, 0]]],
    ['diamond',     [['gtceu:carbon_dust', 64], ['gtceu:graphite_dust', 1]], [], []],
    ['apatite',     [['gtceu:calcium_dust', 5*3], ['gtceu:phosphorus_dust', 3*3]], [['gtceu:chlorine', 1000*3]], []],
    ['spessartine', [['gtceu:aluminium_dust', 2*1.5], ['gtceu:manganese_dust', 3*1.5], ['gtceu:silicon_dust', 3*1.5]], [['gtceu:oxygen', 12000*1.5]], []],
];

GEM_CENTRIFUGE.forEach(([name, itemOutputs, fluidOutputs, chancedOutputs]) => slurryCentrifuging(event, name, itemOutputs, fluidOutputs, chancedOutputs));
}