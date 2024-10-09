// priority: 0

const registerWaterFlasksRecipes = (e) => {
    
    // Декрафт Unfinished Water Flask
    e.recipes.tfc.heating('waterflasks:unfinished_iron_flask', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 144))
        .id(`tfg:heating/wrought_iron_unfinished_iron_flask`)

    // Декрафт Broken Water Flask
    e.recipes.tfc.heating('waterflasks:broken_iron_flask', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 144))
        .id(`tfg:heating/wrought_iron_broken_iron_flask`)

    // Декрафт Water Flask
    e.recipes.tfc.heating('waterflasks:iron_flask', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 144))
        .useDurability(true)
        .id(`tfg:heating/wrought_iron_iron_flask`)

    //#region Кожанная фласка
    e.recipes.gtceu.assembler('tfg:leather_flask')             
        .itemInputs('3x #forge:leather', '2x #forge:string')
        .circuit(1)
        .itemOutputs('waterflasks:leather_flask')
        .EUt(16).duration(250)

    e.recipes.gtceu.assembler('tfg:leather_flask_repair')             
        .itemInputs('waterflasks:broken_leather_flask', '#forge:leather', '2x #forge:string')
        .circuit(2)
        .itemOutputs('waterflasks:leather_flask')
        .EUt(16).duration(250)
    //#endregion

    //#region Железная фласка
    e.recipes.gtceu.assembler('tfg:iron_flask')             
        .itemInputs('tfc:burlap_cloth', '#forge:string', '#forge:leather', '#tfg:all_iron_plates')
        .circuit(1)
        .itemOutputs('waterflasks:iron_flask')
        .EUt(16).duration(250)

    e.recipes.gtceu.assembler('tfg:iron_flask_repair')             
        .itemInputs('waterflasks:broken_iron_flask', 'tfc:burlap_cloth', '#forge:string', '#forge:leather')
        .circuit(2)
        .itemOutputs('waterflasks:iron_flask')
        .EUt(16).duration(250)
    //#endregion
}