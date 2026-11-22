// priority: 0
"use strict";

function registerTFGMicrobialCultivatorRecipes(event) {
    // dummy display recipe
    event.recipes.tfg.microbial_cultivation('tfg:microbial_cultivation/bacteria')
        .itemInputs('tfg:filled_dna_syringe')
        .itemOutputs('tfg:dirty_dna_syringe')
        .outputFluids(
            Fluid.of('tfg:photolithoautotroph', 1),
            Fluid.of('tfg:photolithoheterotroph', 1),
            Fluid.of('tfg:photoorganoautotroph', 1),
            Fluid.of('tfg:photoorganoheterotroph', 1),
            Fluid.of('tfg:chemolithoautotroph', 1),
            Fluid.of('tfg:chemolithoheterotroph', 1),
            Fluid.of('tfg:chemoorganoautotroph', 1),
            Fluid.of('tfg:chemoorganoheterotroph', 1)
        )
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.IV]);
}
