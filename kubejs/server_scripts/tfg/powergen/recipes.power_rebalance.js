function registerTFGPowerRebalance(event) {

    /*
    Every changes to power cost are gathered here, only for gtceu recipes and not any custom recipes.
    Some recipes that are already changed somewhere else obviously won't fit here. Only for EU change.

    global.modifyRecipe(event, "", {
        newId: "tfg:",
        eut: GTValues.VHA[GTValues.LV]
    })

    */

    // Only lowered to VHA as it's a very fast recipe. Perfect example on when to use a Battery Buffer
    global.modifyRecipe(event, "gtceu:centrifuge/centrifuging_tfc_salt_water", {
        newId: "tfg:centrifuging_tfc_salt_water",
        eut: GTValues.VHA[GTValues.LV]
    })

    // Same reasonning, use Battery Buffer
    global.modifyRecipe(event, "gtceu:electrolyzer/decomposition_electrolyzing_salt", {
        newId: "tfg:decomposition_electrolyzing_salt",
        eut: GTValues.VHA[GTValues.LV]
    })

    // Lower one of the bottleneck drastically
    global.modifyRecipe(event, "gtceu:centrifuge/decomposition_centrifuging__flint", {
        newId: "tfg:decomposition_centrifuging__flint",
        eut: GTValues.VA[GTValues.ULV]
    })

    // Sodium Persuflate buff as Iron 3 Chloride is just so much better
    global.modifyRecipe(event, "gtceu:electrolyzer/sodium_bisulfate_electrolysis", {
        newId: "tfg:sodium_bisulfate_electrolysis",
        eut: GTValues.VA[GTValues.ULV]
    })

    // Make it more valuable and to get Hydrochloric and Sodium Persuflate way cheaper
    global.modifyRecipe(event, "gtceu:large_chemical_reactor/sodium_bisulfate_from_salt", {
        newId: "tfg:sodium_bisulfate_from_salt",
        eut: GTValues.VA[GTValues.ULV]
    })

    // Make it more valuable and to get Hydrochloric and Sodium Persuflate way cheaper
    global.modifyRecipe(event, "gtceu:large_chemical_reactor/sodium_bisulfate_from_hydroxide", {
        newId: "tfg:sodium_bisulfate_from_hydroxide",
        eut: GTValues.VA[GTValues.ULV]
    })

}