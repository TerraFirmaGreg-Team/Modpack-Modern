"use strict";

function registerTFGVenusRecipes(event) {

	event.recipes.create.item_application(
		['tfg:tall_stromatolite', 'tfg:cyanobacteria_sample'],
		['tfg:tall_stromatolite_cyanobacteria', 'gtceu:petri_dish'])
		//.keepHeldItem()
		.id('tfg:item_application/cyanobacteria_manual_only')

	event.recipes.create.item_application(
		['tfg:rock/spike/stromatolite', 'tfg:stromatolite_sample'],
		['tfg:rock/raw/stromatolite', 'gtceu:petri_dish'])
		.id('tfg:item_application/stromatolite_manual_only')

	event.recipes.create.item_application(
		['tfg:geyser_slime_mold_sample'],
		['tfg:slurry_slime_mold', 'gtceu:petri_dish'])
		.id('tfg:item_application/slime_mold_manual_only')

	event.recipes.create.item_application(
		['tfg:fumarole_sample'],
		['tfg:floating_fumarole_colony', 'gtceu:petri_dish'])
		.id('tfg:item_application/fumarole_manual_only')
}