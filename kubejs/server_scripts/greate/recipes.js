// priority: 0

function registerGreateRecipes(event) {

	removeGreateRecipes(event);
	registerGreateRecyclingRecipes(event);

	event.replaceInput({ input: 'create:cogwheel'}, 'create:cogwheel', '#tfg:small_cogwheels')
	event.replaceInput({ input: 'create:large_cogwheel'}, 'create:large_cogwheel', '#tfg:large_cogwheels')
	event.replaceInput({ input: 'create:shaft'}, 'create:shaft', '#tfg:shafts')

	// #region Shafts

	event.shaped('4x greate:andesite_alloy_shaft', [
		'A ',
		' B'
	], {
		A: '#forge:tools/saws',
		B: '#forge:plates/black_bronze'
	}).id('greate:shaped/andesite_alloy_shaft_black_bronze')

	event.shaped('6x greate:andesite_alloy_shaft', [
		'A ',
		' B'
	], {
		A: '#forge:tools/saws',
		B: '#forge:plates/wrought_iron'
	}).id('greate:shaped/andesite_alloy_shaft')

	event.shaped('4x greate:andesite_alloy_shaft', [
		'A ',
		' B'
	], {
		A: '#forge:tools/saws',
		B: '#forge:plates/bronze'
	}).id('greate:shaped/andesite_alloy_shaft_bronze')

	event.shaped('4x greate:andesite_alloy_shaft', [
		'A ',
		' B'
	], {
		A: '#forge:tools/saws',
		B: '#forge:plates/bismuth_bronze'
	}).id('greate:shaped/andesite_alloy_shaft_bismuth_bronze')

	generateCutterRecipe(event, '#forge:plates/wrought_iron', '6x greate:andesite_alloy_shaft', 100, GTValues.VA[GTValues.ULV], 'andesite_alloy_shaft')
	generateCutterRecipe(event, '#forge:plates/steel', '6x greate:steel_shaft', 100, GTValues.VA[GTValues.ULV], 'steel_shaft')
	generateCutterRecipe(event, '#forge:plates/aluminium', '6x greate:aluminium_shaft', 100, GTValues.VA[GTValues.LV], 'aluminium_shaft')
	generateCutterRecipe(event, '#forge:plates/stainless_steel', '6x greate:stainless_steel_shaft', 100, GTValues.VA[GTValues.MV], 'stainless_steel_shaft')
	generateCutterRecipe(event, '#forge:plates/titanium', '6x greate:titanium_shaft', 100, GTValues.VA[GTValues.HV], 'titanium_shaft')

	// #endregion

	// #region Cogs

	event.shapeless('greate:andesite_alloy_cogwheel', ['greate:andesite_alloy_shaft', '#forge:small_gears/wood', '#forge:tools/hammers'])
		.id('greate:shapeless/andesite_alloy_cogwheel')
	event.shapeless('greate:large_andesite_alloy_cogwheel', ['greate:andesite_alloy_shaft', '#forge:gears/wood', '#forge:tools/hammers'])
		.id('greate:shapeless/large_andesite_alloy_cogwheel');

	// TODO: recycling recipes for these?
	event.shapeless('greate:steel_cogwheel', ['greate:steel_shaft', '#forge:small_gears/wrought_iron', '#forge:tools/wrenches'])
		.id('greate:shapeless/steel_cogwheel')
	event.shapeless('greate:large_steel_cogwheel', ['greate:steel_shaft', '#forge:gears/wrought_iron', '#forge:tools/wrenches'])
		.id('greate:shapeless/large_steel_cogwheel');

	event.shapeless('greate:aluminium_cogwheel', ['greate:aluminium_shaft', '#forge:small_gears/steel', '#forge:tools/wrenches'])
		.id('greate:shapeless/aluminium_cogwheel')
	event.shapeless('greate:large_aluminium_cogwheel', ['greate:aluminium_shaft', '#forge:gears/steel', '#forge:tools/wrenches'])
		.id('greate:shapeless/large_aluminium_cogwheel');

	event.shapeless('greate:stainless_steel_cogwheel', ['greate:stainless_steel_shaft', '#forge:small_gears/aluminium', '#forge:tools/wrenches'])
		.id('greate:shapeless/stainless_steel_cogwheel')
	event.shapeless('greate:large_stainless_steel_cogwheel', ['greate:stainless_steel_shaft', '#forge:gears/aluminium', '#forge:tools/wrenches'])
		.id('greate:shapeless/large_stainless_steel_cogwheel');

	event.shapeless('greate:titanium_cogwheel', ['greate:titanium_shaft', '#forge:small_gears/stainless_steel', '#forge:tools/wrenches'])
		.id('greate:shapeless/titanium_cogwheel')
	event.shapeless('greate:large_titanium_cogwheel', ['greate:titanium_shaft', '#forge:gears/stainless_steel', '#forge:tools/wrenches'])
		.id('greate:shapeless/large_titanium_cogwheel');

	// #endregion

	// #region Millstones

	event.shaped('greate:andesite_alloy_millstone', [
		' B ',
		'DCE',
		' A '
	], {
		A: 'tfc:quern',
		B: 'tfc:handstone',
		C: '#forge:gears/bronze',
		D: '#forge:tools/hammers',
		E: '#forge:tools/saws'
	}).id('greate:shaped/andesite_alloy_millstone')

	event.shaped('greate:andesite_alloy_millstone', [
		' B ',
		'DCE',
		' A '
	], {
		A: 'tfc:quern',
		B: 'tfc:handstone',
		C: '#forge:gears/bismuth_bronze',
		D: '#forge:tools/hammers',
		E: '#forge:tools/saws'
	}).id('greate:shaped/andesite_alloy_millstone2')

	event.shaped('greate:andesite_alloy_millstone', [
		' B ',
		'DCE',
		' A '
	], {
		A: 'tfc:quern',
		B: 'tfc:handstone',
		C: '#forge:gears/black_bronze',
		D: '#forge:tools/hammers',
		E: '#forge:tools/saws'
	}).id('greate:shaped/andesite_alloy_millstone3')

	event.shaped('greate:steel_millstone', [
		'FBF',
		'DCE',
		'AAA'
	], {
		A: '#forge:smooth_stone',
		B: 'gtceu:treated_wood_slab',
		C: '#forge:gears/steel',
		D: '#forge:tools/hammers',
		E: '#forge:tools/wrenches',
		F: '#forge:dusts/diamond'
	}).id('greate:shaped/steel_millstone')

	// #endregion

	// #region Crushing wheels

	event.recipes.createMechanicalCrafting('2x greate:steel_crushing_wheel', [
		' AAA ',
		'AABAA',
		'ABCBA',
		'AABAA',
		' AAA '
	], {
		A: '#forge:plates/tin_alloy',
		B: '#forge:storage_blocks/wrought_iron',
		C: 'greate:steel_shaft',
	}).id('greate:mechanical_crafting/steel_crushing_wheel')

	event.recipes.createMechanicalCrafting('2x greate:aluminium_crushing_wheel', [
		' AAA ',
		'AABAA',
		'ABCBA',
		'AABAA',
		' AAA '
	], {
		A: '#forge:plates/vanadium_steel',
		B: '#forge:storage_blocks/steel',
		C: 'greate:aluminium_shaft',
	}).id('greate:mechanical_crafting/aluminium_crushing_wheel')

	event.recipes.createMechanicalCrafting('2x greate:stainless_steel_crushing_wheel', [
		' AAA ',
		'AABAA',
		'ABCBA',
		'AABAA',
		' AAA '
	], {
		A: '#forge:plates/red_steel',
		B: '#forge:storage_blocks/aluminium',
		C: 'greate:stainless_steel_shaft',
	}).id('greate:mechanical_crafting/stainless_steel_crushing_wheel')

	event.recipes.createMechanicalCrafting('2x greate:titanium_crushing_wheel', [
		' AAA ',
		'AABAA',
		'ABCBA',
		'AABAA',
		' AAA '
	], {
		A: '#forge:plates/ultimet',
		B: '#forge:storage_blocks/stainless_steel',
		C: 'greate:titanium_shaft',
	}).id('greate:mechanical_crafting/titanium_crushing_wheel')

	// #endregion

	// #region Encased Fan

	event.shaped('greate:steel_encased_fan', [
		' A ',
		'BCB',
		'DEF'
	], {
		A: 'greate:steel_shaft',
		B: '#forge:small_gears/wrought_iron',
		C: 'create:andesite_casing',
		D: '#forge:tools/wrenches',
		E: 'gtceu:steel_rotor',
		F: '#forge:tools/hammers'
	}).id('greate:shaped/steel_encased_fan')

	// The other fans are fine as-is

	// #endregion

	// #region Mechanical saw

	event.shaped('greate:andesite_alloy_mechanical_saw', [
		'ABA',
		'CDC',
		'EF '
	], {
		A: '#forge:screws/wrought_iron',
		B: 'gtceu:wrought_iron_buzz_saw_blade',
		C: 'greate:andesite_alloy_cogwheel',
		D: 'create:andesite_casing',
		E: '#forge:tools/wrenches',
		F: 'greate:andesite_alloy_shaft'
	}).id('greate:shaped/andesite_alloy_mechanical_saw')

	event.shaped('greate:steel_mechanical_saw', [
		'ABA',
		'CDC',
		'FE '
	], {
		A: '#gtceu:circuits/ulv',
		B: 'gtceu:cobalt_brass_buzz_saw_blade',
		C: 'greate:steel_cogwheel',
		D: 'gtceu:ulv_machine_hull',
		E: 'greate:steel_shaft',
		F: '#forge:tools/wrenches'
	}).id('greate:shaped/steel_mechanical_saw')

	event.shaped('greate:aluminium_mechanical_saw', [
		'ABA',
		'CDC',
		'FE '
	], {
		A: '#gtceu:circuits/mv',
		B: 'gtceu:vanadium_steel_buzz_saw_blade',
		C: 'gtceu:mv_electric_motor',
		D: 'gtceu:mv_machine_hull',
		E: 'greate:aluminium_shaft',
		F: '#forge:tools/wrenches'
	}).id('greate:shaped/aluminium_mechanical_saw')

	// Removed while we wait for a fix so recipes don't work without being in a Cleanroom - Important for Wafer
	
	// event.shaped('greate:stainless_steel_mechanical_saw', [
	//	'ABA',
	//	'CDC',
	//	'FE '
	// ], {
	//	A: '#gtceu:circuits/hv',
	//	B: 'gtceu:red_steel_buzz_saw_blade',
	//	C: 'gtceu:hv_electric_motor',
	//	D: 'gtceu:hv_machine_hull',
	//	E: 'greate:stainless_steel_shaft',
	//	F: '#forge:tools/wrenches'
	// }).id('greate:shaped/stainless_steel_mechanical_saw')

	// event.shaped('greate:titanium_mechanical_saw', [
	//	'ABA',
	//	'CDC',
	//	'FE '
	//], {
	//	A: '#gtceu:circuits/ev',
	//	B: 'gtceu:ultimet_buzz_saw_blade',
	//	C: 'gtceu:ev_electric_motor',
	//	D: 'gtceu:ev_machine_hull',
	//	E: 'greate:titanium_shaft',
	//	F: '#forge:tools/wrenches'
	//}).id('greate:shaped/titanium_mechanical_saw')

	// #endregion

	// #region Mechanical Pump

	event.shaped('greate:steel_mechanical_pump', [
		' AB',
		'CDE',
		' AB'
	], {
		A: '#forge:wax',
		B: '#forge:screws/steel',
		C: '#forge:tools/wrenches',
		D: 'create:fluid_pipe',
		E: 'greate:steel_cogwheel'
	}).id('greate:shaped/steel_mechanical_pump')

	// #endregion

	// #region Belt Connector

	event.shaped('greate:rubber_belt_connector', [
		'C  ',
		'AAA',
		'B  '
	], {
		A: '#forge:plates/rubber',
		B: '#forge:tools/knives',
		C: '#forge:tools/hammers',
	}).id('greate:shaped/rubber_belt_connector')

	event.shaped('greate:silicone_rubber_belt_connector', [
		'C  ',
		'AAA',
		'B  '
	], {
		A: '#forge:plates/silicone_rubber',
		B: '#forge:tools/knives',
		C: '#forge:tools/hammers',
	}).id('greate:shaped/silicone_rubber_belt_connector')

	event.shaped('greate:polyethylene_belt_connector', [
		'C  ',
		'AAA',
		'B  '
	], {
		A: '#forge:plates/styrene_butadiene_rubber',
		B: '#forge:tools/knives',
		C: '#forge:tools/hammers',
	}).id('greate:shaped/polyethylene_belt_connector')

	// #endregion

	// #region Mixer

	event.shaped('greate:steel_mechanical_mixer', [
		'ABA',
		'DCD',
		'FEG'
	], {
		A: '#gtceu:circuits/ulv',
		B: 'greate:steel_shaft',
		C: 'gtceu:ulv_machine_hull',
		D: '#forge:plates/black_steel',
		E: 'gtceu:steel_whisk',
		F: '#forge:tools/wrenches',
		G: '#forge:tools/hammers'
	}).id('greate:shaped/steel_mechanical_mixer')

	// #endregion

	// #region Whisks

	event.shaped('gtceu:steel_whisk', [
		'ABC',
		'D D',
		'D D'
	], {
		A: '#forge:tools/hammers',
		B: '#forge:rings/steel',
		C: '#forge:tools/wrenches',
		D: '#forge:rods/long/steel'
	}).id('gtceu:shaped/steel_whisk')

	event.shaped('gtceu:aluminium_whisk', [
		'ABC',
		'D D',
		'D D'
	], {
		A: '#forge:tools/hammers',
		B: '#forge:rings/aluminium',
		C: '#forge:tools/wrenches',
		D: '#forge:rods/long/aluminium'
	}).id('gtceu:shaped/aluminium_whisk')

	event.shaped('gtceu:stainless_steel_whisk', [
		'ABC',
		'D D',
		'D D'
	], {
		A: '#forge:tools/hammers',
		B: '#forge:rings/stainless_steel',
		C: '#forge:tools/wrenches',
		D: '#forge:rods/long/stainless_steel'
	}).id('gtceu:shaped/stainless_steel_whisk')

	event.shaped('gtceu:titanium_whisk', [
		'ABC',
		'D D',
		'D D'
	], {
		A: '#forge:tools/hammers',
		B: '#forge:rings/titanium',
		C: '#forge:tools/wrenches',
		D: '#forge:rods/long/titanium'
	}).id('gtceu:shaped/titanium_whisk')

	// #endregion

	// #region Cables
	// TODO: Remove this when we update greate

	event.forEachRecipe([{ type: 'gtceu:wire_coating' }], recipe => {
		let r = JSON.parse(recipe.json)

		let newRecipe = event.recipes.gtceu.assembler(recipe.getId())

		let itemIns = [];
		r.inputs.item.forEach(i => {
			itemIns.push(`${i.content.count}x #${i.content.ingredient.tag}`);
		})

		newRecipe.itemInputs(itemIns);
		newRecipe.inputFluids(Fluid.of(`${r.inputs.fluid[0].content.value[0].tag.replace(/forge/g, 'gtceu')}`, r.inputs.fluid[0].content.amount))
		newRecipe.itemOutputs(r.outputs.item[0].content.ingredient.item);
		newRecipe.EUt(r.tickInputs.eu[0].content)
		newRecipe.duration(r.duration);
	})

	// #endregion
}
