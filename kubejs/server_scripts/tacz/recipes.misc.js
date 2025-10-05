"use strict";

function registerTACZMiscRecipes(event) {
	
	//Targets etc
	event.shaped('tacz:target',[
		'ABA',
		'BCB',
		' B '
	],{
		A: '#forge:dyes/red',
		B: '#forge:foils/steel',
		C: '#forge:rods/long/wood'
	}).id('tfg_tacz:target');
	
	event.shaped('tacz:statue',[
		'BAB',
		'BAB',
		' A '
	],{
		A: 'tfc:rock/chiseled/marble',
		B: 'tfc:rock/smooth/marble_stairs'
	}).id('tfg_tacz:statue');
	
	event.shapeless('tacz:target_minecart',
		['tacz:target', 'minecraft:minecart']
	).id('tfg_tacz:target_minecart');
	
	
	//Molds
	event.shaped('tfg:small_casing_extruder_mold',[
		' A ',
		'B  ',
		'  C'
	],{
		A: '#forge:tools/wire_cutters',
		B: 'gtceu:empty_mold',
		C: '#forge:tools/files'
	}).id('tfg:small_casing_extruder_mold');
	
	event.shaped('tfg:large_casing_extruder_mold',[
		'   ',
		'AB ',
		'  C'
	],{
		A: '#forge:tools/wire_cutters',
		B: 'gtceu:empty_mold',
		C: '#forge:tools/files'
	}).id('tfg:large_casing_extruder_mold');
	
	event.shaped('tfg:shell_casing_extruder_mold',[
		'  C',
		'AB ',
		'   '
	],{
		A: '#forge:tools/wire_cutters',
		B: 'gtceu:empty_mold',
		C: '#forge:tools/files'
	}).id('tfg:shell_casing_extruder_mold');
	
	//Mechanisms
	event.shaped('tfg:flintlock_mechanism', [
		'ABC',
		'DEF',
		'GHI'
	], {
		A: '#forge:tools/screwdrivers',
		B: '#forge:gems/flint',
		C: '#forge:tools/files',
		D: '#forge:springs',
		E: '#forge:bolts/steel',
		F: '#forge:plates/steel',
		G: '#forge:tools/wire_cutters',
		H: '#forge:small_gears/steel',
		I: '#forge:tools/hammers'
	}).id('tfg:shaped/flintlock_mechanism');
	
	event.recipes.gtceu.assembler('tfg:advanced_clockwork_mechanism')
		.itemInputs('2x greate:aluminium_cogwheel', 'greate:silicone_rubber_belt_connector', '2x #forge:springs/aluminium', 
					'8x #forge:screws/aluminium', '#forge:gears/cobalt_brass', '3x #forge:rings/silicone_rubber')
		.itemOutputs('tfg:advanced_clockwork_mechanism')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(80)
		
	event.recipes.gtceu.assembler('tfg:certus_mechanism')
		.itemInputs('2x ae2:charged_certus_quartz_crystal', '2x #forge:gears/titanium', '4x #forge:springs/hsla_steel', 
					'16x #forge:screws/titanium', '2x #forge:rods/titanium', '6x #forge:rings/styrene_butadiene_rubber',
					'16x #forge:fine_wires/red_alloy')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
		.itemOutputs('tfg:certus_mechanism')
		.EUt(GTValues.VA[GTValues.EV])
		.duration(80)
}
