"use strict";

function registerTACZGunRecipes(event){
	
	//Region flintlock era
	event.shaped(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"ulv_guns:flintlock",HasBulletInBarrel:1b}'), [
		'ABC',
		' DD',
		'EFG'
	], {
		A: '#forge:tools/files',
		B: 'tfg:flintlock_mechanism',
		C: 'gtceu:steel_small_fluid_pipe',
		D: '#firmaciv:hard_wood',
		E: '#forge:tools/saws',
		F: '#forge:ingots/brass',
		G: '#forge:tools/screwdrivers'
		
	}).id('tacz:flintlock_pistol');
	/* NYI
	event.shaped(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"ulv_guns:blunderbuss",HasBulletInBarrel:1b}'), [
		'ABC',
		'DDD',
		'EFG'
	], {
		A: '#forge:tools/files',
		B: 'tfg:flintlock_mechanism',
		C: 'gtceu:steel_normal_fluid_pipe',
		D: '#firmaciv:hard_wood',
		E: '#forge:tools/saws',
		F: '#forge:ingots/brass',
		G: '#forge:tools/screwdrivers'
		
	}).id('tacz:blunderbuss_shotgun');
	*/
	event.shaped(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:springfield1873",HasBulletInBarrel:1b}'), [
		'ABC',
		'DDD',
		'EFG'
	], {
		A: '#forge:tools/files',
		B: 'tfg:flintlock_mechanism',
		C: 'gtceu:steel_small_fluid_pipe',
		D: 'gtceu:treated_wood_planks',
		E: '#forge:tools/saws',
		F: '#forge:ingots/black_steel',
		G: '#forge:tools/screwdrivers'
		
	}).id('tacz:trapdoor_rifle');
	
	//DB shotguns
	event.recipes.gtceu.assembler('tfg_tacz:db_short')
		.itemInputs('2x gtceu:steel_small_fluid_pipe', '4x #forge:ingots/black_steel', '#forge:rods/black_steel',
					'3x gtceu:treated_wood_planks', '10x #forge:screws/black_steel', 'tfg:advanced_clockwork_mechanism')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 432))
		.itemOutputs(Item.of('tacz:modern_kinetic_gun', 
					'{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:db_short",HasBulletInBarrel:1b}'))
		.circuit(1)
		.EUt(GTValues.VA[GTValues.MV])
		.duration(60)
	event.recipes.gtceu.assembler('tfg_tacz:db_long')
		.itemInputs('4x gtceu:steel_small_fluid_pipe', '4x #forge:ingots/black_steel', '#forge:rods/black_steel',
					'6x gtceu:treated_wood_planks', '14x #forge:screws/black_steel', 'tfg:advanced_clockwork_mechanism')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 576))
		.itemOutputs(Item.of('tacz:modern_kinetic_gun', 
					'{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:db_long",HasBulletInBarrel:1b}'))
		.circuit(2)
		.EUt(GTValues.VA[GTValues.MV])
		.duration(100)
	
	//Region clockwork era
	event.recipes.gtceu.assembler('tfg_tacz:ca_torque_revo')
		.itemInputs('gtceu:steel_small_fluid_pipe', '4x #forge:ingots/aluminium', '2x #forge:plates/brass',
					'6x #forge:rings/brass', '2x gtceu:treated_wood_planks', '8x #forge:screws/black_steel', 
					'tfg:advanced_clockwork_mechanism')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
		.itemOutputs(Item.of('tacz:modern_kinetic_gun', 
			'{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"create_armorer:pistol_revolver_torque",HasBulletInBarrel:1b}'))
		.circuit(1)
		.EUt(GTValues.VA[GTValues.MV])
		.duration(80)
	event.recipes.gtceu.assembler('tfg_tacz:ca_crane')
		.itemInputs('gtceu:steel_small_fluid_pipe', '7x #forge:ingots/aluminium', '2x #forge:ingots/black_steel', 
					'4x #forge:plates/brass','2x gtceu:copper_tiny_fluid_pipe', '2x gtceu:treated_wood_planks', 
					'2x #forge:small_gears/steel', '14x #forge:screws/black_steel', 'tfg:advanced_clockwork_mechanism')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 540))
		.itemOutputs(Item.of('tacz:modern_kinetic_gun', 
			'{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"create_armorer:rifle_assult_crane",HasBulletInBarrel:1b}'))
		.EUt(GTValues.VA[GTValues.MV])
		.duration(100)
	event.recipes.gtceu.assembler('tfg_tacz:ca_pump_bearing')
		.itemInputs('2x gtceu:steel_small_fluid_pipe', '4x #forge:ingots/aluminium', '4x #forge:plates/brass',
					'8x gtceu:treated_wood_planks', '#forge:small_gears/steel', '#forge:gears/steel', 
					'16x #forge:screws/black_steel', 'tfg:advanced_clockwork_mechanism')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 432))
		.itemOutputs(Item.of('tacz:modern_kinetic_gun', 
			'{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"create_armorer:shotgun_pump_bearing",HasBulletInBarrel:0b}'))
		.EUt(GTValues.VA[GTValues.MV])
		.circuit(3)
		.duration(100)
	event.recipes.gtceu.assembler('tfg_tacz:ca_clockwork_sniper')
		.itemInputs('gtceu:steel_normal_fluid_pipe', '7x #forge:ingots/aluminium', '7x #forge:ingots/black_steel', 
					'4x #forge:plates/brass','6x gtceu:copper_tiny_fluid_pipe', '2x gtceu:treated_wood_planks',  
					'14x #forge:screws/black_steel', 'tfg:advanced_clockwork_mechanism')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 792))
		.itemOutputs(Item.of('tacz:modern_kinetic_gun', 
			'{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"create_armorer:sniper_semi_clockwork",HasBulletInBarrel:1b}'))
		.EUt(GTValues.VA[GTValues.MV])
		.circuit(4)
		.duration(120)
	event.recipes.gtceu.assembler('tfg_tacz:ca_flywheel_mg')
		.itemInputs('gtceu:steel_normal_fluid_pipe', '10x #forge:ingots/aluminium', '6x #forge:ingots/black_steel', 
					'6x #forge:plates/brass', 'create:steam_engine', '3x gtceu:steel_tiny_fluid_pipe', 
					'2x gtceu:treated_wood_planks','20x #forge:screws/black_steel', '2x tfg:advanced_clockwork_mechanism')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 936))
		.itemOutputs(Item.of('tacz:modern_kinetic_gun', 
			'{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"create_armorer:mg_platemag_flywheel",HasBulletInBarrel:1b}'))
		.EUt(GTValues.VA[GTValues.MV])
		.duration(160)
	
	
	//Region certus era
	event.recipes.gtceu.assembler('tfg_tacz:aa_pride')
		.itemInputs('gtceu:titanium_small_fluid_pipe', '4x #forge:ingots/titanium', '2x #forge:plates/stainless_steel',
					'2x #forge:rods/long/titanium', '8x #forge:screws/hsla_steel', 'tfg:certus_mechanism')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 1152))
		.itemOutputs(Item.of('tacz:modern_kinetic_gun', 
			'{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"applied_armorer:niklas_pistol_semi_pride",HasBulletInBarrel:0b}'))
		.circuit(2)
		.EUt(GTValues.VA[GTValues.EV])
		.duration(80)
		
	event.recipes.gtceu.assembler('tfg_tacz:aa_right')
		.itemInputs('gtceu:titanium_small_fluid_pipe', '5x #forge:ingots/titanium', '3x #forge:plates/stainless_steel',
					'#forge:rods/long/titanium', '10x #forge:screws/hsla_steel', 'tfg:certus_mechanism')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 1152))
		.itemOutputs(Item.of('tacz:modern_kinetic_gun', 
		'{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"applied_armorer:niklas_pistol_semi_right",HasBulletInBarrel:0b}'))
		.circuit(1)
		.EUt(GTValues.VA[GTValues.EV])
		.duration(80)
		
	event.recipes.gtceu.assembler('tfg_tacz:aa_win_win')
		.itemInputs('2x gtceu:titanium_small_fluid_pipe', '10x #forge:ingots/titanium', '6x #forge:plates/stainless_steel',
					'2x #forge:rods/long/titanium', '16x #forge:screws/hsla_steel', 'tfg:certus_mechanism')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 2304))
		.itemOutputs(Item.of('tacz:modern_kinetic_gun', 
			'{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"applied_armorer:niklas_pistol_double_win_win",HasBulletInBarrel:1b}'))
		.circuit(3)
		.EUt(GTValues.VA[GTValues.EV])
		.duration(120)
		
	event.recipes.gtceu.assembler('tfg_tacz:aa_ar')
		.itemInputs('gtceu:titanium_small_fluid_pipe', '10x #forge:ingots/titanium', '5x #forge:plates/stainless_steel',
					'2x #forge:rods/long/hsla_steel', '2x tfc:lens', '20x #forge:screws/hsla_steel', 
					'tfg:certus_mechanism')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 2880))
		.itemOutputs(Item.of('tacz:modern_kinetic_gun', 
			'{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"applied_armorer:moritz_rifle_ar77",HasBulletInBarrel:1b}'))
		.circuit(5)
		.EUt(GTValues.VA[GTValues.EV])
		.duration(180)
		
	event.recipes.gtceu.assembler('tfg_tacz:aa_914')
		.itemInputs('gtceu:titanium_small_fluid_pipe', '10x #forge:ingots/titanium', '10x #forge:plates/stainless_steel',
					'2x #forge:rods/long/hsla_steel', '2x tfc:lens', '20x #forge:screws/hsla_steel', 
					'tfg:certus_mechanism')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 1728))
		.itemOutputs(Item.of('tacz:modern_kinetic_gun', 
			'{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"applied_armorer:moritz_shotgun_sg914",HasBulletInBarrel:0b}'))
		.circuit(6)
		.EUt(GTValues.VA[GTValues.EV])
		.duration(180)
		
	event.recipes.gtceu.assembler('tfg_tacz:aa_k30')
		.itemInputs('2x gtceu:titanium_small_fluid_pipe', '8x #forge:ingots/titanium', '2x #forge:ingots/magnalium', 
					'8x #forge:plates/stainless_steel', '3x #forge:rods/long/hsla_steel', '2x tfc:lens', 
					'24x #forge:screws/hsla_steel', 'tfg:certus_mechanism')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 1728))
		.itemOutputs(Item.of('tacz:modern_kinetic_gun', 
			'{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"applied_armorer:moritz_sniper_semi_k30",HasBulletInBarrel:0b}'))
		.circuit(4)
		.EUt(GTValues.VA[GTValues.EV])
		.duration(220)
		
	event.recipes.gtceu.assembler('tfg_tacz:aa_gl')
		.itemInputs('gtceu:tungsten_steel_normal_fluid_pipe', '12x #forge:ingots/titanium', '6x #forge:plates/stainless_steel', 
					'4x #forge:rods/long/tungsten_carbide', '2x tfc:lens', '30x #forge:screws/tungsten', 
					'2x tfg:certus_mechanism')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 2304))
		.itemOutputs(Item.of('tacz:modern_kinetic_gun', 
			'{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"applied_armorer:moritz_gernade_gl3",HasBulletInBarrel:1b}'))
		.circuit(8)
		.EUt(GTValues.VA[GTValues.EV])
		.duration(240)
	
	event.recipes.gtceu.assembler('tfg_tacz:ca_cannon')
		.itemInputs('2x gtceu:tungsten_large_fluid_pipe', '2x gtceu:tungsten_normal_fluid_pipe', '10x #forge:ingots/titanium',
					'4x #forge:ingots/tungsten', '10x #forge:plates/brass', 'create:gantry_shaft',
					'4x gtceu:treated_wood_planks', '30x #forge:screws/tungsten', '3x tfg:advanced_clockwork_mechanism')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 3024))
		.itemOutputs(Item.of('tacz:modern_kinetic_gun', 
							 '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"create_armorer:cannon_40mm_salamander",HasBulletInBarrel:1b}'))
		.EUt(GTValues.VA[GTValues.EV])
		.duration(300)
	
}