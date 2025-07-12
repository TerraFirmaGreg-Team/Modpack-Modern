
function registerTACZAttachRecipes(event){
	
	//Scopes
	event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:scope_1873_6x"}'), [
		'ABA',
		'BCB',
		'DEF'
	], {
		A: '#forge:rings/black_steel',
		B: 'tfc:lens',
		C: 'gtceu:brass_small_item_pipe',
		D: '#forge:tools/screwdrivers',
		E: '#forge:screws/black_steel',
		F: '#forge:tools/files'
		
	}).id('tfg_tacz:trapdoor_scope');
	
	event.recipes.gtceu.assembler('tfg_tacz:ca_reflex')
		.itemInputs('tfc:lens', '#forge:rings/brass', '#forge:plates/steel')
		.itemOutputs(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:sight_reflex"}'))
		.circuit(1)
		.EUt(GTValues.VA[GTValues.MV])
		.duration(10);
	event.recipes.gtceu.assembler('tfg_tacz:ca_standard')
		.itemInputs('2x tfc:lens','#forge:leather', '2x #forge:rings/brass', 
					'#forge:plates/steel')
		.itemOutputs(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:sight_standard"}'))
		.circuit(2)
		.EUt(GTValues.VA[GTValues.MV])
		.duration(10);
	event.recipes.gtceu.assembler('tfg_tacz:ca_medium')
		.itemInputs('3x tfc:lens', '#forge:leather', '4x #forge:rings/brass',
					'#forge:small_gears/brass', '#forge:plates/steel')
		.itemOutputs(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:sight_medium_distance"}'))
		.circuit(3)
		.EUt(GTValues.VA[GTValues.MV])
		.duration(10);
	event.recipes.gtceu.assembler('tfg_tacz:ca_telophoto')
		.itemInputs('6x tfc:lens', 'gtceu:brass_small_item_pipe','2x #forge:rings/steel',
					'2x #forge:small_gears/brass', '#forge:plates/steel')
		.itemOutputs(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:scope_telephoto"}'))
		.circuit(4)
		.EUt(GTValues.VA[GTValues.MV])
		.duration(10);


	event.recipes.gtceu.assembler('tfg_tacz:aa_pricision')
		.itemInputs('tfc:lens', 'minecraft:glow_ink_sac', '2x #forge:screws/tungsten', 
					'#forge:plates/steel')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 144))
		.itemOutputs(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:si_pricision"}'))
		.circuit(1)
		.EUt(GTValues.VA[GTValues.EV])
		.duration(20)
	event.recipes.gtceu.assembler('tfg_tacz:aa_double')
		.itemInputs('2x tfc:lens', 'minecraft:glow_ink_sac', '2x #forge:screws/tungsten', 
					'#forge:small_gears/titanium', '#forge:plates/steel')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 144))
		.itemOutputs(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:si_double_sided_mirror"}'))
		.circuit(2)
		.EUt(GTValues.VA[GTValues.EV])
		.duration(20)
	event.recipes.gtceu.assembler('tfg_tacz:aa_twelve') //Works
		.itemInputs('tfc:lens', 'minecraft:glow_ink_sac', '4x #forge:screws/tungsten', 
					'#forge:plates/steel')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 288))
		.itemOutputs(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:si_ms_12"}'))
		.circuit(3)
		.EUt(GTValues.VA[GTValues.EV])
		.duration(20)
	event.recipes.gtceu.assembler('tfg_tacz:aa_fourteen')
		.itemInputs('4x tfc:lens', 'minecraft:glow_ink_sac', '6x #forge:screws/tungsten', 
					'#forge:small_gears/titanium', '#forge:plates/steel')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 432))
		.itemOutputs(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:scope_ms_14"}'))
		.circuit(4)
		.EUt(GTValues.VA[GTValues.EV])
		.duration(20)
	event.recipes.gtceu.assembler('tfg_tacz:aa_sniper') //Works
		.itemInputs('12x tfc:lens', 'minecraft:glow_ink_sac', '10x #forge:screws/tungsten', 
		'2x #forge:small_gears/titanium', '8x #forge:fine_wires/red_alloy','#forge:plates/steel')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 720))
		.itemOutputs(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:scope_xgs_905"}'))
		.circuit(5)
		.EUt(GTValues.VA[GTValues.EV])
		.duration(20)

	//Muzzles
	event.recipes.gtceu.assembler('tfg_tacz:ca_large_tank')
		.itemInputs('2x gtceu:blue_steel_tiny_fluid_pipe', '2x gtceu:steel_fluid_cell', '8x #forge:rings/silicone_rubber', 
					'4x #forge:rings/stainless_steel', '#forge:plates/stainless_steel', '8x #forge:screws/stainless_steel')
		.itemOutputs(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:muzzle_refit_bigger_cylinder"}'))
		.EUt(GTValues.VA[GTValues.MV])
		.duration(20)
	event.recipes.gtceu.assembler('tfg_tacz:ca_lava_tube')
		.itemInputs('4x gtceu:red_steel_tiny_fluid_pipe', 'gtceu:steel_fluid_cell', '4x gtceu:tempered_glass',
					'4x #forge:rings/stainless_steel', '#forge:plates/rose_gold', '8x #forge:screws/stainless_steel')
		.inputFluids(Fluid.of('minecraft:lava', 2000))
		.itemOutputs(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:muzzle_refit_lava_perfusion_bottle"}'))
		.EUt(GTValues.VA[GTValues.MV])
		.duration(20)
	
	event.recipes.gtceu.assembler('tfg_tacz:aa_compensator')
		.itemInputs('gtceu:tungsten_small_fluid_pipe')
		.itemOutputs(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_bs_mod4"}'))
		.circuit(1)
		.EUt(GTValues.VA[GTValues.EV])
		.duration(20)
	event.recipes.gtceu.assembler('tfg_tacz:aa_commander')
		.itemInputs('gtceu:tungsten_small_fluid_pipe')
		.itemOutputs(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_commander"}'))
		.circuit(2)
		.EUt(GTValues.VA[GTValues.EV])
		.duration(20)
	event.recipes.gtceu.assembler('tfg_tacz:aa_silencer')
		.itemInputs('gtceu:tungsten_small_fluid_pipe')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 288))
		.itemOutputs(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_ns_1"}'))
		.circuit(3)
		.EUt(GTValues.VA[GTValues.EV])
		.duration(20)
	event.recipes.gtceu.assembler('tfg_tacz:aa_thick_silencer')
		.itemInputs('gtceu:tungsten_small_fluid_pipe')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 576))
		.itemOutputs(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_classic"}'))
		.circuit(4)
		.EUt(GTValues.VA[GTValues.EV])
		.duration(20)
	//Stock
	
	//Grip
	event.recipes.gtceu.assembler('tfg_tacz:wooden_grip')
		.itemInputs('gtceu:treated_wood_planks', '2x #forge:ingots/steel')
		.itemOutputs(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:grip_wooden"}'))
		.EUt(GTValues.VA[GTValues.MV])
		.duration(10)
	event.recipes.gtceu.assembler('tfg_tacz:gantry_grip')
		.itemInputs('create:gantry_shaft', '2x #forge:ingots/steel')
		.itemOutputs(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:grip_gantry_shaft"}'))
		.EUt(GTValues.VA[GTValues.MV])
		.duration(10)
}