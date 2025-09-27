// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGBioreactorRecipes(event) {
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
	function registerBioreactorRecipe(type, id, duration, EUt, text, data) {
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
	const bioreactorRecipe = (id, duration, EUt, data) => registerBioreactorRecipe("bioreactor", id, duration, EUt, "", data)

	/**
	 * @param {string} id 
	 * @param {number} duration 
	 * @param {number} EUt 
	 * @param {FoodRecipeData} data 
	 * @param {string} text
	 */
	const bioreactorRecipeText = (id, duration, EUt, text, data) => registerBioreactorRecipe("bioreactor", id, duration, EUt, text, data)

	/////////////////////////////////////////

	//#region Recipes
	// EXAMPLE
	// bioreactorRecipeText('test/test', 1*10*20, GTValues.VA[GTValues.EV], 'tfg.food_recipe.brining', {
	// 	itemInputs: ['tfc:food/red_apple'],
	// 	fluidInputs: ['#tfc:milks 10'],
	// 	itemOutputs: ['3x tfc:food/green_apple'],
	// 	notConsumable: ['minecraft:bucket'],
	// 	dimension: 'minecraft:overworld',
	// 	perTick: true,
	// 	daytime: true,
	// 	cleanroom: CleanroomType.STERILE_CLEANROOM,
	// 	fluidOutputs: ['minecraft:lava 10'],
	// 	itemOutputProvider: TFC.isp.of('3x tfc:food/green_apple').copyFood().addTrait('firmalife:smoked')
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
		.circuit(4)
		.EUt(GTValues.VA[GTValues.EV]);

	event.recipes.gtceu.assembler('tfg:bioculture_casing')
		.itemInputs('gtceu:plascrete', '#forge:frames/desh')
		.inputFluids(Fluid.of('gtceu:hastelloy_c_276', 288))
		.itemOutputs('tfg:casings/machine_casing_bioculture')
		.duration(8*20)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.HV]);

	event.recipes.gtceu.assembler('tfg:bioculture_glass')
		.itemInputs('#forge:frames/desh', ChemicalHelper.get(TagPrefix.dust, GTMaterials.Iron, 1), ChemicalHelper.get(TagPrefix.dust, GTMaterials.Bismuth, 1))
		.inputFluids(Fluid.of('gtceu:glass', 144))
		.itemOutputs('tfg:casings/machine_casing_bioculture_glass')
		.duration(8*20)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.HV]);

	event.shaped('tfg:bioreactor', [
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
	}).id('tfg:shaped/bioreactor');

	event.shaped('tfg:casings/bioculture_rotor_primary', [
		'CBC',
		'DBD',
		'CAC'
	], {
		A: 'gtceu:ev_rotor_holder',
		B: 'gtceu:tungsten_steel_rotor',
		C: 'gtceu:inert_machine_casing',
		D: ChemicalHelper.get(TagPrefix.ring, GTMaterials.StyreneButadieneRubber, 1)
	}).id('tfg:shaped/bioculture_rotor_primary');

	event.shapeless('tfg:casings/bioculture_rotor_secondary', [
		'tfg:casings/bioculture_rotor_primary'
	]).id('tfg:shapeless/bioculture_rotor_primary_to_secondary')

	event.shapeless('tfg:casings/bioculture_rotor_primary', [
		'tfg:casings/bioculture_rotor_secondary'
	]).id('tfg:shapeless/bioculture_rotor_secondary_to_primary')

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

	event.shapeless('tfg:dirty_dna_syringe', [
		'tfg:filled_dna_syringe'
	]).id('tfg:shapeless/filled_dna_syringe_emptying')

	event.recipes.gtceu.chemical_bath('tfg:ethanol_cleaning_syringe')
		.itemInputs('tfg:dirty_dna_syringe')
		.inputFluids(Fluid.of('gtceu:ethanol', 500))
		.itemOutputs('tfg:clean_dna_syringe')
		.duration(10*20)
		.EUt(GTValues.VA[GTValues.MV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.chemical_bath('tfg:hydrogen_peroxide_cleaning_syringe')
		.itemInputs('tfg:dirty_dna_syringe')
		.inputFluids(Fluid.of('gtceu:hydrogen_peroxide', 200))
		.itemOutputs('tfg:clean_dna_syringe')
		.duration(10*20)
		.EUt(GTValues.VA[GTValues.MV])
		.cleanroom(CleanroomType.CLEANROOM)
	//#endregion
}