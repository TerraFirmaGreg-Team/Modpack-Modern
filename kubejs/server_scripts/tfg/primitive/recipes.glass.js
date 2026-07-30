"use strict";

function registerTFGGlassRecipes(event) {
    createGlassRecipe(event, 'glass')
	createGlassRecipe(event, 'tinted_glass')

	global.MINECRAFT_DYE_NAMES.forEach(color => {
		createGlassRecipe(event, `${color}_stained_glass`)
	})
}

function createGlassRecipe(event, name) {
	event.recipes.shapeless(`tfg:glass/smooth_${name}`, [ `minecraft:${name}` ]).id(`tfg:shapeless/${name}_to_smooth_${name}`)
	event.recipes.shapeless(`minecraft:${name}`, [ `tfg:glass/smooth_${name}` ]).id(`tfg:shapeless/smooth_${name}_to_${name}`)
}