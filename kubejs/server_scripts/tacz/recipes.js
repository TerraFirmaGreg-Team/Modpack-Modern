"use strict";

const registerTACZRecipes = (event) => {
	event.remove({ mod: 'tacz' })
	event.remove({ mod: 'create_armorer' })
	event.remove({ mod: 'applied_armorer' })
	
	registerTACZMiscRecipes(event)
	registerTACZGunRecipes(event)
	registerTACZAttachRecipes(event)
	registerTACZAmmoRecipes(event)
	
}