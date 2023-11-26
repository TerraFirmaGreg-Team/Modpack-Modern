// priority: 0

const registerTreeTapRecipes = (event) => {
    
    event.remove({ id: 'treetap:tap' })

    // TreeTap
    addAnvilRecipe(event,
        'tfg:recipes/treetap',
        { tag: 'forge:ingots/copper' },
        { item: 'treetap:tap' },
        1,
        [ "draw_not_last", "hit_not_last", "shrink_last" ]
    )

    // Latex
    event.custom({
        type: "treetap:tap_extract",
        log: {
          "item": "tfc:wood/log/kapok"
        },
        processing_time: 9600,
        metal_result: {
          item: "gtceu:latex_bucket"
        },
        wooden_result: {
          item: "tfc:wooden_bucket",
          nbt: "{fluid: {FluidName: \"gtceu:latex\", Amount: 1000}}"
        },
        life_cycle: [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0],
        collect_bucket: true,
        fluid_color: "#FBB982",
        conditions: [
          {
            type: "forge:mod_loaded",
            modid: "tfc"
          }
        ]
    })
}