// priority: 0

const registerAlekiShipsRecipes = (e) => {
    
    e.remove({ id: 'alekiships:crafting/cannon' })
    
    //#region Oarlock
    e.remove({ id: 'alekiships:crafting/oarlock' })

    e.recipes.gtceu.assembler('tfg:alekiships/oarlock')             
        .itemInputs('#forge:double_plates/wrought_iron')
        .circuit(13)
        .itemOutputs('alekiships:oarlock')
        .EUt(4).duration(75)

    e.recipes.tfc.heating('alekiships:oarlock', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 288))
        .id(`tfg:heating/oarlock`)
    //#endregion

    //#region Cleat
    e.remove({ id: 'alekiships:crafting/cleat' })

    e.recipes.gtceu.assembler('tfg:alekiships/cleat')             
        .itemInputs('#forge:double_plates/steel')
        .circuit(14)
        .itemOutputs('alekiships:cleat')
        .EUt(4).duration(75)

    e.recipes.tfc.heating('alekiships:cleat', 1535)
        .resultFluid(Fluid.of('gtceu:steel', 288))
        .id(`tfg:heating/alekiships/cleat`)
    //#endregion

    //#region Anchor
    e.remove({ id: 'alekiships:crafting/anchor' })

    e.recipes.gtceu.assembler('tfg:alekiships/anchor')             
        .itemInputs('#forge:double_plates/steel')
        .circuit(10)
        .itemOutputs('alekiships:anchor')
        .EUt(4).duration(75)

    e.recipes.tfc.heating('alekiships:anchor', 1535)
        .resultFluid(Fluid.of('gtceu:steel', 288))
        .id(`tfg:heating/alekiships/anchor`)
    //#endregion

    //#region Cannonball
    e.remove({ id: 'alekiships:crafting/cannonball' })

    e.recipes.gtceu.assembler('tfg:alekiships/cannonball')             
        .itemInputs('#forge:double_plates/wrought_iron')
        .circuit(12)
        .itemOutputs('alekiships:cannonball')
        .EUt(4).duration(75)

    e.recipes.tfc.heating('alekiships:cannonball', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 288))
        .id(`tfg:heating/alekiships/cannonball`)
    //#endregion
}