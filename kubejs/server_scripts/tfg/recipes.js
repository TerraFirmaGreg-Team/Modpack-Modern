/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerTFGRecipes = (event) => {
	
	registerTFGPapermakingRecipes(event)
	registerTFGRockRecipes(event)
	registerTFGCollapseRecipes(event)
	registerTFGMoldRecipes(event)
	registerTFGTerrariumRecipes(event)
	registerTFGMedicineRecipes(event)
	registerTFGMiscellaneousRecipes(event)
	registerTFGSupportRecipes(event)
	registerTFGFishingNetsRecipes(event)
	registerTFGConvertingRecipes(event)

	//Fixes for 2x2 crafts crashing when auto inputting to crafting grid via JEI by padding recipes to 3x3 with empty space.
	//https://github.com/emilyploszaj/emi/issues/942

	event.shaped('waterflasks:iron_flask', [
		'AB ',
		'CD ',
		'   '
	], {
		A: 'waterflasks:iron_flask',
		B: 'waterflasks:bladder',
		C: 'tfc:burlap_cloth',
		D: '#forge:tools/knives'
	}).id('waterflasks:crafting/repair_iron');

	event.shaped('waterflasks:iron_flask', [
		'AB ',
		'CD ',
		'   '
	], {
		A: 'waterflasks:broken_iron_flask',
		B: 'waterflasks:bladder',
		C: 'tfc:burlap_cloth',
		D: '#forge:tools/knives'
	}).id('waterflasks:crafting/repair_broken_iron');
}