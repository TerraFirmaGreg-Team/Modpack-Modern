// priority: 0

const registerGTCEuMachines = (event) => {
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
    
}
