// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGBiochemRecipes(event) {
	const $ISPRecipeLogic = Java.loadClass("su.terrafirmagreg.core.common.data.tfgt.machine.trait.ISPOutputRecipeLogic")
	const $SizedIngredient = Java.loadClass("com.gregtechceu.gtceu.api.recipe.ingredient.SizedIngredient")

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

	//#region Recipes
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

	//#endregion
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
		F: 'gtceu:ev_electric_motor',
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
}