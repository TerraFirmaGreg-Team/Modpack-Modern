const customWelding = (event,[input1,input2],result,tier) => {
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