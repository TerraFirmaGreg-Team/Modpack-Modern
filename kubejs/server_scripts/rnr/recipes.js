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
//#endregion

//#region Mattock Mold
    event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('tfg:mattock_head_extruder_mold', [
			'  C',
			'BA ',
			'   '
		], {
			A: 'gtceu:empty_mold',
			B: '#forge:tools/files',
			C: '#forge:tools/hammers'
		})
	).id('tfg:shaped/mattock_head_extruder_mold')

    event.recipes.gtceu.forming_press('tfg:forming_press/mattock_head_extruder_mold')
		.itemInputs('gtceu:empty_mold')
		.notConsumable('tfg:mattock_head_extruder_mold')
		.itemOutputs('tfg:mattock_head_extruder_mold')
		.duration(120)
		.EUt(30)

    event.recipes.gtceu.macerator('tfg:part_grinding/mattock_head_extruder_mold')
	    .itemInputs('tfg:mattock_head_extruder_mold')
	    .itemOutputs('4x gtceu:steel_dust')
	    .duration(224)
	    .EUt(7)

    event.recipes.gtceu.arc_furnace('tfg:part_grinding/mattock_head_extruder_mold')
	    .itemInputs('tfg:mattock_head_extruder_mold')
        .inputFluids(Fluid.of('gtceu:oxygen', 224))
	    .itemOutputs('4x gtceu:steel_ingot')
	    .duration(224)
	    .EUt(7)

    event.recipes.gtceu.extruder('tfg:extruder/mattock_head/copper')
		.itemInputs('minecraft:copper_ingot')
		.notConsumable('tfg:mattock_head_extruder_mold')
		.itemOutputs('rnr:metal/mattock_head/copper')
		.duration(378)
		.EUt(30)

    event.recipes.gtceu.extruder('tfg:extruder/mattock_head/bronze')
		.itemInputs('gtceu:bronze_ingot')
		.notConsumable('tfg:mattock_head_extruder_mold')
		.itemOutputs('rnr:metal/mattock_head/bronze')
		.duration(456)
		.EUt(30)

    event.recipes.gtceu.extruder('tfg:extruder/mattock_head/bismuth_bronze')
		.itemInputs('gtceu:bismuth_bronze_ingot')
		.notConsumable('tfg:mattock_head_extruder_mold')
		.itemOutputs('rnr:metal/mattock_head/bismuth_bronze')
		.duration(552)
		.EUt(30)

    event.recipes.gtceu.extruder('tfg:extruder/mattock_head/black_bronze')
		.itemInputs('gtceu:black_bronze_ingot')
		.notConsumable('tfg:mattock_head_extruder_mold')
		.itemOutputs('rnr:metal/mattock_head/black_bronze')
		.duration(588)
		.EUt(30)

    event.recipes.gtceu.extruder('tfg:extruder/mattock_head/wrought_iron')
		.itemInputs('gtceu:wrought_iron_ingot')
		.notConsumable('tfg:mattock_head_extruder_mold')
		.itemOutputs('rnr:metal/mattock_head/wrought_iron')
		.duration(336)
		.EUt(30)

    event.recipes.gtceu.extruder('tfg:extruder/mattock_head/steel')
		.itemInputs('gtceu:steel_ingot')
		.notConsumable('tfg:mattock_head_extruder_mold')
		.itemOutputs('rnr:metal/mattock_head/steel')
		.duration(366)
		.EUt(30)

    event.recipes.gtceu.extruder('tfg:extruder/mattock_head/black_steel')
		.itemInputs('gtceu:black_steel_ingot')
		.notConsumable('tfg:mattock_head_extruder_mold')
		.itemOutputs('rnr:metal/mattock_head/black_steel')
		.duration(384)
		.EUt(30)

    event.recipes.gtceu.extruder('tfg:extruder/mattock_head/blue_steel')
		.itemInputs('gtceu:blue_steel_ingot')
		.notConsumable('tfg:mattock_head_extruder_mold')
		.itemOutputs('rnr:metal/mattock_head/blue_steel')
		.duration(414)
		.EUt(30)

    event.recipes.gtceu.extruder('tfg:extruder/mattock_head/red_steel')
		.itemInputs('gtceu:red_steel_ingot')
		.notConsumable('tfg:mattock_head_extruder_mold')
		.itemOutputs('rnr:metal/mattock_head/red_steel')
		.duration(450)
		.EUt(30)
//#endregion
};