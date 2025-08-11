// priority: 0
"use strict";

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

    // Рецепты заполнения fluid cells жидким льдом
    // Recipes for filling fluid cells with liquid ice
    fluidCells.forEach(cell => {
        event.recipes.gtceu.canner(`tfclunchbox:fill_${cell.name}_cell_with_liquid_ice`)
            .itemInputs(cell.id)
            .inputFluids(Fluid.of('gtceu:ice', cell.capacity))
            .itemOutputs(Item.of(cell.id, `{Fluid:{Amount:${  cell.capacity  },FluidName:"gtceu:ice"}}`))
            .duration(Math.max(16, Math.floor(cell.capacity / 64)))
            .EUt(GTValues.VA[GTValues.LV]);
    });
}