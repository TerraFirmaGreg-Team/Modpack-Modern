// priority: 0

const registerEntropyRecipe = (event, input, mode, output, id) => {
    event.custom({
        type: "ae2:entropy",
        input: input,
        mode: mode,
        output: output
    }).id(id)
}
