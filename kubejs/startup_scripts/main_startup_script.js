// priority: 1

const $SimpleTieredMachine = Java.loadClass('com.gregtechceu.gtceu.api.machine.SimpleTieredMachine')

/**
 * Событие регистрации предметов.
 */
StartupEvents.registry('item', (event) => {})

/**
 * Событие регистрации блоков.
 */
StartupEvents.registry('block', (event) => {})

/**
 * Событие регистрации жидкостей.
 */
StartupEvents.registry('fluid', (event) => {})

/**
 * Событие регистрации типов рецептов GTCEu.
 */
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('saw_mill')
        .category('tfg') // Used in the GTlib / LDlib ui editor
        .setEUIO('in')
        .setMaxIOSize(2, 2, 0, 0) // Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setSlotOverlay(false, false, GuiTextures.CIRCUIT_OVERLAY)
        .setSlotOverlay(true, false, false, GuiTextures.PIPE_OVERLAY_2)
        .setSlotOverlay(true, false, true, GuiTextures.DUST_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_LATHE, FillDirection.LEFT_TO_RIGHT)
	    .setSound(GTSoundEntries.CUT)
})

/**
 * Событие регистрации машин GTCEu.
 */
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('saw_mill', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .editableUI($SimpleTieredMachine.EDITABLE_UI_CREATOR.apply(new ResourceLocation("gtceu"), GTRecipeTypes.get('saw_mill')))    
        .recipeType('saw_mill')
})