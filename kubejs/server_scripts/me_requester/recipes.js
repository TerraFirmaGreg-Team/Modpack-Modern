// priority: 0

const registerMERequesterRecipes = (event) => {
    
    event.remove({ id: 'merequester:requester' })

    // ME Requester
    event.recipes.gtceu.assembler('tfg:merequester/merequester')             
        .itemInputs('#ae2:interface', '2x ae2:crafting_accelerator', '4x #gtceu:circuits/ev', '4x #forge:plates/copper', '#forge:rods/amethyst')
        .itemOutputs('merequester:requester')
        .duration(760)
        .EUt(506)

    // ME Requester Terminal
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
    }).id('merequester:requester_terminal')
}