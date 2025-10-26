"use strict";

function registerTACZAmmoRecipes(event){
	
	//Ammo Boxes
	event.recipes.gtceu.assembler('tfg_tacz:steel_ab')
		.itemInputs('4x #forge:double_plates/steel', '16x #forge:screws/steel', '4x #forge:rings/rubber')
		.itemOutputs(Item.of('tacz:ammo_box', '{Level:0}'))
		.EUt(GTValues.VA[GTValues.LV])
		.duration(60)
		
	event.recipes.gtceu.assembler('tfg_tacz:magnalium_ab')
		.itemInputs('4x #forge:double_plates/magnalium', '16x #forge:screws/aluminium', '4x #forge:rings/silicone_rubber')
		.itemOutputs(Item.of('tacz:ammo_box', '{Level:1}'))
		.EUt(GTValues.VA[GTValues.MV])
		.duration(60)
		
	event.recipes.gtceu.assembler('tfg_tacz:desh_ab')
		.itemInputs('4x #forge:double_plates/desh', '16x #forge:screws/stainless_steel', '4x #forge:rings/styrene_butadiene_rubber')
		.itemOutputs(Item.of('tacz:ammo_box', '{Level:2}'))
		.EUt(GTValues.VA[GTValues.HV])
		.duration(60)
	
	
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
		
	//Additives
	event.recipes.gtceu.chemical_reactor('tfg_tacz:nitrocellulose_from_wood')
		.itemInputs('gtceu:thermochemically_treated_hardwood_dust')
		.inputFluids(Fluid.of('gtceu:nitric_acid', 200), Fluid.of('gtceu:sulfuric_acid', 400), Fluid.of('minecraft:water', 600))
		.itemOutputs('2x tfg:nitrocellulose')
		.EUt(GTValues.VA[GTValues.EV])
		.duration(20)
	event.recipes.gtceu.chemical_reactor('tfg_tacz:nitrocellulose_from_wood_dih20')
		.itemInputs('gtceu:thermochemically_treated_hardwood_dust')
		.inputFluids(Fluid.of('gtceu:nitric_acid', 200), Fluid.of('gtceu:sulfuric_acid', 400), Fluid.of('gtceu:distilled_water', 600))
		.itemOutputs('4x tfg:nitrocellulose')
		.outputFluids(Fluid.of('gtceu:nitration_mixture', 100))
		.EUt(GTValues.VA[GTValues.EV])
		.duration(40)
	
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

	event.recipes.gtceu.assembler('tfg_tacz:45_70_bullets_lv')
		.itemInputs('4x #forge:nuggets/lead','#forge:ingots/brass', '#forge:dusts/gunpowder')
		.itemOutputs(Item.of('tacz:ammo', 4,
					'{AmmoId:"tacz:45_70"}'))
		.EUt(GTValues.VA[GTValues.LV])
		.duration(20)
	
	//Clockwork era
	event.recipes.gtceu.assembler('tfg_tacz:rb_small')
		.itemInputs('4x #forge:nuggets/lead','2x #forge:foils/copper', '4x tfg:small_bullet_casing', 
					'#forge:dusts/gunpowder')
		.itemOutputs(Item.of('tacz:ammo', 4, 
					'{AmmoId:"create_armorer:rbapb"}'))
		.EUt(GTValues.VA[GTValues.MV])
		.duration(20)
	event.recipes.gtceu.assembler('tfg_tacz:rb_small_nc')
		.itemInputs('8x #forge:nuggets/lead','4x #forge:foils/copper', '8x tfg:small_bullet_casing', 
					'tfg:nitrocellulose')
		.itemOutputs(Item.of('tacz:ammo', 8, 
					'{AmmoId:"create_armorer:rbapb"}'))
		.EUt(GTValues.VA[GTValues.EV])
		.duration(20)
	event.recipes.gtceu.assembler('tfg_tacz:slap_large')
		.itemInputs('4x #forge:nuggets/lead','4x #forge:foils/copper', '4x tfg:large_bullet_casing', 
					'#forge:dusts/gunpowder')
		.itemOutputs(Item.of('tacz:ammo', 4, 
					'{AmmoId:"create_armorer:slap"}'))
		.EUt(GTValues.VA[GTValues.MV])
		.duration(20)
	event.recipes.gtceu.assembler('tfg_tacz:slap_large_nc')
		.itemInputs('8x #forge:nuggets/lead','8x #forge:foils/copper', '8x tfg:large_bullet_casing', 
					'tfg:nitrocellulose')
		.itemOutputs(Item.of('tacz:ammo', 8, 
					'{AmmoId:"create_armorer:slap"}'))
		.EUt(GTValues.VA[GTValues.EV])
		.duration(20)
	
	
	//Certus era
	event.recipes.gtceu.assembler('tfg_tacz:fluix_grenade')
		.itemInputs('#forge:ingots/magnalium', '2x gtceu:gelled_toluene', '4x tfg:nitrocellulose')
		.inputFluids(Fluid.of('tfg:fluix', 720))
		.itemOutputs(Item.of('tacz:ammo', 
					'{AmmoId:"applied_armorer:fluix_infused_grenade"}'))
		.EUt(GTValues.VA[GTValues.EV])
		.duration(40)
	event.recipes.gtceu.assembler('tfg_tacz:40mm_he')
		.itemInputs('#forge:ingots/brass', '#forge:ingots/steel', '8x gtceu:gelled_toluene', 
					'6x tfg:nitrocellulose')
		.itemOutputs(Item.of('tacz:ammo', 
					'{AmmoId:"create_armorer:40mmhe"}'))
		.EUt(GTValues.VA[GTValues.EV])
		.duration(40)

	event.recipes.gtceu.assembler('tfg_tacz:etched_quartz_small')
		.itemInputs('2x #forge:flawless_gems/certus_quartz', '4x tfg:small_bullet_casing', '2x tfg:nitrocellulose')
		.itemOutputs(Item.of('tacz:ammo', 4, 
					'{AmmoId:"applied_armorer:etched_quartz_bullet"}'))
		.EUt(GTValues.VA[GTValues.EV])
		.duration(20)
	event.recipes.gtceu.assembler('tfg_tacz:hard_quartz_large')
		.itemInputs('4x #forge:exquisite_gems/certus_quartz', '4x #forge:rods/titanium', '4x tfg:large_bullet_casing', 
					'2x tfg:nitrocellulose')
		.itemOutputs(Item.of('tacz:ammo', 4, 
					'{AmmoId:"applied_armorer:hard_core_quartz_bullet"}'))
		.EUt(GTValues.VA[GTValues.EV])
		.duration(20)
	event.recipes.gtceu.assembler('tfg_tacz:cluster_quartz_shell_ptfe')
		.itemInputs('16x gtceu:chipped_certus_quartz_gem', '4x tfg:shell_bullet_casing', '2x tfg:nitrocellulose')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 144))
		.itemOutputs(Item.of('tacz:ammo', 4, 
					'{AmmoId:"applied_armorer:cluster_quartz_bullet"}'))
		.EUt(GTValues.VA[GTValues.EV])
		.duration(20)
	event.recipes.gtceu.assembler('tfg_tacz:cluster_quartz_shell_pbi')
		.itemInputs('16x gtceu:chipped_certus_quartz_gem', '4x tfg:shell_bullet_casing', '2x tfg:nitrocellulose')
		.inputFluids(Fluid.of('gtceu:polybenzimidazole', 72))
		.itemOutputs(Item.of('tacz:ammo', 4, 
					'{AmmoId:"applied_armorer:cluster_quartz_bullet"}'))
		.EUt(GTValues.VA[GTValues.EV])
		.duration(30)
		
	//12gauge shell
	event.recipes.gtceu.assembler('tfg_tacz:12g_shell_peth')
		.itemInputs('12x #forge:nuggets/lead', '4x tfg:shell_bullet_casing', '2x #forge:dusts/gunpowder')
		.inputFluids(Fluid.of('gtceu:polyethylene', 288))
		.itemOutputs(Item.of('tacz:ammo', 4, 
					'{AmmoId:"tacz:12g"}'))
		.EUt(GTValues.VA[GTValues.MV])
		.duration(20)
	event.recipes.gtceu.assembler('tfg_tacz:12g_shell_pvc')
		.itemInputs('12x #forge:nuggets/lead', '4x tfg:shell_bullet_casing', '2x #forge:dusts/gunpowder')
		.inputFluids(Fluid.of('gtceu:polyvinyl_chloride', 144))
		.itemOutputs(Item.of('tacz:ammo', 4, 
					'{AmmoId:"tacz:12g"}'))
		.EUt(GTValues.VA[GTValues.MV])
		.duration(20)
	event.recipes.gtceu.assembler('tfg_tacz:12g_shell_ptfe')
		.itemInputs('12x #forge:nuggets/lead', '4x tfg:shell_bullet_casing', '2x #forge:dusts/gunpowder')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 72))
		.itemOutputs(Item.of('tacz:ammo', 4, 
					'{AmmoId:"tacz:12g"}'))
		.EUt(GTValues.VA[GTValues.HV])
		.duration(20)
	event.recipes.gtceu.assembler('tfg_tacz:12g_shell_pbi')
		.itemInputs('12x #forge:nuggets/lead', '4x tfg:shell_bullet_casing', '2x #forge:dusts/gunpowder')
		.inputFluids(Fluid.of('gtceu:polybenzimidazole', 36))
		.itemOutputs(Item.of('tacz:ammo', 4, 
					'{AmmoId:"tacz:12g"}'))
		.EUt(GTValues.VA[GTValues.EV])
		.duration(20)
		
	event.recipes.gtceu.assembler('tfg_tacz:12g_shell_nc_ptfe')
		.itemInputs('12x #forge:nuggets/lead', '4x tfg:shell_bullet_casing', 'tfg:nitrocellulose')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 72))
		.itemOutputs(Item.of('tacz:ammo', 4, 
					'{AmmoId:"tacz:12g"}'))
		.EUt(GTValues.VA[GTValues.HV])
		.duration(20)
	event.recipes.gtceu.assembler('tfg_tacz:12g_shell_nc_pbi')
		.itemInputs('12x #forge:nuggets/lead', '4x tfg:shell_bullet_casing', 'tfg:nitrocellulose')
		.inputFluids(Fluid.of('gtceu:polybenzimidazole', 36))
		.itemOutputs(Item.of('tacz:ammo', 4, 
					'{AmmoId:"tacz:12g"}'))
		.EUt(GTValues.VA[GTValues.EV])
		.duration(20)
	
}
