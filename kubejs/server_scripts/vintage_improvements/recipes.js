// priority: 0
"use strict";

function registerVintageImprovementsRecipes(event) {

	event.remove({ mod: 'vintageimprovements' })

	// #region Machines

	event.recipes.gtceu.shaped('vintageimprovements:spring_coiling_machine', [
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
	}).addMaterialInfo().id('tfg:vi/shaped/spring_coiling_machine')

	event.recipes.gtceu.shaped('vintageimprovements:vacuum_chamber', [
		'EBE',
		'DAG',
		'FCF'
	], {
		A: 'gtceu:ulv_machine_casing',
		B: 'greate:steel_mechanical_pump',
		C: 'create:mechanical_piston',
		D: '#forge:springs/wrought_iron',
		E: 'create:electron_tube',
		F: '#forge:plates/black_steel',
		G: 'create:precision_mechanism'
	}).addMaterialInfo().id('tfg:vi/shaped/vacuum_chamber')

	event.recipes.gtceu.shaped('vintageimprovements:vibrating_table', [
		'BCB',
		'DAD',
		'BEB'
	], {
		A: 'gtceu:ulv_machine_hull',
		B: '#forge:springs/wrought_iron',
		C: '#forge:plates/black_steel',
		D: '#gtceu:circuits/ulv',
		E: 'greate:steel_cogwheel'
	}).addMaterialInfo().id('tfg:vi/shaped/vibrating_table')

	event.recipes.create.mechanical_crafting('vintageimprovements:centrifuge', [
		'   A   ',
		'   B   ',
		'  DAD  ',
		'ABACABA',
		'  EAE  ',
		'   B   ',
		'   A   '
	], {
		A: '#forge:plates/treated_wood',
		B: '#forge:rods/long/black_steel',
		C: 'create:andesite_casing',
		D: '#forge:frames/treated_wood',
		E: 'greate:steel_cogwheel'
	}).id('tfg:vi/mechanical_crafting/centrifuge')

	TFGHelpers.registerMaterialInfo('vintageimprovements:centrifuge', { 'black_steel': 1, 'wrought_iron': 3 });

	event.recipes.gtceu.shaped('vintageimprovements:curving_press', [
		'DBD',
		'FAF',
		'CEC'
	], {
		A: 'gtceu:ulv_machine_hull',
		B: 'greate:steel_shaft',
		C: '#forge:rods/steel',
		D: '#gtceu:circuits/ulv',
		E: '#forge:plates/black_steel',
		F: '#forge:springs/wrought_iron'
	}).addMaterialInfo().id('tfg:vi/shaped/curving_press')

	event.shaped('vintageimprovements:helve_hammer', [
		'F A',
		'BBE',
		'C D'
	], {
		A: '#tfg:any_bronze_frame',
		B: '#tfg:hardwood',
		C: '#tfg:any_iron_double_ingot',
		D: 'greate:andesite_alloy_cogwheel',
		E: '#minecraft:planks',
		F: '#forge:tools/hammers'
	}).id('tfg:vi/shaped/helve_hammer')

	TFGHelpers.registerMaterialInfo('vintageimprovements:helve_hammer', { 'iron': 2 });

	event.shaped('vintageimprovements:grinder_belt', [
		'AAA',
		'CBC'
	], {
		A: 'createaddition:diamond_grit_sandpaper',
		B: 'greate:rubber_belt_connector',
		C: 'tfc:glue'
	}).id('tfg:vi/shaped/grinder_belt')

	event.recipes.gtceu.shaped('vintageimprovements:belt_grinder', [
		'GBG',
		'EAF',
		'DCD'
	], {
		A: 'gtceu:ulv_machine_hull',
		B: 'vintageimprovements:grinder_belt',
		C: 'greate:steel_cogwheel',
		D: '#gtceu:circuits/ulv',
		E: 'create:precision_mechanism',
		F: 'minecraft:diamond',
		G: '#forge:rods/black_steel'
	}).addMaterialInfo().id('tfg:vi/shaped/belt_grinder')

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
		.duration(20 * 20)
		.EUt(20)
		.addMaterialInfo(true)

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
		{ material: GTMaterials.SterlingSilver, blows: STARTING_BLOWS },
		{ material: GTMaterials.Tin, blows: STARTING_BLOWS },
		{ material: GTMaterials.Lead, blows: STARTING_BLOWS }
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
	HAMMERING_MATERIALS.push({ material: GTMaterials.Potin, blows: STARTING_BLOWS })

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
	HAMMERING_MATERIALS.push({ material: GTMaterials.Invar, blows: STARTING_BLOWS })
	HAMMERING_MATERIALS.push({ material: GTMaterials.Cobalt, blows: STARTING_BLOWS })
	HAMMERING_MATERIALS.push({ material: GTMaterials.CobaltBrass, blows: STARTING_BLOWS })
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


	forEachMaterial(material => {
		if (material == GTMaterials.get("andesite_alloy"))
			return;

		const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);
		if (ingotItem !== null && ingotItem.hasTag('c:hidden_from_recipe_viewers'))
			return;

		const gemItem = ChemicalHelper.get(TagPrefix.gem, material, 1);
		if (gemItem !== null && gemItem.hasTag('c:hidden_from_recipe_viewers'))
			return;

		if (ingotItem === null && gemItem === null)
			return;

		// #region Coiling

		if (material.hasFlag(MaterialFlags.GENERATE_ROD) && material.hasFlag(MaterialFlags.GENERATE_SPRING_SMALL)) {
			event.custom({
				type: 'vintageimprovements:coiling',
				ingredients: [ChemicalHelper.get(TagPrefix.rod, material, 1)],
				results: [ChemicalHelper.get(TagPrefix.springSmall, material, 2)],
				processingTime: (material.getMass() / 2) * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
			}).id(`tfg:vi/coiling/${material.getName()}_small_spring`)
		}

		if (material.hasFlag(MaterialFlags.GENERATE_LONG_ROD) && material.hasFlag(MaterialFlags.GENERATE_SPRING)) {
			event.custom({
				type: 'vintageimprovements:coiling',
				ingredients: [ChemicalHelper.get(TagPrefix.rodLong, material, 1)],
				results: [ChemicalHelper.get(TagPrefix.spring, material, 1)],
				processingTime: material.getMass() * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
			}).id(`tfg:vi/coiling/${material.getName()}_spring`)
		}

		const singleWire = ChemicalHelper.get(TagPrefix.wireGtSingle, material, 2)
		if (singleWire !== null) {
			event.custom({
				type: 'vintageimprovements:coiling',
				ingredients: [ChemicalHelper.get(TagPrefix.ingot, material, 1)],
				results: [singleWire],
				processingTime: material.getMass() * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
			}).id(`tfg:vi/coiling/${material.getName()}_single_wire`)
		}

		if (material.hasFlag(MaterialFlags.GENERATE_FINE_WIRE)) {
			if (singleWire !== null) {
				event.custom({
					type: 'vintageimprovements:coiling',
					ingredients: [ChemicalHelper.get(TagPrefix.wireGtSingle, material, 1)],
					results: [ChemicalHelper.get(TagPrefix.wireFine, material, 4)],
					processingTime: material.getMass() * 3 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
				}).id(`tfg:vi/coiling/${material.getName()}_fine_wire`)
			} else {
				event.custom({
					type: 'vintageimprovements:coiling',
					ingredients: [ChemicalHelper.get(TagPrefix.ingot, material, 1)],
					results: [ChemicalHelper.get(TagPrefix.wireFine, material, 8)],
					processingTime: material.getMass() * 3 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
				}).id(`tfg:vi/coiling/${material.getName()}_fine_wire`)
			}
		}

		// #endregion

		// #region Vibrating

		if (material.hasProperty(PropertyKey.ORE) && material.hasProperty(PropertyKey.GEM)) {

			let highYield = material.hasFlag(MaterialFlags.HIGH_SIFTER_OUTPUT)

			// aaaaargh I hate these custom type recipes
			let gem = `gtceu:${material.getName()}_gem`;
			if (material === GTMaterials.Coal)
				gem = 'minecraft:coal'
			else if (material === GTMaterials.Diamond)
				gem = 'minecraft:diamond'
			else if (material === GTMaterials.Emerald)
				gem = 'minecraft:emerald'
			else if (material === GTMaterials.Lapis)
				gem = 'minecraft:lapis_lazuli'
			else if (material === GTMaterials.NetherQuartz)
				gem = 'minecraft:quartz'
			else if (material === GTMaterials.Amethyst)
				gem = 'minecraft:amethyst_shard'
			else if (material === GTMaterials.CertusQuartz)
				gem = 'ae2:certus_quartz_crystal'
			else if (material === TFGHelpers.getMaterial('rose_quartz'))
				gem = 'create:rose_quartz'

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
				processingTime: 200 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
			}).id(`tfg:vi/vibrating/${material.getName()}`)
		}

		// #endregion

		// #region Lathe

		if (material.hasFlag(MaterialFlags.GENERATE_ROD) && !material.hasFlag(MaterialFlags.IS_MAGNETIC)) {

			let latheInput = material.hasProperty(PropertyKey.GEM)
				? ChemicalHelper.get(TagPrefix.gem, material, 1)
				: ChemicalHelper.get(TagPrefix.ingot, material, 1)

			if (latheInput !== null) {
				event.custom({
					type: 'vintageimprovements:polishing',
					ingredients: [latheInput],
					results: [ChemicalHelper.get(TagPrefix.rod, material, 2)],
					speed_limits: 3,
					processingTime: material.getMass() * 4 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
				}).id(`tfg:vi/lathe/${material.getName()}_to_rod`)
			}

			if (material.hasProperty(PropertyKey.GEM)) {
				event.recipes.create.sandpaper_polishing(ChemicalHelper.get(TagPrefix.rod, material, 1), latheInput)
					.id(`tfg:polishing/${material.getName()}_rod`)
			}
		}

		if (material.hasFlag(MaterialFlags.GENERATE_BOLT_SCREW)) {
			event.custom({
				type: 'vintageimprovements:polishing',
				ingredients: [ChemicalHelper.get(TagPrefix.bolt, material, 1)],
				results: [ChemicalHelper.get(TagPrefix.screw, material, 1)],
				speed_limits: 2,
				processingTime: Math.max(1, material.getMass() / 8) * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
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
		processingTime: 100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
	}).id(`tfg:vi/vibrating/gravel`)

	global.TFC_STONE_TYPES.forEach(stone => {
		event.custom({
			type: 'vintageimprovements:vibrating',
			ingredients: [{ item: `tfc:deposit/native_gold/${stone}` }],
			results: [ChemicalHelper.get(TagPrefix.rawOre, GTMaterials.Gold, 1)],
			processingTime: 100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
		}).id(`tfg:vi/vibrating/deposits/${stone}_gold`)

		event.custom({
			type: 'vintageimprovements:vibrating',
			ingredients: [{ item: `tfc:deposit/native_copper/${stone}` }],
			results: [ChemicalHelper.get(TagPrefix.rawOre, GTMaterials.Copper, 1)],
			processingTime: 100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
		}).id(`tfg:vi/vibrating/deposits/${stone}_copper`)

		event.custom({
			type: 'vintageimprovements:vibrating',
			ingredients: [{ item: `tfc:deposit/native_silver/${stone}` }],
			results: [ChemicalHelper.get(TagPrefix.rawOre, GTMaterials.Silver, 1)],
			processingTime: 100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
		}).id(`tfg:vi/vibrating/deposits/${stone}_silver`)

		event.custom({
			type: 'vintageimprovements:vibrating',
			ingredients: [{ item: `tfc:deposit/cassiterite/${stone}` }],
			results: [ChemicalHelper.get(TagPrefix.rawOre, GTMaterials.Cassiterite, 1)],
			processingTime: 100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
		}).id(`tfg:vi/vibrating/deposits/${stone}_cassiterite`)
	})

	// #endregion

	// #region Lathe

	event.custom({
		type: 'vintageimprovements:polishing',
		ingredients: [{ tag: 'forge:glass' }],
		results: [{ item: 'tfc:lens' }],
		speed_limits: 1,
		processingTime: 100
	}).id(`tfg:vi/lathe/lens`)

	event.custom({
		type: 'vintageimprovements:polishing',
		ingredients: [{ tag: 'forge:exquisite_gems/rose_quartz' }],
		results: [{ item: 'gtceu:rose_quartz_lens' }, { item: 'gtceu:rose_quartz_dust', count: 2 }],
		speed_limits: 1,
		processingTime: 100
	}).id(`tfg:vi/lathe/rose_quartz_lens`)

	event.custom({
		type: 'vintageimprovements:polishing',
		ingredients: [{ tag: 'forge:exquisite_gems/diamond' }],
		results: [{ item: 'gtceu:diamond_lens' }, { item: 'gtceu:diamond_dust', count: 2 }],
		speed_limits: 1,
		processingTime: 100
	}).id(`tfg:vi/lathe/diamond_lens`)

	event.custom({
		type: 'vintageimprovements:polishing',
		ingredients: [{ tag: 'forge:exquisite_gems/emerald' }],
		results: [{ item: 'gtceu:emerald_lens' }, { item: 'gtceu:emerald_dust', count: 2 }],
		speed_limits: 1,
		processingTime: 100
	}).id(`tfg:vi/lathe/emerald_lens`)

	event.custom({
		type: 'vintageimprovements:polishing',
		ingredients: [{ tag: 'forge:exquisite_gems/ruby' }],
		results: [{ item: 'gtceu:ruby_lens' }, { item: 'gtceu:ruby_dust', count: 2 }],
		speed_limits: 1,
		processingTime: 100
	}).id(`tfg:vi/lathe/ruby_lens`)

	event.custom({
		type: 'vintageimprovements:polishing',
		ingredients: [{ tag: 'forge:exquisite_gems/sapphire' }],
		results: [{ item: 'gtceu:sapphire_lens' }, { item: 'gtceu:sapphire_dust', count: 2 }],
		speed_limits: 1,
		processingTime: 100
	}).id(`tfg:vi/lathe/sapphire_lens`)

	event.custom({
		type: 'vintageimprovements:polishing',
		ingredients: [{ tag: 'forge:exquisite_gems/amethyst' }],
		results: [{ item: 'gtceu:amethyst_lens' }, { item: 'gtceu:amethyst_dust', count: 2 }],
		speed_limits: 1,
		processingTime: 100
	}).id(`tfg:vi/lathe/amethyst_lens`)

	// #endregion

	// #region Curving Press

	// Copied from https://github.com/ThePansmith/Monifactory/blob/15c109298104e0c0b5083b266264bd6c158c6154/kubejs/server_scripts/mods/optionalCompats/create.js#L251
	event.forEachRecipe([{ type: 'gtceu:extruder' }],
		recipe => {
			let r = JSON.parse(recipe.json)

			// LV recipes only
			let EUt = (r.tickInputs && r.tickInputs.eu) ? r.tickInputs.eu[0].content : null;
			
			if (!(EUt <= 32)) return
			// Skip this one
			if (r.outputs.item[0].content.ingredient.item === "gtceu:nan_certificate") return
			// Skip glass too
			if (r.inputs.item[0].content.ingredient.item === "gtceu:glass_dust") return
			// And this
			if (r.inputs.item[0].content.ingredient.tag === "#forge:ingots/damascus_steel") return

			let input_array = [];
			for (let i = 0; i < r.inputs.item[0].content.count; i++) {
				input_array.push(r.inputs.item[0].content.ingredient);
			}

			let output = r.outputs.item[0].content.ingredient;
			output.count = r.outputs.item[0].content.count;

			event.custom({
				type: 'vintageimprovements:curving',
				ingredients: input_array,
				itemAsHead: r.inputs.item[1].content.ingredient.item,
				results: [output],
				processingTime: r.duration * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
			}).id(`tfg:vi/curving/${recipe.getId().split(':')[1]}`)
		}
	)

	// #endregion

	// #region Vacuum

	// Item to fluids: vacuumizing
	// Fluids to item: pressurizing

	event.custom({
		type: 'vintageimprovements:vacuumizing',
		ingredients: [{ item: 'tfc:glue' }],
		results: [{ fluid: 'gtceu:glue', amount: 50 }],
		heatRequirement: "heated",
		processingTime: 100
	}).id('tfg:vi/vacuumizing/glue_melting')

	event.custom({
		type: 'vintageimprovements:vacuumizing',
		ingredients: [{ item: 'gtceu:sticky_resin' }],
		results: [{ fluid: 'gtceu:glue', amount: 100 }],
		heatRequirement: "heated",
		processingTime: 200
	}).id('tfg:vi/vacuumizing/glue_from_resin')

	event.custom({
		type: 'vintageimprovements:vacuumizing',
		ingredients: [{ item: 'tfg:conifer_rosin' }],
		results: [{ fluid: 'gtceu:glue', amount: 50 }],
		heatRequirement: "heated",
		processingTime: 200
	}).id('tfg:vi/vacuumizing/glue_from_rosin')

	event.custom({
		type: 'vintageimprovements:vacuumizing',
		ingredients: [{ item: 'minecraft:bone_meal' }, { fluid: 'tfc:limewater', amount: 500 }],
		results: [{ fluid: 'gtceu:glue', amount: 50 }],
		heatRequirement: "heated",
		processingTime: 100
	}).id('tfg:vi/vacuumizing/glue_from_bone_meal')

	event.custom({
		type: 'vintageimprovements:pressurizing',
		ingredients: [{ fluid: 'gtceu:glue', amount: 50 }],
		results: [{ item: 'tfc:glue' }],
		processingTime: 100
	}).id('tfg:vi/pressurizing/glue_solidifying')

	event.custom({
		type: 'vintageimprovements:vacuumizing',
		ingredients: [{ item: 'gtceu:rubber_dust' }],
		results: [{ fluid: 'gtceu:rubber', amount: 144 }],
		heatRequirement: "heated",
		processingTime: 100
	}).id('tfg:vi/vacuum/rubber')

	// Vaccuming rubber wood stuff for latex
	event.custom({
		type: 'vintageimprovements:vacuumizing',
		ingredients: [{ tag: 'tfg:latex_logs' }],
		results: [{ fluid: 'tfg:latex', amount: 100 }],
		processingTime: 600
	}).id('tfg:vi/vacuumizing/latex_from_rubber_logs')

	event.custom({
		type: 'vintageimprovements:vacuumizing',
		ingredients: [{ tag: 'tfg:rubber_saplings' }],
		results: [{ fluid: 'tfg:latex', amount: 25 }],
		processingTime: 300
	}).id('tfg:vi/vacuumizing/latex_from_rubber_sapling')

	event.custom({
		type: 'vintageimprovements:vacuumizing',
		ingredients: [{ tag: 'tfg:rubber_leaves' }],
		results: [{ fluid: 'tfg:latex', amount: 10 }],
		processingTime: 150
	}).id('tfg:vi/vacuumizing/latex_from_rubber_leaves')

	event.custom({
		type: 'vintageimprovements:vacuumizing',
		ingredients: [{ tag: 'tfg:rubber_plants' }, { item: 'tfc:powder/soda_ash' }, { fluid: 'tfc:salt_water', amount: 50 }],
		results: [{ fluid: 'tfg:latex', amount: 50 }],
		heatRequirement: "heated",
		processingTime: 40
	}).id('tfg:vi/vacuumizing/latex_from_rubber_plants')

	// Vulc. latex to raw rubber pulp
	event.custom({
		type: 'vintageimprovements:pressurizing',
		ingredients: [{ fluid: 'tfg:vulcanized_latex', amount: 250 }],
		results: [{ item: 'gtceu:raw_rubber_dust' }],
		heatRequirement: "heated",
		processingTime: 120
	}).id('tfg:vi/pressurizing/vulcanized_latex_to_raw_rubber')

	// Seed oils
	event.custom({
		type: 'vintageimprovements:vacuumizing',
		ingredients: [{ item: 'tfg:sunflower_product' }],
		results: [{ fluid: 'gtceu:seed_oil', amount: 350 }],
		processingTime: 1000
	}).id('tfg:vi/vacuumizing/sunflower')

	event.custom({
		type: 'vintageimprovements:vacuumizing',
		ingredients: [{ item: 'tfg:rapeseed_product' }],
		results: [{ fluid: 'gtceu:seed_oil', amount: 600 }],
		processingTime: 1000
	}).id('tfg:vi/vacuumizing/rapeseed')

	event.custom({
		type: 'vintageimprovements:vacuumizing',
		ingredients: [{ tag: 'forge:seeds' }],
		results: [{ fluid: 'gtceu:seed_oil', amount: 16 }],
		processingTime: 100
	}).id('tfg:vi/vacuumizing/seed_oil')

	event.custom({
		type: 'vintageimprovements:pressurizing',
		ingredients: [{ fluid: 'tfc:lye', amount: 1000 }],
		results: [{ item: 'gtceu:sodium_hydroxide_dust' }],
		heatRequirement: "heated",
		processingTime: 300
	}).id('tfg:vi/pressurizing/lye')

	// #endregion

	// #region Coiling

	event.custom({
		type: 'vintageimprovements:coiling',
		ingredients: [{ item: 'tfc:wool' }],
		results: [{ item: 'tfc:wool_yarn', count: 8 }],
		processingTime: 100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
	}).id(`tfg:vi/coiling/wool_yarn`)

	event.custom({
		type: 'vintageimprovements:coiling',
		ingredients: [{ item: 'tfg:glacian_wool' }],
		results: [{ item: 'tfc:wool_yarn', count: 8 }],
		processingTime: 100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
	}).id(`tfg:vi/coiling/glacian_wool_yarn`)

	event.custom({
		type: 'vintageimprovements:coiling',
		ingredients: [{ item: 'minecraft:phantom_membrane' }],
		results: [{ item: 'tfg:phantom_thread', count: 16 }],
		processingTime: 100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
	}).id(`tfg:vi/coiling/phantom_thread`)

	event.custom({
		type: 'vintageimprovements:coiling',
		ingredients: [{ item: 'firmalife:pineapple_fiber' }],
		results: [{ item: 'firmalife:pineapple_yarn', count: 8 }],
		processingTime: 100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
	}).id(`tfg:vi/coiling/pineapple_yarn`)

	event.custom({
		type: 'vintageimprovements:coiling',
		ingredients: [ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Polycaprolactam, 1)],
		results: [{ item: 'tfg:polycaprolactam_string', count: 32 }],
		processingTime: 100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
	}).id(`tfg:vi/coiling/nylon_string`)

	// #endregion

	// #region Curving

	event.custom({
		type: 'vintageimprovements:curving',
		ingredients: [{ item: 'minecraft:clay_ball' }],
		itemAsHead: 'gtceu:ingot_extruder_mold',
		results: [{ item: 'tfc:ceramic/unfired_brick' }],
		processingTime: 50 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
	}).id(`tfg:vi/curving/clay_brick`)

	event.custom({
		type: 'vintageimprovements:curving',
		ingredients: [{ item: 'tfc:fire_clay' }],
		itemAsHead: 'gtceu:ingot_extruder_mold',
		results: [{ item: 'tfc:ceramic/unfired_fire_brick' }],
		processingTime: 50 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
	}).id(`tfg:vi/curving/fire_brick`)

	event.custom({
		type: 'vintageimprovements:curving',
		ingredients: [{ tag: 'forge:ingots/copper' }],
		itemAsHead: 'gtceu:bottle_extruder_mold',
		results: [{ item: 'afc:tree_tap' }],
		processingTime: 50 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
	}).id(`tfg:vi/curving/tree_tap`)

	event.custom({
		type: 'vintageimprovements:curving',
		ingredients: [{ tag: 'forge:plates/copper' }],
		itemAsHead: 'tfg:small_casing_extruder_mold',
		results: [{ item: 'firmalife:sprinkler' }],
		processingTime: 50 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
	}).id(`tfg:vi/curving/sprinkler`)

	event.custom({
		type: 'vintageimprovements:curving',
		ingredients: [{ tag: 'forge:double_plates/wrought_iron' }],
		itemAsHead: 'tfg:large_casing_extruder_mold',
		results: [{ item: 'tfc:wrought_iron_grill' }],
		processingTime: 50 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
	}).id(`tfg:vi/curving/wrought_iron_grill`)

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