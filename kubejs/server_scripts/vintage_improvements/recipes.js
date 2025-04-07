// priority: 0

function registerVintageImprovementsRecipes(event) {

	event.remove({ mod: 'vintageimprovements' })

	// #region Machines

	event.shaped('vintageimprovements:spring_coiling_machine', [
		'CDF',
		'CAF',
		'EBE'
	], {
		A: 'gtceu:ulv_machine_hull',
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
		A: 'gtceu:ulv_machine_hull',
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
		A: 'gtceu:ulv_machine_hull',
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
		C: 'gtceu:ulv_machine_hull',
		D: '#gtceu:circuits/ulv',
		E: 'greate:steel_cogwheel'
	}).id('tfg:vi/mechanical_crafting/centrifuge')

	event.shaped('vintageimprovements:curving_press', [
		'DBD',
		'FAF',
		'GEC'
	], {
		A: 'gtceu:ulv_machine_hull',
		B: 'greate:steel_shaft',
		C: '#forge:plates/black_steel',
		D: '#gtceu:circuits/ulv',
		E: 'gtceu:empty_mold',
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
		A: 'gtceu:ulv_machine_hull',
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
		C: 'tfc:lens',
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

	const STARTING_BLOWS = 6;

	// Tier 1
	let HAMMERING_MATERIALS = [
		{ material: GTMaterials.Copper, blows: STARTING_BLOWS },
		{ material: GTMaterials.Zinc, blows: STARTING_BLOWS },
		{ material: GTMaterials.Nickel, blows: STARTING_BLOWS },
		{ material: GTMaterials.Gold, blows: STARTING_BLOWS },
		{ material: GTMaterials.Bismuth, blows: STARTING_BLOWS },
		{ material: GTMaterials.RoseGold, blows: STARTING_BLOWS },
		{ material: GTMaterials.SterlingSilver, blows: STARTING_BLOWS }
	]

	let HAMMERING_ITEMS = [
		{ input: 'tfc:raw_iron_bloom', output: 'tfc:refined_iron_bloom', blows: STARTING_BLOWS },
		{ input: 'tfc:refined_iron_bloom', output: 'gtceu:wrought_iron_ingot', blows: STARTING_BLOWS }
	]

	HAMMERING_MATERIALS.forEach(x => {
		generateHammeringRecipe(event, x.material, x.blows, 'copper');
		x.blows--;
	})

	// Tier 2
	HAMMERING_MATERIALS.push({ material: GTMaterials.Bronze, blows: STARTING_BLOWS })
	HAMMERING_MATERIALS.push({ material: GTMaterials.BlackBronze, blows: STARTING_BLOWS })
	HAMMERING_MATERIALS.push({ material: GTMaterials.BismuthBronze, blows: STARTING_BLOWS })
	HAMMERING_MATERIALS.push({ material: GTMaterials.Brass, blows: STARTING_BLOWS })
	HAMMERING_MATERIALS.push({ material: GTMaterials.RedAlloy, blows: STARTING_BLOWS })

	HAMMERING_MATERIALS.forEach(x => {
		generateHammeringRecipe(event, x.material, x.blows, 'bronze');
		generateHammeringRecipe(event, x.material, x.blows, 'black_bronze');
		generateHammeringRecipe(event, x.material, x.blows, 'bismuth_bronze');
		x.blows--;
	})
	HAMMERING_ITEMS.forEach(x => {
		generateHammeringRecipeFromItem(event, x.input, x.output, x.blows, 'bronze');
		generateHammeringRecipeFromItem(event, x.input, x.output, x.blows, 'black_bronze');
		generateHammeringRecipeFromItem(event, x.input, x.output, x.blows, 'bismuth_bronze');
		x.blows--;
	})

	// Tier 3
	HAMMERING_MATERIALS.push({ material: GTMaterials.TinAlloy, blows: STARTING_BLOWS })
	HAMMERING_MATERIALS.push({ material: GTMaterials.Iron, blows: STARTING_BLOWS })
	HAMMERING_MATERIALS.push({ material: GTMaterials.WroughtIron, blows: STARTING_BLOWS })
	HAMMERING_ITEMS.push({ input: 'tfc:metal/ingot/pig_iron', output: 'tfc:metal/ingot/high_carbon_steel', blows: STARTING_BLOWS })
	HAMMERING_ITEMS.push({ input: 'tfc:metal/ingot/high_carbon_steel', output: 'gtceu:steel_ingot', blows: STARTING_BLOWS })

	HAMMERING_MATERIALS.forEach(x => {
		generateHammeringRecipe(event, x.material, x.blows, 'wrought_iron');
		x.blows--;
	})
	HAMMERING_ITEMS.forEach(x => {
		generateHammeringRecipeFromItem(event, x.input, x.output, x.blows, 'wrought_iron');
		x.blows--;
	})

	// Tier 4
	HAMMERING_MATERIALS.push({ material: GTMaterials.Steel, blows: STARTING_BLOWS })
	HAMMERING_ITEMS.push({ input: 'tfc:metal/ingot/high_carbon_black_steel', output: 'tfc:metal/ingot/black_steel', blows: STARTING_BLOWS })

	HAMMERING_MATERIALS.forEach(x => {
		generateHammeringRecipe(event, x.material, x.blows, 'steel');
		x.blows--;
	})
	HAMMERING_ITEMS.forEach(x => {
		generateHammeringRecipeFromItem(event, x.input, x.output, x.blows, 'steel');
		x.blows--;
	})

	// Tier 5
	HAMMERING_MATERIALS.push({ material: GTMaterials.BlackSteel, blows: STARTING_BLOWS })
	HAMMERING_ITEMS.push({ input: 'tfc:metal/ingot/high_carbon_red_steel', output: 'tfc:metal/ingot/red_steel', blows: STARTING_BLOWS })
	HAMMERING_ITEMS.push({ input: 'tfc:metal/ingot/high_carbon_blue_steel', output: 'tfc:metal/ingot/blue_steel', blows: STARTING_BLOWS })

	HAMMERING_MATERIALS.forEach(x => {
		generateHammeringRecipe(event, x.material, x.blows, 'black_steel');
		x.blows--;
	})
	HAMMERING_ITEMS.forEach(x => {
		generateHammeringRecipeFromItem(event, x.input, x.output, x.blows, 'black_steel');
		x.blows--;
	})

	// Tier 6
	HAMMERING_MATERIALS.push({ material: GTMaterials.RedSteel, blows: STARTING_BLOWS })
	HAMMERING_MATERIALS.push({ material: GTMaterials.BlueSteel, blows: STARTING_BLOWS })

	HAMMERING_MATERIALS.forEach(x => {
		generateHammeringRecipe(event, x.material, x.blows, 'red_steel');
		generateHammeringRecipe(event, x.material, x.blows, 'blue_steel');
		x.blows--;
	})
	HAMMERING_ITEMS.forEach(x => {
		generateHammeringRecipeFromItem(event, x.input, x.output, x.blows, 'red_steel');
		generateHammeringRecipeFromItem(event, x.input, x.output, x.blows, 'blue_steel');
		x.blows--;
	})
	// #endregion

	const ULV_DURATION_MULTIPLIER = 2;

	GTMaterialRegistry.getRegisteredMaterials().forEach(material => {

		// #region Coiling

		const rodItem = ChemicalHelper.get(TagPrefix.rod, material, 1);
		const smallSpringItem = ChemicalHelper.get(TagPrefix.springSmall, material, 1)

		if (rodItem != null && smallSpringItem != null) {
			event.custom({
				type: 'vintageimprovements:coiling',
				ingredients: [rodItem],
				results: [smallSpringItem],
				processingTime: 200 * ULV_DURATION_MULTIPLIER
			}).id(`tfg:vi/coiling/${material.getName()}_small_spring`)
		}

		const longRodItem = ChemicalHelper.get(TagPrefix.rodLong, material, 1);
		const springItem = ChemicalHelper.get(TagPrefix.spring, material, 1)

		if (longRodItem != null && springItem != null) {
			event.custom({
				type: 'vintageimprovements:coiling',
				ingredients: [longRodItem],
				results: [springItem],
				processingTime: 200 * ULV_DURATION_MULTIPLIER
			}).id(`tfg:vi/coiling/${material.getName()}_spring`)
		}

		// #endregion

		// #region Vibrating

		if (material.hasProperty(PropertyKey.ORE) && material.hasProperty(PropertyKey.GEM)) {

			let highYield = material.hasFlag(MaterialFlags.HIGH_SIFTER_OUTPUT)

			// aaaaargh I hate these custom type recipes
			let gem = `gtceu:${material.getName()}_gem`;
			if (material == GTMaterials.Coal)
				gem = 'minecraft:coal'
			else if (material == GTMaterials.Diamond)
				gem = 'minecraft:diamond'
			else if (material == GTMaterials.Emerald)
				gem = 'minecraft:emerald'
			else if (material == GTMaterials.Lapis)
				gem = 'minecraft:lapis_lazuli'
			else if (material == GTMaterials.NetherQuartz)
				gem = 'minecraft:quartz'
			else if (material == GTMaterials.Amethyst)
				gem = 'minecraft:amethyst_shard'
			else if (material == GTMaterials.CertusQuartz)
				gem = 'ae2:certus_quartz_crystal'

			event.custom({
				type: 'vintageimprovements:vibrating',
				ingredients: [{ item: `gtceu:purified_${material.getName()}_ore` }],
				results: [
					{ item: `gtceu:exquisite_${material.getName()}_gem`, chance: highYield ? 0.05 : 0.03 },
					{ item: `gtceu:flawless_${material.getName()}_gem`, chance: highYield ? 0.15 : 0.10 },
					{ item: gem, chance: highYield ? 0.50 : 0.35 },
					{ item: `gtceu:pure_${material.getName()}_dust`, chance: highYield ? 0.25 : 0.50 },
					{ item: `gtceu:flawed_${material.getName()}_gem`, chance: highYield ? 0.20 : 0.25 },
					{ item: `gtceu:chipped_${material.getName()}_gem`, chance: highYield ? 0.30 : 0.35 }
				],
				processingTime: 400 * ULV_DURATION_MULTIPLIER
			}).id(`tfg:vi/vibrating/${material.getName()}`)
		}

		// #endregion

		// #region Lathe

		if (rodItem != null) {
			let latheInput = material.hasProperty(PropertyKey.GEM)
				? ChemicalHelper.get(TagPrefix.gem, material, 1)
				: ChemicalHelper.get(TagPrefix.ingot, material, 1)

			if (latheInput != null) {
				event.custom({
					type: 'vintageimprovements:turning',
					ingredients: [latheInput],
					results: [ChemicalHelper.get(TagPrefix.rod, material, 2)],
					processingTime: material.getMass() * 2 * ULV_DURATION_MULTIPLIER
				}).id(`tfg:vi/lathe/${material.getName()}_to_rod`)
			}
		}

		let boltItem = ChemicalHelper.get(TagPrefix.bolt, material, 1)
		let screwItem = ChemicalHelper.get(TagPrefix.screw, material, 1)

		if (boltItem != null && screwItem != null) {
			event.custom({
				type: 'vintageimprovements:turning',
				ingredients: [boltItem],
				results: [screwItem],
				processingTime: Math.max(1, material.getMass() / 8) * ULV_DURATION_MULTIPLIER
			}).id(`tfg:vi/lathe/${material.getName()}_bolt_to_screw`)
		}

		// #endregion
	})

	// #region Vibrating

	event.custom({
		type: 'vintageimprovements:vibrating',
		ingredients: [{ tag: 'tfc:rock/gravel' }],
		results: [
			{ item: 'minecraft:flint' },
			{ item: 'minecraft:flint', chance: 0.9 },
			{ item: 'minecraft:flint', chance: 0.8 },
			{ item: 'minecraft:flint', chance: 0.6 },
			{ item: 'minecraft:flint', chance: 0.33 },
			{ item: 'minecraft:flint', chance: 0.25 }
		],
		processingTime: 100 * ULV_DURATION_MULTIPLIER
	}).id(`tfg:vi/vibrating/gravel`)

	// #endregion

	// #region Lathe

	event.custom({
		type: 'vintageimprovements:turning',
		ingredients: [{tag: 'forge:glass' }],
		results: [{item: 'tfc:lens' }],
		processingTime: 200
	}).id(`tfg:vi/lathe/lens`)

	// #endregion

	// #region Centrifuge


	// #endregion

	// #region Vacuum

	event.custom({ 
		type: 'vintageimprovements:vacuumizing',
		ingredients: [{ item: 'tfc:glue' }], 
		results: [{ fluid: 'gtceu:glue', amount: 50 }],
		processingTime: 100
	}).id('tfg:vi/vacuumizing/glue')

	// TODO: Remove me when we upgrade Greate and can just slap rubber onto wires again
	event.custom({ 
		type: 'vintageimprovements:vacuumizing',
		ingredients: [{ item: 'gtceu:rubber_dust' }], 
		results: [{ fluid: 'gtceu:rubber', amount: 144 }],
		heatRequirement: "heated",
		processingTime: 100
	}).id('tfg:vi/vacuum/rubber')

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

function generateHammeringRecipeFromItem(event, input, output, blows, anvil) {
	event.custom({
		type: 'vintageimprovements:hammering',
		hammerBlows: blows,
		ingredients: [{ item: input }],
		results: [{ item: output }],
		anvilBlock: `tfc:metal/anvil/${anvil}`
	}).id(`tfg:vi/hammer/${input.replace(/[#:]/g, '_')}_on_${anvil}_anvil`)
}