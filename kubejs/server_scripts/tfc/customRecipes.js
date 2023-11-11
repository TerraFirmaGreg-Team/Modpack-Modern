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

const customHeating = (event,input1,[result,amount],temperature) => {
    event.custom({
        type: "tfc:heating",
        ingredient: {
          item: input1
        },
        result_fluid: {
          fluid: result,
          amount: amount
        },
        temperature: temperature
      })
}

const customAnvil = (event,input1,result,tier,[firstRule,secondRule,thirdRule]) => {
    event.custom({
        type: "tfc:anvil",
        input: {
          tag: input1
        },
        result: {
          item: result
        },
        tier: tier,
        rules: [
          firstRule,
          secondRule,
          thirdRule
        ]
      })
}