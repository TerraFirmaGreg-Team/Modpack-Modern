// priority: 0
"use strict";

function registerTFGMicrobialCultivatorBacteria() {
    const dairy = ["tfc:cow", "tfc:goat", "tfc:yak"];
    const wool = ["tfc:sheep", "tfc:alpaca", "tfc:musk_ox"];
    const oviparous = ["tfc:chicken", "tfc:duck", "tfc:quail"];
    const equine = ["tfc:horse", "tfc:donkey", "tfc:mule", "tfg:dromedary_camel", "tfg:bactrian_camel"];

    MicrobialCultivatorBacteria.register(dairy, [["tfg:chemolithoautotroph", 2], ["tfg:photolithoautotroph", 1]]);
    MicrobialCultivatorBacteria.register(wool, [["tfg:chemolithoheterotroph", 2], ["tfg:photolithoautotroph", 1]]);
    MicrobialCultivatorBacteria.register(oviparous, [["tfg:chemoorganoheterotroph", 2], ["tfg:photoorganoautotroph", 1]]);
    MicrobialCultivatorBacteria.register(equine, [["tfg:chemoorganoautotroph", 2], ["tfg:photoorganoautotroph", 1]]);
}

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
