// priority: 0

const registerFirmaCivRecipes = (event) => {
    
    //#region Удаление рецептов

    event.remove({ id: '/firmaciv:quern/' })
    event.remove({ id: 'firmaciv:anvil/copper_bolt' })

    //#endregion

    //#region Cannon
    event.recipes.tfc.heating('firmaciv:cannon', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 1872))
        .id(`firmaciv:heating/cannon`)
    //#endregion

    //#region Sextant
    event.recipes.gtceu.assembler('tfg:firmaciv/sextant')             
        .itemInputs('#forge:plates/brass', '2x #forge:rods/brass', '#forge:glass')
        .circuit(10)
        .itemOutputs('firmaciv:sextant')
        .EUt(4).duration(75)

    event.recipes.tfc.heating('firmaciv:sextant', 930)
        .resultFluid(Fluid.of('gtceu:brass', 288))
        .id(`firmaciv:heating/sextant`)
    //#endregion

    //#region Unfinished Sextant
    event.recipes.tfc.heating('firmaciv:unfinished_sextant', 930)
        .resultFluid(Fluid.of('gtceu:brass', 288))
        .id(`firmaciv:heating/unfinished_sextant`)
    //#endregion

    //#region Navigator Timepiece
    event.recipes.gtceu.assembler('tfg:firmaciv/nav_clock')             
        .itemInputs('2x #forge:plates/brass', '4x #forge:rods/brass', '2x #forge:glass')
        .circuit(11)
        .itemOutputs('firmaciv:nav_clock')
        .EUt(4).duration(75)

    event.recipes.tfc.heating('firmaciv:nav_clock', 930)
        .resultFluid(Fluid.of('gtceu:brass', 576))
        .id(`firmaciv:heating/nav_clock`)
    //#endregion

    //#region Unfinished Navigator Timepiece
    event.recipes.tfc.heating('firmaciv:unfinished_nav_clock', 930)
        .resultFluid(Fluid.of('gtceu:brass', 288))
        .id(`firmaciv:heating/unfinished_nav_clock`)
    //#endregion

    //#region Barometer
    event.recipes.gtceu.assembler('tfg:firmaciv/barometer')             
        .itemInputs('2x #forge:plates/brass', '2x #forge:rods/brass', '#forge:glass')
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .circuit(12)
        .itemOutputs('firmaciv:barometer')
        .duration(75)
        .EUt(4)

    event.recipes.tfc.heating('firmaciv:barometer', 930)
        .resultFluid(Fluid.of('gtceu:brass', 216))
        .id(`firmaciv:heating/barometer`)
    //#endregion

    //#region Unfinished Barometer
    event.recipes.tfc.heating('firmaciv:unfinished_barometer', 930)
        .resultFluid(Fluid.of('gtceu:brass', 144))
        .id(`firmaciv:heating/unfinished_barometer`)
    //#endregion

    //#region Compass
    event.recipes.gtceu.canner('tfg:firmaciv/compass')             
        .itemInputs('minecraft:redstone', '#forge:plates/wrought_iron')
        .circuit(1)
        .itemOutputs('firmaciv:firmaciv_compass')
        .duration(100)
        .EUt(4)
    //#endregion

    //#region Cannon Barrel
    event.recipes.gtceu.assembler('tfg:firmaciv/cannon_barrel')             
        .itemInputs('#forge:double_plates/wrought_iron')
        .circuit(11)
        .itemOutputs('firmaciv:cannon_barrel')
        .duration(75)
        .EUt(4)

    event.recipes.tfc.heating('firmaciv:cannon_barrel', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 288))
        .id(`firmaciv:heating/cannon_barrel`)
    //#endregion
}