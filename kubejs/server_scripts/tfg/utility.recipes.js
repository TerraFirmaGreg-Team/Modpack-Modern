// priority: 10
    // How to call this function anywhere in KubeJS

    // Always add an ID, whatever you want without adding the machine name if you don't want to see namespace:machine/machine/my_recipe

    /*
    // Modify only duration et EUt
    global.modifyRecipe(event, "gtceu:electric_blast_furnace/some_recipe", {
        newId: "tfg:some_recipe",
        duration: 20 * 100,
        eut: GTValues.VA[GTValues.EV]
    })
    
    // Replace a fluid if needed - ALWAYS USE A TAG BECAUSE GREGTECH REGISTERS THEIR RECIPE IN JSON WITH TAG
    global.modifyRecipe(event, "gtceu:assembler/transistor", {
        newId: "tfg:transistor",
        fluidReplacements: { "forge:polyethylene": "gtceu:silicone_rubber" }
    })

    // Modify item input quantity
    global.modifyRecipe(event, "gtceu:assembler/some_recipe", {
        newId: "tfg:some_recipe",
        itemInputs: { "gtceu:copper_plate": 4 }
    })

    // Modify fluid input quantity
    global.modifyRecipe(event, "gtceu:chemical_reactor/some_recipe", {
        newId: "tfg:some_recipe",
        fluidInputs: { "forge:sulfuric_acid": 500 }
    })

    // Modify item output quantity
    global.modifyRecipe(event, "gtceu:electric_blast_furnace/some_recipe", {
        newId: "tfg:some_recipe",
        itemOutputs: { "gtceu:steel_ingot": 2 }
    })

    // Modify fluid output quantity
    global.modifyRecipe(event, "gtceu:chemical_reactor/some_recipe", {
        newId: "tfg:some_recipe",
        fluidOutputs: { "gtceu:sulfuric_acid": 1000 }
    })

    // Modify blast furnace temperature (override)
    // Works for both electric_blast_furnace and alloy_blast_smelter (data.ebf_temp)
    global.modifyRecipe(event, "gtceu:electric_blast_furnace/some_recipe", {
        newId: "tfg:some_recipe",
        blastFurnaceTemp: 2700
    })

    // An exemple of all together
    global.modifyRecipe(event, "gtceu:circuit_assembler/some_recipe", {
        newId: "tfg:my_modified_recipe",
        duration: 20 * 50,
        eut: GTValues.VA[GTValues.HV],
        fluidReplacements: { "forge:soldering_alloy": "tfg:woods_metal" },
        itemInputs: { "gtceu:copper_plate": 2 },
        fluidInputs: { "forge:soldering_alloy": 144 }
    })

    // An exemple regarding the Transistor with the itemInputs not existing - It just skips it
    global.modifyRecipe(event, "gtceu:assembler/transistor", {
        newId: "tfg:transistor",
        duration: 20 * 50,
        eut: GTValues.VA[GTValues.HV],
        fluidReplacements: { "forge:polyethylene": "gtceu:silicone_rubber" },
        itemInputs: { "gtceu:silicon_plate": 2 },
        fluidInputs: { "gtceu:silicone_rubber": 1000 }
    })

    // An exemple for alloy_blast_smelter with temperature override
    global.modifyRecipe(event, "gtceu:alloy_blast_smelter/red_alloy", {
        newId: "tfg:red_alloy",
        fluidOutputs: { "gtceu:red_alloy": 720 },
        blastFurnaceTemp: 2700
    })
    */

global.modifyRecipe = function(event, recipeId, options) {
    var matches = event.findRecipes({ id: recipeId })
    if (!matches || matches.length === 0) return

    for (var i = 0; i < matches.length; i++) {
        var javaRecipe = matches[i]
        javaRecipe.serialize()
        var recipeJson = JSON.parse(javaRecipe.json.toString())

        var machineName = javaRecipe.getId().toString().split(":")[1].split("/")[0]
        var recipeName = recipeId.split("/").slice(1).join("/")
        var newId = options.newId || (`tfg:${machineName}/${recipeName}`)

        // Extract Temp
        if (recipeJson.recipeConditions) {
            for (var ci0 = 0; ci0 < recipeJson.recipeConditions.length; ci0++) {
                var cond0 = recipeJson.recipeConditions[ci0]
                if (cond0.type === "blastFurnaceTemp") {
                    recipeJson.blastFurnaceTemp = cond0.temperature
                }
            }
        }
        if (!recipeJson.blastFurnaceTemp && recipeJson.data && recipeJson.data.ebf_temp) {
            recipeJson.blastFurnaceTemp = recipeJson.data.ebf_temp
        }

        // Duration and EUt
        if (options.duration) recipeJson.duration = options.duration
        if (options.eut) recipeJson.tickInputs.eu[0].content = options.eut

        // Override blast furnace temperature
        if (options.blastFurnaceTemp) recipeJson.blastFurnaceTemp = options.blastFurnaceTemp

        // Replace a fluid
        if (options.fluidReplacements && recipeJson.inputs && recipeJson.inputs.fluid) {
            for (var fr = 0; fr < recipeJson.inputs.fluid.length; fr++) {
                var frValues = recipeJson.inputs.fluid[fr].content.value
                for (var frv = 0; frv < frValues.length; frv++) {
                    var frVal = frValues[frv]
                    var frKey = frVal.tag || frVal.fluid
                    if (frKey && options.fluidReplacements[frKey]) {
                        delete frVal.tag
                        frVal.fluid = options.fluidReplacements[frKey]
                    }
                }
            }
        }

        // Modify amount of item input
        if (options.itemInputs && recipeJson.inputs && recipeJson.inputs.item) {
            for (var key in options.itemInputs) {
                for (var ii = 0; ii < recipeJson.inputs.item.length; ii++) {
                    var ing = recipeJson.inputs.item[ii].content.ingredient
                    if (ing && ((ing.item && ing.item === key) || (ing.tag && ing.tag === key))) {
                        recipeJson.inputs.item[ii].content.count = options.itemInputs[key]
                    }
                }
            }
        }

        // Modify amount of fluid input
        if (options.fluidInputs && recipeJson.inputs && recipeJson.inputs.fluid) {
            for (var fkey in options.fluidInputs) {
                for (var fi = 0; fi < recipeJson.inputs.fluid.length; fi++) {
                    var val = recipeJson.inputs.fluid[fi].content.value[0]
                    if ((val.fluid && val.fluid === fkey) || (val.tag && val.tag === fkey)) {
                        recipeJson.inputs.fluid[fi].content.amount = options.fluidInputs[fkey]
                    }
                }
            }
        }

        // Modify amount of item output
        if (options.itemOutputs && recipeJson.outputs && recipeJson.outputs.item) {
            for (var okey in options.itemOutputs) {
                for (var oi2 = 0; oi2 < recipeJson.outputs.item.length; oi2++) {
                    var outIng2 = recipeJson.outputs.item[oi2].content.ingredient || recipeJson.outputs.item[oi2].content
                    if (outIng2.item && outIng2.item === okey) {
                        recipeJson.outputs.item[oi2].content.count = options.itemOutputs[okey]
                    }
                }
            }
        }

        // Modify amount of fluid output
        if (options.fluidOutputs && recipeJson.outputs && recipeJson.outputs.fluid) {
            for (var fokey in options.fluidOutputs) {
                for (var fo = 0; fo < recipeJson.outputs.fluid.length; fo++) {
                    var outVal = recipeJson.outputs.fluid[fo].content.value[0]
                    if (outVal && outVal.fluid && outVal.fluid === fokey) {
                        recipeJson.outputs.fluid[fo].content.amount = options.fluidOutputs[fokey]
                    }
                }
            }
        }

        javaRecipe.remove()

        var newRecipe = event.recipes.gtceu[machineName](newId)
            .duration(recipeJson.duration)
            .EUt(recipeJson.tickInputs.eu[0].content)

        // Rebuild item inputs
        if (recipeJson.inputs && recipeJson.inputs.item) {
            for (var ii2 = 0; ii2 < recipeJson.inputs.item.length; ii2++) {
                var ing2 = recipeJson.inputs.item[ii2].content.ingredient
                var count = recipeJson.inputs.item[ii2].content.count || 1
                if (ing2 && typeof ing2 === "object" && "tag" in ing2) {
                    newRecipe.itemInputs(`${count}x #${ing2.tag}`)
                } else if (ing2 && typeof ing2 === "object" && "item" in ing2) {
                    newRecipe.itemInputs(Item.of(ing2.item, count))
                }
            }
        }

        // Rebuild fluid inputs
        if (recipeJson.inputs && recipeJson.inputs.fluid) {
            for (var fi2 = 0; fi2 < recipeJson.inputs.fluid.length; fi2++) {
                var fluidVal = recipeJson.inputs.fluid[fi2].content.value[0]
                var amount = recipeJson.inputs.fluid[fi2].content.amount
                if (fluidVal && fluidVal.fluid) {
                    newRecipe.inputFluids(Fluid.of(fluidVal.fluid, amount))
                } else if (fluidVal && fluidVal.tag) {
                    newRecipe.inputFluids(Fluid.of(`gtceu:${fluidVal.tag.split(":")[1]}`, amount))
                }
            }
        }

        // Rebuild item outputs
        if (recipeJson.outputs && recipeJson.outputs.item) {
            for (var oi = 0; oi < recipeJson.outputs.item.length; oi++) {
                var outIng = recipeJson.outputs.item[oi].content.ingredient || recipeJson.outputs.item[oi].content
                var outCount = recipeJson.outputs.item[oi].content.count || 1
                if (outIng && typeof outIng === "object" && "item" in outIng) {
                    newRecipe.itemOutputs(Item.of(outIng.item, outCount))
                }
            }
        }

        // Rebuild fluid outputs
        if (recipeJson.outputs && recipeJson.outputs.fluid) {
            for (var fo2 = 0; fo2 < recipeJson.outputs.fluid.length; fo2++) {
                var fluidOutVal = recipeJson.outputs.fluid[fo2].content.value[0]
                var outAmount = recipeJson.outputs.fluid[fo2].content.amount
                if (fluidOutVal && fluidOutVal.fluid) {
                    newRecipe.outputFluids(Fluid.of(fluidOutVal.fluid, outAmount))
                } else if (fluidOutVal && fluidOutVal.tag) {
                    newRecipe.outputFluids(Fluid.of(`gtceu:${fluidOutVal.tag.split(":")[1]}`, outAmount))
                }
            }
        }

        // Recipe conditions
        if (recipeJson.recipeConditions) {
            for (var ci = 0; ci < recipeJson.recipeConditions.length; ci++) {
                var cond = recipeJson.recipeConditions[ci]
                if (cond.type === "cleanroom") {
                    newRecipe.cleanroom(CleanroomType[cond.cleanroom.toUpperCase()])
                } else if (cond.type === "blastFurnaceTemp") {
                    newRecipe.blastFurnaceTemp(recipeJson.blastFurnaceTemp || cond.temperature)
                } else if (cond.type === "research" && cond.research && cond.research.length > 0) {
                    var research = cond.research[0]
                    newRecipe.researchWithoutRecipe(research.researchId, research.dataItem.id)
                }
            }
        }

        // Temperature via data.ebf_temp — only applied if not recipeConditions
        if (recipeJson.blastFurnaceTemp && (!recipeJson.recipeConditions || !recipeJson.recipeConditions.some(function(c) { return c.type === "blastFurnaceTemp" }))) {
            newRecipe.blastFurnaceTemp(recipeJson.blastFurnaceTemp)
        }
    }
}