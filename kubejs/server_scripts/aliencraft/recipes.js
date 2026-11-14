// priority: 0
"use strict";

function registerAliencraftRecipes(event) {

	event.recipes.gtceu.canner('tfg:aliencraft_jelly_canister')
		.itemInputs('gtceu:steel_fluid_cell', '#jellies:slime_ball')
		.itemOutputs('aliencraft_kepler:alien_bioenergy_cell')
		.duration(50)
		.EUt(GTValues.VHA[GTValues.HV])

	event.recipes.gtceu.canner('tfg:aliencraft_slimeball_canister')
		.itemInputs('gtceu:steel_fluid_cell', '4x minecraft:slime_ball')
		.itemOutputs('aliencraft_kepler:alien_bioenergy_cell')
		.duration(50)
		.EUt(GTValues.VHA[GTValues.HV])

	event.recipes.gtceu.canner('tfg:aliencraft_jelly_canister_aluminium')
		.itemInputs('gtceu:aluminium_fluid_cell', '#jellies:slime_ball')
		.itemOutputs('2x aliencraft_kepler:alien_bioenergy_cell')
		.duration(50)
		.EUt(GTValues.VHA[GTValues.HV])

	event.recipes.gtceu.canner('tfg:aliencraft_slimeball_canister_aluminium')
		.itemInputs('gtceu:aluminium_fluid_cell', '4x minecraft:slime_ball')
		.itemOutputs('2x aliencraft_kepler:alien_bioenergy_cell')
		.duration(50)
		.EUt(GTValues.VHA[GTValues.HV])

	event.recipes.gtceu.chemical_bath('tfg:rusty_metal_block_1')
		.itemInputs('#createdeco:sheet_metal')
		.inputFluids('#tfc:any_water 150')
		.itemOutputs('aliencraft_kepler:rusty_metal_block_4')
		.duration(30)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.chemical_bath('tfg:rusty_metal_block_2')
		.itemInputs('aliencraft_kepler:rusty_metal_block_4')
		.inputFluids('#tfc:any_water 150')
		.itemOutputs('aliencraft_kepler:rusty_metal_block_2')
		.duration(30)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.chemical_bath('tfg:rusty_metal_block_3')
		.itemInputs('aliencraft_kepler:rusty_metal_block_2')
		.inputFluids('#tfc:any_water 150')
		.itemOutputs('aliencraft_kepler:rusty_metal_block')
		.duration(30)
		.EUt(GTValues.VHA[GTValues.LV])
}