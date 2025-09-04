// priority: 0

const registerTFGNuclearMaterials = (event) => {

/*    event.create('mysterious_ooze')
        .fluid()
        .color(0x500bbf)
        .fluidTemp(69420)
		.dust()
        .cableProperties(GTValues.V[GTValues.LV], 69, 0, true) // Voltage, Amperage, EU loss, Is Superconductor.
        .gem(2, 4000) 
        .element(GTElements.C) 
        .ore(2, 3) 
        .color(0x7D2DDB)
		.iconSet(GTMaterialIconSet.LIGNITE)
		.ingot()
        .components('1x andesite', '1x iron')
        .color(0x839689)
		.iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR)
*/

    //#region Fluid

    event.create('dense_steam')
        .gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(3730))
        .components('2x hydrogen', '1x oxygen')
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('radioactive_steam')
        .gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(3730))
        .components('2x hydrogen', '1x oxygen')
        .formula("H20(?)")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('radioactive_waste')
        .gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(3730))
        .formula("(?)")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('irradiated_steam')
        .gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(4250))
        .formula("(?)")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('heavy_water')
        .fluid()
        .components('2x deuterium', '1x oxygen')
        .iconSet(GTMaterialIconSet.FINE)
        .color(0xB5B9FF)
        .secondaryColor(0x81FFF9)

    event.create('semiheavy_water')
        .fluid()
        .components('1x deuterium','1x hydrogen', '1x oxygen')
        .iconSet(GTMaterialIconSet.FINE)
        .color(0xb5d4ff)
        .secondaryColor(0x81FFF9)

    event.create('uranium_waste')
        .liquid(new GTFluidBuilder().customStill().temperature(3850))
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .iconSet(GTMaterialIconSet.FINE)
        .color(0xB5B9FF)
        .secondaryColor(0x81FFF9)

    event.create('nuclear_waste')
        .liquid(new GTFluidBuilder().customStill().temperature(3850))
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .formula('(ThU(?)')

    event.create('dirty_hexafluorosilicic_acid')
        .liquid(new GTFluidBuilder().attribute(GTFluidAttributes.ACID))
        //.liquid(320)
        .formula('H2SiF6(?)')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .color(0xe6fafb)
        .secondaryColor(0xb5fdff)
        .iconSet(GTMaterialIconSet.getByName('thick_fluid'))

    event.create('martian_sludge')
        .liquid(new GTFluidBuilder().temperature(4239))
        .formula('(?)')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .color(0xd86f27)
        .secondaryColor(0xecd7c9)
        .iconSet(GTMaterialIconSet.getByName('bullshit'))

    event.create('dioxygen_difluoride')
        .fluid()
        .components('2x oxygen', '2x fluorine')
        .iconSet(GTMaterialIconSet.FINE)
        .color(0xffa500)
        .secondaryColor(0xffffff)

    event.create('tritiated_water')
        .fluid()
        .components('2x tritium', '1x oxygen')
        .iconSet(GTMaterialIconSet.FINE)
        .color(0xb2c3e7)

    // FLiBe Line

    event.create('raw_rich_brine')
        .liquid(new GTFluidBuilder().customStill().temperature(293))

    event.create('hot_iodine_brine')
        .liquid(new GTFluidBuilder().customStill().temperature(293))
        .formula('HIMgCl(?)')

    event.create('brominated_iodine_vapor')
        .gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(412))
        .formula('HI(?)')

    event.create('basic_bromine_exhaust')
        .gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(406))

    event.create('dirty_flibe')
        .liquid(new GTFluidBuilder().customStill().temperature(293))
        .formula('FLiBe(?)')

    event.create('flibe')
        .liquid(new GTFluidBuilder().customStill().temperature(293))
        .formula('FLiBe')

    event.create('hot_flibe')
        .liquid(new GTFluidBuilder().customStill().temperature(3293))
        .formula('FLiBe')

    //#endregion

    //#region Dust

    event.create('tfg:nuclear_residue')
        .dust()
        .formula('(?)')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .color(0x332816)
        .secondaryColor(0x674c24)
        .iconSet(GTMaterialIconSet.RADIOACTIVE)

    event.create('tfg:oxidized_nuclear_residue')
        .dust()
        .formula('U?O?(?)')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .color(0x286529)
        .secondaryColor(0x012702)
        .iconSet(GTMaterialIconSet.RADIOACTIVE)

    event.create('tfg:refined_nuclear_residue')
        .dust()
        .formula('U?(?)')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .color(0x82c383)
        .secondaryColor('0xffffff')
        .iconSet(GTMaterialIconSet.RADIOACTIVE)

    // FLiBe Dusts

    event.create('lithium_carbonate')
        .dust()
        .components('2x lithium', '1x carbon', '3x oxygen')
        .formula('Li2CO3')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .color(0xffffff)
        .secondaryColor(0xb7b9bd)
        .iconSet(GTMaterialIconSet.GLASS)

    event.create('lithium_fluoride')
        .gem()
        .components('1x lithium', '1x fluorine')
        .formula('LiF')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.NO_UNIFICATION)
        .color(0xffffff)
        .secondaryColor(0xb7b9bd)
        .iconSet(GTMaterialIconSet.FLINT)

    event.create('tetrafluoroberyllate')
        .gem()
        .components('1x beryllium', '4x fluorine')
        .formula('BeF4')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.NO_UNIFICATION)
        .color(0xdcdee1)
        .secondaryColor(0xb7b9bd)
        .iconSet(GTMaterialIconSet.OPAL)

    //#endregion

    //#region Ingots

    event.create('thorium_230')
        .ingot()
        .element(GTElements.get("thorium_230"))
        .iconSet(GTMaterialIconSet.RADIOACTIVE)
		.color(0x3b2f37)
		.secondaryColor(0xECECEC)
        .radioactiveHazard(1000000)

    event.create("thorium_232")
        .ingot()
        .element(GTElements.get("thorium_232"))
        .iconSet(GTMaterialIconSet.METALLIC)
        .color(0x694c66)
        .secondaryColor('0xFFFFFF')
        .radioactiveHazard(1000)

    //#endregion

    //#region Fuel Pellet

    event.create('uranium_pellet')
        .ingot()
        .element(GTElements.U)
        .iconSet(GTMaterialIconSet.METALLIC)
        .color(0x216614)
        .radioactiveHazard(1000000)
        .flags(GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES, GTMaterialFlags.NO_SMELTING)

    event.create('thorium_pellet')
        .ingot()
        .element(GTElements.Th)
        .iconSet(GTMaterialIconSet.METALLIC)
        .color(0x631e5a)
        .radioactiveHazard(100000)
        .flags(GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES, GTMaterialFlags.NO_SMELTING)

    event.create('plutonium_pellet')
        .ingot()
        .element(GTElements.Pu)
        .iconSet(GTMaterialIconSet.METALLIC)
        .color(0xc91414)
        .radioactiveHazard(10000000)
        .flags(GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES, GTMaterialFlags.NO_SMELTING)

    event.create('tbu-232_pellet')
        .ingot()
        .iconSet(GTMaterialIconSet.RADIOACTIVE)
        .color(0xaa55ba)
        .secondaryColor(0xECECEC)
        .radioactiveHazard(10000000)
        .flags(GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES, GTMaterialFlags.NO_SMELTING)

    //#endregion

    }
