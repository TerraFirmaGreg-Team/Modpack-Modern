
function registerTACZAmmoRecipes(event){
	
	//Extruder Casing
	event.recipes.gtceu.extruder('tfg_tacz:small_casing')
		.itemInputs('#forge:ingots/brass')
		.notConsumable('tfg:small_casing_extruder_mold')
		.itemOutputs('6x tfg:small_bullet_casing')
		.duration(10)
		.EUt(GTValues.VA[GTValues.MV])
	event.recipes.gtceu.extruder('tfg_tacz:shell_casing')
		.itemInputs('#forge:ingots/brass')
		.notConsumable('tfg:shell_casing_extruder_mold')
		.itemOutputs('3x tfg:shell_bullet_casing')
		.duration(10)
		.EUt(GTValues.VA[GTValues.MV])
	event.recipes.gtceu.extruder('tfg_tacz:large_casing')
		.itemInputs('#forge:ingots/brass')
		.notConsumable('tfg:large_casing_extruder_mold')
		.itemOutputs('5x tfg:large_bullet_casing')
		.duration(10)
		.EUt(GTValues.VA[GTValues.MV])
	
	//Actual Ammo
	event.shapeless(Item.of('tacz:ammo',4, '{AmmoId:"ulv_guns:lead_shot"}'),
		['4x #forge:nuggets/lead', '#forge:plates/paper', '#forge:dusts/gunpowder']
	).id('tfg_tacz:lead_shot');
	
	event.shaped(Item.of('tacz:ammo', 4,'{AmmoId:"tacz:45_70"}'), [
		'ABA',
		'ACA',
		'DEF'
	], {
		A: '#forge:nuggets/lead',
		B: '#forge:tools/mallets',
		C: '#forge:dusts/gunpowder',
		D: '#forge:tools/files',
		E: '#forge:ingots/brass',
		F: '#forge:tools/saws'
		
	}).id('tfg_tacz:45_70_bullets');
	
	event.recipes.gtceu.assembler('tfg_tacz:fluix_grenade')
		.itemInputs('#forge:ingots/magnalium', '4x gtceu:gelled_toluene')
		.inputFluids(Fluid.of('tfg:fluix', 720))
		.itemOutputs(Item.of('tacz:ammo', 
			'{AmmoId:"applied_armorer:fluix_infused_grenade"}'))
		.EUt(GTValues.VA[GTValues.EV])
		.duration(20)
}