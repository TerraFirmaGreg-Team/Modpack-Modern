
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
	
	//Region clockwork era
	
	//Region certus era
	event.recipes.gtceu.assembler('tfg_tacz:aa_pride')
		.itemInputs('gtceu:titanium_small_fluid_pipe', '4x #forge:ingots/titanium', '2x #forge:plates/stainless_steel',
					'2x #forge:rods/long/titanium', '8x #forge:screws/tungsten', 'tfg:certus_mechanism')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 1152))
		.itemOutputs(Item.of('tacz:modern_kinetic_gun', 
			'{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"applied_armorer:niklas_pistol_semi_pride",HasBulletInBarrel:0b}'))
		.circuit(1)
		.EUt(GTValues.VA[GTValues.EV])
		.duration(80)
		
	event.recipes.gtceu.assembler('tfg_tacz:aa_right')
		.itemInputs('gtceu:titanium_small_fluid_pipe', '5x #forge:ingots/titanium', '3x #forge:plates/stainless_steel',
					'#forge:rods/long/titanium', '10x #forge:screws/tungsten', 'tfg:certus_mechanism')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 1152))
		.itemOutputs(Item.of('tacz:modern_kinetic_gun', 
		'{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"applied_armorer:niklas_pistol_semi_right",HasBulletInBarrel:0b}'))
		.circuit(2)
		.EUt(GTValues.VA[GTValues.EV])
		.duration(80)
		
	event.recipes.gtceu.assembler('tfg_tacz:aa_win_win')
		.itemInputs('2x gtceu:titanium_small_fluid_pipe', '8x #forge:ingots/titanium', '4x #forge:plates/stainless_steel',
					'2x #forge:rods/long/titanium', '16x #forge:screws/tungsten', '2x tfg:certus_mechanism')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 2304))
		.itemOutputs(Item.of('tacz:modern_kinetic_gun', 
			'{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"applied_armorer:niklas_pistol_double_win_win",HasBulletInBarrel:1b}'))
		.circuit(3)
		.EUt(GTValues.VA[GTValues.EV])
		.duration(120)
		
	event.recipes.gtceu.assembler('tfg_tacz:aa_ar')
		.itemInputs('gtceu:titanium_small_fluid_pipe', '10x #forge:ingots/titanium', '5x #forge:plates/stainless_steel',
					'2x #forge:rods/long/tungsten_carbide', '2x tfc:lens', '20x #forge:screws/tungsten', 
					'tfg:certus_mechanism')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 2880))
		.itemOutputs(Item.of('tacz:modern_kinetic_gun', 
			'{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"applied_armorer:moritz_rifle_ar77",HasBulletInBarrel:1b}'))
		.circuit(4)
		.EUt(GTValues.VA[GTValues.EV])
		.duration(180)
		
	event.recipes.gtceu.assembler('tfg_tacz:aa_914')
		.itemInputs('gtceu:titanium_small_fluid_pipe', '10x #forge:ingots/titanium', '10x #forge:plates/stainless_steel',
					'2x #forge:rods/long/tungsten_carbide', '2x tfc:lens', '20x #forge:screws/tungsten', 
					'tfg:certus_mechanism')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 1728))
		.itemOutputs(Item.of('tacz:modern_kinetic_gun', 
			'{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"applied_armorer:moritz_shotgun_sg914",HasBulletInBarrel:0b}'))
		.circuit(5)
		.EUt(GTValues.VA[GTValues.EV])
		.duration(180)
		
	event.recipes.gtceu.assembler('tfg_tacz:aa_k30')
		.itemInputs('2x gtceu:titanium_small_fluid_pipe', '8x #forge:ingots/titanium', '2x #forge:ingots/magnalium', 
					'8x #forge:plates/stainless_steel', '3x #forge:rods/long/tungsten_carbide', '2x tfc:lens', 
					'24x #forge:screws/tungsten', 'tfg:certus_mechanism')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 1728))
		.itemOutputs(Item.of('tacz:modern_kinetic_gun', 
			'{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"applied_armorer:moritz_sniper_semi_k30",HasBulletInBarrel:0b}'))
		.circuit(6)
		.EUt(GTValues.VA[GTValues.EV])
		.duration(220)
		
	event.recipes.gtceu.assembler('tfg_tacz:aa_gl')
		.itemInputs('gtceu:tungsten_steel_normal_fluid_pipe', '12x #forge:ingots/titanium', '6x #forge:plates/stainless_steel', 
					'4x #forge:rods/long/tungsten_carbide', '2x tfc:lens', '30x #forge:screws/tungsten', 
					'2x tfg:certus_mechanism')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 2304))
		.itemOutputs(Item.of('tacz:modern_kinetic_gun', 
			'{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"applied_armorer:moritz_gernade_gl3",HasBulletInBarrel:1b}'))
		.circuit(7)
		.EUt(GTValues.VA[GTValues.EV])
		.duration(240)
	
}