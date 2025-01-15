// priority: 0

const registerTFGRecipes = (e) => {

    //#region Copper Coil Block

    e.recipes.gtceu.assembler(`tfg:copper_coil_block`)             
        .itemInputs('8x gtceu:copper_double_wire', '8x #forge:foils/copper')
        .inputFluids(Fluid.of('gtceu:tin_alloy', 144))
        .itemOutputs('tfg:copper_coil_block')
        .EUt(16).duration(200)

    e.recipes.createSequencedAssembly([
        'tfg:copper_coil_block', 
    ], 'gtceu:copper_frame', [
        e.recipes.createDeploying('tfg:unfinished_copper_coil_block', ['tfg:unfinished_copper_coil_block', 'gtceu:copper_double_wire']),
        e.recipes.createDeploying('tfg:unfinished_copper_coil_block', ['tfg:unfinished_copper_coil_block', '#forge:foils/copper']),
    ]).transitionalItem('tfg:unfinished_copper_coil_block').loops(8).id('tfg:sequenced_assembly/copper_coil_block')

    //#endregion
}