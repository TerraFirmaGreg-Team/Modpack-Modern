// priority: 0

function registerGreateRecipes(event) {

	removeGreateRecipes(event);
	registerGreateRecyclingRecipes(event);

	event.replaceInput({ input: 'create:cogwheel'}, 'create:cogwheel', '#tfg:small_cogwheels')
	event.replaceInput({ input: 'create:large_cogwheel'}, 'create:large_cogwheel', '#tfg:large_cogwheels')
	event.replaceInput({ input: 'create:shaft'}, 'create:shaft', '#tfg:shafts')

	// #region Shafts

	event.shaped('9x greate:andesite_alloy_shaft', [
		'A ',
		' B'
	], {
		A: '#forge:tools/saws',
		B: '#forge:plates/black_bronze'
	}).id('greate:shaped/andesite_alloy_shaft_black_bronze')

	event.shaped('9x greate:andesite_alloy_shaft', [
		'A ',
		' B'
	], {
		A: '#forge:tools/saws',
		B: '#forge:plates/bronze'
	}).id('greate:shaped/andesite_alloy_shaft_bronze')

	event.shaped('9x greate:andesite_alloy_shaft', [
		'A ',
		' B'
	], {
		A: '#forge:tools/saws',
		B: '#forge:plates/bismuth_bronze'
	}).id('greate:shaped/andesite_alloy_shaft_bismuth_bronze')

	event.shaped('9x greate:steel_shaft', [
		'A ',
		' B'
	], {
		A: '#forge:tools/saws',
		B: '#forge:plates/steel'
	}).id('greate:shaped/steel_shaft')

	event.shaped('9x greate:aluminium_shaft', [
		'A ',
		' B'
	], {
		A: '#forge:tools/saws',
		B: '#forge:plates/aluminium'
	}).id('greate:shaped/aluminium_shaft')

	event.shaped('9x greate:stainless_steel_shaft', [
		'A ',
		' B'
	], {
		A: '#forge:tools/saws',
		B: '#forge:plates/stainless_steel'
	}).id('greate:shaped/stainless_steel_shaft')

	event.shaped('9x greate:titanium_shaft', [
		'A ',
		' B'
	], {
		A: '#forge:tools/saws',
		B: '#forge:plates/titanium'
	}).id('greate:shaped/titanium_shaft')

	generateCutterRecipe(event, '#forge:plates/bronze', '9x greate:andesite_alloy_shaft', 100, GTValues.VA[GTValues.ULV], 'andesite_alloy_shaft_bronze')
	generateCutterRecipe(event, '#forge:plates/black_bronze', '9x greate:andesite_alloy_shaft', 100, GTValues.VA[GTValues.ULV], 'andesite_alloy_shaft_black_bronze')
	generateCutterRecipe(event, '#forge:plates/bismuth_bronze', '9x greate:andesite_alloy_shaft', 100, GTValues.VA[GTValues.ULV], 'andesite_alloy_shaft_bismuth_bronze')
	generateCutterRecipe(event, '#forge:plates/steel', '9x greate:steel_shaft', 100, GTValues.VA[GTValues.ULV], 'steel_shaft')
	generateCutterRecipe(event, '#forge:plates/aluminium', '9x greate:aluminium_shaft', 100, GTValues.VA[GTValues.LV], 'aluminium_shaft')
	generateCutterRecipe(event, '#forge:plates/stainless_steel', '9x greate:stainless_steel_shaft', 100, GTValues.VA[GTValues.MV], 'stainless_steel_shaft')
	generateCutterRecipe(event, '#forge:plates/titanium', '9x greate:titanium_shaft', 100, GTValues.VA[GTValues.HV], 'titanium_shaft')

	// #endregion

	// #region Gearboxes

	event.recipes.gtceu.assembler('greate:andesite_alloy_gearbox')
		.itemInputs('create:andesite_casing', '4x greate:andesite_alloy_shaft')
		.itemOutputs('greate:andesite_alloy_gearbox')
		.circuit(5)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('greate:steel_gearbox')
		.itemInputs('create:andesite_casing', '4x greate:steel_shaft')
		.itemOutputs('greate:steel_gearbox')
		.circuit(5)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('greate:aluminium_gearbox')
		.itemInputs('create:andesite_casing', '4x greate:aluminium_shaft')
		.itemOutputs('greate:aluminium_gearbox')
		.circuit(5)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('greate:stainless_steel_gearbox')
		.itemInputs('create:andesite_casing', '4x greate:stainless_steel_shaft')
		.itemOutputs('greate:stainless_steel_gearbox')
		.circuit(5)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('greate:titanium_gearbox')
		.itemInputs('create:andesite_casing', '4x greate:titanium_shaft')
		.itemOutputs('greate:titanium_gearbox')
		.circuit(5)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	// #endregion

	// #region Cogs

	event.shapeless('greate:andesite_alloy_cogwheel', ['greate:andesite_alloy_shaft', '#forge:small_gears/wood'])
		.id('greate:shapeless/andesite_alloy_cogwheel')
	event.shapeless('greate:large_andesite_alloy_cogwheel', ['greate:andesite_alloy_shaft', '#forge:gears/wood'])
		.id('greate:shapeless/large_andesite_alloy_cogwheel');

	event.shapeless('greate:steel_cogwheel', ['greate:steel_shaft', '#forge:small_gears/wrought_iron'])
		.id('greate:shapeless/steel_cogwheel')
	event.shapeless('greate:large_steel_cogwheel', ['greate:steel_shaft', '#forge:small_gears/wrought_iron','#forge:small_gears/wrought_iron'])
		.id('greate:shapeless/large_steel_cogwheel');

	event.shapeless('greate:aluminium_cogwheel', ['greate:aluminium_shaft', '#forge:small_gears/steel'])
		.id('greate:shapeless/aluminium_cogwheel')
	event.shapeless('greate:large_aluminium_cogwheel', ['greate:aluminium_shaft', '#forge:small_gears/steel', '#forge:small_gears/steel'])
		.id('greate:shapeless/large_aluminium_cogwheel');

	event.shapeless('greate:stainless_steel_cogwheel', ['greate:stainless_steel_shaft', '#forge:small_gears/aluminium'])
		.id('greate:shapeless/stainless_steel_cogwheel')
	event.shapeless('greate:large_stainless_steel_cogwheel', ['greate:stainless_steel_shaft', '#forge:small_gears/aluminium', '#forge:small_gears/aluminium'])
		.id('greate:shapeless/large_stainless_steel_cogwheel');

	event.shapeless('greate:titanium_cogwheel', ['greate:titanium_shaft', '#forge:small_gears/stainless_steel'])
		.id('greate:shapeless/titanium_cogwheel')
	event.shapeless('greate:large_titanium_cogwheel', ['greate:titanium_shaft',  '#forge:small_gears/stainless_steel', '#forge:small_gears/stainless_steel'])
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
		C: '#forge:small_gears/bronze',
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
		C: '#forge:small_gears/bismuth_bronze',
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
		C: '#forge:small_gears/black_bronze',
		D: '#forge:tools/hammers',
		E: '#forge:tools/saws'
	}).id('greate:shaped/andesite_alloy_millstone3')

	event.shaped('greate:steel_millstone', [
		'FBF',
		'DCE',
		'AGA'
	], {
		A: '#forge:smooth_stone',
		B: 'gtceu:treated_wood_slab',
		C: '#forge:small_gears/steel',
		D: '#forge:tools/hammers',
		E: '#forge:tools/wrenches',
		F: '#forge:dusts/diamond',
		G: 'greate:steel_shaft'
	}).id('greate:shaped/steel_millstone')

	event.recipes.gtceu.assembler('greate:steel_millstone')
		.itemInputs('2x #forge:smooth_stone', 'gtceu:treated_wood_slab', '#forge:small_gears/steel', '2x #forge:dusts/diamond', 'greate:steel_shaft')
		.itemOutputs('greate:steel_millstone')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])

	event.shaped('greate:aluminium_millstone', [
		'BCB',
		'FGF',
		'AAA'
	], {
		A: '#forge:double_plates/vanadium_steel',
		B: '#gtceu:circuits/mv',
		C: '#forge:gears/steel',
		F: '#forge:gems/diamond',
		G: 'gtceu:mv_machine_casing'
	}).id('greate:shaped/aluminium_millstone')

	event.shaped('greate:stainless_steel_millstone', [
		'BCB',
		'FGF',
		'AAA'
	], {
		A: '#forge:double_plates/blue_alloy',
		B: '#gtceu:circuits/hv',
		C: '#forge:gears/aluminium',
		F: 'gtceu:diamond_grinding_head',
		G: 'gtceu:hv_machine_casing'
	}).id('greate:shaped/stainless_steel_millstone')

	event.shaped('greate:titanium_millstone', [
		'BCB',
		'FGF',
		'AAA'
	], {
		A: '#forge:double_plates/ultimet',
		B: '#gtceu:circuits/ev',
		C: '#forge:gears/stainless_steel',
		F: 'gtceu:diamond_grinding_head',
		G: 'gtceu:ev_machine_casing'
	}).id('greate:shaped/titanium_millstone')

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
		A: '#forge:plates/blue_alloy',
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

	event.recipes.gtceu.assembler('greate:steel_encased_fan')
		.itemInputs('greate:steel_shaft', '2x #forge:small_gears/wrought_iron', 'create:andesite_casing', 'gtceu:steel_rotor')
		.itemOutputs('greate:steel_encased_fan')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('greate:aluminium_encased_fan')
		.itemInputs('greate:aluminium_shaft', '2x #gtceu:circuits/mv', 'gtceu:mv_machine_casing', 'gtceu:aluminium_rotor')
		.itemOutputs('greate:aluminium_encased_fan')
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.assembler('greate:stainless_steel_encased_fan')
		.itemInputs('greate:stainless_steel_shaft', '2x #gtceu:circuits/hv', 'gtceu:hv_machine_casing', 'gtceu:stainless_steel_rotor')
		.itemOutputs('greate:stainless_steel_encased_fan')
		.duration(200)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.assembler('greate:titanium_encased_fan')
		.itemInputs('greate:titanium_shaft', '2x #gtceu:circuits/ev', 'gtceu:ev_machine_casing', 'gtceu:titanium_rotor')
		.itemOutputs('greate:titanium_encased_fan')
		.duration(200)
		.EUt(GTValues.VA[GTValues.HV])

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

	event.recipes.gtceu.assembler('greate:andesite_alloy_mechanical_saw')
		.itemInputs('2x #forge:screws/wrought_iron', 'gtceu:wrought_iron_buzz_saw_blade', '2x greate:andesite_alloy_cogwheel', 'create:andesite_casing', 'greate:andesite_alloy_shaft')
		.itemOutputs('greate:andesite_alloy_mechanical_saw')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

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

	event.recipes.gtceu.assembler('greate:steel_mechanical_saw')
		.itemInputs('gtceu:ulv_machine_hull', 'greate:steel_shaft', '2x #gtceu:circuits/ulv', 'gtceu:cobalt_brass_buzz_saw_blade', '2x greate:steel_cogwheel')
		.itemOutputs('greate:steel_mechanical_saw')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])

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

	event.recipes.gtceu.assembler('greate:aluminium_mechanical_saw')
		.itemInputs('gtceu:mv_machine_hull', '2x #gtceu:circuits/mv', 'gtceu:vanadium_steel_buzz_saw_blade', '2x gtceu:mv_electric_motor', 'greate:aluminium_shaft')
		.itemOutputs('greate:aluminium_mechanical_saw')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])

	// Removed while we wait for a fix so recipes don't work without being in a Cleanroom - Important for Wafer
	
	// event.shaped('greate:stainless_steel_mechanical_saw', [
	//	'ABA',
	//	'CDC',
	//	'FE '
	// ], {
	//	A: '#gtceu:circuits/hv',
	//	B: 'gtceu:diamond_buzz_saw_blade',
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

	event.recipes.gtceu.assembler('greate:steel_mechanical_pump')
		.itemInputs('2x #forge:wax', '2x #forge:screws/steel', 'create:fluid_pipe', 'greate:steel_cogwheel')
		.itemOutputs('greate:steel_mechanical_pump')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('greate:aluminium_mechanical_pump')
		.itemInputs('2x #forge:rings/rubber', '2x #forge:screws/aluminium', 'create:fluid_pipe', 'greate:aluminium_cogwheel')
		.itemOutputs('greate:aluminium_mechanical_pump')
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.assembler('greate:stainless_steel_mechanical_pump')
		.itemInputs('2x #forge:rings/rubber', '2x #forge:screws/stainless_steel', 'create:fluid_pipe', 'greate:stainless_steel_cogwheel')
		.itemOutputs('greate:stainless_steel_mechanical_pump')
		.duration(200)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.assembler('greate:titanium_mechanical_pump')
		.itemInputs('2x #forge:rings/rubber', '2x #forge:screws/titanium', 'create:fluid_pipe', 'greate:titanium_cogwheel')
		.itemOutputs('greate:titanium_mechanical_pump')
		.duration(200)
		.EUt(GTValues.VA[GTValues.HV])

	// #endregion

	// #region Belt Connector

	event.shaped('3x greate:rubber_belt_connector', [
		'C  ',
		'AAA',
		'B  '
	], {
		A: '#forge:plates/rubber',
		B: '#forge:tools/knives',
		C: '#forge:tools/hammers',
	}).id('greate:shaped/rubber_belt_connector')

	event.recipes.gtceu.assembler('rubber_belt_connector')
		.itemInputs('#forge:plates/rubber')
		.itemOutputs('greate:rubber_belt_connector')
		.circuit(11)
		.duration(50)
		.EUt(GTValues.VA[GTValues.LV])

	event.shaped('3x greate:silicone_rubber_belt_connector', [
		'C  ',
		'AAA',
		'B  '
	], {
		A: '#forge:plates/silicone_rubber',
		B: '#forge:tools/knives',
		C: '#forge:tools/hammers',
	}).id('greate:shaped/silicone_rubber_belt_connector')

	event.recipes.gtceu.assembler('silicone_rubber_belt_connector')
		.itemInputs('#forge:plates/silicone_rubber')
		.itemOutputs('greate:silicone_rubber_belt_connector')
		.circuit(11)
		.duration(50)
		.EUt(GTValues.VA[GTValues.LV])

	event.shaped('3x greate:polyethylene_belt_connector', [
		'C  ',
		'AAA',
		'B  '
	], {
		A: '#forge:plates/styrene_butadiene_rubber',
		B: '#forge:tools/knives',
		C: '#forge:tools/hammers',
	}).id('greate:shaped/polyethylene_belt_connector')

	event.recipes.gtceu.assembler('polyethylene_belt_connector')
		.itemInputs('#forge:plates/styrene_butadiene_rubber')
		.itemOutputs('greate:rubber_polyethylene_belt_connectorbelt_connector')
		.circuit(11)
		.duration(50)
		.EUt(GTValues.VA[GTValues.LV])

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

	event.recipes.gtceu.assembler('greate:steel_mechanical_mixer')
		.itemInputs('greate:steel_shaft', '2x #gtceu:circuits/ulv', 'gtceu:ulv_machine_hull', '2x #forge:plates/black_steel', 'gtceu:steel_wisk')
		.itemOutputs('greate:steel_mechanical_mixer')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('greate:aluminium_mechanical_mixer')
		.itemInputs('greate:aluminium_shaft', '2x #gtceu:circuits/mv', 'gtceu:mv_machine_hull', 'gtceu:aluminium_wisk')
		.itemOutputs('greate:aluminium_mechanical_mixer')
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.assembler('greate:stainless_steel_mechanical_mixer')
		.itemInputs('greate:stainless_steel_shaft', '2x #gtceu:circuits/hv', 'gtceu:hv_machine_hull', 'gtceu:stainless_steel_wisk')
		.itemOutputs('greate:stainless_steel_mechanical_mixer')
		.duration(200)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.assembler('greate:titanium_mechanical_mixer')
		.itemInputs('greate:titanium_shaft', '2x #gtceu:circuits/ev', 'gtceu:ev_machine_hull', 'gtceu:titanium_wisk')
		.itemOutputs('greate:titanium_mechanical_mixer')
		.duration(200)
		.EUt(GTValues.VA[GTValues.HV])

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

	event.recipes.gtceu.assembler('greate:steel_whisk')
		.itemInputs('#forge:rings/steel', '4x #forge:rods/long/steel')
		.itemOutputs('greate:steel_whisk')
		.circuit(2)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

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

	event.recipes.gtceu.assembler('greate:aluminium_whisk')
		.itemInputs('#forge:rings/aluminium', '4x #forge:rods/long/aluminium')
		.itemOutputs('greate:aluminium_whisk')
		.circuit(2)
		.duration(50)
		.EUt(GTValues.VA[GTValues.LV])

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

	event.recipes.gtceu.assembler('greate:stainless_steel_whisk')
		.itemInputs('#forge:rings/stainless_steel', '4x #forge:rods/long/stainless_steel')
		.itemOutputs('greate:stainless_steel_whisk')
		.circuit(2)
		.duration(50)
		.EUt(GTValues.VA[GTValues.MV])

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

	event.recipes.gtceu.assembler('greate:titanium_whisk')
		.itemInputs('#forge:rings/titanium', '4x #forge:rods/long/titanium')
		.itemOutputs('greate:titanium_whisk')
		.circuit(2)
		.duration(50)
		.EUt(GTValues.VA[GTValues.HV])

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
