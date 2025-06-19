// priority: 0

function registerTFCLunchBoxRecipes(event) {

    const fluidCells = [
        { id: 'gtceu:universal_fluid_cell', capacity: 1000, name: 'universal' },
        { id: 'gtceu:fluid_cell', capacity: 1000, name: 'basic' },
        { id: 'gtceu:steel_fluid_cell', capacity: 8000, name: 'steel' },
        { id: 'gtceu:aluminium_fluid_cell', capacity: 32000, name: 'aluminium' },
        { id: 'gtceu:stainless_steel_fluid_cell', capacity: 64000, name: 'stainless_steel' },
        { id: 'gtceu:titanium_fluid_cell', capacity: 128000, name: 'titanium' },
        { id: 'gtceu:tungstensteel_fluid_cell', capacity: 512000, name: 'tungstensteel' },
        { id: 'gtceu:glass_vial', capacity: 1000, name: 'glass_vial' }
    ];

    // Убираем оригинальные рецепты капсул
    // Remove original capsule recipes
    event.remove({ id: 'tfclunchbox:universal_capsule' })
    event.remove({ id: 'tfclunchbox:fill_capsule_with_ice' })

    // Новые рецепты для капсул через GregTech машины
    // New capsule recipes using GregTech machines
    event.recipes.gtceu.assembler('tfclunchbox:universal_capsule')
        .itemInputs('1x #forge:foils/red_steel', '1x #forge:rings/sterling_silver')
        .itemOutputs('tfclunchbox:universal_capsule')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    // Рецепты заполнения fluid cells жидким льдом
    // Recipes for filling fluid cells with liquid ice
    fluidCells.forEach(cell => {
        event.recipes.gtceu.canner(`tfclunchbox:fill_${cell.name}_cell_with_liquid_ice`)
            .itemInputs(cell.id)
            .inputFluids(Fluid.of('gtceu:ice', cell.capacity))
            .itemOutputs(Item.of(cell.id, '{Fluid:{Amount:' + cell.capacity + ',FluidName:"gtceu:ice"}}'))
            .duration(Math.max(16, Math.floor(cell.capacity / 64)))
            .EUt(GTValues.VA[GTValues.LV]);
    });

    // Рецепт заполнения универсальной капсулы жидким льдом
    // Recipe for filling the universal capsule with liquid ice
    event.recipes.gtceu.canner('tfclunchbox:fill_universal_capsule_with_ice')
        .itemInputs('tfclunchbox:universal_capsule')
        .inputFluids(Fluid.of('gtceu:ice', 45 * 144))
        .itemOutputs(Item.of('tfclunchbox:universal_capsule', '{Durability:1000}').withName(Text.translate('item.tfclunchbox.universal_capsule.filled')))
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    // Рецепт заполнения капсулы твердым льдом
    // Recipe for filling the capsule with solid ice
    event.recipes.gtceu.canner('tfclunchbox:fill_capsule_with_ice_solid')
        .itemInputs('tfclunchbox:universal_capsule', '10x minecraft:packed_ice')
        .itemOutputs(Item.of('tfclunchbox:universal_capsule', '{Durability:1000}').withName(Text.translate('item.tfclunchbox.universal_capsule.filled')))
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
}