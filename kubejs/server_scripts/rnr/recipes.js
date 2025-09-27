"use strict";

const registerRnrRecipes = (event) => {
	event.remove({input: 'rnr:concrete_powder'})
	event.remove({id: 'rnr:crafting/concrete_powder'})

//#region Recipes
    event.recipes.gtceu.assembler('rnr:assembler/base_course')
		.itemInputs('1x rnr:crushed_base_course', '1x #tfc:dirt')
		.itemOutputs('2x rnr:base_course')
        .circuit(7)
		.duration(20)
		.EUt(GTValues.VA[GTValues.ULV])
    
    event.recipes.gtceu.assembler('rnr:assembler/crushed_base_course')
		.itemInputs('1x #forge:gravel', '1x #rnr:loose_rock_items')
		.itemOutputs('8x rnr:crushed_base_course')
        .circuit(7)
		.duration(20)
		.EUt(GTValues.VA[GTValues.ULV])

    global.TFC_STONE_TYPES.forEach(stone => {
        event.recipes.gtceu.cutter(`rnr:assembler/flagstone/${stone}`)
		    .itemInputs(`tfc:brick/${stone}`)
		    .itemOutputs(`2x rnr:flagstone/${stone}`)
		    .duration(20)
		    .EUt(GTValues.VA[GTValues.ULV])

        event.recipes.gtceu.cutter(`rnr:assembler/flagstone/mossy_${stone}`)
		    .itemInputs(`tfc:rock/mossy_loose/${stone}`)
		    .itemOutputs(`2x rnr:flagstone/${stone}`)
		    .duration(20)
		    .EUt(GTValues.VA[GTValues.ULV])
    });

    global.SAND_COLORS.forEach(sand => {
        event.recipes.gtceu.assembler(`rnr:assembler/flagstone/${sand}_sandstone`)
		    .itemInputs(`tfc:raw_sandstone/${sand}`)
		    .itemOutputs(`8x rnr:flagstone/${sand}_sandstone`)
            .circuit(7)
		    .duration(20)
		    .EUt(GTValues.VA[GTValues.ULV])
    });

	event.smelting(
		'1x rnr:terracotta_roof_tile',
		'rnr:unfired_terracotta_roof_tile'
	).id('rnr:smelting/unfired_terracotta_roof_tile')

	event.smelting(
		'1x rnr:ceramic_roof_tile',
		'rnr:unfired_roof_tile'
	).id('rnr:smelting/unfired_roof_tile')

	event.recipes.gtceu.mixer('rnr:mixer/wet_concrete_mix')
		.inputFluids('gtceu:concrete 192', "#tfg:clean_water 808")
		.outputFluids('rnr:concrete 1000')
        .circuit(7)
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])
};