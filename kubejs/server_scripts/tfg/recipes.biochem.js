// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGBiochemRecipes(event) {
	const $ISPRecipeLogic = Java.loadClass("su.terrafirmagreg.core.common.data.tfgt.machine.trait.ISPOutputRecipeLogic")
	const $SizedIngredient = Java.loadClass("com.gregtechceu.gtceu.api.recipe.ingredient.SizedIngredient")
	const Sized = (ing, amount) => $SizedIngredient.create(ing, amount)

	/**
	 * @typedef {Object} BioreactorRecipeData
	 * @property {number?} circuit
	 * @property {Internal.GTRecipeComponents$FluidIngredientJS_[]?} fluidInputs
	 * @property {Internal.FluidStackJS[]?} fluidOutputs
	 * @property {(string | [string, Internal.Ingredient])[]?} itemInputs
	 * @property {string[]?} itemOutputs Ingredient outputs - first output is replaced with ISP output if defined
	 * @property {Internal.ItemStackProviderJS?} itemOutputProvider ItemStackProvider which provides the recipe output.
	 * @property {boolean?} daytime
	 * @property {boolean?} perTick
	 * @property {(string | [string, Internal.GTRecipeSchema$GTRecipeJS.dimension])?} dimension
	 * @property {Internal.GTRecipeSchema$GTRecipeJS.cleanroom?} cleanroom CleanroomType
	 * @property {string[]?} notConsumable
	*
	* **NOTE:** TFC Ingredients do not support item counts higher than 1. Do `Sized(TFCIngredient('item:item'), count)` instead of `TFCIngredient('[count]x item:item')`
	*/

	//#region Helper funcs

	/**
	 * @param {"bioreactor"} type 
	 * @param {string} id 
	 * @param {number} duration 
	 * @param {number} EUt 
	 * @param {string} text
	 * @param {BioreactorRecipeData} data 
	 */
	function registerBiochemRecipe(type, id, duration, EUt, text, data) {
		if (data.itemInputs === undefined) data.itemInputs = []
		if (data.itemOutputs === undefined) data.itemOutputs = []
		if (data.fluidInputs === undefined) data.fluidInputs = []
		if (data.fluidOutputs === undefined) data.fluidOutputs = []
		if (data.notConsumable === undefined) data.notConsumable = []
		let gregInputs = [], inputs = []
		let outputFirstIndex = (data.itemOutputProvider === undefined) ? 0 : 1
		data.itemInputs.forEach(item => {
			if (typeof item === "string") {
				gregInputs.push(item)

				const match = item.match(/^(\d+)\s*x\s*/i);
				let count = 1
				if (match) {
					count = parseInt(match[1]);
					item = item.slice(match[0].length);
				}
				inputs.push($SizedIngredient.create(item, count))
			} else {
				gregInputs.push(item[0])
				inputs.push(item[1])
			}
		})

		$ISPRecipeLogic.RegisterRecipeData(`${type  }/${  id}`, inputs, (data.itemOutputProvider === undefined) ? null : data.itemOutputProvider.asCanonClass(), data.itemOutputs.slice(outputFirstIndex).map(i => Item.of(i)))

		let r = event.recipes.gtceu[type](id)
		.duration(duration)
		.EUt(EUt)

		if (data.circuit) r.circuit(data.circuit)
		if (data.daytime) r.daytime(data.daytime)
		if (data.perTick) r.perTick(data.perTick)
		if (data.dimension) r.dimension(data.dimension)
		if (data.cleanroom) r.cleanroom(data.cleanroom)
		if (data.notConsumable.length > 0) r.notConsumable(data.notConsumable)
		if (data.itemOutputs.length > 0) r.itemOutputs(data.itemOutputs)
		if (data.itemInputs.length > 0) r.itemInputs(data.itemInputs)
		if (data.fluidInputs.length > 0) r.inputFluids(data.fluidInputs);
		if (data.fluidOutputs.length > 0) r.outputFluids(data.fluidOutputs);
		if (text !== "") r.addDataString("action", text);

		return r;
	}

	/**
	 * @param {string} id 
	 * @param {number} duration 
	 * @param {number} EUt 
	 * @param {FoodRecipeData} data 
	 */
	const bioreactorRecipe = (id, duration, EUt, data) => registerBiochemRecipe("bioreactor", id, duration, EUt, "", data)

	/**
	 * @param {string} id 
	 * @param {number} duration 
	 * @param {number} EUt 
	 * @param {FoodRecipeData} data 
	 * @param {string} text
	 */
	const bioreactorRecipeText = (id, duration, EUt, text, data) => registerBiochemRecipe("bioreactor", id, duration, EUt, text, data)

	/**
	 * @param {string} id 
	 * @param {number} duration 
	 * @param {number} EUt 
	 * @param {FoodRecipeData} data 
	 */
	const growthChamberRecipe = (id, duration, EUt, data) => registerBiochemRecipe("growth_chamber", id, duration, EUt, "", data)

	/**
	 * @param {string} id 
	 * @param {number} duration 
	 * @param {number} EUt 
	 * @param {FoodRecipeData} data 
	 * @param {string} text
	 */
	const growthChamberRecipeText = (id, duration, EUt, text, data) => registerBiochemRecipe("growth_chamber", id, duration, EUt, text, data)

	/////////////////////////////////////////

	// EXAMPLE
	// growthChamberRecipeText('test/test', 10*60*20, GTValues.VA[GTValues.EV], 'tfg.food_recipe.brining', {
		// itemInputs: ['tfc:food/red_apple','tfc:food/red_apple', '1x tfc:silica_glass_bottle'],
		// fluidInputs: ['#tfc:milks 10'],
		// itemOutputs: ['4x tfc:food/green_apple'],
		// notConsumable: ['gtceu:petri_dish'],
		// dimension: 'minecraft:overworld',
		// perTick: true,
		// daytime: true,
		// cleanroom: CleanroomType.STERILE_CLEANROOM,
		// fluidOutputs: ['minecraft:lava 10'],
		// itemOutputProvider: TFC.isp.of('3x tfc:food/green_apple').copyFood().addTrait('firmalife:smoked')
	// })

	//#region Multiblock Parts
	
	event.recipes.gtceu.assembler('tfg:uv_led')
		.itemInputs('gtceu:phosphorus_wafer', '2x gtceu:smd_resistor')
		.inputFluids(Fluid.of('gtceu:polyethylene', 72))
		.itemOutputs('4x tfg:uv_led')
		.duration(10*20)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.EV]);

	event.recipes.gtceu.assembler('tfg:smd_uv_led')
		.itemInputs('gtceu:phosphorus_wafer', '2x gtceu:advanced_smd_resistor')
		.inputFluids(Fluid.of('gtceu:polyethylene', 72))
		.itemOutputs('16x tfg:smd_uv_led')
		.duration(10*20)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.IV]);

	event.recipes.gtceu.assembler('tfg:uv_casing')
		.itemInputs('gtceu:inert_machine_casing', '16x #tfg:components/uv_leds', '#gtceu:circuits/mv')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
		.itemOutputs('tfg:casings/machine_casing_ultraviolet')
		.duration(8*20)
		.circuit(6)
		.EUt(GTValues.VA[GTValues.EV])
		.addMaterialInfo(true);

	event.recipes.gtceu.assembler('tfg:bioculture_casing')
		.itemInputs('gtceu:plascrete', '#forge:frames/desh')
		.inputFluids(Fluid.of('gtceu:hastelloy_c_276', 288))
		.itemOutputs('tfg:casings/machine_casing_bioculture')
		.duration(8*20)
		.circuit(6)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true);

	event.recipes.gtceu.assembler('tfg:bioculture_glass')
		.itemInputs('#forge:frames/desh', ChemicalHelper.get(TagPrefix.dust, GTMaterials.Iron, 1), ChemicalHelper.get(TagPrefix.dust, GTMaterials.Bismuth, 1))
		.inputFluids(Fluid.of('gtceu:glass', 144))
		.itemOutputs('tfg:casings/machine_casing_bioculture_glass')
		.duration(8*20)
		.circuit(6)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true);

	event.recipes.gtceu.shaped('tfg:bioreactor', [
		'CBC',
		'EAF',
		'CDC'
	], {
		A: 'gtceu:ev_machine_hull',
		B: '#tfg:components/uv_leds',
		C: '#gtceu:circuits/ev',
		D: 'gtceu:aluminium_single_cable',
		E: 'gtceu:ev_electric_pump',
		F: 'gtceu:ev_electric_motor'
	}).addMaterialInfo().id('tfg:shaped/bioreactor');

	event.recipes.gtceu.shaped('tfg:casings/bioculture_rotor_primary', [
		'CBC',
		'DBD',
		'CAC'
	], {
		A: 'gtceu:ev_rotor_holder',
		B: 'gtceu:tungsten_steel_rotor',
		C: 'gtceu:inert_machine_casing',
		D: ChemicalHelper.get(TagPrefix.ring, GTMaterials.StyreneButadieneRubber, 1)
	}).addMaterialInfo().id('tfg:shaped/bioculture_rotor_primary');

	event.shapeless('tfg:casings/bioculture_rotor_secondary', [
		'tfg:casings/bioculture_rotor_primary'
	]).id('tfg:shapeless/bioculture_rotor_primary_to_secondary');

	event.shapeless('tfg:casings/bioculture_rotor_primary', [
		'tfg:casings/bioculture_rotor_secondary'
	]).id('tfg:shapeless/bioculture_rotor_secondary_to_primary');
	
	event.shapeless('tfg:sample_rack', [
		'tfg:lab_equipment',
		ChemicalHelper.get(TagPrefix.frameGt, GTMaterials.StainlessSteel, 1)
	]).id('tfg:shapeless/sample_rack');

	event.recipes.gtceu.shaped('tfg:growth_monitor', [
		'CEC',
		'DBD',
		'CAC'
	], {
		A: 'gtceu:ev_scanner',
		B: 'gtceu:computer_monitor_cover',
		C: ChemicalHelper.get(TagPrefix.plateDense, GTMaterials.TungstenSteel, 1),
		D: '#gtceu:circuits/luv',
		E: '#forge:lenses/amethyst'
	}).addMaterialInfo().id('tfg:shaped/growth_monitor');

	event.recipes.gtceu.assembler('tfg:casings/machine_casing_sterilizing_pipes')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.frameGt, GTMaterials.get('ostrum'), 1),
			ChemicalHelper.get(TagPrefix.pipeQuadrupleFluid, GTMaterials.get('ostrum'), 1),
			Ingredient.of('#tfg:components/uv_leds').withCount(16)
		)
		.inputFluids(Fluid.of('gtceu:borosilicate_glass', 144))
		.itemOutputs(Item.of('tfg:casings/machine_casing_sterilizing_pipes').withCount(2))
		.duration(8*20)
		.circuit(6)
		.EUt(GTValues.VA[GTValues.EV])
		.addMaterialInfo(true);

	event.recipes.gtceu.assembler('tfg:single_itemstack_bus')
		.itemInputs(
			Ingredient.of('gtceu:iv_input_bus'),
			Ingredient.of('gtceu:item_smart_filter'),
			Ingredient.of('#tfg:components/uv_leds').withCount(4)
		)
		.itemOutputs(Item.of('tfg:single_itemstack_bus'))
		.duration(15*20)
		.circuit(6)
		.EUt(GTValues.VA[GTValues.IV])
		.cleanroom(CleanroomType.CLEANROOM)
		.addMaterialInfo(true);

	event.recipes.gtceu.assembly_line('tfg:growth_chamber')
		.itemInputs(
			Ingredient.of('tfg:growth_monitor'),
			Ingredient.of('tfg:lab_equipment').withCount(16),
			Ingredient.of('#gtceu:circuits/luv').withCount(4),
			Ingredient.of('gtceu:iv_electric_pump').withCount(4),
			ChemicalHelper.get(TagPrefix.cableGtSingle, GTMaterials.Tungsten, 8)
		)
		.inputFluids(
			Fluid.of('tfg:cryogenized_fluix', 576*4), 
			Fluid.of('gtceu:residual_radioactive_concoction', 1000*30)
		)
		.itemOutputs('tfg:growth_chamber')
		.duration(1*60*20)
		.EUt(GTValues.VA[GTValues.IV])
		.cleanroom(CleanroomType.CLEANROOM);

	//#endregion

	//#region Lab Equipment
	event.replaceInput({input: 'tfc:bone_needle'}, 'tfc:bone_needle', '#tfc:sewing_needles')

	event.recipes.gtceu.wiremill('tfg:stainless_steel_needle')
		.itemInputs(ChemicalHelper.get(TagPrefix.pipeNormalFluid, GTMaterials.StainlessSteel, 1))
		.itemOutputs(Item.of('tfg:stainless_steel_needle').withNBT({Unbreakable: 1}))
		.duration(2*60*20)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.assembler('tfg:empty_dna_syringe')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.ring, GTMaterials.StyreneButadieneRubber, 2),
			ChemicalHelper.get(TagPrefix.pipeNormalFluid, GTMaterials.Polytetrafluoroethylene, 1),
			ChemicalHelper.get(TagPrefix.rod, GTMaterials.Polytetrafluoroethylene, 1),
			Item.of('tfg:stainless_steel_needle').weakNBT()
		)
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 288))
		.itemOutputs('tfg:empty_dna_syringe')
		.duration(4*60*20)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.EV])
		.cleanroom(CleanroomType.CLEANROOM)
		.addMaterialInfo(true)

	event.shapeless('tfg:dirty_dna_syringe', [
		'tfg:filled_dna_syringe'
	]).id('tfg:shapeless/filled_dna_syringe_emptying')

	event.recipes.gtceu.assembler('tfg:lab_equipment')
		.itemInputs(
			Ingredient.of('tfg:beaker').withCount(2), 
			Ingredient.of('tfg:flask').withCount(8), 
			Ingredient.of('tfg:vial').withCount(16),
			Ingredient.of('gtceu:petri_dish').withCount(16),
			ChemicalHelper.get(TagPrefix.rod, GTMaterials.SamariumMagnetic, 8)
		)
		.itemOutputs(Item.of('tfg:lab_equipment').withCount(4))
		.duration(10*20)
		.EUt(GTValues.VA[GTValues.EV])
		.cleanroom(CleanroomType.CLEANROOM)
		.addMaterialInfo(true);

	event.remove({id: 'gtceu:fluid_solidifier/petri_dish_pbi'});
	event.remove({id: 'gtceu:fluid_solidifier/petri_dish_ptfe'});

	/**
	 * @type {Array<Object>}
	 * @property {string} output - Output
	 * @property {number} fluid_qty - Fluid quantity
	 * @property {string} mold - Mold
	 */
	const lab_casting = [
		{output: 'gtceu:petri_dish', fluid_qty: 144, mold: 'gtceu:cylinder_casting_mold'},
		{output: 'tfg:vial', fluid_qty: 144, mold: 'gtceu:small_pipe_casting_mold'},
		{output: 'tfg:flask', fluid_qty: 288, mold: 'gtceu:normal_pipe_casting_mold'},
		{output: 'tfg:beaker', fluid_qty: 432, mold: 'gtceu:large_pipe_casting_mold'}
	];

	lab_casting.forEach(entry => {
		event.recipes.gtceu.fluid_solidifier(`tfg:lab_casting/${entry.output.replace(':', '_')}`)
			.inputFluids(Fluid.of('gtceu:borosilicate_glass', entry.fluid_qty))
			.notConsumable(entry.mold)
			.itemOutputs(entry.output)
			.duration(Math.max(1, Math.floor(((entry.fluid_qty / 144) * 5) * 20)))
			.EUt(GTValues.VA[GTValues.LV]);
	});

	/**
	 * @type {Array<Object>}
	 * @property {string} input - Input
	 * @property {string} output - Output
	 * @property {number} multiplier - Multiplier
	 * @property {CleanroomType} cleanroom - Cleanroom type
	 */
	const lab_cleaning = [
		{input: 'tfg:dirty_dna_syringe', output: 'tfg:empty_dna_syringe', multiplier: 1, cleanroom: CleanroomType.CLEANROOM},
		{input: 'tfg:dirty_lab_equipment', output: 'tfg:lab_equipment', multiplier: 1, cleanroom: CleanroomType.CLEANROOM}
	];
	lab_cleaning.forEach(entry => {
		sterilizeItem(event, entry.input, entry.output, entry.multiplier, entry.cleanroom);
	});

	//#endregion
	//#region Decellularization

	// Hydrogenation of fatty acids to produce lauryl alcohol.
	event.recipes.gtceu.chemical_reactor('tfg:lauryl_alcohol')
		.inputFluids(
			'#firmalife:oils 1000',
			Fluid.of('gtceu:hydrogen', 2000)
		)
		.notConsumable(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Palladium, 1))
		.outputFluids(Fluid.of('tfg:lauryl_alcohol', 1000))
		.duration(20*20)
		.EUt(GTValues.VA[GTValues.EV]);

	// Direct synthesis of chlorosulfuric acid.
	event.recipes.gtceu.chemical_reactor('tfg:chlorosulfuric_acid')
		.inputFluids(
			Fluid.of('gtceu:sulfur_trioxide', 1000),
			Fluid.of('gtceu:hydrochloric_acid', 1000)
		)
		.outputFluids(Fluid.of('tfg:chlorosulfuric_acid', 1000))
		.duration(10*20)
		.EUt(GTValues.VA[GTValues.HV]);

	// Synthesis of sodium dodecyl sulfate. Chemistry is not accurate since the organic group in lauryl alcohol is unknown here.
	event.recipes.gtceu.chemical_reactor('tfg:sodium_dodecyl_sulfate')
		.inputFluids(
			Fluid.of('tfg:lauryl_alcohol', 1000),
			Fluid.of('tfg:chlorosulfuric_acid', 2000)
		)
		.outputFluids(
			Fluid.of('tfg:sodium_dodecyl_sulfate', 1000),
			Fluid.of('gtceu:sulfur_trioxide', 1000)
		)
		.duration(30*20)
		.EUt(GTValues.VA[GTValues.EV]);

	// Redox reaction to produce sodium hypochlorite.
	event.recipes.gtceu.chemical_reactor('tfg:sodium_hypochlorite')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.SodiumHydroxide, 2)
		)
		.inputFluids(
			Fluid.of('gtceu:chlorine', 2000)
		)
		.outputFluids(
			Fluid.of('tfg:sodium_hypochlorite', 1000),
			Fluid.of('minecraft:water', 1000)
		)
		.itemOutputs(Item.of('gtceu:salt_dust'))
		.duration(10*20)
		.EUt(GTValues.VA[GTValues.HV]);

	// Decellularization of organic material to produce cellulose matrix.
	/**
	 * @type {Array<Object>}
	 * @property {'fluid'|'item'} type - Item or Fluid.
	 * @property {string} id - Item or fluid ID.
	 * @property {number} amount - Amount of items or millibuckets of fluid.
	 */
	const organics = [
		{ type: 'item', id: 'gtceu:bio_chaff', amount: 1 },
		{ type: 'fluid', id: 'gtceu:biomass', amount: 1000 }
	];

	/**
	 * Registers a bioreactor "decellularization" recipes.
	 *
	 * @param {event} event
	 * @param {'fluid'|'item'} organicType - Type of the organic input. Must be either 'fluid' or 'item'.
	 * @param {string} organicId - Registry ID of the organic input.
	 * @param {number} organicAmount - Amount of the organic input.
	 */
	function deccellularizationRecipe(event, organicType, organicId, organicAmount) {
		let recipe = event.recipes.gtceu.bioreactor(`tfg:decellularization/${organicId.replace(':', '_')}`)
			.inputFluids(
				Fluid.of('tfg:sodium_dodecyl_sulfate', 200),
				Fluid.of('gtceu:acetone', 1000),
				Fluid.of('tfg:sodium_hypochlorite', 1000)
			)
			.itemInputs(
				Ingredient.of('tfg:lab_equipment')
			)
			.itemOutputs(
				Item.of('tfg:cellulose_matrix'),
				Item.of('tfg:dirty_lab_equipment')
			)
			.duration(30*20)
			.EUt(GTValues.VA[GTValues.IV])
			.cleanroom(CleanroomType.CLEANROOM)
			.dimension('ad_astra:venus');
			
			if (organicType === 'fluid') {
				recipe.inputFluids(
					Fluid.of(organicId, organicAmount)
				);
			};
			if (organicType === 'item') {
				recipe.itemInputs(
					Ingredient.of(organicId).withCount(organicAmount)
				);
			};
	};

	organics.forEach(organic => 
		deccellularizationRecipe(event, organic.type, organic.id, organic.amount)
	);
		
	//#endregion
	//#region Gram Stain

	// N,N-Dimethylaniline synthesis.
	event.recipes.gtceu.chemical_reactor('tfg:n_n_dimethylaniline')
		.inputFluids(
			Fluid.of('tfg:aniline', 1000),
			Fluid.of('tfg:iodomethane', 2000)
		)
		.outputFluids(
			Fluid.of('tfg:n_n_dimethylaniline', 1000),
			Fluid.of('gtceu:hydrogen_iodide', 2000)
		)
		.duration(20*20)
		.EUt(GTValues.VA[GTValues.EV]);

	// Crystal violet synthesis.
	event.recipes.gtceu.large_chemical_reactor('tfg:crystal_violet')
		.inputFluids(
			Fluid.of('tfg:n_n_dimethylaniline', 3000),
			Fluid.of('gtceu:formaldehyde', 1000),
			Fluid.of('gtceu:hydrochloric_acid', 1000),
			Fluid.of('gtceu:oxygen', 2000)
		)
		.outputFluids(
			Fluid.of('tfg:crystal_violet', 1000),
			Fluid.of('gtceu:distilled_water', 3000)
		)
		.duration(20*20)
		.EUt(GTValues.VA[GTValues.IV]);

	// Crystal violet to dye.
	event.recipes.gtceu.mixer('tfg:crystal_violet_dye')
		.inputFluids(
			Fluid.of('tfg:crystal_violet', 10),
			Fluid.of('minecraft:water', 1000)
		)
		.outputFluids(Fluid.of('tfc:purple_dye', 1000))
		.duration(5*20)
		.EUt(GTValues.VA[GTValues.LV]);

	//Gram stain solution.
	/**
	 * @type {Array<Object>}
	 * @property {string} solvent - Solvent fluid ID.
	 */
	const gramStainSolvents = [
		'gtceu:ethanol',
		'gtceu:acetone'
	];
	gramStainSolvents.forEach(solvent => {
		event.recipes.gtceu.large_chemical_reactor(`tfg:gram_stain_solvent_${solvent.replace(':', '_')}`)
			.inputFluids(
				Fluid.of('tfg:crystal_violet', 1000),
				Fluid.of('tfc:red_dye', 1000),
				Fluid.of(solvent, 1000)
			)
			.itemInputs(
				ChemicalHelper.get(TagPrefix.dust, GTMaterials.Iodine, 1)
			)
			.outputFluids(Fluid.of('tfg:gram_stain', 4000))
			.duration(8*20)
			.EUt(GTValues.VA[GTValues.IV])
			.cleanroom(CleanroomType.CLEANROOM)
			.dimension('ad_astra:venus');
	});
	
	//#endregion
	//#region Triglcerides

	// Butyric acid synthesis.
	event.recipes.gtceu.chemical_reactor('tfg:butyric_acid')
		.inputFluids(
			Fluid.of('gtceu:propene', 2000),
			Fluid.of('gtceu:carbon_monoxide', 6000),
			Fluid.of('gtceu:hydrogen', 12000)
		)
		.outputFluids(
			Fluid.of('tfg:butyric_acid', 3000)
		)
		.duration(10*20)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.EV]);

	// Triglycerides from fat.
	event.recipes.gtceu.vacuum_freezer('tfg:triglyceride_oil_from_fat')
		.inputFluids(
			Fluid.of('gtceu:liquid_carbon_dioxide', 1000)
		)
		.itemInputs(
			Ingredient.of('#tfg:solid_fats')
		)
		.outputFluids(
			Fluid.of('tfg:triglyceride_oil', 2000)
		)
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, 'tfg:cholesterol', 1)
		)
		.duration(20*20)
		.EUt(GTValues.VA[GTValues.IV]);

	// Triglycerides from cell factory.
	bioreactorRecipe('triglyceride_oil_from_smooth_endoplasmic_reticula', 10*20, 1920, {
		fluidInputs: [
			'gtceu:glycerol 1000',
			'tfg:butyric_acid 1000'
		],
		itemInputs: [
			'tfg:smooth_endoplasmic_reticula',
			'tfg:lab_equipment'
		],
		fluidOutputs: [
			Fluid.of('tfg:triglyceride_oil', 2000)
		],
		itemOutputs: [
			'tfg:dirty_lab_equipment'
		],
		cleanroom: CleanroomType.CLEANROOM
	});

	// Lactose from cell factory.
	bioreactorRecipe('lactose_from_rough_endoplasmic_reticula', 10*20, 1920, {
		itemInputs: [
			'tfg:rough_endoplasmic_reticula',
			'tfg:lab_equipment',
			'tfg:cholesterol_dust'
		],
		itemOutputs: [
			'4x gtceu:lactose_dust',
			'tfg:dirty_lab_equipment'
		],
		cleanroom: CleanroomType.CLEANROOM,
		itemOutputProvider: TFC.isp.of('4x gtceu:lactose_dust')
	});

	// Alpha keratin from cell factory.
	bioreactorRecipe('alpha_keratin_from_rough_endoplasmic_reticula', 10*20, 1920, {
		itemInputs: [
			'tfg:rough_endoplasmic_reticula',
			'tfg:lab_equipment'
		],
		fluidInputs: [
			'tfg:proto_growth_medium 1000'
		],
		itemOutputs: [
			'4x tfg:alpha_keratin',
			'tfg:dirty_lab_equipment'
		],
		cleanroom: CleanroomType.CLEANROOM,
		itemOutputProvider: TFC.isp.of('4x tfg:alpha_keratin')
	});

	//#endregion
	//#region Basic Feeder Cells
	
	// Set collagen recipes to require a normal cleanroom instead of sterile.
	/**
	 * @type {Array<Object>}
	 * @property {'string'} recipeId - Collagen recipe ID's.
	 */
	const collagenRecipes = [
		'gtceu:large_chemical_reactor/collagen_from_bone',
		'gtceu:large_chemical_reactor/collagen_from_bone_meal',
		'gtceu:chemical_reactor/collagen_from_bone',
		'gtceu:chemical_reactor/collagen_from_bone_meal'
	];
	collagenRecipes.forEach(recipeEntry => {
		addCleanroom(event, recipeEntry, 'cleanroom')
	});

	// Proto growth medium synthesis.
	event.recipes.gtceu.bioreactor('tfg:proto_growth_medium')
		.inputFluids(
			Fluid.of('gtceu:distilled_water', 1000)
		)
		.itemInputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Calcium, 1),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.SodiumHydroxide, 1),
			ChemicalHelper.get(TagPrefix.dust, 'gtceu:lactose', 1)
		)
		.outputFluids(
			Fluid.of('tfg:proto_growth_medium', 1000)
		)
		.duration(10*20)
		.EUt(GTValues.VA[GTValues.EV])
		.cleanroom(CleanroomType.CLEANROOM);

	// Fibroblast feeder cell synthesis.
	event.recipes.gtceu.bioreactor('tfg:fibroblast_feeder_cells')
		.inputFluids(
			Fluid.of('firmalife:sugar_water', 1000),
			Fluid.of('tfg:mutative_yeast', 1000)
		)
		.itemInputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Collagen, 1),
			Ingredient.of('tfg:lab_equipment')
		)
		.notConsumable(
			Ingredient.of('tfg:filled_dna_syringe')
		)
		.outputFluids(
			Fluid.of('tfg:fibroblast_feeder_cells', 1000)
		)
		.itemOutputs(
			Item.of('tfg:dirty_lab_equipment')
		)
		.duration(1*60*20)
		.EUt(GTValues.VA[GTValues.EV])
		.circuit(1)
		.dimension('ad_astra:venus')
		.cleanroom(CleanroomType.CLEANROOM);

	// Rough endoplasmic reticula synthesis.
	bioreactorRecipe('tfg:rough_endoplasmic_reticula', 1*60*20, GTValues.VA[GTValues.EV], {
		itemInputs: [
			'gtceu:collagen_dust',
			'tfg:lab_equipment'
		],
		fluidInputs: [
			Fluid.of('firmalife:sugar_water', 1000),
			Fluid.of('tfg:mutative_yeast', 1000)
		],
		itemOutputs: [
			'tfg:rough_endoplasmic_reticula',
			'tfg:dirty_lab_equipment'
		],
		notConsumable: [
			'tfg:filled_dna_syringe'
		],
		circuit: 2,
		cleanroom: CleanroomType.CLEANROOM,
		itemOutputProvider: TFC.isp.of('tfg:rough_endoplasmic_reticula').resetFood()
	});

	// Smooth endoplasmic reticula synthesis.
	bioreactorRecipe('tfg:smooth_endoplasmic_reticula', 1*60*20, GTValues.VA[GTValues.EV], {
		itemInputs: [
			'gtceu:collagen_dust',
			'tfg:lab_equipment'
		],
		fluidInputs: [
			Fluid.of('firmalife:sugar_water', 1000),
			Fluid.of('tfg:mutative_yeast', 1000)
		],
		itemOutputs: [
			'tfg:smooth_endoplasmic_reticula',
			'tfg:dirty_lab_equipment'
		],
		notConsumable: [
			'tfg:filled_dna_syringe'
		],
		circuit: 3,
		cleanroom: CleanroomType.CLEANROOM,
		itemOutputProvider: TFC.isp.of('tfg:smooth_endoplasmic_reticula').resetFood()
	});

	//#endregion
}