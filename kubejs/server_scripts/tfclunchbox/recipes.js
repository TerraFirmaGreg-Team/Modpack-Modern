// priority: 0

function registerTFCLunchBoxRecipes(event) {

	event.shaped('tfclunchbox:lunchbox', [
		' CE',
		'ABA',
		'DAD'
	], {
		A: '#forge:plates/sterling_silver',
		B: '#forge:chests/wooden',
		C: '#forge:bolts/brass',
		D: '#forge:screws/wrought_iron',
		E: '#forge:tools/hammers'
	}).id('tfclunchbox:lunchbox')

	event.shaped('tfclunchbox:cooling_lunchbox', [
		' CE',
		'ABA',
		'DAD'
	], {
		A: '#forge:plates/red_steel',
		B: '#forge:chests/wooden',
		C: '#forge:bolts/brass',
		D: '#forge:screws/steel',
		E: '#forge:tools/hammers'
	}).id('tfclunchbox:cooling_lunchbox')

	event.shaped('tfclunchbox:cooling_lunchbox', [
		' C ',
		'ABA'
	], {
		A: '#forge:plates/red_steel',
		B: 'tfclunchbox:lunchbox',
		C: '#forge:tools/hammers'
	}).id('tfclunchbox:upgrade_to_cooling_lunchbox')

	event.remove({ id: 'tfclunchbox:universal_capsule' })
	event.remove({ id: 'tfclunchbox:fill_capsule_with_ice' })

	event.recipes.gtceu.assembler('tfclunchbox:universal_capsule')
		.itemInputs('1x #forge:foils/red_steel', '1x #forge:rings/sterling_silver')
		.itemOutputs('tfclunchbox:universal_capsule')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.canner('tfclunchbox:fill_capsule_with_ice')
		.itemInputs('tfclunchbox:universal_capsule')
		.inputFluids(Fluid.of('gtceu:ice', 144))
		.itemOutputs(Item.of('tfclunchbox:universal_capsule', '{Durability:10}').withName(Text.translate('item.tfclunchbox.universal_capsule.filled')))
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.canner('tfclunchbox:fill_capsule_with_ice_solid')
		.itemInputs('tfclunchbox:universal_capsule', 'minecraft:ice')
		.itemOutputs(Item.of('tfclunchbox:universal_capsule', '{Durability:10}').withName(Text.translate('item.tfclunchbox.universal_capsule.filled')))
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])
}