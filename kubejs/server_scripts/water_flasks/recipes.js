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

    //#region Кожанная фласка

    event.recipes.gtceu.assembler('tfg:water_flasks/leather_flask')             
        .itemInputs('3x #forge:leather', '2x #forge:string')
        .circuit(1)
        .itemOutputs('waterflasks:leather_flask')
        .duration(250)
        .EUt(16)

    event.recipes.gtceu.assembler('tfg:water_flasks/leather_flask_repair')             
        .itemInputs('waterflasks:broken_leather_flask', '#forge:leather', '2x #forge:string')
        .circuit(2)
        .itemOutputs('waterflasks:leather_flask')
        .duration(250)
        .EUt(16)

    //#endregion

    //#region Железная фласка

    event.recipes.gtceu.assembler('tfg:water_flasks/iron_flask')             
        .itemInputs('tfc:burlap_cloth', '#forge:string', '#forge:leather', '#forge:plates/wrought_iron')
        .circuit(1)
        .itemOutputs('waterflasks:iron_flask')
        .duration(250)
        .EUt(16)

    event.recipes.gtceu.assembler('tfg:water_flasks/iron_flask_repair')             
        .itemInputs('waterflasks:broken_iron_flask', 'tfc:burlap_cloth', '#forge:string', '#forge:leather')
        .circuit(2)
        .itemOutputs('waterflasks:iron_flask')
        .duration(250)
        .EUt(16)

    //#endregion
}