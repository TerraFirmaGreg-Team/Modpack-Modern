// priority: 0

const generateMixerRecipe = (event, input, fluid_input, output, fluid_output, duration, EUt, rpm, id) => {
    event.recipes.gtceu.mixer(id)             
        .itemInputs(input)
        .inputFluids(fluid_input)
        .itemOutputs(output)
        .outputFluids(fluid_output)
        .duration(duration)
        .EUt(EUt)

    event.recipes.gtceu.create_mixer(id)             
        .itemInputs(input)
        .inputFluids(fluid_input)
        .itemOutputs(output)
        .outputFluids(fluid_output)
        .duration(duration)
        .EUt(EUt)
        .rpm(rpm)
}

const generateCutterRecipe = (event, input, circuit, output, duration, EUt, id) => {
    // Вот зачем я, скажете вы, делаю тут всякие костыли, 
    // потому что блядский разработчик GTCEu не может исправить баги своего мода
    // Я так устал..

    const recipe1 = event.recipes.gtceu.cutter(id + "_water")             
        .itemInputs(input)
        .inputFluids(Fluid.of('minecraft:water', 4))
        .itemOutputs(output)
        .duration(duration)
        .EUt(EUt)

    const recipe2 = event.recipes.gtceu.cutter(id + "_dist_water")             
        .itemInputs(input)
        .inputFluids(Fluid.of('gtceu:distilled_water', 3))
        .itemOutputs(output)
        .duration(duration)
        .EUt(EUt)

    const recipe3 = event.recipes.gtceu.cutter(id + "_lubricant")             
        .itemInputs(input)
        .inputFluids(Fluid.of('gtceu:lubricant', 1))
        .itemOutputs(output)
        .duration(duration)
        .EUt(EUt)

    
    if (circuit != null) {
        recipe1.circuit(circuit)
        recipe2.circuit(circuit)
        recipe3.circuit(circuit)
    }
}