// priority: 0
"use strict";

function registerImmersiveVehiclesVehicleRecipes(event) {
	
	// #region Planes
	event.recipes.create.mechanical_crafting('mts:automotives.biplane', [
		'    C    ',
		'ADDBEBDDA',
		' AADHDAA ',
		'  GBDBG  ',
		'    D    ',
		'   BAB   ',
		'   DFD   ',
		'   ADA   '
	], {
		A: 'tfg:aircraft_sail',
		B: '#forge:plates/black_steel',
		C: 'mts:mtsofficialpack.propellersmall3blade',
		D: 'create:brass_casing',
		E: 'tfg:generators/steel_combustion_engine',
		F: 'create:fluid_tank',
		G: 'mts:mtsofficialpack.wheelmedium',
		H: '#create:seats'
	}).id('mts:automotives.biplane');

	event.recipes.gtceu.automotive_workshop('mts:automotives.biplane')
		.itemInputs(
			'11x create:brass_casing', '9x tfg:aircraft_sail', '6x #forge:plates/black_steel',
			'2x mts:mtsofficialpack.wheelmedium', 'tfg:generators/steel_combustion_engine', '#create:seats',
			'create:fluid_tank', 'mts:mtsofficialpack.propellersmall3blade')
		.itemOutputs('mts:automotives.biplane')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(60 * 20)
		.addMaterialInfo(true)
		
	// LV

	const bell47s = [
		{ suffix: '', dye: 'red' },
		{ suffix: '_black', dye: 'black' },
		{ suffix: '_blue', dye: 'blue' },
		{ suffix: '_olive', dye: 'green' }
	];
	bell47s.forEach(bell => {
		event.recipes.gtceu.automotive_workshop(`mts:mtsofficialpack.bell47g${bell.suffix}`)
			.itemInputs(
				'4x #forge:glass', '6x #forge:rods/invar', '6x #forge:frames/invar',
				'4x #forge:plates/invar', '2x gtceu:lv_sensor', 'create:controls', 
				'4x #gtceu:batteries/lv', '4x #forge:single_cables/tin', '#forge:rotors/cobalt_brass',
				'gtceu:bronze_gearbox')
			.inputFluids(
				Fluid.of('gtceu:soldering_alloy', 8 * 144), 
				Fluid.of(`tfc:${bell.dye}_dye`, 8 * 144))
			.itemOutputs(`mts:mtsofficialpack.bell47g${bell.suffix}`)
			.EUt(GTValues.VA[GTValues.LV])
			.duration(60 * 20)
			.circuit(1)
			.addMaterialInfo(true)
	})

	const bell206s = [
		{ suffix: 'black', dye: 'black' },
		{ suffix: 'blackstripe', dye: 'white' },
		{ suffix: 'blue', dye: 'blue' },
		{ suffix: 'brown', dye: 'brown' },
		{ suffix: 'gray', dye: 'gray' },
		{ suffix: 'green', dye: 'lime' },
		{ suffix: 'olive', dye: 'green' },
		{ suffix: 'orange', dye: 'orange' },
		{ suffix: 'police', dye: 'light_gray' },
		{ suffix: 'red', dye: 'red' },
		{ suffix: 'seagreen', dye: 'cyan' },
		{ suffix: 'skyblue', dye: 'light_blue' },
		{ suffix: 'yellow', dye: 'yellow' }
	];
	bell206s.forEach(bell => {
		event.recipes.gtceu.automotive_workshop(`mts:mtsofficialpack.bell206_${bell.suffix}`)
			.itemInputs(
				'4x gtceu:tempered_glass', '16x #forge:plates/magnalium', '2x gtceu:computer_monitor_cover',
				'create:controls', '2x gtceu:mv_sensor', '6x #forge:frames/aluminium', 
				'#forge:rotors/magnalium', '4x #forge:rods/long/aluminium', '4x #gtceu:batteries/mv', 
				'8x #forge:single_cables/copper', 'gtceu:steel_gearbox')
			.inputFluids(
				Fluid.of('gtceu:soldering_alloy', 10 * 144),
				Fluid.of('gtceu:polyethylene', 5 * 144),
				Fluid.of(`tfc:${bell.dye}_dye`, 8 * 144))
			.itemOutputs(`mts:mtsofficialpack.bell206_${bell.suffix}`)
			.EUt(GTValues.VA[GTValues.MV])
			.duration(60 * 20)
			.circuit(1)
			.addMaterialInfo(true, true)
	})	

	const pzlp11s = [
		{ suffix: '', dye: 'gray' },
		{ suffix: '_brown', dye: 'brown' },
		{ suffix: '_green', dye: 'green' },
		{ suffix: '_tan', dye: 'yellow' }
	];
	pzlp11s.forEach(pzlp11 => {
		event.recipes.gtceu.automotive_workshop(`mts:mtsofficialpack.pzlp11${pzlp11.suffix}`)
			.itemInputs(
				'#forge:glass', '6x #forge:rods/steel', '2x gtceu:lv_sensor',
				'create:controls', '4x #gtceu:batteries/lv', '14x #forge:plates/invar', 
				'6x #forge:frames/invar', '2x gtceu:lv_machine_hull', '6x #forge:single_cables/tin',
				'gtceu:bronze_gearbox')
			.inputFluids(
				Fluid.of('gtceu:soldering_alloy', 10 * 144),
				Fluid.of(`tfc:${pzlp11.dye}_dye`, 10 * 144))
			.itemOutputs(`mts:mtsofficialpack.pzlp11${pzlp11.suffix}`)
			.EUt(GTValues.VA[GTValues.LV])
			.duration(60 * 20)
			.circuit(2)
			.addMaterialInfo(true)
	})

	const pzl37s = [
		{ suffix: '', dye: 'gray' },
		{ suffix: '_arctic', dye: 'light_gray' },
		{ suffix: '_brown', dye: 'brown' },
		{ suffix: '_green', dye: 'green' },
		{ suffix: '_tan', dye: 'yellow' }
	];
	pzl37s.forEach(pzl37 => {
		event.recipes.gtceu.automotive_workshop(`mts:mtsofficialpack.pzl37los${pzl37.suffix}`)
			.itemInputs(
				'4x #forge:glass', '2x gtceu:lv_sensor', 'create:controls',
				'6x #gtceu:batteries/lv', '16x #forge:plates/invar', '6x #forge:frames/invar',
				'2x gtceu:lv_machine_hull', '10x #forge:double_plates/invar', '8x #forge:single_cables/tin',
				'2x gtceu:bronze_gearbox')
			.inputFluids(
				Fluid.of('gtceu:soldering_alloy', 14 * 144),
				Fluid.of(`tfc:${pzl37.dye}_dye`, 14 * 144))
			.itemOutputs(`mts:mtsofficialpack.pzl37los${pzl37.suffix}`)
			.EUt(GTValues.VA[GTValues.LV])
			.duration(60 * 20)
			.circuit(3)
			.addMaterialInfo(true)
	})

	// MV
	
	const trimotors = [
		{ suffix: 'black', dye: 'black' },
		{ suffix: 'blue', dye: 'blue' },
		{ suffix: 'red', dye: 'red' },
		{ suffix: 'white', dye: 'white' }
	];
	trimotors.forEach(trimotor => {
		event.recipes.gtceu.automotive_workshop(`mts:mtsofficialpack.trimotor_${trimotor.suffix}`)
			.itemInputs(
				'4x gtceu:tempered_glass', '3x gtceu:steel_gearbox', '2x gtceu:mv_sensor',
				'2x gtceu:computer_monitor_cover', '2x create:controls', '8x #gtceu:batteries/mv', 
				'8x #forge:frames/aluminium', '4x gtceu:mv_machine_hull', '16x #forge:single_cables/copper',
				'16x #forge:double_plates/magnalium', '16x #forge:double_plates/magnalium')
			.inputFluids(
				Fluid.of('gtceu:soldering_alloy', 20 * 144),
				Fluid.of('gtceu:polyethylene', 30 * 144),
				Fluid.of(`tfc:${trimotor.dye}_dye`, 4 * 144))
			.itemOutputs(`mts:mtsofficialpack.trimotor_${trimotor.suffix}`)
			.EUt(GTValues.VA[GTValues.MV])
			.duration(60 * 20)
			.circuit(2)
			.addMaterialInfo(true)
	})

	const comanches = [
		{ suffix: 'blackred', dye: 'black' },
		{ suffix: 'blackredstripe', dye: 'white' },
		{ suffix: 'blue', dye: 'blue' },
		{ suffix: 'orangebrown', dye: 'orange' },
		{ suffix: 'red', dye: 'red' },
		{ suffix: 'seagreen', dye: 'cyan' },
		{ suffix: 'yellow', dye: 'yellow' }
	];
	comanches.forEach(comanche => {
		event.recipes.gtceu.automotive_workshop(`mts:mtsofficialpack.comanche_${comanche.suffix}`)
			.itemInputs(
				'4x gtceu:tempered_glass', '2x gtceu:steel_gearbox', '2x gtceu:mv_sensor',
				'2x gtceu:computer_monitor_cover', '2x create:controls', '4x #gtceu:batteries/mv', 
				'8x #forge:frames/aluminium', '2x gtceu:mv_machine_hull', '8x #forge:single_cables/copper',
				'16x #forge:plates/magnalium', '16x #forge:plates/magnalium')
			.inputFluids(
				Fluid.of('gtceu:soldering_alloy', 12 * 144),
				Fluid.of('gtceu:polyethylene', 12 * 144),
				Fluid.of(`tfc:${comanche.dye}_dye`, 10 * 144))
			.itemOutputs(`mts:mtsofficialpack.comanche_${comanche.suffix}`)
			.EUt(GTValues.VA[GTValues.MV])
			.duration(60 * 20)
			.circuit(3)
			.addMaterialInfo(true)
	})
	
	const skyhawks = [
		{ suffix: 'blackorange', dye: 'orange', alt: 0 },
		{ suffix: 'blackred', dye: 'black', alt: 0 },
		{ suffix: 'blackyellow', dye: 'yellow', alt: 0 },
		{ suffix: 'blue', dye: 'blue', alt: 0 },
		{ suffix: 'bluered', dye: 'red', alt: 0 },
		{ suffix: 'bluestripe', dye: 'light_blue', alt: 0 },
		{ suffix: 'brown', dye: 'brown', alt: 0 },
		{ suffix: 'butter', dye: 'blue', alt: 1 },
		{ suffix: 'coffee', dye: 'brown', alt: 1 },
		{ suffix: 'green', dye: 'lime', alt: 0 },
		{ suffix: 'red', dye: 'red', alt: 1 },
		{ suffix: 'red2', dye: 'white', alt: 0 }
	];
	skyhawks.forEach(skyhawk => {
		event.recipes.gtceu.automotive_workshop(`mts:mtsofficialpack.skyhawk_${skyhawk.suffix}`)
			.itemInputs(
				'4x gtceu:tempered_glass', 'gtceu:steel_gearbox', '2x gtceu:mv_sensor',
				'2x gtceu:computer_monitor_cover', '2x create:controls', '4x #gtceu:batteries/mv', 
				'6x #forge:frames/aluminium', '2x gtceu:mv_machine_hull', '8x #forge:single_cables/copper',
				'16x #forge:plates/magnalium', '8x #forge:plates/magnalium')
			.inputFluids(
				Fluid.of('gtceu:soldering_alloy', 10 * 144),
				Fluid.of('gtceu:polyethylene', 10 * 144),
				Fluid.of(`tfc:${skyhawk.dye}_dye`, 10 * 144))
			.itemOutputs(`mts:mtsofficialpack.skyhawk_${skyhawk.suffix}`)
			.EUt(GTValues.VA[GTValues.MV])
			.duration(60 * 20)
			.circuit(4 + skyhawk.alt)
			.addMaterialInfo(true)
	})
	
	// HV

	const vulcanairs = [
		{ suffix: 'blackred', dye: 'black', alt: 0 },
		{ suffix: 'blackyellow', dye: 'yellow', alt: 0 },
		{ suffix: 'blue', dye: 'blue', alt: 0 },
		{ suffix: 'gray', dye: 'gray', alt: 0 },
		{ suffix: 'green', dye: 'green', alt: 0 },
		{ suffix: 'orange', dye: 'orange', alt: 0 },
		{ suffix: 'police', dye: 'light_gray', alt: 0 },
		{ suffix: 'redyellow', dye: 'red', alt: 0 },
		{ suffix: 'white', dye: 'white', alt: 0 },
		{ suffix: 'yellow', dye: 'yellow', alt: 1 }
	];
	vulcanairs.forEach(vulcanair => {
		event.recipes.gtceu.automotive_workshop(`mts:mtsofficialpack.vulcanair_${vulcanair.suffix}`)
			.itemInputs(
				'6x gtceu:tempered_glass', '2x gtceu:stainless_steel_gearbox', '4x gtceu:hv_sensor',
				'4x gtceu:computer_monitor_cover', '2x create:controls', '6x #gtceu:batteries/hv', 
				'6x #forge:frames/mo_50_re', '2x gtceu:hv_machine_hull', '12x #forge:single_cables/gold',
				'16x #forge:plates/rocket_alloy_t1', '2x #forge:plates/rocket_alloy_t1')
			.inputFluids(
				Fluid.of('tfg:woods_metal', 10 * 144),
				Fluid.of('gtceu:polyvinyl_chloride', 16 * 144),
				Fluid.of(`tfc:${vulcanair.dye}_dye`, 12 * 144))
			.itemOutputs(`mts:mtsofficialpack.vulcanair_${vulcanair.suffix}`)
			.EUt(GTValues.VA[GTValues.HV])
			.duration(60 * 20)
			.circuit(1 + vulcanair.alt)
			.addMaterialInfo(true)
	})
	
	const eclipses = [
		{ suffix: 'blackred', dye: 'red' },
		{ suffix: 'blue', dye: 'blue' },
		{ suffix: 'extravagant', dye: 'magenta' },
		{ suffix: 'green', dye: 'lime' },
		{ suffix: 'red', dye: 'white' },
		{ suffix: 'silver', dye: 'light_gray' },
		{ suffix: 'yellow', dye: 'yellow' }
	];
	eclipses.forEach(eclipse => {
		event.recipes.gtceu.automotive_workshop(`mts:mtsofficialpack.e500_${eclipse.suffix}`)
			.itemInputs(
				'6x gtceu:tempered_glass', '2x gtceu:stainless_steel_turbine_casing', '4x gtceu:hv_sensor',
				'4x gtceu:computer_monitor_cover', '4x #gtceu:circuits/hv', '6x #gtceu:batteries/hv', 
				'6x #forge:frames/mo_50_re', '2x gtceu:hv_machine_hull', '12x #forge:single_cables/gold',
				'16x #forge:plates/rocket_alloy_t1', '11x #forge:plates/rocket_alloy_t1')
			.inputFluids(
				Fluid.of('tfg:woods_metal', 10 * 144),
				Fluid.of('gtceu:polyvinyl_chloride', 16 * 144),
				Fluid.of(`tfc:${eclipse.dye}_dye`, 12 * 144))
			.itemOutputs(`mts:mtsofficialpack.e500_${eclipse.suffix}`)
			.EUt(GTValues.VA[GTValues.HV])
			.duration(60 * 20)
			.circuit(3)
			.addMaterialInfo(true)
	})

	// #endregion Planes

	// #region Boats
	const fiskers = [
		{ suffix: 'black', dye: 'black', alt: 0 },
		{ suffix: 'blue', dye: 'blue', alt: 0 },
		{ suffix: 'brown', dye: 'brown', alt: 0 },
		{ suffix: 'cherry_red', dye: 'red', alt: 1 },
		{ suffix: 'copper', dye: 'orange', alt: 0 },
		{ suffix: 'cyan', dye: 'cyan', alt: 0 },
		{ suffix: 'emerald', dye: 'green', alt: 0 },
		{ suffix: 'gray', dye: 'gray', alt: 0 },
		{ suffix: 'khaki', dye: 'light_gray', alt: 0 },
		{ suffix: 'marine', dye: 'blue', alt: 1 },
		{ suffix: 'olive', dye: 'green', alt: 1 },
		{ suffix: 'purple', dye: 'purple', alt: 0 },
		{ suffix: 'red', dye: 'red', alt: 0 },
		{ suffix: 'tan', dye: 'yellow', alt: 1 },
		{ suffix: 'white', dye: 'white', alt: 0 },
		{ suffix: 'yellow', dye: 'yellow', alt: 0 },
	];
	const fisker_types = ['a', 'b']
	fisker_types.forEach(type => {
		let circuit = type === 'a' ? 4 : 6;
		fiskers.forEach(fisker => {
			event.recipes.gtceu.automotive_workshop(`mts:belroftmotors.fisker_type_${type}_${fisker.suffix}`)
				.itemInputs('mts:belroftmotors.engine_tuna', '6x #forge:glass', '2x #forge:frames/invar',
					'8x #forge:plates/invar', '#gtceu:circuits/lv', 'create:controls',
					'2x #gtceu:batteries/lv', '4x #forge:single_cables/tin', 'mts:belroftmotors.tuna_propeller')
				.inputFluids(
					Fluid.of('gtceu:rubber', 16 * 144), 
					Fluid.of('gtceu:soldering_alloy', 4 * 144), 
					Fluid.of(`tfc:${fisker.dye}_dye`, 6 * 144))
				.itemOutputs(`mts:belroftmotors.fisker_type_${type}_${fisker.suffix}`)
				.EUt(GTValues.VA[GTValues.LV])
				.duration(60 * 20)
				.circuit(circuit + fisker.alt)
				.addMaterialInfo(true)
		})
	})

	const corallums = [
		{ suffix: 'black', dye: 'black', alt: 0 },
		{ suffix: 'black_phantom', dye: 'black', alt: 1 },
		{ suffix: 'blue', dye: 'blue', alt: 0 },
		{ suffix: 'brown', dye: 'brown', alt: 0 },
		{ suffix: 'cherry_red', dye: 'red', alt: 1 },
		{ suffix: 'copper', dye: 'orange', alt: 0 },
		{ suffix: 'coral', dye: 'orange', alt: 1 },
		{ suffix: 'coralius', dye: 'orange', alt: 2 },
		{ suffix: 'cyan', dye: 'cyan', alt: 0 },
		{ suffix: 'emerald', dye: 'green', alt: 0 },
		{ suffix: 'gray', dye: 'gray', alt: 0 },
		{ suffix: 'khaki', dye: 'light_gray', alt: 0 },
		{ suffix: 'khaki_steelie', dye: 'light_gray', alt: 1 },
		{ suffix: 'marine', dye: 'blue', alt: 1 },
		{ suffix: 'olive', dye: 'green', alt: 1 },
		{ suffix: 'olive_steelie', dye: 'green', alt: 2 },
		{ suffix: 'purple', dye: 'purple', alt: 0 },
		{ suffix: 'red', dye: 'red', alt: 0 },
		{ suffix: 'steelie', dye: 'gray', alt: 1 },
		{ suffix: 'tan', dye: 'yellow', alt: 1 },
		{ suffix: 'white', dye: 'white', alt: 0 },
		{ suffix: 'yellow', dye: 'yellow', alt: 0 },
	];

	corallums.forEach(corallum => {
		event.recipes.gtceu.automotive_workshop(`mts:belroftmotors.corallum_${corallum.suffix}`)
			.itemInputs('2x mts:belroftmotors.engine_barracuda', '6x #forge:glass', '2x #forge:frames/aluminium',
				'8x #forge:plates/aluminium', '#gtceu:circuits/mv', 'create:controls', 
				'gtceu:computer_monitor_cover', '4x #gtceu:batteries/mv', '8x #forge:single_cables/copper',
				'2x mts:belroftmotors.barracuda_propeller')
			.inputFluids(
				Fluid.of('gtceu:polyethylene', 16 * 144), 
				Fluid.of('gtceu:soldering_alloy', 6 * 144), 
				Fluid.of(`tfc:${corallum.dye}_dye`, 6 * 144))
			.itemOutputs(`mts:belroftmotors.corallum_${corallum.suffix}`)
			.EUt(GTValues.VA[GTValues.MV])
			.duration(60 * 20)
			.circuit(6 + corallum.alt)
			.addMaterialInfo(true)
	})
	// #endregion

	// #region Cars
	
	event.recipes.create.mechanical_crafting('mts:automotives.boilerbox', [
		'        ',
		' BJ JJA ',
		'EHDDDIH ',
		'EHLCGFHK',
		'EHDDDIH ',
		' BJ JJA ',
		'        '
	], {
		A: 'create:flywheel',
		B: 'mts:mtsofficialpack.wheelmedium',
		C: '#create:seats',
		D: 'create:brass_casing',
		E: '#forge:glass_panes',
		F: 'steampowered:bronze_steam_engine',
		G: 'create:blaze_burner',
		H: '#forge:shafts',
		I: 'create:fluid_tank',
		J: '#forge:plates/black_steel',
		K: '#tfg:smokestacks',
		L: 'create:precision_mechanism'
	}).id('mts:automotives.boilerbox');

	event.recipes.gtceu.automotive_workshop('mts:automotives.boilerbox')
		.itemInputs(
			'6x create:brass_casing', '2x create:flywheel', '2x mts:mtsofficialpack.wheelmedium',
			'6x #forge:plates/black_steel', '#create:seats', '3x #forge:glass_panes', 
			'steampowered:bronze_steam_engine', 'create:blaze_burner', '6x #forge:shafts',
			'2x create:fluid_tank', '#tfg:smokestacks', 'create:precision_mechanism')
		.itemOutputs('mts:automotives.boilerbox')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(60 * 20)
		.addMaterialInfo(true)

	// LV

	const quads = [
		{ suffix: 'gray', dye: 'gray' },
		{ suffix: 'green', dye: 'lime' },
		{ suffix: 'olive', dye: 'green' },
		{ suffix: 'orange', dye: 'orange' },
		{ suffix: 'red', dye: 'red' },
		{ suffix: 'tan', dye: 'brown' },
		{ suffix: 'white', dye: 'white' },
		{ suffix: 'yellow', dye: 'yellow' }
	];
	quads.forEach(quad => {
		event.recipes.gtceu.automotive_workshop(`mts:mtsofficialpack.quad_${quad.suffix}`)
			.itemInputs(
				'mts:mtsofficialpack.enginequad', '4x mts:mtsofficialpack.wheelmedium', '6x #forge:rods/steel', 
				'2x #gtceu:circuits/lv', 'create:precision_mechanism', '2x #gtceu:batteries/lv',
				'4x #forge:plates/invar', '#forge:frames/invar', '2x mts:mtsofficialpack.headlight',
				'4x #forge:springs/steel')
			.inputFluids(
				Fluid.of('gtceu:soldering_alloy', 6 * 144),
				Fluid.of(`tfc:${quad.dye}_dye`, 6 * 144))
			.itemOutputs(`mts:mtsofficialpack.quad_${quad.suffix}`)
			.EUt(GTValues.VA[GTValues.LV])
			.duration(60 * 20)
			.circuit(8)
			.addMaterialInfo(true)
	})

	const silvers = [
		{ suffix: 'black', dye: 'black', alt: 0 },
		{ suffix: 'blue', dye: 'blue', alt: 0 },
		{ suffix: 'cherry_red', dye: 'red', alt: 1 },
		{ suffix: 'copper', dye: 'orange', alt: 0 },
		{ suffix: 'green', dye: 'green', alt: 0 },
		{ suffix: 'khaki', dye: 'light_gray', alt: 0 },
		{ suffix: 'marine', dye: 'blue', alt: 1 },
		{ suffix: 'olive', dye: 'green', alt: 1 },
		{ suffix: 'purple', dye: 'purple', alt: 0 },
		{ suffix: 'red', dye: 'red', alt: 0 },
		{ suffix: 'white', dye: 'white', alt: 0 },
		{ suffix: 'yellow', dye: 'yellow', alt: 0 },
	];
	silvers.forEach(silver => {
		event.recipes.gtceu.automotive_workshop(`mts:belroftmotors.silver_${silver.suffix}`)
			.itemInputs(
				'mts:belroftmotors.engine_mahogany', '2x mts:mtsofficialpack.wheellarge', '6x #forge:rods/steel', 
				'2x #gtceu:circuits/lv', 'create:precision_mechanism', '2x #gtceu:batteries/lv',
				'4x #forge:plates/invar', '#forge:frames/invar', '2x mts:mtsofficialpack.headlight', 
				'2x #forge:springs/steel')
			.inputFluids(
				Fluid.of('gtceu:soldering_alloy', 6 * 144),
				Fluid.of(`tfc:${silver.dye}_dye`, 6 * 144))
			.itemOutputs(`mts:belroftmotors.silver_${silver.suffix}`)
			.EUt(GTValues.VA[GTValues.LV])
			.duration(60 * 20)
			.circuit(9 + silver.alt)
			.addMaterialInfo(true)
	})

	const nuggets = [
		{ suffix: 'black', dye: 'black', alt: 0 },
		{ suffix: 'blue', dye: 'blue', alt: 0 },
		{ suffix: 'brown', dye: 'brown', alt: 0 },
		{ suffix: 'cherry_red', dye: 'red', alt: 1 },
		{ suffix: 'copper', dye: 'orange', alt: 0 },
		{ suffix: 'cyan', dye: 'cyan', alt: 0 },
		{ suffix: 'emerald', dye: 'green', alt: 0 },
		{ suffix: 'gray', dye: 'gray', alt: 0 },
		{ suffix: 'green', dye: 'lime', alt: 0 },
		{ suffix: 'police_black', dye: 'black', alt: 1 },
		{ suffix: 'police_blue', dye: 'blue', alt: 1 },
		{ suffix: 'police_green', dye: 'green', alt: 1 },
		{ suffix: 'purple', dye: 'purple', alt: 0 },
		{ suffix: 'red', dye: 'red', alt: 0 },
		{ suffix: 'tan', dye: 'yellow', alt: 1 },
		{ suffix: 'white', dye: 'white', alt: 0 },
		{ suffix: 'white_sport', dye: 'white', alt: 1 },
		{ suffix: 'yellow', dye: 'yellow', alt: 0 },
	];
	nuggets.forEach(silver => {
		event.recipes.gtceu.automotive_workshop(`mts:belroftmotors.nugget_${silver.suffix}`)
			.itemInputs(
				'mts:belroftmotors.bee_i3_engine', '#create:valve_handles', '6x #forge:glass',
				'2x #gtceu:circuits/lv', 'create:precision_mechanism', '2x #gtceu:batteries/lv',
				'8x #forge:plates/invar', '2x #forge:frames/invar', 'gtceu:lv_machine_hull',
				'4x mts:mtsofficialpack.headlight', '3x #forge:springs/steel')
			.inputFluids(
				Fluid.of('gtceu:soldering_alloy', 8 * 144),
				Fluid.of(`tfc:${silver.dye}_dye`, 6 * 144))
			.itemOutputs(`mts:belroftmotors.nugget_${silver.suffix}`)
			.EUt(GTValues.VA[GTValues.LV])
			.duration(60 * 20)
			.circuit(11 + silver.alt)
			.addMaterialInfo(true)
	})

	const bullfrogs = [
		{ suffix: 'blue', dye: 'blue', alt: 0 },
		{ suffix: 'cyan', dye: 'cyan', alt: 0 },
		{ suffix: 'emerald', dye: 'green', alt: 0 },
		{ suffix: 'gray', dye: 'gray', alt: 0 },
		{ suffix: 'gray_classy', dye: 'black', alt: 0 },
		{ suffix: 'gray_classy_red', dye: 'black', alt: 1 },
		{ suffix: 'green', dye: 'lime', alt: 0 },
		{ suffix: 'legacy_blue', dye: 'blue', alt: 1 },
		{ suffix: 'orange', dye: 'orange', alt: 0 },
		{ suffix: 'purple', dye: 'purple', alt: 0 },
		{ suffix: 'red', dye: 'red', alt: 0 },
		{ suffix: 'yellow', dye: 'yellow', alt: 0 },
	];
	bullfrogs.forEach(bullfrog => {
		event.recipes.gtceu.automotive_workshop(`mts:belroftmotors.bullfrog_${bullfrog.suffix}`)
			.itemInputs(
				'mts:belroftmotors.enginepounderv8', '#create:valve_handles', '6x #forge:glass',
				'2x #gtceu:circuits/lv', '2x create:precision_mechanism', '2x #gtceu:batteries/lv',
				'10x #forge:plates/invar', '2x #forge:frames/invar', 'gtceu:lv_machine_hull',
				'4x mts:mtsofficialpack.headlight', '4x #forge:springs/steel')
			.inputFluids(
				Fluid.of('gtceu:soldering_alloy', 8 * 144),
				Fluid.of(`tfc:${bullfrog.dye}_dye`, 6 * 144))
			.itemOutputs(`mts:belroftmotors.bullfrog_${bullfrog.suffix}`)
			.EUt(GTValues.VA[GTValues.LV])
			.duration(60 * 20)
			.circuit(13 + bullfrog.alt)
			.addMaterialInfo(true)
	})

	const scouts = [
		{ suffix: 'black', dye: 'black', alt: 0 },
		{ suffix: 'blue', dye: 'blue', alt: 0 },
		{ suffix: 'brown', dye: 'brown', alt: 0 },
		{ suffix: 'gray', dye: 'gray', alt: 0 },
		{ suffix: 'maroon', dye: 'red', alt: 1 },
		{ suffix: 'olive', dye: 'green', alt: 0 },
		{ suffix: 'orange', dye: 'orange', alt: 0 },
		{ suffix: 'red', dye: 'red', alt: 0 },
		{ suffix: 'seagreen', dye: 'cyan', alt: 0 },
		{ suffix: 'tan', dye: 'brown', alt: 1 },
		{ suffix: 'white', dye: 'white', alt: 0 },
		{ suffix: 'yellow', dye: 'yellow', alt: 0 },
		{ suffix: 'yellowwhite', dye: 'yellow', alt: 1 },
	];
	scouts.forEach(scout => {
		event.recipes.gtceu.automotive_workshop(`mts:mtsofficialpack.scout_${scout.suffix}`)
			.itemInputs(
				'mts:mtsofficialpack.engineamci4', '#create:valve_handles', '6x #forge:glass',
				'2x #gtceu:circuits/lv', '2x create:precision_mechanism', '2x #gtceu:batteries/lv',
				'8x #forge:plates/invar', '2x #forge:frames/invar', 'gtceu:lv_machine_hull',
				'4x mts:mtsofficialpack.headlight', '4x #forge:springs/steel')
			.inputFluids(
				Fluid.of('gtceu:soldering_alloy', 8 * 144),
				Fluid.of(`tfc:${scout.dye}_dye`, 6 * 144))
			.itemOutputs(`mts:mtsofficialpack.scout_${scout.suffix}`)
			.EUt(GTValues.VA[GTValues.LV])
			.duration(60 * 20)
			.circuit(15 + scout.alt)
			.addMaterialInfo(true)
	})

	const brigadiers = [
		{ suffix: 'black', dye: 'black', alt: 0 },
		{ suffix: 'blackwhite', dye: 'black', alt: 1 },
		{ suffix: 'blue', dye: 'blue', alt: 0 },
		{ suffix: 'brown', dye: 'brown', alt: 0 },
		{ suffix: 'cream', dye: 'white', alt: 1 },
		{ suffix: 'gray', dye: 'gray', alt: 0 },
		{ suffix: 'green', dye: 'green', alt: 0 },
		{ suffix: 'maroon', dye: 'red', alt: 1 },
		{ suffix: 'red', dye: 'red', alt: 0 },
		{ suffix: 'tan', dye: 'brown', alt: 1 },
		{ suffix: 'white', dye: 'white', alt: 0 }
	];
	brigadiers.forEach(brigadier => {
		event.recipes.gtceu.automotive_workshop(`mts:mtsofficialpack.gmcbrig_${brigadier.suffix}`)
			.itemInputs(
				'mts:mtsofficialpack.enginedetroitdiesel', '#create:valve_handles', '6x #forge:glass',
				'2x #gtceu:circuits/lv', '2x create:precision_mechanism', '4x #gtceu:batteries/lv',
				'12x #forge:plates/invar', '4x #forge:frames/invar', '2x gtceu:lv_machine_hull',
				'6x mts:mtsofficialpack.headlight', '6x #forge:springs/steel')
			.inputFluids(
				Fluid.of('gtceu:soldering_alloy', 10 * 144),
				Fluid.of(`tfc:${brigadier.dye}_dye`, 8 * 144))
			.itemOutputs(`mts:mtsofficialpack.gmcbrig_${brigadier.suffix}`)
			.EUt(GTValues.VA[GTValues.LV])
			.duration(60 * 20)
			.circuit(17 + brigadier.alt)
			.addMaterialInfo(true)
	})

	// MV
	
	const adventures = [
		{ suffix: 'black', dye: 'black', alt: 0 },
		{ suffix: 'black_gray', dye: 'black', alt: 1 },
		{ suffix: 'blue', dye: 'blue', alt: 0 },
		{ suffix: 'blue_white', dye: 'blue', alt: 1 },
		{ suffix: 'brown', dye: 'brown', alt: 0 },
		{ suffix: 'cherry_red', dye: 'red', alt: 1 },
		{ suffix: 'cherry_tan', dye: 'brown', alt: 1 },
		{ suffix: 'copper', dye: 'orange', alt: 0 },
		{ suffix: 'cyan', dye: 'cyan', alt: 0 },
		{ suffix: 'emerald', dye: 'green', alt: 0 },
		{ suffix: 'gray', dye: 'gray', alt: 0 },
		{ suffix: 'gray_brown', dye: 'gray', alt: 1 },
		{ suffix: 'purple', dye: 'purple', alt: 0 },
		{ suffix: 'red', dye: 'red', alt: 0 },
		{ suffix: 'tan', dye: 'yellow', alt: 0 },
		{ suffix: 'white', dye: 'white', alt: 0 },
		{ suffix: 'yellow', dye: 'yellow', alt: 0 },
	];
	adventures.forEach(adventure => {
		event.recipes.gtceu.automotive_workshop(`mts:belroftmotors.adventure_${adventure.suffix}`)
			.itemInputs(
				'mts:belroftmotors.enginepounderv8', '#create:valve_handles', '8x gtceu:tempered_glass',
				'2x #gtceu:circuits/mv', '2x gtceu:computer_monitor_cover', '2x #gtceu:batteries/mv',
				'16x #forge:plates/magnalium', '4x #forge:frames/aluminium', '2x gtceu:mv_machine_hull',
				'6x mts:mtsofficialpack.headlight', '4x #forge:springs/aluminium')
			.inputFluids(
				Fluid.of('gtceu:soldering_alloy', 10 * 144),
				Fluid.of('gtceu:polyethylene', 10 * 144),
				Fluid.of(`tfc:${adventure.dye}_dye`, 8 * 144))
			.itemOutputs(`mts:belroftmotors.adventure_${adventure.suffix}`)
			.EUt(GTValues.VA[GTValues.MV])
			.duration(60 * 20)
			.circuit(9 + adventure.alt)
			.addMaterialInfo(true)
	})

	const keepers = [
		{ suffix: 'black', dye: 'black', alt: 0 },
		{ suffix: 'blue', dye: 'blue', alt: 0 },
		{ suffix: 'brown', dye: 'brown', alt: 0 },
		{ suffix: 'cherry_red', dye: 'red', alt: 1 },
		{ suffix: 'copper', dye: 'orange', alt: 0 },
		{ suffix: 'cyan', dye: 'cyan', alt: 0 },
		{ suffix: 'emerald', dye: 'green', alt: 0 },
		{ suffix: 'gray', dye: 'gray', alt: 0 },
		{ suffix: 'green', dye: 'lime', alt: 0 },
		{ suffix: 'khaki', dye: 'light_gray', alt: 0 },
		{ suffix: 'marine', dye: 'cyan', alt: 1 },
		{ suffix: 'olive', dye: 'green', alt: 1 },
		{ suffix: 'police_black', dye: 'black', alt: 1 },
		{ suffix: 'police_blue', dye: 'blue', alt: 1 },
		{ suffix: 'police_green', dye: 'lime', alt: 1 },
		{ suffix: 'purple', dye: 'purple', alt: 0 },
		{ suffix: 'red', dye: 'red', alt: 0 },
		{ suffix: 'tan', dye: 'yellow', alt: 0 },
		{ suffix: 'white', dye: 'white', alt: 0 },
		{ suffix: 'yellow', dye: 'yellow', alt: 0 },
	];
	keepers.forEach(keeper => {
		event.recipes.gtceu.automotive_workshop(`mts:belroftmotors.keeper_${keeper.suffix}`)
			.itemInputs(
				'mts:belroftmotors.engine_highlander_v8', '#create:valve_handles', '8x gtceu:tempered_glass',
				'2x #gtceu:circuits/mv', '2x gtceu:computer_monitor_cover', '2x #gtceu:batteries/mv',
				'12x #forge:plates/magnalium', '4x #forge:frames/aluminium', '2x gtceu:mv_machine_hull',
				'6x mts:mtsofficialpack.headlight', '4x #forge:springs/aluminium')
			.inputFluids(
				Fluid.of('gtceu:soldering_alloy', 10 * 144),
				Fluid.of('gtceu:polyethylene', 10 * 144),
				Fluid.of(`tfc:${keeper.dye}_dye`, 8 * 144))
			.itemOutputs(`mts:belroftmotors.keeper_${keeper.suffix}`)
			.EUt(GTValues.VA[GTValues.MV])
			.duration(60 * 20)
			.circuit(11 + keeper.alt)
			.addMaterialInfo(true)
	})

	const harpies = [
		{ suffix: 'black', dye: 'black', alt: 0 },
		{ suffix: 'blue', dye: 'blue', alt: 0 },
		{ suffix: 'brown', dye: 'brown', alt: 0 },
		{ suffix: 'cherry_red', dye: 'red', alt: 1 },
		{ suffix: 'copper', dye: 'orange', alt: 0 },
		{ suffix: 'cyan', dye: 'cyan', alt: 0 },
		{ suffix: 'emerald', dye: 'green', alt: 0 },
		{ suffix: 'gray', dye: 'gray', alt: 0 },
		{ suffix: 'green', dye: 'lime', alt: 0 },
		{ suffix: 'khaki', dye: 'light_gray', alt: 0 },
		{ suffix: 'marine', dye: 'cyan', alt: 1 },
		{ suffix: 'olive', dye: 'green', alt: 1 },
		{ suffix: 'purple', dye: 'purple', alt: 0 },
		{ suffix: 'red', dye: 'red', alt: 0 },
		{ suffix: 'tan', dye: 'yellow', alt: 0 },
		{ suffix: 'white', dye: 'white', alt: 0 },
		{ suffix: 'yellow', dye: 'yellow', alt: 0 },
	];
	harpies.forEach(harpy => {
		event.recipes.gtceu.automotive_workshop(`mts:belroftmotors.harpy_${harpy.suffix}`)
			.itemInputs(
				'mts:belroftmotors.engine_granite', '#create:valve_handles', '6x gtceu:tempered_glass',
				'2x #gtceu:circuits/mv', '2x gtceu:computer_monitor_cover', '4x #gtceu:batteries/mv',
				'16x #forge:plates/magnalium', '6x #forge:frames/aluminium', '2x gtceu:mv_machine_hull',
				'6x mts:mtsofficialpack.headlight', '6x #forge:springs/aluminium')
			.inputFluids(
				Fluid.of('gtceu:soldering_alloy', 14 * 144),
				Fluid.of('gtceu:polyethylene', 14 * 144),
				Fluid.of(`tfc:${harpy.dye}_dye`, 10 * 144))
			.itemOutputs(`mts:belroftmotors.harpy_${harpy.suffix}`)
			.EUt(GTValues.VA[GTValues.MV])
			.duration(60 * 20)
			.circuit(13 + harpy.alt)
			.addMaterialInfo(true)
	})

	const citadels = [
		{ suffix: 'black', dye: 'black', alt: 0 },
		{ suffix: 'blue', dye: 'blue', alt: 0 },
		{ suffix: 'brown', dye: 'brown', alt: 0 },
		{ suffix: 'cherry_red', dye: 'red', alt: 1 },
		{ suffix: 'copper', dye: 'orange', alt: 0 },
		{ suffix: 'cyan', dye: 'cyan', alt: 0 },
		{ suffix: 'emerald', dye: 'green', alt: 0 },
		{ suffix: 'gray', dye: 'gray', alt: 0 },
		{ suffix: 'green', dye: 'lime', alt: 0 },
		{ suffix: 'khaki', dye: 'light_gray', alt: 0 },
		{ suffix: 'marine', dye: 'cyan', alt: 1 },
		{ suffix: 'olive', dye: 'green', alt: 1 },
		{ suffix: 'purple', dye: 'purple', alt: 0 },
		{ suffix: 'red', dye: 'red', alt: 0 },
		{ suffix: 'tan', dye: 'yellow', alt: 0 },
		{ suffix: 'white', dye: 'white', alt: 0 },
		{ suffix: 'yellow', dye: 'yellow', alt: 0 },
	];
	citadels.forEach(citadel => {
		event.recipes.gtceu.automotive_workshop(`mts:belroftmotors.citadel_${citadel.suffix}`)
			.itemInputs(
				'mts:belroftmotors.engine_turbo_hauler_v8', '#create:valve_handles', '6x gtceu:tempered_glass',
				'4x #gtceu:circuits/mv', '2x gtceu:computer_monitor_cover', '4x #gtceu:batteries/mv',
				'10x #forge:double_plates/magnalium', '8x #forge:frames/aluminium', '2x gtceu:mv_machine_hull',
				'6x mts:mtsofficialpack.headlight', '4x #forge:springs/aluminium')
			.inputFluids(
				Fluid.of('gtceu:soldering_alloy', 16 * 144),
				Fluid.of('gtceu:polyethylene', 16 * 144),
				Fluid.of(`tfc:${citadel.dye}_dye`, 10 * 144))
			.itemOutputs(`mts:belroftmotors.citadel_${citadel.suffix}`)
			.EUt(GTValues.VA[GTValues.MV])
			.duration(60 * 20)
			.circuit(15 + citadel.alt)
			.addMaterialInfo(true)
	})

	event.recipes.gtceu.automotive_workshop(`mts:mtsofficialpack.firetruck`)
		.itemInputs(
			'mts:mtsofficialpack.enginedetroitdiesel', '#create:valve_handles', '6x gtceu:tempered_glass',
			'2x create:hose_pulley', '2x mts:mtsofficialpack.gunfireextinguisher', '4x #gtceu:batteries/mv',
			'16x #forge:plates/magnalium', '6x #forge:frames/magnalium', '4x gtceu:mv_machine_hull',
			'10x mts:mtsofficialpack.headlight', '4x #forge:springs/aluminium', 'mts:mtsofficialpack.watercannon')
		.inputFluids(
			Fluid.of('gtceu:soldering_alloy', 10 * 144),
			Fluid.of('gtceu:polyethylene', 12 * 144),
			Fluid.of(`tfc:red_dye`, 16 * 144))
		.itemOutputs(`mts:mtsofficialpack.firetruck`)
		.EUt(GTValues.VA[GTValues.MV])
		.duration(60 * 20)
		.addMaterialInfo(true)

	// HV
	
	const mustangs = [
		{ suffix: 'black', dye: 'black', alt: 0 },
		{ suffix: 'bluestripe', dye: 'blue', alt: 1 },
		{ suffix: 'extravagant', dye: 'magenta', alt: 0 },
		{ suffix: 'lime', dye: 'lime', alt: 0 },
		{ suffix: 'orange', dye: 'orange', alt: 0 },
		{ suffix: 'police', dye: 'black', alt: 1 },
		{ suffix: 'red', dye: 'red', alt: 0 },
		{ suffix: 'redstripe', dye: 'red', alt: 1 },
		{ suffix: 'seagreen', dye: 'cyan', alt: 0 },
		{ suffix: 'silver', dye: 'light_gray', alt: 0 },
		{ suffix: 'white', dye: 'white', alt: 0 },
		{ suffix: 'whitestripe', dye: 'blue', alt: 1 },
		{ suffix: 'yellow', dye: 'yellow', alt: 0 },
	];
	mustangs.forEach(mustang => {
		event.recipes.gtceu.automotive_workshop(`mts:mtsofficialpack.fordmustang69_${mustang.suffix}`)
			.itemInputs(
				'mts:mtsofficialpack.enginefordfe428', '#create:valve_handles', '6x gtceu:tempered_glass',
				'4x #gtceu:circuits/hv', '4x gtceu:computer_monitor_cover', '6x #gtceu:batteries/hv',
				'16x #forge:plates/vanadium_steel', '4x #forge:frames/stainless_steel', '2x gtceu:hv_machine_hull',
				'6x mts:mtsofficialpack.headlight', '4x #forge:springs/blue_steel')
			.inputFluids(
				Fluid.of('tfg:woods_metal', 8 * 144),
				Fluid.of('gtceu:polyvinyl_chloride', 8 * 144),
				Fluid.of(`tfc:${mustang.dye}_dye`, 8 * 144))
			.itemOutputs(`mts:mtsofficialpack.fordmustang69_${mustang.suffix}`)
			.EUt(GTValues.VA[GTValues.HV])
			.duration(60 * 20)
			.circuit(4 + mustang.alt)
			.addMaterialInfo(true)
	})
	
	const mercedeses = [
		{ suffix: 'black', dye: 'black', alt: 0 },
		{ suffix: 'blue', dye: 'blue', alt: 0 },
		{ suffix: 'brown', dye: 'brown', alt: 0 },
		{ suffix: 'gray', dye: 'gray', alt: 0 },
		{ suffix: 'maroon', dye: 'red', alt: 1 },
		{ suffix: 'police', dye: 'green', alt: 1 },
		{ suffix: 'police2', dye: 'black', alt: 1 },
		{ suffix: 'red', dye: 'red', alt: 0 },
		{ suffix: 'seagreen', dye: 'cyan', alt: 0 },
		{ suffix: 'white', dye: 'white', alt: 0 }
	];
	mercedeses.forEach(merc => {
		event.recipes.gtceu.automotive_workshop(`mts:mtsofficialpack.merc230_${merc.suffix}`)
			.itemInputs(
				'mts:mtsofficialpack.enginemercedesm102', '#create:valve_handles', '6x gtceu:tempered_glass',
				'4x #gtceu:circuits/hv', '4x gtceu:computer_monitor_cover', '6x #gtceu:batteries/hv',
				'16x #forge:plates/vanadium_steel', '4x #forge:frames/stainless_steel', '2x gtceu:hv_machine_hull',
				'6x mts:mtsofficialpack.headlight', '4x #forge:springs/blue_steel')
			.inputFluids(
				Fluid.of('tfg:woods_metal', 8 * 144),
				Fluid.of('gtceu:polyvinyl_chloride', 8 * 144),
				Fluid.of(`tfc:${merc.dye}_dye`, 8 * 144))
			.itemOutputs(`mts:mtsofficialpack.merc230_${merc.suffix}`)
			.EUt(GTValues.VA[GTValues.HV])
			.duration(60 * 20)
			.circuit(6 + merc.alt)
			.addMaterialInfo(true)
	})

	// #endregion

	// #region Trailers

	event.recipes.gtceu.automotive_workshop('mts:mtsofficialpack.brigbedbox')
		.itemInputs('16x #forge:plates/steel', '2x #forge:frames/steel', '2x #minecraft:doors')
		.itemOutputs('mts:mtsofficialpack.brigbedbox')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(20 * 20)
		.circuit(20)
		.addMaterialInfo(true)

	event.recipes.gtceu.automotive_workshop('mts:mtsofficialpack.brigbeddump')
		.itemInputs('6x #forge:plates/steel', '2x #forge:frames/steel')
		.itemOutputs('mts:mtsofficialpack.brigbeddump')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(20 * 20)
		.circuit(21)
		.addMaterialInfo(true)

	event.recipes.gtceu.automotive_workshop('mts:mtsofficialpack.brigbedflat')
		.itemInputs('8x #minecraft:planks', '4x #forge:plates/steel')
		.itemOutputs('mts:mtsofficialpack.brigbedflat')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(20 * 20)
		.addMaterialInfo(true)
		
	event.recipes.gtceu.automotive_workshop('mts:mtsofficialpack.brigbedlogs')
		.itemInputs('2x #forge:plates/steel', '4x #forge:rods/long/steel')
		.itemOutputs('mts:mtsofficialpack.brigbedlogs')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(20 * 20)
		.circuit(22)
		.addMaterialInfo(true)

	event.recipes.gtceu.automotive_workshop('mts:mtsofficialpack.brigbedstake')
		.itemInputs('mts:mtsofficialpack.brigbedflat', '16x #tfc:lumber')
		.itemOutputs('mts:mtsofficialpack.brigbedstake')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(10 * 20)
		.addMaterialInfo(true)
		
	const brig_tankers = [
		{ suffix: 'blackred', dye: 'black' },
		{ suffix: 'blank', dye: 'white' },
		{ suffix: 'blueorange', dye: 'blue' },
		{ suffix: 'greenred', dye: 'green' },
		{ suffix: 'grey', dye: 'gray' }
	];
	brig_tankers.forEach(tanker => {
		event.recipes.gtceu.automotive_workshop(`mts:mtsofficialpack.brigbedtanker_${tanker.suffix}`)
			.itemInputs('2x gtceu:steel_drum', '#forge:frames/steel')
			.inputFluids(Fluid.of(`tfc:${tanker.dye}_dye`, 4 * 144))
			.itemOutputs(`mts:mtsofficialpack.brigbedtanker_${tanker.suffix}`)
			.EUt(GTValues.VA[GTValues.LV])
			.duration(20 * 20)
			.addMaterialInfo(true)
	})

	const brig_transports = [
		{ suffix: '', dye: 'gray' },
		{ suffix: '_brown', dye: 'white' },
		{ suffix: '_green', dye: 'green' },
		{ suffix: '_tan', dye: 'black' }
	];
	brig_transports.forEach(transport => {
		event.recipes.gtceu.automotive_workshop(`mts:mtsofficialpack.brigbedtransport${transport.suffix}`)
			.itemInputs('2x #forge:frames/steel', '2x #forge:plates/steel', '6x #forge:cloth')
			.inputFluids(Fluid.of(`tfc:${transport.dye}_dye`, 4 * 144))
			.itemOutputs(`mts:mtsofficialpack.brigbedtanker_${transport.suffix}`)
			.EUt(GTValues.VA[GTValues.LV])
			.duration(20 * 20)
			.addMaterialInfo(true)
	})
	
	event.recipes.gtceu.automotive_workshop('mts:belroftmotors.boat_trailer')
		.itemInputs('8x #forge:rods/steel', '2x #forge:rods/long/steel', '2x #forge:plates/steel')
		.itemOutputs('mts:belroftmotors.boat_trailer')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(20 * 20)
		.circuit(23)
		.addMaterialInfo(true)
	
	event.recipes.gtceu.automotive_workshop('mts:belroftmotors.trailer_cars')
		.itemInputs('8x #forge:rods/steel', '4x #forge:rods/long/steel', '4x #forge:plates/steel')
		.itemOutputs('mts:belroftmotors.trailer_cars')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(20 * 20)
		.circuit(24)
		.addMaterialInfo(true)
	
	event.recipes.gtceu.automotive_workshop('mts:belroftmotors.trailer_trucks')
		.itemInputs('8x #forge:rods/steel', '6x #forge:rods/long/steel', '6x #forge:plates/steel')
		.itemOutputs('mts:belroftmotors.trailer_trucks')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(20 * 20)
		.circuit(25)
		.addMaterialInfo(true)
		

	const dry_vans = [
		{ suffix: 'black', dye: 'black', alt: 0 },
		{ suffix: 'blue', dye: 'blue', alt: 0 },
		{ suffix: 'brown', dye: 'brown', alt: 0 },
		{ suffix: 'cherry_red', dye: 'red', alt: 1 },
		{ suffix: 'copper', dye: 'orange', alt: 0 },
		{ suffix: 'cyan', dye: 'cyan', alt: 0 },
		{ suffix: 'emerald', dye: 'green', alt: 0 },
		{ suffix: 'gray', dye: 'gray', alt: 0 },
		{ suffix: 'green', dye: 'lime', alt: 0 },
		{ suffix: 'khaki', dye: 'light_gray', alt: 0 },
		{ suffix: 'marine', dye: 'cyan', alt: 1 },
		{ suffix: 'olive', dye: 'green', alt: 1 },
		{ suffix: 'purple', dye: 'purple', alt: 0 },
		{ suffix: 'red', dye: 'red', alt: 0 },
		{ suffix: 'tan', dye: 'yellow', alt: 0 },
		{ suffix: 'white', dye: 'white', alt: 0 },
		{ suffix: 'yellow', dye: 'yellow', alt: 0 },
	];
	dry_vans.forEach(dry_van => {
		event.recipes.gtceu.automotive_workshop(`mts:belroftmotors.trailer_dry_van_${dry_van.suffix}`)
			.itemInputs(
				'16x #forge:plates/aluminium', '16x #forge:plates/aluminium', '4x #forge:frames/aluminium',
				'2x #minecraft:doors', '8x mts:mtsofficialpack.wheellarge')
			.inputFluids(
				Fluid.of('gtceu:soldering_alloy', 4 * 144),
				Fluid.of(`tfc:${dry_van.dye}_dye`, 8 * 144))
			.itemOutputs(`mts:belroftmotors.trailer_dry_van_${dry_van.suffix}`)
			.EUt(GTValues.VA[GTValues.MV])
			.duration(20 * 20)
			.circuit(20 + dry_van.alt)
			.addMaterialInfo(true)

		event.recipes.gtceu.automotive_workshop(`mts:belroftmotors.trailer_tanker_${dry_van.suffix}`)
			.itemInputs(
				'2x gtceu:aluminium_drum', '16x #forge:plates/aluminium', '4x #forge:plates/aluminium',
				'4x #forge:frames/aluminium', 'create:fluid_valve', '8x mts:mtsofficialpack.wheellarge')
			.inputFluids(
				Fluid.of('gtceu:soldering_alloy', 4 * 144),
				Fluid.of(`tfc:${dry_van.dye}_dye`, 8 * 144))
			.itemOutputs(`mts:belroftmotors.trailer_tanker_${dry_van.suffix}`)
			.EUt(GTValues.VA[GTValues.MV])
			.duration(20 * 20)
			.circuit(22 + dry_van.alt)
			.addMaterialInfo(true)
	})

	// #endregion
}