// priority: 0

const registerGTCEuRecipeTypes = (event) => {
    event.create('greenhouse')
        .category('greenhouse')
        .setEUIO('in')
        .setMaxIOSize(3, 4, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)

    event.create('alternator')
        .category('alternator')
        .setEUIO('out')
        .setMaxIOSize(1, 0, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
        .setMaxTooltips(6)
		
		
	event.create('nether_dome')
		.category('nether_dome')
		.setEUIO('in')
		.setMaxIOSize(1, 1, 1, 1)
		.setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_GAS_COLLECTOR, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FIRE)
		
	event.create('end_dome')
		.category('end_dome')
		.setEUIO('in')
		.setMaxIOSize(1, 1, 1, 1)
		.setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_GAS_COLLECTOR, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FIRE)
}

