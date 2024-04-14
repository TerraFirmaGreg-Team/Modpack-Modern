// priority: 0

const registerFirmaCivRecipes = (event) => {
    
    event.remove({ id: '/firmaciv:quern/' })
    event.remove({ id: 'firmaciv:anvil/copper_bolt' })
    
    //#region Heating

    // Oarlock
    event.recipes.tfc.heating('firmaciv:oarlock', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 288))
        .id(`firmaciv:heating/oarlock`)

    // Anchor
    event.recipes.tfc.heating('firmaciv:anchor', 1535)
        .resultFluid(Fluid.of('gtceu:steel', 288))
        .id(`firmaciv:heating/anchor`)

    // Cannon Barrel
    event.recipes.tfc.heating('firmaciv:cannon_barrel', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 288))
        .id(`firmaciv:heating/cannon_barrel`)

    // Cannonball
    event.recipes.tfc.heating('firmaciv:cannonball', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 288))
        .id(`firmaciv:heating/cannonball`)

    // Cleat
    event.recipes.tfc.heating('firmaciv:cleat', 1535)
        .resultFluid(Fluid.of('gtceu:steel', 288))
        .id(`firmaciv:heating/cleat`)

    //#endregion

    // Sextant
    event.recipes.gtceu.assembler('tfg:firmaciv/sextant')             
        .itemInputs('2x #forge:plates/brass', '2x #forge:rods/brass')
        .circuit(10)
        .itemOutputs('firmaciv:sextant')
        .duration(75)
        .EUt(4)

    // Navigator Timepiece
    event.recipes.gtceu.assembler('tfg:firmaciv/navigator')             
        .itemInputs('2x #forge:plates/brass', '2x #forge:rods/brass')
        .circuit(11)
        .itemOutputs('firmaciv:nav_clock')
        .duration(75)
        .EUt(4)

    // Barometer
    event.recipes.gtceu.assembler('tfg:firmaciv/barometer')             
        .itemInputs('2x #forge:plates/brass', '2x #forge:rods/brass', '#forge:glass')
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .circuit(12)
        .itemOutputs('firmaciv:barometer')
        .duration(75)
        .EUt(4)

    // Anchor
    event.recipes.gtceu.assembler('tfg:firmaciv/anchor')             
        .itemInputs('#forge:double_plates/steel')
        .circuit(10)
        .itemOutputs('firmaciv:anchor')
        .duration(75)
        .EUt(4)

    // Cannon Barrel
    event.recipes.gtceu.assembler('tfg:firmaciv/cannon_barrel')             
        .itemInputs('#forge:double_plates/wrought_iron')
        .circuit(11)
        .itemOutputs('firmaciv:cannon_barrel')
        .duration(75)
        .EUt(4)
    
    // Cannonball
    event.recipes.gtceu.assembler('tfg:firmaciv/cannonball')             
        .itemInputs('#forge:double_plates/wrought_iron')
        .circuit(12)
        .itemOutputs('firmaciv:cannonball')
        .duration(75)
        .EUt(4)
    
    // Oarlock
    event.recipes.gtceu.assembler('tfg:firmaciv/oarlock')             
        .itemInputs('#forge:double_plates/wrought_iron')
        .circuit(13)
        .itemOutputs('firmaciv:oarlock')
        .duration(75)
        .EUt(4)

    // Cleat
    event.recipes.gtceu.assembler('tfg:firmaciv/cleat')             
        .itemInputs('#forge:double_plates/steel')
        .circuit(14)
        .itemOutputs('firmaciv:cleat')
        .duration(75)
        .EUt(4)

    // Compass
    event.recipes.gtceu.canner('tfg:firmaciv/compass')             
        .itemInputs('minecraft:redstone', '#forge:plates/wrought_iron')
        .circuit(1)
        .itemOutputs('firmaciv:firmaciv_compass')
        .duration(100)
        .EUt(4)
}