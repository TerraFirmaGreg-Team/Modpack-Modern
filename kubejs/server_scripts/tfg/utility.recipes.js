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

    // Modify circuit configuration
    global.modifyRecipe(event, "gtceu:some_machine/some_recipe", {
        newId: "tfg:some_recipe",
        circuit: 5
    })

    // Remove item inputs and always use a tag
    global.modifyRecipe(event, "gtceu:forming_press/press_hsss_turbine_rotor", {
        newId: "tfg:press_ssss_turbine_blade",
        removeItemInputs: ["forge:screws/hsss"]
    })

    global.modifyRecipe(event, "gtceu:mixer/some_recipe", {
	newId: "tfg:some_recipe",
	addFluidOutputs: { "gtceu:sulfuric_acid": 1000 }
    })

    */

    // Changes through Gtm8
    // capability keys are now namespaced: "gtceu:item", "gtceu:fluid", "gtceu:eu"
    // a fluid ingredient with a single value serializes "value" as an object instead of an array
    // EU content is a number (1A) or { voltage, amperage }
    // recipe condition types are namespaced: "gtceu:cleanroom", "gtceu:research"

function tfgCap(map, name) {
    if (!map) return undefined
    return map[`gtceu:${name}`] || map[name]
}

function tfgSetCap(map, name, value) {
    if (map[name] !== undefined && map[`gtceu:${name}`] === undefined) map[name] = value
    else map[`gtceu:${name}`] = value
}

function tfgFluidValues(content) {
    var v = content.value
    if (v === undefined || v === null) return []
    return Array.isArray(v) ? v : [v]
}

function tfgEuVoltage(content) {
    return (typeof content === "object" && content !== null) ? content.voltage : content
}

function tfgEuAmperage(content) {
    return (typeof content === "object" && content !== null && content.amperage) ? content.amperage : 1
}

function tfgConditionType(cond) {
    var t = String(cond.type)
    return t.indexOf(":") >= 0 ? t.split(":")[1] : t
}

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

        var inItems = tfgCap(recipeJson.inputs, "item")
        var inFluids = tfgCap(recipeJson.inputs, "fluid")
        var outItems = tfgCap(recipeJson.outputs, "item")
        var outFluids = tfgCap(recipeJson.outputs, "fluid")
        var tickEu = tfgCap(recipeJson.tickInputs, "eu")

        // Extract Temp
        if (recipeJson.recipeConditions) {
            for (var ci0 = 0; ci0 < recipeJson.recipeConditions.length; ci0++) {
                var cond0 = recipeJson.recipeConditions[ci0]
                if (tfgConditionType(cond0) === "blastFurnaceTemp") {
                    recipeJson.blastFurnaceTemp = cond0.temperature
                }
            }
        }
        if (!recipeJson.blastFurnaceTemp && recipeJson.data && recipeJson.data.ebf_temp) {
            recipeJson.blastFurnaceTemp = recipeJson.data.ebf_temp
        }

        // Duration and EUt
        var euVoltage = (tickEu && tickEu.length > 0) ? tfgEuVoltage(tickEu[0].content) : 0
        var euAmperage = (tickEu && tickEu.length > 0) ? tfgEuAmperage(tickEu[0].content) : 1
        if (options.duration) recipeJson.duration = options.duration
        if (options.eut) euVoltage = options.eut

        // Override blast furnace temperature
        if (options.blastFurnaceTemp) recipeJson.blastFurnaceTemp = options.blastFurnaceTemp

        // Override or add circuit
        if (options.circuit !== undefined) {
            if (!recipeJson.inputs) recipeJson.inputs = {}
            if (!inItems) {
                inItems = []
                tfgSetCap(recipeJson.inputs, "item", inItems)
            }
            var circuitSlot = null
            for (var cs = 0; cs < inItems.length; cs++) {
                if (inItems[cs].content.type === "gtceu:circuit") {
                    circuitSlot = inItems[cs]
                    break
                }
            }
            if (circuitSlot) {
                circuitSlot.content.configuration = options.circuit
            } else {
                inItems.push({
                    content: { type: "gtceu:circuit", configuration: options.circuit },
                    chance: 0, maxChance: 10000
                })
            }
        }

        // Replace a fluid
        if (options.fluidReplacements && inFluids) {
            for (var fr = 0; fr < inFluids.length; fr++) {
                var frValues = tfgFluidValues(inFluids[fr].content)
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

        // Remove item inputs (tag or item id)
        if (options.removeItemInputs && inItems) {
            inItems = inItems.filter(function(entry) {
                var ingR = entry.content.ingredient
                if (!ingR) return true // circuits, etc.
                var keyR = ingR.tag || ingR.item
                return options.removeItemInputs.indexOf(keyR) === -1
            })
        }

        // Modify amount of item input
        if (options.itemInputs && inItems) {
            for (var key in options.itemInputs) {
                for (var ii = 0; ii < inItems.length; ii++) {
                    var ing = inItems[ii].content.ingredient
                    if (ing && ((ing.item && ing.item === key) || (ing.tag && ing.tag === key))) {
                        inItems[ii].content.count = options.itemInputs[key]
                    }
                }
            }
        }

        // Modify amount of fluid input
        if (options.fluidInputs && inFluids) {
            for (var fkey in options.fluidInputs) {
                for (var fi = 0; fi < inFluids.length; fi++) {
                    var val = tfgFluidValues(inFluids[fi].content)[0]
                    if (val && ((val.fluid && val.fluid === fkey) || (val.tag && val.tag === fkey))) {
                        inFluids[fi].content.amount = options.fluidInputs[fkey]
                    }
                }
            }
        }

        // Modify amount of item output
        if (options.itemOutputs && outItems) {
            for (var okey in options.itemOutputs) {
                for (var oi2 = 0; oi2 < outItems.length; oi2++) {
                    var outIng2 = outItems[oi2].content.ingredient || outItems[oi2].content
                    if (outIng2.item && outIng2.item === okey) {
                        outItems[oi2].content.count = options.itemOutputs[okey]
                    }
                }
            }
        }

        // Modify amount of fluid output
        if (options.fluidOutputs && outFluids) {
            for (var fokey in options.fluidOutputs) {
                for (var fo = 0; fo < outFluids.length; fo++) {
                    var outVal = tfgFluidValues(outFluids[fo].content)[0]
                    if (outVal && outVal.fluid && outVal.fluid === fokey) {
                        outFluids[fo].content.amount = options.fluidOutputs[fokey]
                    }
                }
            }
        }

        javaRecipe.remove()

        var newRecipe = (event.recipes.tfg[machineName] || event.recipes.gtceu[machineName])(newId)
            .duration(recipeJson.duration)
        if (euVoltage > 0) newRecipe.EUt(euVoltage, euAmperage)

        // Rebuild item inputs
        var circuitConfig = null
        if (inItems) {
            for (var ii2 = 0; ii2 < inItems.length; ii2++) {
                var ing2 = inItems[ii2].content.ingredient
                var count = inItems[ii2].content.count || 1
                if (ing2 && typeof ing2 === "object" && "tag" in ing2) {
                    newRecipe.itemInputs(`${count}x #${ing2.tag}`)
                } else if (ing2 && typeof ing2 === "object" && "item" in ing2) {
                    newRecipe.itemInputs(Item.of(ing2.item, count))
                } else if (!ing2 && inItems[ii2].content.type === "gtceu:circuit") {
                    circuitConfig = inItems[ii2].content.configuration
                }
            }
        }

        // Add new item inputs
        if (options.addItemInputs) {
            for (var ai = 0; ai < options.addItemInputs.length; ai++) {
                newRecipe.itemInputs(options.addItemInputs[ai])
            }
        }

        // Add circuit after every other item input else it wasn't last on the recipe and it looks like shit
        if (circuitConfig !== null) {
            newRecipe.circuit(circuitConfig)
        }

        // Rebuild fluid inputs
        if (inFluids) {
            for (var fi2 = 0; fi2 < inFluids.length; fi2++) {
                var fluidVal = tfgFluidValues(inFluids[fi2].content)[0]
                var amount = inFluids[fi2].content.amount
                if (fluidVal && fluidVal.fluid) {
                    newRecipe.inputFluids(Fluid.of(fluidVal.fluid, amount))
                } else if (fluidVal && fluidVal.tag) {
                    newRecipe.inputFluids(Fluid.of(`gtceu:${fluidVal.tag.split(":")[1]}`, amount))
                }
            }
        }

        // Rebuild item outputs
        if (outItems) {
            for (var oi = 0; oi < outItems.length; oi++) {
                var outIng = outItems[oi].content.ingredient || outItems[oi].content
                var outCount = outItems[oi].content.count || 1
                if (outIng && typeof outIng === "object" && "item" in outIng) {
                    newRecipe.itemOutputs(Item.of(outIng.item, outCount))
                }
            }
        }

        // Rebuild fluid outputs
        if (outFluids) {
            for (var fo2 = 0; fo2 < outFluids.length; fo2++) {
                var fluidOutVal = tfgFluidValues(outFluids[fo2].content)[0]
                var outAmount = outFluids[fo2].content.amount
                if (fluidOutVal && fluidOutVal.fluid) {
                    newRecipe.outputFluids(Fluid.of(fluidOutVal.fluid, outAmount))
                } else if (fluidOutVal && fluidOutVal.tag) {
                    newRecipe.outputFluids(Fluid.of(`gtceu:${fluidOutVal.tag.split(":")[1]}`, outAmount))
                }
            }
        }

        // Add new fluid outputs
        if (options.addFluidOutputs) {
            for (var afo in options.addFluidOutputs) {
                newRecipe.outputFluids(Fluid.of(afo, options.addFluidOutputs[afo]))
            }
        }

        // Recipe conditions
        if (recipeJson.recipeConditions) {
            for (var ci = 0; ci < recipeJson.recipeConditions.length; ci++) {
                var cond = recipeJson.recipeConditions[ci]
                var condType = tfgConditionType(cond)
                if (condType === "cleanroom") {
                    newRecipe.cleanroom(CleanroomType[cond.cleanroom.toUpperCase()])
                } else if (condType === "blastFurnaceTemp") {
                    newRecipe.blastFurnaceTemp(recipeJson.blastFurnaceTemp || cond.temperature)
                } else if (condType === "research" && cond.research && cond.research.length > 0) {
                    var research = cond.research[0]
                    newRecipe.researchWithoutRecipe(research.researchId, research.dataItem.id)
                }
            }
        }

        // Temperature via data.ebf_temp only applied if not recipeConditions unsure about that part
        if (recipeJson.blastFurnaceTemp && (!recipeJson.recipeConditions || !recipeJson.recipeConditions.some(function(c) { return tfgConditionType(c) === "blastFurnaceTemp" }))) {
            newRecipe.blastFurnaceTemp(recipeJson.blastFurnaceTemp)
        }
    }
}