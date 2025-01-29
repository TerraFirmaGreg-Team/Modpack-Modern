// priority: 0

const generateMixerRecipe = (event, input, fluid_input, output, circuit, fluid_output, duration, EUt, rpm, id) => {
    const recipe1 = event.recipes.gtceu.mixer(id)             
        .itemInputs(input)
        .inputFluids(fluid_input)
        .itemOutputs(output)
        .outputFluids(fluid_output)
        .duration(duration)
        .EUt(EUt)

    const recipe2 = event.recipes.gtceu.create_mixer(id)             
        .itemInputs(input)
        .inputFluids(fluid_input)
        .itemOutputs(output)
        .outputFluids(fluid_output)
        .duration(duration)
        .EUt(EUt)
        .rpm(rpm)

    if (circuit != null) {
        recipe1.circuit(circuit)
        recipe2.circuit(circuit)
    }
}

const generateCutterRecipe = (event, input, circuit, output, duration, EUt, id) => {
    const recipe1 = event.recipes.gtceu.cutter(`tfg:${id}`)             
        .itemInputs(input)
        .inputFluids(Fluid.of('minecraft:water', 4))
        .itemOutputs(output)
        .duration(duration)
        .EUt(EUt)

    event.recipes.createCutting(output, input)
        .id(`tfg:cutting/${id}`)


    if (circuit != null) {
        recipe1.circuit(circuit)
    }
}

const generateGreenHouseRecipe = (event, input, fluid_amount, output, id) => {
    // event.remove({id: 'gtceu:greenhouse/' + id})
    // Без удобрения
    event.recipes.gtceu.greenhouse(id)
        .itemInputs(input)
        .circuit(1)
        .inputFluids(Fluid.of('minecraft:water', fluid_amount))
        .itemOutputs(output)
        .chancedOutput(input, 7500, 0)
        .chancedOutput(input, 5000, 0)
        .duration(64000)
        .EUt(128)

    // С удобрением
    event.recipes.gtceu.greenhouse(`${id}_fertilized`)
        .itemInputs(input)
        .itemInputs('8x gtceu:fertilizer')
        .circuit(2)
        .inputFluids(Fluid.of('minecraft:water', fluid_amount))
        .itemOutputs(output)
        .chancedOutput(input, 8500, 0)
        .chancedOutput(input, 6000, 0)
        .duration(16000)
        .EUt(256)
}