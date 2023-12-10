// priority: 0

const registerFirmaLifeRecipes = (event) => {
    
    // Декрафт Jag Lid
    event.recipes.tfc.heating('tfc:jar_lid', 230)
        .resultFluid(Fluid.of('gtceu:tin', 9))
        .id(`tfc:heating/jar_lid`)
        
}