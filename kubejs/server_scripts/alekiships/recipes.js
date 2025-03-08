const registerAlekishipsRecipes = (event) =>
{
    //#region Oarlock
    event.recipes.gtceu.assembler('tfg:alekiships/oarlock')             
        .itemInputs('#forge:double_plates/wrought_iron')
        .circuit(13)
        .itemOutputs('alekiships:oarlock')
        .duration(75)
        .EUt(4)

    event.recipes.tfc.heating('alekiships:oarlock', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 288))
        .id(`alekiships:heating/oarlock`)
    //#endregion

    //#region Cleat
    event.recipes.gtceu.assembler('tfg:firmaciv/cleat')             
        .itemInputs('#forge:double_plates/steel')
        .circuit(14)
        .itemOutputs('alekiships:cleat')
        .duration(75)
        .EUt(4)

    event.recipes.tfc.heating('alekiships:cleat', 1535)
        .resultFluid(Fluid.of('gtceu:steel', 288))
        .id(`alekiships:heating/cleat`)
    //#endregion

    //#region Anchor
    event.recipes.gtceu.assembler('tfg:alekiships/anchor')             
        .itemInputs('#forge:double_plates/steel')
        .circuit(10)
        .itemOutputs('alekiships:anchor')
        .duration(75)
        .EUt(4)

    event.recipes.tfc.heating('alekiships:anchor', 1535)
        .resultFluid(Fluid.of('gtceu:steel', 288))
        .id(`firmaciv:heating/anchor`)

    event.replaceOutput( 
        'gtceu:arc_furnace/arc_anchor',
        'gtceu:steel_ingot',
        '2x gtceu:steel_ingot')     
    
    event.replaceOutput(
        'gtceu:macerator/macerate_anchor',
        'gtceu:steel_dust',
        '2x gtceu:steel_dust')
    //#endregion

    //#region cannonball
    event.recipes.gtceu.assembler('tfg:alekiships/cannonball')             
        .itemInputs('#forge:double_plates/wrought_iron')
        .circuit(12)
        .itemOutputs('alekiships:cannonball')
        .duration(75)
        .EUt(4)

    event.recipes.tfc.heating('alekiships:cannonball', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 288))
        .id(`alekiships:heating/cannonball`)
    //#endregion
}