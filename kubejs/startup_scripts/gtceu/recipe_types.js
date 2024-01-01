// priority: 0

const registerGTCEuRecipeTypes = (event) => {
    event.create('greenhouse')
        .category('greenhouse')
        .setEUIO('in')
        .setMaxIOSize(3, 4, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
}