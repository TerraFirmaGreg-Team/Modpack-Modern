// priority: 0
"use strict";

function registerImmersiveVehiclesPartsRecipes(event) {
	
	// #region Wheels
	event.shaped('mts:mtsofficialpack.wheelsmall', [
		' B ',
		' A ',
		' B '
	], {
		A: '#forge:rings/steel',
		B: '#tfg:rubber_plates'
	}).id('mts:mtsofficialpack.wheelsmall')

	event.shaped('mts:mtsofficialpack.wheelmedium', [
		' B ',
		'BAB',
		' B '
	], {
		A: '#forge:small_gears/steel',
		B: '#tfg:rubber_plates'
	}).id('mts:mtsofficialpack.wheelmedium')

	event.shaped('mts:mtsofficialpack.wheellarge', [
		'BBB',
		'BAB',
		'BBB'
	], {
		A: '#forge:small_gears/steel',
		B: '#tfg:rubber_plates'
	}).id('mts:mtsofficialpack.wheellarge')

	event.shaped('mts:mtsofficialpack.wheelhuge', [
		'BBB',
		'BAB',
		'BBB'
	], {
		A: '#forge:gears/steel',
		B: '#tfg:rubber_plates'
	}).id('mts:mtsofficialpack.wheelhuge')
	// #endregion

	// #region Propellers

	event.shaped('mts:mtsofficialpack.propellersmall3blade', [
		'BFB',
		'CAE',
		'BD '
	], {
		A: '#forge:rings/steel',
		B: '#forge:rods/long/steel',
		C: '#forge:screws/steel',
		D: '#forge:tools/screwdrivers',
		E: '#forge:tools/files',
		F: '#forge:tools/hammers'
	}).id('mts:mtsofficialpack.propellersmall3blade')

	event.recipes.gtceu.assembler('mts:mtsofficialpack.propellersmall3blade')
		.itemInputs('#forge:rings/steel', '3x #forge:rods/long/steel', '#forge:screws/steel')
		.itemOutputs('mts:mtsofficialpack.propellersmall3blade')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)

	event.shaped('mts:mtsofficialpack.propellersmall2blade', [
		' FB',
		'CAE',
		'BD '
	], {
		A: '#forge:rings/cobalt_brass',
		B: '#forge:rods/long/cobalt_brass',
		C: '#forge:screws/steel',
		D: '#forge:tools/screwdrivers',
		E: '#forge:tools/files',
		F: '#forge:tools/hammers'
	}).id('mts:mtsofficialpack.propellersmall2blade')

	event.recipes.gtceu.assembler('mts:mtsofficialpack.propellersmall2blade')
		.itemInputs('#forge:rings/cobalt_brass', '2x #forge:rods/long/cobalt_brass', '#forge:screws/steel')
		.itemOutputs('mts:mtsofficialpack.propellersmall2blade')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)

	event.shaped('mts:mtsofficialpack.propellerlarge2blade', [
		'AA ',
		'CBD',
		' AA'
	], {
		A: '#forge:rods/long/aluminium',
		B: '#forge:rotors/aluminium',
		C: '#forge:screws/steel',
		D: '#forge:tools/screwdrivers'
	}).id('mts:mtsofficialpack.propellerlarge2blade')

	event.recipes.gtceu.assembler('mts:mtsofficialpack.propellerlarge2blade')
		.itemInputs('#forge:rotors/aluminium', '4x #forge:rods/long/aluminium', '#forge:screws/steel')
		.itemOutputs('mts:mtsofficialpack.propellerlarge2blade')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)

	event.recipes.create.mechanical_crafting('mts:mtsofficialpack.propellerrotor', [
		'   C   ',
		'AAABAAA'
	], {
		A: '#forge:rods/long/black_steel',
		B: '#forge:rotors/steel',
		C: '#forge:screws/steel'
	}).id('mts:mtsofficialpack.propellerrotor')

	event.recipes.gtceu.assembler('mts:mtsofficialpack.propellerrotor')
		.itemInputs('#forge:rotors/steel', '6x #forge:rods/long/black_steel', '#forge:screws/steel')
		.itemOutputs('mts:mtsofficialpack.propellerrotor')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)

	event.recipes.create.mechanical_crafting('mts:mtsofficialpack.propellerrotor206', [
		'    C    ',
		'AAAABAAAA'
	], {
		A: '#forge:rods/long/aluminium',
		B: '#forge:rotors/aluminium',
		C: '#forge:screws/steel'
	}).id('mts:mtsofficialpack.propellerrotor206')

	event.recipes.gtceu.assembler('mts:mtsofficialpack.propellerrotor206')
		.itemInputs('#forge:rotors/aluminium', '8x #forge:rods/long/aluminium', '#forge:screws/steel')
		.itemOutputs('mts:mtsofficialpack.propellerrotor206')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)

	event.shapeless('mts:belroftmotors.tuna_propeller',
		['#tfg:any_bronze_rotor', '#forge:screws/steel', '#forge:tools/screwdrivers'])
		.id('mts:belroftmotors.tuna_propeller')

	event.shapeless('mts:belroftmotors.barracuda_propeller',
		['#forge:rotors/steel', '#forge:screws/steel', '#forge:tools/screwdrivers'])
		.id('mts:belroftmotors.barracuda_propeller')

	// #endregion

	// #region Seats
	event.shaped('mts:mtsofficialpack.carseat_brown', [
		' D ',
		'ABC',
		'ABC'
	], {
		A: '#forge:leather',
		B: '#minecraft:wooden_slabs',
		C: '#forge:screws',
		D: '#forge:tools/screwdrivers'
	}).id('mts:mtsofficialpack.carseat_brown')

	event.recipes.gtceu.assembler('mts:mtsofficialpack.carseat_brown')
		.itemInputs('2x #forge:leather', '2x #minecraft:wooden_slabs', '2x #forge:screws')
		.itemOutputs('mts:mtsofficialpack.carseat_brown')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.tfc.barrel_sealed(1000)
		.inputs(Ingredient.of('#mts:carseats').subtract(`mts:mtsofficialpack.carseat_brown`), Fluid.of(`tfc:lye`, 144))
		.outputItem(`mts:mtsofficialpack.carseat_brown`)
		.id(`tfg:barrel/mts/carseat_brown`)

	event.recipes.gtceu.chemical_bath(`mts:mtsofficialpack.carseat_brown`)
		.itemInputs(Ingredient.of('#mts:carseats').subtract(`mts:mtsofficialpack.carseat_brown`))
		.inputFluids(Fluid.of(`gtceu:chlorine`, 144))
		.itemOutputs(`mts:mtsofficialpack.carseat_brown`)
		.duration(200)
		.EUt(4)
		.category(GTRecipeCategories.CHEM_DYES)

	const car_seats = [
		{ dye: 'black', mts: 'black' },
		{ dye: 'gray', mts: 'grey' },
		{ dye: 'brown', mts: 'maroon' },
		{ dye: 'red', mts: 'red' },
		{ dye: 'orange', mts: 'tan' },
		{ dye: 'white', mts: 'white' }
	]
	car_seats.forEach(seat => {
		event.recipes.tfc.barrel_sealed(1000)
			.inputs(`mts:mtsofficialpack.carseat_brown`, Fluid.of(`tfc:${seat.dye}_dye`, 144))
			.outputItem(`mts:mtsofficialpack.carseat_${seat.mts}`)
			.id(`tfg:barrel/mts/carseat_${seat.mts}`)

		event.recipes.gtceu.chemical_bath(`mts:mtsofficialpack.carseat_${seat.mts}`)
			.itemInputs(`mts:mtsofficialpack.carseat_brown`)
			.inputFluids(Fluid.of(`tfc:${seat.dye}_dye`, 144))
			.itemOutputs(`mts:mtsofficialpack.carseat_${seat.mts}`)
			.duration(200)
			.EUt(4)
			.category(GTRecipeCategories.CHEM_DYES)
	})

	const av_seats = [
		{ dye: 'white', mts: 'white' },
		{ dye: 'yellow', mts: 'yellow' },
		{ dye: 'red', mts: 'red' },
		{ dye: 'purple', mts: 'pink' },
		{ dye: 'gray', mts: 'grey' },
		{ dye: 'green', mts: 'olive' },
		{ dye: 'cyan', mts: 'cyan' },
		{ dye: 'brown', mts: 'brown' },
		{ dye: 'blue', mts: 'blue' },
		{ dye: 'black', mts: 'black' }
	]
	av_seats.forEach(seat => {
		event.shaped(`mts:mtsofficialpack.seat${seat.mts}`, [
			'AC ',
			'BAB'
		], {
			A: `create:${seat.dye}_seat`,
			B: '#forge:screws',
			C: '#forge:tools/screwdrivers'
		}).id(`mts:mtsofficialpack.seat${seat.mts}`)

		event.recipes.gtceu.assembler(`mts:mtsofficialpack.seat${seat.mts}`)
			.itemInputs(`create:${seat.dye}_seat`, '2x #forge:screws')
			.itemOutputs(`mts:mtsofficialpack.seat${seat.mts}`)
			.duration(50)
			.EUt(GTValues.VA[GTValues.ULV])
			.circuit(2)

		if (seat.create !== 'white') {
			event.recipes.tfc.barrel_sealed(1000)
				.inputs(`mts:mtsofficialpack.seatwhite`, Fluid.of(`tfc:${seat.dye}_dye`, 144))
				.outputItem(`mts:mtsofficialpack.seat${seat.mts}`)
				.id(`tfg:barrel/mts/seat_${seat.mts}`)

			event.recipes.gtceu.chemical_bath(`mts:mtsofficialpack.seat${seat.mts}`)
				.itemInputs(`mts:mtsofficialpack.seatwhite`)
				.inputFluids(Fluid.of(`tfc:${seat.dye}_dye`, 144))
				.itemOutputs(`mts:mtsofficialpack.seat${seat.mts}`)
				.duration(200)
				.EUt(4)
				.category(GTRecipeCategories.CHEM_DYES)
		}
		else {
			event.recipes.tfc.barrel_sealed(1000)
				.inputs(Ingredient.of('#mts:avseats').subtract(`mts:mtsofficialpack.seatwhite`), Fluid.of(`tfc:lye`, 144))
				.outputItem(`mts:mtsofficialpack.seatwhite`)
				.id(`tfg:barrel/mts/seat_white`)

			event.recipes.gtceu.chemical_bath(`mts:mtsofficialpack.seatwhite`)
				.itemInputs(Ingredient.of('#mts:avseats').subtract(`mts:mtsofficialpack.seatwhite`))
				.inputFluids(Fluid.of(`gtceu:chlorine`, 144))
				.itemOutputs(`mts:mtsofficialpack.seatwhite`)
				.duration(200)
				.EUt(4)
				.category(GTRecipeCategories.CHEM_DYES)
		}
	})

	// #endregion

	// #region Indicators/gauges
	const indicators = Ingredient.of('#mts:indicators').itemIds.toArray().map(String);
	indicators.forEach(i => {
		event.stonecutting(i, '#mts:indicators')
			.id(global.linuxUnfucker(`mts:stonecutting/${i}`))
		event.stonecutting(Item.of(i).withCount(4), 'vintageimprovements:redstone_module')
			.id(global.linuxUnfucker(`mts:stonecutting/${i}_redstone`))
	})
	// #endregion

}