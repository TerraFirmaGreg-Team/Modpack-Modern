// priority: 0

function registerTFGSupportRecipes(event) {

	// Concrete Supports
	event.recipes.gtceu.fluid_solidifier('tfg:gtceu/fluid_solidifier/reinforced_light_concrete_support')
		.inputFluids(Fluid.of('gtceu:concrete', 96))
		.itemOutputs('1x tfg:reinforced_light_concrete_support')
		.itemInputs('1x tfg:rebar_support')
		.duration(60)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('tfg:gtceu/assembler/reinforced_light_concrete_support')
		.inputFluids(Fluid.of('gtceu:concrete', 96))
		.itemOutputs('1x tfg:reinforced_light_concrete_support')
		.itemInputs('1x tfg:rebar_support')
		.duration(120)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.chemical_bath('tfg:gtceu/chemical_bath/reinforced_dark_concrete_support')
		.inputFluids(Fluid.of('tfc:black_dye', 10))
		.itemOutputs('1x tfg:reinforced_dark_concrete_support')
		.itemInputs('1x tfg:reinforced_light_concrete_support')
		.duration(60)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.chemical_bath('tfg:gtceu/chemical_bath/dark_concrete_support')
		.inputFluids(Fluid.of('tfc:black_dye', 10))
		.itemOutputs('1x tfg:dark_concrete_support')
		.itemInputs('1x tfg:light_concrete_support')
		.duration(60)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('8x tfg:light_concrete_support', [
			'AB ',
			'AC ',
			'AC '
		],{
			A: 'gtceu:light_concrete',
			B: '#tfc:chisels',
			C: 'tfc:mortar'
		}).id('tfg:shaped/light_concrete_support'))

	event.recipes.gtceu.assembler('tfg:gtceu/assembler/light_concrete_support')
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:concrete', 36))
		.itemOutputs('8x tfg:light_concrete_support')
		.itemInputs('3x gtceu:light_concrete')
		.duration(40)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('8x tfg:dark_concrete_support', [
			'AB ',
			'AC ',
			'AC '
		],{
			A: 'gtceu:dark_concrete',
			B: '#tfc:chisels',
			C: 'tfc:mortar'
		}).id('tfg:shaped/dark_concrete_support'))

	event.recipes.gtceu.assembler('tfg:gtceu/assembler/dark_concrete_support')
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:concrete', 36))
		.itemOutputs('8x tfg:dark_concrete_support')
		.itemInputs('3x gtceu:dark_concrete')
		.duration(40)
		.EUt(GTValues.VA[GTValues.ULV])

	// Stone Supports
	global.TFC_STONE_TYPES.forEach(stone => {
		event.recipes.tfc.damage_inputs_shaped_crafting(
			event.shaped(`8x tfg:${stone}_support`, [
				'AB ',
				'AC ',
				'AC '
			],{
				A: `tfc:rock/loose/${stone}`,
				B: '#tfc:chisels',
				C: 'tfc:mortar'
			}).id(`tfg:shaped/${stone}_support`))

		event.recipes.tfc.damage_inputs_shaped_crafting(
			event.shaped(`8x tfg:${stone}_support`, [
				'AB ',
				'AC ',
				'AC '
			],{
				A: `tfc:rock/mossy_loose/${stone}`,
				B: '#tfc:chisels',
				C: 'tfc:mortar'
			}).id(`tfg:shaped/mossy/${stone}_support`))

		event.recipes.gtceu.assembler(`tfg:gtceu/assembler/${stone}_support`)
			.circuit(4)
			.inputFluids(Fluid.of('gtceu:concrete', 36))
			.itemOutputs(`8x tfg:${stone}_support`)
			.itemInputs(`3x tfc:rock/loose/${stone}`)
			.duration(40)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.assembler(`tfg:gtceu/assembler/mossy/${stone}_support`)
			.circuit(4)
			.inputFluids(Fluid.of('gtceu:concrete', 36))
			.itemOutputs(`8x tfg:${stone}_support`)
			.itemInputs(`3x tfc:rock/mossy_loose/${stone}`)
			.duration(40)
			.EUt(GTValues.VA[GTValues.ULV])
	})
	
	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('8x tfg:travertine_support', [
			'AB ',
			'AC ',
			'AC '
		],{
			A: 'tfg:loose/dripstone',
			B: '#tfc:chisels',
			C: 'tfc:mortar'
		}).id('tfg:shaped/travertine_support'))

	event.recipes.gtceu.assembler('tfg:gtceu/assembler/travertine_support')
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:concrete', 36))
		.itemOutputs('8x tfg:travertine_support')
		.itemInputs('3x tfg:loose/dripstone')
		.duration(40)
		.EUt(GTValues.VA[GTValues.ULV])
	
	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('8x tfg:migmatite_support', [
			'AB ',
			'AC ',
			'AC '
		],{
			A: 'tfg:loose/deepslate',
			B: '#tfc:chisels',
			C: 'tfc:mortar'
		}).id('tfg:shaped/migmatite_support'))

	event.recipes.gtceu.assembler('tfg:gtceu/assembler/migmatite_support')
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:concrete', 36))
		.itemOutputs('8x tfg:migmatite_support')
		.itemInputs('3x tfg:loose/deepslate')
		.duration(40)
		.EUt(GTValues.VA[GTValues.ULV])
	
	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('8x tfg:pyroxenite_support', [
			'AB ',
			'AC ',
			'AC '
		],{
			A: 'beneath:blackstone_pebble',
			B: '#tfc:chisels',
			C: 'tfc:mortar'
		}).id('tfg:shaped/pyroxenite_support'))

	event.recipes.gtceu.assembler('tfg:gtceu/assembler/pyroxenite_support')
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:concrete', 36))
		.itemOutputs('8x tfg:pyroxenite_support')
		.itemInputs('3x beneath:blackstone_pebble')
		.duration(40)
		.EUt(GTValues.VA[GTValues.ULV])

	// Metal Supports
		event.shaped('8x tfg:rebar_support', [
			'BA ',
			'AC '
		],{
			A: ChemicalHelper.get(TagPrefix.rod, GTMaterials.Steel, 1),
			B: ChemicalHelper.get(TagPrefix.wireFine, GTMaterials.Steel, 1),
			C: '#forge:tools/wire_cutters'
		}).id('tfg:shaped/rebar_support')

	event.recipes.gtceu.assembler('tfg:gtceu/assembler/rebar_support')
		.circuit(4)
		.itemOutputs('8x tfg:rebar_support')
		.itemInputs(ChemicalHelper.get(TagPrefix.rod, GTMaterials.Steel, 2), ChemicalHelper.get(TagPrefix.wireFine, GTMaterials.Steel, 1))
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

    event.recipes.tfc.anvil(
        '1x tfg:steel_support',
        '#forge:double_ingots/steel',
        [
            'upset_last',
            'shrink_any'
        ]
    ).tier(4)
	.id('tfg:anvil/steel_support')

	event.recipes.gtceu.assembler('tfg:gtceu/assembler/steel_support')
		.circuit(4)
		.itemOutputs('4x tfg:steel_support')
		.itemInputs('2x #forge:double_ingots/steel')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])
		
	event.recipes.gtceu.macerator('tfg:macerator/recycling/steel_support')
		.itemInputs('tfg:steel_support')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.Steel, 2)
	)
		.duration(GTMaterials.Steel.getMass() * 2)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('tfg:arc_furnace/recycling/steel_support')
		.itemInputs('tfg:steel_support')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.nugget, GTMaterials.Steel, 4)
		)
		.duration(GTMaterials.Steel.getMass() * 4)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.extractor('tfg:extractor/recycling/steel_support')
		.itemInputs('tfg:steel_support')
		.outputFluids(Fluid.of('gtceu:steel', 64))
		.duration(GTMaterials.Steel.getMass() * 2)
		.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])
}