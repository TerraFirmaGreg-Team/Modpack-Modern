// priority: 0

const registerGregTechMachines = (event) => {

    // Регистрация мультиблока теплицы
    event.create('greenhouse', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('greenhouse')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCCCCCC", "XXXFXXX", "XXXFXXX", "XXXFXXX", "XXXFXXX", "XXXFXXX", "XXXFXXX", "XXXFXXX", "   F   ")
            .aisle("CDDDDDC", "X#####X", "X#####X", "X#####X", "X#####X", "X#####X", "X#####X", "X#####X", " XXFXX ")
            .aisle("CDDDDDC", "X#####X", "X#####X", "X#####X", "X#####X", "X#####X", "X#####X", "X#####X", " XXFXX ")
            .aisle("CDDDDDC", "F#####F", "F#####F", "F#####F", "F#####F", "F#####F", "F#####F", "F#####F", "FFFFFFF")
            .aisle("CDDDDDC", "X#####X", "X#####X", "X#####X", "X#####X", "X#####X", "X#####X", "X#####X", " XXFXX ")
            .aisle("CDDDDDC", "X#####X", "X#####X", "X#####X", "X#####X", "X#####X", "X#####X", "X#####X", " XXFXX ")
            .aisle("CCCYCCC", "XXXFXXX", "XXXFXXX", "XXXFXXX", "XXXFXXX", "XXXFXXX", "XXXFXXX", "XXXFXXX", "   F   ")
            .where('X', Predicates.blocks('ae2:quartz_glass'))
            .where('F', Predicates.frames('steel'))
            .where('D', Predicates.blocks('tfc:dirt/silt').or(Predicates.blocks('tfc:dirt/loam')).or(Predicates.blocks('tfc:dirt/sandy_loam')).or(Predicates.blocks('tfc:dirt/silty_loam')).or(Predicates.blocks('tfc:grass/silt')).or(Predicates.blocks('tfc:grass/loam')).or(Predicates.blocks('tfc:grass/sandy_loam')).or(Predicates.blocks('tfc:grass/silty_loam')))
            .where('C', Predicates.blocks('gtceu:steel_machine_casing').or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('#', Predicates.air())
            .where(' ', Predicates.any())
            .where('Y', Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/implosion_compressor', false)

    // Регистрация мультиблока (хз как перевести, короче конвертит энергию физическую в энергию электрическую)
    event.create('alternator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('alternator')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .generator(true)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CWC", "CWC", "#W#")
            .aisle("CWC", "K#E", "CWC")
            .aisle("CWC", "CWA", "#W#")
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where('W', Predicates.blocks(GTBlocks.COIL_CUPRONICKEL.get()))
            .where("C", Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()))
            .where('#', Predicates.any())
            .where('K', Predicates.abilities(PartAbility.INPUT_KINETIC).setExactLimit(1))
            .where('E', Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(1))
            .build()
        )
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/implosion_compressor", false
        )
}