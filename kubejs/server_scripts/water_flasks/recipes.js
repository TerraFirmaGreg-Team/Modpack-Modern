// priority: 0

const registerWaterFlasksRecipes = (event) => {
    
    // Декрафт Unfinished Water Flask
    event.recipes.tfc.heating('waterflasks:unfinished_iron_flask', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 144))
        .id(`waterflasks:heating/wrought_iron_unfinished_iron_flask`)

    // Декрафт Broken Water Flask
    event.recipes.tfc.heating('waterflasks:broken_iron_flask', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 144))
        .id(`waterflasks:heating/wrought_iron_broken_iron_flask`)

    // Декрафт Water Flask
    event.recipes.tfc.heating('waterflasks:iron_flask', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 144))
        .useDurability(true)
        .id(`waterflasks:heating/wrought_iron_iron_flask`)
        
}