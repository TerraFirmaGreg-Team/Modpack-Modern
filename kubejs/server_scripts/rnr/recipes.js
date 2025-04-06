const registerRnrRecipes = (event) => {
//#region Recipes
    event.recipes.gtceu.assembler('rnr:assembler/base_course')
		.itemInputs('1x rnr:crushed_base_course', '1x #tfc:dirt')
		.itemOutputs('2x rnr:base_course')
        .circuit(7)
		.duration(20)
		.EUt(10)
    
    event.recipes.gtceu.assembler('rnr:assembler/crushed_base_course')
		.itemInputs('1x #forge:gravel', '1x #rnr:loose_rock_items')
		.itemOutputs('8x rnr:crushed_base_course')
        .circuit(7)
		.duration(20)
		.EUt(10)

    global.TFC_STONE_TYPES.forEach(stone => {
        event.recipes.gtceu.assembler(`rnr:assembler/flagstone/${stone}`)
		    .itemInputs(`tfc:rock/loose/${stone}`)
		    .itemOutputs(`2x rnr:flagstone/${stone}`)
            .circuit(7)
		    .duration(20)
		    .EUt(10)

        event.recipes.gtceu.assembler(`rnr:assembler/flagstone/mossy_${stone}`)
		    .itemInputs(`tfc:rock/mossy_loose/${stone}`)
		    .itemOutputs(`2x rnr:flagstone/${stone}`)
            .circuit(7)
		    .duration(20)
		    .EUt(10)
    });

    global.SAND_COLORS.forEach(sand => {
        event.recipes.gtceu.assembler(`rnr:assembler/flagstone/${sand}_sandstone`)
		    .itemInputs(`tfc:raw_sandstone/${sand}`)
		    .itemOutputs(`8x rnr:flagstone/${sand}_sandstone`)
            .circuit(7)
		    .duration(20)
		    .EUt(10)
    });

	event.smelting(
		'1x rnr:terracotta_roof_tile',
		'rnr:unfired_terracotta_roof_tile'
	).id('rnr:smelting/unfired_terracotta_roof_tile')

	event.smelting(
		'1x rnr:ceramic_roof_tile',
		'rnr:unfired_roof_tile'
	).id('rnr:smelting/unfired_roof_tile')
};