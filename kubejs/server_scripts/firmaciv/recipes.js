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
    // Cannon Barrel
    // Cannonball
    // Cleat

    //#endregion

    // Sextant
    // Navigator Timepiece
    // Barometer
    // Compass
    // Acnhor
    // Cannon Barrel
    // Cannonball
    // Oarlock
    // Cleat

    // Compass
    event.recipes.gtceu.canner('tfg:firmaciv/compass')             
        .itemInputs('minecraft:redstone', '#forge:plates/wrought_iron')
        .circuit(1)
        .itemOutputs('firmaciv:firmaciv_compass')
        .duration(100)
        .EUt(4)
}