// priority: 0

function registerVintageImprovementsRecipes(event) {

	event.remove({ mod: 'vintageimprovements' })

	// #region Machines

	event.shaped('vintageimprovements:spring_coiling_machine', [
		'CDF',
		'CAF',
		'EBE'
	], {
		A: 'gtceu:ulv_machine_casing',
		B: 'greate:steel_cogwheel',
		C: '#forge:rods/steel',
		D: '#forge:double_ingots/black_steel',
		E: '#forge:small_gears/steel',
		F: '#gtceu:circuits/ulv'
	}).id('tfg:vi/shaped/spring_coiling_machine')

	event.shaped('vintageimprovements:vacuum_chamber', [
		'EBE',
		'DAD',
		'FCF'
	], {
		A: 'gtceu:ulv_machine_casing',
		B: 'greate:steel_mechanical_pump',
		C: 'create:mechanical_piston',
		D: '#forge:springs/wrought_iron',
		E: 'create:electron_tube',
		F: '#forge:plates/black_steel'
	}).id('tfg:vi/shaped/vacuum_chamber')

	event.shaped('vintageimprovements:vibrating_table', [
		'BCB',
		'DAD',
		'BEB'
	], {
		A: 'gtceu:ulv_machine_casing',
		B: '#forge:springs/wrought_iron',
		C: '#forge:plates/black_steel',
		D: 'create:electron_tube',
		E: 'greate:steel_cogwheel'
	}).id('tfg:vi/shaped/vibrating_table')

	event.recipes.create.mechanical_crafting('vintageimprovements:centrifuge', [
		'   A   ',
		'   B   ',
		'  DAD  ',
		'ABACABA',
		'  EAE  ',
		'   B   ',
		'   A   '
	], {
		A: '#minecraft:logs',
		B: '#forge:rods/long/black_steel',
		C: 'gtceu:ulv_machine_casing',
		D: '#gtceu:circuits/ulv',
		E: 'greate:steel_cogwheel'
	}).id('tfg:vi/mechanical_crafting/centrifuge')

	event.shaped('vintageimprovements:curving_press', [
		'DBD',
		'FAF',
		'GEC'
	], {
		A: 'gtceu:ulv_machine_casing',
		B: 'greate:steel_shaft',
		C: '#forge:plates/black_steel',
		D: '#gtceu:circuits/ulv',
		E: '#forge:storage_blocks/steel',
		F: '#forge:springs/wrought_iron',
		G: 'create:precision_mechanism'
	}).id('tfg:vi/shaped/curving_press')

	event.shaped('vintageimprovements:helve_hammer', [
		'F A',
		'BBE',
		'C D'
	], {
		A: '#forge:frames/bronze',
		B: '#tfg:hardwood',
		C: '#forge:double_ingots/iron',
		D: 'greate:andesite_alloy_cogwheel',
		E: '#minecraft:planks',
		F: '#forge:tools/hammers'
	}).id('tfg:vi/shaped/helve_hammer_bronze')

	event.shaped('vintageimprovements:helve_hammer', [
		'F A',
		'BBE',
		'C D'
	], {
		A: '#forge:frames/black_bronze',
		B: '#tfg:hardwood',
		C: '#forge:double_ingots/iron',
		D: 'greate:andesite_alloy_cogwheel',
		E: '#minecraft:planks',
		F: '#forge:tools/hammers'
	}).id('tfg:vi/shaped/helve_hammer_black_bronze')

	event.shaped('vintageimprovements:helve_hammer', [
		'F A',
		'BBE',
		'C D'
	], {
		A: '#forge:frames/bismuth_bronze',
		B: '#tfg:hardwood',
		C: '#forge:double_ingots/iron',
		D: 'greate:andesite_alloy_cogwheel',
		E: '#minecraft:planks',
		F: '#forge:tools/hammers'
	}).id('tfg:vi/shaped/helve_hammer_bismuth_bronze')

	event.recipes.create.mechanical_crafting('vintageimprovements:lathe', [
		'EEEFE',
		'AB CG',
		'EEEFE'
	], {
		A: 'gtceu:ulv_machine_casing',
		B: 'minecraft:piston',
		C: 'minecraft:diamond',
		E: '#forge:rods/black_steel',
		F: '#gtceu:circuits/ulv',
		G: 'create:precision_mechanism'
	}).id('tfg:vi/mechanical_crafting/lathe')

	event.shaped('vintageimprovements:laser', [
		'FBF',
		'EAE',
		'DCD'
	], {
		A: 'gtceu:ulv_machine_hull',
		B: 'create:precision_mechanism',
		C: 'gtceu:lv_emitter',
		D: 'gtceu:red_alloy_single_wire',
		E: 'minecraft:piston',
		F: '#gtceu:circuits/ulv'
	}).id('tfg:vi/shaped/laser')

	// #endregion

	// #region Components

	event.recipes.createSequencedAssembly([
		'vintageimprovements:redstone_module',
	], '#forge:plates/red_alloy', [
		event.recipes.createDeploying('vintageimprovements:incomplete_redstone_module', ['vintageimprovements:incomplete_redstone_module', '#forge:small_gears/brass']),
		event.recipes.createDeploying('vintageimprovements:incomplete_redstone_module', ['vintageimprovements:incomplete_redstone_module', '#forge:bolts/red_alloy']),
		event.recipes.createFilling('vintageimprovements:incomplete_redstone_module', ['vintageimprovements:incomplete_redstone_module', Fluid.of('gtceu:redstone', 144)]),
	]).transitionalItem('vintageimprovements:incomplete_redstone_module').loops(1).id('tfg:vi/sequenced_assembly/redstone_module')

	event.recipes.gtceu.assembler('tfg:vi/redstone_module')
		.itemInputs('#forge:plates/red_alloy', '#forge:small_gears/brass', '#forge:bolts/red_alloy')
		.inputFluids(Fluid.of('gtceu:redstone', 144))
		.itemOutputs('vintageimprovements:redstone_module')
		.duration(400)
		.EUt(20)

	event.shaped('vintageimprovements:recipe_card', [
		' B ',
		'CA ',
		' B '
	], {
		A: '#forge:plates/brass',
		B: '#forge:screws/wrought_iron',
		C: '#forge:tools/screwdrivers'
	}).id('tfg:vi/shaped/recipe_card')

	event.shaped('vintageimprovements:helve_hammer_slot_cover', [
		'B B',
		'CA ',
		'B B'
	], {
		A: '#forge:plates/brass',
		B: '#forge:screws/wrought_iron',
		C: '#forge:tools/screwdrivers'
	})

	// #endregion

	//#region Hammer

	// Tier 1
	let HAMMERING_MATERIALS = [
		{ material: GTMaterials.Copper, blows: 10 },
		{ material: GTMaterials.Zinc, blows: 10 },
		{ material: GTMaterials.Nickel, blows: 10 },
		{ material: GTMaterials.Gold, blows: 10 },
		{ material: GTMaterials.Bismuth, blows: 10 },
		{ material: GTMaterials.RoseGold, blows: 10 },
		{ material: GTMaterials.SterlingSilver, blows: 10 }
	]

	HAMMERING_MATERIALS.forEach(x => {
		generateHammeringRecipe(event, x.material, x.blows, 'copper');
		x.blows--;
	})

	// Tier 2
	HAMMERING_MATERIALS.push({ material: GTMaterials.Bronze, blows: 10 })
	HAMMERING_MATERIALS.push({ material: GTMaterials.BlackBronze, blows: 10 })
	HAMMERING_MATERIALS.push({ material: GTMaterials.BismuthBronze, blows: 10 })
	HAMMERING_MATERIALS.push({ material: GTMaterials.Brass, blows: 10 })
	HAMMERING_MATERIALS.push({ material: GTMaterials.RedAlloy, blows: 10 })

	HAMMERING_MATERIALS.forEach(x => {
		generateHammeringRecipe(event, x.material, x.blows, 'bronze');
		generateHammeringRecipe(event, x.material, x.blows, 'black_bronze');
		generateHammeringRecipe(event, x.material, x.blows, 'bismuth_bronze');
		x.blows--;
	})

	// Tier 3
	HAMMERING_MATERIALS.push({ material: GTMaterials.TinAlloy, blows: 10 })
	HAMMERING_MATERIALS.push({ material: GTMaterials.Iron, blows: 10 })
	HAMMERING_MATERIALS.push({ material: GTMaterials.WroughtIron, blows: 10 })

	HAMMERING_MATERIALS.forEach(x => {
		generateHammeringRecipe(event, x.material, x.blows, 'wrought_iron');
		x.blows--;
	})

	// Tier 4
	HAMMERING_MATERIALS.push({ material: GTMaterials.Steel, blows: 10 })

	HAMMERING_MATERIALS.forEach(x => {
		generateHammeringRecipe(event, x.material, x.blows, 'steel');
		x.blows--;
	})

	// Tier 5
	HAMMERING_MATERIALS.push({ material: GTMaterials.BlackSteel, blows: 10 })

	HAMMERING_MATERIALS.forEach(x => {
		generateHammeringRecipe(event, x.material, x.blows, 'black_steel');
		x.blows--;
	})

	// Tier 6
	HAMMERING_MATERIALS.push({ material: GTMaterials.RedSteel, blows: 10 })
	HAMMERING_MATERIALS.push({ material: GTMaterials.BlueSteel, blows: 10 })

	HAMMERING_MATERIALS.forEach(x => {
		generateHammeringRecipe(event, x.material, x.blows, 'red_steel');
		generateHammeringRecipe(event, x.material, x.blows, 'blue_steel');
		x.blows--;
	})

	// #endregion
}

function generateHammeringRecipe(event, material, blows, anvil) {

	event.custom({
		type: 'vintageimprovements:hammering',
		hammerBlows: blows,
		ingredients: [ChemicalHelper.get(TFGTagPrefix.ingotDouble, material, 1)],
		results: [ChemicalHelper.get(TagPrefix.plate, material, 1)],
		anvilBlock: `tfc:metal/anvil/${anvil}`
	}).id(`tfg:vi/hammer/${material.getName()}_plate_on_${anvil}_anvil`)

}