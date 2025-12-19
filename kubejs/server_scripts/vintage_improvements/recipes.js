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
		{ material: GTMaterials.Silver, blows: STARTING_BLOWS },
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

	const $GreateMaterials = Java.loadClass("electrolyte.greate.registry.GreateMaterials")
	forEachMaterial(material => {
		if (material == $GreateMaterials.AndesiteAlloy)
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
			event.recipes.vintageimprovements.coiling(
				ChemicalHelper.get(TagPrefix.springSmall, material, 2),
				ChemicalHelper.get(TagPrefix.rod, material, 1))
				.processingTime((material.getMass() / 2) * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
				.id(`tfg:vi/coiling/${material.getName()}_small_spring`)
				.springColor(material.getMaterialRGB().toString(16))
		}

		if (material.hasFlag(MaterialFlags.GENERATE_LONG_ROD) && material.hasFlag(MaterialFlags.GENERATE_SPRING)) {
			event.recipes.vintageimprovements.coiling(
				ChemicalHelper.get(TagPrefix.spring, material, 1),
				ChemicalHelper.get(TagPrefix.rodLong, material, 1))
				.processingTime(material.getMass() * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
				.id(`tfg:vi/coiling/${material.getName()}_spring`)
				.springColor(material.getMaterialRGB().toString(16))
		}

		const singleWire = ChemicalHelper.get(TagPrefix.wireGtSingle, material, 2)
		if (singleWire !== null) {
			event.recipes.vintageimprovements.coiling(singleWire, ChemicalHelper.get(TagPrefix.ingot, material, 1))
				.processingTime(material.getMass() * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
				.id(`tfg:vi/coiling/${material.getName()}_single_wire`)
				.springColor(material.getMaterialRGB().toString(16))
		}

		if (material.hasFlag(MaterialFlags.GENERATE_FINE_WIRE)) {
			if (singleWire !== null) {
				event.recipes.vintageimprovements.coiling(
					ChemicalHelper.get(TagPrefix.wireFine, material, 4),
					ChemicalHelper.get(TagPrefix.wireGtSingle, material, 1))
					.processingTime(material.getMass() * 3 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
					.id(`tfg:vi/coiling/${material.getName()}_fine_wire`)
					.springColor(material.getMaterialRGB().toString(16))
			} else {
				event.recipes.vintageimprovements.coiling(
					ChemicalHelper.get(TagPrefix.wireFine, material, 8),
					ChemicalHelper.get(TagPrefix.ingot, material, 1))
					.processingTime(material.getMass() * 3 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
					.id(`tfg:vi/coiling/${material.getName()}_fine_wire`)
					.springColor(material.getMaterialRGB().toString(16))
			}
		}

		// #endregion

		// #region Vibrating

		if (material.hasProperty(PropertyKey.ORE) && material.hasProperty(PropertyKey.GEM)) {

			let highYield = material.hasFlag(MaterialFlags.HIGH_SIFTER_OUTPUT)

			event.recipes.vintageimprovements.vibrating(
				[
					Item.of(ChemicalHelper.get(TagPrefix.gemExquisite, material, 1)).withChance(highYield ? 0.05 : 0.03),
					Item.of(ChemicalHelper.get(TagPrefix.gemFlawless, material, 1)).withChance(highYield ? 0.15 : 0.10),
					Item.of(ChemicalHelper.get(TagPrefix.gem, material, 1)).withChance(highYield ? 0.50 : 0.35),
					Item.of(ChemicalHelper.get(TagPrefix.dustPure, material, 1)).withChance(highYield ? 0.25 : 0.50),
					Item.of(ChemicalHelper.get(TagPrefix.gemFlawed, material, 1)).withChance(highYield ? 0.20 : 0.25),
					Item.of(ChemicalHelper.get(TagPrefix.gemChipped, material, 1)).withChance(highYield ? 0.30 : 0.35)
				], 
				ChemicalHelper.get(TagPrefix.crushedPurified, material, 1))
				.processingTime(200 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
				.id(`tfg:vi/vibrating/${material.getName()}`)
		}

		// #endregion

		// #region Lathe

		if (material.hasFlag(MaterialFlags.GENERATE_ROD) && !material.hasFlag(MaterialFlags.IS_MAGNETIC)) {

			let latheInput = material.hasProperty(PropertyKey.GEM)
				? ChemicalHelper.get(TagPrefix.gem, material, 1)
				: ChemicalHelper.get(TagPrefix.ingot, material, 1)

			if (latheInput !== null) {
				event.recipes.vintageimprovements.polishing(ChemicalHelper.get(TagPrefix.rod, material, 2), latheInput)
					.speedLimits(3)
					.processingTime(material.getMass() * 4 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
					.id(`tfg:vi/lathe/${material.getName()}_to_rod`)
			}

			if (material.hasProperty(PropertyKey.GEM)) {
				event.recipes.create.sandpaper_polishing(ChemicalHelper.get(TagPrefix.rod, material, 1), latheInput)
					.id(`tfg:polishing/${material.getName()}_rod`)
			}
		}

		if (material.hasFlag(MaterialFlags.GENERATE_BOLT_SCREW)) {
			event.recipes.vintageimprovements.polishing(
				ChemicalHelper.get(TagPrefix.screw, material, 1),
				ChemicalHelper.get(TagPrefix.bolt, material, 1))
				.speedLimits(2)
				.processingTime(Math.max(1, material.getMass() / 8) * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
				.id(`tfg:vi/lathe/${material.getName()}_bolt_to_screw`)
		}

		// #endregion
	})


	// #region Vibrating

	event.recipes.vintageimprovements.vibrating([
			Item.of('minecraft:flint'),
			Item.of('minecraft:flint').withChance(0.9),
			Item.of('minecraft:flint').withChance(0.8),
			Item.of('minecraft:flint').withChance(0.6),
			Item.of('minecraft:flint').withChance(0.33),
			Item.of('minecraft:flint').withChance(0.25)
		], '#tfc:rock/gravel')
		.processingTime(100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id(`tfg:vi/vibrating/gravel`)

	global.TFC_STONE_TYPES.forEach(stone => {
		event.recipes.vintageimprovements.vibrating(
			ChemicalHelper.get(TagPrefix.rawOre, GTMaterials.Gold, 1),
			`tfc:deposit/native_gold/${stone}`)
			.processingTime(100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
			.id(`tfg:vi/vibrating/deposits/${stone}_gold`)

		event.recipes.vintageimprovements.vibrating(
			ChemicalHelper.get(TagPrefix.rawOre, GTMaterials.Copper, 1),
			`tfc:deposit/native_copper/${stone}`)
			.processingTime(100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
			.id(`tfg:vi/vibrating/deposits/${stone}_copper`)

		event.recipes.vintageimprovements.vibrating(
			ChemicalHelper.get(TagPrefix.rawOre, GTMaterials.Silver, 1),
			`tfc:deposit/native_silver/${stone}`)
			.processingTime(100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
			.id(`tfg:vi/vibrating/deposits/${stone}_silver`)

		event.recipes.vintageimprovements.vibrating(
			ChemicalHelper.get(TagPrefix.rawOre, GTMaterials.Cassiterite, 1),
			`tfc:deposit/cassiterite/${stone}`)
			.processingTime(100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
			.id(`tfg:vi/vibrating/deposits/${stone}_cassiterite`)
	})

	// #endregion

	// #region Lathe

	event.recipes.vintageimprovements.polishing('tfc:lens', '#forge:glass')
		.speedLimits(1)
		.processingTime(100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id(`tfg:vi/lathe/lens`)

	event.recipes.vintageimprovements.polishing(['#forge:lenses/rose_quartz', '2x #forge:dusts/rose_quartz'], '#forge:exquisite_gems/rose_quartz')
		.speedLimits(1)
		.processingTime(100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id(`tfg:vi/lathe/rose_quartz_lens`)

	event.recipes.vintageimprovements.polishing(['#forge:lenses/diamond', '2x #forge:dusts/diamond'], '#forge:exquisite_gems/diamond')
		.speedLimits(1)
		.processingTime(100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id(`tfg:vi/lathe/diamond_lens`)

	event.recipes.vintageimprovements.polishing(['#forge:lenses/emerald', '2x #forge:dusts/emerald'], '#forge:exquisite_gems/emerald')
		.speedLimits(1)
		.processingTime(100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id(`tfg:vi/lathe/emerald_lens`)

	event.recipes.vintageimprovements.polishing(['#forge:lenses/ruby', '2x #forge:dusts/ruby'], '#forge:exquisite_gems/ruby')
		.speedLimits(1)
		.processingTime(100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id(`tfg:vi/lathe/ruby_lens`)

	event.recipes.vintageimprovements.polishing(['#forge:lenses/sapphire', '2x #forge:dusts/sapphire'], '#forge:exquisite_gems/sapphire')
		.speedLimits(1)
		.processingTime(100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id(`tfg:vi/lathe/sapphire_lens`)

	event.recipes.vintageimprovements.polishing(['#forge:lenses/amethyst', '2x #forge:dusts/amethyst'], '#forge:exquisite_gems/amethyst')
		.speedLimits(1)
		.processingTime(100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id(`tfg:vi/lathe/amethyst_lens`)

	// #endregion

	// #region Curving Press

	// Copied from https://github.com/ThePansmith/Monifactory/blob/15c109298104e0c0b5083b266264bd6c158c6154/kubejs/server_scripts/mods/optionalCompats/create.js#L251
	event.forEachRecipe([{ type: 'gtceu:extruder' }],
		recipe => {
			let r = JSON.parse(recipe.json)

			// LV recipes only
			let EUt = (r.tickInputs && r.tickInputs.eu) ? r.tickInputs.eu[0].content : null;
			
			if (EUt > 32) return
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

			event.recipes.vintageimprovements.curving(output, input_array)
				.head(r.inputs.item[1].content.ingredient.item)
				.id(`tfg:vi/curving/${recipe.getId().split(':')[1]}`)
		}
	)

	// #endregion

	// #region Vacuum

	// Item to fluids: vacuumizing
	// Fluids to item: pressurizing

	event.recipes.vintageimprovements.vacuumizing(Fluid.of('gtceu:glue', 50), 'tfc:glue')
		.heated()
		.processingTime(50 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id('tfg:vi/vacuumizing/glue_melting')

	event.recipes.vintageimprovements.vacuumizing(Fluid.of('gtceu:glue', 100), 'gtceu:sticky_resin')
		.heated()
		.processingTime(100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id('tfg:vi/vacuumizing/glue_from_resin')

	event.recipes.vintageimprovements.vacuumizing(Fluid.of('gtceu:glue', 50), 'tfg:conifer_rosin')
		.heated()
		.processingTime(100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id('tfg:vi/vacuumizing/glue_from_rosin')

	event.recipes.vintageimprovements.vacuumizing(Fluid.of('gtceu:glue', 50), [Fluid.of('tfc:limewater', 500), 'minecraft:bone_meal'])
		.heated()
		.processingTime(50 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id('tfg:vi/vacuumizing/glue_from_bone_meal')

	event.recipes.vintageimprovements.pressurizing('tfc:glue', Fluid.of('gtceu:glue', 50))
		.heated()
		.processingTime(50 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id('tfg:vi/pressurizing/glue_solidifying')

	event.recipes.vintageimprovements.vacuumizing(Fluid.of('gtceu:rubber', 144), '#forge:dusts/rubber')
		.heated()
		.processingTime(50 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id('tfg:vi/vacuum/rubber')

	// Vaccuming rubber wood stuff for latex
	event.recipes.vintageimprovements.vacuumizing(Fluid.of('tfg:latex', 100), '#tfg:latex_logs')
		.processingTime(300 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id('tfg:vi/vacuumizing/latex_from_rubber_logs')

	event.recipes.vintageimprovements.vacuumizing(Fluid.of('tfg:latex', 25), '#tfg:rubber_saplings')
		.processingTime(150 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id('tfg:vi/vacuumizing/latex_from_rubber_sapling')

	event.recipes.vintageimprovements.vacuumizing(Fluid.of('tfg:latex', 10), '#tfg:rubber_leaves')
		.processingTime(75 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id('tfg:vi/vacuumizing/latex_from_rubber_leaves')

	event.recipes.vintageimprovements.vacuumizing(Fluid.of('tfg:latex', 50), ['#tfg:rubber_plants', 'tfc:powder/soda_ash', Fluid.of('tfc:salt_water', 50)])
		.heated()
		.processingTime(20 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id('tfg:vi/vacuumizing/latex_from_rubber_plants')

	// Vulc. latex to raw rubber pulp
	event.recipes.vintageimprovements.pressurizing('#forge:dusts/raw_rubber', Fluid.of('tfg:vulcanized_latex', 250))
		.heated()
		.processingTime(60 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id('tfg:vi/pressurizing/vulcanized_latex_to_raw_rubber')

	// Seed oils
	event.recipes.vintageimprovements.vacuumizing(Fluid.of('gtceu:seed_oil', 350), 'tfg:sunflower_product')
		.processingTime(500 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id('tfg:vi/vacuumizing/sunflower')
	
	event.recipes.vintageimprovements.vacuumizing(Fluid.of('gtceu:seed_oil', 600), 'tfg:rapeseed_product')
		.processingTime(500 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id('tfg:vi/vacuumizing/rapeseed')

	event.recipes.vintageimprovements.vacuumizing(Fluid.of('gtceu:seed_oil', 16), '#forge:seeds')
		.processingTime(50 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id('tfg:vi/vacuumizing/seed_oil')
		
	event.recipes.vintageimprovements.pressurizing('#forge:dusts/sodium_hydroxide', Fluid.of('tfc:lye', 1000))
		.processingTime(150 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.heated()
		.id('tfg:vi/pressurizing/lye')

	// #endregion

	// #region Coiling
	event.recipes.vintageimprovements.coiling('8x tfc:wool_yarn', 'tfc:wool')
		.processingTime(100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id(`tfg:vi/coiling/wool_yarn`)

	event.recipes.vintageimprovements.coiling('8x tfc:wool_yarn', 'tfg:glacian_wool')
		.processingTime(100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id(`tfg:vi/coiling/glacian_wool_yarn`)
		.springColor('FFCCFC')

	event.recipes.vintageimprovements.coiling('16x tfg:phantom_thread', 'minecraft:phantom_membrane')
		.processingTime(100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id(`tfg:vi/coiling/phantom_thread`)
		.springColor('E1C4C4')

	event.recipes.vintageimprovements.coiling('8x firmalife:pineapple_yarn', 'firmalife:pineapple_fiber')
		.processingTime(100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id(`tfg:vi/coiling/pineapple_yarn`)
		.springColor('FFFCCC')

	event.recipes.vintageimprovements.coiling('32x tfg:polycaprolactam_string', ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Polycaprolactam, 1))
		.processingTime(100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id(`tfg:vi/coiling/nylon_string`)
		.springColor('000000')

	// #endregion

	// #region Curving

	event.recipes.vintageimprovements.curving('tfc:ceramic/unfired_brick', 'minecraft:clay_ball')
		.head('gtceu:ingot_extruder_mold')
		.id(`tfg:vi/curving/clay_brick`)

	event.recipes.vintageimprovements.curving('tfc:ceramic/unfired_fire_brick', 'tfc:fire_clay')
		.head('gtceu:ingot_extruder_mold')
		.id(`tfg:vi/curving/fire_brick`)

	event.recipes.vintageimprovements.curving('afc:tree_tap', '#forge:ingots/copper')
		.head('gtceu:bottle_extruder_mold')
		.id(`tfg:vi/curving/tree_tap`)

	event.recipes.vintageimprovements.curving('firmalife:sprinkler', '#forge:plates/copper')
		.head('tfg:small_casing_extruder_mold')
		.id(`tfg:vi/curving/sprinkler`)

	event.recipes.vintageimprovements.curving('tfc:wrought_iron_grill', '#forge:double_plates/wrought_iron')
		.head('tfg:large_casing_extruder_mold')
		.id(`tfg:vi/curving/wrought_iron_grill`)

	// #endregion
}

function generateHammeringRecipe(event, material, blows, anvil) {
	event.recipes.vintageimprovements.hammering(
		ChemicalHelper.get(TagPrefix.plate, material, 1),
		ChemicalHelper.get(TFGTagPrefix.ingotDouble, material, 1))
		.anvilBlock(`tfc:metal/anvil/${anvil}`)
		.hammerBlows(blows)
		.id(`tfg:vi/hammer/${material.getName()}_plate_on_${anvil}_anvil`)
}

function generateHammeringRecipeFromItem(event, input, output, blows, anvil) {
	event.recipes.vintageimprovements.hammering(output, input)
		.anvilBlock(`tfc:metal/anvil/${anvil}`)
		.hammerBlows(blows)
		.id(`tfg:vi/hammer/${input.replace(/[#:]/g, '_')}_on_${anvil}_anvil`)
}
