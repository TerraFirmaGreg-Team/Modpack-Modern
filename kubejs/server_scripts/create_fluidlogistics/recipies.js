// priority: 0
"use strict";

function registerCreateFluidLogisticsRecipes(event) {
    event.remove({
        id: 'fluidlogistics:fluid_packager',
        id: 'fluidlogistics:multi_fluid_tank',
        id: 'fluidlogistics:horizontal_multi_fluid_tank',
        id: 'fluidlogistics:multi_fluid_access_port',
        id: 'fluidlogistics:multi_fluid_access_port_h',
    })

    event.shapeless('fluidlogistics:waterproof_cardboard_block', ['create:cardboard_block', '#forge:wax'])
    event.recipes.create.deploying('fluidlogistics:waterproof_cardboard_block', ['create:cardboard_block', '#forge:wax'])
    event.recipes.create.item_application('fluidlogistics:waterproof_cardboard_block', ['create:cardboard_block', '#forge:wax'])
    
    event.recipes.gtceu.shaped('fluidlogistics:fluid_packager', [
		' A ',
		'BCD',
		' E '
	], {
		A: '#forge:small_gears/red_alloy',
		B: '#forge:springs/wrought_iron',
		C: 'create:copper_casing',
		D: 'fluidlogistics:waterproof_cardboard_block',
		E: 'create:electron_tube'
    })
    
    event.recipes.gtceu.shaped('fluidlogistics:multi_fluid_tank', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: 'gtceu:brass_bolt',
		B: '#forge:tools/screwdrivers',
		C: 'create:brass_sheet',
		D: '#forge:glass_panes',
		E: '#forge:tools/wrenches'
	})

    event.recipes.gtceu.shaped('fluidlogistics:multi_fluid_access_port', [
		' A ',
		' B ',
		' C '
	], {
		A: 'create:copper_sheet',
		B: 'fluidlogistics:multi_fluid_tank',
		C: 'create:electron_tube',
    })

    event.recipes.gtceu.shaped('fluidlogistics:multi_fluid_access_port', [
		' A ',
		' B ',
		' C '
	], {
		A: 'create:copper_sheet',
		B: 'fluidlogistics:horizontal_multi_fluid_tank',
		C: 'create:electron_tube',
	})


}