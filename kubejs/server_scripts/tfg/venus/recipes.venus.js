"use strict";

function registerTFGVenusRecipes(event) {

	// Sample gathering

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


	// Calorite

	event.custom({
		type: "ae2:transform",
		circumstance: {
			type: "fluid",
			// TODO: Change to the fluid inside the alkaline hornfels geodes
			tag: "tfcchannelcasting:mixable"
		},
		ingredients: [
			{
				item: 'arthropocolypse:beetle_fragment'
			},
			{
				item: 'tfg:boron_carbide_dust'
			}
		],
		result: {
			item: 'ad_astra:raw_calorite'
		}
	}).id('tfg:ae2_transform/raw_calorite')

	event.custom({
		type: "ae2:transform",
		circumstance: {
			type: "fluid",
			// TODO: Change to the fluid inside the alkaline hornfels geodes
			tag: "tfcchannelcasting:mixable"
		},
		ingredients: [
			{
				item: 'tfg:tall_stromatolite'
			},
			{
				item: 'tfg:tiny_boron_carbide_dust'
			}
		],
		result: {
			item: 'ad_astra:calorite_nugget'
		}
	}).id('tfg:ae2_transform/tall_stromatolite')

	event.custom({
		type: "ae2:transform",
		circumstance: {
			type: "fluid",
			// TODO: Change to the fluid inside the alkaline hornfels geodes
			tag: "tfcchannelcasting:mixable"
		},
		ingredients: [
			{
				item: 'tfg:rock/raw/stromatolite'
			},
			{
				item: 'tfg:tiny_boron_carbide_dust'
			}
		],
		result: {
			item: 'ad_astra:calorite_nugget'
		}
	}).id('tfg:ae2_transform/raw_stromatolite')

	event.smelting('ad_astra:calorite_ingot', 'ad_astra:raw_calorite')
		.id('tfg:smelting/calorite')


	// Air

	event.recipes.gtceu.centrifuge('tfg:centrifuge_venus_air')
		.inputFluids(Fluid.of('tfg:venus_air', 10000))
		.outputFluids(
			Fluid.of('gtceu:carbon_dioxide', 9200), 
			Fluid.of('gtceu:nitrogen', 3000), 
			Fluid.of('gtceu:sulfur_dioxide', 2000),
			Fluid.of('gtceu:neon', 1000),
			Fluid.of('gtceu:steam', 1000),
			Fluid.of('gtceu:carbon_monoxide', 1000))
		.duration(1600)
		.EUt(GTValues.VA[GTValues.LV])
}