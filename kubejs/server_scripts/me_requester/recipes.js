// priority: 0

const registerMERequesterRecipes = (event) => {
    
    //#region ME Requester
    event.remove({ id: 'merequester:requester' })
    
    event.recipes.gtceu.assembler('tfg:merequester/merequester')             
        .itemInputs('#ae2:interface', '2x ae2:crafting_accelerator', '4x #gtceu:circuits/ev', '4x #forge:plates/copper', '#forge:rods/amethyst')
        .itemOutputs('merequester:requester')
        .EUt(506).duration(760)
    //#endregion
    
    //#region ME Requester Terminal
    // TODO: Assembler recipe
    event.remove({ id: 'merequester:requester_terminal' })

    event.shaped('merequester:requester_terminal', [
        'ABC',
        'DED',
        'FGF'
    ], {
        A: '#forge:tools/screwdrivers',
        B: 'ae2:terminal',
        C: '#forge:tools/mallets',
        D: '#forge:rods/steel',
        E: 'merequester:requester',
        F: '#forge:plates/steel',
        G: 'ae2:engineering_processor'
    }).id('tfg:shaped/merequester/requester_terminal')
    //#endregion
}