// priority: 0

const registerTFGRecipes = (event) => {

	// landslide

	event.recipes.tfc.collapse('ad_astra:moon_cobblestone', 'tfg:raw_anorthite')
	event.recipes.tfc.collapse('ad_astra:moon_cobblestone', 'tfg:hardened_anorthite')
	event.recipes.tfc.collapse('create:cut_deepslate', 'tfg:raw_dunite')

	event.recipes.tfc.landslide('ad_astra:moon_cobblestone', 'ad_astra:moon_cobblestone')
	event.recipes.tfc.landslide('ad_astra:moon_sand', 'ad_astra:moon_sand')
}