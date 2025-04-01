// priority: 0

function registerImmersiveAircraftRecipes(event) {

	event.remove({ mod: 'immersive_aircraft' })

	event.shaped('immersive_aircraft:engine', [
		'DAE',
		'CBC'
	], {
		A: 'gtceu:tin_alloy_small_fluid_pipe',
		B: 'gtceu:steel_brick_casing',
		C: '#tfg:metal_bars',
		D: '#forge:tools/hammers',
		E: '#forge:tools/wrenches'
	})
	.id('iatfg:engine_r')

	event.replaceInput({ id: 'iatfg:sail_r' }, 'framedblocks:framed_trapdoor', '#minecraft:trapdoors')

	event.replaceInput({ id: 'iatfg:airship_r' }, 'create:propeller', '#forge:rotors')

	event.replaceInput({ id: 'iatfg:cargo_airship_r' }, 'create:propeller', '#forge:rotors')

	event.replaceInput({ id: 'iatfg:quadrocopter_r' }, 'create:propeller', '#forge:rotors')

	event.replaceInput({ id: 'iatfg:enhanced_propeller_r' }, 'create:propeller', '#forge:rotors')

	event.replaceInput({ id: 'immersive_aircraft:gyroscope' }, 'minecraft:compass', 'firmaciv:firmaciv_compass')

	event.shaped('immersive_aircraft:improved_landing_gear', [
		'EAB',
		'CDA',
		'CCF'
	], {
		A: '#forge:plates/steel',
		B: '#forge:rods/steel',
		C: '#forge:plates/rubber',
		D: 'tfc:brass_mechanisms',
		E: '#forge:tools/wrenches',
		F: '#forge:tools/screwdrivers'
	}).id('iatfg:improved_landing_gear_r')
}