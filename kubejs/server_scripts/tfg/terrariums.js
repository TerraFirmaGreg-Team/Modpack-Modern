ServerEvents.recipes(event => {
	
	event.remove({ id: 'gtceu:gas_collector/nether_air' })
	event.remove({ id: 'minecraft:netherite_upgrade_smithing_template' })
	event.remove({ id: 'gtceu:gas_collector/ender_air' })
	event.remove({ id: 'gtceu:macerator/macerate_end_stone' })
	event.remove({ id: 'minecraft:ender_chest' })
	event.remove({ id: 'gtceu:assembler/ender_chest' })
	event.remove({ id: 'minecraft:end_crystal' })
	event.remove({ id: 'gtceu:assembler/end_crystal' })
	
	// nether slurry
	
	event.recipes.gtceu.mixer('tfg:nether_slurry')
		.itemInputs('gtceu:basalt_dust', 'minecraft:blaze_powder', 'minecraft:gold_nugget')
		.inputFluids(Fluid.of('minecraft:lava', 1000))
		.outputFluids(Fluid.of('tfg:nether_slurry', 1000))
		.duration(200)
		.EUt(512)
		
	event.recipes.gtceu.mixer('tfg:enriched_nether_slurry')
		.itemInputs('minecraft:quartz', 'minecraft:redstone')
		.inputFluids(Fluid.of('tfg:nether_slurry', 2000))
		.outputFluids(Fluid.of('tfg:enriched_nether_slurry', 2000))
		.duration(200)
		.EUt(512)
		
	// nether air
	
	event.recipes.gtceu.nether_dome('tfg:slurry_to_air')
		.inputFluids(Fluid.of('tfg:nether_slurry', 100))
		.outputFluids(Fluid.of('gtceu:nether_air', 32000))
		.duration(200)
		.EUt(256)
		
	event.recipes.gtceu.nether_dome('tfg:enriched_slurry_to_air')
		.inputFluids(Fluid.of('tfg:enriched_nether_slurry', 100))
		.outputFluids(Fluid.of('gtceu:nether_air', 128000))
		.duration(200)
		.EUt(256)
		
	event.recipes.gtceu.nether_dome('tfg:quartz')
		.itemInputs('gtceu:quartzite_gem')
		.inputFluids(Fluid.of('tfg:nether_slurry', 25))
		.itemOutputs('minecraft:quartz')
		.duration(200)
		.EUt(512)
		
	// netherarium
		
	/*event.shaped('gtceu:nether_dome', [
        'GCB',
        'DEH',
        'FAF' 
    ], {
        A: 'minecraft:flint_and_steel',
        B: 'minecraft:gold_nugget',
        C: 'minecraft:blaze_rod',
		D: 'minecraft:quartz',
        E: 'gtceu:hv_gas_collector',
		F: 'gtceu:dense_obsidian_plate',
		G: 'minecraft:rotten_flesh',
		H: 'minecraft:bone'
    }).id('tfg:shaped/nether_dome')*/
	
	event.shaped('gtceu:nether_dome', [
        'ADA',
        'CEC',
        'FBF' 
    ], {
        A: 'minecraft:quartz',
		B: 'minecraft:gold_block',
        C: 'minecraft:blaze_rod',
		D: 'gtceu:hv_emitter',
        E: 'gtceu:hv_gas_collector',
		F: 'gtceu:dense_obsidian_plate'
    }).id('tfg:shaped/nether_dome2')
	
	// netherrack
	
	event.recipes.gtceu.chemical_bath('tfg:netherrack')
		.itemInputs('#forge:stone')
		.inputFluids(Fluid.of('gtceu:blaze', 144))
		.itemOutputs('minecraft:netherrack')
		.duration(200)
		.EUt(512)
		
	event.recipes.gtceu.macerator('tfg:obsidian')
		.itemInputs('minecraft:obsidian')
		.itemOutputs('gtceu:obsidian_dust')
		.duration(100)
		.EUt(512)
		
	// nether bricks
		
	event.shaped('4x minecraft:nether_bricks', [
        'ABA',
        'BAB',
        'ABA' 
    ], {
        A: 'minecraft:nether_brick',
        B: 'tfc:mortar'
    }).id('tfg:shaped/nether_bricks')
	
	event.recipes.gtceu.assembler('tfg:nether_bricks')
		.itemInputs('5x minecraft:nether_brick')
		.itemOutputs('4x minecraft:nether_bricks')
		.inputFluids(Fluid.of('gtceu:concrete', 72))
		.duration(50)
		.EUt(2)
		
	// ender slurry
	
	event.recipes.gtceu.mixer('tfg:ender_slurry')
		.itemInputs('gtceu:obsidian_dust', 'minecraft:end_stone')
		.inputFluids(Fluid.of('gtceu:helium', 200), Fluid.of('gtceu:radon', 50))
		.outputFluids(Fluid.of('tfg:ender_slurry', 250))
		.duration(200)
		.EUt(2048)
		
	event.recipes.gtceu.mixer('tfg:enriched_ender_slurry')
		.itemInputs('minecraft:chorus_fruit', 'ae2:ender_dust')
		.inputFluids(Fluid.of('tfg:ender_slurry', 500))
		.outputFluids(Fluid.of('tfg:enriched_ender_slurry', 500))
		.duration(200)
		.EUt(2048)
		
	// ender air
	
	event.recipes.gtceu.end_dome('tfg:slurry_to_air')
		.inputFluids(Fluid.of('tfg:ender_slurry', 25))
		.outputFluids(Fluid.of('gtceu:ender_air', 32000))
		.duration(200)
		.EUt(1024)
		
	event.recipes.gtceu.end_dome('tfg:enriched_slurry_to_air')
		.inputFluids(Fluid.of('tfg:enriched_ender_slurry', 25))
		.outputFluids(Fluid.of('gtceu:ender_air', 128000))
		.duration(200)
		.EUt(1024)
		
	event.recipes.gtceu.end_dome('tfg:pearls')
		.itemInputs('gtceu:quantum_eye')
		.inputFluids(Fluid.of('tfg:ender_slurry', 10))
		.itemOutputs('2x minecraft:ender_pearl')
		.duration(200)
		.EUt(2048)
		
	// enderarium
	
	/*event.recipes.gtceu.assembler('tfg:end_dome')
		.itemInputs('12x minecraft:ender_eye', 'minecraft:chorus_fruit', 'minecraft:end_crystal', '#minecraft:beds', 'gtceu:ev_gas_collector', 'tfc:metal/bars/wrought_iron', 'minecraft:bow', 'minecraft:end_stone', 'minecraft:obsidian')
		.itemOutputs('gtceu:end_dome')
		.duration(600)
		.EUt(2048)*/
		
	event.shaped('gtceu:end_dome', [
        'DAD',
        'CEC',
        'FBF' 
    ], {
        A: 'gtceu:ev_emitter',
		B: 'minecraft:end_stone',
        C: 'tfc:metal/bars/wrought_iron',
		D: 'minecraft:end_crystal',
        E: 'gtceu:ev_gas_collector',
		F: 'gtceu:dense_obsidian_plate'
    }).id('tfg:shaped/end_dome')
		
	// parts for the ender dome
		
	event.shaped('minecraft:end_crystal', [
        'AAA',
        'ABA',
        'ACA' 
    ], {
        A: 'gtceu:tempered_glass',
        B: 'gtceu:quantum_eye',
		C: '#forge:exquisite_gems'
    }).id('tfg:shaped/end_crystal')
	
	// chorus fruit
	
	event.recipes.gtceu.large_chemical_reactor('tfg:chorus_fruit_uranium')
		.itemInputs('#tfc:foods/fruits', 'gtceu:uranium_235_dust')
		.itemOutputs('minecraft:chorus_fruit', 'gtceu:uranium_dust')
		.duration(500)
		.EUt(480)
		
	event.recipes.gtceu.large_chemical_reactor('tfg:chorus_fruit_plutonium')
		.itemInputs('#tfc:foods/fruits', 'gtceu:plutonium_241_dust')
		.itemOutputs('minecraft:chorus_fruit', 'gtceu:plutonium_dust')
		.duration(200)
		.EUt(480)
		
	event.recipes.gtceu.centrifuge('tfg:kovarex')
		.itemInputs('40x gtceu:uranium_235_dust', '5x gtceu:uranium_dust')
		.itemOutputs('41x gtceu:uranium_235_dust', '2x gtceu:uranium_dust')
		.duration(1000)
		.EUt(512)
		
	// end stone
	
	
	event.recipes.gtceu.chemical_bath('tfg:end_stone')
		.itemInputs('#forge:stone')
		.inputFluids(Fluid.of('gtceu:argon', 100))
		.itemOutputs('minecraft:end_stone')
		.duration(100)
		.EUt(2048)
		
	// dragon egg
	
	event.recipes.gtceu.chemical_bath('tfg:dragon_egg')
		.itemInputs('#forge:eggs')
		.inputFluids(Fluid.of('gtceu:thorium', 1296))
		.itemOutputs('minecraft:dragon_egg')
		.duration(2000)
		.EUt(2048)
		
	// end portal frame
	
	event.shaped('tfg:artificial_end_portal_frame', [
        'A',
        'B',
        'C' 
    ], {
        A: 'minecraft:ender_eye',
        B: 'minecraft:cyan_carpet',
		C: 'minecraft:end_stone'
    }).id('tfg:shaped/artificial_end_portal_frame')
})

