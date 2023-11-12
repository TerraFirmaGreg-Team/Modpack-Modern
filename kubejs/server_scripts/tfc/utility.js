// priority: 0

const customWelding = (event, [input1, input2], result, tier) => {
    event.custom({
        type: "tfc:welding",
        first_input: {
            tag: input1
        },
        second_input: {
            tag: input2
        },
        result: {
            item: result
        },
        tier: tier,
    })
}

const customHeating = (event, input1, [result, amount], temperature) => {
    event.custom({
        type: "tfc:heating",
        ingredient: {
            tag: input1
        },
        result_fluid: {
            fluid: result,
            amount: amount
        },
        temperature: temperature
    })
}

const customAnvil = (event, input1, [result, count], tier, [firstRule, secondRule, thirdRule]) => {
    event.custom({
        type: "tfc:anvil",
        input: {
            tag: input1
        },
        result: {
            item: result,
            count: count
        },
        tier: tier,
        rules: [
            firstRule,
            secondRule,
            thirdRule
        ]
    })
}

// Кастомная температура плавления 

const customHeatLevel = (event, input1, heat_capacity, forging_temperature, welding_temperature) => {
    event.custom({
        ingredient: {
            item: input1
        },
        heat_capacity: heat_capacity,
        forging_temperature: forging_temperature,
        welding_temperature: welding_temperature
    })
}

const addQuernRecipe = (event, input, output) => {
    event.custom({
        type: "tfc:quern",
        ingredient: input,
        result: output
    })
}